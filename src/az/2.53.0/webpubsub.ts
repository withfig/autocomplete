const completion: Fig.Spec = {
  name: "webpubsub",
  description: "Commands to manage Webpubsub",
  subcommands: [
    {
      name: "client",
      description: "Commands to manage client connections",
      subcommands: [
        {
          name: "start",
          description: "Start a interactive client connection",
          options: [
            {
              name: "--hub-name",
              description: "The hub which client connects to",
              args: { name: "hub-name" },
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
              description: "Name of the Webpubsub",
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
              name: "--user-id",
              description: "The user id",
              args: { name: "user-id" },
            },
          ],
        },
      ],
    },
    {
      name: "create",
      description: "Create a Webpubsub",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the Webpubsub",
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
            "The sku name of the webpubsub service. Allowed values: Free_F1, Standard_S1, Premium_P1",
          args: { name: "sku" },
          isRequired: true,
        },
        {
          name: "--kind",
          description:
            "The kind of the webpubsub service. Allowed values: WebPubSub, SocketIO",
          args: { name: "kind" },
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
        {
          name: "--unit-count",
          description: "The number of webpubsub service unit count",
          args: { name: "unit-count" },
        },
      ],
    },
    {
      name: "delete",
      description: "Delete a Webpubsub",
      options: [
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: ["--name", "-n"],
          description: "Name of the Webpubsub",
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
      description: "List Webpubsub",
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
      name: "list-skus",
      description: "List all available skus of the resource",
      options: [
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: ["--name", "-n"],
          description: "Name of the Webpubsub",
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
      name: "list-usage",
      description: "List resource usage quotas by location",
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
      name: "restart",
      description: "Restart a Webpubsub",
      options: [
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: ["--name", "-n"],
          description: "Name of the Webpubsub",
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
      description: "Show details of a Webpubsub",
      options: [
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: ["--name", "-n"],
          description: "Name of the Webpubsub",
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
      description: "Update a Webpubsub",
      options: [
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
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: ["--name", "-n"],
          description: "Name of the Webpubsub",
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
          name: "--sku",
          description:
            "The sku name of the webpubsub service. Allowed values: Free_F1, Standard_S1, Premium_P1",
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
          description: "The number of webpubsub service unit count",
          args: { name: "unit-count" },
        },
      ],
    },
    {
      name: "hub",
      description: "Commands to manage Webpubsub hub settings",
      subcommands: [
        {
          name: "create",
          description: "Create hub settings for WebPubSub Service",
          options: [
            {
              name: "--hub-name",
              description: "The hub to manage",
              args: { name: "hub-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Webpubsub",
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
              name: "--allow-anonymous",
              description:
                "Set if anonymous connections are allowed for this hub. True means allow and False means deny",
            },
            {
              name: "--event-handler",
              description:
                'Template item for event handler settings. Use key=value pattern to set properties. Supported keys are "url-template", "user-event-pattern", "system-event", "auth-type" and "auth-resource". Setting multiple "system-event" results in an array and for other properties, only last set takes active',
              args: { name: "event-handler" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete hub settings for WebPubSub Service",
          options: [
            {
              name: "--hub-name",
              description: "Name of the hub",
              args: { name: "hub-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Webpubsub",
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
          description: "List all hub settings for WebPubSub Service",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the Webpubsub",
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
          description: "Show hub settings for WebPubSub Service",
          options: [
            {
              name: "--hub-name",
              description: "Name of the hub",
              args: { name: "hub-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Webpubsub",
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
          description: "Update hub settings for WebPubSub Service",
          options: [
            {
              name: "--hub-name",
              description: "The hub to manage",
              args: { name: "hub-name" },
              isRequired: true,
            },
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: "--allow-anonymous",
              description:
                "Set if anonymous connections are allowed for this hub. True means allow and False means deny",
              args: { name: "allow-anonymous", suggestions: ["false", "true"] },
            },
            {
              name: "--event-handler",
              description:
                'Template item for event handler settings. Use key=value pattern to set properties. Supported keys are "url-template", "user-event-pattern", "system-event", "auth-type" and "auth-resource". Setting multiple "system-event" results in an array and for other properties, only last set takes active',
              args: { name: "event-handler" },
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
              description: "Name of the Webpubsub",
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
      description: "Commands to manage Webpubsub keys",
      subcommands: [
        {
          name: "regenerate",
          description: "Regenerate keys for a WebPubSub Service",
          options: [
            {
              name: "--key-type",
              description: "The name of access key to regenerate",
              args: {
                name: "key-type",
                suggestions: ["primary", "salt", "secondary"],
              },
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
              description: "Name of the Webpubsub",
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
          description:
            "Show connetion strings and keys for a WebPubSub Service",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Webpubsub",
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
      description: "Commands to manage Webpubsub network rules",
      subcommands: [
        {
          name: "show",
          description: "Get the Network access control of WebPubSub Service",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Webpubsub",
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
          description: "Update the Network access control of WebPubSub Service",
          options: [
            {
              name: "--allow",
              description:
                "The allowed virtual network rule. Space-separeted list of scope to assign",
              args: {
                name: "allow",
                suggestions: [
                  "ClientConnection",
                  "RESTAPI",
                  "ServerConnection",
                  "Trace",
                ],
              },
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
                "The denied virtual network rule. Space-separeted list of scope to assign",
              args: {
                name: "deny",
                suggestions: [
                  "ClientConnection",
                  "RESTAPI",
                  "ServerConnection",
                  "Trace",
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
              name: ["--name", "-n"],
              description: "Name of the Webpubsub",
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
      name: "service",
      description: "Commands to manage Webpubsub service",
      subcommands: [
        {
          name: "broadcast",
          description:
            "Broadcast messages to hub. Error throws if operation fails",
          options: [
            {
              name: "--hub-name",
              description: "The hub to manage",
              args: { name: "hub-name" },
              isRequired: true,
            },
            {
              name: "--payload",
              description: "A string payload to send",
              args: { name: "payload" },
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
              description: "Name of the Webpubsub",
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
          name: "connection",
          description: "Commands to manage Webpubsub service connections",
          subcommands: [
            {
              name: "close",
              description:
                "Close a specific client connection. Error throws if operation fails",
              options: [
                {
                  name: "--connection-id",
                  description: "The connection id",
                  args: { name: "connection-id" },
                  isRequired: true,
                },
                {
                  name: "--hub-name",
                  description: "The hub to manage",
                  args: { name: "hub-name" },
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
                  description: "Name of the Webpubsub",
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
              name: "exist",
              description: "Check whether client connection exists",
              options: [
                {
                  name: "--connection-id",
                  description: "The connection id",
                  args: { name: "connection-id" },
                  isRequired: true,
                },
                {
                  name: "--hub-name",
                  description: "The hub to manage",
                  args: { name: "hub-name" },
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
                  description: "Name of the Webpubsub",
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
              name: "send",
              description:
                "Send a message to connection. Error throws if operation fails",
              options: [
                {
                  name: "--connection-id",
                  description: "The connection id",
                  args: { name: "connection-id" },
                  isRequired: true,
                },
                {
                  name: "--hub-name",
                  description: "The hub to manage",
                  args: { name: "hub-name" },
                  isRequired: true,
                },
                {
                  name: "--payload",
                  description: "A string payload to send",
                  args: { name: "payload" },
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
                  description: "Name of the Webpubsub",
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
          name: "group",
          description: "Commands to manage Webpubsub service groups",
          subcommands: [
            {
              name: "add-connection",
              description:
                "Add a connection to group. Error throws if operation fails",
              options: [
                {
                  name: "--connection-id",
                  description: "The connection id",
                  args: { name: "connection-id" },
                  isRequired: true,
                },
                {
                  name: "--group-name",
                  description: "The group name",
                  args: { name: "group-name" },
                  isRequired: true,
                },
                {
                  name: "--hub-name",
                  description: "The hub to manage",
                  args: { name: "hub-name" },
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
                  description: "Name of the Webpubsub",
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
              name: "add-user",
              description:
                "Add a user to group. Error throws if operation fails",
              options: [
                {
                  name: "--group-name",
                  description: "The group name",
                  args: { name: "group-name" },
                  isRequired: true,
                },
                {
                  name: "--hub-name",
                  description: "The hub to manage",
                  args: { name: "hub-name" },
                  isRequired: true,
                },
                {
                  name: "--user-id",
                  description: "The user id",
                  args: { name: "user-id" },
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
                  description: "Name of the Webpubsub",
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
              name: "remove-connection",
              description:
                "Remove a connection from group. Error throws if operation fails",
              options: [
                {
                  name: "--connection-id",
                  description: "The connection id",
                  args: { name: "connection-id" },
                  isRequired: true,
                },
                {
                  name: "--group-name",
                  description: "The group name",
                  args: { name: "group-name" },
                  isRequired: true,
                },
                {
                  name: "--hub-name",
                  description: "The hub to manage",
                  args: { name: "hub-name" },
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
                  description: "Name of the Webpubsub",
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
              name: "remove-user",
              description:
                "Remove a user from group. Error throws if operation fails",
              options: [
                {
                  name: "--hub-name",
                  description: "The hub to manage",
                  args: { name: "hub-name" },
                  isRequired: true,
                },
                {
                  name: "--user-id",
                  description: "The user id",
                  args: { name: "user-id" },
                  isRequired: true,
                },
                {
                  name: "--group-name",
                  description: "The group name",
                  args: { name: "group-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the Webpubsub",
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
              name: "send",
              description:
                "Send a message to group. Error throws if operation fails",
              options: [
                {
                  name: "--group-name",
                  description: "The group name",
                  args: { name: "group-name" },
                  isRequired: true,
                },
                {
                  name: "--hub-name",
                  description: "The hub to manage",
                  args: { name: "hub-name" },
                  isRequired: true,
                },
                {
                  name: "--payload",
                  description: "A string payload to send",
                  args: { name: "payload" },
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
                  description: "Name of the Webpubsub",
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
          name: "permission",
          description: "Commands to manage Webpubsub service permissions",
          subcommands: [
            {
              name: "check",
              description:
                "Check if a connection has permission to the specified group",
              options: [
                {
                  name: "--connection-id",
                  description: "The connection id",
                  args: { name: "connection-id" },
                  isRequired: true,
                },
                {
                  name: "--group-name",
                  description: "The group name",
                  args: { name: "group-name" },
                  isRequired: true,
                },
                {
                  name: "--hub-name",
                  description: "The hub to manage",
                  args: { name: "hub-name" },
                  isRequired: true,
                },
                {
                  name: "--permission",
                  description: "The permission",
                  args: {
                    name: "permission",
                    suggestions: ["joinLeaveGroup", "sendToGroup"],
                  },
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
                  description: "Name of the Webpubsub",
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
              name: "grant",
              description:
                "Grant a group permission to the connection. Error throws if operation fails",
              options: [
                {
                  name: "--connection-id",
                  description: "The connection id",
                  args: { name: "connection-id" },
                  isRequired: true,
                },
                {
                  name: "--group-name",
                  description: "The group name",
                  args: { name: "group-name" },
                  isRequired: true,
                },
                {
                  name: "--hub-name",
                  description: "The hub to manage",
                  args: { name: "hub-name" },
                  isRequired: true,
                },
                {
                  name: "--permission",
                  description: "The permission",
                  args: {
                    name: "permission",
                    suggestions: ["joinLeaveGroup", "sendToGroup"],
                  },
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
                  description: "Name of the Webpubsub",
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
              name: "revoke",
              description:
                "Revoke a group permission from the connection. Error throws if operation fails",
              options: [
                {
                  name: "--connection-id",
                  description: "The connection id",
                  args: { name: "connection-id" },
                  isRequired: true,
                },
                {
                  name: "--group-name",
                  description: "The group name",
                  args: { name: "group-name" },
                  isRequired: true,
                },
                {
                  name: "--hub-name",
                  description: "The hub to manage",
                  args: { name: "hub-name" },
                  isRequired: true,
                },
                {
                  name: "--permission",
                  description: "The permission",
                  args: {
                    name: "permission",
                    suggestions: ["joinLeaveGroup", "sendToGroup"],
                  },
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
                  description: "Name of the Webpubsub",
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
          name: "user",
          description: "Commands to manage Webpubsub service users",
          subcommands: [
            {
              name: "exist",
              description:
                "Check if there are any client connections connected for the given user",
              options: [
                {
                  name: "--hub-name",
                  description: "The hub to manage",
                  args: { name: "hub-name" },
                  isRequired: true,
                },
                {
                  name: "--user-id",
                  description: "The user id",
                  args: { name: "user-id" },
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
                  description: "Name of the Webpubsub",
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
              name: "send",
              description:
                "Send a message to user. Error throws if operation fails",
              options: [
                {
                  name: "--hub-name",
                  description: "The hub to manage",
                  args: { name: "hub-name" },
                  isRequired: true,
                },
                {
                  name: "--payload",
                  description: "A string payload to send",
                  args: { name: "payload" },
                  isRequired: true,
                },
                {
                  name: "--user-id",
                  description: "The user id",
                  args: { name: "user-id" },
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
                  description: "Name of the Webpubsub",
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
    },
  ],
};

export default completion;
