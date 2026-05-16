const completion: Fig.Spec = {
  name: "disk-encryption-set",
  description: "Disk Encryption Set resource",
  subcommands: [
    {
      name: "create",
      description: "Create a disk encryption set",
      options: [
        {
          name: "--key-url",
          description: "URL pointing to a key or secret in KeyVault",
          args: { name: "key-url" },
          isRequired: true,
        },
        {
          name: ["--name", "-n"],
          description: "Name of disk encryption set",
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
          name: ["--enable-auto-key-rotation", "--auto-rotation"],
          description: "Enable automatic rotation of keys",
          args: {
            name: "enable-auto-key-rotation",
            suggestions: ["false", "true"],
          },
        },
        {
          name: "--encryption-type",
          description:
            "The type of key used to encrypt the data of the disk. EncryptionAtRestWithPlatformKey: Disk is encrypted at rest with Platform managed key. It is the default encryption type. EncryptionAtRestWithCustomerKey: Disk is encrypted at rest with Customer managed key that can be changed and revoked by a customer. EncryptionAtRestWithPlatformAndCustomerKeys: Disk is encrypted at rest with 2 layers of encryption. One of the keys is Customer managed and the other key is Platform managed. ConfidentialVmEncryptedWithCustomerKey: An additional encryption type accepted for confidential VM. Disk is encrypted at rest with Customer managed key",
          args: {
            name: "encryption-type",
            suggestions: [
              "ConfidentialVmEncryptedWithCustomerKey",
              "EncryptionAtRestWithCustomerKey",
              "EncryptionAtRestWithPlatformAndCustomerKeys",
              "EncryptionAtRestWithPlatformKey",
            ],
          },
        },
        {
          name: "--federated-client-id",
          description: "The federated client id used in cross tenant scenario",
          args: { name: "federated-client-id" },
        },
        {
          name: ["--location", "-l"],
          description:
            "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
          args: { name: "location" },
        },
        {
          name: "--mi-system-assigned",
          description:
            "Provide this flag to use system assigned identity. Check out help for more examples",
          args: { name: "mi-system-assigned", suggestions: ["false", "true"] },
        },
        {
          name: "--mi-user-assigned",
          description:
            "User Assigned Identity ids to be used for disk encryption set. Check out help for more examples",
          args: { name: "mi-user-assigned" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
        {
          name: "--source-vault",
          description:
            "Name or ID of the KeyVault containing the key or secret",
          args: { name: "source-vault" },
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
      description: "Delete a disk encryption set",
      options: [
        {
          name: ["--disk-encryption-set-name", "--name", "-n"],
          description: "Name of disk encryption set",
          args: { name: "disk-encryption-set-name" },
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
      ],
    },
    {
      name: "list",
      description: "List disk encryption sets",
      options: [
        {
          name: "--max-items",
          description:
            "Total number of items to return in the command's output. If the total number of items available is more than the value specified, a token is provided in the command's output. To resume pagination, provide the token value in --next-token argument of a subsequent command",
          args: { name: "max-items" },
        },
        {
          name: "--next-token",
          description:
            "Token to specify where to start paginating. This is the token value from a previously truncated response",
          args: { name: "next-token" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
      ],
    },
    {
      name: "list-associated-resources",
      description:
        "List all resources that are encrypted with this disk encryption set",
      options: [
        {
          name: ["--disk-encryption-set-name", "--name", "-n"],
          description: "Name of disk encryption set",
          args: { name: "disk-encryption-set-name" },
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
          name: "--max-items",
          description:
            "Total number of items to return in the command's output. If the total number of items available is more than the value specified, a token is provided in the command's output. To resume pagination, provide the token value in --next-token argument of a subsequent command",
          args: { name: "max-items" },
        },
        {
          name: "--next-token",
          description:
            "Token to specify where to start paginating. This is the token value from a previously truncated response",
          args: { name: "next-token" },
        },
      ],
    },
    {
      name: "show",
      description: "Get information about a disk encryption set",
      options: [
        {
          name: ["--disk-encryption-set-name", "--name", "-n"],
          description: "Name of disk encryption set",
          args: { name: "disk-encryption-set-name" },
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
      description: "Update a disk encryption set",
      options: [
        {
          name: "--add",
          description:
            "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
          args: { name: "add" },
        },
        {
          name: ["--enable-auto-key-rotation", "--auto-rotation"],
          description: "Enable automatic rotation of keys",
          args: {
            name: "enable-auto-key-rotation",
            suggestions: ["false", "true"],
          },
        },
        {
          name: "--federated-client-id",
          description: "The federated client id used in cross tenant scenario",
          args: { name: "federated-client-id" },
        },
        {
          name: "--force-string",
          description:
            "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
        },
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: "--key-url",
          description: "URL pointing to a key or secret in KeyVault",
          args: { name: "key-url" },
        },
        {
          name: ["--name", "-n"],
          description: "Name of disk encryption set",
          args: { name: "name" },
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
          name: "--source-vault",
          description:
            "Name or ID of the KeyVault containing the key or secret",
          args: { name: "source-vault" },
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
      description: "Place the CLI in a waiting state until a condition is met",
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
          name: ["--disk-encryption-set-name", "--name", "-n"],
          description: "Name of disk encryption set",
          args: { name: "disk-encryption-set-name" },
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
      name: "identity",
      description: "Manage identities of a disk encryption set",
      subcommands: [
        {
          name: "assign",
          description:
            "Add managed identities to an existing disk encryption set",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of disk encryption set",
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
              name: "--system-assigned",
              description:
                "Provide this flag to use system assigned identity for disk encryption set. Check out help for more examples",
              args: { name: "system-assigned", suggestions: ["false", "true"] },
            },
            {
              name: "--user-assigned",
              description:
                "User Assigned Identity ids to be used for disk encryption set. Check out help for more examples",
              args: { name: "user-assigned" },
            },
          ],
        },
        {
          name: "remove",
          description:
            "Remove managed identities from an existing disk encryption set",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of disk encryption set",
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
              name: "--system-assigned",
              description:
                "Provide this flag to use system assigned identity for disk encryption set. Check out help for more examples",
              args: { name: "system-assigned", suggestions: ["false", "true"] },
            },
            {
              name: "--user-assigned",
              description:
                "User Assigned Identity ids to be used for disk encryption set. Check out help for more examples",
              args: { name: "user-assigned" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "show",
          description: "Display managed identities of a disk encryption set",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of disk encryption set",
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
