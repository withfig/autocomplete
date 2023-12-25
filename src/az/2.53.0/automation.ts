const completion: Fig.Spec = {
  name: "automation",
  description: "Manage Automation Account",
  subcommands: [
    {
      name: "account",
      description: "Automation Account",
      subcommands: [
        {
          name: "create",
          description: "Create automation account",
          options: [
            {
              name: ["--automation-account-name", "--name", "-n"],
              description: "The name of the automation account",
              args: { name: "automation-account-name" },
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
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--sku",
              description: "Account SKU",
              args: { name: "sku", suggestions: ["Basic", "Free"] },
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
          description: "Delete an automation account",
          options: [
            {
              name: ["--automation-account-name", "--name", "-n"],
              description: "The name of the automation account",
              args: { name: "automation-account-name" },
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
          description:
            "Retrieve a list of accounts within a given resource group. And Retrieve a list of accounts within a given subscription",
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
          description: "Get information about an Automation Account",
          options: [
            {
              name: ["--automation-account-name", "--name", "-n"],
              description: "The name of the automation account",
              args: { name: "automation-account-name" },
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
          description: "Update an automation account",
          options: [
            {
              name: ["--automation-account-name", "--name", "-n"],
              description: "The name of the automation account",
              args: { name: "automation-account-name" },
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
              name: "--sku",
              description: "Account SKU",
              args: { name: "sku", suggestions: ["Basic", "Free"] },
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
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
          ],
        },
      ],
    },
    {
      name: "hrwg",
      description: "Automation Hybrid Runbook Worker Group",
      subcommands: [
        {
          name: "create",
          description: "Create a hybrid runbook worker group",
          options: [
            {
              name: "--automation-account-name",
              description: "The name of the automation account",
              args: { name: "automation-account-name" },
              isRequired: true,
            },
            {
              name: ["--hybrid-runbook-worker-group-name", "--name", "-n"],
              description: "The hybrid runbook worker group name",
              args: { name: "hybrid-runbook-worker-group-name" },
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
              name: "--credential",
              description:
                'Sets the credential of a worker group. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "credential" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a hybrid runbook worker group",
          options: [
            {
              name: "--automation-account-name",
              description: "The name of the automation account",
              args: { name: "automation-account-name" },
            },
            {
              name: ["--hybrid-runbook-worker-group-name", "--name", "-n"],
              description: "The hybrid runbook worker group name",
              args: { name: "hybrid-runbook-worker-group-name" },
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
          description: "List all hybrid runbook worker groups",
          options: [
            {
              name: "--automation-account-name",
              description: "The name of the automation account",
              args: { name: "automation-account-name" },
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
              name: "--filter",
              description: "The filter to apply on the operation",
              args: { name: "filter" },
            },
          ],
        },
        {
          name: "show",
          description: "Get hybrid worker group",
          options: [
            {
              name: "--automation-account-name",
              description: "The name of the automation account",
              args: { name: "automation-account-name" },
            },
            {
              name: ["--hybrid-runbook-worker-group-name", "--name", "-n"],
              description: "The hybrid runbook worker group name",
              args: { name: "hybrid-runbook-worker-group-name" },
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
          description: "Update a hybrid runbook worker group",
          options: [
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: "--automation-account-name",
              description: "The name of the automation account",
              args: { name: "automation-account-name" },
            },
            {
              name: "--credential",
              description:
                'Sets the credential of a worker group. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "credential" },
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
              name: ["--hybrid-runbook-worker-group-name", "--name", "-n"],
              description: "The hybrid runbook worker group name",
              args: { name: "hybrid-runbook-worker-group-name" },
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
          name: "hrw",
          description: "Hrw",
          subcommands: [
            {
              name: "create",
              description: "Create a hybrid runbook worker",
              options: [
                {
                  name: "--automation-account-name",
                  description: "The name of the automation account",
                  args: { name: "automation-account-name" },
                  isRequired: true,
                },
                {
                  name: "--hybrid-runbook-worker-group-name",
                  description: "The hybrid runbook worker group name",
                  args: { name: "hybrid-runbook-worker-group-name" },
                  isRequired: true,
                },
                {
                  name: ["--hybrid-runbook-worker-id", "--name", "-n"],
                  description: "The hybrid runbook worker id",
                  args: { name: "hybrid-runbook-worker-id" },
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
                  name: "--vm-resource-id",
                  description:
                    "Azure Resource Manager Id for a virtual machine",
                  args: { name: "vm-resource-id" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a hybrid runbook worker",
              options: [
                {
                  name: "--automation-account-name",
                  description: "The name of the automation account",
                  args: { name: "automation-account-name" },
                },
                {
                  name: "--hybrid-runbook-worker-group-name",
                  description: "The hybrid runbook worker group name",
                  args: { name: "hybrid-runbook-worker-group-name" },
                },
                {
                  name: ["--hybrid-runbook-worker-id", "--name", "-n"],
                  description: "The hybrid runbook worker id",
                  args: { name: "hybrid-runbook-worker-id" },
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
              description: "List a list of hybrid runbook workers",
              options: [
                {
                  name: "--automation-account-name",
                  description: "The name of the automation account",
                  args: { name: "automation-account-name" },
                  isRequired: true,
                },
                {
                  name: "--hybrid-runbook-worker-group-name",
                  description: "The hybrid runbook worker group name",
                  args: { name: "hybrid-runbook-worker-group-name" },
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
                  name: "--filter",
                  description: "The filter to apply on the operation",
                  args: { name: "filter" },
                },
              ],
            },
            {
              name: "move",
              description: "Move a hybrid worker to a different group",
              options: [
                {
                  name: "--automation-account-name",
                  description: "The name of the automation account",
                  args: { name: "automation-account-name" },
                  isRequired: true,
                },
                {
                  name: "--hybrid-runbook-worker-group-name",
                  description: "The hybrid runbook worker group name",
                  args: { name: "hybrid-runbook-worker-group-name" },
                  isRequired: true,
                },
                {
                  name: "--hybrid-runbook-worker-id",
                  description: "The hybrid runbook worker id",
                  args: { name: "hybrid-runbook-worker-id" },
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
              description: "Get a hybrid runbook worker",
              options: [
                {
                  name: "--automation-account-name",
                  description: "The name of the automation account",
                  args: { name: "automation-account-name" },
                },
                {
                  name: "--hybrid-runbook-worker-group-name",
                  description: "The hybrid runbook worker group name",
                  args: { name: "hybrid-runbook-worker-group-name" },
                },
                {
                  name: ["--hybrid-runbook-worker-id", "--name", "-n"],
                  description: "The hybrid runbook worker id",
                  args: { name: "hybrid-runbook-worker-id" },
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
          ],
        },
      ],
    },
    {
      name: "job",
      description: "Automation Job",
      subcommands: [
        {
          name: "list",
          description: "Retrieve a list of jobs",
          options: [
            {
              name: "--automation-account-name",
              description: "The name of the automation account",
              args: { name: "automation-account-name" },
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
          name: "resume",
          description: "Resume the job identified by jobName",
          options: [
            {
              name: "--automation-account-name",
              description: "The name of the automation account",
              args: { name: "automation-account-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--job-name", "--name", "-n"],
              description: "The job name",
              args: { name: "job-name" },
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
          description: "Retrieve the job identified by job name",
          options: [
            {
              name: "--automation-account-name",
              description: "The name of the automation account",
              args: { name: "automation-account-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--job-name", "--name", "-n"],
              description: "The job name",
              args: { name: "job-name" },
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
          name: "stop",
          description: "Stop the job identified by jobName",
          options: [
            {
              name: "--automation-account-name",
              description: "The name of the automation account",
              args: { name: "automation-account-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--job-name", "--name", "-n"],
              description: "The job name",
              args: { name: "job-name" },
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
          name: "suspend",
          description: "Suspend the job identified by job name",
          options: [
            {
              name: "--automation-account-name",
              description: "The name of the automation account",
              args: { name: "automation-account-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--job-name", "--name", "-n"],
              description: "The job name",
              args: { name: "job-name" },
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
      name: "python3-package",
      description: "Python3-package",
      subcommands: [
        {
          name: "create",
          description:
            "Create or Update the python 3 package identified by package name",
          options: [
            {
              name: "--automation-account-name",
              description: "The name of the automation account",
              args: { name: "automation-account-name" },
              isRequired: true,
            },
            {
              name: "--content-link",
              description:
                'Gets or sets the module content link. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "content-link" },
              isRequired: true,
            },
            {
              name: ["--package-name", "--name", "-n"],
              description: "The name of python package",
              args: { name: "package-name" },
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
              name: "--tags",
              description:
                'Gets or sets the tags attached to the resource. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tags" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete the python 3 package by name",
          options: [
            {
              name: "--automation-account-name",
              description: "The name of the automation account",
              args: { name: "automation-account-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--package-name", "--name", "-n"],
              description: "The python package name",
              args: { name: "package-name" },
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
          description: "Retrieve a list of python 3 packages",
          options: [
            {
              name: "--automation-account-name",
              description: "The name of the automation account",
              args: { name: "automation-account-name" },
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
            "Retrieve the python 3 package identified by package name",
          options: [
            {
              name: "--automation-account-name",
              description: "The name of the automation account",
              args: { name: "automation-account-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--package-name", "--name", "-n"],
              description: "The python package name",
              args: { name: "package-name" },
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
            "Create or Update the python 3 package identified by package name",
          options: [
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: "--automation-account-name",
              description: "The name of the automation account",
              args: { name: "automation-account-name" },
            },
            {
              name: "--content-link",
              description:
                'Gets or sets the module content link. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "content-link" },
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
              name: ["--package-name", "--name", "-n"],
              description: "The python package name",
              args: { name: "package-name" },
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
                'Gets or sets the tags attached to the resource. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tags" },
            },
          ],
        },
      ],
    },
    {
      name: "runbook",
      description: "Automation Runbook",
      subcommands: [
        {
          name: "create",
          description: "Create the runbook identified by runbook name",
          options: [
            {
              name: "--automation-account-name",
              description: "The name of the automation account",
              args: { name: "automation-account-name" },
              isRequired: true,
            },
            {
              name: ["--runbook-name", "--name", "-n"],
              description: "The runbook name",
              args: { name: "runbook-name" },
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
              name: "--type",
              description: "Type of the runbook",
              args: {
                name: "type",
                suggestions: [
                  "Graph",
                  "GraphPowerShell",
                  "GraphPowerShellWorkflow",
                  "PowerShell",
                  "PowerShellWorkflow",
                  "Python2",
                  "Python3",
                  "Script",
                ],
              },
              isRequired: true,
            },
            {
              name: "--description",
              description: "Description of the runbook",
              args: { name: "description" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--log-activity-trace",
              description: "Activity level tracing options of the runbook",
              args: { name: "log-activity-trace" },
            },
            {
              name: "--log-progress",
              description: "Progress log option of the runbook",
              args: { name: "log-progress", suggestions: ["false", "true"] },
            },
            {
              name: "--log-verbose",
              description: "Verbose log option of the runbook",
              args: { name: "log-verbose", suggestions: ["false", "true"] },
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
          description: "Delete the runbook by name",
          options: [
            {
              name: "--automation-account-name",
              description: "The name of the automation account",
              args: { name: "automation-account-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--runbook-name", "--name", "-n"],
              description: "The runbook name",
              args: { name: "runbook-name" },
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
          description: "Retrieve a list of runbooks",
          options: [
            {
              name: "--automation-account-name",
              description: "The name of the automation account",
              args: { name: "automation-account-name" },
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
          name: "publish",
          description: "Publish runbook draft",
          options: [
            {
              name: "--automation-account-name",
              description: "The name of the automation account",
              args: { name: "automation-account-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--runbook-name", "--name", "-n"],
              description:
                "The parameters supplied to the publish runbook operation",
              args: { name: "runbook-name" },
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
          ],
        },
        {
          name: "replace-content",
          description: "Replace content of the runbook",
          options: [
            {
              name: "--content",
              description: "The runbook content",
              args: { name: "content" },
              isRequired: true,
            },
            {
              name: "--automation-account-name",
              description: "The name of the automation account",
              args: { name: "automation-account-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--runbook-name", "--name", "-n"],
              description: "The runbook name",
              args: { name: "runbook-name" },
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
          ],
        },
        {
          name: "revert-to-published",
          description:
            "Revert the runbook content to last known published state",
          options: [
            {
              name: "--automation-account-name",
              description: "The name of the automation account",
              args: { name: "automation-account-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--runbook-name", "--name", "-n"],
              description: "The runbook name",
              args: { name: "runbook-name" },
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
          description: "Retrieve the runbook identified by runbook name",
          options: [
            {
              name: "--automation-account-name",
              description: "The name of the automation account",
              args: { name: "automation-account-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--runbook-name", "--name", "-n"],
              description: "The runbook name",
              args: { name: "runbook-name" },
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
          name: "start",
          description: "Start the runbook",
          options: [
            {
              name: "--automation-account-name",
              description: "The name of the automation account",
              args: { name: "automation-account-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--runbook-name", "--name", "-n"],
              description: "The runbook name",
              args: { name: "runbook-name" },
            },
            {
              name: "--parameters",
              description:
                "Parameters of the job. Expect value: KEY1=VALUE1 KEY2=VALUE2",
              args: { name: "parameters" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--run-on",
              description:
                "RunOn which specifies the group name where the job is to be executed",
              args: { name: "run-on" },
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
          description: "Update the runbook identified by runbook name",
          options: [
            {
              name: "--automation-account-name",
              description: "The name of the automation account",
              args: { name: "automation-account-name" },
            },
            {
              name: "--description",
              description: "Description of the runbook",
              args: { name: "description" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--log-activity-trace",
              description: "Activity level tracing options of the runbook",
              args: { name: "log-activity-trace" },
            },
            {
              name: "--log-progress",
              description: "Progress log option of the runbook",
              args: { name: "log-progress", suggestions: ["false", "true"] },
            },
            {
              name: "--log-verbose",
              description: "Verbose log option of the runbook",
              args: { name: "log-verbose", suggestions: ["false", "true"] },
            },
            {
              name: ["--runbook-name", "--name", "-n"],
              description: "The runbook name",
              args: { name: "runbook-name" },
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
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the automation runbook is met",
          options: [
            {
              name: "--automation-account-name",
              description: "The name of the automation account",
              args: { name: "automation-account-name" },
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
              name: ["--runbook-name", "--name", "-n"],
              description: "The runbook name",
              args: { name: "runbook-name" },
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
      name: "schedule",
      description: "Automation Schedule",
      subcommands: [
        {
          name: "create",
          description: "Create automation schedule",
          options: [
            {
              name: "--automation-account-name",
              description: "The name of the automation account",
              args: { name: "automation-account-name" },
              isRequired: true,
            },
            {
              name: "--frequency",
              description: "The frequency of the schedule",
              args: { name: "frequency" },
              isRequired: true,
            },
            {
              name: "--interval",
              description: "The interval of the schedule",
              args: { name: "interval" },
              isRequired: true,
            },
            {
              name: ["--schedule-name", "--name", "-n"],
              description: "The schedule name",
              args: { name: "schedule-name" },
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
              name: "--description",
              description: "The description of the schedule",
              args: { name: "description" },
            },
            {
              name: "--expiry-time",
              description:
                "The end time of the schedule. Format: date (yyyy-mm-dd) time (hh:mm:ss.xxxxx) timezone (+/-hh:mm)",
              args: { name: "expiry-time" },
            },
            {
              name: "--start-time",
              description:
                "The start time of the schedule. Format: date (yyyy-mm-dd) time (hh:mm:ss.xxxxx) timezone (+/-hh:mm)",
              args: { name: "start-time" },
            },
            {
              name: "--time-zone",
              description: "The time zone of the schedule",
              args: { name: "time-zone" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete an automation schedule",
          options: [
            {
              name: "--automation-account-name",
              description: "The name of the automation account",
              args: { name: "automation-account-name" },
              isRequired: true,
            },
            {
              name: ["--schedule-name", "--name", "-n"],
              description: "The schedule name",
              args: { name: "schedule-name" },
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
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "Retrieve a list of schedules",
          options: [
            {
              name: "--automation-account-name",
              description: "The name of the automation account",
              args: { name: "automation-account-name" },
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
          description: "Retrieve the schedule identified by schedule name",
          options: [
            {
              name: "--automation-account-name",
              description: "The name of the automation account",
              args: { name: "automation-account-name" },
              isRequired: true,
            },
            {
              name: ["--schedule-name", "--name", "-n"],
              description: "The schedule name",
              args: { name: "schedule-name" },
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
          description: "Update an automation schedule",
          options: [
            {
              name: "--automation-account-name",
              description: "The name of the automation account",
              args: { name: "automation-account-name" },
              isRequired: true,
            },
            {
              name: ["--schedule-name", "--name", "-n"],
              description: "The schedule name",
              args: { name: "schedule-name" },
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
              name: "--description",
              description: "The description of the schedule",
              args: { name: "description" },
            },
            {
              name: "--is-enabled",
              description: "Indicate whether this schedule is enabled",
              args: { name: "is-enabled", suggestions: ["false", "true"] },
            },
          ],
        },
      ],
    },
    {
      name: "software-update-configuration",
      description: "Automation software-update-configuration",
      subcommands: [
        {
          name: "create",
          description: "Create automation software-update-configuration",
          options: [
            {
              name: "--automation-account-name",
              description: "The name of the automation account",
              args: { name: "automation-account-name" },
              isRequired: true,
            },
            {
              name: ["--configuration-name", "--name", "-n"],
              description: "The name of the software update configuration",
              args: { name: "configuration-name" },
              isRequired: true,
            },
            {
              name: "--frequency",
              description: "The frequency of the schedule",
              args: { name: "frequency" },
              isRequired: true,
            },
            {
              name: "--interval",
              description: "The interval of the schedule",
              args: { name: "interval" },
              isRequired: true,
            },
            {
              name: "--operating-system",
              description: "Operating system of target machines",
              args: {
                name: "operating-system",
                suggestions: ["Linux", "Windows"],
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
              name: "--azure-queries-locations",
              description:
                "Space-separated list of Azure queries location in the software update configuration",
              args: { name: "azure-queries-locations" },
            },
            {
              name: "--azure-queries-scope",
              description:
                "Space-separated list of Azure queries scope in the software update configuration",
              args: { name: "azure-queries-scope" },
            },
            {
              name: "--azure-queries-tags",
              description:
                "Space-separated list of Azure queries tag settings in the software update configuration",
              args: { name: "azure-queries-tags" },
            },
            {
              name: "--azure-virtual-machines",
              description:
                "Space-separated list of azure resource Ids for azure virtual machines targeted by the software update configuration",
              args: { name: "azure-virtual-machines" },
            },
            {
              name: "--creation-time",
              description:
                "The creation time. Format: date (yyyy-mm-dd) time (hh:mm:ss.xxxxx) timezone (+/-hh:mm)",
              args: { name: "creation-time" },
            },
            {
              name: "--description",
              description: "The description of the schedule",
              args: { name: "description" },
            },
            {
              name: "--duration",
              description:
                "Maximum time allowed for the software update configuration run. Duration needs to be specified using the format PT[n]H[n]M[n]S as per ISO8601",
              args: { name: "duration" },
            },
            {
              name: "--excluded-kb-numbers",
              description:
                "Space-separated list of KB numbers excluded from the software update configuration",
              args: { name: "excluded-kb-numbers" },
            },
            {
              name: "--expiry-time",
              description:
                "The end time of the schedule. Format: date (yyyy-mm-dd) time (hh:mm:ss.xxxxx) timezone (+/-hh:mm)",
              args: { name: "expiry-time" },
            },
            {
              name: "--expiry-time-offset-minutes",
              description: "The expiry time's offset in minutes",
              args: { name: "expiry-time-offset-minutes" },
            },
            {
              name: "--included-kb-numbers",
              description:
                "Space-separated list of KB numbers included from the software update configuration",
              args: { name: "included-kb-numbers" },
            },
            {
              name: "--included-update-classifications",
              description:
                "Update classification included in the software update configuration. A comma separated string with required values",
              args: { name: "included-update-classifications" },
            },
            {
              name: "--is-enabled",
              description: "Indicating whether this schedule is enabled",
              args: { name: "is-enabled", suggestions: ["false", "true"] },
            },
            {
              name: "--last-modified-time",
              description:
                "The last modified time. Format: date (yyyy-mm-dd) time (hh:mm:ss.xxxxx) timezone (+/-hh:mm)",
              args: { name: "last-modified-time" },
            },
            {
              name: "--next-run",
              description:
                "The next run time of the schedule. Format: date (yyyy-mm-dd) time (hh:mm:ss.xxxxx) timezone (+/-hh:mm)",
              args: { name: "next-run" },
            },
            {
              name: "--next-run-offset-minutes",
              description: "The next run time's offset in minutes",
              args: { name: "next-run-offset-minutes" },
            },
            {
              name: "--non-azure-computer-names",
              description:
                "Space-separated list of names of non-azure machines targeted by the software update configuration",
              args: { name: "non-azure-computer-names" },
            },
            {
              name: "--non-azure-queries-function-alias",
              description: "Log Analytics Saved Search name",
              args: { name: "non-azure-queries-function-alias" },
            },
            {
              name: "--non-azure-queries-workspace-id",
              description: "Workspace Id for Log Analytics",
              args: { name: "non-azure-queries-workspace-id" },
            },
            {
              name: "--post-task-job-id",
              description: "The job id of the task",
              args: { name: "post-task-job-id" },
            },
            {
              name: "--post-task-source",
              description: "The name of the source of the task",
              args: { name: "post-task-source" },
            },
            {
              name: "--post-task-status",
              description: "The status of the task",
              args: { name: "post-task-status" },
            },
            {
              name: "--pre-task-job-id",
              description: "The job id of the task",
              args: { name: "pre-task-job-id" },
            },
            {
              name: "--pre-task-source",
              description: "The name of the source of the task",
              args: { name: "pre-task-source" },
            },
            {
              name: "--pre-task-status",
              description: "The status of the task",
              args: { name: "pre-task-status" },
            },
            {
              name: "--reboot-setting",
              description:
                "Reboot setting for the software update configuration",
              args: { name: "reboot-setting" },
            },
            {
              name: "--start-time",
              description:
                "The start time of the schedule. Format: date (yyyy-mm-dd) time (hh:mm:ss.xxxxx) timezone (+/-hh:mm)",
              args: { name: "start-time" },
            },
            {
              name: "--time-zone",
              description: "The time zone of the schedule",
              args: { name: "time-zone" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete an automation software-update-configuration",
          options: [
            {
              name: "--automation-account-name",
              description: "The name of the automation account",
              args: { name: "automation-account-name" },
              isRequired: true,
            },
            {
              name: ["--configuration-name", "--name", "-n"],
              description: "The name of the software update configuration",
              args: { name: "configuration-name" },
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
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description:
            "List all software-update-configurations for the account",
          options: [
            {
              name: "--automation-account-name",
              description: "The name of the automation account",
              args: { name: "automation-account-name" },
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
          description: "Get a single software-update-configuration by name",
          options: [
            {
              name: "--automation-account-name",
              description: "The name of the automation account",
              args: { name: "automation-account-name" },
              isRequired: true,
            },
            {
              name: ["--configuration-name", "--name", "-n"],
              description: "The name of the software update configuration",
              args: { name: "configuration-name" },
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
          name: "machine-runs",
          description: "Software Update Configuration Machine Runs",
          subcommands: [
            {
              name: "list",
              description: "List software update configuration machine-runs",
              options: [
                {
                  name: "--automation-account-name",
                  description: "The name of the automation account",
                  args: { name: "automation-account-name" },
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
                "Get a single software update configuration machine runs by Id",
              options: [
                {
                  name: "--automation-account-name",
                  description: "The name of the automation account",
                  args: { name: "automation-account-name" },
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
                  name: "--software-update-configuration-machine-run-id",
                  description:
                    "The Id of the software update configuration machine run",
                  args: {
                    name: "software-update-configuration-machine-run-id",
                  },
                  isRequired: true,
                },
              ],
            },
          ],
        },
        {
          name: "runs",
          description: "Software Update Configuration Runs",
          subcommands: [
            {
              name: "list",
              description: "Return list of software update configuration runs",
              options: [
                {
                  name: "--automation-account-name",
                  description: "The name of the automation account",
                  args: { name: "automation-account-name" },
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
                "Get a single software update configuration runs by Id",
              options: [
                {
                  name: "--automation-account-name",
                  description: "The name of the automation account",
                  args: { name: "automation-account-name" },
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
                  name: "--software-update-configuration-run-id",
                  description:
                    "The Id of the software update configuration run",
                  args: { name: "software-update-configuration-run-id" },
                  isRequired: true,
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
