const completion: Fig.Spec = {
  name: "notification-hub",
  description: "Manage notification hubs",
  subcommands: [
    {
      name: "authorization-rule",
      description: "Commands to manage notification hubs authorization rule",
      subcommands: [
        {
          name: "create",
          description: "Create an authorization rule for a notification hub",
          options: [
            {
              name: ["--name", "-n"],
              description: "Authorization Rule Name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--namespace-name",
              description: "The namespace name",
              args: { name: "namespace-name" },
              isRequired: true,
            },
            {
              name: "--notification-hub-name",
              description: "The notification hub name",
              args: { name: "notification-hub-name" },
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
              name: "--rights",
              description:
                'The rights associated with the rule. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "rights" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a notificationHub authorization rule",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Authorization Rule Name",
              args: { name: "name" },
            },
            {
              name: "--namespace-name",
              description: "The namespace name",
              args: { name: "namespace-name" },
            },
            {
              name: "--notification-hub-name",
              description: "The notification hub name",
              args: { name: "notification-hub-name" },
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
          description: "List the authorization rules for a notification hub",
          options: [
            {
              name: "--namespace-name",
              description: "The namespace name",
              args: { name: "namespace-name" },
              isRequired: true,
            },
            {
              name: "--notification-hub-name",
              description: "The notification hub name",
              args: { name: "notification-hub-name" },
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
          name: "list-keys",
          description:
            "List the primary and secondary connection strings to the notification hub",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description:
                "The connection string of the NotificationHub for the specified authorizationRule",
              args: { name: "name" },
            },
            {
              name: "--namespace-name",
              description: "The namespace name",
              args: { name: "namespace-name" },
            },
            {
              name: "--notification-hub-name",
              description: "The notification hub name",
              args: { name: "notification-hub-name" },
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
          name: "regenerate-keys",
          description:
            "Regenerates the primary/secondary keys to the notification hub authorization rule",
          options: [
            {
              name: "--policy-key",
              description:
                "Name of the key that has to be regenerated for the Namespace/Notification Hub Authorization Rule. The value can be Primary Key/Secondary Key",
              args: {
                name: "policy-key",
                suggestions: ["Primary Key", "Secondary Key"],
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
              description:
                "The connection string of the NotificationHub for the specified authorizationRule",
              args: { name: "name" },
            },
            {
              name: "--namespace-name",
              description: "The namespace name",
              args: { name: "namespace-name" },
            },
            {
              name: "--notification-hub-name",
              description: "The notification hub name",
              args: { name: "notification-hub-name" },
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
            "Show an authorization rule for a notification hub by name",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Authorization Rule Name",
              args: { name: "name" },
            },
            {
              name: "--namespace-name",
              description: "The namespace name",
              args: { name: "namespace-name" },
            },
            {
              name: "--notification-hub-name",
              description: "The notification hub name",
              args: { name: "notification-hub-name" },
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
      name: "check-availability",
      description:
        "Checks the availability of the given notification hub in a namespace",
      options: [
        {
          name: ["--name", "-n"],
          description: "Resource name",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: "--namespace-name",
          description: "The namespace name",
          args: { name: "namespace-name" },
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
      description: "Create a notification hub in a namespace",
      options: [
        {
          name: ["--name", "-n"],
          description: "The notification hub name",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: "--namespace-name",
          description: "The namespace name",
          args: { name: "namespace-name" },
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
            "Resource location When not specified, the location of the resource group will be used",
          args: { name: "location" },
        },
        {
          name: "--registration-ttl",
          description: "The RegistrationTtl of the created NotificationHub",
          args: { name: "registration-ttl" },
        },
        {
          name: "--tags",
          description:
            'Resource tags Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
          args: { name: "tags" },
        },
      ],
    },
    {
      name: "delete",
      description: "Delete a notification hub associated with a namespace",
      options: [
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: ["--name", "-n"],
          description: "The notification hub name",
          args: { name: "name" },
        },
        {
          name: "--namespace-name",
          description: "The namespace name",
          args: { name: "namespace-name" },
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
      description: "List the notification hubs associated with a namespace",
      options: [
        {
          name: "--namespace-name",
          description: "The namespace name",
          args: { name: "namespace-name" },
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
      description: "Show the notification hub information",
      options: [
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: ["--name", "-n"],
          description: "The notification hub name",
          args: { name: "name" },
        },
        {
          name: "--namespace-name",
          description: "The namespace name",
          args: { name: "namespace-name" },
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
      name: "test-send",
      description: "Test send a push notification",
      options: [
        {
          name: "--namespace-name",
          description: "The namespace name",
          args: { name: "namespace-name" },
          isRequired: true,
        },
        {
          name: "--notification-format",
          description: "The format of notification message",
          args: {
            name: "notification-format",
            suggestions: [
              "apple",
              "baidu",
              "gcm",
              "template",
              "windows",
              "windowsphone",
            ],
          },
          isRequired: true,
        },
        {
          name: "--notification-hub-name",
          description: "The notification hub name",
          args: { name: "notification-hub-name" },
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
          name: "--message",
          description:
            "The message body to send. If not None, payload will be ignored",
          args: { name: "message" },
        },
        {
          name: "--payload",
          description: "The payload for the message in JSON format",
          args: { name: "payload" },
        },
        {
          name: "--tag",
          description:
            "You can send test notifications to a specific set of registrations using this option. Leave this field empty if you like to send push notifications to 10 random registrations on the selected platform",
          args: { name: "tag" },
        },
        {
          name: "--title",
          description: "The title of the notification",
          args: { name: "title" },
        },
      ],
    },
    {
      name: "update",
      description: "Update a notification hub in a namespace",
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
          name: ["--location", "-l"],
          description: "Resource location",
          args: { name: "location" },
        },
        {
          name: ["--notification-hub-name", "--name", "-n"],
          description: "The notification hub name",
          args: { name: "notification-hub-name" },
        },
        {
          name: "--namespace-name",
          description: "The namespace name",
          args: { name: "namespace-name" },
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
            'Resource tags Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
          args: { name: "tags" },
        },
      ],
    },
    {
      name: "credential",
      description: "Commands to manage notification hub credential",
      subcommands: [
        {
          name: "list",
          description:
            "Lists the PNS credentials associated with a notification hub",
          options: [
            {
              name: "--namespace-name",
              description: "The namespace name",
              args: { name: "namespace-name" },
              isRequired: true,
            },
            {
              name: "--notification-hub-name",
              description: "The notification hub name",
              args: { name: "notification-hub-name" },
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
          name: "adm",
          description: "",
          subcommands: [
            {
              name: "update",
              description: "Update credential for Amazon(ADM)",
              options: [
                {
                  name: "--client-id",
                  description: "The client identifier",
                  args: { name: "client-id" },
                  isRequired: true,
                },
                {
                  name: "--client-secret",
                  description: "The credential secret access key",
                  args: { name: "client-secret" },
                  isRequired: true,
                },
                {
                  name: ["--notification-hub-name", "--name", "-n"],
                  description: "The notification hub name",
                  args: { name: "notification-hub-name" },
                  isRequired: true,
                },
                {
                  name: "--namespace-name",
                  description: "The namespace name",
                  args: { name: "namespace-name" },
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
          ],
        },
        {
          name: "apns",
          description: "",
          subcommands: [
            {
              name: "update",
              description: "Update credential for Apple(APNS)",
              options: [
                {
                  name: ["--notification-hub-name", "--name", "-n"],
                  description: "The notification hub name",
                  args: { name: "notification-hub-name" },
                  isRequired: true,
                },
                {
                  name: "--namespace-name",
                  description: "The namespace name",
                  args: { name: "namespace-name" },
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
                  name: "--apns-certificate",
                  description: "The APNS certificate",
                  args: { name: "apns-certificate" },
                },
                {
                  name: "--app-id",
                  description:
                    "The issuer (iss) registered claim key. The value is a 10-character TeamId, obtained from your developer account. Specify if using Token Authentication Mode",
                  args: { name: "app-id" },
                },
                {
                  name: "--app-name",
                  description:
                    "The name of the application or BundleId. Specify if using Token Authentication Mode",
                  args: { name: "app-name" },
                },
                {
                  name: "--certificate-key",
                  description: "The APNS certificate password if it exists",
                  args: { name: "certificate-key" },
                },
                {
                  name: "--endpoint",
                  description:
                    "The APNS endpoint of this credential. If using Certificate Authentication Mode and Sandbox specify 'gateway.sandbox.push.apple.com'. If using Certificate Authentication Mode and Production specify 'gateway.push.apple.com'. If using Token Authentication Mode and Sandbox specify 'https://api.development.push.apple.com:443/3/device'. If using Token Authentication Mode and Production specify 'https://api.push.apple.com:443/3/device'",
                  args: { name: "endpoint" },
                },
                {
                  name: "--key-id",
                  description:
                    "A 10-character key identifier (kid) key, obtained from your developer account. Specify if using Token Authentication Mode",
                  args: { name: "key-id" },
                },
                {
                  name: "--token",
                  description:
                    "Provider Authentication Token, obtained through your developer account. Specify if using Token Authentication Mode",
                  args: { name: "token" },
                },
              ],
            },
          ],
        },
        {
          name: "baidu",
          description: "",
          subcommands: [
            {
              name: "update",
              description: "Update credential for Baidu(Andrioid China)",
              options: [
                {
                  name: "--api-key",
                  description: "Baidu API key",
                  args: { name: "api-key" },
                  isRequired: true,
                },
                {
                  name: ["--notification-hub-name", "--name", "-n"],
                  description: "The notification hub name",
                  args: { name: "notification-hub-name" },
                  isRequired: true,
                },
                {
                  name: "--namespace-name",
                  description: "The namespace name",
                  args: { name: "namespace-name" },
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
                  name: "--secret-key",
                  description: "Baidu secret key",
                  args: { name: "secret-key" },
                  isRequired: true,
                },
                {
                  name: "--baidu-api-key",
                  description: "Baidu Api Key",
                  args: { name: "baidu-api-key" },
                },
                {
                  name: "--baidu-secret-key",
                  description: "Baidu Secret Key",
                  args: { name: "baidu-secret-key" },
                },
              ],
            },
          ],
        },
        {
          name: "gcm",
          description: "",
          subcommands: [
            {
              name: "update",
              description: "Update the Google GCM/FCM API key",
              options: [
                {
                  name: "--google-api-key",
                  description: "The Google API key",
                  args: { name: "google-api-key" },
                  isRequired: true,
                },
                {
                  name: ["--notification-hub-name", "--name", "-n"],
                  description: "The notification hub name",
                  args: { name: "notification-hub-name" },
                  isRequired: true,
                },
                {
                  name: "--namespace-name",
                  description: "The namespace name",
                  args: { name: "namespace-name" },
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
          ],
        },
        {
          name: "mpns",
          description: "",
          subcommands: [
            {
              name: "update",
              description: "Update credential for Windows Phone(MPNS)",
              options: [
                {
                  name: "--certificate-key",
                  description: "The certificate key for this credential",
                  args: { name: "certificate-key" },
                  isRequired: true,
                },
                {
                  name: "--mpns-certificate",
                  description: "The MPNS certificate",
                  args: { name: "mpns-certificate" },
                  isRequired: true,
                },
                {
                  name: ["--notification-hub-name", "--name", "-n"],
                  description: "The notification hub name",
                  args: { name: "notification-hub-name" },
                  isRequired: true,
                },
                {
                  name: "--namespace-name",
                  description: "The namespace name",
                  args: { name: "namespace-name" },
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
          ],
        },
        {
          name: "wns",
          description: "",
          subcommands: [
            {
              name: "update",
              description: "Update credential for Windows(WNS)",
              options: [
                {
                  name: ["--notification-hub-name", "--name", "-n"],
                  description: "The notification hub name",
                  args: { name: "notification-hub-name" },
                  isRequired: true,
                },
                {
                  name: "--namespace-name",
                  description: "The namespace name",
                  args: { name: "namespace-name" },
                  isRequired: true,
                },
                {
                  name: "--package-sid",
                  description: "The package ID for this credential",
                  args: { name: "package-sid" },
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
                  name: "--secret-key",
                  description: "The secret key",
                  args: { name: "secret-key" },
                  isRequired: true,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "namespace",
      description: "Commands to manage notification hub namespace",
      subcommands: [
        {
          name: "check-availability",
          description:
            "Checks the availability of the given service namespace across all Azure subscriptions. This is useful because the domain name is created based on the service namespace name",
          options: [
            {
              name: ["--name", "-n"],
              description: "Resource name",
              args: { name: "name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "create",
          description:
            "Create a service namespace. Once created, this namespace's resource manifest is immutable. This operation is idempotent",
          options: [
            {
              name: ["--name", "-n"],
              description: "The namespace name",
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
              description: "Name of the notification hub sku",
              args: { name: "sku", suggestions: ["Basic", "Free", "Standard"] },
              isRequired: true,
            },
            {
              name: ["--location", "-l"],
              description:
                "Resource location When not specified, the location of the resource group will be used",
              args: { name: "location" },
            },
            {
              name: "--tags",
              description:
                'Resource tags Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tags" },
            },
          ],
        },
        {
          name: "delete",
          description:
            "Delete an existing namespace. This operation also removes all associated notificationHubs under the namespace",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The namespace name",
              args: { name: "name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
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
          name: "list",
          description: "List available namespaces",
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
          name: "show",
          description: "Return the description for the specified namespace",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The namespace name",
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
          description:
            "Update a service namespace. The namespace's resource manifest is immutable and cannot be modified",
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
              name: ["--location", "-l"],
              description: "Resource location",
              args: { name: "location" },
            },
            {
              name: ["--name", "-n"],
              description: "The namespace name",
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
              description: "Name of the notification hub sku",
              args: { name: "sku", suggestions: ["Basic", "Free", "Standard"] },
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
                'Resource tags Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tags" },
            },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition is met",
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
              name: ["--name", "-n"],
              description: "The namespace name",
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
        {
          name: "authorization-rule",
          description:
            "Commands to manage notification hubs namespace authorization rule",
          subcommands: [
            {
              name: "create",
              description: "Create an authorization rule for a namespace",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Authorization Rule Name",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--namespace-name",
                  description: "The namespace name",
                  args: { name: "namespace-name" },
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
                  name: "--rights",
                  description:
                    'The rights associated with the rule. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "rights" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a namespace authorization rule",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Authorization Rule Name",
                  args: { name: "name" },
                },
                {
                  name: "--namespace-name",
                  description: "The namespace name",
                  args: { name: "namespace-name" },
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
              description: "List the authorization rules for a namespace",
              options: [
                {
                  name: "--namespace-name",
                  description: "The namespace name",
                  args: { name: "namespace-name" },
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
              name: "list-keys",
              description:
                "List the primary and secondary connection strings to the namespace",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "The connection string of the namespace for the specified authorizationRule",
                  args: { name: "name" },
                },
                {
                  name: "--namespace-name",
                  description: "The namespace name",
                  args: { name: "namespace-name" },
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
              name: "regenerate-keys",
              description:
                "Regenerate the primary/secondary keys to the namespace authorization rule",
              options: [
                {
                  name: "--policy-key",
                  description:
                    "Name of the key that has to be regenerated for the Namespace/Notification Hub Authorization Rule. The value can be Primary Key/Secondary Key",
                  args: {
                    name: "policy-key",
                    suggestions: ["Primary Key", "Secondary Key"],
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
                  description:
                    "The connection string of the namespace for the specified authorizationRule",
                  args: { name: "name" },
                },
                {
                  name: "--namespace-name",
                  description: "The namespace name",
                  args: { name: "namespace-name" },
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
              description: "Get an authorization rule for a namespace by name",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Authorization Rule Name",
                  args: { name: "name" },
                },
                {
                  name: "--namespace-name",
                  description: "The namespace name",
                  args: { name: "namespace-name" },
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
