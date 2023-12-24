const completion: Fig.Spec = {
  name: "identity",
  description: "Managed Identities",
  subcommands: [
    {
      name: "create",
      description: "Create Identities",
      options: [
        {
          name: ["--name", "-n"],
          description: "The name of the identity resource",
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
          name: "--tags",
          description:
            'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
          args: { name: "tags" },
        },
      ],
    },
    {
      name: "delete",
      description: "Deletes the identity",
      options: [
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: ["--name", "-n"],
          description: "The name of the identity resource",
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
      name: "list",
      description: "List Managed Identities",
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
      name: "list-operations",
      description:
        "List available operations for the Managed Identity provider",
    },
    {
      name: "list-resources",
      description: "List the associated resources for the identity",
      options: [
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: ["--name", "-n"],
          description: "The name of the identity resource",
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
      name: "show",
      description: "Gets the identity",
      options: [
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: ["--name", "-n"],
          description: "The name of the identity resource",
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
      name: "federated-credential",
      description:
        "Manage federated identity credentials under user assigned identities",
      subcommands: [
        {
          name: "create",
          description:
            "Create a federated identity credential under an existing user assigned identity",
          options: [
            {
              name: "--identity-name",
              description: "The name of the identity resource",
              args: { name: "identity-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description:
                "The name of the federated identity credential resource",
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
              name: "--audiences",
              description:
                "The aud value in the token sent to Azure for getting the user-assigned managed identity token. The value configured in the federated credential and the one in the incoming token must exactly match for Azure to issue the access token",
              args: { name: "audiences" },
            },
            {
              name: "--issuer",
              description:
                "The openId connect metadata URL of the issuer of the identity provider that Azure AD would use in the token exchange protocol for validating tokens before issuing a token as the user-assigned managed identity",
              args: { name: "issuer" },
            },
            {
              name: "--subject",
              description:
                "The sub value in the token sent to Azure AD for getting the user-assigned managed identity token. The value configured in the federated credential and the one in the incoming token must exactly match for Azure AD to issue the access token",
              args: { name: "subject" },
            },
          ],
        },
        {
          name: "delete",
          description:
            "Delete a federated identity credential under an existing user assigned identity",
          options: [
            {
              name: "--identity-name",
              description: "The name of the identity resource",
              args: { name: "identity-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description:
                "The name of the federated identity credential resource",
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
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description:
            "List all federated identity credentials under an existing user assigned identity",
          options: [
            {
              name: "--identity-name",
              description: "The name of the identity resource",
              args: { name: "identity-name" },
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
          description:
            "Show a federated identity credential under an existing user assigned identity",
          options: [
            {
              name: "--identity-name",
              description: "The name of the identity resource",
              args: { name: "identity-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description:
                "The name of the federated identity credential resource",
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
          description:
            "Update a federated identity credential under an existing user assigned identity",
          options: [
            {
              name: "--identity-name",
              description: "The name of the identity resource",
              args: { name: "identity-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description:
                "The name of the federated identity credential resource",
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
              name: "--audiences",
              description:
                "The aud value in the token sent to Azure for getting the user-assigned managed identity token. The value configured in the federated credential and the one in the incoming token must exactly match for Azure to issue the access token",
              args: { name: "audiences" },
            },
            {
              name: "--issuer",
              description:
                "The openId connect metadata URL of the issuer of the identity provider that Azure AD would use in the token exchange protocol for validating tokens before issuing a token as the user-assigned managed identity",
              args: { name: "issuer" },
            },
            {
              name: "--subject",
              description:
                "The sub value in the token sent to Azure AD for getting the user-assigned managed identity token. The value configured in the federated credential and the one in the incoming token must exactly match for Azure AD to issue the access token",
              args: { name: "subject" },
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
