const completion: Fig.Spec = {
  name: "dedicated-hsm",
  description: "Manage dedicated hsm with hardware security modules",
  subcommands: [
    {
      name: "create",
      description: "Create a dedicated HSM in the specified subscription",
      options: [
        {
          name: "--name",
          description: "Name of the dedicated Hsm",
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
          name: ["--location", "-l"],
          description:
            "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
          args: { name: "location" },
        },
        {
          name: ["--mgmt-network-interfaces", "-m"],
          description:
            "Specifies the list of resource Ids for the network interfaces associated with the dedicated HSM",
          args: { name: "mgmt-network-interfaces" },
        },
        {
          name: "--mgmt-network-subnet",
          description: "Specifies the identifier of the subnet",
          args: { name: "mgmt-network-subnet" },
        },
        {
          name: ["--network-interfaces", "-i"],
          description:
            "Specifies the list of resource Ids for the network interfaces associated with the dedicated HSM",
          args: { name: "network-interfaces" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
        {
          name: "--sku",
          description: "SKU of the dedicated HSM",
          args: {
            name: "sku",
            suggestions: [
              "SafeNet Luna Network HSM A790",
              "payShield10K_LMK1_CPS250",
              "payShield10K_LMK1_CPS2500",
              "payShield10K_LMK1_CPS60",
              "payShield10K_LMK2_CPS250",
              "payShield10K_LMK2_CPS2500",
              "payShield10K_LMK2_CPS60",
            ],
          },
        },
        {
          name: "--stamp-id",
          description:
            "This field will be used when RP does not support Availability zones",
          args: { name: "stamp-id" },
        },
        {
          name: "--subnet",
          description: "Specifies the identifier of the subnet",
          args: { name: "subnet" },
        },
        {
          name: "--tags",
          description:
            'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
          args: { name: "tags" },
        },
        {
          name: "--zones",
          description: "The Dedicated Hsm zones",
          args: { name: "zones" },
        },
      ],
    },
    {
      name: "delete",
      description: "Deletes the specified Azure Dedicated HSM",
      options: [
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: "--name",
          description: "The name of the dedicated HSM to delete",
          args: { name: "name" },
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
        "The List operation gets information about the dedicated hsms associated with the subscription and within the specified resource group. And The List operation gets information about the dedicated HSMs associated with the subscription",
      options: [
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: "--top",
          description: "Maximum number of results to return",
          args: { name: "top" },
        },
      ],
    },
    {
      name: "list-outbound-network-dependency-endpoint",
      description:
        "Gets a list of egress endpoints (network endpoints of all outbound dependencies) in the specified dedicated hsm resource. The operation returns properties of each egress endpoint",
      options: [
        {
          name: "--name",
          description: "The name of the dedicated HSM",
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
      ],
    },
    {
      name: "show",
      description: "Gets the specified Azure dedicated HSM",
      options: [
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: "--name",
          description: "The name of the dedicated HSM",
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
      description: "Update a dedicated HSM in the specified subscription",
      options: [
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: "--name",
          description: "Name of the dedicated HSM",
          args: { name: "name" },
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
        "Place the CLI in a waiting state until a condition of the dedicated-hsm is met",
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
          name: "--name",
          description: "The name of the dedicated HSM",
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
      ],
    },
  ],
};

export default completion;
