const completion: Fig.Spec = {
  name: "amlfs",
  description: "Manage lustre file system",
  subcommands: [
    {
      name: "archive",
      description: "Archive data from the AML file system",
      options: [
        {
          name: "--amlfs-name",
          description:
            "Name for the AML file system. Allows alphanumerics, underscores, and hyphens. Start and end with alphanumeric",
          args: { name: "amlfs-name" },
        },
        {
          name: "--filesystem-path",
          description:
            "Lustre file system path to archive relative to the file system root. Specify '/' to archive all modified data",
          args: { name: "filesystem-path" },
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
      name: "cancel-archive",
      description: "Cancel archiving data from the AML file system",
      options: [
        {
          name: "--amlfs-name",
          description:
            "Name for the AML file system. Allows alphanumerics, underscores, and hyphens. Start and end with alphanumeric",
          args: { name: "amlfs-name" },
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
      name: "check-amlfs-subnet",
      description:
        "Check that subnets will be valid for AML file system create calls",
      options: [
        {
          name: "--filesystem-subnet",
          description:
            "Subnet used for managing the AML file system and for client-facing operations. This subnet should have at least a /24 subnet mask within the VNET's address space",
          args: { name: "filesystem-subnet" },
        },
        {
          name: "--location",
          description: "Region that the AML file system will be created in",
          args: { name: "location" },
        },
        {
          name: "--sku",
          description: "SKU name for this resource",
          args: { name: "sku" },
        },
        {
          name: "--storage-capacity",
          description: "The size of the AML file system, in TiB",
          args: { name: "storage-capacity" },
        },
      ],
    },
    {
      name: "create",
      description: "Create an AML file system",
      options: [
        {
          name: ["--aml-filesystem-name", "--name", "-n"],
          description:
            "Name for the AML file system. Allows alphanumerics, underscores, and hyphens. Start and end with alphanumeric",
          args: { name: "aml-filesystem-name" },
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
          name: "--encryption-setting",
          description:
            'Specifies the location of the encryption key in Key Vault. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
          args: { name: "encryption-setting" },
        },
        {
          name: "--filesystem-subnet",
          description:
            "Subnet used for managing the AML file system and for client-facing operations. This subnet should have at least a /24 subnet mask within the VNET's address space",
          args: { name: "filesystem-subnet" },
        },
        {
          name: "--hsm-settings",
          description:
            'Specifies HSM settings of the AML file system. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
          args: { name: "hsm-settings" },
        },
        {
          name: ["--location", "-l"],
          description:
            "The geo-location where the resource lives When not specified, the location of the resource group will be used",
          args: { name: "location" },
        },
        {
          name: "--maintenance-window",
          description:
            'Start time of a 30-minute weekly maintenance window. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
          args: { name: "maintenance-window" },
        },
        {
          name: "--mi-user-assigned",
          description:
            'Space separated resource IDs to add user-assigned identities. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
          args: { name: "mi-user-assigned" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
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
          name: "--sku",
          description: "SKU name for this resource",
          args: { name: "sku" },
        },
        {
          name: "--storage-capacity",
          description:
            "The size of the AML file system, in TiB. This might be rounded up",
          args: { name: "storage-capacity" },
        },
        {
          name: "--tags",
          description:
            'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
          args: { name: "tags" },
        },
        {
          name: "--zones",
          description:
            'Availability zones for resources. This field should only contain a single element in the array. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
          args: { name: "zones" },
        },
      ],
    },
    {
      name: "delete",
      description: "Delete an AML file system for deletion",
      options: [
        {
          name: ["--aml-filesystem-name", "--name", "-n"],
          description:
            "Name for the AML file system. Allows alphanumerics, underscores, and hyphens. Start and end with alphanumeric",
          args: { name: "aml-filesystem-name" },
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
      name: "get-subnets-size",
      description:
        "Get the number of available IP addresses needed for the AML file system information provided",
      options: [
        {
          name: "--sku",
          description: "SKU name for this resource",
          args: { name: "sku" },
        },
        {
          name: "--storage-capacity",
          description: "The size of the AML file system, in TiB",
          args: { name: "storage-capacity" },
        },
      ],
    },
    {
      name: "list",
      description:
        "List all AML file systems the user has access to under a resource group",
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
      description: "Get an AML file system",
      options: [
        {
          name: ["--aml-filesystem-name", "--name", "-n"],
          description:
            "Name for the AML file system. Allows alphanumerics, underscores, and hyphens. Start and end with alphanumeric",
          args: { name: "aml-filesystem-name" },
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
      description: "Update an AML file system",
      options: [
        {
          name: "--add",
          description:
            "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
          args: { name: "add" },
        },
        {
          name: ["--aml-filesystem-name", "--name", "-n"],
          description:
            "Name for the AML file system. Allows alphanumerics, underscores, and hyphens. Start and end with alphanumeric",
          args: { name: "aml-filesystem-name" },
        },
        {
          name: "--encryption-setting",
          description:
            'Specifies the location of the encryption key in Key Vault. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
          args: { name: "encryption-setting" },
        },
        {
          name: "--force-string",
          description:
            "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
          args: {
            name: "force-string",
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
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: "--maintenance-window",
          description:
            'Start time of a 30-minute weekly maintenance window. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
          args: { name: "maintenance-window" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
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
          name: "--remove",
          description:
            "Remove a property or an element from a list. Example: --remove property.list OR --remove propertyToRemove",
          args: { name: "remove" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: "--set",
          description:
            "Update an object by specifying a property path and value to set. Example: --set property1.property2=",
          args: { name: "set" },
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
            'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
          args: { name: "tags" },
        },
      ],
    },
    {
      name: "wait",
      description: "Place the CLI in a waiting state until a condition is met",
      options: [
        {
          name: ["--aml-filesystem-name", "--name", "-n"],
          description:
            "Name for the AML file system. Allows alphanumerics, underscores, and hyphens. Start and end with alphanumeric",
          args: { name: "aml-filesystem-name" },
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
};

export default completion;
