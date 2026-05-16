const completion: Fig.Spec = {
  name: "signalr",
  description: "Manage Azure SignalR Service",
  subcommands: [
    {
      name: "cors",
      description: "Manage CORS for Azure SignalR Service",
      subcommands: [
        {
          name: "add",
          description: "Add allowed origins to a SignalR Service",
          options: [
            {
              name: ["--allowed-origins", "-a"],
              description:
                'Space separated origins that should be allowed to make cross-origin calls (for example: http://example.com:12345). To allow all, use "*"',
              args: { name: "allowed-origins" },
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
              description: "Name of signalr service",
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
          description: "List allowed origins of a SignalR Service",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of signalr service",
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
          name: "remove",
          description: "Remove allowed origins from a SignalR Service",
          options: [
            {
              name: ["--allowed-origins", "-a"],
              description:
                'Space separated origins that should be allowed to make cross-origin calls (for example: http://example.com:12345). To allow all, use "*"',
              args: { name: "allowed-origins" },
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
              description: "Name of signalr service",
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
          description: "Update allowed origins to a SignalR Service",
          options: [
            {
              name: ["--allowed-origins", "-a"],
              description:
                'Space separated origins that should be allowed to make cross-origin calls (for example: http://example.com:12345). To allow all, use "*"',
              args: { name: "allowed-origins" },
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
              description: "Name of signalr service",
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
      name: "create",
      description: "Creates a SignalR Service",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of signalr service",
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
          name: "--sku",
          description:
            "The sku name of the signalr service. Allowed values: Premium_P1, Standard_S1, Free_F1",
          args: { name: "sku" },
          isRequired: true,
        },
        {
          name: ["--allowed-origins", "-a"],
          description:
            'Space separated origins that should be allowed to make cross-origin calls (for example: http://example.com:12345). To allow all, use "*"',
          args: { name: "allowed-origins" },
        },
        {
          name: "--default-action",
          description: "Default action to apply when no rule matches",
          args: { name: "default-action", suggestions: ["Allow", "Deny"] },
        },
        {
          name: "--enable-message-logs",
          description:
            "The switch for messaging logs which signalr service will generate or not",
        },
        {
          name: ["--location", "-l"],
          description:
            "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
          args: { name: "location" },
        },
        {
          name: "--service-mode",
          description:
            "The service mode which signalr service will be working on",
          args: {
            name: "service-mode",
            suggestions: ["Classic", "Default", "Serverless"],
          },
        },
        {
          name: "--tags",
          description:
            'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
          args: { name: "tags" },
        },
        {
          name: "--unit-count",
          description: "The number of signalr service unit count",
          args: { name: "unit-count" },
        },
      ],
    },
    {
      name: "delete",
      description: "Deletes a SignalR Service",
      options: [
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: ["--name", "-n"],
          description: "Name of signalr service",
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
      description:
        "Lists all the SignalR Service under the current subscription",
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
      description: "Restart an existing SignalR Service",
      options: [
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: ["--name", "-n"],
          description: "Name of signalr service",
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
      description: "Get the details of a SignalR Service",
      options: [
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: ["--name", "-n"],
          description: "Name of signalr service",
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
      description: "Update an existing SignalR Service",
      options: [
        {
          name: "--add",
          description:
            "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
          args: { name: "add" },
        },
        {
          name: ["--allowed-origins", "-a"],
          description:
            'Space separated origins that should be allowed to make cross-origin calls (for example: http://example.com:12345). To allow all, use "*"',
          args: { name: "allowed-origins" },
        },
        {
          name: "--default-action",
          description: "Default action to apply when no rule matches",
          args: { name: "default-action", suggestions: ["Allow", "Deny"] },
        },
        {
          name: "--enable-message-logs",
          description:
            "The switch for messaging logs which signalr service will generate or not",
          args: { name: "enable-message-logs", suggestions: ["false", "true"] },
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
          name: ["--name", "-n"],
          description: "Name of signalr service",
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
          name: "--service-mode",
          description:
            "The service mode which signalr service will be working on",
          args: {
            name: "service-mode",
            suggestions: ["Classic", "Default", "Serverless"],
          },
        },
        {
          name: "--set",
          description:
            "Update an object by specifying a property path and value to set. Example: --set property1.property2=",
          args: { name: "set" },
        },
        {
          name: "--sku",
          description: "The sku name of the signalr service. E.g. Standard_S1",
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
        {
          name: "--unit-count",
          description: "The number of signalr service unit count",
          args: { name: "unit-count" },
        },
      ],
    },
    {
      name: "custom-certificate",
      description: "Manage custom certificate settings",
      subcommands: [
        {
          name: "create",
          description: "Create a custom certificate of SignalR Service",
          options: [
            {
              name: "--keyvault-base-uri",
              description:
                "Key vault base URI. For example, https://contoso.vault.azure.net",
              args: { name: "keyvault-base-uri" },
              isRequired: true,
            },
            {
              name: "--keyvault-secret-name",
              description: "Key vault secret name where certificate is stored",
              args: { name: "keyvault-secret-name" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Name of the custom certificate",
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
              name: "--signalr-name",
              description: "Name of the SignalR",
              args: { name: "signalr-name" },
              isRequired: true,
            },
            {
              name: "--keyvault-secret-version",
              description:
                "Key vault secret version where certificate is stored. If empty, will use latest version",
              args: { name: "keyvault-secret-version" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a custom certificate of SignalR Service",
          options: [
            {
              name: "--name",
              description: "Name of the custom certificate",
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
              name: "--signalr-name",
              description: "Name of the SignalR",
              args: { name: "signalr-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list",
          description: "List custom certificate of SignalR Service",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--signalr-name",
              description: "Name of the SignalR",
              args: { name: "signalr-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description:
            "Show the detail of a custom certificate of SignalR Service",
          options: [
            {
              name: "--name",
              description: "Name of the custom certificate",
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
              name: "--signalr-name",
              description: "Name of the SignalR",
              args: { name: "signalr-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update",
          description: "Update a custom certificate of SignalR Service",
          options: [
            {
              name: "--name",
              description: "Name of the custom certificate",
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
              name: "--signalr-name",
              description: "Name of the SignalR",
              args: { name: "signalr-name" },
              isRequired: true,
            },
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: "--force-string",
              description:
                "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
            },
            {
              name: "--keyvault-base-uri",
              description:
                "Key vault base URI. For example, https://contoso.vault.azure.net",
              args: { name: "keyvault-base-uri" },
            },
            {
              name: "--keyvault-secret-name",
              description: "Key vault secret name where certificate is stored",
              args: { name: "keyvault-secret-name" },
            },
            {
              name: "--keyvault-secret-version",
              description:
                "Key vault secret version where certificate is stored. If empty, will use latest version",
              args: { name: "keyvault-secret-version" },
            },
            {
              name: "--remove",
              description:
                "Remove a property or an element from a list. Example: --remove property.list OR --remove propertyToRemove",
              args: { name: "remove" },
            },
            {
              name: "--set",
              description:
                "Update an object by specifying a property path and value to set. Example: --set property1.property2=",
              args: { name: "set" },
            },
          ],
        },
      ],
    },
    {
      name: "custom-domain",
      description: "Manage custom domain settings",
      subcommands: [
        {
          name: "create",
          description: "Create a custom domain of SignalR Service",
          options: [
            {
              name: "--certificate-resource-id",
              description:
                "ResourceId of a previously created custom certificate",
              args: { name: "certificate-resource-id" },
              isRequired: true,
            },
            {
              name: "--domain-name",
              description: "Custom domain name. For example, contoso.com",
              args: { name: "domain-name" },
              isRequired: true,
            },
            {
              name: "--name",
              description: "Name of the custom domain",
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
              name: "--signalr-name",
              description: "Name of the SignalR",
              args: { name: "signalr-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a custom domain of SignalR Service",
          options: [
            {
              name: "--name",
              description: "Name of the custom domain",
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
              name: "--signalr-name",
              description: "Name of the SignalR",
              args: { name: "signalr-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list",
          description: "List custom domains of SignalR Service",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--signalr-name",
              description: "Name of the SignalR",
              args: { name: "signalr-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description: "Show the detail of a custom domain of SignalR Service",
          options: [
            {
              name: "--name",
              description: "Name of the custom domain",
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
              name: "--signalr-name",
              description: "Name of the SignalR",
              args: { name: "signalr-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update",
          description: "Update a custom domain of SignalR Service",
          options: [
            {
              name: "--name",
              description: "Name of the custom domain",
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
              name: "--signalr-name",
              description: "Name of the SignalR",
              args: { name: "signalr-name" },
              isRequired: true,
            },
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: "--certificate-resource-id",
              description:
                "ResourceId of a previously created custom certificate",
              args: { name: "certificate-resource-id" },
            },
            {
              name: "--domain-name",
              description: "Custom domain name. For example, contoso.com",
              args: { name: "domain-name" },
            },
            {
              name: "--force-string",
              description:
                "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
            },
            {
              name: "--remove",
              description:
                "Remove a property or an element from a list. Example: --remove property.list OR --remove propertyToRemove",
              args: { name: "remove" },
            },
            {
              name: "--set",
              description:
                "Update an object by specifying a property path and value to set. Example: --set property1.property2=",
              args: { name: "set" },
            },
          ],
        },
      ],
    },
    {
      name: "identity",
      description: "Manage managed identity settings",
      subcommands: [
        {
          name: "assign",
          description: "Assign managed identity for SignalR Service",
          options: [
            {
              name: "--identity",
              description:
                "Assigns managed identities to the service. Use '[system]' to refer to the system-assigned identity or a resource ID to refer to a user-assigned identity. You can only assign either on of them",
              args: { name: "identity" },
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
              description: "Name of signalr service",
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
          name: "remove",
          description: "Remove managed identity for SignalR Service",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of signalr service",
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
          description: "Show managed identity for SignalR Service",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of signalr service",
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
      name: "key",
      description: "Manage keys for Azure SignalR Service",
      subcommands: [
        {
          name: "list",
          description: "List the access keys for a SignalR Service",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of signalr service",
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
          name: "renew",
          description: "Regenerate the access key for a SignalR Service",
          options: [
            {
              name: "--key-type",
              description: "The name of access key to regenerate",
              args: { name: "key-type", suggestions: ["primary", "secondary"] },
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
              description: "Name of signalr service",
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
      name: "network-rule",
      description: "Manage network rules",
      subcommands: [
        {
          name: "list",
          description: "Get the Network access control of SignalR Service",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of signalr service",
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
          description: "Update the Network access control of SignalR Service",
          options: [
            {
              name: "--allow",
              description:
                "The allowed virtual network rule. Space-separeted list of scope to assign. Allowed values: ClientConnection, ServerConnection, RESTAPI",
              args: { name: "allow" },
            },
            {
              name: "--connection-name",
              description:
                "Space-separeted list of private endpoint connection name",
              args: { name: "connection-name" },
            },
            {
              name: "--deny",
              description:
                "The denied virtual network rule. Space-separeted list of scope to assign. Allowed values: ClientConnection, ServerConnection, RESTAPI",
              args: { name: "deny" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of signalr service",
              args: { name: "name" },
            },
            {
              name: "--public-network",
              description: "Set rules for public network",
              args: { name: "public-network", suggestions: ["false", "true"] },
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
      name: "upstream",
      description: "Manage upstream settings",
      subcommands: [
        {
          name: "clear",
          description: "Clear upstream settings of an existing SignalR Service",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of signalr service",
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
          description: "List upstream settings of an existing SignalR Service",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of signalr service",
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
            "Update order sensitive upstream settings for an existing SignalR Service",
          options: [
            {
              name: "--template",
              description:
                'Template item for upstream settings. Use key=value pattern to set properties. Supported keys are "url-template", "hub-pattern", "event-pattern", "category-pattern"',
              args: { name: "template" },
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
              description: "Name of signalr service",
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
