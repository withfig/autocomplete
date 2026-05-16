const completion: Fig.Spec = {
  name: "guestconfig",
  description: "Manage Guest Configuration",
  subcommands: [
    {
      name: "guest-configuration-assignment",
      description: "Guestconfig guest-configuration-assignment",
      subcommands: [
        {
          name: "create",
          description:
            "Creates an association between a VM and guest configuration",
          options: [
            {
              name: "--guest-configuration-assignment-name",
              description: "Name of the guest configuration assignment",
              args: { name: "guest-configuration-assignment-name" },
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
              name: "--context",
              description:
                "The source which initiated the guest configuration assignment. Ex: Azure Policy",
              args: { name: "context" },
            },
            {
              name: "--guest-configuration-configuration-parameter",
              description:
                "The configuration parameters for the guest configuration",
              args: { name: "guest-configuration-configuration-parameter" },
            },
            {
              name: "--guest-configuration-configuration-setting",
              description:
                "The configuration setting for the guest configuration",
              args: { name: "guest-configuration-configuration-setting" },
            },
            {
              name: "--guest-configuration-name",
              description: "Name of the guest configuration",
              args: { name: "guest-configuration-name" },
            },
            {
              name: "--guest-configuration-version",
              description: "Version of the guest configuration",
              args: { name: "guest-configuration-version" },
            },
            {
              name: "--latest-assignment-report-assignment",
              description:
                "Configuration details of the guest configuration assignment. Expected value: json-string/@json-file",
              args: { name: "latest-assignment-report-assignment" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--name",
              description: "Name of the guest configuration assignment",
              args: { name: "name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a guest configuration assignment",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the guest configuration assignment",
              args: { name: "name" },
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
              name: "--vm-name",
              description: "The name of the virtual machine",
              args: { name: "vm-name" },
            },
          ],
        },
        {
          name: "list",
          description:
            "List all guest configuration assignments for a virtual machine",
          options: [
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
          description: "Get information about a guest configuration assignment",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The guest configuration assignment name",
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
              name: "--vm-name",
              description: "The name of the virtual machine",
              args: { name: "vm-name" },
            },
          ],
        },
        {
          name: "update",
          description:
            "Creates an association between a VM and guest configuration",
          options: [
            {
              name: "--context",
              description:
                "The source which initiated the guest configuration assignment. Ex: Azure Policy",
              args: { name: "context" },
            },
            {
              name: "--guest-configuration-assignment-name",
              description: "Name of the guest configuration assignment",
              args: { name: "guest-configuration-assignment-name" },
            },
            {
              name: "--guest-configuration-configuration-parameter",
              description:
                "The configuration parameters for the guest configuration",
              args: { name: "guest-configuration-configuration-parameter" },
            },
            {
              name: "--guest-configuration-configuration-setting",
              description:
                "The configuration setting for the guest configuration",
              args: { name: "guest-configuration-configuration-setting" },
            },
            {
              name: "--guest-configuration-name",
              description: "Name of the guest configuration",
              args: { name: "guest-configuration-name" },
            },
            {
              name: "--guest-configuration-version",
              description: "Version of the guest configuration",
              args: { name: "guest-configuration-version" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--latest-assignment-report-assignment",
              description:
                "Configuration details of the guest configuration assignment. Expected value: json-string/@json-file",
              args: { name: "latest-assignment-report-assignment" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--name",
              description: "Name of the guest configuration assignment",
              args: { name: "name" },
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
              name: "--vm-name",
              description: "The name of the virtual machine",
              args: { name: "vm-name" },
            },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the guestconfig guest-configuration-assignment is met",
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
              name: ["--name", "-n"],
              description: "The guest configuration assignment name",
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
              name: "--vm-name",
              description: "The name of the virtual machine",
              args: { name: "vm-name" },
            },
          ],
        },
      ],
    },
    {
      name: "guest-configuration-assignment-report",
      description: "Guestconfig guest-configuration-assignment-report",
      subcommands: [
        {
          name: "list",
          description:
            "List all reports for the guest configuration assignment, latest report first",
          options: [
            {
              name: "--guest-configuration-assignment-name",
              description: "The guest configuration assignment name",
              args: { name: "guest-configuration-assignment-name" },
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
            "Get a report for the guest configuration assignment, by reportId",
          options: [
            {
              name: "--guest-configuration-assignment-name",
              description: "The guest configuration assignment name",
              args: { name: "guest-configuration-assignment-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--report-id",
              description:
                "The GUID for the guest configuration assignment report",
              args: { name: "report-id" },
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
    {
      name: "guest-configuration-hcrp-assignment",
      description: "Guestconfig guest-configuration-hcrp-assignment",
      subcommands: [
        {
          name: "create",
          description:
            "Creates an association between a ARC machine and guest configuration",
          options: [
            {
              name: "--guest-configuration-assignment-name",
              description: "Name of the guest configuration assignment",
              args: { name: "guest-configuration-assignment-name" },
              isRequired: true,
            },
            {
              name: "--machine-name",
              description: "The name of the ARC machine",
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
              name: "--context",
              description:
                "The source which initiated the guest configuration assignment. Ex: Azure Policy",
              args: { name: "context" },
            },
            {
              name: "--guest-configuration-configuration-parameter",
              description:
                "The configuration parameters for the guest configuration",
              args: { name: "guest-configuration-configuration-parameter" },
            },
            {
              name: "--guest-configuration-configuration-setting",
              description:
                "The configuration setting for the guest configuration",
              args: { name: "guest-configuration-configuration-setting" },
            },
            {
              name: "--guest-configuration-name",
              description: "Name of the guest configuration",
              args: { name: "guest-configuration-name" },
            },
            {
              name: "--guest-configuration-version",
              description: "Version of the guest configuration",
              args: { name: "guest-configuration-version" },
            },
            {
              name: "--latest-assignment-report-assignment",
              description:
                "Configuration details of the guest configuration assignment. Expected value: json-string/@json-file",
              args: { name: "latest-assignment-report-assignment" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--name",
              description: "Name of the guest configuration assignment",
              args: { name: "name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a guest configuration assignment",
          options: [
            {
              name: "--guest-configuration-assignment-name",
              description: "Name of the guest configuration assignment",
              args: { name: "guest-configuration-assignment-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--machine-name",
              description: "The name of the ARC machine",
              args: { name: "machine-name" },
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
          name: "list",
          description:
            "List all guest configuration assignments for an ARC machine",
          options: [
            {
              name: "--machine-name",
              description: "The name of the ARC machine",
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
          description: "Get information about a guest configuration assignment",
          options: [
            {
              name: "--guest-configuration-assignment-name",
              description: "The guest configuration assignment name",
              args: { name: "guest-configuration-assignment-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--machine-name",
              description: "The name of the ARC machine",
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
            "Creates an association between a ARC machine and guest configuration",
          options: [
            {
              name: "--context",
              description:
                "The source which initiated the guest configuration assignment. Ex: Azure Policy",
              args: { name: "context" },
            },
            {
              name: "--guest-configuration-assignment-name",
              description: "Name of the guest configuration assignment",
              args: { name: "guest-configuration-assignment-name" },
            },
            {
              name: "--guest-configuration-configuration-parameter",
              description:
                "The configuration parameters for the guest configuration",
              args: { name: "guest-configuration-configuration-parameter" },
            },
            {
              name: "--guest-configuration-configuration-setting",
              description:
                "The configuration setting for the guest configuration",
              args: { name: "guest-configuration-configuration-setting" },
            },
            {
              name: "--guest-configuration-name",
              description: "Name of the guest configuration",
              args: { name: "guest-configuration-name" },
            },
            {
              name: "--guest-configuration-version",
              description: "Version of the guest configuration",
              args: { name: "guest-configuration-version" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--latest-assignment-report-assignment",
              description:
                "Configuration details of the guest configuration assignment. Expected value: json-string/@json-file",
              args: { name: "latest-assignment-report-assignment" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--machine-name",
              description: "The name of the ARC machine",
              args: { name: "machine-name" },
            },
            {
              name: "--name",
              description: "Name of the guest configuration assignment",
              args: { name: "name" },
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
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the guestconfig guest-configuration-hcrp-assignment is met",
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
              name: "--guest-configuration-assignment-name",
              description: "The guest configuration assignment name",
              args: { name: "guest-configuration-assignment-name" },
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
              description: "The name of the ARC machine",
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
      ],
    },
    {
      name: "guest-configuration-hcrp-assignment-report",
      description: "Guestconfig guest-configuration-hcrp-assignment-report",
      subcommands: [
        {
          name: "list",
          description:
            "List all reports for the guest configuration assignment, latest report first",
          options: [
            {
              name: "--guest-configuration-assignment-name",
              description: "The guest configuration assignment name",
              args: { name: "guest-configuration-assignment-name" },
              isRequired: true,
            },
            {
              name: "--machine-name",
              description: "The name of the ARC machine",
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
            "Get a report for the guest configuration assignment, by reportId",
          options: [
            {
              name: "--guest-configuration-assignment-name",
              description: "The guest configuration assignment name",
              args: { name: "guest-configuration-assignment-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--machine-name",
              description: "The name of the ARC machine",
              args: { name: "machine-name" },
            },
            {
              name: "--report-id",
              description:
                "The GUID for the guest configuration assignment report",
              args: { name: "report-id" },
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
};

export default completion;
