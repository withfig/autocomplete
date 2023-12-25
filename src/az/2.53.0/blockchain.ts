const completion: Fig.Spec = {
  name: "blockchain",
  description: "Manage blockchain",
  subcommands: [
    {
      name: "consortium",
      description: "Blockchain consortium",
      subcommands: [
        {
          name: "list",
          description: "List the available consortiums for a subscription",
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
      ],
    },
    {
      name: "member",
      description: "Blockchain member",
      subcommands: [
        {
          name: "create",
          description: "Create a blockchain member",
          options: [
            {
              name: ["--name", "-n"],
              description: "Blockchain member name",
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
              name: "--consortium",
              description:
                "Gets or sets the consortium for the blockchain member",
              args: { name: "consortium" },
            },
            {
              name: "--consortium-management-account-password",
              description:
                "Sets the managed consortium management account password",
              args: { name: "consortium-management-account-password" },
            },
            {
              name: "--firewall-rules",
              description: "Firewall rules of the blockchian member",
              args: { name: "firewall-rules" },
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
              name: "--password",
              description:
                "Sets the basic auth password of the blockchain member",
              args: { name: "password" },
            },
            {
              name: "--protocol",
              description: "Gets or sets the blockchain protocol",
              args: {
                name: "protocol",
                suggestions: ["Corda", "NotSpecified", "Parity", "Quorum"],
              },
            },
            {
              name: "--sku",
              description: "The Sku of the blockchain member",
              args: { name: "sku", suggestions: ["Basic", "Standard"] },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
            {
              name: "--validator-nodes-sku",
              description:
                "Gets or sets the blockchain validator nodes Sku. Expect value: capacity=xx",
              args: { name: "validator-nodes-sku" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a blockchain member",
          options: [
            {
              name: ["--name", "-n"],
              description: "Blockchain member name",
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
          description: "List the blockchain members",
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
          name: "list-api-key",
          description: "List the API keys for a blockchain member",
          options: [
            {
              name: ["--name", "-n"],
              description: "Blockchain member name",
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
          name: "list-consortium-member",
          description: "List the consortium members for a blockchain member",
          options: [
            {
              name: ["--name", "-n"],
              description: "Blockchain member name",
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
          name: "regenerate-api-key",
          description: "Regenerate the API keys for a blockchain member",
          options: [
            {
              name: ["--name", "-n"],
              description: "Blockchain member name",
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
              name: "--key-name",
              description: "Gets or sets the API key name",
              args: { name: "key-name", suggestions: ["key1", "key2"] },
            },
          ],
        },
        {
          name: "show",
          description: "Show the details about a blockchain member",
          options: [
            {
              name: ["--name", "-n"],
              description: "Blockchain member name",
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
          name: "update",
          description: "Update a blockchain member",
          options: [
            {
              name: ["--name", "-n"],
              description: "Blockchain member name",
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
              name: "--consortium-management-account-password",
              description:
                "Sets the managed consortium management account password",
              args: { name: "consortium-management-account-password" },
            },
            {
              name: "--firewall-rules",
              description: "Firewall rules of the blockchian member",
              args: { name: "firewall-rules" },
            },
            {
              name: "--password",
              description:
                "Sets the transaction node dns endpoint basic auth password",
              args: { name: "password" },
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
          description: "Wait until a blockchain member is created or deleted",
          options: [
            {
              name: ["--name", "-n"],
              description: "Blockchain member name",
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
      name: "transaction-node",
      description: "Blockchain transaction-node",
      subcommands: [
        {
          name: "create",
          description: "Create a transaction node",
          options: [
            {
              name: "--member-name",
              description: "Blockchain member name",
              args: { name: "member-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Transaction node name",
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
              name: "--firewall-rules",
              description: "Firewall rules of the blockchian transaction node",
              args: { name: "firewall-rules" },
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
              name: "--password",
              description:
                "Sets the transaction node dns endpoint basic auth password",
              args: { name: "password" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete the transaction node",
          options: [
            {
              name: "--member-name",
              description: "Blockchain member name",
              args: { name: "member-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Transaction node name",
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
          description: "List the transaction nodes for a blockchain member",
          options: [
            {
              name: "--member-name",
              description: "Blockchain member name",
              args: { name: "member-name" },
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
          name: "list-api-key",
          description: "List the API keys for the transaction node",
          options: [
            {
              name: "--member-name",
              description: "Blockchain member name",
              args: { name: "member-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Transaction node name",
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
          name: "regenerate-api-key",
          description: "Regenerate the API keys for the blockchain member",
          options: [
            {
              name: "--member-name",
              description: "Blockchain member name",
              args: { name: "member-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Transaction node name",
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
              name: "--key-name",
              description: "Gets or sets the API key name",
              args: { name: "key-name", suggestions: ["key1", "key2"] },
            },
            {
              name: "--value",
              description: "Gets or sets the API key value",
              args: { name: "value" },
            },
          ],
        },
        {
          name: "show",
          description: "Show the details of the transaction node",
          options: [
            {
              name: "--member-name",
              description: "Blockchain member name",
              args: { name: "member-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Transaction node name",
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
          name: "update",
          description: "Update the transaction node",
          options: [
            {
              name: "--member-name",
              description: "Blockchain member name",
              args: { name: "member-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Transaction node name",
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
              name: "--firewall-rules",
              description: "Firewall rules of the blockchian transaction node",
              args: { name: "firewall-rules" },
            },
            {
              name: "--password",
              description:
                "Sets the transaction node dns endpoint basic auth password",
              args: { name: "password" },
            },
          ],
        },
        {
          name: "wait",
          description: "Wait until the transaction node is created or deleted",
          options: [
            {
              name: "--member-name",
              description: "Blockchain member name",
              args: { name: "member-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Transaction node name",
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
  ],
};

export default completion;
