const completion: Fig.Spec = {
  name: "automanage",
  description: "Manage Automanage",
  subcommands: [
    {
      name: "best-practice",
      description: "Manage Automanage best practice",
      subcommands: [
        {
          name: "list",
          description: "List Automanage best practices",
        },
        {
          name: "show",
          description: "Get information about a Automanage best practice",
          options: [
            {
              name: "--best-practice-name",
              description: "The Automanage best practice name",
              args: { name: "best-practice-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "version",
          description: "Manage Automanage best practice version",
          subcommands: [
            {
              name: "list",
              description: "List Automanage best practice versions",
              options: [
                {
                  name: "--best-practice-name",
                  description: "The Automanage best practice name",
                  args: { name: "best-practice-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description:
                "Get information about a Automanage best practice version",
              options: [
                {
                  name: "--best-practice-name",
                  description: "The Automanage best practice name",
                  args: { name: "best-practice-name" },
                  isRequired: true,
                },
                {
                  name: "--version-name",
                  description: "The Automanage best practice version name",
                  args: { name: "version-name" },
                  isRequired: true,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "configuration-profile",
      description: "Manage configuration profile",
      subcommands: [
        {
          name: "create",
          description: "Create a configuration profile",
          options: [
            {
              name: ["--configuration-profile-name", "--name", "-n"],
              description: "Name of the configuration profile",
              args: { name: "configuration-profile-name" },
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
              name: "--configuration",
              description:
                "Configuration dictionary of the configuration profile. Support json-file and yaml-file",
              args: { name: "configuration" },
            },
            {
              name: ["--location", "-l"],
              description:
                "The geo-location where the resource lives When not specified, the location of the resource group will be used",
              args: { name: "location" },
            },
            {
              name: "--tags",
              description:
                'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tags" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a configuration profile",
          options: [
            {
              name: ["--configuration-profile-name", "--name", "-n"],
              description: "Name of the configuration profile",
              args: { name: "configuration-profile-name" },
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
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "List configuration profiles within a subscription",
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
          description: "Get information about a configuration profile",
          options: [
            {
              name: ["--configuration-profile-name", "--name", "-n"],
              description: "The configuration profile name",
              args: { name: "configuration-profile-name" },
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
          description: "Update a configuration profile",
          options: [
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: "--configuration",
              description:
                "Configuration dictionary of the configuration profile. Support json-file and yaml-file",
              args: { name: "configuration" },
            },
            {
              name: ["--configuration-profile-name", "--name", "-n"],
              description: "The configuration profile name",
              args: { name: "configuration-profile-name" },
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
                'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tags" },
            },
          ],
        },
        {
          name: "version",
          description: "Manage configuration profile version",
          subcommands: [
            {
              name: "create",
              description: "Create a configuration profile version",
              options: [
                {
                  name: ["--configuration-profile-name", "--profile-name"],
                  description: "Name of the configuration profile",
                  args: { name: "configuration-profile-name" },
                  isRequired: true,
                },
                {
                  name: ["--version-name", "--name", "-n"],
                  description: "The configuration profile version name",
                  args: { name: "version-name" },
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
                  name: "--configuration",
                  description:
                    "Configuration dictionary of the configuration profile. Support json-file and yaml-file",
                  args: { name: "configuration" },
                },
                {
                  name: ["--location", "-l"],
                  description:
                    "The geo-location where the resource lives When not specified, the location of the resource group will be used",
                  args: { name: "location" },
                },
                {
                  name: "--tags",
                  description:
                    'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "tags" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a configuration profile version",
              options: [
                {
                  name: ["--configuration-profile-name", "--profile-name"],
                  description: "Name of the configuration profile",
                  args: { name: "configuration-profile-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--version-name", "--name", "-n"],
                  description: "The configuration profile version name",
                  args: { name: "version-name" },
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
                "List configuration profile versions for a configuration profile",
              options: [
                {
                  name: ["--configuration-profile-name", "--profile-name"],
                  description: "Name of the configuration profile",
                  args: { name: "configuration-profile-name" },
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
                "Get information about a configuration profile version",
              options: [
                {
                  name: ["--configuration-profile-name", "--profile-name"],
                  description: "The configuration profile name",
                  args: { name: "configuration-profile-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--version-name", "--name", "-n"],
                  description: "The configuration profile version name",
                  args: { name: "version-name" },
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
              description: "Update a configuration profile version",
              options: [
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add" },
                },
                {
                  name: "--configuration",
                  description:
                    "Configuration dictionary of the configuration profile. Support json-file and yaml-file",
                  args: { name: "configuration" },
                },
                {
                  name: ["--configuration-profile-name", "--profile-name"],
                  description: "The configuration profile name",
                  args: { name: "configuration-profile-name" },
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
                  name: ["--version-name", "--name", "-n"],
                  description: "The configuration profile version name",
                  args: { name: "version-name" },
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
                    'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "tags" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "configuration-profile-assignment",
      description: "Manage configuration profile assignment",
      subcommands: [
        {
          name: "list",
          description:
            "List configuration profile assignments under a given subscription",
          options: [
            {
              name: "--cluster-name",
              description: "The name of the Arc machine",
              args: { name: "cluster-name" },
            },
            {
              name: "--machine-name",
              description: "The name of the Arc machine",
              args: { name: "machine-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--vm-name",
              description: "The name of the virtual machine",
              args: { name: "vm-name" },
            },
          ],
        },
        {
          name: "arc",
          description:
            "Manage association between an ARC machine and Automanage configuration profile",
          subcommands: [
            {
              name: "create",
              description:
                "Create an association between an ARC machine and Automanage configuration profile",
              options: [
                {
                  name: [
                    "--configuration-profile-assignment-name",
                    "--name",
                    "-n",
                  ],
                  description:
                    "Name of the configuration profile assignment. Only default is supported",
                  args: { name: "configuration-profile-assignment-name" },
                  isRequired: true,
                },
                {
                  name: "--machine-name",
                  description: "The name of the Arc machine",
                  args: { name: "machine-name" },
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
                  name: "--configuration-profile",
                  description:
                    "The Automanage configurationProfile ARM Resource URI",
                  args: { name: "configuration-profile" },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete an association between an ARC machine and Automanage configuration profile",
              options: [
                {
                  name: [
                    "--configuration-profile-assignment-name",
                    "--name",
                    "-n",
                  ],
                  description: "Name of the configuration profile assignment",
                  args: { name: "configuration-profile-assignment-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--machine-name",
                  description: "The name of the Arc machine",
                  args: { name: "machine-name" },
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
                "Get information about an association between an ARC machine and Automanage configuration profile",
              options: [
                {
                  name: [
                    "--configuration-profile-assignment-name",
                    "--name",
                    "-n",
                  ],
                  description: "The configuration profile assignment name",
                  args: { name: "configuration-profile-assignment-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--machine-name",
                  description: "The name of the Arc machine",
                  args: { name: "machine-name" },
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
                "Update an association between a ARC machine and Automanage configuration profile",
              options: [
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add" },
                },
                {
                  name: "--configuration-profile",
                  description:
                    "The Automanage configurationProfile ARM Resource URI",
                  args: { name: "configuration-profile" },
                },
                {
                  name: [
                    "--configuration-profile-assignment-name",
                    "--name",
                    "-n",
                  ],
                  description: "The configuration profile assignment name",
                  args: { name: "configuration-profile-assignment-name" },
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
                  name: "--machine-name",
                  description: "The name of the Arc machine",
                  args: { name: "machine-name" },
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
              name: "report",
              description:
                "Manage report within a given ARC machine configuration profile assignment",
              subcommands: [
                {
                  name: "list",
                  description:
                    "List reports within a given ARC machine configuration profile assignment",
                  options: [
                    {
                      name: [
                        "--configuration-profile-assignment-name",
                        "--assignment-name",
                      ],
                      description: "The configuration profile assignment name",
                      args: { name: "configuration-profile-assignment-name" },
                      isRequired: true,
                    },
                    {
                      name: "--machine-name",
                      description: "The name of the Arc machine",
                      args: { name: "machine-name" },
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
                    "Get information about a report associated with an ARC machine configuration profile assignment run",
                  options: [
                    {
                      name: [
                        "--configuration-profile-assignment-name",
                        "--assignment-name",
                      ],
                      description: "The configuration profile assignment name",
                      args: { name: "configuration-profile-assignment-name" },
                    },
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids" },
                    },
                    {
                      name: "--machine-name",
                      description: "The name of the Arc machine",
                      args: { name: "machine-name" },
                    },
                    {
                      name: ["--report-name", "--name", "-n"],
                      description: "The report name",
                      args: { name: "report-name" },
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
          ],
        },
        {
          name: "cluster",
          description:
            "Manage association between an AzureStackHCI cluster and Automanage configuration profile",
          subcommands: [
            {
              name: "create",
              description:
                "Create an association between an AzureStackHCI cluster and Automanage configuration profile",
              options: [
                {
                  name: "--cluster-name",
                  description: "The name of the Arc machine",
                  args: { name: "cluster-name" },
                  isRequired: true,
                },
                {
                  name: [
                    "--configuration-profile-assignment-name",
                    "--name",
                    "-n",
                  ],
                  description:
                    "Name of the configuration profile assignment. Only default is supported",
                  args: { name: "configuration-profile-assignment-name" },
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
                  name: "--configuration-profile",
                  description:
                    "The Automanage configurationProfile ARM Resource URI",
                  args: { name: "configuration-profile" },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete an association between an AzureStackHCI cluster and Automanage configuration profile",
              options: [
                {
                  name: "--cluster-name",
                  description: "The name of the Arc machine",
                  args: { name: "cluster-name" },
                },
                {
                  name: [
                    "--configuration-profile-assignment-name",
                    "--name",
                    "-n",
                  ],
                  description: "Name of the configuration profile assignment",
                  args: { name: "configuration-profile-assignment-name" },
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
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "show",
              description:
                "Get information about an association between an AzureStackHCI cluster and Automanage configuration profile",
              options: [
                {
                  name: "--cluster-name",
                  description: "The name of the Arc machine",
                  args: { name: "cluster-name" },
                },
                {
                  name: [
                    "--configuration-profile-assignment-name",
                    "--name",
                    "-n",
                  ],
                  description: "The configuration profile assignment name",
                  args: { name: "configuration-profile-assignment-name" },
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
                "Update an association between a AzureStackHCI cluster and Automanage configuration profile",
              options: [
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add" },
                },
                {
                  name: "--cluster-name",
                  description: "The name of the Arc machine",
                  args: { name: "cluster-name" },
                },
                {
                  name: "--configuration-profile",
                  description:
                    "The Automanage configurationProfile ARM Resource URI",
                  args: { name: "configuration-profile" },
                },
                {
                  name: [
                    "--configuration-profile-assignment-name",
                    "--name",
                    "-n",
                  ],
                  description: "The configuration profile assignment name",
                  args: { name: "configuration-profile-assignment-name" },
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
              name: "report",
              description:
                "Manage report within a given AzureStackHCI cluster configuration profile assignment",
              subcommands: [
                {
                  name: "list",
                  description:
                    "List reports within a given AzureStackHCI cluster configuration profile assignment",
                  options: [
                    {
                      name: [
                        "--configuration-profile-assignment-name",
                        "--assignment-name",
                      ],
                      description: "The configuration profile assignment name",
                      args: { name: "configuration-profile-assignment-name" },
                      isRequired: true,
                    },
                    {
                      name: "--cluster-name",
                      description: "The name of the HCI cluster",
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
                  name: "show",
                  description:
                    "Get information about a report associated with a AzureStackHCI cluster configuration profile assignment run",
                  options: [
                    {
                      name: [
                        "--configuration-profile-assignment-name",
                        "--assignment-name",
                      ],
                      description: "The configuration profile assignment name",
                      args: { name: "configuration-profile-assignment-name" },
                    },
                    {
                      name: "--cluster-name",
                      description: "The name of the HCI cluster",
                      args: { name: "cluster-name" },
                    },
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids" },
                    },
                    {
                      name: ["--report-name", "--name", "-n"],
                      description: "The report name",
                      args: { name: "report-name" },
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
          ],
        },
        {
          name: "vm",
          description:
            "Manage association between a VM and Automanage configuration profile",
          subcommands: [
            {
              name: "create",
              description:
                "Create an association between a VM and Automanage configuration profile",
              options: [
                {
                  name: [
                    "--configuration-profile-assignment-name",
                    "--name",
                    "-n",
                  ],
                  description:
                    "Name of the configuration profile assignment. Only default is supported",
                  args: { name: "configuration-profile-assignment-name" },
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
                  name: "--vm-name",
                  description: "The name of the virtual machine",
                  args: { name: "vm-name" },
                  isRequired: true,
                },
                {
                  name: "--configuration-profile",
                  description:
                    "The Automanage configurationProfile ARM Resource URI",
                  args: { name: "configuration-profile" },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete an association between a VM and Automanage configuration profile",
              options: [
                {
                  name: [
                    "--configuration-profile-assignment-name",
                    "--name",
                    "-n",
                  ],
                  description: "Name of the configuration profile assignment",
                  args: { name: "configuration-profile-assignment-name" },
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
                  name: "--vm-name",
                  description: "The name of the virtual machine",
                  args: { name: "vm-name" },
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
                "Get information about an association between a VM and Automanage configuration profile",
              options: [
                {
                  name: [
                    "--configuration-profile-assignment-name",
                    "--name",
                    "-n",
                  ],
                  description: "The configuration profile assignment name",
                  args: { name: "configuration-profile-assignment-name" },
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
                  name: "--vm-name",
                  description: "The name of the virtual machine",
                  args: { name: "vm-name" },
                },
              ],
            },
            {
              name: "update",
              description:
                "Update an association between a VM and Automanage configuration profile",
              options: [
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add" },
                },
                {
                  name: "--configuration-profile",
                  description:
                    "The Automanage configurationProfile ARM Resource URI",
                  args: { name: "configuration-profile" },
                },
                {
                  name: [
                    "--configuration-profile-assignment-name",
                    "--name",
                    "-n",
                  ],
                  description: "The configuration profile assignment name",
                  args: { name: "configuration-profile-assignment-name" },
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
                  name: "--vm-name",
                  description: "The name of the virtual machine",
                  args: { name: "vm-name" },
                },
              ],
            },
            {
              name: "report",
              description:
                "Manage report within a given VM configuration profile assignment",
              subcommands: [
                {
                  name: "list",
                  description:
                    "List reports within a given VM configuration profile assignment",
                  options: [
                    {
                      name: [
                        "--configuration-profile-assignment-name",
                        "--assignment-name",
                      ],
                      description: "The configuration profile assignment name",
                      args: { name: "configuration-profile-assignment-name" },
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
                      name: "--vm-name",
                      description: "The name of the virtual machine",
                      args: { name: "vm-name" },
                      isRequired: true,
                    },
                  ],
                },
                {
                  name: "show",
                  description:
                    "Get information about a report associated with a VM configuration profile assignment run",
                  options: [
                    {
                      name: [
                        "--configuration-profile-assignment-name",
                        "--assignment-name",
                      ],
                      description: "The configuration profile assignment name",
                      args: { name: "configuration-profile-assignment-name" },
                    },
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids" },
                    },
                    {
                      name: ["--report-name", "--name", "-n"],
                      description: "The report name",
                      args: { name: "report-name" },
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
                      name: "--vm-name",
                      description: "The name of the virtual machine",
                      args: { name: "vm-name" },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "service-principal",
      description:
        "Manage Automanage AAD first party Application Service Principal",
      subcommands: [
        {
          name: "list",
          description:
            "List the Automanage AAD first party Application Service Principal details for the subscription id",
        },
        {
          name: "show-default",
          description:
            "Get the Automanage AAD first party Application Service Principal details for the subscription id",
        },
      ],
    },
  ],
};

export default completion;
