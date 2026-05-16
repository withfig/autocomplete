const completion: Fig.Spec = {
  name: "capacity",
  description: "Manage capacity",
  subcommands: [
    {
      name: "reservation",
      description: "Manage capacity reservation",
      subcommands: [
        {
          name: "create",
          description: "Create capacity reservation",
          options: [
            {
              name: ["--capacity-reservation-group", "-c"],
              description: "The name of the capacity reservation group",
              args: { name: "capacity-reservation-group" },
              isRequired: true,
            },
            {
              name: ["--capacity-reservation-name", "-n"],
              description: "The name of the capacity reservation",
              args: { name: "capacity-reservation-name" },
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
              name: ["--sku", "-s"],
              description:
                'The SKU of the resource for which capacity needs be reserved. Currently VM Skus with the capability called "CapacityReservationSupported" set to true are supported. Refer to List Microsoft.Compute SKUs in a region (https://docs.microsoft.com/rest/api/compute/resourceskus/list) for supported values',
              args: { name: "sku" },
              isRequired: true,
            },
            {
              name: "--capacity",
              description:
                "Specify the number of virtual machines in the scale set",
              args: { name: "capacity" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
            {
              name: ["--zone", "-z"],
              description:
                "Availability Zone to use for this capacity reservation. The zone has to be single value and also should be part for the list of zones specified during the capacity reservation group creation. If not provided, the reservation supports only non-zonal deployments. If provided, enforces VM/VMSS using this capacity reservation to be in same zone",
              args: { name: "zone", suggestions: ["1", "2", "3"] },
            },
          ],
        },
        {
          name: "delete",
          description:
            "Delete operation to delete a capacity reservation. This operation is allowed only when all the associated resources are disassociated from the capacity reservation. Please refer to https://aka.ms/CapacityReservation for more details",
          options: [
            {
              name: [
                "--capacity-reservation-group-name",
                "--capacity-reservation-group",
                "-c",
              ],
              description: "The name of the capacity reservation group",
              args: { name: "capacity-reservation-group-name" },
            },
            {
              name: ["--capacity-reservation-name", "--name", "-n"],
              description: "The name of the capacity reservation",
              args: { name: "capacity-reservation-name" },
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
            "List all of the capacity reservations in the specified capacity reservation group. Use the nextLink property in the response to get the next page of capacity reservations",
          options: [
            {
              name: [
                "--capacity-reservation-group-name",
                "--capacity-reservation-group",
                "-c",
              ],
              description: "The name of the capacity reservation group",
              args: { name: "capacity-reservation-group-name" },
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
          description: "Show capacity reservation",
          options: [
            {
              name: ["--capacity-reservation-group", "-c"],
              description: "The name of the capacity reservation group",
              args: { name: "capacity-reservation-group" },
              isRequired: true,
            },
            {
              name: ["--capacity-reservation-name", "-n"],
              description: "The name of the capacity reservation",
              args: { name: "capacity-reservation-name" },
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
              name: ["--instance-view", "-i"],
              description:
                "Retrieve a snapshot of the runtime properties of the capacity reservation that is managed by the platform and can change outside of control plane operations",
              args: { name: "instance-view" },
            },
          ],
        },
        {
          name: "update",
          description: "Update capacity reservation",
          options: [
            {
              name: ["--capacity-reservation-group", "-c"],
              description: "The name of the capacity reservation group",
              args: { name: "capacity-reservation-group" },
              isRequired: true,
            },
            {
              name: ["--capacity-reservation-name", "-n"],
              description: "The name of the capacity reservation",
              args: { name: "capacity-reservation-name" },
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
              name: "--capacity",
              description:
                "Specify the number of virtual machines in the scale set",
              args: { name: "capacity" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
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
          name: "group",
          description: "Manage capacity reservation group",
          subcommands: [
            {
              name: "create",
              description: "Create capacity reservation group",
              options: [
                {
                  name: ["--capacity-reservation-group", "-n"],
                  description: "The name of the capacity reservation group",
                  args: { name: "capacity-reservation-group" },
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
                  name: "--tags",
                  description:
                    'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
                  args: { name: "tags" },
                },
                {
                  name: ["--zones", "-z"],
                  description:
                    "Availability Zones to use for this capacity reservation group. If not provided, the group supports only regional resources in the region. If provided, enforces each capacity reservation in the group to be in one of the zones",
                  args: { name: "zones", suggestions: ["1", "2", "3"] },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete operation to delete a capacity reservation group. This operation is allowed only if all the associated resources are disassociated from the reservation group and all capacity reservations under the reservation group have also been deleted. Please refer to https://aka.ms/CapacityReservation for more details",
              options: [
                {
                  name: [
                    "--capacity-reservation-group-name",
                    "--capacity-reservation-group",
                    "-n",
                  ],
                  description: "The name of the capacity reservation group",
                  args: { name: "capacity-reservation-group-name" },
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
              description: "List the capacity reservation groups",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--vm-instance",
                  description:
                    "Retrieve the Virtual Machine Instance which are associated to capacity reservation group in the response",
                  args: { name: "vm-instance" },
                },
                {
                  name: "--vmss-instance",
                  description:
                    "Retrieve the ScaleSet VM Instance which are associated to capacity reservation group in the response",
                  args: { name: "vmss-instance" },
                },
              ],
            },
            {
              name: "show",
              description: "Show capacity reservation group",
              options: [
                {
                  name: ["--capacity-reservation-group", "-n"],
                  description: "The name of the capacity reservation group",
                  args: { name: "capacity-reservation-group" },
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
                  name: ["--instance-view", "-i"],
                  description:
                    "Retrieve the list of instance views of the capacity reservations under the capacity reservation group which is a snapshot of the runtime properties of a capacity reservation that is managed by the platform and can change outside of control plane operations",
                  args: { name: "instance-view" },
                },
              ],
            },
            {
              name: "update",
              description: "Update capacity reservation group",
              options: [
                {
                  name: ["--capacity-reservation-group", "-n"],
                  description: "The name of the capacity reservation group",
                  args: { name: "capacity-reservation-group" },
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
                    'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
                  args: { name: "tags" },
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
