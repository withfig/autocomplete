const completion: Fig.Spec = {
  name: "fluid-relay",
  description: "Manage Fluid Relay",
  subcommands: [
    {
      name: "container",
      description: "Manage Fluid Relay Container",
      subcommands: [
        {
          name: "delete",
          description: "Delete a Fluid Relay container",
          options: [
            {
              name: ["--container-name", "--name", "-n"],
              description: "The Fluid Relay container resource name",
              args: { name: "container-name" },
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
              name: "--server-name",
              description: "The Fluid Relay server resource name",
              args: { name: "server-name" },
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
            "List all Fluid Relay containers which are children of a given Fluid Relay server",
          options: [
            {
              name: ["--resource-group", "-g"],
              description: "The resource group containing the resource",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--server-name",
              description: "The Fluid Relay server resource name",
              args: { name: "server-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description: "Get a Fluid Relay container",
          options: [
            {
              name: ["--container-name", "--name", "-n"],
              description: "The Fluid Relay container resource name",
              args: { name: "container-name" },
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
              name: "--server-name",
              description: "The Fluid Relay server resource name",
              args: { name: "server-name" },
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
      name: "server",
      description: "Manage Fluid Relay Server",
      subcommands: [
        {
          name: "create",
          description: "Create a Fluid Relay server",
          options: [
            {
              name: ["--server-name", "--name", "-n"],
              description: "The Fluid Relay server resource name",
              args: { name: "server-name" },
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
              name: "--identity",
              description:
                'The type of identity used for the resource. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "identity" },
            },
            {
              name: "--key-identity",
              description:
                'All identity configuration for Customer-managed key settings defining which identity should be used to auth to Key Vault. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "key-identity" },
            },
            {
              name: "--key-url",
              description:
                "Key encryption key Url, with or without a version. Ex: https://contosovault.vault.azure.net/keys/contosokek/562a4bb76b524a1493a6afe8e536ee78 or https://contosovault.vault.azure.net/keys/contosokek. Key auto rotation is enabled by providing a key uri without version. Otherwise, customer is responsible for rotating the key. The keyEncryptionKeyIdentity(either SystemAssigned or UserAssigned) should have permission to access this key url",
              args: { name: "key-url" },
            },
            {
              name: ["--location", "-l"],
              description:
                "The geo-location where the resource lives When not specified, the location of the resource group will be used",
              args: { name: "location" },
            },
            {
              name: "--provisioning-state",
              description: "Provision states for FluidRelay RP",
              args: {
                name: "provisioning-state",
                suggestions: ["Canceled", "Failed", "Succeeded"],
              },
            },
            {
              name: "--sku",
              description: "Sku of the storage associated with the resource",
              args: { name: "sku", suggestions: ["basic", "standard"] },
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
          description: "Delete a Fluid Relay server",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--server-name", "--name", "-n"],
              description: "The Fluid Relay server resource name",
              args: { name: "server-name" },
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
          description: "List all Fluid Relay servers",
          options: [
            {
              name: ["--resource-group", "-g"],
              description: "The resource group containing the resource",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "list-key",
          description: "Get primary and secondary key for this server",
          options: [
            {
              name: ["--resource-group", "-g"],
              description: "The resource group containing the resource",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--server-name", "-n"],
              description: "The Fluid Relay server resource name",
              args: { name: "server-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "regenerate-key",
          description:
            "Regenerate the primary or secondary key for this server",
          options: [
            {
              name: "--key-name",
              description: "The key to regenerate",
              args: { name: "key-name", suggestions: ["key1", "key2"] },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description: "The resource group containing the resource",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--server-name", "-n"],
              description: "The Fluid Relay server resource name",
              args: { name: "server-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description: "Get a Fluid Relay server",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--server-name", "--name", "-n"],
              description: "The Fluid Relay server resource name",
              args: { name: "server-name" },
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
          description: "Update a Fluid Relay server",
          options: [
            {
              name: "--identity",
              description:
                'The type of identity used for the resource. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "identity" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--key-identity",
              description:
                'All identity configuration for Customer-managed key settings defining which identity should be used to auth to Key Vault. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "key-identity" },
            },
            {
              name: "--key-url",
              description:
                "Key encryption key Url, with or without a version. Ex: https://contosovault.vault.azure.net/keys/contosokek/562a4bb76b524a1493a6afe8e536ee78 or https://contosovault.vault.azure.net/keys/contosokek. Key auto rotation is enabled by providing a key uri without version. Otherwise, customer is responsible for rotating the key. The keyEncryptionKeyIdentity(either SystemAssigned or UserAssigned) should have permission to access this key url",
              args: { name: "key-url" },
            },
            {
              name: "--location",
              description: "The geo-location where the resource lives",
              args: { name: "location" },
            },
            {
              name: ["--server-name", "--name", "-n"],
              description: "The Fluid Relay server resource name",
              args: { name: "server-name" },
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
                'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tags" },
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
