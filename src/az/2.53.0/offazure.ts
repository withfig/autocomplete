const completion: Fig.Spec = {
  name: "offazure",
  description: "Manage on-premise resources for migrate",
  subcommands: [
    {
      name: "hyperv",
      description: "Manage Hyper-V on-premise resources",
      subcommands: [
        {
          name: "cluster",
          description: "Manage Hyper-V cluster",
          subcommands: [
            {
              name: "list",
              description: "Get all clusters on the on-premise site",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--site-name",
                  description: "Name of the Hyper-V Site",
                  args: { name: "site-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description: "Get the details of a Hyper-V cluster",
              options: [
                {
                  name: ["--cluster-name", "--name", "-n"],
                  description: "Name of the cluster",
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
                  name: "--site-name",
                  description: "Name of the Hyper-V Site",
                  args: { name: "site-name" },
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
          name: "host",
          description: "Manage Hyper-V host",
          subcommands: [
            {
              name: "list",
              description: "Get all hosts on the on-premise site",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--site-name",
                  description: "Name of the Hyper-V Site",
                  args: { name: "site-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description: "Get the details of a Hyper-V host",
              options: [
                {
                  name: ["--host-name", "--name", "-n"],
                  description: "Name of the host",
                  args: { name: "host-name" },
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
                  name: "--site-name",
                  description: "Name of the Hyper-V Site",
                  args: { name: "site-name" },
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
          name: "machine",
          description: "Manage Hyper-V machine",
          subcommands: [
            {
              name: "list",
              description: "List all machines on the on-premise site",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--site-name",
                  description: "Name of the Hyper-V Site",
                  args: { name: "site-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description: "Get the details of a machine",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--machine-name", "--name", "-n"],
                  description: "Name of the machine",
                  args: { name: "machine-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--site-name",
                  description: "Name of the Hyper-V Site",
                  args: { name: "site-name" },
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
          name: "run-as-account",
          description: "Manage Hyper-V run-as-account",
          subcommands: [
            {
              name: "list",
              description: "List all run-as-accounts on the on-premise site",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--site-name",
                  description: "Name of the Hyper-V Site",
                  args: { name: "site-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description: "Get the details of a run-as-account",
              options: [
                {
                  name: ["--account-name", "--name", "-n"],
                  description: "Name of the run-as-account",
                  args: { name: "account-name" },
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
                  name: "--site-name",
                  description: "Name of the Hyper-V Site",
                  args: { name: "site-name" },
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
          name: "site",
          description: "Manage Hyper-V site",
          subcommands: [
            {
              name: "create",
              description: "Create a Hyper-V site",
              options: [
                {
                  name: ["--site-name", "--name", "-n"],
                  description: "Name of the Hyper-V Site",
                  args: { name: "site-name" },
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
                  name: "--agent",
                  description: "On-premises agent details",
                  args: { name: "agent" },
                },
                {
                  name: "--appliance-name",
                  description: "Name of the appliance",
                  args: { name: "appliance-name" },
                },
                {
                  name: "--identity",
                  description:
                    "Service principal identity details used by agent for communication to the service",
                  args: { name: "identity" },
                },
                {
                  name: ["--location", "-l"],
                  description:
                    "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
                  args: { name: "location" },
                },
                {
                  name: "--solution-id",
                  description: "ARM ID of migration hub solution for SDS",
                  args: { name: "solution-id" },
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
              description: "Delete a Hyper-V site",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--site-name", "--name", "-n"],
                  description: "Name of the Hyper-V Site",
                  args: { name: "site-name" },
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
              description: "Get the details of a site",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--site-name", "--name", "-n"],
                  description: "Name of the Hyper-V Site",
                  args: { name: "site-name" },
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
      name: "vmware",
      description: "Manage VMware on-premise resources",
      subcommands: [
        {
          name: "machine",
          description: "Manage VMware machine",
          subcommands: [
            {
              name: "list",
              description: "List all machines on the on-premise site",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--site-name",
                  description: "Name of the Hyper-V Site",
                  args: { name: "site-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description: "Get the details of a machine",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--machine-name", "--name", "-n"],
                  description: "Name of the machine",
                  args: { name: "machine-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--site-name",
                  description: "Name of the VMware site",
                  args: { name: "site-name" },
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
          name: "run-as-account",
          description: "Manage VMware run-as-account",
          subcommands: [
            {
              name: "list",
              description: "List all run-as-accounts on the on-premise site",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--site-name",
                  description: "Name of the VMware site",
                  args: { name: "site-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description: "Get the details of a run-as-account",
              options: [
                {
                  name: ["--account-name", "--name", "-n"],
                  description: "Name of the run-as-account",
                  args: { name: "account-name" },
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
                  name: "--site-name",
                  description: "Name of the VMware site",
                  args: { name: "site-name" },
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
          name: "site",
          description: "Manage VMware site",
          subcommands: [
            {
              name: "create",
              description: "Create a site for VMware resources",
              options: [
                {
                  name: ["--site-name", "--name", "-n"],
                  description: "Name of the VMware site",
                  args: { name: "site-name" },
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
                  name: "--agent",
                  description: "On-premises agent details",
                  args: { name: "agent" },
                },
                {
                  name: "--appliance-name",
                  description: "Name of the appliance",
                  args: { name: "appliance-name" },
                },
                {
                  name: "--identity",
                  description:
                    "Service principal identity details used by agent for communication to the service",
                  args: { name: "identity" },
                },
                {
                  name: ["--location", "-l"],
                  description:
                    "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
                  args: { name: "location" },
                },
                {
                  name: "--solution-id",
                  description: "ARM ID of migration hub solution for SDS",
                  args: { name: "solution-id" },
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
              description: "Delete a VMware site",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--site-name", "--name", "-n"],
                  description: "Name of the VMware site",
                  args: { name: "site-name" },
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
              description: "Get the details of a VMware site",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--site-name", "--name", "-n"],
                  description: "Name of the VMware site",
                  args: { name: "site-name" },
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
          name: "vcenter",
          description: "Manage VMware vCenter",
          subcommands: [
            {
              name: "list",
              description: "List all vCenters on the on-premise site",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--site-name",
                  description: "Name of the VMware site",
                  args: { name: "site-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description: "Get the details of a vCenter",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--vcenter-name", "--name", "-n"],
                  description: "VCenter ARM name",
                  args: { name: "vcenter-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--site-name",
                  description: "Name of the VMware site",
                  args: { name: "site-name" },
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
  ],
};

export default completion;
