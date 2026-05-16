const completion: Fig.Spec = {
  name: "purview",
  description: "Manage Purview",
  subcommands: [
    {
      name: "account",
      description: "Manage account with purview",
      subcommands: [
        {
          name: "add-root-collection-admin",
          description:
            "Add the administrator for root collection associated with this account",
          options: [
            {
              name: ["--account-name", "--name", "-n"],
              description: "The name of the account",
              args: { name: "account-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--object-id",
              description: "Gets or sets the object identifier of the admin",
              args: { name: "object-id" },
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
          name: "create",
          description: "Create an account",
          options: [
            {
              name: ["--account-name", "--name", "-n"],
              description: "The name of the account",
              args: { name: "account-name" },
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
              name: "--managed-group-name",
              description: "Gets or sets the managed resource group name",
              args: { name: "managed-group-name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--public-network-access",
              description: "Gets or sets the public network access",
              args: {
                name: "public-network-access",
                suggestions: ["Disabled", "Enabled", "NotSpecified"],
              },
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
          description: "Deletes an account resource",
          options: [
            {
              name: ["--account-name", "--name", "-n"],
              description: "The name of the account",
              args: { name: "account-name" },
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
            "List accounts in ResourceGroup And List accounts in Subscription",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--skip-token",
              description: "The skip token",
              args: { name: "skip-token" },
            },
          ],
        },
        {
          name: "list-key",
          description:
            "List the authorization keys associated with this account",
          options: [
            {
              name: ["--account-name", "--name", "-n"],
              description: "The name of the account",
              args: { name: "account-name" },
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
          description: "Get an account",
          options: [
            {
              name: ["--account-name", "--name", "-n"],
              description: "The name of the account",
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
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
          ],
        },
        {
          name: "update",
          description: "Updates an account",
          options: [
            {
              name: ["--account-name", "--name", "-n"],
              description: "The name of the account",
              args: { name: "account-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--managed-group-name",
              description: "Gets or sets the managed resource group name",
              args: { name: "managed-group-name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--public-network-access",
              description: "Gets or sets the public network access",
              args: {
                name: "public-network-access",
                suggestions: ["Disabled", "Enabled", "NotSpecified"],
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
            "Place the CLI in a waiting state until a condition of the purview account is met",
          options: [
            {
              name: ["--account-name", "--name", "-n"],
              description: "The name of the account",
              args: { name: "account-name" },
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
    },
    {
      name: "default-account",
      description: "Manage default account with purview",
      subcommands: [
        {
          name: "remove",
          description: "Removes the default account from the scope",
          options: [
            {
              name: "--scope-tenant-id",
              description: "The tenant ID",
              args: { name: "scope-tenant-id" },
              isRequired: true,
            },
            {
              name: "--scope-type",
              description: "The scope for the default account",
              args: {
                name: "scope-type",
                suggestions: ["Subscription", "Tenant"],
              },
              isRequired: true,
            },
            {
              name: "--scope",
              description:
                'The Id of the scope object, for example if the scope is "Subscription" then it is the ID of that subscription',
              args: { name: "scope" },
            },
          ],
        },
        {
          name: "set",
          description: "Sets the default account for the scope",
          options: [
            {
              name: "--scope-tenant-id",
              description:
                "The scope tenant in which the default account is set",
              args: { name: "scope-tenant-id" },
              isRequired: true,
            },
            {
              name: "--subscription-id",
              description:
                "The subscription ID of the account that is set as the default",
              args: { name: "subscription-id" },
              isRequired: true,
            },
            {
              name: ["--account-name", "--name", "-n"],
              description: "The name of the account that is set as the default",
              args: { name: "account-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--scope",
              description:
                "The scope object ID. For example, sub ID or tenant ID",
              args: { name: "scope" },
            },
            {
              name: "--scope-type",
              description: "The scope where the default account is set",
              args: {
                name: "scope-type",
                suggestions: ["Subscription", "Tenant"],
              },
            },
          ],
        },
        {
          name: "show",
          description: "Get the default account for the scope",
          options: [
            {
              name: "--scope-tenant-id",
              description: "The tenant ID",
              args: { name: "scope-tenant-id" },
              isRequired: true,
            },
            {
              name: "--scope-type",
              description: "The scope for the default account",
              args: {
                name: "scope-type",
                suggestions: ["Subscription", "Tenant"],
              },
              isRequired: true,
            },
            {
              name: "--scope",
              description:
                'The Id of the scope object, for example if the scope is "Subscription" then it is the ID of that subscription',
              args: { name: "scope" },
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
