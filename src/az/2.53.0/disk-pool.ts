const completion: Fig.Spec = {
  name: "disk-pool",
  description: "Manage Azure disk pool",
  subcommands: [
    {
      name: "create",
      description:
        "Create Disk pool. This Create operation can take 15 minutes to complete. This is expected service behavior",
      options: [
        {
          name: ["--disk-pool-name", "--name", "-n"],
          description: "The name of the Disk Pool",
          args: { name: "disk-pool-name" },
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
          name: "--sku",
          description: "Determines the SKU of the Disk Pool",
          args: { name: "sku" },
          isRequired: true,
        },
        {
          name: "--subnet-id",
          description: "Azure Resource ID of a Subnet for the Disk Pool",
          args: { name: "subnet-id" },
          isRequired: true,
        },
        {
          name: ["--additional-capabilities", "-a"],
          description: "List of additional capabilities for a Disk Pool",
          args: { name: "additional-capabilities" },
        },
        {
          name: "--availability-zones",
          description: 'Logical zone for Disk Pool resource; example: ["1"]',
          args: { name: "availability-zones" },
        },
        {
          name: "--disks",
          description: "List of Azure Managed Disks to attach to a Disk Pool",
          args: { name: "disks" },
        },
        {
          name: ["--location", "-l"],
          description:
            "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
          args: { name: "location" },
        },
        {
          name: "--managed-by",
          description:
            "Azure resource id. Indicates if this resource is managed by another Azure resource",
          args: { name: "managed-by" },
        },
        {
          name: "--managed-by-extended",
          description: "List of Azure resource ids that manage this resource",
          args: { name: "managed-by-extended" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
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
      description:
        "Delete a Disk pool; attached disks are not affected. This delete operation can take 10 minutes to complete. This is expected service behavior",
      options: [
        {
          name: ["--disk-pool-name", "--name", "-n"],
          description: "The name of the Disk Pool",
          args: { name: "disk-pool-name" },
        },
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
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
        "Gets a list of DiskPools in a resource group. And Gets a list of Disk Pools in a subscription",
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
      name: "list-outbound-network-dependency-endpoint",
      description:
        "Gets the network endpoints of all outbound dependencies of a Disk Pool",
      options: [
        {
          name: ["--disk-pool-name", "--name", "-n"],
          description: "The name of the Disk Pool",
          args: { name: "disk-pool-name" },
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
      name: "list-skus",
      description:
        "Lists available StoragePool resources and skus in an Azure location",
      options: [
        {
          name: ["--location", "-l"],
          description:
            "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
          args: { name: "location" },
          isRequired: true,
        },
      ],
    },
    {
      name: "list-zones",
      description: "Lists available Disk Pool Skus in an Azure location",
      options: [
        {
          name: ["--location", "-l"],
          description:
            "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
          args: { name: "location" },
          isRequired: true,
        },
      ],
    },
    {
      name: "redeploy",
      description:
        "Redeploy replaces the underlying virtual machine hosts one at a time. This operation can take 10-15 minutes to complete. This is expected service behavior",
      options: [
        {
          name: ["--disk-pool-name", "--name", "-n"],
          description: "The name of the Disk Pool",
          args: { name: "disk-pool-name" },
        },
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
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
      description: "Get a Disk pool",
      options: [
        {
          name: ["--disk-pool-name", "--name", "-n"],
          description: "The name of the Disk Pool",
          args: { name: "disk-pool-name" },
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
      description:
        "The operation to start a Disk Pool. This start operation can take 10 minutes to complete. This is expected service behavior",
      options: [
        {
          name: ["--disk-pool-name", "--name", "-n"],
          description: "The name of the Disk Pool",
          args: { name: "disk-pool-name" },
        },
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
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
      description:
        "Shuts down the Disk Pool and releases the compute resources. You are not billed for the compute resources that this Disk Pool uses. This operation can take 10 minutes to complete. This is expected service behavior",
      options: [
        {
          name: ["--disk-pool-name", "--name", "-n"],
          description: "The name of the Disk Pool",
          args: { name: "disk-pool-name" },
        },
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
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
      description: "Update a Disk pool",
      options: [
        {
          name: ["--disk-pool-name", "--name", "-n"],
          description: "The name of the Disk Pool",
          args: { name: "disk-pool-name" },
        },
        {
          name: "--disks",
          description: "List of Azure Managed Disks to attach to a Disk Pool",
          args: { name: "disks" },
        },
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: "--managed-by",
          description:
            "Azure resource id. Indicates if this resource is managed by another Azure resource",
          args: { name: "managed-by" },
        },
        {
          name: "--managed-by-extended",
          description: "List of Azure resource ids that manage this resource",
          args: { name: "managed-by-extended" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: "--sku",
          description: "Determines the SKU of the Disk Pool",
          args: { name: "sku" },
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
        "Place the CLI in a waiting state until a condition of the disk-pool is met",
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
          name: ["--disk-pool-name", "--name", "-n"],
          description: "The name of the Disk Pool",
          args: { name: "disk-pool-name" },
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
      name: "iscsi-target",
      description: "Manage iSCSI target with a Disk Pool",
      subcommands: [
        {
          name: "create",
          description: "Create an iSCSI Target",
          options: [
            {
              name: "--acl-mode",
              description: "Mode for Target connectivity",
              args: { name: "acl-mode", suggestions: ["Dynamic", "Static"] },
              isRequired: true,
            },
            {
              name: "--disk-pool-name",
              description: "The name of the Disk Pool",
              args: { name: "disk-pool-name" },
              isRequired: true,
            },
            {
              name: ["--iscsi-target-name", "--name", "-n"],
              description: "The name of the iSCSI Target",
              args: { name: "iscsi-target-name" },
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
              name: "--luns",
              description: "List of LUNs to be exposed through iSCSI Target",
              args: { name: "luns" },
            },
            {
              name: "--managed-by",
              description:
                "Azure resource id. Indicates if this resource is managed by another Azure resource",
              args: { name: "managed-by" },
            },
            {
              name: "--managed-by-extended",
              description:
                "List of Azure resource ids that manage this resource",
              args: { name: "managed-by-extended" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--static-acls",
              description:
                "Access Control List (ACL) for an iSCSI Target; defines LUN masking policy",
              args: { name: "static-acls" },
            },
            {
              name: "--target-iqn",
              description:
                'ISCSI Target IQN (iSCSI Qualified Name); example: "iqn.2005-03.org.iscsi:server"',
              args: { name: "target-iqn" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete an iSCSI Target",
          options: [
            {
              name: "--disk-pool-name",
              description: "The name of the Disk Pool",
              args: { name: "disk-pool-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--iscsi-target-name", "--name", "-n"],
              description: "The name of the iSCSI Target",
              args: { name: "iscsi-target-name" },
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
          description: "Get iSCSI Targets in a Disk pool",
          options: [
            {
              name: "--disk-pool-name",
              description: "The name of the Disk Pool",
              args: { name: "disk-pool-name" },
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
          description: "Get an iSCSI Target",
          options: [
            {
              name: "--disk-pool-name",
              description: "The name of the Disk Pool",
              args: { name: "disk-pool-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--iscsi-target-name", "--name", "-n"],
              description: "The name of the iSCSI Target",
              args: { name: "iscsi-target-name" },
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
          description: "Update an iSCSI Target",
          options: [
            {
              name: "--disk-pool-name",
              description: "The name of the Disk Pool",
              args: { name: "disk-pool-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--iscsi-target-name", "--name", "-n"],
              description: "The name of the iSCSI Target",
              args: { name: "iscsi-target-name" },
            },
            {
              name: "--luns",
              description: "List of LUNs to be exposed through iSCSI Target",
              args: { name: "luns" },
            },
            {
              name: "--managed-by",
              description:
                "Azure resource id. Indicates if this resource is managed by another Azure resource",
              args: { name: "managed-by" },
            },
            {
              name: "--managed-by-extended",
              description:
                "List of Azure resource ids that manage this resource",
              args: { name: "managed-by-extended" },
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
              name: "--static-acls",
              description:
                "Access Control List (ACL) for an iSCSI Target; defines LUN masking policy",
              args: { name: "static-acls" },
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
            "Place the CLI in a waiting state until a condition of the disk-pool iscsi-target is met",
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
              name: "--disk-pool-name",
              description: "The name of the Disk Pool",
              args: { name: "disk-pool-name" },
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
              name: ["--iscsi-target-name", "--name", "-n"],
              description: "The name of the iSCSI Target",
              args: { name: "iscsi-target-name" },
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
