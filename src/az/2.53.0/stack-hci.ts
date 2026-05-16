const completion: Fig.Spec = {
  name: "stack-hci",
  description: "Manage Azure Stack HCI",
  subcommands: [
    {
      name: "arc-setting",
      description: "Manage arc setting with stack hci",
      subcommands: [
        {
          name: "consent-and-install-default-extension",
          description:
            "Add consent time for default extensions and initiate extensions installation",
          options: [
            {
              name: "--arc-setting-name",
              description:
                "The name of the proxy resource holding details of HCI ArcSetting information",
              args: { name: "arc-setting-name" },
            },
            {
              name: "--cluster-name",
              description: "The name of the cluster",
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
          name: "create",
          description: "Create arc setting for HCI cluster",
          options: [
            {
              name: ["--arc-setting-name", "--name", "-n"],
              description:
                "The name of the proxy resource holding details of HCI ArcSetting information",
              args: { name: "arc-setting-name" },
              isRequired: true,
            },
            {
              name: "--cluster-name",
              description: "The name of the cluster",
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
              name: "--arc-application-client-id",
              description: "App id of arc AAD identity",
              args: { name: "arc-application-client-id" },
            },
            {
              name: "--arc-application-object-id",
              description: "Object id of arc AAD identity",
              args: { name: "arc-application-object-id" },
            },
            {
              name: "--arc-application-tenant-id",
              description: "Tenant id of arc AAD identity",
              args: { name: "arc-application-tenant-id" },
            },
            {
              name: "--arc-instance-rg",
              description:
                "The resource group that hosts the Arc agents, ie. Hybrid Compute Machine resources",
              args: { name: "arc-instance-rg" },
            },
            {
              name: "--arc-service-principal-object-id",
              description: "Object id of arc AAD service principal",
              args: { name: "arc-service-principal-object-id" },
            },
            {
              name: "--connectivity-properties",
              description:
                'Contains connectivity related configuration for ARC resources Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "connectivity-properties" },
            },
          ],
        },
        {
          name: "create-identity",
          description: "Create AAD identity for arc settings",
          options: [
            {
              name: ["--arc-setting-name", "--name", "-n"],
              description:
                "The name of the proxy resource holding details of HCI ArcSetting information",
              args: { name: "arc-setting-name" },
            },
            {
              name: "--cluster-name",
              description: "The name of the cluster",
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
          name: "delete",
          description: "Delete arc setting resource details of HCI cluster",
          options: [
            {
              name: ["--arc-setting-name", "--name", "-n"],
              description:
                "The name of the proxy resource holding details of HCI ArcSetting information",
              args: { name: "arc-setting-name" },
            },
            {
              name: "--cluster-name",
              description: "The name of the cluster",
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
          name: "generate-password",
          description: "Generate password for arc settings",
          options: [
            {
              name: ["--arc-setting-name", "--name", "-n"],
              description:
                "The name of the proxy resource holding details of HCI ArcSetting information",
              args: { name: "arc-setting-name" },
            },
            {
              name: "--cluster-name",
              description: "The name of the cluster",
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
          name: "initialize-disable-proces",
          description: "Initialize ARC Disable process on the cluster",
          options: [
            {
              name: "--arc-setting-name",
              description:
                "The name of the proxy resource holding details of HCI ArcSetting information",
              args: { name: "arc-setting-name" },
            },
            {
              name: "--cluster-name",
              description: "The name of the cluster",
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
          description: "List arc setting resources of HCI cluster",
          options: [
            {
              name: "--cluster-name",
              description: "The name of the cluster",
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
          description: "Get arc setting resource details of HCI cluster",
          options: [
            {
              name: ["--arc-setting-name", "--name", "-n"],
              description:
                "The name of the proxy resource holding details of HCI ArcSetting information",
              args: { name: "arc-setting-name" },
            },
            {
              name: "--cluster-name",
              description: "The name of the cluster",
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
          description: "Update arc setting for HCI cluster",
          options: [
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: ["--arc-setting-name", "--name", "-n"],
              description:
                "The name of the proxy resource holding details of HCI ArcSetting information",
              args: { name: "arc-setting-name" },
            },
            {
              name: "--cluster-name",
              description: "The name of the cluster",
              args: { name: "cluster-name" },
            },
            {
              name: "--connectivity-properties",
              description:
                'Contains connectivity related configuration for ARC resources Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "connectivity-properties" },
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
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition is met",
          options: [
            {
              name: ["--arc-setting-name", "--name", "-n"],
              description:
                "The name of the proxy resource holding details of HCI ArcSetting information",
              args: { name: "arc-setting-name" },
            },
            {
              name: "--cluster-name",
              description: "The name of the cluster",
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
      name: "cluster",
      description: "Manage cluster with stack hci",
      subcommands: [
        {
          name: "create",
          description: "Create an HCI cluster",
          options: [
            {
              name: ["--cluster-name", "--name", "-n"],
              description: "The name of the cluster",
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
              name: "--aad-application-object-id",
              description: "Object id of cluster AAD identity",
              args: { name: "aad-application-object-id" },
            },
            {
              name: "--aad-client-id",
              description: "App id of cluster AAD identity",
              args: { name: "aad-client-id" },
            },
            {
              name: "--aad-service-principal-object-id",
              description: "Id of cluster identity service principal",
              args: { name: "aad-service-principal-object-id" },
            },
            {
              name: "--aad-tenant-id",
              description: "Tenant id of cluster AAD identity",
              args: { name: "aad-tenant-id" },
            },
            {
              name: "--desired-properties",
              description:
                'Desired properties of the cluster. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "desired-properties" },
            },
            {
              name: "--endpoint",
              description:
                "Endpoint configured for management from the Azure portal",
              args: { name: "endpoint" },
            },
            {
              name: ["--location", "-l"],
              description:
                "The geo-location where the resource lives When not specified, the location of the resource group will be used",
              args: { name: "location" },
            },
            {
              name: "--mi-system-assigned",
              description: "Enable system assigned identity",
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
              name: "--tags",
              description:
                'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tags" },
            },
          ],
        },
        {
          name: "create-identity",
          description: "Create cluster identity",
          options: [
            {
              name: "--cluster-name",
              description: "The name of the cluster",
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
          name: "delete",
          description: "Delete an HCI cluster",
          options: [
            {
              name: ["--cluster-name", "--name", "-n"],
              description: "The name of the cluster",
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
          name: "extend-software-assurance-benefit",
          description: "Extend Software Assurance Benefit to a cluster",
          options: [
            {
              name: "--cluster-name",
              description: "The name of the cluster",
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
              name: "--software-assurance-intent",
              description: "Customer Intent for Software Assurance Benefit",
              args: {
                name: "software-assurance-intent",
                suggestions: ["Disable", "Enable"],
              },
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
          description: "List all HCI clusters in a subscription",
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
          description: "Get HCI cluster",
          options: [
            {
              name: ["--cluster-name", "--name", "-n"],
              description: "The name of the cluster",
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
          description: "Update an HCI cluster",
          options: [
            {
              name: "--aad-client-id",
              description: "App id of cluster AAD identity",
              args: { name: "aad-client-id" },
            },
            {
              name: "--aad-tenant-id",
              description: "Tenant id of cluster AAD identity",
              args: { name: "aad-tenant-id" },
            },
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: ["--cluster-name", "--name", "-n"],
              description: "The name of the cluster",
              args: { name: "cluster-name" },
            },
            {
              name: "--desired-properties",
              description:
                'Desired properties of the cluster. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "desired-properties" },
            },
            {
              name: "--endpoint",
              description:
                "Endpoint configured for management from the Azure portal",
              args: { name: "endpoint" },
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
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition is met",
          options: [
            {
              name: ["--cluster-name", "--name", "-n"],
              description: "The name of the cluster",
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
          name: "identity",
          description: "Manage identity",
          subcommands: [
            {
              name: "assign",
              description: "Assign identities",
              options: [
                {
                  name: "--cluster-name",
                  description: "The name of the cluster",
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
                  name: "--system-assigned",
                  description: "Enable system assigned identity",
                  args: {
                    name: "system-assigned",
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
              name: "remove",
              description: "Remove identities",
              options: [
                {
                  name: "--cluster-name",
                  description: "The name of the cluster",
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
                  name: "--system-assigned",
                  description: "Enable system assigned identity",
                  args: {
                    name: "system-assigned",
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
      name: "extension",
      description: "Manage extension with stack hci",
      subcommands: [
        {
          name: "create",
          description: "Create extension for HCI cluster",
          options: [
            {
              name: "--arc-setting-name",
              description:
                "The name of the proxy resource holding details of HCI ArcSetting information",
              args: { name: "arc-setting-name" },
              isRequired: true,
            },
            {
              name: "--cluster-name",
              description: "The name of the cluster",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--extension-name", "--name", "-n"],
              description: "The name of the machine extension",
              args: { name: "extension-name" },
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
              name: "--auto-upgrade",
              description:
                "Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true",
              args: {
                name: "auto-upgrade",
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
                "Protected settings (may contain secrets). Support json-file and yaml-file",
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
              name: "--type",
              description:
                'Specifies the type of the extension; an example is "CustomScriptExtension"',
              args: { name: "type" },
            },
            {
              name: "--type-handler-version",
              description:
                "Specifies the version of the script handler. Latest version would be used if not specified",
              args: { name: "type-handler-version" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete particular arc extension of HCI Cluster",
          options: [
            {
              name: "--arc-setting-name",
              description:
                "The name of the proxy resource holding details of HCI ArcSetting information",
              args: { name: "arc-setting-name" },
            },
            {
              name: "--cluster-name",
              description: "The name of the cluster",
              args: { name: "cluster-name" },
            },
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
          description: "List all extensions under arc setting resource",
          options: [
            {
              name: "--arc-setting-name",
              description:
                "The name of the proxy resource holding details of HCI ArcSetting information",
              args: { name: "arc-setting-name" },
              isRequired: true,
            },
            {
              name: "--cluster-name",
              description: "The name of the cluster",
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
          description: "Get particular arc extension of HCI cluster",
          options: [
            {
              name: "--arc-setting-name",
              description:
                "The name of the proxy resource holding details of HCI ArcSetting information",
              args: { name: "arc-setting-name" },
            },
            {
              name: "--cluster-name",
              description: "The name of the cluster",
              args: { name: "cluster-name" },
            },
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
              name: "--arc-setting-name",
              description:
                "The name of the proxy resource holding details of HCI ArcSetting information",
              args: { name: "arc-setting-name" },
            },
            {
              name: "--cluster-name",
              description: "The name of the cluster",
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
