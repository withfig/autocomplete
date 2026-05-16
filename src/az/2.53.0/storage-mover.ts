const completion: Fig.Spec = {
  name: "storage-mover",
  description: "Manage top-level Storage Mover resource",
  subcommands: [
    {
      name: "agent",
      description:
        "Manage Agent resource, which references a hybrid compute machine that can run jobs",
      subcommands: [
        {
          name: "list",
          description: "Lists all Agents in a Storage Mover",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--storage-mover-name",
              description: "The name of the Storage Mover resource",
              args: { name: "storage-mover-name" },
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
          description: "Gets an Agent resource",
          options: [
            {
              name: ["--agent-name", "--name", "-n"],
              description: "The name of the Agent resource",
              args: { name: "agent-name" },
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
              name: "--storage-mover-name",
              description: "The name of the Storage Mover resource",
              args: { name: "storage-mover-name" },
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
          name: "unregister",
          description: "Unregisters an Agent resource",
          options: [
            {
              name: ["--agent-name", "--name", "-n"],
              description: "The name of the Agent resource",
              args: { name: "agent-name" },
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
              name: "--storage-mover-name",
              description: "The name of the Storage Mover resource",
              args: { name: "storage-mover-name" },
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
          name: "update",
          description:
            "Update an Agent resource, which references a hybrid compute machine that can run jobs",
          options: [
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: ["--agent-name", "--name", "-n"],
              description: "The name of the Agent resource",
              args: { name: "agent-name" },
            },
            {
              name: "--description",
              description: "A description for the Agent",
              args: { name: "description" },
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
              name: "--storage-mover-name",
              description: "The name of the Storage Mover resource",
              args: { name: "storage-mover-name" },
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
          description:
            "Place the CLI in a waiting state until a condition is met",
          options: [
            {
              name: ["--agent-name", "--name", "-n"],
              description: "The name of the Agent resource",
              args: { name: "agent-name" },
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
              name: "--storage-mover-name",
              description: "The name of the Storage Mover resource",
              args: { name: "storage-mover-name" },
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
      name: "create",
      description: "Creates a top-level Storage Mover resource",
      options: [
        {
          name: ["--storage-mover-name", "--name", "-n"],
          description: "The name of the Storage Mover resource",
          args: { name: "storage-mover-name" },
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
          name: "--description",
          description: "A description for the Storage Mover",
          args: { name: "description" },
        },
        {
          name: ["--location", "-l"],
          description:
            "The geo-location where the resource lives When not specified, the location of the resource group will be used",
          args: { name: "location" },
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
      description: "Deletes a Storage Mover resource",
      options: [
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: ["--storage-mover-name", "--name", "-n"],
          description: "The name of the Storage Mover resource",
          args: { name: "storage-mover-name" },
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
      name: "list",
      description: "Lists all Storage Movers in a subscription",
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
      description: "Gets a Storage Mover resource",
      options: [
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: ["--storage-mover-name", "--name", "-n"],
          description: "The name of the Storage Mover resource",
          args: { name: "storage-mover-name" },
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
      description: "Update a top-level Storage Mover resource",
      options: [
        {
          name: "--add",
          description:
            "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
          args: { name: "add" },
        },
        {
          name: "--description",
          description: "A description for the Storage Mover",
          args: { name: "description" },
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
          name: ["--storage-mover-name", "--name", "-n"],
          description: "The name of the Storage Mover resource",
          args: { name: "storage-mover-name" },
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
          name: ["--storage-mover-name", "--name", "-n"],
          description: "The name of the Storage Mover resource",
          args: { name: "storage-mover-name" },
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
      name: "endpoint",
      description:
        "Manage Endpoint resource, which represents a data transfer source or destination",
      subcommands: [
        {
          name: "create-for-nfs",
          description: "Creates an Endpoint resource for nfs",
          options: [
            {
              name: ["--endpoint-name", "--name", "-n"],
              description: "The name of the endpoint resource",
              args: { name: "endpoint-name" },
              isRequired: true,
            },
            {
              name: "--export",
              description: "The directory being exported from the server",
              args: { name: "export" },
              isRequired: true,
            },
            {
              name: "--host",
              description:
                "The host name or IP address of the server exporting the file system",
              args: { name: "host" },
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
              name: "--storage-mover-name",
              description: "The name of the Storage Mover resource",
              args: { name: "storage-mover-name" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "A description for the Endpoint",
              args: { name: "description" },
            },
            {
              name: "--nfs-version",
              description: "The NFS protocol version",
              args: {
                name: "nfs-version",
                suggestions: ["NFSauto", "NFSv3", "NFSv4"],
              },
            },
          ],
        },
        {
          name: "create-for-smb",
          description: "Creates an Endpoint resource for smb mount",
          options: [
            {
              name: ["--endpoint-name", "--name", "-n"],
              description: "The name of the endpoint resource",
              args: { name: "endpoint-name" },
              isRequired: true,
            },
            {
              name: "--host",
              description:
                "The host name or IP address of the server exporting the file system",
              args: { name: "host" },
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
              name: "--share-name",
              description:
                "The name of the SMB share being exported from the server",
              args: { name: "share-name" },
              isRequired: true,
            },
            {
              name: "--storage-mover-name",
              description: "The name of the Storage Mover resource",
              args: { name: "storage-mover-name" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "A description for the Endpoint",
              args: { name: "description" },
            },
            {
              name: "--password-uri",
              description:
                "The Azure Key Vault secret URI which stores the password. Use empty string to clean-up existing value",
              args: { name: "password-uri" },
            },
            {
              name: "--username-uri",
              description:
                "The Azure Key Vault secret URI which stores the username. Use empty string to clean-up existing value",
              args: { name: "username-uri" },
            },
          ],
        },
        {
          name: "create-for-storage-container",
          description:
            "Creates an Endpoint resource for storage blob container",
          options: [
            {
              name: "--container-name",
              description:
                "The name of the Storage blob container that is the target destination",
              args: { name: "container-name" },
              isRequired: true,
            },
            {
              name: ["--endpoint-name", "--name", "-n"],
              description: "The name of the endpoint resource",
              args: { name: "endpoint-name" },
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
              name: "--storage-account-id",
              description:
                "The Azure Resource ID of the storage account that is the target destination",
              args: { name: "storage-account-id" },
              isRequired: true,
            },
            {
              name: "--storage-mover-name",
              description: "The name of the Storage Mover resource",
              args: { name: "storage-mover-name" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "A description for the Endpoint",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "create-for-storage-smb-file-share",
          description:
            "Creates an Endpoint resource for storage smb file share",
          options: [
            {
              name: ["--endpoint-name", "--name", "-n"],
              description: "The name of the endpoint resource",
              args: { name: "endpoint-name" },
              isRequired: true,
            },
            {
              name: "--file-share-name",
              description: "The name of the Azure Storage file share",
              args: { name: "file-share-name" },
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
              name: "--storage-account-id",
              description:
                "The Azure Resource ID of the storage account that is the target destination",
              args: { name: "storage-account-id" },
              isRequired: true,
            },
            {
              name: "--storage-mover-name",
              description: "The name of the Storage Mover resource",
              args: { name: "storage-mover-name" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "A description for the Endpoint",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes an Endpoint resource",
          options: [
            {
              name: ["--endpoint-name", "--name", "-n"],
              description: "The name of the Endpoint resource",
              args: { name: "endpoint-name" },
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
              name: "--storage-mover-name",
              description: "The name of the Storage Mover resource",
              args: { name: "storage-mover-name" },
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
          description: "Lists all Endpoints in a Storage Mover",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--storage-mover-name",
              description: "The name of the Storage Mover resource",
              args: { name: "storage-mover-name" },
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
          description: "Gets an Endpoint resource",
          options: [
            {
              name: ["--endpoint-name", "--name", "-n"],
              description: "The name of the Endpoint resource",
              args: { name: "endpoint-name" },
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
              name: "--storage-mover-name",
              description: "The name of the Storage Mover resource",
              args: { name: "storage-mover-name" },
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
          name: "update-for-nfs",
          description: "Updates an Endpoint resource for nfs",
          options: [
            {
              name: ["--endpoint-name", "--name", "-n"],
              description: "The name of the endpoint resource",
              args: { name: "endpoint-name" },
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
              name: "--storage-mover-name",
              description: "The name of the Storage Mover resource",
              args: { name: "storage-mover-name" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "A description for the Endpoint",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "update-for-smb",
          description: "Updates an Endpoint resource for smb mount",
          options: [
            {
              name: ["--endpoint-name", "--name", "-n"],
              description: "The name of the endpoint resource",
              args: { name: "endpoint-name" },
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
              name: "--storage-mover-name",
              description: "The name of the Storage Mover resource",
              args: { name: "storage-mover-name" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "A description for the Endpoint",
              args: { name: "description" },
            },
            {
              name: "--password-uri",
              description:
                "The Azure Key Vault secret URI which stores the password. Use empty string to clean-up existing value",
              args: { name: "password-uri" },
            },
            {
              name: "--username-uri",
              description:
                "The Azure Key Vault secret URI which stores the username. Use empty string to clean-up existing value",
              args: { name: "username-uri" },
            },
          ],
        },
        {
          name: "update-for-storage-container",
          description:
            "Updates an Endpoint resource for storage blob container",
          options: [
            {
              name: ["--endpoint-name", "--name", "-n"],
              description: "The name of the endpoint resource",
              args: { name: "endpoint-name" },
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
              name: "--storage-mover-name",
              description: "The name of the Storage Mover resource",
              args: { name: "storage-mover-name" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "A description for the Endpoint",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "update-for-storage-smb-file-share",
          description:
            "Updates an Endpoint resource for storage smb file share",
          options: [
            {
              name: ["--endpoint-name", "--name", "-n"],
              description: "The name of the endpoint resource",
              args: { name: "endpoint-name" },
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
              name: "--storage-mover-name",
              description: "The name of the Storage Mover resource",
              args: { name: "storage-mover-name" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "A description for the Endpoint",
              args: { name: "description" },
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
            {
              name: ["--endpoint-name", "--name", "-n"],
              description: "The name of the Endpoint resource",
              args: { name: "endpoint-name" },
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
              name: "--storage-mover-name",
              description: "The name of the Storage Mover resource",
              args: { name: "storage-mover-name" },
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
      name: "job-definition",
      description:
        "Manage Job Definition resource, which contains configuration for a single unit of managed data transfer",
      subcommands: [
        {
          name: "create",
          description:
            "Creates a Job Definition resource, which contains configuration for a single unit of managed data transfer",
          options: [
            {
              name: "--copy-mode",
              description: "Strategy to use for copy",
              args: { name: "copy-mode", suggestions: ["Additive", "Mirror"] },
              isRequired: true,
            },
            {
              name: ["--job-definition-name", "--name", "-n"],
              description: "The name of the Job Definition resource",
              args: { name: "job-definition-name" },
              isRequired: true,
            },
            {
              name: "--project-name",
              description: "The name of the Project resource",
              args: { name: "project-name" },
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
              name: "--source-name",
              description: "The name of the source Endpoint",
              args: { name: "source-name" },
              isRequired: true,
            },
            {
              name: "--storage-mover-name",
              description: "The name of the Storage Mover resource",
              args: { name: "storage-mover-name" },
              isRequired: true,
            },
            {
              name: "--target-name",
              description: "The name of the target Endpoint",
              args: { name: "target-name" },
              isRequired: true,
            },
            {
              name: "--agent-name",
              description:
                "Name of the Agent to assign for new Job Runs of this Job Definition",
              args: { name: "agent-name" },
            },
            {
              name: "--description",
              description: "A description for the Job Definition",
              args: { name: "description" },
            },
            {
              name: "--source-subpath",
              description:
                "The subpath to use when reading from the source Endpoint",
              args: { name: "source-subpath" },
            },
            {
              name: "--target-subpath",
              description:
                "The subpath to use when writing to the target Endpoint",
              args: { name: "target-subpath" },
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes a Job Definition resource",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--job-definition-name", "--name", "-n"],
              description: "The name of the Job Definition resource",
              args: { name: "job-definition-name" },
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
              name: "--project-name",
              description: "The name of the Project resource",
              args: { name: "project-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--storage-mover-name",
              description: "The name of the Storage Mover resource",
              args: { name: "storage-mover-name" },
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
          description: "Lists all Job Definitions in a Project",
          options: [
            {
              name: "--project-name",
              description: "The name of the Project resource",
              args: { name: "project-name" },
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
              name: "--storage-mover-name",
              description: "The name of the Storage Mover resource",
              args: { name: "storage-mover-name" },
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
          description: "Gets a Job Definition resource",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--job-definition-name", "--name", "-n"],
              description: "The name of the Job Definition resource",
              args: { name: "job-definition-name" },
            },
            {
              name: "--project-name",
              description: "The name of the Project resource",
              args: { name: "project-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--storage-mover-name",
              description: "The name of the Storage Mover resource",
              args: { name: "storage-mover-name" },
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
          name: "start-job",
          description:
            "Requests an Agent to start a new instance of this Job Definition, generating a new Job Run resource",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--job-definition-name",
              description: "The name of the Job Definition resource",
              args: { name: "job-definition-name" },
            },
            {
              name: "--project-name",
              description: "The name of the Project resource",
              args: { name: "project-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--storage-mover-name",
              description: "The name of the Storage Mover resource",
              args: { name: "storage-mover-name" },
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
          name: "stop-job",
          description:
            "Requests the Agent of any active instance of this Job Definition to stop",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--job-definition-name",
              description: "The name of the Job Definition resource",
              args: { name: "job-definition-name" },
            },
            {
              name: "--project-name",
              description: "The name of the Project resource",
              args: { name: "project-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--storage-mover-name",
              description: "The name of the Storage Mover resource",
              args: { name: "storage-mover-name" },
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
            "Update a Job Definition resource, which contains configuration for a single unit of managed data transfer",
          options: [
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: "--agent-name",
              description:
                "Name of the Agent to assign for new Job Runs of this Job Definition",
              args: { name: "agent-name" },
            },
            {
              name: "--copy-mode",
              description: "Strategy to use for copy",
              args: { name: "copy-mode", suggestions: ["Additive", "Mirror"] },
            },
            {
              name: "--description",
              description: "A description for the Job Definition",
              args: { name: "description" },
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
              name: ["--job-definition-name", "--name", "-n"],
              description: "The name of the Job Definition resource",
              args: { name: "job-definition-name" },
            },
            {
              name: "--project-name",
              description: "The name of the Project resource",
              args: { name: "project-name" },
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
              name: "--storage-mover-name",
              description: "The name of the Storage Mover resource",
              args: { name: "storage-mover-name" },
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
              name: ["--job-definition-name", "--name", "-n"],
              description: "The name of the Job Definition resource",
              args: { name: "job-definition-name" },
            },
            {
              name: "--project-name",
              description: "The name of the Project resource",
              args: { name: "project-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--storage-mover-name",
              description: "The name of the Storage Mover resource",
              args: { name: "storage-mover-name" },
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
      name: "job-run",
      description: "Manage Job Run resource",
      subcommands: [
        {
          name: "list",
          description: "Lists all Job Runs in a Job Definition",
          options: [
            {
              name: "--job-definition-name",
              description: "The name of the Job Definition resource",
              args: { name: "job-definition-name" },
              isRequired: true,
            },
            {
              name: "--project-name",
              description: "The name of the Project resource",
              args: { name: "project-name" },
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
              name: "--storage-mover-name",
              description: "The name of the Storage Mover resource",
              args: { name: "storage-mover-name" },
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
          description: "Gets a Job Run resource",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--job-definition-name",
              description: "The name of the Job Definition resource",
              args: { name: "job-definition-name" },
            },
            {
              name: ["--job-run-name", "--name", "-n"],
              description: "The name of the Job Run resource",
              args: { name: "job-run-name" },
            },
            {
              name: "--project-name",
              description: "The name of the Project resource",
              args: { name: "project-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--storage-mover-name",
              description: "The name of the Storage Mover resource",
              args: { name: "storage-mover-name" },
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
      name: "project",
      description:
        "Manage Project resource, which is a logical grouping of related jobs",
      subcommands: [
        {
          name: "create",
          description:
            "Creates a Project resource, which is a logical grouping of related jobs",
          options: [
            {
              name: ["--project-name", "--name", "-n"],
              description: "The name of the Project resource",
              args: { name: "project-name" },
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
              name: "--storage-mover-name",
              description: "The name of the Storage Mover resource",
              args: { name: "storage-mover-name" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "A description for the Project",
              args: { name: "description" },
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes a Project resource",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--project-name", "--name", "-n"],
              description: "The name of the Project resource",
              args: { name: "project-name" },
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
              name: "--storage-mover-name",
              description: "The name of the Storage Mover resource",
              args: { name: "storage-mover-name" },
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
          description: "Lists all Projects in a Storage Mover",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--storage-mover-name",
              description: "The name of the Storage Mover resource",
              args: { name: "storage-mover-name" },
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
          description: "Gets a Project resource",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--project-name", "--name", "-n"],
              description: "The name of the Project resource",
              args: { name: "project-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--storage-mover-name",
              description: "The name of the Storage Mover resource",
              args: { name: "storage-mover-name" },
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
            "Update a Project resource, which is a logical grouping of related jobs",
          options: [
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: "--description",
              description: "A description for the Project",
              args: { name: "description" },
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
              name: ["--project-name", "--name", "-n"],
              description: "The name of the Project resource",
              args: { name: "project-name" },
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
              name: "--storage-mover-name",
              description: "The name of the Storage Mover resource",
              args: { name: "storage-mover-name" },
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
              name: ["--project-name", "--name", "-n"],
              description: "The name of the Project resource",
              args: { name: "project-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--storage-mover-name",
              description: "The name of the Storage Mover resource",
              args: { name: "storage-mover-name" },
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
  ],
};

export default completion;
