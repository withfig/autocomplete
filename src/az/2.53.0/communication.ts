const completion: Fig.Spec = {
  name: "communication",
  description: "Manage communication service with communication",
  subcommands: [
    {
      name: "chat",
      description:
        "Commands to interact with Azure Communication Services Chat gateway",
      subcommands: [
        {
          name: "message",
          description:
            "Commands to manage messages in a chat thread of a Communication Service resource",
          subcommands: [
            {
              name: "delete",
              description: "Deletes a message from a chat thread by id",
              options: [
                {
                  name: "--message-id",
                  description: "Message id",
                  args: { name: "message-id" },
                  isRequired: true,
                },
                {
                  name: ["--thread", "-t"],
                  description: "Thread id",
                  args: { name: "thread" },
                  isRequired: true,
                },
                {
                  name: "--access-token",
                  description:
                    "Communication access token. Environment variable: AZURE_COMMUNICATION_ACCESS_TOKEN",
                  args: { name: "access-token" },
                },
                {
                  name: "--endpoint",
                  description:
                    "Communication endpoint. Environment variable: AZURE_COMMUNICATION_ENDPOINT",
                  args: { name: "endpoint" },
                },
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "get",
              description: "Gets a message from a chat thread by id",
              options: [
                {
                  name: "--message-id",
                  description: "Message id",
                  args: { name: "message-id" },
                  isRequired: true,
                },
                {
                  name: ["--thread", "-t"],
                  description: "Thread id",
                  args: { name: "thread" },
                  isRequired: true,
                },
                {
                  name: "--access-token",
                  description:
                    "Communication access token. Environment variable: AZURE_COMMUNICATION_ACCESS_TOKEN",
                  args: { name: "access-token" },
                },
                {
                  name: "--endpoint",
                  description:
                    "Communication endpoint. Environment variable: AZURE_COMMUNICATION_ENDPOINT",
                  args: { name: "endpoint" },
                },
              ],
            },
            {
              name: "list",
              description: "Gets list of messages from a chat thread",
              options: [
                {
                  name: ["--thread", "-t"],
                  description: "Thread id",
                  args: { name: "thread" },
                  isRequired: true,
                },
                {
                  name: "--access-token",
                  description:
                    "Communication access token. Environment variable: AZURE_COMMUNICATION_ACCESS_TOKEN",
                  args: { name: "access-token" },
                },
                {
                  name: "--endpoint",
                  description:
                    "Communication endpoint. Environment variable: AZURE_COMMUNICATION_ENDPOINT",
                  args: { name: "endpoint" },
                },
                {
                  name: "--start-time",
                  description:
                    "Start time in ISO8601 format, ex: 2022-07-14T10:21",
                  args: { name: "start-time" },
                },
              ],
            },
            {
              name: "send",
              description: "Sends a message to a chat thread",
              options: [
                {
                  name: "--content",
                  description: "Chat message content",
                  args: { name: "content" },
                  isRequired: true,
                },
                {
                  name: ["--thread", "-t"],
                  description: "Thread id",
                  args: { name: "thread" },
                  isRequired: true,
                },
                {
                  name: "--access-token",
                  description:
                    "Communication access token. Environment variable: AZURE_COMMUNICATION_ACCESS_TOKEN",
                  args: { name: "access-token" },
                },
                {
                  name: "--display-name",
                  description: "Senders display name",
                  args: { name: "display-name" },
                },
                {
                  name: "--endpoint",
                  description:
                    "Communication endpoint. Environment variable: AZURE_COMMUNICATION_ENDPOINT",
                  args: { name: "endpoint" },
                },
                {
                  name: "--message-type",
                  description: "Content type, can be text or html",
                  args: { name: "message-type" },
                },
              ],
            },
            {
              name: "update",
              description: "Updates a message",
              options: [
                {
                  name: "--content",
                  description: "Chat message content",
                  args: { name: "content" },
                  isRequired: true,
                },
                {
                  name: "--message-id",
                  description: "Message id",
                  args: { name: "message-id" },
                  isRequired: true,
                },
                {
                  name: ["--thread", "-t"],
                  description: "Thread id",
                  args: { name: "thread" },
                  isRequired: true,
                },
                {
                  name: "--access-token",
                  description:
                    "Communication access token. Environment variable: AZURE_COMMUNICATION_ACCESS_TOKEN",
                  args: { name: "access-token" },
                },
                {
                  name: "--endpoint",
                  description:
                    "Communication endpoint. Environment variable: AZURE_COMMUNICATION_ENDPOINT",
                  args: { name: "endpoint" },
                },
              ],
            },
            {
              name: "receipt",
              description:
                "Commands to manage message read-receipts in a chat thread of a Communication Service resource",
              subcommands: [
                {
                  name: "list",
                  description: "Gets read receipts of a chat thread",
                  options: [
                    {
                      name: ["--thread", "-t"],
                      description: "Thread id",
                      args: { name: "thread" },
                      isRequired: true,
                    },
                    {
                      name: "--access-token",
                      description:
                        "Communication access token. Environment variable: AZURE_COMMUNICATION_ACCESS_TOKEN",
                      args: { name: "access-token" },
                    },
                    {
                      name: "--endpoint",
                      description:
                        "Communication endpoint. Environment variable: AZURE_COMMUNICATION_ENDPOINT",
                      args: { name: "endpoint" },
                    },
                    {
                      name: "--skip",
                      description: "Number of read receipts to skip",
                      args: { name: "skip" },
                    },
                  ],
                },
                {
                  name: "send",
                  description:
                    "Posts a read receipt event to a chat thread, on behalf of a user",
                  options: [
                    {
                      name: "--message-id",
                      description: "Message id",
                      args: { name: "message-id" },
                      isRequired: true,
                    },
                    {
                      name: ["--thread", "-t"],
                      description: "Thread id",
                      args: { name: "thread" },
                      isRequired: true,
                    },
                    {
                      name: "--access-token",
                      description:
                        "Communication access token. Environment variable: AZURE_COMMUNICATION_ACCESS_TOKEN",
                      args: { name: "access-token" },
                    },
                    {
                      name: "--endpoint",
                      description:
                        "Communication endpoint. Environment variable: AZURE_COMMUNICATION_ENDPOINT",
                      args: { name: "endpoint" },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "participant",
          description:
            "Commands to manage participants in a chat thread of a Communication Service resource",
          subcommands: [
            {
              name: "add",
              description: "Adds a participant to a chat thread",
              options: [
                {
                  name: ["--thread", "-t"],
                  description: "Thread id",
                  args: { name: "thread" },
                  isRequired: true,
                },
                {
                  name: "--user",
                  description: "Chat participant identifier",
                  args: { name: "user" },
                  isRequired: true,
                },
                {
                  name: "--access-token",
                  description:
                    "Communication access token. Environment variable: AZURE_COMMUNICATION_ACCESS_TOKEN",
                  args: { name: "access-token" },
                },
                {
                  name: "--display-name",
                  description: "Chat participant display name",
                  args: { name: "display-name" },
                },
                {
                  name: "--endpoint",
                  description:
                    "Communication endpoint. Environment variable: AZURE_COMMUNICATION_ENDPOINT",
                  args: { name: "endpoint" },
                },
                {
                  name: "--start-time",
                  description:
                    "Start time to share history in ISO8601 format, ex: 2022-07-14T10:21",
                  args: { name: "start-time" },
                },
              ],
            },
            {
              name: "list",
              description: "Gets the participants of a chat thread",
              options: [
                {
                  name: ["--thread", "-t"],
                  description: "Thread id",
                  args: { name: "thread" },
                  isRequired: true,
                },
                {
                  name: "--access-token",
                  description:
                    "Communication access token. Environment variable: AZURE_COMMUNICATION_ACCESS_TOKEN",
                  args: { name: "access-token" },
                },
                {
                  name: "--endpoint",
                  description:
                    "Communication endpoint. Environment variable: AZURE_COMMUNICATION_ENDPOINT",
                  args: { name: "endpoint" },
                },
                {
                  name: "--skip",
                  description: "Number of participants to skip",
                  args: { name: "skip" },
                },
              ],
            },
            {
              name: "remove",
              description: "Removes a participant from a chat thread",
              options: [
                {
                  name: ["--thread", "-t"],
                  description: "Thread id",
                  args: { name: "thread" },
                  isRequired: true,
                },
                {
                  name: "--user",
                  description: "Chat participant identifier",
                  args: { name: "user" },
                  isRequired: true,
                },
                {
                  name: "--access-token",
                  description:
                    "Communication access token. Environment variable: AZURE_COMMUNICATION_ACCESS_TOKEN",
                  args: { name: "access-token" },
                },
                {
                  name: "--endpoint",
                  description:
                    "Communication endpoint. Environment variable: AZURE_COMMUNICATION_ENDPOINT",
                  args: { name: "endpoint" },
                },
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
          ],
        },
        {
          name: "thread",
          description:
            "Commands to manage chat thread of a Communication Service resource",
          subcommands: [
            {
              name: "create",
              description: "Creates a chat thread",
              options: [
                {
                  name: "--topic",
                  description: "Chat topic",
                  args: { name: "topic" },
                  isRequired: true,
                },
                {
                  name: "--access-token",
                  description:
                    "Communication access token. Environment variable: AZURE_COMMUNICATION_ACCESS_TOKEN",
                  args: { name: "access-token" },
                },
                {
                  name: "--endpoint",
                  description:
                    "Communication endpoint. Environment variable: AZURE_COMMUNICATION_ENDPOINT",
                  args: { name: "endpoint" },
                },
                {
                  name: "--idempotency-token",
                  description: "Idempotency token",
                  args: { name: "idempotency-token" },
                },
              ],
            },
            {
              name: "delete",
              description: "Deletes a chat thread",
              options: [
                {
                  name: ["--thread", "-t"],
                  description: "Thread id",
                  args: { name: "thread" },
                  isRequired: true,
                },
                {
                  name: "--access-token",
                  description:
                    "Communication access token. Environment variable: AZURE_COMMUNICATION_ACCESS_TOKEN",
                  args: { name: "access-token" },
                },
                {
                  name: "--endpoint",
                  description:
                    "Communication endpoint. Environment variable: AZURE_COMMUNICATION_ENDPOINT",
                  args: { name: "endpoint" },
                },
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "list",
              description: "Gets the list of chat threads of a user",
              options: [
                {
                  name: "--access-token",
                  description:
                    "Communication access token. Environment variable: AZURE_COMMUNICATION_ACCESS_TOKEN",
                  args: { name: "access-token" },
                },
                {
                  name: "--endpoint",
                  description:
                    "Communication endpoint. Environment variable: AZURE_COMMUNICATION_ENDPOINT",
                  args: { name: "endpoint" },
                },
                {
                  name: "--start-time",
                  description:
                    "Start time in ISO8601 format, ex: 2022-07-14T10:21",
                  args: { name: "start-time" },
                },
              ],
            },
            {
              name: "update-topic",
              description: "Updates the topic of a chat thread",
              options: [
                {
                  name: ["--thread", "-t"],
                  description: "Thread id",
                  args: { name: "thread" },
                  isRequired: true,
                },
                {
                  name: "--topic",
                  description: "Chat topic",
                  args: { name: "topic" },
                  isRequired: true,
                },
                {
                  name: "--access-token",
                  description:
                    "Communication access token. Environment variable: AZURE_COMMUNICATION_ACCESS_TOKEN",
                  args: { name: "access-token" },
                },
                {
                  name: "--endpoint",
                  description:
                    "Communication endpoint. Environment variable: AZURE_COMMUNICATION_ENDPOINT",
                  args: { name: "endpoint" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "create",
      description:
        "Create a new CommunicationService or update an existing CommunicationService",
      options: [
        {
          name: "--data-location",
          description:
            "The location where the communication service stores its data at rest",
          args: { name: "data-location" },
          isRequired: true,
        },
        {
          name: ["--name", "-n"],
          description: "The name of the CommunicationService resource",
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
          name: "--linked-domains",
          description:
            'List of email Domain resource Ids. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
          args: { name: "linked-domains" },
        },
        {
          name: ["--location", "-l"],
          description:
            "The geo-location where the resource lives When not specified, the location of the resource group will be used",
          args: { name: "location" },
        },
        {
          name: "--mi-system-assigned",
          description: "Enable system assigned identity",
          args: {
            name: "mi-system-assigned",
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
          name: "--tags",
          description:
            'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
          args: { name: "tags" },
        },
      ],
    },
    {
      name: "delete",
      description: "Delete to delete a CommunicationService",
      options: [
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: ["--name", "-n"],
          description: "The name of the CommunicationService resource",
          args: { name: "name" },
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
      name: "link-notification-hub",
      description:
        "Links an Azure Notification Hub to this communication service",
      options: [
        {
          name: "--connection-string",
          description: "Connection string for the notification hub",
          args: { name: "connection-string" },
        },
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: ["--name", "-n"],
          description: "The name of the CommunicationService resource",
          args: { name: "name" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: "--resource-id",
          description: "The resource ID of the notification hub",
          args: { name: "resource-id" },
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
      description: "List requests to list all resources in a resource group",
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
      name: "list-key",
      description: "Get the access keys of the CommunicationService resource",
      options: [
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: ["--name", "-n"],
          description: "The name of the CommunicationService resource",
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
      name: "regenerate-key",
      description:
        "Regenerate CommunicationService access key. PrimaryKey and SecondaryKey cannot be regenerated at the same time",
      options: [
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: "--key-type",
          description:
            "The keyType to regenerate. Must be either 'primary' or 'secondary'(case-insensitive)",
          args: { name: "key-type", suggestions: ["Primary", "Secondary"] },
        },
        {
          name: ["--name", "-n"],
          description: "The name of the CommunicationService resource",
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
      description: "Get the CommunicationService and its properties",
      options: [
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: ["--name", "-n"],
          description: "The name of the CommunicationService resource",
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
        "Update a new CommunicationService or update an existing CommunicationService",
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
          name: "--linked-domains",
          description:
            'List of email Domain resource Ids. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
          args: { name: "linked-domains" },
        },
        {
          name: ["--name", "-n"],
          description: "The name of the CommunicationService resource",
          args: { name: "name" },
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
        {
          name: "--type",
          description:
            "Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed)",
          args: {
            name: "type",
            suggestions: [
              "None",
              "SystemAssigned",
              "SystemAssigned",
              "UserAssigned",
              "UserAssigned",
            ],
          },
        },
        {
          name: ["--user-assigned-identities", "-i"],
          description:
            'The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: \'/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
          args: { name: "user-assigned-identities" },
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
          description: "The name of the CommunicationService resource",
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
      name: "email",
      description:
        "Commands to send emails and get the status of emails previously sent using Azure Communication Services Email service",
      subcommands: [
        {
          name: "send",
          description: "Send an email and get final status",
          options: [
            {
              name: "--sender",
              description: "Sender email address from a verified domain",
              args: { name: "sender" },
              isRequired: true,
            },
            {
              name: "--subject",
              description: "Subject of the email message",
              args: { name: "subject" },
              isRequired: true,
            },
            {
              name: "--attachment-types",
              description:
                "List of email attachment types, in the same order of attachments. Required for each attachment. Known values are: avi, bmp, doc, docm, docx, gif, jpeg, mp3, one, pdf, png, ppsm, ppsx, ppt, pptm, pptx, pub, rpmsg, rtf, tif, txt, vsd, wav, wma, xls, xlsb, xlsm, and xlsx",
              args: { name: "attachment-types" },
            },
            {
              name: "--attachments",
              description: "List of email attachments. Optional",
              args: { name: "attachments" },
            },
            {
              name: "--bcc",
              description: "Blind carbon copy email addresses",
              args: { name: "bcc" },
            },
            {
              name: "--cc",
              description: "Carbon copy email addresses",
              args: { name: "cc" },
            },
            {
              name: "--connection-string",
              description:
                "Communication connection string. Environment variable: AZURE_COMMUNICATION_CONNECTION_STRING",
              args: { name: "connection-string" },
            },
            {
              name: "--disable-tracking",
              description:
                "Indicates whether user engagement tracking should be disabled for this specific request. This is only applicable if the resource-level user engagement tracking setting was already enabled in control plane. Optional",
            },
            {
              name: "--html",
              description: "Html version of the email message. Optional",
              args: { name: "html" },
            },
            {
              name: "--importance",
              description:
                "The importance type for the email. Known values are: high, normal, and low. Default is normal. Optional",
              args: {
                name: "importance",
                suggestions: ["high", "low", "normal"],
              },
            },
            {
              name: "--reply-to",
              description: "Reply-to email address. Optional",
              args: { name: "reply-to" },
            },
            {
              name: "--text",
              description: "Plain text version of the email message. Optional",
              args: { name: "text" },
            },
            {
              name: "--to",
              description: "Recepients email addresses",
              args: { name: "to" },
            },
          ],
        },
      ],
    },
    {
      name: "identity",
      description: "Manage the Communication Resource's managed identities",
      subcommands: [
        {
          name: "assign",
          description:
            "Assign a managed identity to the Communication Resource",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the CommunicationService resource",
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
              name: "--system-assigned",
              description: "Enable system assigned identity",
              args: {
                name: "system-assigned",
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
              name: "--user-assigned",
              description:
                'Space separated resource IDs to add user-assigned identities. Use [] to remove all identities. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "user-assigned" },
            },
          ],
        },
        {
          name: "remove",
          description:
            "Remove a managed identity from the communication resource",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the CommunicationService resource",
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
              name: "--system-assigned",
              description: "Enable system assigned identity",
              args: {
                name: "system-assigned",
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
              name: "--user-assigned",
              description:
                'Space separated resource IDs to add user-assigned identities. Use [] to remove all identities. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "user-assigned" },
            },
          ],
        },
        {
          name: "show",
          description: "Show the Communication Resource's managed identities",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the CommunicationService resource",
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
              description: "The name of the CommunicationService resource",
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
          name: "token",
          description:
            "Commands to manage user tokens for a Communication Service resource",
          subcommands: [
            {
              name: "get-for-teams-user",
              description:
                "Exchanges an Azure Active Directory (Azure AD) access token of a Teams user for a new ACS Identity access token with a matching expiration time",
              options: [
                {
                  name: "--aad-token",
                  description: "Azure AD access token of a Teams User",
                  args: { name: "aad-token" },
                  isRequired: true,
                },
                {
                  name: "--aad-user",
                  description:
                    "Object ID of an Azure AD user(Teams User) to be verified against the OID claim in the Azure AD access token",
                  args: { name: "aad-user" },
                  isRequired: true,
                },
                {
                  name: "--client",
                  description:
                    "Client ID of an Azure AD applicationto be verified against the appId claim in the Azure AD access token",
                  args: { name: "client" },
                  isRequired: true,
                },
                {
                  name: "--connection-string",
                  description:
                    "Communication connection string. Environment variable: AZURE_COMMUNICATION_CONNECTION_STRING",
                  args: { name: "connection-string" },
                },
              ],
            },
            {
              name: "issue",
              description:
                "Issues a new access token with the specified scopes for a given User Identity. If no User Identity is specified, creates a new User Identity as well",
              options: [
                {
                  name: "--scope",
                  description:
                    "List of scopes for an access token ex: chat/voip",
                  args: { name: "scope" },
                  isRequired: true,
                },
                {
                  name: "--connection-string",
                  description:
                    "Communication connection string. Environment variable: AZURE_COMMUNICATION_CONNECTION_STRING",
                  args: { name: "connection-string" },
                },
                {
                  name: "--user",
                  description: "ACS identifier",
                  args: { name: "user" },
                },
              ],
            },
            {
              name: "revoke",
              description:
                "Revokes all access tokens for the specific ACS Identity",
              options: [
                {
                  name: "--user",
                  description: "ACS identifier",
                  args: { name: "user" },
                  isRequired: true,
                },
                {
                  name: "--connection-string",
                  description:
                    "Communication connection string. Environment variable: AZURE_COMMUNICATION_CONNECTION_STRING",
                  args: { name: "connection-string" },
                },
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
          ],
        },
        {
          name: "user",
          description:
            "Commands to manage user identities for a Communication Service resource",
          subcommands: [
            {
              name: "create",
              description: "Creates a new ACS Identity",
              options: [
                {
                  name: "--connection-string",
                  description:
                    "Communication connection string. Environment variable: AZURE_COMMUNICATION_CONNECTION_STRING",
                  args: { name: "connection-string" },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Deletes an existing ACS Identity, revokes all tokens for that ACS Identity and deletes all associated data",
              options: [
                {
                  name: "--user",
                  description: "ACS identifier",
                  args: { name: "user" },
                  isRequired: true,
                },
                {
                  name: "--connection-string",
                  description:
                    "Communication connection string. Environment variable: AZURE_COMMUNICATION_CONNECTION_STRING",
                  args: { name: "connection-string" },
                },
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "phonenumber",
      description:
        "Commands to manage phone numbers for a Communication Service resource",
      subcommands: [
        {
          name: "list",
          description:
            "Lists all phone numbers associated with the Communication Service resource",
          options: [
            {
              name: "--connection-string",
              description:
                "Communication connection string. Environment variable: AZURE_COMMUNICATION_CONNECTION_STRING",
              args: { name: "connection-string" },
            },
          ],
        },
        {
          name: "show",
          description:
            "Shows the details for a phone number associated with the Communication Service resource",
          options: [
            {
              name: "--phonenumber",
              description: "Phone number to get information about",
              args: { name: "phonenumber" },
              isRequired: true,
            },
            {
              name: "--connection-string",
              description:
                "Communication connection string. Environment variable: AZURE_COMMUNICATION_CONNECTION_STRING",
              args: { name: "connection-string" },
            },
          ],
        },
      ],
    },
    {
      name: "phonenumbers",
      description:
        "Commands to manage phone numbers for a Communication Service resource",
      subcommands: [
        {
          name: "list-phonenumbers",
          description:
            "Lists all phone numbers associated with the Communication Service resource",
          options: [
            {
              name: "--connection-string",
              description:
                "Communication connection string. Environment variable: AZURE_COMMUNICATION_CONNECTION_STRING",
              args: { name: "connection-string" },
            },
          ],
        },
        {
          name: "show-phonenumber",
          description:
            "Shows the details for a phone number associated with the Communication Service resource",
          options: [
            {
              name: ["--phonenumber", "-p"],
              description: "Phone number to get information about",
              args: { name: "phonenumber" },
              isRequired: true,
            },
            {
              name: "--connection-string",
              description:
                "Communication connection string. Environment variable: AZURE_COMMUNICATION_CONNECTION_STRING",
              args: { name: "connection-string" },
            },
          ],
        },
      ],
    },
    {
      name: "rooms",
      description:
        "Commands to interact with Azure Communication Services Rooms gateway",
      subcommands: [
        {
          name: "create",
          description: "Create a new room",
          options: [
            {
              name: "--attendee-participants",
              description:
                "Collection of identities to be invited to the room as attendee. Optional",
              args: { name: "attendee-participants" },
            },
            {
              name: "--connection-string",
              description:
                "Communication connection string. Environment variable: AZURE_COMMUNICATION_CONNECTION_STRING",
              args: { name: "connection-string" },
            },
            {
              name: "--consumer-participants",
              description:
                "Collection of identities to be invited to the room as consumer. Optional",
              args: { name: "consumer-participants" },
            },
            {
              name: "--presenter-participants",
              description:
                "Collection of identities to be invited to the room as presenter. Optional",
              args: { name: "presenter-participants" },
            },
            {
              name: "--valid-from",
              description:
                "The timestamp from when the room is open for joining, in in ISO8601 format, ex: 2023-03-31T10:21. Optional",
              args: { name: "valid-from" },
            },
            {
              name: "--valid-until",
              description:
                "The timestamp from when the room can no longer be joined, in ISO8601 format, ex: 2023-06-31T10:21. Optional",
              args: { name: "valid-until" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete an existing room",
          options: [
            {
              name: "--room",
              description: "Room Id",
              args: { name: "room" },
              isRequired: true,
            },
            {
              name: "--connection-string",
              description:
                "Communication connection string. Environment variable: AZURE_COMMUNICATION_CONNECTION_STRING",
              args: { name: "connection-string" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "get",
          description: "Return attributes of an existing room",
          options: [
            {
              name: "--room",
              description: "Room Id",
              args: { name: "room" },
              isRequired: true,
            },
            {
              name: "--connection-string",
              description:
                "Communication connection string. Environment variable: AZURE_COMMUNICATION_CONNECTION_STRING",
              args: { name: "connection-string" },
            },
          ],
        },
        {
          name: "list",
          description:
            "List all active rooms belonging to a current Communication Service resource",
          options: [
            {
              name: "--connection-string",
              description:
                "Communication connection string. Environment variable: AZURE_COMMUNICATION_CONNECTION_STRING",
              args: { name: "connection-string" },
            },
          ],
        },
        {
          name: "update",
          description: "Update attributes of an existing room",
          options: [
            {
              name: "--room",
              description: "Room Id",
              args: { name: "room" },
              isRequired: true,
            },
            {
              name: "--connection-string",
              description:
                "Communication connection string. Environment variable: AZURE_COMMUNICATION_CONNECTION_STRING",
              args: { name: "connection-string" },
            },
            {
              name: "--valid-from",
              description:
                "The timestamp from when the room is open for joining, in in ISO8601 format, ex: 2023-03-31T10:21. Should be used together with --valid-until. Optional",
              args: { name: "valid-from" },
            },
            {
              name: "--valid-until",
              description:
                "The timestamp from when the room can no longer be joined, in ISO8601 format, ex: 2023-06-31T10:21. Should be used together with --valid-from. Optional",
              args: { name: "valid-until" },
            },
          ],
        },
        {
          name: "participant",
          description: "Commands to manage participants of an existing room",
          subcommands: [
            {
              name: "add-or-update",
              description: "Add or update participants in a room",
              options: [
                {
                  name: "--room",
                  description: "Room Id",
                  args: { name: "room" },
                  isRequired: true,
                },
                {
                  name: "--attendee-participants",
                  description:
                    "Collection of identities to be added to the room as attendee",
                  args: { name: "attendee-participants" },
                },
                {
                  name: "--connection-string",
                  description:
                    "Communication connection string. Environment variable: AZURE_COMMUNICATION_CONNECTION_STRING",
                  args: { name: "connection-string" },
                },
                {
                  name: "--consumer-participants",
                  description:
                    "Collection of identities to be added to the room as consumer",
                  args: { name: "consumer-participants" },
                },
                {
                  name: "--presenter-participants",
                  description:
                    "Collection of identities to be added to the room as presenter",
                  args: { name: "presenter-participants" },
                },
              ],
            },
            {
              name: "get",
              description: "Get participants of a room",
              options: [
                {
                  name: "--room",
                  description: "Room Id",
                  args: { name: "room" },
                  isRequired: true,
                },
                {
                  name: "--connection-string",
                  description:
                    "Communication connection string. Environment variable: AZURE_COMMUNICATION_CONNECTION_STRING",
                  args: { name: "connection-string" },
                },
              ],
            },
            {
              name: "remove",
              description: "Remove participants from a room",
              options: [
                {
                  name: "--participants",
                  description:
                    "Collection of identities that will be removed from the room",
                  args: { name: "participants" },
                  isRequired: true,
                },
                {
                  name: "--room",
                  description: "Room Id",
                  args: { name: "room" },
                  isRequired: true,
                },
                {
                  name: "--connection-string",
                  description:
                    "Communication connection string. Environment variable: AZURE_COMMUNICATION_CONNECTION_STRING",
                  args: { name: "connection-string" },
                },
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "sms",
      description:
        "Commands to manage SMS for a Communication Service resource",
      subcommands: [
        {
          name: "send",
          description:
            "Sends an SMS from the sender phone number to the recipient(s) phone number(s)",
          options: [
            {
              name: "--message",
              description: "The message in the SMS",
              args: { name: "message" },
              isRequired: true,
            },
            {
              name: "--recipient",
              description: "The recipient(s) of the SMS",
              args: { name: "recipient" },
              isRequired: true,
            },
            {
              name: "--sender",
              description: "The sender of the SMS",
              args: { name: "sender" },
              isRequired: true,
            },
            {
              name: "--connection-string",
              description:
                "Communication connection string. Environment variable: AZURE_COMMUNICATION_CONNECTION_STRING",
              args: { name: "connection-string" },
            },
          ],
        },
        {
          name: "send-sms",
          description:
            "Sends an SMS from the sender phone number to the recipient(s) phone number(s)",
          options: [
            {
              name: ["--message", "-m"],
              description: "The message in the SMS",
              args: { name: "message" },
              isRequired: true,
            },
            {
              name: ["--recipient", "-r"],
              description: "The recipient(s) of the SMS",
              args: { name: "recipient" },
              isRequired: true,
            },
            {
              name: ["--sender", "-s"],
              description: "The sender of the SMS",
              args: { name: "sender" },
              isRequired: true,
            },
            {
              name: "--connection-string",
              description:
                "Communication connection string. Environment variable: AZURE_COMMUNICATION_CONNECTION_STRING",
              args: { name: "connection-string" },
            },
          ],
        },
      ],
    },
    {
      name: "user-identity",
      description:
        "Commands to manage user identities and their tokens for a Communication Service resource",
      subcommands: [
        {
          name: "issue-access-token",
          description:
            "Issues a new access token with the specified scopes for a given User Identity. If no User Identity is specified, creates a new User Identity as well",
          options: [
            {
              name: ["--scope", "-s"],
              description: "List of scopes for an access token ex: chat/voip",
              args: { name: "scope" },
              isRequired: true,
            },
            {
              name: "--connection-string",
              description:
                "Communication connection string. Environment variable: AZURE_COMMUNICATION_CONNECTION_STRING",
              args: { name: "connection-string" },
            },
            {
              name: ["--userid", "-u"],
              description: "ACS identifier",
              args: { name: "userid" },
            },
          ],
        },
        {
          name: "token",
          description:
            "Commands to manage user tokens for a Communication Service resource",
          subcommands: [
            {
              name: "get-for-teams-user",
              description:
                "Exchanges an Azure Active Directory (Azure AD) access token of a Teams user for a new ACS Identity access token with a matching expiration time",
              options: [
                {
                  name: "--aad-token",
                  description: "Azure AD access token of a Teams User",
                  args: { name: "aad-token" },
                  isRequired: true,
                },
                {
                  name: "--aad-user",
                  description:
                    "Object ID of an Azure AD user(Teams User) to be verified against the OID claim in the Azure AD access token",
                  args: { name: "aad-user" },
                  isRequired: true,
                },
                {
                  name: "--client",
                  description:
                    "Client ID of an Azure AD applicationto be verified against the appId claim in the Azure AD access token",
                  args: { name: "client" },
                  isRequired: true,
                },
                {
                  name: "--connection-string",
                  description:
                    "Communication connection string. Environment variable: AZURE_COMMUNICATION_CONNECTION_STRING",
                  args: { name: "connection-string" },
                },
              ],
            },
            {
              name: "issue",
              description:
                "Issues a new access token with the specified scopes for a given User Identity. If no User Identity is specified, creates a new User Identity as well",
              options: [
                {
                  name: "--scope",
                  description:
                    "List of scopes for an access token ex: chat/voip",
                  args: { name: "scope" },
                  isRequired: true,
                },
                {
                  name: "--connection-string",
                  description:
                    "Communication connection string. Environment variable: AZURE_COMMUNICATION_CONNECTION_STRING",
                  args: { name: "connection-string" },
                },
                {
                  name: "--user",
                  description: "ACS identifier",
                  args: { name: "user" },
                },
              ],
            },
            {
              name: "revoke",
              description:
                "Revokes all access tokens for the specific ACS Identity",
              options: [
                {
                  name: "--user",
                  description: "ACS identifier",
                  args: { name: "user" },
                  isRequired: true,
                },
                {
                  name: "--connection-string",
                  description:
                    "Communication connection string. Environment variable: AZURE_COMMUNICATION_CONNECTION_STRING",
                  args: { name: "connection-string" },
                },
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
          ],
        },
        {
          name: "user",
          description:
            "Commands to manage user identities for a Communication Service resource",
          subcommands: [
            {
              name: "create",
              description: "Creates a new ACS Identity",
              options: [
                {
                  name: "--connection-string",
                  description:
                    "Communication connection string. Environment variable: AZURE_COMMUNICATION_CONNECTION_STRING",
                  args: { name: "connection-string" },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Deletes an existing ACS Identity, revokes all tokens for that ACS Identity and deletes all associated data",
              options: [
                {
                  name: "--user",
                  description: "ACS identifier",
                  args: { name: "user" },
                  isRequired: true,
                },
                {
                  name: "--connection-string",
                  description:
                    "Communication connection string. Environment variable: AZURE_COMMUNICATION_CONNECTION_STRING",
                  args: { name: "connection-string" },
                },
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
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
