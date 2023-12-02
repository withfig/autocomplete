const completion: Fig.Spec = {
  name: "connectedvmware",
  description: "Commands to manage Connected VMware",
  subcommands: [
    {
      name: "cluster",
      description: "Cluster resource",
      subcommands: [
        {
          name: "create",
          description: "Create a cluster resource",
          options: [
            {
              name: ["--custom-location", "-c"],
              description:
                "Name or ID of the custom location that will manage this resource",
              args: { name: "custom-location" },
              isRequired: true,
            },
            {
              name: ["--inventory-item", "-i"],
              description: "Name or ID of the inventory item",
              args: { name: "inventory-item" },
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
              name: ["--vcenter", "-v"],
              description:
                "Name or ID of the vCenter that is managing this resource",
              args: { name: "vcenter" },
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
          description: "Delete cluster resource",
          options: [
            { name: "--force", description: "Whether force delete or not" },
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
          description: "Retrieve a list of cluster of given resource group",
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
          description:
            "Get details of a cluster by id, resource-group, cluster name, or subscription",
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
      ],
    },
    {
      name: "datastore",
      description: "Datastore resource",
      subcommands: [
        {
          name: "create",
          description: "Create a datastore resource",
          options: [
            {
              name: ["--custom-location", "-c"],
              description:
                "Name or ID of the custom location that will manage this resource",
              args: { name: "custom-location" },
              isRequired: true,
            },
            {
              name: ["--inventory-item", "-i"],
              description: "Name or ID of the inventory item",
              args: { name: "inventory-item" },
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
              name: ["--vcenter", "-v"],
              description:
                "Name or ID of the vCenter that is managing this resource",
              args: { name: "vcenter" },
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
          description: "Delete datastore resource",
          options: [
            { name: "--force", description: "Whether force delete or not" },
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
          description: "Retrieve a list of datastore of given resource group",
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
          description:
            "Get details of a datastore by id, resource-group, datastore name, or subscription",
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
      ],
    },
    {
      name: "host",
      description: "Host resource",
      subcommands: [
        {
          name: "create",
          description: "Create a host resource",
          options: [
            {
              name: ["--custom-location", "-c"],
              description:
                "Name or ID of the custom location that will manage this resource",
              args: { name: "custom-location" },
              isRequired: true,
            },
            {
              name: ["--inventory-item", "-i"],
              description: "Name or ID of the inventory item",
              args: { name: "inventory-item" },
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
              name: ["--vcenter", "-v"],
              description:
                "Name or ID of the vCenter that is managing this resource",
              args: { name: "vcenter" },
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
          description: "Delete host resource",
          options: [
            { name: "--force", description: "Whether force delete or not" },
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
          description: "Retrieve a list of host of given resource group",
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
          description:
            "Get details of a host by id, resource-group, host name, or subscription",
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
      ],
    },
    {
      name: "resource-pool",
      description: "Resource pool resource",
      subcommands: [
        {
          name: "create",
          description: "Create a resource pool resource",
          options: [
            {
              name: ["--custom-location", "-c"],
              description:
                "Name or ID of the custom location that will manage this resource",
              args: { name: "custom-location" },
              isRequired: true,
            },
            {
              name: ["--inventory-item", "-i"],
              description: "Name or ID of the inventory item",
              args: { name: "inventory-item" },
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
              name: ["--vcenter", "-v"],
              description:
                "Name or ID of the vCenter that is managing this resource",
              args: { name: "vcenter" },
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
          description: "Delete resource pool resource",
          options: [
            { name: "--force", description: "Whether force delete or not" },
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
          description:
            "Retrieve a list of resource pool of given resource group",
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
          description:
            "Get details of a resource pool by id, resource-group, resource pool name, or subscription",
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
      ],
    },
    {
      name: "vcenter",
      description: "Vcenter resource",
      subcommands: [
        {
          name: "connect",
          description: "Create vcenter resource",
          options: [
            {
              name: ["--custom-location", "-c"],
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
              description: "FQDN/IP address of the vCenter",
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
                "Username password credentials to use for connecting to the vCenter",
              args: { name: "password" },
            },
            {
              name: "--port",
              description: "The port of the vCenter",
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
              description: "Username to use for connecting to the vCenter",
              args: { name: "username" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete vcenter resource",
          options: [
            { name: "--force", description: "Whether force delete or not" },
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
          description:
            "Retrieve a list of vcenter resource of given resource group",
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
          description:
            "Get details of a vcenter resource by id, resource-group, vcenter name or subscription",
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
          name: "inventory-item",
          description: "Inventory item resource",
          subcommands: [
            {
              name: "list",
              description:
                "Retrieve a list of inventory item given by resource group and vcenter name",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: ["--vcenter", "-v"],
                  description:
                    "Name or ID of the vCenter that is managing this resource",
                  args: { name: "vcenter" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description:
                "Get details of a inventory item by inventory item name or id, resource-group and vcenter name",
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
                  name: ["--vcenter", "-v"],
                  description:
                    "Name or ID of the vCenter that is managing this resource",
                  args: { name: "vcenter" },
                  isRequired: true,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "virtual-network",
      description: "Virtual network resource",
      subcommands: [
        {
          name: "create",
          description: "Create virtual network resource",
          options: [
            {
              name: ["--custom-location", "-c"],
              description:
                "Name or ID of the custom location that will manage this resource",
              args: { name: "custom-location" },
              isRequired: true,
            },
            {
              name: ["--inventory-item", "-i"],
              description: "Name or ID of the inventory item",
              args: { name: "inventory-item" },
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
              name: ["--vcenter", "-v"],
              description:
                "Name or ID of the vCenter that is managing this resource",
              args: { name: "vcenter" },
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
          description: "Delete virtual network resource",
          options: [
            { name: "--force", description: "Whether force delete or not" },
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
          description:
            "Retrieve a list of virtual network of given resource group",
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
          description:
            "Get details of a virtual network by id, resource-group, reource pool name or subscription",
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
      ],
    },
    {
      name: "vm",
      description: "Vm resource",
      subcommands: [
        {
          name: "create",
          description: "Create vm in vcenter from existing vm template",
          options: [
            {
              name: ["--custom-location", "-c"],
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
              name: "--admin-username",
              description: "Admin username for the vm",
              args: { name: "admin-username" },
            },
            {
              name: "--cluster",
              description: "Name or ID of the cluster for deploying the VM",
              args: { name: "cluster" },
            },
            {
              name: "--datastore",
              description: "Name or ID of the datastore for deploying the VM",
              args: { name: "datastore" },
            },
            {
              name: "--disk",
              description:
                "Disk overrides for the vm. Usage: --disk name=<> disk_size=<> disk_mode=<> controller_key=<> device-key=<> unit_number=<>",
              args: { name: "disk" },
            },
            {
              name: "--host",
              description: "Name or ID of the host for deploying the VM",
              args: { name: "host" },
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
                "Network overrides for the vm. Usage: --nic name=<> network=<> nic-type=<> power-on-boot=<> allocation-method=<> ip-address=<> subnet-mask=<> device-key=<> gateway=",
              args: { name: "nic" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--num-CPUs",
              description: "Number of desired vCPUs for the vm",
              args: { name: "num-CPUs" },
            },
            {
              name: "--num-cores-per-socket",
              description: "Number of desired cores per socket for the vm",
              args: { name: "num-cores-per-socket" },
            },
            {
              name: "--resource-pool",
              description:
                "Name or ID of the resource pool for deploying the vm",
              args: { name: "resource-pool" },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
            {
              name: ["--vcenter", "-v"],
              description:
                "Name or ID of the vCenter that is managing this resource",
              args: { name: "vcenter" },
            },
            {
              name: "--vm-template",
              description: "Name or ID of the vm template for deploying the vm",
              args: { name: "vm-template" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete vm resource",
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
              description: "Whether force delete or not",
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
          description: "Retrieve a list of vm of given resource group",
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
          description: "Restart vm resource",
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
          name: "show",
          description:
            "Get details of a vm by id, resource-group, reource pool name or subscription",
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
          description: "Start vm resource",
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
          description: "Stop vm resource",
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
              description: "Skips shutdown and power-off immediately",
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
          description: "Update vm resource",
          options: [
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
              name: "--num-CPUs",
              description: "Number of desired vCPUs for the vm",
              args: { name: "num-CPUs" },
            },
            {
              name: "--num-cores-per-socket",
              description: "Number of desired cores per socket for the vm",
              args: { name: "num-cores-per-socket" },
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
          name: "disk",
          description: "Vm disk",
          subcommands: [
            {
              name: "add",
              description: "Add virtual disk to a virtual machine",
              options: [
                {
                  name: "--controller-key",
                  description: "The controller key of the disk",
                  args: { name: "controller-key" },
                  isRequired: true,
                },
                {
                  name: "--disk-size",
                  description: "The disk size in GBs",
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
                  name: "--disk-mode",
                  description: "The mode of the disk",
                  args: { name: "disk-mode" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--unit-number",
                  description: "The unit number of the disk",
                  args: { name: "unit-number" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete virtual disks to a virtual machine",
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
              description:
                "Retrieve a list of vm disk from given resource group name and vm name",
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
              description:
                "Get details of a vm disk by it's name, resource-group and vm name",
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
              description: "Update virtual disk to a virtual machine",
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
                  name: "--controller-key",
                  description: "The controller key of the disk",
                  args: { name: "controller-key" },
                },
                {
                  name: "--device-key",
                  description: "The device key for the disk",
                  args: { name: "device-key" },
                },
                {
                  name: "--disk-mode",
                  description: "The mode of the disk",
                  args: { name: "disk-mode" },
                },
                {
                  name: "--disk-size",
                  description: "The disk size in GBs",
                  args: { name: "disk-size" },
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
                  name: "--unit-number",
                  description: "The unit number of the disk",
                  args: { name: "unit-number" },
                },
              ],
            },
          ],
        },
        {
          name: "extension",
          description: "Manage vm extension with connectedvmware",
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
          description: "Vm nic",
          subcommands: [
            {
              name: "add",
              description: "Add virtual nic to a virtual machine",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the NIC",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--network",
                  description: "Name or Id of the virtual network",
                  args: { name: "network" },
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
                  name: "--nic-type",
                  description: "The nic type for the NIC",
                  args: { name: "nic-type" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--power-on-boot",
                  description: "The power on boot option for the nic",
                  args: { name: "power-on-boot" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete virtual nic to a virtual machine",
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
              description:
                "Retrieve a list of vm nic from given resource group name and vm name",
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
              description:
                "Get details of a vm nic by it's name, resource-group and vm name",
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
              description:
                "Update virtual network interface of a virtual machine",
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
                  name: "--device-key",
                  description: "The device key for the nic",
                  args: { name: "device-key" },
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
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--power-on-boot",
                  description: "The power on boot option for the nic",
                  args: { name: "power-on-boot" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "vm-template",
      description: "Vm template resource",
      subcommands: [
        {
          name: "create",
          description: "Create vm template resource",
          options: [
            {
              name: ["--custom-location", "-c"],
              description:
                "Name or ID of the custom location that will manage this resource",
              args: { name: "custom-location" },
              isRequired: true,
            },
            {
              name: ["--inventory-item", "-i"],
              description: "Name or ID of the inventory item",
              args: { name: "inventory-item" },
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
              name: ["--vcenter", "-v"],
              description:
                "Name or ID of the vCenter that is managing this resource",
              args: { name: "vcenter" },
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
          description: "Delete vm template resource",
          options: [
            { name: "--force", description: "Whether force delete or not" },
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
          description: "Retrieve a list of vm template of given resource group",
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
          description:
            "Get details of a vm template by id, resource-group, reource pool name or subscription",
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
      ],
    },
  ],
};

export default completion;
