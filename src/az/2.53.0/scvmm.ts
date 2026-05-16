const completion: Fig.Spec = {
  name: "scvmm",
  description: "Commands for managing Arc for SCVMM resources",
  subcommands: [
    {
      name: "avset",
      description: "Manage Arc for SCVMM Availability Set resources",
      subcommands: [
        {
          name: "create",
          description: "Create availabilty set resource",
          options: [
            {
              name: ["--avset-name", "-a"],
              description: "Name of the Availabilty Set",
              args: { name: "avset-name" },
              isRequired: true,
            },
            {
              name: "--custom-location",
              description:
                "Name or ID of the custom location that will manage this resource",
              args: { name: "custom-location" },
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
              name: ["--name", "-n"],
              description: "Name of the resource",
              args: { name: "name" },
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
              name: ["--vmmserver", "-v"],
              description:
                "Name or ID of the vmmserver that is managing this resource",
              args: { name: "vmmserver" },
              isRequired: true,
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
          name: "delete",
          description: "Delete availabilty set resource",
          options: [
            {
              name: "--force",
              description: "Force the resource to be deleted from azure",
              args: { name: "force" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the resource",
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
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "Retrieve a list of availabilty sets",
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
          description: "Get details of an availabilty set",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the resource",
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
          ],
        },
        {
          name: "update",
          description: "Update availabilty set resource",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the resource",
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
            "Place the CLI in a waiting state until a condition of the availability set is met",
          options: [
            {
              name: "--availability-set-name",
              description: "Name of the AvailabilitySet",
              args: { name: "availability-set-name" },
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
              name: "--interval",
              description: "Polling interval in seconds",
              args: { name: "interval" },
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
      name: "cloud",
      description: "Manage Arc for SCVMM Cloud resources",
      subcommands: [
        {
          name: "create",
          description: "Create cloud resource",
          options: [
            {
              name: "--custom-location",
              description:
                "Name or ID of the custom location that will manage this resource",
              args: { name: "custom-location" },
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
              name: ["--name", "-n"],
              description: "Name of the resource",
              args: { name: "name" },
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
              name: ["--inventory-item", "-i"],
              description: "Name or ID of the inventory item",
              args: { name: "inventory-item" },
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
              name: "--uuid",
              description: "The ID of the resource created in the VMM",
              args: { name: "uuid" },
            },
            {
              name: ["--vmmserver", "-v"],
              description:
                "Name or ID of the vmmserver that is managing this resource",
              args: { name: "vmmserver" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete cloud resource",
          options: [
            {
              name: "--force",
              description: "Force the resource to be deleted from azure",
              args: { name: "force" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the resource",
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
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "Retrieve a list of clouds",
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
          description: "Get details of a cloud",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the resource",
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
          ],
        },
        {
          name: "update",
          description: "Update cloud resource",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the resource",
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
            "Place the CLI in a waiting state until a condition of the cloud is met",
          options: [
            {
              name: "--cloud-name",
              description: "Name of the Cloud",
              args: { name: "cloud-name" },
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
              name: "--interval",
              description: "Polling interval in seconds",
              args: { name: "interval" },
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
      name: "virtual-network",
      description: "Manage Arc for SCVMM Virtual Network resources",
      subcommands: [
        {
          name: "create",
          description: "Create virtual-network resource",
          options: [
            {
              name: "--custom-location",
              description:
                "Name or ID of the custom location that will manage this resource",
              args: { name: "custom-location" },
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
              name: ["--name", "-n"],
              description: "Name of the resource",
              args: { name: "name" },
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
              name: ["--inventory-item", "-i"],
              description: "Name or ID of the inventory item",
              args: { name: "inventory-item" },
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
              name: "--uuid",
              description: "The ID of the resource created in the VMM",
              args: { name: "uuid" },
            },
            {
              name: ["--vmmserver", "-v"],
              description:
                "Name or ID of the vmmserver that is managing this resource",
              args: { name: "vmmserver" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete virtual-network resource",
          options: [
            {
              name: "--force",
              description: "Force the resource to be deleted from azure",
              args: { name: "force" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the resource",
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
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "Retrieve a list of virtual-networks",
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
          description: "Get details of a virtual-network",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the resource",
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
          ],
        },
        {
          name: "update",
          description: "Update virtual-network resource",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the resource",
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
            "Place the CLI in a waiting state until a condition of the virtual-network is met",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--virtual-network-name",
              description: "Name of the VirtualNetwork",
              args: { name: "virtual-network-name" },
              isRequired: true,
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
              name: "--interval",
              description: "Polling interval in seconds",
              args: { name: "interval" },
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
      name: "vm",
      description: "Manage Arc for SCVMM Virtual Machine resources",
      subcommands: [
        {
          name: "create",
          description: "Create VM resource",
          options: [
            {
              name: "--custom-location",
              description:
                "Name or ID of the custom location that will manage this resource",
              args: { name: "custom-location" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the resource",
              args: { name: "name" },
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
              name: "--admin-password",
              description: "Admin password for the vm",
              args: { name: "admin-password" },
            },
            {
              name: ["--availability-sets", "-a"],
              description:
                "List of the name or the ID of the availability sets for the vm",
              args: { name: "availability-sets" },
            },
            {
              name: ["--cloud", "-c"],
              description: "Name or ID of the cloud for deploying the vm",
              args: { name: "cloud" },
            },
            {
              name: "--cpu-count",
              description: "Number of desired vCPUs for the vm",
              args: { name: "cpu-count" },
            },
            {
              name: "--disk",
              description:
                "Disk overrides for the vm.Usage: --disk name=<> disk-size=<> template-disk-id=<> bus-type=<> bus=<> lun=<> vhd-type=<> qos-name=<> qos-id=<>",
              args: { name: "disk" },
            },
            {
              name: "--dynamic-memory-enabled",
              description: "If dynamic memory should be enabled",
              args: {
                name: "dynamic-memory-enabled",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--dynamic-memory-max",
              description: "DynamicMemoryMax in MBs for the vm",
              args: { name: "dynamic-memory-max" },
            },
            {
              name: "--dynamic-memory-min",
              description: "DynamicMemoryMin in MBs for the vm",
              args: { name: "dynamic-memory-min" },
            },
            {
              name: ["--inventory-item", "-i"],
              description: "Name or ID of the inventory item",
              args: { name: "inventory-item" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--memory-size",
              description: "Desired memory size in MBs for the vm",
              args: { name: "memory-size" },
            },
            {
              name: "--nic",
              description:
                "Network overrides for the vm.Usage: --nic name=<> network=<> ipv4-address-type=<> ipv6-address-type=<> mac-address-type=<> mac-address=<>",
              args: { name: "nic" },
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
              name: ["--vm-template", "-t"],
              description: "Name or ID of the vm template for deploying the vm",
              args: { name: "vm-template" },
            },
            {
              name: ["--vmmserver", "-v"],
              description:
                "Name or ID of the vmmserver that is managing this resource",
              args: { name: "vmmserver" },
            },
          ],
        },
        {
          name: "create-checkpoint",
          description: "Create a VM checkpoint",
          options: [
            {
              name: "--checkpoint-description",
              description: "Description of the checkpoint to be created",
              args: { name: "checkpoint-description" },
              isRequired: true,
            },
            {
              name: "--checkpoint-name",
              description: "Name of the checkpoint to be created",
              args: { name: "checkpoint-name" },
              isRequired: true,
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the resource",
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
          name: "delete",
          description: "Delete VM resource",
          options: [
            {
              name: "--delete-from-host",
              description: "Delete the VM from the VMware host",
              args: { name: "delete-from-host" },
            },
            {
              name: "--delete-machine",
              description:
                "Delete the parent Microsoft.HybridCompute Machine resource",
              args: { name: "delete-machine" },
            },
            {
              name: "--force",
              description: "Force delete the azure resource",
              args: { name: "force" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the resource",
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
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "delete-checkpoint",
          description: "Delete the specified VM checkpoint",
          options: [
            {
              name: "--checkpoint-id",
              description: "Checkpoint UUID",
              args: { name: "checkpoint-id" },
              isRequired: true,
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the resource",
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
          name: "list",
          description: "Retrieve a list of VMs",
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
          name: "restart",
          description: "Restart a VM",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the resource",
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
          name: "restore-checkpoint",
          description: "Restore VM checkpoint",
          options: [
            {
              name: "--checkpoint-id",
              description: "Checkpoint UUID",
              args: { name: "checkpoint-id" },
              isRequired: true,
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the resource",
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
          name: "show",
          description: "Get details of an VM",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the resource",
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
          ],
        },
        {
          name: "start",
          description: "Start a VM",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the resource",
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
          name: "stop",
          description: "Stop a VM",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the resource",
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
              name: "--skip-shutdown",
              description: "Skip shutdown and power-off immediately",
              args: { name: "skip-shutdown", suggestions: ["false", "true"] },
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
            "Update a VM. Management of VM disks and NICs are not using this subcommand. There are separate subcommands for the same",
          options: [
            {
              name: ["--availability-sets", "-a"],
              description:
                "List of the name or the ID of the availability sets for the vm",
              args: { name: "availability-sets" },
            },
            {
              name: "--cpu-count",
              description: "Number of desired vCPUs for the vm",
              args: { name: "cpu-count" },
            },
            {
              name: "--dynamic-memory-enabled",
              description: "If dynamic memory should be enabled",
              args: {
                name: "dynamic-memory-enabled",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--dynamic-memory-max",
              description: "DynamicMemoryMax in MBs for the vm",
              args: { name: "dynamic-memory-max" },
            },
            {
              name: "--dynamic-memory-min",
              description: "DynamicMemoryMin in MBs for the vm",
              args: { name: "dynamic-memory-min" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--memory-size",
              description: "Desired memory size in MBs for the vm",
              args: { name: "memory-size" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the resource",
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
            "Place the CLI in a waiting state until a condition of the vm is met",
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
              description: "Name of the VirtualMachine",
              args: { name: "virtual-machine-name" },
              isRequired: true,
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
              name: "--interval",
              description: "Polling interval in seconds",
              args: { name: "interval" },
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
          name: "disk",
          description: "Managing the Disks of Arc for SCVMM Virtual Machine",
          subcommands: [
            {
              name: "add",
              description: "Add a virtual disk to a virtual machine",
              options: [
                {
                  name: "--bus",
                  description: "Bus Number for the disk",
                  args: { name: "bus" },
                  isRequired: true,
                },
                {
                  name: "--disk-size",
                  description: "Size of the disk in GB",
                  args: { name: "disk-size" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the Disk",
                  args: { name: "name" },
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
                  description: "Name of the virtual machine",
                  args: { name: "vm-name" },
                  isRequired: true,
                },
                {
                  name: "--bus-type",
                  description: "Bus Type of the Disk",
                  args: { name: "bus-type", suggestions: ["IDE", "SCSI"] },
                },
                {
                  name: "--lun",
                  description: "Lun Number for the disk",
                  args: { name: "lun" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--qos-id",
                  description:
                    "UUID of the Storage QoS Policy to be applied on the disk",
                  args: { name: "qos-id" },
                },
                {
                  name: "--qos-name",
                  description:
                    "Name of the Storage QoS Policy to be applied on the disk",
                  args: { name: "qos-name" },
                },
                {
                  name: "--vhd-type",
                  description: "VHD Type of the Disk",
                  args: {
                    name: "vhd-type",
                    suggestions: ["Dynamic", "Static"],
                  },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete disks of a virtual machine",
              options: [
                {
                  name: "--disks",
                  description: "Names of the Disks",
                  args: { name: "disks" },
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
                  description: "Name of the virtual machine",
                  args: { name: "vm-name" },
                  isRequired: true,
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "list",
              description: "Retrieve the list of disks present in a VM",
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
                  description: "Name of the virtual machine",
                  args: { name: "vm-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description: "Get the details of a disk present in a VM",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the Disk",
                  args: { name: "name" },
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
                  description: "Name of the virtual machine",
                  args: { name: "vm-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "update",
              description: "Update a disk of a VM",
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
                  description: "Name of the virtual machine",
                  args: { name: "vm-name" },
                  isRequired: true,
                },
                {
                  name: "--bus",
                  description: "Bus Number for the disk",
                  args: { name: "bus" },
                },
                {
                  name: "--bus-type",
                  description: "Bus Type of the Disk",
                  args: { name: "bus-type", suggestions: ["IDE", "SCSI"] },
                },
                {
                  name: "--disk-id",
                  description: "UUID of the Disk",
                  args: { name: "disk-id" },
                },
                {
                  name: "--disk-size",
                  description: "Size of the disk in GB",
                  args: { name: "disk-size" },
                },
                {
                  name: "--lun",
                  description: "Lun Number for the disk",
                  args: { name: "lun" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the Disk",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--qos-id",
                  description:
                    "UUID of the Storage QoS Policy to be applied on the disk",
                  args: { name: "qos-id" },
                },
                {
                  name: "--qos-name",
                  description:
                    "Name of the Storage QoS Policy to be applied on the disk",
                  args: { name: "qos-name" },
                },
                {
                  name: "--vhd-type",
                  description: "VHD Type of the Disk",
                  args: {
                    name: "vhd-type",
                    suggestions: ["Dynamic", "Static"],
                  },
                },
              ],
            },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition of the vm disk is met",
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
                  description: "Name of the VirtualMachine",
                  args: { name: "virtual-machine-name" },
                  isRequired: true,
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
                  name: "--interval",
                  description: "Polling interval in seconds",
                  args: { name: "interval" },
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
          name: "extension",
          description: "Manage vm extension with scvmm",
          subcommands: [
            {
              name: "create",
              description: "The operation to create the extension",
              options: [
                {
                  name: ["--location", "-l"],
                  description:
                    "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
                  args: { name: "location" },
                  isRequired: true,
                },
                {
                  name: "--name",
                  description: "The name of the vm extension",
                  args: { name: "name" },
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
                  description:
                    "The name of the vm where the extension should be created or updated",
                  args: { name: "vm-name" },
                  isRequired: true,
                },
                {
                  name: "--auto-upgrade-minor",
                  description:
                    "Indicate whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true",
                  args: {
                    name: "auto-upgrade-minor",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--enable-auto-upgrade",
                  description:
                    "Indicates whether the extension should be automatically upgraded by the platform if there is a newer version available",
                  args: {
                    name: "enable-auto-upgrade",
                    suggestions: ["false", "true"],
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
                },
                {
                  name: "--protected-settings",
                  description:
                    "The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all. Expected value: json-string/json-file/@json-file",
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
                    "Json formatted public settings for the extension. Expected value: json-string/json-file/@json-file",
                  args: { name: "settings" },
                },
                {
                  name: "--tags",
                  description:
                    'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
                  args: { name: "tags" },
                },
                {
                  name: "--type",
                  description:
                    'Specify the type of the extension; an example is "CustomScriptExtension"',
                  args: { name: "type" },
                },
                {
                  name: "--type-handler-version",
                  description: "Specifies the version of the script handler",
                  args: { name: "type-handler-version" },
                },
              ],
            },
            {
              name: "delete",
              description: "The operation to delete the extension",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--name",
                  description: "The name of the vm extension",
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
                  description:
                    "The name of the vm where the extension should be deleted",
                  args: { name: "vm-name" },
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
                "The operation to get all extensions of a non-Azure vm",
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
                  description: "The name of the vm containing the extension",
                  args: { name: "vm-name" },
                  isRequired: true,
                },
                {
                  name: "--expand",
                  description:
                    "The expand expression to apply on the operation",
                  args: { name: "expand" },
                },
              ],
            },
            {
              name: "show",
              description: "The operation to get the extension",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--name",
                  description: "The name of the vm extension",
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
                  description: "The name of the vm containing the extension",
                  args: { name: "vm-name" },
                },
              ],
            },
            {
              name: "update",
              description: "The operation to update the extension",
              options: [
                {
                  name: "--name",
                  description: "The name of the vm extension",
                  args: { name: "name" },
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
                  description:
                    "The name of the vm where the extension should be created or updated",
                  args: { name: "vm-name" },
                  isRequired: true,
                },
                {
                  name: "--auto-upgrade-minor",
                  description:
                    "Indicate whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true",
                  args: {
                    name: "auto-upgrade-minor",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--enable-auto-upgrade",
                  description:
                    "Indicates whether the extension should be automatically upgraded by the platform if there is a newer version available",
                  args: {
                    name: "enable-auto-upgrade",
                    suggestions: ["false", "true"],
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
                },
                {
                  name: "--protected-settings",
                  description:
                    "The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all. Expected value: json-string/json-file/@json-file",
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
                    "Json formatted public settings for the extension. Expected value: json-string/json-file/@json-file",
                  args: { name: "settings" },
                },
                {
                  name: "--tags",
                  description:
                    'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
                  args: { name: "tags" },
                },
                {
                  name: "--type",
                  description:
                    'Specify the type of the extension; an example is "CustomScriptExtension"',
                  args: { name: "type" },
                },
                {
                  name: "--type-handler-version",
                  description: "Specifies the version of the script handler",
                  args: { name: "type-handler-version" },
                },
              ],
            },
          ],
        },
        {
          name: "guest-agent",
          description: "Vm guest agent",
          subcommands: [
            {
              name: "enable",
              description: "Enable guest agent on the vm",
              options: [
                {
                  name: "--password",
                  description:
                    "Username password credentials to use for connecting to the VM",
                  args: { name: "password" },
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
                  name: "--username",
                  description: "Username to use for connecting to the vm",
                  args: { name: "username" },
                  isRequired: true,
                },
                {
                  name: "--vm-name",
                  description: "Name of the VM",
                  args: { name: "vm-name" },
                  isRequired: true,
                },
                {
                  name: "--https-proxy",
                  description: "HTTPS proxy server url for the VM",
                  args: { name: "https-proxy" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
              ],
            },
            {
              name: "show",
              description:
                "Get details of a guest agent by guest agent name, resource-group and vm name",
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
                  description: "Name of the VM",
                  args: { name: "vm-name" },
                  isRequired: true,
                },
              ],
            },
          ],
        },
        {
          name: "nic",
          description: "Managing the NICs of Arc for SCVMM Virtual Machine",
          subcommands: [
            {
              name: "add",
              description: "Add a network interface card to a virtual machine",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the NIC",
                  args: { name: "name" },
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
                  description: "Name of the virtual machine",
                  args: { name: "vm-name" },
                  isRequired: true,
                },
                {
                  name: "--ipv4-address-type",
                  description: "The allocation type of the ipv4 address",
                  args: {
                    name: "ipv4-address-type",
                    suggestions: ["Dynamic", "Static"],
                  },
                },
                {
                  name: "--ipv6-address-type",
                  description: "The allocation type of the ipv6 address",
                  args: {
                    name: "ipv6-address-type",
                    suggestions: ["Dynamic", "Static"],
                  },
                },
                {
                  name: "--mac-address",
                  description: "MAC address of the NIC",
                  args: { name: "mac-address" },
                },
                {
                  name: "--mac-address-type",
                  description: "The allocation type of the MAC address",
                  args: {
                    name: "mac-address-type",
                    suggestions: ["Dynamic", "Static"],
                  },
                },
                {
                  name: "--network",
                  description: "Name or Id of the virtual network",
                  args: { name: "network" },
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
              description: "Delete NICs of a virtual machine",
              options: [
                {
                  name: "--nics",
                  description: "Names of the NICs",
                  args: { name: "nics" },
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
                  description: "Name of the virtual machine",
                  args: { name: "vm-name" },
                  isRequired: true,
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "list",
              description: "Retrieve the list of NICs present in a VM",
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
                  description: "Name of the virtual machine",
                  args: { name: "vm-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description: "Get the details of a NIC present in a VM",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the NIC",
                  args: { name: "name" },
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
                  description: "Name of the virtual machine",
                  args: { name: "vm-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "update",
              description: "Update a NIC of a VM",
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
                  description: "Name of the virtual machine",
                  args: { name: "vm-name" },
                  isRequired: true,
                },
                {
                  name: "--disconnect",
                  description:
                    "Disconnect the NIC from any virtual network it is connected to",
                },
                {
                  name: "--ipv4-address-type",
                  description: "The allocation type of the ipv4 address",
                  args: {
                    name: "ipv4-address-type",
                    suggestions: ["Dynamic", "Static"],
                  },
                },
                {
                  name: "--ipv6-address-type",
                  description: "The allocation type of the ipv6 address",
                  args: {
                    name: "ipv6-address-type",
                    suggestions: ["Dynamic", "Static"],
                  },
                },
                {
                  name: "--mac-address-type",
                  description: "The allocation type of the MAC address",
                  args: {
                    name: "mac-address-type",
                    suggestions: ["Dynamic", "Static"],
                  },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the NIC",
                  args: { name: "name" },
                },
                {
                  name: "--network",
                  description: "Name or Id of the virtual network",
                  args: { name: "network" },
                },
                {
                  name: "--nic-id",
                  description: "UUID of the NIC",
                  args: { name: "nic-id" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
              ],
            },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition of the vm nic is met",
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
                  description: "Name of the VirtualMachine",
                  args: { name: "virtual-machine-name" },
                  isRequired: true,
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
                  name: "--interval",
                  description: "Polling interval in seconds",
                  args: { name: "interval" },
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
      name: "vm-template",
      description: "Manage Arc for SCVMM Virtual Machine Template resources",
      subcommands: [
        {
          name: "create",
          description: "Create vm-template resource",
          options: [
            {
              name: "--custom-location",
              description:
                "Name or ID of the custom location that will manage this resource",
              args: { name: "custom-location" },
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
              name: ["--name", "-n"],
              description: "Name of the resource",
              args: { name: "name" },
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
              name: ["--inventory-item", "-i"],
              description: "Name or ID of the inventory item",
              args: { name: "inventory-item" },
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
              name: "--uuid",
              description: "The ID of the resource created in the VMM",
              args: { name: "uuid" },
            },
            {
              name: ["--vmmserver", "-v"],
              description:
                "Name or ID of the vmmserver that is managing this resource",
              args: { name: "vmmserver" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete vm-template resource",
          options: [
            {
              name: "--force",
              description: "Force the resource to be deleted from azure",
              args: { name: "force" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the resource",
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
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "Retrieve a list of vm-templates",
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
          description: "Get details of a vm-template",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the resource",
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
          ],
        },
        {
          name: "update",
          description: "Update vm-template resource",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the resource",
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
            "Place the CLI in a waiting state until a condition of the vm-template is met",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--vm-template-name",
              description: "Name of the VirtualMachineTemplate",
              args: { name: "vm-template-name" },
              isRequired: true,
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
              name: "--interval",
              description: "Polling interval in seconds",
              args: { name: "interval" },
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
      name: "vmmserver",
      description: "Manage Arc for SCVMM VMMServer resources",
      subcommands: [
        {
          name: "connect",
          description: "Create a vmmserver resource",
          options: [
            {
              name: "--custom-location",
              description:
                "Name or ID of the custom location that will manage this resource",
              args: { name: "custom-location" },
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
              name: "--fqdn",
              description: "FQDN/IP address of the vmmserver",
              args: { name: "fqdn" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the resource",
              args: { name: "name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--password",
              description:
                "Username password credentials to use for connecting to the vmmserver",
              args: { name: "password" },
            },
            {
              name: "--port",
              description: "The port of the vmmserver",
              args: { name: "port" },
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
            {
              name: "--username",
              description: "Username to use for connecting to the vmmserver",
              args: { name: "username" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a vmmserver resource",
          options: [
            {
              name: "--force",
              description: "Force the resource to be deleted from azure",
              args: { name: "force" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the resource",
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
          name: "list",
          description: "Retrieve a list of vmmservers",
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
          description: "Get details of a vmmserver",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the resource",
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
          ],
        },
        {
          name: "update",
          description: "Update vmmserver resource",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the resource",
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
            "Place the CLI in a waiting state until a condition of the vmmserver is met",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--vmm-server-name",
              description: "Name of the VMMServer",
              args: { name: "vmm-server-name" },
              isRequired: true,
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
              name: "--interval",
              description: "Polling interval in seconds",
              args: { name: "interval" },
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
          name: "inventory-item",
          description: "Inventory item resource",
          subcommands: [
            {
              name: "list",
              description:
                "Retrieve a list of inventory items present in a vmmserver",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: ["--vmmserver", "-v"],
                  description:
                    "Name or ID of the vmmserver that is managing this resource",
                  args: { name: "vmmserver" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description:
                "Get details of an inventory item present in a vmmserver",
              options: [
                {
                  name: ["--inventory-item", "-i"],
                  description: "Name or ID of the inventory item",
                  args: { name: "inventory-item" },
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
                  name: ["--vmmserver", "-v"],
                  description:
                    "Name or ID of the vmmserver that is managing this resource",
                  args: { name: "vmmserver" },
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
