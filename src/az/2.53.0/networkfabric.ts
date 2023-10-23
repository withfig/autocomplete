const completion: Fig.Spec = {
  name: "networkfabric",
  description: "Manage Azure Network Fabric Management Service API",
  subcommands: [
    {
      name: "acl",
      description: "Manage Access Control List Resource",
      subcommands: [
        {
          name: "create",
          description: "Create a Access Control List resource",
          options: [
            {
              name: "--configuration-type",
              description:
                "Input method to configure Access Control List. Example: File",
              args: {
                name: "configuration-type",
                suggestions: ["File", "Inline"],
              },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--resource-name",
              description: "Name of the Access Control List",
              args: { name: "resource-name" },
              isRequired: true,
            },
            {
              name: "--acls-url",
              description: "Access Control List file URL",
              args: { name: "acls-url" },
            },
            {
              name: "--annotation",
              description: "Description for underlying resource",
              args: { name: "annotation" },
            },
            {
              name: "--default-action",
              description:
                "Default action that needs to be applied when no condition is matched. Example: Permit",
              args: { name: "default-action", suggestions: ["Deny", "Permit"] },
            },
            {
              name: "--dynamic-match-conf",
              description:
                'List of dynamic match configurations. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "dynamic-match-conf" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location of Azure region When not specified, the location of the resource group will be used",
              args: { name: "location" },
            },
            {
              name: "--match-conf",
              description:
                'List of match configurations. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "match-conf" },
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
              name: "--tags",
              description:
                'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tags" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete the Access Control List resource",
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
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Name of the Access Control List",
              args: { name: "resource-name" },
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
            "List all Access Control Lists in the provided resource group or subscription",
          options: [
            {
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "show",
          description:
            "Show details of the provided Access Control List resource",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Name of the Access Control List",
              args: { name: "resource-name" },
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
          description: "Update the Access Control List resource",
          options: [
            {
              name: "--acls-url",
              description: "Access Control List file URL",
              args: { name: "acls-url" },
            },
            {
              name: "--annotation",
              description: "Description for underlying resource",
              args: { name: "annotation" },
            },
            {
              name: "--configuration-type",
              description:
                "Input method to configure Access Control List. Example: File",
              args: {
                name: "configuration-type",
                suggestions: ["File", "Inline"],
              },
            },
            {
              name: "--default-action",
              description:
                "Default action that needs to be applied when no condition is matched. Example: Permit",
              args: { name: "default-action", suggestions: ["Deny", "Permit"] },
            },
            {
              name: "--dynamic-match-conf",
              description:
                'List of dynamic match configurations. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "dynamic-match-conf" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--match-conf",
              description:
                'List of match configurations. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "match-conf" },
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
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Name of the Access Control List",
              args: { name: "resource-name" },
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
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Name of the Access Control List",
              args: { name: "resource-name" },
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
      name: "controller",
      description: "Manage Network Fabric Controller Resource",
      subcommands: [
        {
          name: "create",
          description: "Create a Network Fabric Controller resource",
          options: [
            {
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--resource-name",
              description: "Name of the Network Fabric Controller",
              args: { name: "resource-name" },
              isRequired: true,
            },
            {
              name: "--annotation",
              description: "Description for underlying resource",
              args: { name: "annotation" },
            },
            {
              name: "--infra-er-connections",
              description:
                'Infra ER connections to manage infra resources. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "infra-er-connections" },
            },
            {
              name: "--ipv4-address-space",
              description: "IPv4 Network Fabric Controller Address Space",
              args: { name: "ipv4-address-space" },
            },
            {
              name: "--ipv6-address-space",
              description: "IPv6 Network Fabric Controller Address Space",
              args: { name: "ipv6-address-space" },
            },
            {
              name: "--is-workload-management-network-enabled",
              description:
                "A workload management network is required for all the tenant (workload) traffic. This traffic is only dedicated for Tenant workloads which are required to access internet or any other MSFT/Public endpoints. Default value is True",
              args: {
                name: "is-workload-management-network-enabled",
                suggestions: ["False", "True"],
              },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location of Azure region When not specified, the location of the resource group will be used",
              args: { name: "location" },
            },
            {
              name: ["--managed-resource-group-configuration", "--mrg"],
              description:
                'Managed Resource Group configuration properties. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "managed-resource-group-configuration" },
            },
            {
              name: "--nfc-sku",
              description: "Network Fabric Controller SKU",
              args: {
                name: "nfc-sku",
                suggestions: ["Basic", "HighPerformance", "Standard"],
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
              name: "--tags",
              description:
                'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tags" },
            },
            {
              name: "--workload-er-connections",
              description:
                'Workload management Network for hosting Proxy, NTP and DNS for workloads. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "workload-er-connections" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete the Network Fabric Controller resource",
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
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Name of the Network Fabric Controller",
              args: { name: "resource-name" },
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
            "List all Network Fabric Controllers in the provided resource group or subscription",
          options: [
            {
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "show",
          description:
            "Show details of the provided Network Fabric Controller resource",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Name of the Network Fabric Controller",
              args: { name: "resource-name" },
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
          description: "Update the Network Fabric Controller resource",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--infra-er-connections",
              description:
                'Infra ER connections to manage infra resources. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "infra-er-connections" },
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
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Name of the Network Fabric Controller",
              args: { name: "resource-name" },
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
              name: "--workload-er-connections",
              description:
                'As part of an update, the workload ExpressRoute CircuitID should be provided to create and Provision a NFC. This Express route is dedicated for Workload services. (This is a Mandatory attribute). Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "workload-er-connections" },
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
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Name of the Network Fabric Controller",
              args: { name: "resource-name" },
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
      name: "device",
      description: "Manage Network Device Resource",
      subcommands: [
        {
          name: "list",
          description:
            "List all Network Devices in the provided resource group or subscription",
          options: [
            {
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "show",
          description: "Show details of the provided Network Device resource",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Name of the Network Device",
              args: { name: "resource-name" },
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
          description: "Update the Network Device resource",
          options: [
            {
              name: "--annotation",
              description: "Description for underlying resource",
              args: { name: "annotation" },
            },
            {
              name: "--host-name",
              description:
                "The Host Name of the device. All Network Device names should follow the format --. Example: AustinNF-AR-CE1",
              args: { name: "host-name" },
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
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Name of the Network Device",
              args: { name: "resource-name" },
            },
            {
              name: "--serial-number",
              description:
                "Serial number of the device. Format of serial Number - Make;Model;HardwareRevisionId;SerialNumber. Example: Arista;DCS-7280DR3-24;12.05;JPE21116969",
              args: { name: "serial-number" },
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
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Name of the Network Device",
              args: { name: "resource-name" },
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
      name: "externalnetwork",
      description: "Manage External Network Resource",
      subcommands: [
        {
          name: "create",
          description: "Create a External Network resource",
          options: [
            {
              name: ["--l3-isolation-domain-name", "--l3domain"],
              description: "Name of the L3 Isolation Domain",
              args: { name: "l3-isolation-domain-name" },
              isRequired: true,
            },
            {
              name: "--peering-option",
              description: "Peering option list",
              args: {
                name: "peering-option",
                suggestions: ["OptionA", "OptionB"],
              },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--resource-name",
              description: "Name of the External Network",
              args: { name: "resource-name" },
              isRequired: true,
            },
            {
              name: "--annotation",
              description: "Description for underlying resource",
              args: { name: "annotation" },
            },
            {
              name: "--export-route-policy",
              description:
                'Export Route Policy either IPv4 or IPv6. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "export-route-policy" },
            },
            {
              name: "--export-route-policy-id",
              description:
                "ARM Resource ID of the RoutePolicy. This is used for the backward compatibility",
              args: { name: "export-route-policy-id" },
            },
            {
              name: "--import-route-policy",
              description:
                'Import Route Policy either IPv4 or IPv6. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "import-route-policy" },
            },
            {
              name: "--import-route-policy-id",
              description:
                "ARM Resource ID of the RoutePolicy. This is used for the backward compatibility",
              args: { name: "import-route-policy-id" },
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
              name: "--option-a-properties",
              description:
                'Option A properties object. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "option-a-properties" },
            },
            {
              name: "--option-b-properties",
              description:
                'Option B properties object. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "option-b-properties" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete the External Network resource",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--l3-isolation-domain-name", "--l3domain"],
              description: "Name of the L3 Isolation Domain",
              args: { name: "l3-isolation-domain-name" },
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
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Name of the External Network",
              args: { name: "resource-name" },
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
            "List all External Networks in the provided resource group",
          options: [
            {
              name: ["--l3-isolation-domain-name", "--l3domain"],
              description: "Name of the L3 Isolation Domain",
              args: { name: "l3-isolation-domain-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description: "Show details of the provided External Network resource",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--l3-isolation-domain-name", "--l3domain"],
              description: "Name of the L3 Isolation Domain",
              args: { name: "l3-isolation-domain-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Name of the External Network",
              args: { name: "resource-name" },
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
          description: "Update the External Networks resource",
          options: [
            {
              name: "--annotation",
              description: "Description for underlying resource",
              args: { name: "annotation" },
            },
            {
              name: "--export-route-policy",
              description:
                'Export Route Policy either IPv4 or IPv6. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "export-route-policy" },
            },
            {
              name: "--export-route-policy-id",
              description:
                "ARM Resource ID of the RoutePolicy. This is used for the backward compatibility",
              args: { name: "export-route-policy-id" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--import-route-policy",
              description:
                'Import Route Policy either IPv4 or IPv6. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "import-route-policy" },
            },
            {
              name: "--import-route-policy-id",
              description:
                "ARM Resource ID of the RoutePolicy. This is used for the backward compatibility",
              args: { name: "import-route-policy-id" },
            },
            {
              name: ["--l3-isolation-domain-name", "--l3domain"],
              description: "Name of the L3 Isolation Domain",
              args: { name: "l3-isolation-domain-name" },
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
              name: "--option-a-properties",
              description:
                'Option A properties object. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "option-a-properties" },
            },
            {
              name: "--option-b-properties",
              description:
                'Option B properties object. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "option-b-properties" },
            },
            {
              name: "--peering-option",
              description: "Peering option list",
              args: {
                name: "peering-option",
                suggestions: ["OptionA", "OptionB"],
              },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Name of the External Network",
              args: { name: "resource-name" },
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
              name: ["--l3-isolation-domain-name", "--l3domain"],
              description: "Name of the L3 Isolation Domain",
              args: { name: "l3-isolation-domain-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Name of the External Network",
              args: { name: "resource-name" },
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
      name: "fabric",
      description: "Manage Network Fabric Resource",
      subcommands: [
        {
          name: "commit-configuration",
          description:
            "Atomic update of the given Network Fabric instance. Sync update of NFA resources at Fabric level",
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
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Name of the Network Fabric",
              args: { name: "resource-name" },
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
          description: "Create a Network Fabric resource",
          options: [
            {
              name: "--fabric-asn",
              description:
                "ASN of CE devices for CE/PE connectivity. The value should be between 1 to 4294967295. Example: 65123",
              args: { name: "fabric-asn" },
              isRequired: true,
            },
            {
              name: "--ipv4-prefix",
              description:
                "IPv4Prefix for Management Network. Example: 10.1.0.0/19",
              args: { name: "ipv4-prefix" },
              isRequired: true,
            },
            {
              name: "--managed-network-config",
              description:
                'Configuration to be used to setup the management network. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "managed-network-config" },
              isRequired: true,
            },
            {
              name: "--nf-sku",
              description:
                "Supported Network Fabric SKU. The SKU determines whether it is a single / multi rack Network Fabric",
              args: { name: "nf-sku" },
              isRequired: true,
            },
            {
              name: "--nfc-id",
              description:
                "Azure resource ID for the NetworkFabricController the NetworkFabric belongs",
              args: { name: "nfc-id" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--resource-name",
              description: "Name of the Network Fabric",
              args: { name: "resource-name" },
              isRequired: true,
            },
            {
              name: "--server-count-per-rack",
              description: "Number of servers.Possible values are from 1-16",
              args: { name: "server-count-per-rack" },
              isRequired: true,
            },
            {
              name: "--ts-config",
              description:
                'Network and credentials configuration currently applied to terminal server. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "ts-config" },
              isRequired: true,
            },
            {
              name: "--annotation",
              description: "Description for underlying resource",
              args: { name: "annotation" },
            },
            {
              name: "--ipv6-prefix",
              description:
                "IPv6Prefix for Management Network. Example: 3FFE:FFFF:0:CD40::/59",
              args: { name: "ipv6-prefix" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location of Azure region When not specified, the location of the resource group will be used",
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
              name: "--rack-count",
              description:
                "Number of compute racks associated to Network Fabric. Possible values are from 1-8",
              args: { name: "rack-count" },
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
          description: "Delete the Network Fabric resource",
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
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Name of the Network Fabric",
              args: { name: "resource-name" },
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
          name: "deprovision",
          description:
            "Deprovisions the underlying resources in the given Network Fabric instance",
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
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Name of the Network Fabric",
              args: { name: "resource-name" },
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
            "List all Network Fabrics in the provided resource group or subscription",
          options: [
            {
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "provision",
          description:
            "Provisions the underlying resources in the given Network Fabric instance",
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
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Name of the Network Fabric",
              args: { name: "resource-name" },
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
          description: "Show details of the provided Network Fabric resource",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Name of the Network Fabric",
              args: { name: "resource-name" },
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
          description: "Update the Network Fabric resource",
          options: [
            {
              name: "--annotation",
              description: "Description for underlying resource",
              args: { name: "annotation" },
            },
            {
              name: "--fabric-asn",
              description:
                "ASN of CE devices for CE/PE connectivity. The value should be between 1 to 4294967295. Example: 65123",
              args: { name: "fabric-asn" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--ipv4-prefix",
              description:
                "IPv4Prefix for Management Network. Example: 10.1.0.0/19",
              args: { name: "ipv4-prefix" },
            },
            {
              name: "--ipv6-prefix",
              description:
                "IPv6Prefix for Management Network. Example: 3FFE:FFFF:0:CD40::/59",
              args: { name: "ipv6-prefix" },
            },
            {
              name: "--managed-network-config",
              description:
                'Configuration to be used to setup the management network. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "managed-network-config" },
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
              name: "--rack-count",
              description:
                "Number of compute racks associated to Network Fabric. Possible values are from 1-8",
              args: { name: "rack-count" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Name of the Network Fabric",
              args: { name: "resource-name" },
            },
            {
              name: "--server-count-per-rack",
              description: "Number of servers.Possible values are from 1-16",
              args: { name: "server-count-per-rack" },
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
              name: "--ts-config",
              description:
                'Network and credentials configuration currently applied to terminal server. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "ts-config" },
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
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Name of the Network Fabric",
              args: { name: "resource-name" },
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
      name: "interface",
      description: "Manage Network Interface Resource",
      subcommands: [
        {
          name: "delete",
          description: "Delete the Network Interface resource",
          options: [
            {
              name: ["--network-device-name", "--device"],
              description: "Name of the Network Device",
              args: { name: "network-device-name" },
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
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Name of the Network Interface",
              args: { name: "resource-name" },
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
            "List all Network Interfaces in the provided resource group",
          options: [
            {
              name: ["--network-device-name", "--device"],
              description: "Name of the Network Device",
              args: { name: "network-device-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description:
            "Show details of the provided Network Interface resource",
          options: [
            {
              name: ["--network-device-name", "--device"],
              description: "Name of the Network Device",
              args: { name: "network-device-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Name of the Network Interface",
              args: { name: "resource-name" },
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
          name: "update-admin-state",
          description: "Update the admin state of the Network Interface",
          options: [
            {
              name: ["--network-device-name", "--device"],
              description: "Name of the Network Device",
              args: { name: "network-device-name" },
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
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-ids",
              description:
                'Network Fabrics or Network Rack resource Id. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "resource-ids" },
            },
            {
              name: "--resource-name",
              description: "Name of the Network Interface",
              args: { name: "resource-name" },
            },
            {
              name: "--state",
              description: "Administrative state",
              args: { name: "state", suggestions: ["Disable", "Enable"] },
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
              name: ["--network-device-name", "--device"],
              description: "Name of the Network Device",
              args: { name: "network-device-name" },
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
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Name of the Network Interface",
              args: { name: "resource-name" },
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
      name: "internalnetwork",
      description: "Manage Internal Network Resource",
      subcommands: [
        {
          name: "create",
          description: "Create a Internal Network resource",
          options: [
            {
              name: ["--l3-isolation-domain-name", "--l3domain"],
              description: "Name of the L3 Isolation Domain",
              args: { name: "l3-isolation-domain-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--resource-name",
              description: "Name of the Internal Network",
              args: { name: "resource-name" },
              isRequired: true,
            },
            {
              name: "--vlan-id",
              description:
                "Vlan identifier. The value should be between 100-4094. Example: 1001",
              args: { name: "vlan-id" },
              isRequired: true,
            },
            {
              name: "--annotation",
              description: "Description for underlying resource",
              args: { name: "annotation" },
            },
            {
              name: "--bgp-configuration",
              description:
                'BGP configuration properties. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "bgp-configuration" },
            },
            {
              name: "--connected-ipv4-subnets",
              description:
                'List of Connected IPv4 Subnets. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "connected-ipv4-subnets" },
            },
            {
              name: "--connected-ipv6-subnets",
              description:
                'List of connected IPv6 Subnets. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "connected-ipv6-subnets" },
            },
            {
              name: "--egress-acl-id",
              description: "Egress Acl ARM resource ID",
              args: { name: "egress-acl-id" },
            },
            {
              name: "--export-route-policy",
              description:
                'Export Route Policy either IPv4 or IPv6. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "export-route-policy" },
            },
            {
              name: "--export-route-policy-id",
              description:
                "ARM Resource ID of the RoutePolicy. This is used for the backward compatibility",
              args: { name: "export-route-policy-id" },
            },
            {
              name: "--extension",
              description:
                "Internal Network Extension type. Default value is NoExtension. Example: NoExtension",
              args: { name: "extension", suggestions: ["NPB", "NoExtension"] },
            },
            {
              name: "--import-route-policy",
              description:
                'Import Route Policy either IPv4 or IPv6. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "import-route-policy" },
            },
            {
              name: "--import-route-policy-id",
              description:
                "ARM Resource ID of the RoutePolicy. This is used for the backward compatibility",
              args: { name: "import-route-policy-id" },
            },
            {
              name: "--ingress-acl-id",
              description: "Ingress Acl ARM resource ID",
              args: { name: "ingress-acl-id" },
            },
            {
              name: "--is-monitoring-enabled",
              description:
                "To check whether monitoring of internal network is enabled or not. Default value is False. Example: False",
              args: {
                name: "is-monitoring-enabled",
                suggestions: ["False", "True"],
              },
            },
            {
              name: "--mtu",
              description:
                "Maximum transmission unit. The value should be between 64 to 9200. Default value is 1500. Example: 1500",
              args: { name: "mtu" },
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
              name: "--static-route-configuration",
              description:
                'Static Route Configuration properties. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "static-route-configuration" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete the Internal Network resource",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--l3-isolation-domain-name", "--l3domain"],
              description: "Name of the L3 Isolation Domain",
              args: { name: "l3-isolation-domain-name" },
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
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Name of the Internal Network",
              args: { name: "resource-name" },
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
            "List all Internal Networks in the provided resource group",
          options: [
            {
              name: ["--l3-isolation-domain-name", "--l3domain"],
              description: "Name of the L3 Isolation Domain",
              args: { name: "l3-isolation-domain-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description: "Show details of the provided Internal Network resource",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--l3-isolation-domain-name", "--l3domain"],
              description: "Name of the L3 Isolation Domain",
              args: { name: "l3-isolation-domain-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Name of the Internal Network",
              args: { name: "resource-name" },
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
          description: "Update the Internal Network resource",
          options: [
            {
              name: "--annotation",
              description: "Description for underlying resource",
              args: { name: "annotation" },
            },
            {
              name: "--bgp-configuration",
              description:
                'BGP configuration properties. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "bgp-configuration" },
            },
            {
              name: "--connected-ipv4-subnets",
              description:
                'List of Connected IPv4 Subnets. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "connected-ipv4-subnets" },
            },
            {
              name: "--connected-ipv6-subnets",
              description:
                'List of connected IPv6 Subnets. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "connected-ipv6-subnets" },
            },
            {
              name: "--egress-acl-id",
              description: "Egress Acl ARM resource ID",
              args: { name: "egress-acl-id" },
            },
            {
              name: "--export-route-policy",
              description:
                'Export Route Policy either IPv4 or IPv6. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "export-route-policy" },
            },
            {
              name: "--export-route-policy-id",
              description:
                "ARM Resource ID of the RoutePolicy. This is used for the backward compatibility",
              args: { name: "export-route-policy-id" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--import-route-policy",
              description:
                'Import Route Policy either IPv4 or IPv6. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "import-route-policy" },
            },
            {
              name: "--import-route-policy-id",
              description:
                "ARM Resource ID of the RoutePolicy. This is used for the backward compatibility",
              args: { name: "import-route-policy-id" },
            },
            {
              name: "--ingress-acl-id",
              description: "Ingress Acl ARM resource ID",
              args: { name: "ingress-acl-id" },
            },
            {
              name: "--is-monitoring-enabled",
              description:
                "To check whether monitoring of internal network is enabled or not. Default value is False. Example: False",
              args: {
                name: "is-monitoring-enabled",
                suggestions: ["False", "True"],
              },
            },
            {
              name: ["--l3-isolation-domain-name", "--l3domain"],
              description: "Name of the L3 Isolation Domain",
              args: { name: "l3-isolation-domain-name" },
            },
            {
              name: "--mtu",
              description:
                "Maximum transmission unit. The value should be between 64 to 9200. Default value is 1500. Example: 1500",
              args: { name: "mtu" },
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
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Name of the Internal Network",
              args: { name: "resource-name" },
            },
            {
              name: "--static-route-configuration",
              description:
                'Static Route Configuration properties. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "static-route-configuration" },
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
              name: ["--l3-isolation-domain-name", "--l3domain"],
              description: "Name of the L3 Isolation Domain",
              args: { name: "l3-isolation-domain-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Name of the Internal Network",
              args: { name: "resource-name" },
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
      name: "internetgateway",
      description: "Manage Internet Gateway Resource",
      subcommands: [
        {
          name: "list",
          description:
            "List all Internet Gateways in the provided resource group or subscription",
          options: [
            {
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "show",
          description: "Show details of the provided Internet Gateway resource",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Name of the Internet Gateway",
              args: { name: "resource-name" },
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
          description: "Update the Internet Gateway resource",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--internet-gateway-rule-id",
              description: "ARM Resource ID of the Internet Gateway Rule",
              args: { name: "internet-gateway-rule-id" },
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
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Name of the Internet Gateway",
              args: { name: "resource-name" },
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
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Name of the Internet Gateway",
              args: { name: "resource-name" },
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
      name: "internetgatewayrule",
      description: "Manage Internet Gateway Rule Resource",
      subcommands: [
        {
          name: "create",
          description: "Create an Internet Gateway Rule resource",
          options: [
            {
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--resource-name",
              description: "Name of the Internet Gateway rule",
              args: { name: "resource-name" },
              isRequired: true,
            },
            {
              name: "--rule-properties",
              description:
                'Rules for the InternetGateways. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "rule-properties" },
              isRequired: true,
            },
            {
              name: "--annotation",
              description: "Description for underlying resource",
              args: { name: "annotation" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location of Azure region When not specified, the location of the resource group will be used",
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
              name: "--tags",
              description:
                'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tags" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete the Internet Gateway Rule resource",
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
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Name of the Internet Gateway rule",
              args: { name: "resource-name" },
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
            "List all Internet Gateway Rules in the provided resource group or subscription",
          options: [
            {
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "show",
          description:
            "Show details of the provided Internet Gateway Rule resource",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Name of the Internet Gateway rule",
              args: { name: "resource-name" },
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
          description: "Update the Internet Gateway Rule resource",
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
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Name of the Internet Gateway rule",
              args: { name: "resource-name" },
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
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Name of the Internet Gateway rule",
              args: { name: "resource-name" },
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
      name: "ipcommunity",
      description: "Manage Ip Community Resource",
      subcommands: [
        {
          name: "create",
          description: "Create a Ip Community resource",
          options: [
            {
              name: "--ip-comm-rules",
              description:
                'List of IP Community Rules. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "ip-comm-rules" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--resource-name",
              description: "Name of the IP Community",
              args: { name: "resource-name" },
              isRequired: true,
            },
            {
              name: "--annotation",
              description: "Description for underlying resource",
              args: { name: "annotation" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location of Azure region When not specified, the location of the resource group will be used",
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
              name: "--tags",
              description:
                'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tags" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete the Ip Community resource",
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
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Name of the IP Community",
              args: { name: "resource-name" },
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
            "List all Ip Communities in the provided resource group or subscription",
          options: [
            {
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "show",
          description: "Show details of the provided Ip Community resource",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Name of the IP Community",
              args: { name: "resource-name" },
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
            "Update to update certain properties of the IP Community resource",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--ip-comm-rules",
              description:
                'List of IP Community Rules. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "ip-comm-rules" },
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
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Name of the IP Community",
              args: { name: "resource-name" },
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
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Name of the IP Community",
              args: { name: "resource-name" },
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
      name: "ipextendedcommunity",
      description: "Manage Ip Extended Community Resource",
      subcommands: [
        {
          name: "create",
          description: "Create a Ip Extended Community resource",
          options: [
            {
              name: "--ip-ext-comm-rules",
              description:
                'List of IP Extended Community Rules. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "ip-ext-comm-rules" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--resource-name",
              description: "Name of the IP Extended Community",
              args: { name: "resource-name" },
              isRequired: true,
            },
            {
              name: "--annotation",
              description: "Description for underlying resource",
              args: { name: "annotation" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location of Azure region When not specified, the location of the resource group will be used",
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
              name: "--tags",
              description:
                'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tags" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete the Ip Extended Community resource",
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
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Name of the IP Extended Community",
              args: { name: "resource-name" },
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
            "List all Ip Extended Communities in the provided resource group or subscription",
          options: [
            {
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "show",
          description:
            "Show details of the provided Ip Extended Community resource",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Name of the IP Extended Community",
              args: { name: "resource-name" },
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
            "Update to update certain properties of the IP Extended Community resource",
          options: [
            {
              name: "--annotation",
              description: "Description for underlying resource",
              args: { name: "annotation" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--ip-ext-comm-rules",
              description:
                'List of IP Extended Community Rules. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "ip-ext-comm-rules" },
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
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Name of the IP Extended Community",
              args: { name: "resource-name" },
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
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Name of the IP Extended Community",
              args: { name: "resource-name" },
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
      name: "ipprefix",
      description: "Manage Ip Prefix Resource",
      subcommands: [
        {
          name: "create",
          description: "Create a Ip Prefix resource",
          options: [
            {
              name: "--ip-prefix-rules",
              description:
                'The list of IP Prefix Rules. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "ip-prefix-rules" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--resource-name",
              description: "Name of the IP Prefix",
              args: { name: "resource-name" },
              isRequired: true,
            },
            {
              name: "--annotation",
              description: "Description for underlying resource",
              args: { name: "annotation" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location of Azure region When not specified, the location of the resource group will be used",
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
              name: "--tags",
              description:
                'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tags" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete the Ip Prefix resource",
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
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Name of the IP Prefix",
              args: { name: "resource-name" },
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
            "List all Ip Prefixes in the provided resource group or subscription",
          options: [
            {
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "show",
          description: "Show details of the provided Ip Prefix resource",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Name of the IP Prefix",
              args: { name: "resource-name" },
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
            "Update to update certain properties of the IP Prefix resource",
          options: [
            {
              name: "--annotation",
              description: "Description for underlying resource",
              args: { name: "annotation" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--ip-prefix-rules",
              description:
                'The list of IP Prefix Rules. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "ip-prefix-rules" },
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
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Name of the IP Prefix",
              args: { name: "resource-name" },
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
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Name of the IP Prefix",
              args: { name: "resource-name" },
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
      name: "l2domain",
      description: "Manage L2 Isolation Domain Resource",
      subcommands: [
        {
          name: "create",
          description: "Create a L2 Isolation Domain resource",
          options: [
            {
              name: "--nf-id",
              description: "ARM Resource ID of the Network Fabric",
              args: { name: "nf-id" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--resource-name",
              description: "Name of the L2 Isolation Domain",
              args: { name: "resource-name" },
              isRequired: true,
            },
            {
              name: "--vlan-id",
              description:
                "Vlan Identifier of the Network Fabric. The value should be between 100 to 4094. Example: 501",
              args: { name: "vlan-id" },
              isRequired: true,
            },
            {
              name: "--annotation",
              description: "Description for underlying resource",
              args: { name: "annotation" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location of Azure region When not specified, the location of the resource group will be used",
              args: { name: "location" },
            },
            {
              name: "--mtu",
              description:
                "Maximum transmission unit. The value should be between 64 to 9200. Default value is 1500. Example: 1500",
              args: { name: "mtu" },
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
              name: "--tags",
              description:
                'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tags" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete the L2 Isolation Domain resource",
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
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Name of the L2 Isolation Domain",
              args: { name: "resource-name" },
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
            "List all L2 Isolation Domains in the provided resource group or subscription",
          options: [
            {
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "show",
          description:
            "Show details of the provided L2 Isolation Domain resource",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Name of the L2 Isolation Domain",
              args: { name: "resource-name" },
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
          description: "Update the L2 Isolation Domain resource",
          options: [
            {
              name: "--annotation",
              description: "Description for underlying resource",
              args: { name: "annotation" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--mtu",
              description:
                "Maximum transmission unit. The value should be between 64 to 9200. Default value is 1500. Example: 1500",
              args: { name: "mtu" },
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
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Name of the L2 Isolation Domain",
              args: { name: "resource-name" },
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
          name: "update-admin-state",
          description:
            "Enables isolation domain across the fabric or on specified racks",
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
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-ids",
              description:
                'Network Fabrics or Network Rack resource Id. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "resource-ids" },
            },
            {
              name: "--resource-name",
              description: "Name of the L2 Isolation Domain",
              args: { name: "resource-name" },
            },
            {
              name: "--state",
              description: "Administrative state",
              args: { name: "state", suggestions: ["Disable", "Enable"] },
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
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Name of the L2 Isolation Domain",
              args: { name: "resource-name" },
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
      name: "l3domain",
      description: "Manage L3 Isolation Domain Resource",
      subcommands: [
        {
          name: "create",
          description: "Create a L3 Isolation Domain resource",
          options: [
            {
              name: "--nf-id",
              description: "ARM Resource ID of the Network Fabric",
              args: { name: "nf-id" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--resource-name",
              description: "Name of the L3 Isolation Domain",
              args: { name: "resource-name" },
              isRequired: true,
            },
            {
              name: "--aggregate-route-configuration",
              description:
                'Aggregate route configurations. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "aggregate-route-configuration" },
            },
            {
              name: "--annotation",
              description: "Description for underlying resource",
              args: { name: "annotation" },
            },
            {
              name: "--connected-subnet-route-policy",
              description:
                'Connected Subnet RoutePolicy. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "connected-subnet-route-policy" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location of Azure region When not specified, the location of the resource group will be used",
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
              name: "--redistribute-connected-subnets",
              description:
                "Advertise Connected Subnets. Default value is True. Example: True",
              args: {
                name: "redistribute-connected-subnets",
                suggestions: ["False", "True"],
              },
            },
            {
              name: "--redistribute-static-routes",
              description:
                "Advertise Static Routes. Default value is False. Example: True",
              args: {
                name: "redistribute-static-routes",
                suggestions: ["False", "True"],
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
          name: "delete",
          description: "Delete the L3 Isolation Domain resource",
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
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Name of the L3 Isolation Domain",
              args: { name: "resource-name" },
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
            "List all L3 Isolation Domains in the provided resource group or subscription",
          options: [
            {
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "show",
          description:
            "Show details of the provided L3 Isolation Domain resource",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Name of the L3 Isolation Domain",
              args: { name: "resource-name" },
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
            "Update to update certain properties of the L3 Isolation Domain resource",
          options: [
            {
              name: "--aggregate-route-configuration",
              description:
                'Aggregate route configurations. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "aggregate-route-configuration" },
            },
            {
              name: "--annotation",
              description: "Description for underlying resource",
              args: { name: "annotation" },
            },
            {
              name: "--connected-subnet-route-policy",
              description:
                'Connected Subnet RoutePolicy. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "connected-subnet-route-policy" },
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
              name: "--redistribute-connected-subnets",
              description:
                "Advertise Connected Subnets. Default value is True. Example: True",
              args: {
                name: "redistribute-connected-subnets",
                suggestions: ["False", "True"],
              },
            },
            {
              name: "--redistribute-static-routes",
              description:
                "Advertise Static Routes. Default value is False. Example: True",
              args: {
                name: "redistribute-static-routes",
                suggestions: ["False", "True"],
              },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Name of the L3 Isolation Domain",
              args: { name: "resource-name" },
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
          name: "update-admin-state",
          description: "Enables racks for this Isolation Domain",
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
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-ids",
              description:
                'Network Fabrics or Network Rack resource Id. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "resource-ids" },
            },
            {
              name: "--resource-name",
              description: "Name of the L3 Isolation Domain",
              args: { name: "resource-name" },
            },
            {
              name: "--state",
              description: "Administrative state",
              args: { name: "state", suggestions: ["Disable", "Enable"] },
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
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Name of the L3 Isolation Domain",
              args: { name: "resource-name" },
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
      name: "neighborgroup",
      description: "Manage Neighbor Group Resource",
      subcommands: [
        {
          name: "create",
          description: "Create a Neighbor Group resource",
          options: [
            {
              name: "--destination",
              description:
                'An array of destination IPv4 Addresses or IPv6 Addresses. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "destination" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--resource-name",
              description: "Name of the Neighbor Group",
              args: { name: "resource-name" },
              isRequired: true,
            },
            {
              name: "--annotation",
              description: "Description for underlying resource",
              args: { name: "annotation" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location of Azure region When not specified, the location of the resource group will be used",
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
              name: "--tags",
              description:
                'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tags" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete the Neighbor Group resource",
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
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Name of the Neighbor Group",
              args: { name: "resource-name" },
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
            "List all Neighbor Groups in the provided resource group or subscription",
          options: [
            {
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "show",
          description: "Show details of the provided Neighbor Group resource",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Name of the Neighbor Group",
              args: { name: "resource-name" },
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
          description: "Update the Neighbor Group resource",
          options: [
            {
              name: "--annotation",
              description: "Description for underlying resource",
              args: { name: "annotation" },
            },
            {
              name: "--destination",
              description:
                'An array of destination IPv4 Addresses or IPv6 Addresses. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "destination" },
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
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Name of the Neighbor Group",
              args: { name: "resource-name" },
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
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Name of the Neighbor Group",
              args: { name: "resource-name" },
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
      name: "nni",
      description: "Manage Network To Network Interconnect Resource",
      subcommands: [
        {
          name: "create",
          description: "Create a Network To Network Interconnect resource",
          options: [
            {
              name: ["--fabric-name", "--fabric"],
              description: "Name of the Network Fabric",
              args: { name: "fabric-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--resource-name",
              description: "Name of the Network to Network Interconnect",
              args: { name: "resource-name" },
              isRequired: true,
            },
            {
              name: "--use-option-b",
              description: "Selection of option B for NNI. Example: True",
              args: { name: "use-option-b", suggestions: ["False", "True"] },
              isRequired: true,
            },
            {
              name: "--egress-acl-id",
              description: "Egress Acl ARM resource ID",
              args: { name: "egress-acl-id" },
            },
            {
              name: "--export-route-policy",
              description:
                'Export Route Policy configuration. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "export-route-policy" },
            },
            {
              name: "--import-route-policy",
              description:
                'Import Route Policy configuration. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "import-route-policy" },
            },
            {
              name: "--ingress-acl-id",
              description: "Ingress Acl ARM resource ID",
              args: { name: "ingress-acl-id" },
            },
            {
              name: "--is-management-type",
              description:
                "Configuration to use NNI for Infrastructure Management. Default value is True. Example: True",
              args: {
                name: "is-management-type",
                suggestions: ["False", "True"],
              },
            },
            {
              name: "--layer2-configuration",
              description:
                'Common properties for Layer2 Configuration. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "layer2-configuration" },
            },
            {
              name: "--nni-type",
              description:
                "Usage type of NNI. Default value is CE. Example: CE",
              args: { name: "nni-type", suggestions: ["CE", "NPB"] },
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
              name: "--npb-static-route-configuration",
              description:
                'NPB Static Route Configuration properties. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "npb-static-route-configuration" },
            },
            {
              name: "--option-b-layer3-configuration",
              description:
                'Common properties for Layer3Configuration. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "option-b-layer3-configuration" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete the Network To Network Interconnect resource",
          options: [
            {
              name: ["--fabric-name", "--fabric"],
              description: "Name of the Network Fabric",
              args: { name: "fabric-name" },
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
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Name of the Network to Network Interconnect",
              args: { name: "resource-name" },
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
            "List all Network To Network Interconnects in the provided resource group",
          options: [
            {
              name: ["--fabric-name", "--fabric"],
              description: "Name of the Network Fabric",
              args: { name: "fabric-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description:
            "Show details of the provided Network To Network Interconnect resource",
          options: [
            {
              name: ["--fabric-name", "--fabric"],
              description: "Name of the Network Fabric",
              args: { name: "fabric-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Name of the Network to Network Interconnect",
              args: { name: "resource-name" },
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
          description: "Update the Network to Network interconnect resource",
          options: [
            {
              name: "--egress-acl-id",
              description: "Egress Acl ARM resource ID",
              args: { name: "egress-acl-id" },
            },
            {
              name: "--export-route-policy",
              description:
                'Export Route Policy information Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "export-route-policy" },
            },
            {
              name: ["--fabric-name", "--fabric"],
              description: "Name of the Network Fabric",
              args: { name: "fabric-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--import-route-policy",
              description:
                'Import Route Policy information. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "import-route-policy" },
            },
            {
              name: "--ingress-acl-id",
              description: "Ingress Acl ARM resource ID",
              args: { name: "ingress-acl-id" },
            },
            {
              name: "--layer2-configuration",
              description:
                'Common properties for Layer2Configuration. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "layer2-configuration" },
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
              name: "--npb-static-route-configuration",
              description:
                'NPB Static Route Configuration properties. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "npb-static-route-configuration" },
            },
            {
              name: "--option-b-layer3-configuration",
              description:
                'Common properties for Layer3Configuration. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "option-b-layer3-configuration" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Name of the Network to Network Interconnect",
              args: { name: "resource-name" },
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
              name: ["--fabric-name", "--fabric"],
              description: "Name of the Network Fabric",
              args: { name: "fabric-name" },
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
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Name of the Network to Network Interconnect",
              args: { name: "resource-name" },
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
      name: "npb",
      description: "Manage Network Packet Broker Resource",
      subcommands: [
        {
          name: "list",
          description:
            "List all Network Packet Brokers in the provided resource group or subscription",
          options: [
            {
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "show",
          description:
            "Show details of the provided Network Packet Broker resource",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Name of the Network Packet Broker",
              args: { name: "resource-name" },
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
      name: "rack",
      description: "Manage Network Rack Resource",
      subcommands: [
        {
          name: "list",
          description:
            "List all Network Racks in the provided resource group or subscription",
          options: [
            {
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "show",
          description: "Show details of the provided Network Rack resource",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Name of the Network Rack",
              args: { name: "resource-name" },
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
      name: "routepolicy",
      description: "Manage Route Policy Resource",
      subcommands: [
        {
          name: "create",
          description: "Create a Route Policy resource",
          options: [
            {
              name: "--nf-id",
              description: "ARM Resource ID of the Network Fabric",
              args: { name: "nf-id" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--resource-name",
              description: "Name of the Route Policy",
              args: { name: "resource-name" },
              isRequired: true,
            },
            {
              name: "--statements",
              description:
                'Route Policy statements. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "statements" },
              isRequired: true,
            },
            {
              name: "--address-family-type",
              description:
                "AddressFamilyType. This parameter decides whether the given ipv4 or ipv6 route policy. Default value is IPv4",
              args: {
                name: "address-family-type",
                suggestions: ["IPv4", "IPv6"],
              },
            },
            {
              name: "--annotation",
              description: "Description for underlying resource",
              args: { name: "annotation" },
            },
            {
              name: "--default-action",
              description:
                "Default action that needs to be applied when no condition is matched. Example: Permit",
              args: { name: "default-action", suggestions: ["Deny", "Permit"] },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location of Azure region When not specified, the location of the resource group will be used",
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
              name: "--tags",
              description:
                'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tags" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete the Route Policy resource",
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
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Name of the Route Policy",
              args: { name: "resource-name" },
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
            "List all Route Policies in the provided resource group or subscription",
          options: [
            {
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "show",
          description: "Show details of the provided Route Policy resource",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Name of the Route Policy",
              args: { name: "resource-name" },
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
          description: "Update the Route Policy resource",
          options: [
            {
              name: "--default-action",
              description:
                "Default action that needs to be applied when no condition is matched. Example: Permit",
              args: { name: "default-action", suggestions: ["Deny", "Permit"] },
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
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Name of the Route Policy",
              args: { name: "resource-name" },
            },
            {
              name: "--statements",
              description:
                'Route Policy statements. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "statements" },
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
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Name of the Route Policy",
              args: { name: "resource-name" },
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
      name: "tap",
      description: "Manage Network Tap Resource",
      subcommands: [
        {
          name: "create",
          description: "Create a Network Tap resource",
          options: [
            {
              name: "--destinations",
              description:
                'List of destinations to send the filter traffic. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "destinations" },
              isRequired: true,
            },
            {
              name: ["--network-packet-broker-id", "--npb-id"],
              description: "ARM resource ID of the Network Packet Broker",
              args: { name: "network-packet-broker-id" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--resource-name",
              description: "Name of the Network Tap",
              args: { name: "resource-name" },
              isRequired: true,
            },
            {
              name: "--annotation",
              description: "Description for underlying resource",
              args: { name: "annotation" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location of Azure region When not specified, the location of the resource group will be used",
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
              name: "--polling-type",
              description:
                "Network tap rule file polling type. Default value is Pull. Example: Pull",
              args: { name: "polling-type", suggestions: ["Pull", "Push"] },
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
          description: "Delete the Network Tap resource",
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
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Name of the Network Tap",
              args: { name: "resource-name" },
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
            "List all Network Taps in the provided resource group or subscription",
          options: [
            {
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "show",
          description: "Show details of the provided Network Tap resource",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Name of the Network Tap",
              args: { name: "resource-name" },
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
          description: "Update the Network Tap resource",
          options: [
            {
              name: "--annotation",
              description: "Description for underlying resource",
              args: { name: "annotation" },
            },
            {
              name: "--destinations",
              description:
                'List of destination properties to send the filter traffic. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "destinations" },
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
              name: "--polling-type",
              description:
                "Network tap rule file polling type. Default value is Pull. Example: Pull",
              args: { name: "polling-type", suggestions: ["Pull", "Push"] },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Name of the Network Tap",
              args: { name: "resource-name" },
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
          name: "update-admin-state",
          description: "Enable/Disable a network tap",
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
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-ids",
              description:
                'Network Fabrics or Network Rack resource Id. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "resource-ids" },
            },
            {
              name: "--resource-name",
              description: "Name of the Network Tap",
              args: { name: "resource-name" },
            },
            {
              name: "--state",
              description: "Administrative state",
              args: { name: "state", suggestions: ["Disable", "Enable"] },
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
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Name of the Network Tap",
              args: { name: "resource-name" },
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
      name: "taprule",
      description: "Manage Network Tap Rule Resource",
      subcommands: [
        {
          name: "create",
          description: "Create a Network Tap Rule resource",
          options: [
            {
              name: "--configuration-type",
              description:
                "Input method to configure Network Tap Rule. Example: File",
              args: {
                name: "configuration-type",
                suggestions: ["File", "Inline"],
              },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--resource-name",
              description: "Name of the Network Tap Rule",
              args: { name: "resource-name" },
              isRequired: true,
            },
            {
              name: "--annotation",
              description: "Description for underlying resource",
              args: { name: "annotation" },
            },
            {
              name: "--dynamic-match-conf",
              description:
                'List of dynamic match configurations. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "dynamic-match-conf" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location of Azure region When not specified, the location of the resource group will be used",
              args: { name: "location" },
            },
            {
              name: "--match-conf",
              description:
                'List of match configurations. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "match-conf" },
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
              name: "--polling-interval",
              description:
                "Polling interval in seconds. Default value is 30. Example: 60",
              args: {
                name: "polling-interval",
                suggestions: ["120", "30", "60", "90"],
              },
            },
            {
              name: "--tags",
              description:
                'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tags" },
            },
            {
              name: "--tap-rules-url",
              description: "Network Tap Rules file URL",
              args: { name: "tap-rules-url" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete the Network Tap Rule resource",
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
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Name of the Network Tap Rule",
              args: { name: "resource-name" },
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
            "List all Network Tap Rules in the provided resource group or subscription",
          options: [
            {
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "show",
          description: "Show details of the provided Network Tap Rule resource",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Name of the Network Tap Rule",
              args: { name: "resource-name" },
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
          description: "Update the Network Tap Rule resource",
          options: [
            {
              name: "--annotation",
              description: "Description for underlying resource",
              args: { name: "annotation" },
            },
            {
              name: "--configuration-type",
              description:
                "Input method to configure Network Tap Rule. Example: File",
              args: {
                name: "configuration-type",
                suggestions: ["File", "Inline"],
              },
            },
            {
              name: "--dynamic-match-conf",
              description:
                'List of dynamic match configurations. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "dynamic-match-conf" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--match-conf",
              description:
                'List of match configurations. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "match-conf" },
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
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Name of the Network Tap Rule",
              args: { name: "resource-name" },
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
              name: "--tap-rules-url",
              description: "Network Tap Rules file URL",
              args: { name: "tap-rules-url" },
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
              description: "Name of the resource group",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "Name of the Network Tap Rule",
              args: { name: "resource-name" },
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
