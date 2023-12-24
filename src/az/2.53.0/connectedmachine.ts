const completion: Fig.Spec = {
  name: "connectedmachine",
  description: "Manage an Azure Arc-Enabled Server",
  subcommands: [
    {
      name: "assess-patches",
      description: "Assess patches on an Azure Arc-Enabled Server",
      options: [
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: ["--name", "-n"],
          description: "The name of the hybrid machine",
          args: { name: "name" },
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
      ],
    },
    {
      name: "delete",
      description: "Delete an Azure Arc-Enabled Server",
      options: [
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: ["--machine-name", "--name", "-n"],
          description: "The name of the hybrid machine",
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
      name: "install-patches",
      description: "Install patches on an Azure Arc-Enabled Server",
      options: [
        {
          name: "--maximum-duration",
          description:
            "Specifies the maximum amount of time that the operation will run. It must be an ISO 8601-compliant duration string such as PT4H (4 hours)",
          args: { name: "maximum-duration" },
          isRequired: true,
        },
        {
          name: "--reboot-setting",
          description:
            "Defines when it is acceptable to reboot a VM during a software update operation",
          args: {
            name: "reboot-setting",
            suggestions: ["Always", "IfRequired", "Never"],
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
          name: "--linux-parameters",
          description:
            'Input for InstallPatches on a Linux VM, as directly received by the API Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
          args: { name: "linux-parameters" },
        },
        {
          name: ["--name", "-n"],
          description: "The name of the hybrid machine",
          args: { name: "name" },
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
          name: "--windows-parameters",
          description:
            'Input for InstallPatches on a Windows VM, as directly received by the API Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
          args: { name: "windows-parameters" },
        },
      ],
    },
    {
      name: "list",
      description:
        "List all the Azure Arc-Enabled Servers in the specified resource group",
      options: [
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
        "Get information about the model view or the instance view of an Azure Arc-Enabled Server",
      options: [
        {
          name: "--expand",
          description: "The expand expression to apply on the operation",
          args: { name: "expand", suggestions: ["instanceView"] },
        },
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: ["--machine-name", "--name", "-n"],
          description: "The name of the hybrid machine",
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
        "Update an Azure Arc-Enabled Server. Please note some properties can be set only during machine creation",
      options: [
        {
          name: "--location",
          description: "The location of the hybrid machine",
          args: { name: "location" },
          isRequired: true,
        },
        {
          name: "--add",
          description:
            "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
          args: { name: "add" },
        },
        {
          name: "--agent-upgrade",
          description:
            'The info of the machine w.r.t Agent Upgrade Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
          args: { name: "agent-upgrade" },
        },
        {
          name: "--client-public-key",
          description:
            "Public Key that the client provides to be used during initial resource onboarding",
          args: { name: "client-public-key" },
        },
        {
          name: "--extensions",
          description:
            'Machine Extensions information (deprecated field) Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
          args: { name: "extensions" },
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
            'Identity for the resource. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
          args: { name: "identity" },
        },
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: "--location-data",
          description:
            'Metadata pertaining to the geographic location of the resource. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
          args: { name: "location-data" },
        },
        {
          name: ["--machine-name", "--name", "-n"],
          description: "The name of the hybrid machine",
          args: { name: "machine-name" },
        },
        {
          name: "--mssql-discovered",
          description:
            "Specifies whether any MS SQL instance is discovered on the machine",
          args: { name: "mssql-discovered" },
        },
        {
          name: "--os-profile",
          description:
            'Specifies the operating system settings for the hybrid machine. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
          args: { name: "os-profile" },
        },
        {
          name: "--os-type",
          description: "The type of Operating System (windows/linux)",
          args: { name: "os-type" },
        },
        {
          name: "--parent-cluster-id",
          description:
            "The resource id of the parent cluster (Azure HCI) this machine is assigned to, if any",
          args: { name: "parent-cluster-id" },
        },
        {
          name: "--private-scope-id",
          description:
            "The resource id of the private link scope this machine is assigned to, if any",
          args: { name: "private-scope-id" },
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
          name: "--service-statuses",
          description:
            'Statuses of dependent services that are reported back to ARM. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
          args: { name: "service-statuses" },
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
      name: "upgrade-extension",
      description: "Upgrade Extensions of an Azure Arc-Enabled Server",
      options: [
        {
          name: "--extension-targets",
          description:
            'Describes the Extension Target Properties. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
          args: { name: "extension-targets" },
        },
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: "--machine-name",
          description: "The name of the hybrid machine",
          args: { name: "machine-name" },
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
      ],
    },
    {
      name: "extension",
      description: "Manage a VM extension on an Azure Arc-Enabled Server",
      subcommands: [
        {
          name: "create",
          description: "Create the extension",
          options: [
            {
              name: ["--extension-name", "--name", "-n"],
              description: "The name of the machine extension",
              args: { name: "extension-name" },
              isRequired: true,
            },
            {
              name: "--machine-name",
              description:
                "The name of the machine where the extension should be created or updated",
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
              name: "--enable-auto-upgrade",
              description:
                "Indicates whether the extension should be automatically upgraded by the platform if there is a newer version available",
              args: {
                name: "enable-auto-upgrade",
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
              name: "--force-update-tag",
              description:
                "How the extension handler should be forced to update even if the extension configuration has not changed",
              args: { name: "force-update-tag" },
            },
            {
              name: "--instance-view",
              description:
                'The machine extension instance view. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "instance-view" },
            },
            {
              name: ["--location", "-l"],
              description:
                "The geo-location where the resource lives When not specified, the location of the resource group will be used",
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
              name: "--protected-settings",
              description:
                "The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all. Support json-file and yaml-file",
              args: { name: "protected-settings" },
            },
            {
              name: "--publisher",
              description: "The name of the extension handler publisher",
              args: { name: "publisher" },
            },
            {
              name: "--settings",
              description:
                "Json formatted public settings for the extension. Support json-file and yaml-file",
              args: { name: "settings" },
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
                'Specifies the type of the extension; an example is "CustomScriptExtension"',
              args: { name: "type" },
            },
            {
              name: "--type-handler-version",
              description: "Specifies the version of the script handler",
              args: { name: "type-handler-version" },
            },
            {
              name: "--upgrade-minor-ver",
              description:
                "Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true",
              args: {
                name: "upgrade-minor-ver",
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
          description: "Delete the extension",
          options: [
            {
              name: ["--extension-name", "--name", "-n"],
              description: "The name of the machine extension",
              args: { name: "extension-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--machine-name",
              description:
                "The name of the machine where the extension should be deleted",
              args: { name: "machine-name" },
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
          description: "Get all extensions of a Non-Azure machine",
          options: [
            {
              name: "--machine-name",
              description: "The name of the machine containing the extension",
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
              name: "--expand",
              description: "The expand expression to apply on the operation",
              args: { name: "expand" },
            },
          ],
        },
        {
          name: "show",
          description: "Create or update the extension",
          options: [
            {
              name: ["--extension-name", "--name", "-n"],
              description: "The name of the machine extension",
              args: { name: "extension-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--machine-name",
              description: "The name of the machine containing the extension",
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
          description: "Update operation to update the extension",
          options: [
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: "--enable-auto-upgrade",
              description:
                "Indicates whether the extension should be automatically upgraded by the platform if there is a newer version available",
              args: {
                name: "enable-auto-upgrade",
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
              name: ["--extension-name", "--name", "-n"],
              description: "The name of the machine extension",
              args: { name: "extension-name" },
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
              name: "--force-update-tag",
              description:
                "How the extension handler should be forced to update even if the extension configuration has not changed",
              args: { name: "force-update-tag" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--instance-view",
              description:
                'The machine extension instance view. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "instance-view" },
            },
            {
              name: "--machine-name",
              description: "The name of the machine containing the extension",
              args: { name: "machine-name" },
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
              name: "--protected-settings",
              description:
                "The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all. Support json-file and yaml-file",
              args: { name: "protected-settings" },
            },
            {
              name: "--publisher",
              description: "The name of the extension handler publisher",
              args: { name: "publisher" },
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
              name: "--settings",
              description:
                "Json formatted public settings for the extension. Support json-file and yaml-file",
              args: { name: "settings" },
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
                'Specifies the type of the extension; an example is "CustomScriptExtension"',
              args: { name: "type" },
            },
            {
              name: "--type-handler-version",
              description: "Specifies the version of the script handler",
              args: { name: "type-handler-version" },
            },
            {
              name: "--upgrade-minor-ver",
              description:
                "Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true",
              args: {
                name: "upgrade-minor-ver",
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
              name: ["--extension-name", "--name", "-n"],
              description: "The name of the machine extension",
              args: { name: "extension-name" },
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
              name: "--machine-name",
              description: "The name of the machine containing the extension",
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
          name: "image",
          description:
            "Manage VM extension metadata available for Azure Arc-Enabled Servers",
          subcommands: [
            {
              name: "list",
              description:
                "List all Extension versions based on location, publisher, extensionType",
              options: [
                {
                  name: ["--extension-type", "--type"],
                  description:
                    "The extensionType of the Extension being received",
                  args: { name: "extension-type" },
                  isRequired: true,
                },
                {
                  name: ["--location", "-l"],
                  description:
                    "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
                  args: { name: "location" },
                  isRequired: true,
                },
                {
                  name: ["--publisher", "-p"],
                  description: "The publisher of the Extension being received",
                  args: { name: "publisher" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description:
                "Get an Extension Metadata based on location, publisher, extensionType and version",
              options: [
                {
                  name: ["--extension-type", "--type"],
                  description:
                    "The extensionType of the Extension being received",
                  args: { name: "extension-type" },
                },
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
                  name: ["--version", "--name", "-n"],
                  description: "The version of the Extension being received",
                  args: { name: "version" },
                },
                {
                  name: ["--publisher", "-p"],
                  description: "The publisher of the Extension being received",
                  args: { name: "publisher" },
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
      name: "private-endpoint-connection",
      description:
        "Manage private endpoint connection with an Azure Arc-Enabled Server",
      subcommands: [
        {
          name: "delete",
          description: "Delete a private endpoint connection with a given name",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--private-endpoint-connection-name", "--name", "-n"],
              description: "The name of the private endpoint connection",
              args: { name: "private-endpoint-connection-name" },
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
              name: "--scope-name",
              description:
                "The name of the Azure Arc PrivateLinkScope resource",
              args: { name: "scope-name" },
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
            "List all private endpoint connections on a private link scope",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--scope-name",
              description:
                "The name of the Azure Arc PrivateLinkScope resource",
              args: { name: "scope-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description: "Get a private endpoint connection",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--private-endpoint-connection-name", "--name", "-n"],
              description: "The name of the private endpoint connection",
              args: { name: "private-endpoint-connection-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--scope-name",
              description:
                "The name of the Azure Arc PrivateLinkScope resource",
              args: { name: "scope-name" },
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
          description: "Update a private endpoint connection with a given name",
          options: [
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: [
                "--private-link-service-connection-state",
                "--connection-state",
              ],
              description:
                'Connection state of the private endpoint connection. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "private-link-service-connection-state" },
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
              name: ["--private-endpoint-connection-name", "--name", "-n"],
              description: "The name of the private endpoint connection",
              args: { name: "private-endpoint-connection-name" },
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
              name: "--private-endpoint",
              description:
                'Private endpoint which the connection belongs to. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "private-endpoint" },
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
              name: "--scope-name",
              description:
                "The name of the Azure Arc PrivateLinkScope resource",
              args: { name: "scope-name" },
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
              name: ["--private-endpoint-connection-name", "--name", "-n"],
              description: "The name of the private endpoint connection",
              args: { name: "private-endpoint-connection-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--scope-name",
              description:
                "The name of the Azure Arc PrivateLinkScope resource",
              args: { name: "scope-name" },
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
      name: "private-link-resource",
      description:
        "Manage private link resource of an Azure Arc-Enabled Server",
      subcommands: [
        {
          name: "list",
          description:
            "List the private link resources that need to be created for an Azure Monitor PrivateLinkScope",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--scope-name", "-n"],
              description:
                "The name of the Azure Arc PrivateLinkScope resource",
              args: { name: "scope-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description:
            "Get the private link resources that need to be created for an Azure Monitor PrivateLinkScope",
          options: [
            {
              name: ["--group-name", "--name", "-n"],
              description: "The name of the private link resource",
              args: { name: "group-name" },
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
              name: "--scope-name",
              description:
                "The name of the Azure Arc PrivateLinkScope resource",
              args: { name: "scope-name" },
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
      name: "private-link-scope",
      description: "Manage private link scope of an Azure Arc-Enabled Server",
      subcommands: [
        {
          name: "create",
          description:
            "Create (or updates) a Azure Arc PrivateLinkScope. Note: You cannot specify a different value for InstrumentationKey nor AppId in the Put operation",
          options: [
            {
              name: ["--scope-name", "--name", "-n"],
              description:
                "The name of the Azure Arc PrivateLinkScope resource",
              args: { name: "scope-name" },
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
                "Resource location When not specified, the location of the resource group will be used",
              args: { name: "location" },
            },
            {
              name: "--public-network-access",
              description:
                "Indicates whether machines associated with the private link scope can also use public Azure Arc service endpoints",
              args: {
                name: "public-network-access",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--tags",
              description:
                'Resource tags Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tags" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete an Azure Arc PrivateLinkScope",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--scope-name", "--name", "-n"],
              description:
                "The name of the Azure Arc PrivateLinkScope resource",
              args: { name: "scope-name" },
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
          description:
            "Get a list of Azure Arc PrivateLinkScopes within a resource group. And Gets a list of all Azure Arc PrivateLinkScopes within a subscription",
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
          description: "Return an Azure Arc PrivateLinkScope",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--scope-name", "--name", "-n"],
              description:
                "The name of the Azure Arc PrivateLinkScope resource",
              args: { name: "scope-name" },
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
            "Update an Azure Arc PrivateLinkScope. Note: You cannot specify a different value for InstrumentationKey nor AppId in the Put operation",
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
              name: "--location",
              description:
                "The location of the Azure Arc PrivateLinkScope resource",
              args: { name: "location" },
            },
            {
              name: ["--scope-name", "--name", "-n"],
              description:
                "The name of the Azure Arc PrivateLinkScope resource",
              args: { name: "scope-name" },
            },
            {
              name: "--public-network-access",
              description:
                "Indicates whether machines associated with the private link scope can also use public Azure Arc service endpoints",
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
          ],
        },
        {
          name: "update-tag",
          description:
            "Update an existing PrivateLinkScope's tags. To update other fields use the CreateOrUpdate method",
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
              name: "--scope-name",
              description:
                "The name of the Azure Arc PrivateLinkScope resource",
              args: { name: "scope-name" },
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
              name: ["--scope-name", "--name", "-n"],
              description:
                "The name of the Azure Arc PrivateLinkScope resource",
              args: { name: "scope-name" },
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
