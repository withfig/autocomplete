const completion: Fig.Spec = {
  name: "qumulo",
  description: "Manage qumulo",
  subcommands: [
    {
      name: "storage",
      description: "Manage qumulo storage",
      subcommands: [
        {
          name: "file-system",
          description: "Manage qumulo storage file system",
          subcommands: [
            {
              name: "create",
              description: "Create file system resource",
              options: [
                {
                  name: "--admin-password",
                  description: "Initial administrator password of the resource",
                  args: { name: "admin-password" },
                  isRequired: true,
                },
                {
                  name: "--delegated-subnet-id",
                  description: "Delegated subnet id for Vnet injection",
                  args: { name: "delegated-subnet-id" },
                  isRequired: true,
                },
                {
                  name: ["--file-system-name", "--name", "-n"],
                  description: "Name of the File System resource",
                  args: { name: "file-system-name" },
                  isRequired: true,
                },
                {
                  name: "--initial-capacity",
                  description: "Storage capacity in TB",
                  args: { name: "initial-capacity" },
                  isRequired: true,
                },
                {
                  name: "--marketplace-details",
                  description:
                    'Marketplace details Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "marketplace-details" },
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
                  name: "--storage-sku",
                  description: "Storage Sku",
                  args: {
                    name: "storage-sku",
                    suggestions: ["Performance", "Standard"],
                  },
                  isRequired: true,
                },
                {
                  name: "--user-details",
                  description:
                    'User Details Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "user-details" },
                  isRequired: true,
                },
                {
                  name: "--availability-zone",
                  description: "Availability zone",
                  args: { name: "availability-zone" },
                },
                {
                  name: "--cluster-login-url",
                  description: "File system Id of the resource",
                  args: { name: "cluster-login-url" },
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
                  name: "--private-ips",
                  description:
                    'Private IPs of the resource Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "private-ips" },
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
              description: "Delete file system resource",
              options: [
                {
                  name: ["--file-system-name", "--name", "-n"],
                  description: "Name of the File System resource",
                  args: { name: "file-system-name" },
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
              description: "List file system resources",
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
              description: "Show file system resource",
              options: [
                {
                  name: ["--file-system-name", "--name", "-n"],
                  description: "Name of the File System resource",
                  args: { name: "file-system-name" },
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
                  name: ["--file-system-name", "--name", "-n"],
                  description: "Name of the File System resource",
                  args: { name: "file-system-name" },
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
    },
  ],
};

export default completion;
