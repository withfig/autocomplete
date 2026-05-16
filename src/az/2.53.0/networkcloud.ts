const completion: Fig.Spec = {
  name: "networkcloud",
  description: "Manage Network Cloud resources",
  subcommands: [
    {
      name: "baremetalmachine",
      description: "Manage bare metal machine",
      subcommands: [
        {
          name: "cordon",
          description:
            "Cordon the provided bare metal machine's Kubernetes node",
          options: [
            {
              name: ["--bare-metal-machine-name", "--name", "-n"],
              description: "The name of the bare metal machine",
              args: { name: "bare-metal-machine-name" },
            },
            {
              name: "--evacuate",
              description:
                "The indicator of whether to evacuate the node workload when the bare metal machine is cordoned",
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
            "List bare metal machines in the provided resource group or subscription",
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
          name: "power-off",
          description: "Power off the provided bare metal machine",
          options: [
            {
              name: ["--bare-metal-machine-name", "--name", "-n"],
              description: "The name of the bare metal machine",
              args: { name: "bare-metal-machine-name" },
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
              name: "--skip-shutdown",
              description:
                "The indicator of whether to skip the graceful OS shutdown and power off the bare metal machine immediately",
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
          name: "reimage",
          description: "Reimage the provided bare metal machine",
          options: [
            {
              name: ["--bare-metal-machine-name", "--name", "-n"],
              description: "The name of the bare metal machine",
              args: { name: "bare-metal-machine-name" },
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
          name: "replace",
          description: "Replace the provided bare metal machine",
          options: [
            {
              name: ["--bare-metal-machine-name", "--name", "-n"],
              description: "The name of the bare metal machine",
              args: { name: "bare-metal-machine-name" },
            },
            {
              name: "--bmc-credentials",
              description:
                'The credentials of the baseboard management controller on this bare metal machine. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "bmc-credentials" },
            },
            {
              name: "--bmc-mac-address",
              description: "The MAC address of the BMC device",
              args: { name: "bmc-mac-address" },
            },
            {
              name: "--boot-mac-address",
              description:
                "The MAC address of a NIC connected to the PXE network",
              args: { name: "boot-mac-address" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--machine-name",
              description: "The OS-level hostname assigned to this machine",
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
              name: "--serial-number",
              description: "The serial number of the bare metal machine",
              args: { name: "serial-number" },
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
          name: "restart",
          description: "Restart the provided bare metal machine",
          options: [
            {
              name: ["--bare-metal-machine-name", "--name", "-n"],
              description: "The name of the bare metal machine",
              args: { name: "bare-metal-machine-name" },
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
          name: "run-command",
          description:
            "Run the command or the script on the provided bare metal machine. The URL to storage account with the command execution results and the command exit code can be retrieved from the operation status API once available",
          options: [
            {
              name: "--limit-time-seconds",
              description:
                "The maximum time the script is allowed to run. If the execution time exceeds the maximum, the script will be stopped, any output produced until then will be captured, and the exit code matching a timeout will be returned (252)",
              args: { name: "limit-time-seconds" },
              isRequired: true,
            },
            {
              name: "--script",
              description:
                "The base64 encoded script to execute on the bare metal machine",
              args: { name: "script" },
              isRequired: true,
            },
            {
              name: "--arguments",
              description:
                'The list of string arguments that will be passed to the script in order as separate arguments. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "arguments" },
            },
            {
              name: ["--bare-metal-machine-name", "--name", "-n"],
              description: "The name of the bare metal machine",
              args: { name: "bare-metal-machine-name" },
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
              name: "--output-directory",
              description:
                "The output directory where the script execution results will bedownloaded to from storage blob. Accepts relative or qualified directory path",
              args: { name: "output-directory" },
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
          name: "run-data-extract",
          description:
            "Run one or more data extractions on the provided bare metal machine. The URL to storage account with the command execution results and the command exit code can be retrieved from the operation status API once available",
          options: [
            {
              name: "--commands",
              description:
                'The list of curated data extraction commands to be executed directly against the target machine. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "commands" },
              isRequired: true,
            },
            {
              name: "--limit-time-seconds",
              description:
                "The maximum time the commands are allowed to run. If the execution time exceeds the maximum, the script will be stopped, any output produced until then will be captured, and the exit code matching a timeout will be returned (252)",
              args: { name: "limit-time-seconds" },
              isRequired: true,
            },
            {
              name: ["--bare-metal-machine-name", "--name", "-n"],
              description: "The name of the bare metal machine",
              args: { name: "bare-metal-machine-name" },
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
              name: "--output-directory",
              description:
                "The output directory where the script execution results will be downloaded to from storage blob. Accepts relative or qualified directory path",
              args: { name: "output-directory" },
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
          name: "run-read-command",
          description:
            "Run one or more read-only commands on the provided bare metal machine. The URL to storage account with the command execution results and the command exit code can be retrieved from the operation status API once available",
          options: [
            {
              name: "--commands",
              description:
                'The list of read-only commands to be executed directly against the target machine. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "commands" },
              isRequired: true,
            },
            {
              name: "--limit-time-seconds",
              description:
                "The maximum time the commands are allowed to run. If the execution time exceeds the maximum, the script will be stopped, any output produced until then will be captured, and the exit code matching a timeout will be returned (252)",
              args: { name: "limit-time-seconds" },
              isRequired: true,
            },
            {
              name: ["--bare-metal-machine-name", "--name", "-n"],
              description: "The name of the bare metal machine",
              args: { name: "bare-metal-machine-name" },
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
              name: "--output-directory",
              description:
                "The output directory where the script execution results will be downloaded to from storage blob. Accepts relative or qualified directory path",
              args: { name: "output-directory" },
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
          description: "Get properties of the provided bare metal machine",
          options: [
            {
              name: ["--bare-metal-machine-name", "--name", "-n"],
              description: "The name of the bare metal machine",
              args: { name: "bare-metal-machine-name" },
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
          name: "start",
          description: "Start the provided bare metal machine",
          options: [
            {
              name: ["--bare-metal-machine-name", "--name", "-n"],
              description: "The name of the bare metal machine",
              args: { name: "bare-metal-machine-name" },
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
          name: "uncordon",
          description:
            "Uncordon the provided bare metal machine's Kubernetes node",
          options: [
            {
              name: ["--bare-metal-machine-name", "--name", "-n"],
              description: "The name of the bare metal machine",
              args: { name: "bare-metal-machine-name" },
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
          name: "update",
          description:
            "Update properties of the provided bare metal machine, or update tags associated with the bare metal machine. Properties and tag updates can be done independently",
          options: [
            {
              name: ["--bare-metal-machine-name", "--name", "-n"],
              description: "The name of the bare metal machine",
              args: { name: "bare-metal-machine-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--machine-details",
              description:
                "The details provided by the customer during the creation of rack manifests that allows for custom data to be associated with this machine",
              args: { name: "machine-details" },
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
              name: "--tags",
              description:
                'The Azure resource tags that will replace the existing ones. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
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
              name: ["--bare-metal-machine-name", "--name", "-n"],
              description: "The name of the bare metal machine",
              args: { name: "bare-metal-machine-name" },
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
      name: "cloudservicesnetwork",
      description: "Manage cloud services network",
      subcommands: [
        {
          name: "create",
          description:
            "Create a new cloud services network or update the properties of the existing cloud services network",
          options: [
            {
              name: ["--cloud-services-network-name", "--name", "-n"],
              description: "The name of the cloud services network",
              args: { name: "cloud-services-network-name" },
              isRequired: true,
            },
            {
              name: "--extended-location",
              description:
                'The extended location of the cluster associated with the resource. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "extended-location" },
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
              name: "--additional-egress-endpoints",
              description:
                'The list of egress endpoints. This allows for connection from a Hybrid AKS cluster to the specified endpoint. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "additional-egress-endpoints" },
            },
            {
              name: "--enable-default-egress-endpoints",
              description:
                "The indicator of whether the platform default endpoints are allowed for the egress traffic",
              args: {
                name: "enable-default-egress-endpoints",
                suggestions: ["False", "True"],
              },
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
              name: "--tags",
              description:
                'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tags" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete the provided cloud services network",
          options: [
            {
              name: ["--cloud-services-network-name", "--name", "-n"],
              description: "The name of the cloud services network",
              args: { name: "cloud-services-network-name" },
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
          description:
            "List cloud services networks in the provided resource group or subscription",
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
          description: "Get properties of the provided cloud services network",
          options: [
            {
              name: ["--cloud-services-network-name", "--name", "-n"],
              description: "The name of the cloud services network",
              args: { name: "cloud-services-network-name" },
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
            "Update properties of the provided cloud services network, or update the tags associated with it. Properties and tag updates can be done independently",
          options: [
            {
              name: "--additional-egress-endpoints",
              description:
                'The list of egress endpoints. This allows for connection from a Hybrid AKS cluster to the specified endpoint. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "additional-egress-endpoints" },
            },
            {
              name: ["--cloud-services-network-name", "--name", "-n"],
              description: "The name of the cloud services network",
              args: { name: "cloud-services-network-name" },
            },
            {
              name: "--enable-default-egress-endpoints",
              description:
                "The indicator of whether the platform default endpoints are allowed for the egress traffic",
              args: {
                name: "enable-default-egress-endpoints",
                suggestions: ["False", "True"],
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
                'The Azure resource tags that will replace the existing ones. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
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
              name: ["--cloud-services-network-name", "--name", "-n"],
              description: "The name of the cloud services network",
              args: { name: "cloud-services-network-name" },
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
      description: "Manage cluster",
      subcommands: [
        {
          name: "create",
          description:
            "Create a new cluster or update the properties of the cluster if it exists",
          options: [
            {
              name: "--aggregator-or-single-rack-definition",
              description:
                'The rack definition that is intended to reflect only a single rack in a single rack cluster, or an aggregator rack in a multi-rack cluster. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "aggregator-or-single-rack-definition" },
              isRequired: true,
            },
            {
              name: ["--cluster-name", "--name", "-n"],
              description: "The name of the cluster",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: "--cluster-type",
              description: "The type of rack configuration for the cluster",
              args: {
                name: "cluster-type",
                suggestions: ["MultiRack", "SingleRack"],
              },
              isRequired: true,
            },
            {
              name: "--cluster-version",
              description: "The current runtime version of the cluster",
              args: { name: "cluster-version" },
              isRequired: true,
            },
            {
              name: "--extended-location",
              description:
                'The extended location of the cluster manager associated with the cluster. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "extended-location" },
              isRequired: true,
            },
            {
              name: "--network-fabric-id",
              description:
                "The resource ID of the Network Fabric associated with the cluster",
              args: { name: "network-fabric-id" },
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
              name: "--analytics-workspace-id",
              description:
                "The resource ID of the Log Analytics Workspace that will be used for storing relevant logs",
              args: { name: "analytics-workspace-id" },
            },
            {
              name: "--cluster-location",
              description:
                "The customer-provided location information to identify where the cluster resides",
              args: { name: "cluster-location" },
            },
            {
              name: "--cluster-service-principal",
              description:
                'The service principal to be used by the cluster during Arc Appliance installation. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "cluster-service-principal" },
            },
            {
              name: "--compute-deployment-threshold",
              description:
                'The validation threshold indicating the allowable failures of compute machines during environment validation and deployment. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "compute-deployment-threshold" },
            },
            {
              name: "--compute-rack-definitions",
              description:
                'The list of rack definitions for the compute racks in a multi-rack cluster, or an empty list in a single-rack cluster. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "compute-rack-definitions" },
            },
            {
              name: ["--location", "-l"],
              description:
                "The geo-location where the resource lives When not specified, the location of the resource group will be used",
              args: { name: "location" },
            },
            {
              name: "--managed-resource-group-configuration",
              description:
                'The configuration of the managed resource group associated with the resource. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "managed-resource-group-configuration" },
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
          description: "Delete the provided cluster",
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
          name: "deploy",
          description: "Deploy the cluster",
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
              name: "--skip-validations-for-machines",
              description:
                'The names of bare metal machines in the cluster that should be skipped during environment validation. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "skip-validations-for-machines" },
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
            "List clusters in the provided resource group or subscription",
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
          description: "Get properties of the provided cluster",
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
          description:
            "Update the properties of the provided cluster, or update the tags associated with the cluster. Properties and tag updates can be done independently",
          options: [
            {
              name: "--aggregator-or-single-rack-definition",
              description:
                'The rack definition that is intended to reflect only a single rack in a single rack cluster, or an aggregator rack in a multi-rack cluster. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "aggregator-or-single-rack-definition" },
            },
            {
              name: "--cluster-location",
              description:
                "The customer-provided location information to identify where the cluster resides",
              args: { name: "cluster-location" },
            },
            {
              name: ["--cluster-name", "--name", "-n"],
              description: "The name of the cluster",
              args: { name: "cluster-name" },
            },
            {
              name: "--cluster-service-principal",
              description:
                'The service principal to be used by the cluster during Arc Appliance installation. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "cluster-service-principal" },
            },
            {
              name: "--compute-deployment-threshold",
              description:
                'The validation threshold indicating the allowable failures of compute machines during environment validation and deployment. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "compute-deployment-threshold" },
            },
            {
              name: "--compute-rack-definitions",
              description:
                'The list of rack definitions for the compute racks in a multi-rack cluster, or an empty list in a single-rack cluster. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "compute-rack-definitions" },
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
              name: "--tags",
              description:
                'The Azure resource tags that will replace the existing ones. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tags" },
            },
          ],
        },
        {
          name: "update-version",
          description:
            "Update the version of the provided cluster to one of the available supported versions",
          options: [
            {
              name: "--target-cluster-version",
              description:
                "The version to be applied to the cluster during update",
              args: { name: "target-cluster-version" },
              isRequired: true,
            },
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
          name: "baremetalmachinekeyset",
          description: "Manage cluster's bare metal machine key set",
          subcommands: [
            {
              name: "create",
              description:
                "Create a new bare metal machine key set or update the existing one for the provided cluster",
              options: [
                {
                  name: "--azure-group-id",
                  description:
                    "The object ID of Azure Active Directory group that all users in the list must be in for access to be granted. Users that are not in the group will not have access",
                  args: { name: "azure-group-id" },
                  isRequired: true,
                },
                {
                  name: ["--bare-metal-machine-key-set-name", "--name", "-n"],
                  description: "The name of the bare metal machine key set",
                  args: { name: "bare-metal-machine-key-set-name" },
                  isRequired: true,
                },
                {
                  name: "--cluster-name",
                  description: "The name of the cluster",
                  args: { name: "cluster-name" },
                  isRequired: true,
                },
                {
                  name: "--expiration",
                  description:
                    "The date and time after which the users in this key set will be removed from the bare metal machines",
                  args: { name: "expiration" },
                  isRequired: true,
                },
                {
                  name: "--extended-location",
                  description:
                    'The extended location of the cluster associated with the resource. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "extended-location" },
                  isRequired: true,
                },
                {
                  name: "--jump-hosts-allowed",
                  description:
                    'The list of IP addresses of jump hosts with management network access from which a login will be allowed for the users. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "jump-hosts-allowed" },
                  isRequired: true,
                },
                {
                  name: "--privilege-level",
                  description:
                    "The access level allowed for the users in this key set",
                  args: {
                    name: "privilege-level",
                    suggestions: ["Standard", "Superuser"],
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
                  name: "--user-list",
                  description:
                    'The unique list of permitted users. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "user-list" },
                  isRequired: true,
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
                  name: "--os-group-name",
                  description:
                    "The name of the group that users will be assigned to on the operating system of the machines",
                  args: { name: "os-group-name" },
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
              description:
                "Delete the bare metal machine key set of the provided cluster",
              options: [
                {
                  name: ["--bare-metal-machine-key-set-name", "--name", "-n"],
                  description: "The name of the bare metal machine key set",
                  args: { name: "bare-metal-machine-key-set-name" },
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
              name: "list",
              description: "List bare metal machine key sets of the cluster",
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
              description:
                "Get bare metal machine key set of the provided cluster",
              options: [
                {
                  name: ["--bare-metal-machine-key-set-name", "--name", "-n"],
                  description: "The name of the bare metal machine key set",
                  args: { name: "bare-metal-machine-key-set-name" },
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
              description:
                "Update properties of bare metal machine key set for the provided cluster, or update the tags associated with it. Properties and tag updates can be done independently",
              options: [
                {
                  name: ["--bare-metal-machine-key-set-name", "--name", "-n"],
                  description: "The name of the bare metal machine key set",
                  args: { name: "bare-metal-machine-key-set-name" },
                },
                {
                  name: "--cluster-name",
                  description: "The name of the cluster",
                  args: { name: "cluster-name" },
                },
                {
                  name: "--expiration",
                  description:
                    "The date and time after which the users in this key set will be removed from the bare metal machines",
                  args: { name: "expiration" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--jump-hosts-allowed",
                  description:
                    'The list of IP addresses of jump hosts with management network access from which a login will be allowed for the users. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "jump-hosts-allowed" },
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
                  name: "--tags",
                  description:
                    'The Azure resource tags that will replace the existing ones. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "tags" },
                },
                {
                  name: "--user-list",
                  description:
                    'The unique list of permitted users. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "user-list" },
                },
              ],
            },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition is met",
              options: [
                {
                  name: ["--bare-metal-machine-key-set-name", "--name", "-n"],
                  description: "The name of the bare metal machine key set",
                  args: { name: "bare-metal-machine-key-set-name" },
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
          name: "bmckeyset",
          description:
            "Manage cluster's baseboard management controller key set",
          subcommands: [
            {
              name: "create",
              description:
                "Create a new baseboard management controller key set or update the existing one for the provided cluster",
              options: [
                {
                  name: "--azure-group-id",
                  description:
                    "The object ID of Azure Active Directory group that all users in the list must be in for access to be granted. Users that are not in the group will not have access",
                  args: { name: "azure-group-id" },
                  isRequired: true,
                },
                {
                  name: ["--bmc-key-set-name", "--name", "-n"],
                  description:
                    "The name of the baseboard management controller key set",
                  args: { name: "bmc-key-set-name" },
                  isRequired: true,
                },
                {
                  name: "--cluster-name",
                  description: "The name of the cluster",
                  args: { name: "cluster-name" },
                  isRequired: true,
                },
                {
                  name: "--expiration",
                  description:
                    "The date and time after which the users in this key set will be removed from the baseboard management controllers",
                  args: { name: "expiration" },
                  isRequired: true,
                },
                {
                  name: "--extended-location",
                  description:
                    'The extended location of the cluster associated with the resource. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "extended-location" },
                  isRequired: true,
                },
                {
                  name: "--privilege-level",
                  description:
                    "The access level allowed for the users in this key set",
                  args: {
                    name: "privilege-level",
                    suggestions: ["Administrator", "ReadOnly"],
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
                  name: "--user-list",
                  description:
                    'The unique list of permitted users. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "user-list" },
                  isRequired: true,
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
                  name: "--tags",
                  description:
                    'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "tags" },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete the baseboard management controller key set of the provided cluster",
              options: [
                {
                  name: ["--bmc-key-set-name", "--name", "-n"],
                  description:
                    "The name of the baseboard management controller key set",
                  args: { name: "bmc-key-set-name" },
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
              name: "list",
              description:
                "List baseboard management controller key sets of the cluster",
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
              description:
                "Get baseboard management controller key set of the provided cluster",
              options: [
                {
                  name: ["--bmc-key-set-name", "--name", "-n"],
                  description:
                    "The name of the baseboard management controller key set",
                  args: { name: "bmc-key-set-name" },
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
              description:
                "Update properties of baseboard management controller key set for the provided cluster, or update the tags associated with it. Properties and tag updates can be done independently",
              options: [
                {
                  name: ["--bmc-key-set-name", "--name", "-n"],
                  description:
                    "The name of the baseboard management controller key set",
                  args: { name: "bmc-key-set-name" },
                },
                {
                  name: "--cluster-name",
                  description: "The name of the cluster",
                  args: { name: "cluster-name" },
                },
                {
                  name: "--expiration",
                  description:
                    "The date and time after which the users in this key set will be removed from the baseboard management controllers",
                  args: { name: "expiration" },
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
                  name: "--tags",
                  description:
                    'The Azure resource tags that will replace the existing ones. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "tags" },
                },
                {
                  name: "--user-list",
                  description:
                    'The unique list of permitted users. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "user-list" },
                },
              ],
            },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition is met",
              options: [
                {
                  name: ["--bmc-key-set-name", "--name", "-n"],
                  description:
                    "The name of the baseboard management controller key set",
                  args: { name: "bmc-key-set-name" },
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
          name: "metricsconfiguration",
          description: "Manage cluster's metrics configuration",
          subcommands: [
            {
              name: "create",
              description:
                "Create the metrics configuration of the provided cluster",
              options: [
                {
                  name: "--cluster-name",
                  description: "The name of the cluster",
                  args: { name: "cluster-name" },
                  isRequired: true,
                },
                {
                  name: "--collection-interval",
                  description:
                    "The interval in minutes by which metrics will be collected",
                  args: { name: "collection-interval" },
                  isRequired: true,
                },
                {
                  name: "--extended-location",
                  description:
                    'The extended location of the cluster associated with the resource. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "extended-location" },
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
                  name: "--enabled-metrics",
                  description:
                    'The list of metric names that have been chosen to be enabled in addition to the core set of enabled metrics. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "enabled-metrics" },
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
                  name: "--tags",
                  description:
                    'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "tags" },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete the metrics configuration of the provided cluster",
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
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "list",
              description: "List metrics configurations of the cluster",
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
              description: "Get metrics configuration of the provided cluster",
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
                "Update properties of metrics configuration for the provided cluster, or update the tags associated with it. Properties and tag updates can be done independently",
              options: [
                {
                  name: "--cluster-name",
                  description: "The name of the cluster",
                  args: { name: "cluster-name" },
                },
                {
                  name: "--collection-interval",
                  description:
                    "The interval in minutes by which metrics will be collected",
                  args: { name: "collection-interval" },
                },
                {
                  name: "--enabled-metrics",
                  description:
                    'The list of metric names that have been chosen to be enabled in addition to the core set of enabled metrics. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "enabled-metrics" },
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
                  name: "--tags",
                  description:
                    'The Azure resource tags that will replace the existing ones. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
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
                  name: ["--metrics-configuration-name", "--name", "-n"],
                  description:
                    "The name of the metrics configuration for the cluster",
                  args: { name: "metrics-configuration-name" },
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
      name: "clustermanager",
      description: "Manage cluster manager",
      subcommands: [
        {
          name: "create",
          description:
            "Create a new cluster manager or update properties of the cluster manager if it exists",
          options: [
            {
              name: ["--cluster-manager-name", "--name", "-n"],
              description: "The name of the cluster manager",
              args: { name: "cluster-manager-name" },
              isRequired: true,
            },
            {
              name: "--fabric-controller-id",
              description:
                "The resource ID of the fabric controller that has one to one mapping with the cluster manager",
              args: { name: "fabric-controller-id" },
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
              name: "--analytics-workspace-id",
              description:
                "The resource ID of the Log Analytics workspace that is used for the logs collection",
              args: { name: "analytics-workspace-id" },
            },
            {
              name: ["--location", "-l"],
              description:
                "The geo-location where the resource lives When not specified, the location of the resource group will be used",
              args: { name: "location" },
            },
            {
              name: "--managed-resource-group-configuration",
              description:
                'The configuration of the managed resource group associated with the resource. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "managed-resource-group-configuration" },
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
          description: "Delete the provided cluster manager",
          options: [
            {
              name: ["--cluster-manager-name", "--name", "-n"],
              description: "The name of the cluster manager",
              args: { name: "cluster-manager-name" },
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
          description:
            "List cluster managers in the provided resource group or subscription",
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
          description: "Get the properties of the provided cluster manager",
          options: [
            {
              name: ["--cluster-manager-name", "--name", "-n"],
              description: "The name of the cluster manager",
              args: { name: "cluster-manager-name" },
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
            "Update properties of the provided cluster manager, or update the tags assigned to the cluster manager. Properties and tag updates can be done independently",
          options: [
            {
              name: ["--cluster-manager-name", "--name", "-n"],
              description: "The name of the cluster manager",
              args: { name: "cluster-manager-name" },
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
              name: "--tags",
              description:
                'The Azure resource tags that will replace the existing ones. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
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
              name: ["--cluster-manager-name", "--name", "-n"],
              description: "The name of the cluster manager",
              args: { name: "cluster-manager-name" },
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
      name: "kubernetescluster",
      description: "Manage Kubernetes cluster",
      subcommands: [
        {
          name: "create",
          description:
            "Create a new Kubernetes cluster or update the properties of the existing one",
          options: [
            {
              name: "--control-plane-node-configuration",
              description:
                'The defining characteristics of the control plane for this Kubernetes Cluster. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "control-plane-node-configuration" },
              isRequired: true,
            },
            {
              name: "--extended-location",
              description:
                'The extended location of the cluster associated with the resource. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "extended-location" },
              isRequired: true,
            },
            {
              name: "--initial-agent-pool-configurations",
              description:
                'The agent pools that are created with this Kubernetes cluster for running critical system services and workloads. This data in this field is only used during creation, and the field will be empty following the creation of the Kubernetes Cluster. After creation, the management of agent pools is done using the agentPools sub-resource. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "initial-agent-pool-configurations" },
              isRequired: true,
            },
            {
              name: ["--kubernetes-cluster-name", "--name", "-n"],
              description: "The name of the Kubernetes cluster",
              args: { name: "kubernetes-cluster-name" },
              isRequired: true,
            },
            {
              name: "--kubernetes-version",
              description:
                "The Kubernetes version for this cluster. Accepts n.n, n.n.n, and n.n.n-n format. The interpreted version used will be resolved into this field after creation or update",
              args: { name: "kubernetes-version" },
              isRequired: true,
            },
            {
              name: "--network-configuration",
              description:
                'The configuration of the Kubernetes cluster networking, including the attachment of networks that span the cluster. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "network-configuration" },
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
              name: "--aad-configuration",
              description:
                'The Azure Active Directory Integration properties. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "aad-configuration" },
            },
            {
              name: "--admin-username",
              description:
                "The user name for the administrator that will be applied to the operating systems that run Kubernetes nodes. If not supplied, a user name will be chosen by the service",
              args: { name: "admin-username" },
            },
            {
              name: "--generate-ssh-keys",
              description:
                "Generate SSH public and private key files if missing. The keys will be stored under '~/.ssh'",
              args: {
                name: "generate-ssh-keys",
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
              name: ["--location", "-l"],
              description:
                "The geo-location where the resource lives When not specified, the location of the resource group will be used",
              args: { name: "location" },
            },
            {
              name: "--managed-resource-group-configuration",
              description:
                'The configuration of the managed resource group associated with the resource. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "managed-resource-group-configuration" },
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
              name: "--ssh-dest-key-path",
              description:
                'The list of space-separated paths to ssh public keys. A file path can be provided or a directory. If a directory is provided will attempt to load all the public keys (.pub) found. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "ssh-dest-key-path" },
            },
            {
              name: "--ssh-key-values",
              description:
                'The list of space-separated SSH public keys. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "ssh-key-values" },
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
          description: "Delete the provided Kubernetes cluster",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--kubernetes-cluster-name", "--name", "-n"],
              description: "The name of the Kubernetes cluster",
              args: { name: "kubernetes-cluster-name" },
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
          description: "List Kubernetes clusters in the provided subscription",
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
          name: "restart-node",
          description: "Restart a targeted node of a Kubernetes cluster",
          options: [
            {
              name: "--node-name",
              description: "The name of the node to restart",
              args: { name: "node-name" },
              isRequired: true,
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--kubernetes-cluster-name", "--name", "-n"],
              description: "The name of the Kubernetes cluster",
              args: { name: "kubernetes-cluster-name" },
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
          description: "Get properties of the provided the Kubernetes cluster",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--kubernetes-cluster-name", "--name", "-n"],
              description: "The name of the Kubernetes cluster",
              args: { name: "kubernetes-cluster-name" },
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
            "Update the properties of the provided Kubernetes cluster, or update the tags associated with the Kubernetes cluster. Properties and tag updates can be done independently",
          options: [
            {
              name: "--control-plane-node-configuration",
              description:
                'The defining characteristics of the control plane that can be patched for this Kubernetes cluster. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "control-plane-node-configuration" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--kubernetes-cluster-name", "--name", "-n"],
              description: "The name of the Kubernetes cluster",
              args: { name: "kubernetes-cluster-name" },
            },
            {
              name: "--kubernetes-version",
              description:
                "The Kubernetes version for this cluster. Accepts n.n, n.n.n, and n.n.n-n format. The interpreted version used will be resolved into this field after creation or update",
              args: { name: "kubernetes-version" },
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
              name: "--tags",
              description:
                'The Azure resource tags that will replace the existing ones. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
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
              name: ["--kubernetes-cluster-name", "--name", "-n"],
              description: "The name of the Kubernetes cluster",
              args: { name: "kubernetes-cluster-name" },
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
          name: "agentpool",
          description: "Manage Kubernetes cluster's agent pool",
          subcommands: [
            {
              name: "create",
              description:
                "Create a new Kubernetes cluster agent pool or update the properties of the existing one",
              options: [
                {
                  name: ["--agent-pool-name", "--name", "-n"],
                  description: "The name of the Kubernetes cluster agent pool",
                  args: { name: "agent-pool-name" },
                  isRequired: true,
                },
                {
                  name: "--count",
                  description:
                    "The number of virtual machines that use this configuration",
                  args: { name: "count" },
                  isRequired: true,
                },
                {
                  name: "--kubernetes-cluster-name",
                  description: "The name of the Kubernetes cluster",
                  args: { name: "kubernetes-cluster-name" },
                  isRequired: true,
                },
                {
                  name: "--mode",
                  description:
                    "The selection of how this agent pool is utilized, either as a system pool or a user pool. System pools run the features and critical services for the Kubernetes Cluster, while user pools are dedicated to user workloads. Every Kubernetes cluster must contain at least one system node pool with at least one node",
                  args: {
                    name: "mode",
                    suggestions: ["NotApplicable", "System", "User"],
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
                  name: "--vm-sku-name",
                  description:
                    "The name of the VM SKU that determines the size of resources allocated for node VMs",
                  args: { name: "vm-sku-name" },
                  isRequired: true,
                },
                {
                  name: "--admin-username",
                  description:
                    "The user name for the administrator that will be applied to the operating systems that run Kubernetes nodes. If not supplied, a user name will be chosen by the service",
                  args: { name: "admin-username" },
                },
                {
                  name: "--agent-options",
                  description:
                    'The configurations that will be applied to each agent in this agent pool. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "agent-options" },
                },
                {
                  name: "--attached-network-configuration",
                  description:
                    'The configuration of networks being attached to the agent pool for use by the workloads that run on this Kubernetes cluster. These networks are in addition to the networks connected in the Kubernetes cluster attached network configuration. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "attached-network-configuration" },
                },
                {
                  name: "--availability-zones",
                  description:
                    'The list of availability zones of the Network Cloud cluster used for the provisioning of nodes in this agent pool. If not specified, all availability zones will be used. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "availability-zones" },
                },
                {
                  name: "--extended-location",
                  description:
                    'The extended location of the cluster associated with the resource. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "extended-location" },
                },
                {
                  name: "--generate-ssh-keys",
                  description:
                    "Generate SSH public and private key files if missing. The keys will be stored under '~/.ssh'",
                  args: {
                    name: "generate-ssh-keys",
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
                  name: "--labels",
                  description:
                    'The labels applied to the nodes in this agent pool. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "labels" },
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
                  name: "--ssh-dest-key-path",
                  description:
                    'The list of space-separated paths to ssh public keys. A file path can be provided or a directory. If a directory is provided will attempt to load all the public keys (.pub) found. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "ssh-dest-key-path" },
                },
                {
                  name: "--ssh-key-values",
                  description:
                    'The list of space-separated SSH public keys. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "ssh-key-values" },
                },
                {
                  name: "--tags",
                  description:
                    'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "tags" },
                },
                {
                  name: "--taints",
                  description:
                    'The taints applied to the nodes in this agent pool. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "taints" },
                },
                {
                  name: "--upgrade-settings",
                  description:
                    'The configuration of the agent pool. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "upgrade-settings" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete the provided Kubernetes cluster agent pool",
              options: [
                {
                  name: ["--agent-pool-name", "--name", "-n"],
                  description: "The name of the Kubernetes cluster agent pool",
                  args: { name: "agent-pool-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--kubernetes-cluster-name",
                  description: "The name of the Kubernetes cluster",
                  args: { name: "kubernetes-cluster-name" },
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
                "List agent pools for the provided Kubernetes cluster",
              options: [
                {
                  name: "--kubernetes-cluster-name",
                  description: "The name of the Kubernetes cluster",
                  args: { name: "kubernetes-cluster-name" },
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
                "Get properties of the provided Kubernetes cluster agent pool",
              options: [
                {
                  name: ["--agent-pool-name", "--name", "-n"],
                  description: "The name of the Kubernetes cluster agent pool",
                  args: { name: "agent-pool-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--kubernetes-cluster-name",
                  description: "The name of the Kubernetes cluster",
                  args: { name: "kubernetes-cluster-name" },
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
                "Update the properties of the provided Kubernetes cluster agent pool, or update the tags associated with the Kubernetes cluster agent pool. Properties and tag updates can be done independently",
              options: [
                {
                  name: ["--agent-pool-name", "--name", "-n"],
                  description: "The name of the Kubernetes cluster agent pool",
                  args: { name: "agent-pool-name" },
                },
                {
                  name: "--count",
                  description:
                    "The number of virtual machines that use this configuration",
                  args: { name: "count" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--kubernetes-cluster-name",
                  description: "The name of the Kubernetes cluster",
                  args: { name: "kubernetes-cluster-name" },
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
                  name: "--tags",
                  description:
                    'The Azure resource tags that will replace the existing ones. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "tags" },
                },
                {
                  name: "--upgrade-settings",
                  description:
                    'The configuration of the agent pool. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "upgrade-settings" },
                },
              ],
            },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition is met",
              options: [
                {
                  name: ["--agent-pool-name", "--name", "-n"],
                  description: "The name of the Kubernetes cluster agent pool",
                  args: { name: "agent-pool-name" },
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
                  name: "--kubernetes-cluster-name",
                  description: "The name of the Kubernetes cluster",
                  args: { name: "kubernetes-cluster-name" },
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
      name: "l2network",
      description: "Manage layer 2 (l2) network",
      subcommands: [
        {
          name: "create",
          description:
            "Create a new layer 2 (L2) network or update the properties of the existing network",
          options: [
            {
              name: "--extended-location",
              description:
                'The extended location of the cluster associated with the resource. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "extended-location" },
              isRequired: true,
            },
            {
              name: "--l2-isolation-domain-id",
              description:
                "The resource ID of the Network Fabric l2IsolationDomain",
              args: { name: "l2-isolation-domain-id" },
              isRequired: true,
            },
            {
              name: ["--l2-network-name", "--name", "-n"],
              description: "The name of the L2 network",
              args: { name: "l2-network-name" },
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
              name: "--interface-name",
              description:
                "The default interface name for this L2 network in the virtual machine. This name can be overridden by the name supplied in the network attachment configuration of that virtual machine",
              args: { name: "interface-name" },
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
              name: "--tags",
              description:
                'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tags" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete the provided layer 2 (L2) network",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--l2-network-name", "--name", "-n"],
              description: "The name of the L2 network",
              args: { name: "l2-network-name" },
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
            "List layer 2 (L2) networks in the provided resource group or subscription",
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
          description: "Get properties of the provided layer 2 (L2) network",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--l2-network-name", "--name", "-n"],
              description: "The name of the L2 network",
              args: { name: "l2-network-name" },
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
            "Update tags associated with the provided layer 2 (L2) network",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--l2-network-name", "--name", "-n"],
              description: "The name of the L2 network",
              args: { name: "l2-network-name" },
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
                'The Azure resource tags that will replace the existing ones. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
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
              name: ["--l2-network-name", "--name", "-n"],
              description: "The name of the L2 network",
              args: { name: "l2-network-name" },
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
      name: "l3network",
      description: "Manage layer 3 (l3) network",
      subcommands: [
        {
          name: "create",
          description:
            "Create a new layer 3 (L3) network or update the properties of the existing network",
          options: [
            {
              name: "--extended-location",
              description:
                'The extended location of the cluster associated with the resource. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "extended-location" },
              isRequired: true,
            },
            {
              name: "--l3-isolation-domain-id",
              description:
                "The resource ID of the Network Fabric l3IsolationDomain",
              args: { name: "l3-isolation-domain-id" },
              isRequired: true,
            },
            {
              name: ["--l3-network-name", "--name", "-n"],
              description: "The name of the L3 network",
              args: { name: "l3-network-name" },
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
              name: "--vlan",
              description:
                "The VLAN from the l3IsolationDomain that is used for this network",
              args: { name: "vlan" },
              isRequired: true,
            },
            {
              name: "--interface-name",
              description:
                "The default interface name for this L3 network in the virtual machine. This name can be overridden by the name supplied in the network attachment configuration of that virtual machine",
              args: { name: "interface-name" },
            },
            {
              name: "--ip-allocation-type",
              description:
                'The type of the IP address allocation, defaulted to "DualStack"',
              args: {
                name: "ip-allocation-type",
                suggestions: ["DualStack", "IPV4", "IPV6"],
              },
            },
            {
              name: "--ipv4-connected-prefix",
              description:
                "The IPV4 prefix (CIDR) assigned to this L3 network. Required when the IP allocation type is IPV4 or DualStack",
              args: { name: "ipv4-connected-prefix" },
            },
            {
              name: "--ipv6-connected-prefix",
              description:
                "The IPV6 prefix (CIDR) assigned to this L3 network. Required when the IP allocation type is IPV6 or DualStack",
              args: { name: "ipv6-connected-prefix" },
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
              name: "--tags",
              description:
                'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tags" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete the provided layer 3 (L3) network",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--l3-network-name", "--name", "-n"],
              description: "The name of the L3 network",
              args: { name: "l3-network-name" },
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
            "List layer 3 (L3) networks in the provided resource group or subscription",
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
          description: "Get properties of the provided layer 3 (L3) network",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--l3-network-name", "--name", "-n"],
              description: "The name of the L3 network",
              args: { name: "l3-network-name" },
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
            "Update tags associated with the provided layer 3 (L3) network",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--l3-network-name", "--name", "-n"],
              description: "The name of the L3 network",
              args: { name: "l3-network-name" },
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
                'The Azure resource tags that will replace the existing ones. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
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
              name: ["--l3-network-name", "--name", "-n"],
              description: "The name of the L3 network",
              args: { name: "l3-network-name" },
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
      name: "rack",
      description: "Manage rack",
      subcommands: [
        {
          name: "list",
          description:
            "List racks in the provided resource group or subscription",
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
          description: "Get properties of the provided rack",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--rack-name", "--name", "-n"],
              description: "The name of the rack",
              args: { name: "rack-name" },
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
            "Update properties of the provided rack, or update the tags associated with the rack. Properties and tag updates can be done independently",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--rack-name", "--name", "-n"],
              description: "The name of the rack",
              args: { name: "rack-name" },
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
              name: "--rack-location",
              description:
                "The free-form description of the rack location. (e.g. “DTN Datacenter, Floor 3, Isle 9, Rack 2B”)",
              args: { name: "rack-location" },
            },
            {
              name: "--rack-serial-number",
              description: "The globally unique identifier for the rack",
              args: { name: "rack-serial-number" },
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
                'The Azure resource tags that will replace the existing ones. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
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
              name: ["--rack-name", "--name", "-n"],
              description: "The name of the rack",
              args: { name: "rack-name" },
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
      name: "racksku",
      description: "Manage rack SKU",
      subcommands: [
        {
          name: "list",
          description: "List rack SKUs in the provided subscription",
        },
        {
          name: "show",
          description: "Get the properties of the provided rack SKU",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--rack-sku-name", "--name", "-n"],
              description: "The name of the rack SKU",
              args: { name: "rack-sku-name" },
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
      name: "storageappliance",
      description: "Manage storage appliance",
      subcommands: [
        {
          name: "disable-remote-vendor-management",
          description:
            "Disable remote vendor management of the provided storage appliance",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--storage-appliance-name", "--name", "-n"],
              description: "The name of the storage appliance",
              args: { name: "storage-appliance-name" },
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
          name: "enable-remote-vendor-management",
          description:
            "Enable remote vendor management of the provided storage appliance",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--storage-appliance-name", "--name", "-n"],
              description: "The name of the storage appliance",
              args: { name: "storage-appliance-name" },
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
            "List storage appliances in the provided resource group or subscription",
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
          description: "Get properties of the provided storage appliance",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--storage-appliance-name", "--name", "-n"],
              description: "The name of the storage appliance",
              args: { name: "storage-appliance-name" },
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
            "Update properties of the provided storage appliance, or update tags associated with the storage appliance Properties and tag updates can be done independently",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--storage-appliance-name", "--name", "-n"],
              description: "The name of the storage appliance",
              args: { name: "storage-appliance-name" },
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
              name: "--serial-number",
              description: "The serial number for the storage appliance",
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
                'The Azure resource tags that will replace the existing ones. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
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
              name: ["--storage-appliance-name", "--name", "-n"],
              description: "The name of the storage appliance",
              args: { name: "storage-appliance-name" },
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
      name: "trunkednetwork",
      description: "Manage trunked network",
      subcommands: [
        {
          name: "create",
          description:
            "Create a new trunked network or update the properties of the existing trunked network",
          options: [
            {
              name: "--extended-location",
              description:
                'The extended location of the cluster associated with the resource. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "extended-location" },
              isRequired: true,
            },
            {
              name: "--isolation-domain-ids",
              description:
                'The list of resource IDs representing the Network Fabric isolation domains. It can be any combination of l2IsolationDomain and l3IsolationDomain resources. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "isolation-domain-ids" },
              isRequired: true,
            },
            {
              name: ["--trunked-network-name", "--name", "-n"],
              description: "The name of the trunked network",
              args: { name: "trunked-network-name" },
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
              name: "--vlans",
              description:
                'The list of vlans that are selected from the isolation domains for trunking. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "vlans" },
              isRequired: true,
            },
            {
              name: "--interface-name",
              description:
                "The default interface name for this trunked network in the virtual machine. This name can be overridden by the name supplied in the network attachment configuration of that virtual machine",
              args: { name: "interface-name" },
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
              name: "--tags",
              description:
                'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tags" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete the provided trunked network",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--trunked-network-name", "--name", "-n"],
              description: "The name of the trunked network",
              args: { name: "trunked-network-name" },
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
            "List trunked networks in the provided resource group or subscription",
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
          description: "Get properties of the provided trunked network",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--trunked-network-name", "--name", "-n"],
              description: "The name of the trunked network",
              args: { name: "trunked-network-name" },
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
            "Update tags associated with the provided trunked network",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--trunked-network-name", "--name", "-n"],
              description: "The name of the trunked network",
              args: { name: "trunked-network-name" },
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
                'The Azure resource tags that will replace the existing ones. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
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
              name: ["--trunked-network-name", "--name", "-n"],
              description: "The name of the trunked network",
              args: { name: "trunked-network-name" },
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
      name: "virtualmachine",
      description: "Manage virtual machine",
      subcommands: [
        {
          name: "create",
          description:
            "Create a new virtual machine or update the properties of the existing virtual machine",
          options: [
            {
              name: "--admin-username",
              description:
                "The name of the administrator to which the ssh public keys will be added into the authorized keys",
              args: { name: "admin-username" },
              isRequired: true,
            },
            {
              name: ["--cloud-services-network-attachment", "--csn"],
              description:
                'The cloud service network that provides platform-level services for the virtual machine. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "cloud-services-network-attachment" },
              isRequired: true,
            },
            {
              name: "--cpu-cores",
              description: "The number of CPU cores in the virtual machine",
              args: { name: "cpu-cores" },
              isRequired: true,
            },
            {
              name: "--extended-location",
              description:
                'The extended location of the cluster associated with the resource. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "extended-location" },
              isRequired: true,
            },
            {
              name: ["--memory-size-gb", "--memory-size"],
              description: "The memory size of the virtual machine in GB",
              args: { name: "memory-size-gb" },
              isRequired: true,
            },
            {
              name: ["--virtual-machine-name", "--name", "-n"],
              description: "The name of the virtual machine",
              args: { name: "virtual-machine-name" },
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
              name: "--storage-profile",
              description:
                'The storage profile that specifies size and other parameters about the disks related to the virtual machine. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "storage-profile" },
              isRequired: true,
            },
            {
              name: "--vm-image",
              description:
                "The virtual machine image that is currently provisioned to the OS disk, using the full url and tag notation used to pull the image",
              args: { name: "vm-image" },
              isRequired: true,
            },
            {
              name: "--boot-method",
              description: "Selects the boot method for the virtual machine",
              args: { name: "boot-method", suggestions: ["BIOS", "UEFI"] },
            },
            {
              name: "--generate-ssh-keys",
              description:
                "Generate SSH public and private key files if missing. The keys will be stored under '~/.ssh'",
              args: {
                name: "generate-ssh-keys",
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
              name: ["--location", "-l"],
              description:
                "The geo-location where the resource lives When not specified, the location of the resource group will be used",
              args: { name: "location" },
            },
            {
              name: ["--network-attachments", "--na"],
              description:
                'The list of network attachments to the virtual machine. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "network-attachments" },
            },
            {
              name: ["--network-data", "--nd"],
              description: "The Base64 encoded cloud-init network data",
              args: { name: "network-data" },
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
              name: ["--placement-hints", "--ph"],
              description:
                'The scheduling hints for the virtual machine. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "placement-hints" },
            },
            {
              name: "--ssh-dest-key-path",
              description:
                'The list of space-separated paths to ssh public keys. A file path can be provided or a directory. If a directory is provided will attempt to load all the public keys (.pub) found. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "ssh-dest-key-path" },
            },
            {
              name: "--ssh-key-values",
              description:
                'The list of space-separated SSH public keys. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "ssh-key-values" },
            },
            {
              name: "--tags",
              description:
                'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tags" },
            },
            {
              name: ["--user-data", "--ud"],
              description: "The Base64 encoded cloud-init user data",
              args: { name: "user-data" },
            },
            {
              name: "--vm-device-model",
              description: "The type of the device model to use",
              args: { name: "vm-device-model", suggestions: ["T1", "T2"] },
            },
            {
              name: ["--vm-image-repository-credentials", "--vmi-creds"],
              description:
                'The credentials used to login to the image repository that has access to the specified image. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "vm-image-repository-credentials" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete the provided virtual machine",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--virtual-machine-name", "--name", "-n"],
              description: "The name of the virtual machine",
              args: { name: "virtual-machine-name" },
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
            "List virtual machines in the provided resource group or subscription",
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
          name: "power-off",
          description: "Power off the provided virtual machine",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--virtual-machine-name", "--name", "-n"],
              description: "The name of the virtual machine",
              args: { name: "virtual-machine-name" },
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
              name: "--skip-shutdown",
              description:
                "The indicator of whether to skip the graceful OS shutdown and power off the virtual machine immediately",
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
          name: "reimage",
          description: "Reimage the provided virtual machine",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--virtual-machine-name", "--name", "-n"],
              description: "The name of the virtual machine",
              args: { name: "virtual-machine-name" },
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
          name: "restart",
          description: "Restart the provided virtual machine",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--virtual-machine-name", "--name", "-n"],
              description: "The name of the virtual machine",
              args: { name: "virtual-machine-name" },
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
          description: "Get properties of the provided virtual machine",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--virtual-machine-name", "--name", "-n"],
              description: "The name of the virtual machine",
              args: { name: "virtual-machine-name" },
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
          description: "Start the provided virtual machine",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--virtual-machine-name", "--name", "-n"],
              description: "The name of the virtual machine",
              args: { name: "virtual-machine-name" },
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
          name: "update",
          description:
            "Update the properties of the provided virtual machine, or update the tags associated with the virtual machine. Properties and tag updates can be done independently",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--virtual-machine-name", "--name", "-n"],
              description: "The name of the virtual machine",
              args: { name: "virtual-machine-name" },
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
              name: "--tags",
              description:
                'The Azure resource tags that will replace the existing ones. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tags" },
            },
            {
              name: ["--vm-image-repository-credentials", "--vmi-creds"],
              description:
                'The credentials used to login to the image repository that has access to the specified image. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "vm-image-repository-credentials" },
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
              name: ["--virtual-machine-name", "--name", "-n"],
              description: "The name of the virtual machine",
              args: { name: "virtual-machine-name" },
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
          name: "console",
          description: "Manage virtual machine's console",
          subcommands: [
            {
              name: "create",
              description:
                "Create a new virtual machine console or update the properties of the existing virtual machine console",
              options: [
                {
                  name: "--enabled",
                  description:
                    "The indicator of whether the console access is enabled",
                  args: { name: "enabled", suggestions: ["False", "True"] },
                  isRequired: true,
                },
                {
                  name: "--extended-location",
                  description:
                    'The extended location of the cluster manager associated with the cluster this virtual machine is created on. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "extended-location" },
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
                  name: "--ssh-public-key",
                  description:
                    'The SSH public key that will be provisioned for user access. The user is expected to have the corresponding SSH private key for logging in. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "ssh-public-key" },
                  isRequired: true,
                },
                {
                  name: "--virtual-machine-name",
                  description: "The name of the virtual machine",
                  args: { name: "virtual-machine-name" },
                  isRequired: true,
                },
                {
                  name: "--expiration",
                  description:
                    "The date and time after which the key will be disallowed access",
                  args: { name: "expiration" },
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
                  name: "--tags",
                  description:
                    'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "tags" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete the provided virtual machine console",
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
                  name: "--virtual-machine-name",
                  description: "The name of the virtual machine",
                  args: { name: "virtual-machine-name" },
                },
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "list",
              description: "List consoles of the virtual machine",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--virtual-machine-name",
                  description: "The name of the virtual machine",
                  args: { name: "virtual-machine-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description:
                "Get properties of the provided virtual machine console",
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
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--virtual-machine-name",
                  description: "The name of the virtual machine",
                  args: { name: "virtual-machine-name" },
                },
              ],
            },
            {
              name: "update",
              description:
                "Update the properties of the provided virtual machine console, or update the tags associated with the virtual machine console. Properties and tag updates can be done independently",
              options: [
                {
                  name: "--enabled",
                  description:
                    "The indicator of whether the console access is enabled",
                  args: { name: "enabled", suggestions: ["False", "True"] },
                },
                {
                  name: "--expiration",
                  description:
                    "The date and time after which the key will be disallowed access",
                  args: { name: "expiration" },
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
                  name: "--ssh-public-key",
                  description:
                    'The SSH public key that will be provisioned for user access. The user is expected to have the corresponding SSH private key for logging in. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "ssh-public-key" },
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
                    'The Azure resource tags that will replace the existing ones. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "tags" },
                },
                {
                  name: "--virtual-machine-name",
                  description: "The name of the virtual machine",
                  args: { name: "virtual-machine-name" },
                },
              ],
            },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition is met",
              options: [
                {
                  name: ["--console-name", "--name", "-n"],
                  description: "The name of the virtual machine console",
                  args: { name: "console-name" },
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
                  name: "--virtual-machine-name",
                  description: "The name of the virtual machine",
                  args: { name: "virtual-machine-name" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "volume",
      description: "Manage volume",
      subcommands: [
        {
          name: "create",
          description:
            "Create a new volume or update the properties of the existing one",
          options: [
            {
              name: "--extended-location",
              description:
                'The extended location of the cluster associated with the resource. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "extended-location" },
              isRequired: true,
            },
            {
              name: ["--volume-name", "--name", "-n"],
              description: "The name of the volume",
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
              name: ["--size-mib", "--size"],
              description:
                "The size of the allocation for this volume in Mebibytes",
              args: { name: "size-mib" },
              isRequired: true,
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
              name: "--tags",
              description:
                'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tags" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete the provided volume",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--volume-name", "--name", "-n"],
              description: "The name of the volume",
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
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description:
            "List volumes in the provided resource group or subscription",
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
          description: "Get properties of the provided volume",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--volume-name", "--name", "-n"],
              description: "The name of the volume",
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
          ],
        },
        {
          name: "update",
          description: "Update tags associated with the provided volume",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--volume-name", "--name", "-n"],
              description: "The name of the volume",
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
              name: "--tags",
              description:
                'The Azure resource tags that will replace the existing ones. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
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
              name: ["--volume-name", "--name", "-n"],
              description: "The name of the volume",
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
          ],
        },
      ],
    },
  ],
};

export default completion;
