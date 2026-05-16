const completion: Fig.Spec = {
  name: "datashare",
  description: "Manage Data Share",
  subcommands: [
    {
      name: "account",
      description: "Manage account with datashare",
      subcommands: [
        {
          name: "create",
          description: "Create an account",
          options: [
            {
              name: ["--account-name", "--name", "-n"],
              description: "The name of the share account",
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
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
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
          description: "DeleteAccount",
          options: [
            {
              name: ["--account-name", "--name", "-n"],
              description: "The name of the share account",
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
            "List Accounts in ResourceGroup And List Accounts in Subscription",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--skip-token",
              description: "Continuation token",
              args: { name: "skip-token" },
            },
          ],
        },
        {
          name: "show",
          description: "Get an account",
          options: [
            {
              name: ["--account-name", "--name", "-n"],
              description: "The name of the share account",
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
          description: "Patch an account",
          options: [
            {
              name: ["--account-name", "--name", "-n"],
              description: "The name of the share account",
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
            "Place the CLI in a waiting state until a condition of the datashare account is met",
          options: [
            {
              name: ["--account-name", "--name", "-n"],
              description: "The name of the share account",
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
      name: "consumer-invitation",
      description: "Manage consumer invitation with datashare",
      subcommands: [
        {
          name: "list-invitation",
          description: "Lists invitations",
          options: [
            {
              name: "--skip-token",
              description: "The continuation token",
              args: { name: "skip-token" },
            },
          ],
        },
        {
          name: "reject-invitation",
          description: "Reject an invitation",
          options: [
            {
              name: "--invitation-id",
              description: "Unique id of the invitation",
              args: { name: "invitation-id" },
              isRequired: true,
            },
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
          name: "show",
          description: "Get an invitation",
          options: [
            {
              name: "--invitation-id",
              description: "An invitation id",
              args: { name: "invitation-id" },
              isRequired: true,
            },
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
      name: "consumer-source-data-set",
      description: "Manage consumer source data set with datashare",
      subcommands: [
        {
          name: "list",
          description: "Get source dataSets of a shareSubscription",
          options: [
            {
              name: "--account-name",
              description: "The name of the share account",
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
              name: "--share-subscription-name",
              description: "The name of the shareSubscription",
              args: { name: "share-subscription-name" },
              isRequired: true,
            },
            {
              name: "--skip-token",
              description: "Continuation token",
              args: { name: "skip-token" },
            },
          ],
        },
      ],
    },
    {
      name: "create",
      description: "Create a share",
      options: [
        {
          name: "--account-name",
          description: "The name of the share account",
          args: { name: "account-name" },
          isRequired: true,
        },
        {
          name: ["--share-name", "--name", "-n"],
          description: "The name of the share",
          args: { name: "share-name" },
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
          description: "Share description",
          args: { name: "description" },
        },
        {
          name: "--share-kind",
          description: "Share kind",
          args: { name: "share-kind", suggestions: ["CopyBased", "InPlace"] },
        },
        {
          name: "--terms",
          description: "Share terms",
          args: { name: "terms" },
        },
      ],
    },
    {
      name: "delete",
      description: "Delete a share",
      options: [
        {
          name: "--account-name",
          description: "The name of the share account",
          args: { name: "account-name" },
        },
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: ["--share-name", "--name", "-n"],
          description: "The name of the share",
          args: { name: "share-name" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
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
      description: "List shares in an account",
      options: [
        {
          name: "--account-name",
          description: "The name of the share account",
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
          name: "--filter",
          description: "Filters the results using OData syntax",
          args: { name: "filter" },
        },
        {
          name: "--orderby",
          description: "Sorts the results using OData syntax",
          args: { name: "orderby" },
        },
        {
          name: "--skip-token",
          description: "Continuation Token",
          args: { name: "skip-token" },
        },
      ],
    },
    {
      name: "list-synchronization",
      description: "List synchronizations of a share",
      options: [
        {
          name: "--account-name",
          description: "The name of the share account",
          args: { name: "account-name" },
          isRequired: true,
        },
        {
          name: ["--share-name", "--name", "-n"],
          description: "The name of the share",
          args: { name: "share-name" },
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
          name: "--filter",
          description: "Filters the results using OData syntax",
          args: { name: "filter" },
        },
        {
          name: "--orderby",
          description: "Sorts the results using OData syntax",
          args: { name: "orderby" },
        },
        {
          name: "--skip-token",
          description: "Continuation token",
          args: { name: "skip-token" },
        },
      ],
    },
    {
      name: "list-synchronization-detail",
      description: "List synchronization details",
      options: [
        {
          name: "--account-name",
          description: "The name of the share account",
          args: { name: "account-name" },
          isRequired: true,
        },
        {
          name: ["--share-name", "--name", "-n"],
          description: "The name of the share",
          args: { name: "share-name" },
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
          name: "--consumer-email",
          description: "Email of the user who created the synchronization",
          args: { name: "consumer-email" },
        },
        {
          name: "--consumer-name",
          description: "Name of the user who created the synchronization",
          args: { name: "consumer-name" },
        },
        {
          name: "--consumer-tenant-name",
          description:
            "Tenant name of the consumer who created the synchronization",
          args: { name: "consumer-tenant-name" },
        },
        {
          name: "--duration-ms",
          description: "Synchronization duration",
          args: { name: "duration-ms" },
        },
        {
          name: "--end-time",
          description: "End time of synchronization",
          args: { name: "end-time" },
        },
        {
          name: "--filter",
          description: "Filters the results using OData syntax",
          args: { name: "filter" },
        },
        {
          name: "--message",
          description: "Message of synchronization",
          args: { name: "message" },
        },
        {
          name: "--orderby",
          description: "Sorts the results using OData syntax",
          args: { name: "orderby" },
        },
        {
          name: "--skip-token",
          description: "Continuation token",
          args: { name: "skip-token" },
        },
        {
          name: "--start-time",
          description: "Start time of synchronization",
          args: { name: "start-time" },
        },
        {
          name: "--status",
          description: "Raw Status",
          args: { name: "status" },
        },
        {
          name: "--synchronization-id",
          description: "Synchronization id",
          args: { name: "synchronization-id" },
        },
      ],
    },
    {
      name: "show",
      description: "Get a share",
      options: [
        {
          name: "--account-name",
          description: "The name of the share account",
          args: { name: "account-name" },
        },
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: ["--share-name", "--name", "-n"],
          description: "The name of the share to retrieve",
          args: { name: "share-name" },
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
      name: "wait",
      description:
        "Place the CLI in a waiting state until a condition of the datashare is met",
      options: [
        {
          name: "--account-name",
          description: "The name of the share account",
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
          name: ["--share-name", "--name", "-n"],
          description: "The name of the share to retrieve",
          args: { name: "share-name" },
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
      name: "data-set",
      description: "Manage data set with datashare",
      subcommands: [
        {
          name: "create",
          description: "Create a DataSet",
          options: [
            {
              name: "--account-name",
              description: "The name of the share account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: "--data-set",
              description:
                "The new data set information. Expected value: json-string/json-file/@json-file",
              args: { name: "data-set" },
              isRequired: true,
            },
            {
              name: ["--data-set-name", "--name", "-n"],
              description: "The name of the dataSet",
              args: { name: "data-set-name" },
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
              description: "The name of the share to add the data set to",
              args: { name: "share-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a DataSet in a share",
          options: [
            {
              name: "--account-name",
              description: "The name of the share account",
              args: { name: "account-name" },
            },
            {
              name: ["--data-set-name", "--name", "-n"],
              description: "The name of the dataSet",
              args: { name: "data-set-name" },
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
              name: "--share-name",
              description: "The name of the share",
              args: { name: "share-name" },
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
          description: "List DataSets in a share",
          options: [
            {
              name: "--account-name",
              description: "The name of the share account",
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
              name: "--share-name",
              description: "The name of the share",
              args: { name: "share-name" },
              isRequired: true,
            },
            {
              name: "--filter",
              description: "Filters the results using OData syntax",
              args: { name: "filter" },
            },
            {
              name: "--orderby",
              description: "Sorts the results using OData syntax",
              args: { name: "orderby" },
            },
            {
              name: "--skip-token",
              description: "Continuation token",
              args: { name: "skip-token" },
            },
          ],
        },
        {
          name: "show",
          description: "Get a DataSet in a share",
          options: [
            {
              name: "--account-name",
              description: "The name of the share account",
              args: { name: "account-name" },
            },
            {
              name: ["--data-set-name", "--name", "-n"],
              description: "The name of the dataSet",
              args: { name: "data-set-name" },
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
              name: "--share-name",
              description: "The name of the share",
              args: { name: "share-name" },
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
            "Place the CLI in a waiting state until a condition of the datashare data-set is met",
          options: [
            {
              name: "--account-name",
              description: "The name of the share account",
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
            {
              name: ["--data-set-name", "--name", "-n"],
              description: "The name of the dataSet",
              args: { name: "data-set-name" },
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
              name: "--share-name",
              description: "The name of the share",
              args: { name: "share-name" },
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
      name: "data-set-mapping",
      description: "Manage data set mapping with datashare",
      subcommands: [
        {
          name: "create",
          description: "Create a DataSetMapping",
          options: [
            {
              name: "--account-name",
              description: "The name of the share account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--data-set-mapping-name", "--name", "-n"],
              description: "The name of the data set mapping to be created",
              args: { name: "data-set-mapping-name" },
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
              name: "--share-subscription-name",
              description:
                "The name of the share subscription which will hold the data set sink",
              args: { name: "share-subscription-name" },
              isRequired: true,
            },
            {
              name: "--adls-gen2-file-data-set-mapping",
              description: "An ADLS Gen2 file data set mapping",
              args: { name: "adls-gen2-file-data-set-mapping" },
            },
            {
              name: "--adls-gen2-file-system-data-set-mapping",
              description: "An ADLS Gen2 file system data set mapping",
              args: { name: "adls-gen2-file-system-data-set-mapping" },
            },
            {
              name: "--adls-gen2-folder-data-set-mapping",
              description: "An ADLS Gen2 folder data set mapping",
              args: { name: "adls-gen2-folder-data-set-mapping" },
            },
            {
              name: "--blob-container-data-set-mapping",
              description: "A Blob container data set mapping",
              args: { name: "blob-container-data-set-mapping" },
            },
            {
              name: "--blob-data-set-mapping",
              description: "A Blob data set mapping",
              args: { name: "blob-data-set-mapping" },
            },
            {
              name: "--blob-folder-data-set-mapping",
              description: "A Blob folder data set mapping",
              args: { name: "blob-folder-data-set-mapping" },
            },
            {
              name: "--kusto-cluster-data-set-mapping",
              description: "A Kusto cluster data set mapping",
              args: { name: "kusto-cluster-data-set-mapping" },
            },
            {
              name: "--kusto-database-data-set-mapping",
              description: "A Kusto database data set mapping",
              args: { name: "kusto-database-data-set-mapping" },
            },
            {
              name: "--kusto-table-data-set-mapping",
              description: "A Kusto database data set mapping",
              args: { name: "kusto-table-data-set-mapping" },
            },
            {
              name: "--sqldb-table-data-set-mapping",
              description: "A SQL DB Table data set mapping",
              args: { name: "sqldb-table-data-set-mapping" },
            },
            {
              name: "--sqldw-table-data-set-mapping",
              description: "A SQL DW Table data set mapping",
              args: { name: "sqldw-table-data-set-mapping" },
            },
            {
              name: "--synapse-workspace-sql-pool-table-data-set-mapping",
              description:
                "A Synapse Workspace Sql Pool Table data set mapping",
              args: {
                name: "synapse-workspace-sql-pool-table-data-set-mapping",
              },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a DataSetMapping in a shareSubscription",
          options: [
            {
              name: "--account-name",
              description: "The name of the share account",
              args: { name: "account-name" },
            },
            {
              name: ["--data-set-mapping-name", "--name", "-n"],
              description: "The name of the dataSetMapping",
              args: { name: "data-set-mapping-name" },
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
              name: "--share-subscription-name",
              description: "The name of the shareSubscription",
              args: { name: "share-subscription-name" },
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
          description: "List DataSetMappings in a share subscription",
          options: [
            {
              name: "--account-name",
              description: "The name of the share account",
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
              name: "--share-subscription-name",
              description: "The name of the share subscription",
              args: { name: "share-subscription-name" },
              isRequired: true,
            },
            {
              name: "--filter",
              description: "Filters the results using OData syntax",
              args: { name: "filter" },
            },
            {
              name: "--orderby",
              description: "Sorts the results using OData syntax",
              args: { name: "orderby" },
            },
            {
              name: "--skip-token",
              description: "Continuation token",
              args: { name: "skip-token" },
            },
          ],
        },
        {
          name: "show",
          description: "Get a DataSetMapping in a shareSubscription",
          options: [
            {
              name: "--account-name",
              description: "The name of the share account",
              args: { name: "account-name" },
            },
            {
              name: ["--data-set-mapping-name", "--name", "-n"],
              description: "The name of the dataSetMapping",
              args: { name: "data-set-mapping-name" },
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
              name: "--share-subscription-name",
              description: "The name of the shareSubscription",
              args: { name: "share-subscription-name" },
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
      name: "email-registration",
      description: "Manage email registration with datashare",
      subcommands: [
        {
          name: "activate-email",
          description: "Activate the email registration for the current tenant",
          options: [
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: "--activation-code",
              description: "Activation code for the registration",
              args: { name: "activation-code" },
            },
          ],
        },
        {
          name: "register-email",
          description: "Register an email for the current tenant",
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
      name: "invitation",
      description: "Manage invitation with datashare",
      subcommands: [
        {
          name: "create",
          description: "Create an invitation",
          options: [
            {
              name: "--account-name",
              description: "The name of the share account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--invitation-name", "--name", "-n"],
              description: "The name of the invitation",
              args: { name: "invitation-name" },
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
              description: "The name of the share to send the invitation for",
              args: { name: "share-name" },
              isRequired: true,
            },
            {
              name: "--expiration-date",
              description:
                "The expiration date for the invitation and share subscription",
              args: { name: "expiration-date" },
            },
            {
              name: "--target-active-directory-id",
              description:
                "The target Azure AD Id. Can't be combined with email",
              args: { name: "target-active-directory-id" },
            },
            {
              name: "--target-email",
              description: "The email the invitation is directed to",
              args: { name: "target-email" },
            },
            {
              name: "--target-object-id",
              description:
                "The target user or application Id that invitation is being sent to. Must be specified along TargetActiveDirectoryId. This enables sending invitations to specific users or applications in an AD tenant",
              args: { name: "target-object-id" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete an invitation in a share",
          options: [
            {
              name: "--account-name",
              description: "The name of the share account",
              args: { name: "account-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--invitation-name", "--name", "-n"],
              description: "The name of the invitation",
              args: { name: "invitation-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--share-name",
              description: "The name of the share",
              args: { name: "share-name" },
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
          description: "List invitations in a share",
          options: [
            {
              name: "--account-name",
              description: "The name of the share account",
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
              name: "--share-name",
              description: "The name of the share",
              args: { name: "share-name" },
              isRequired: true,
            },
            {
              name: "--filter",
              description: "Filters the results using OData syntax",
              args: { name: "filter" },
            },
            {
              name: "--orderby",
              description: "Sorts the results using OData syntax",
              args: { name: "orderby" },
            },
            {
              name: "--skip-token",
              description: "The continuation token",
              args: { name: "skip-token" },
            },
          ],
        },
        {
          name: "show",
          description: "Get an invitation in a share",
          options: [
            {
              name: "--account-name",
              description: "The name of the share account",
              args: { name: "account-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--invitation-name", "--name", "-n"],
              description: "The name of the invitation",
              args: { name: "invitation-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--share-name",
              description: "The name of the share",
              args: { name: "share-name" },
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
      name: "provider-share-subscription",
      description: "Manage provider share subscription with datashare",
      subcommands: [
        {
          name: "adjust",
          description:
            "Adjust a share subscription's expiration date in a provider share",
          options: [
            {
              name: "--account-name",
              description: "The name of the share account",
              args: { name: "account-name" },
            },
            {
              name: "--expiration-date",
              description:
                "Expiration date of the share subscription in UTC format",
              args: { name: "expiration-date" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--provider-share-subscription-id",
              description: "To locate shareSubscription",
              args: { name: "provider-share-subscription-id" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--share-name",
              description: "The name of the share",
              args: { name: "share-name" },
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
          description: "List share subscriptions in a provider share",
          options: [
            {
              name: "--account-name",
              description: "The name of the share account",
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
              name: "--share-name",
              description: "The name of the share",
              args: { name: "share-name" },
              isRequired: true,
            },
            {
              name: "--skip-token",
              description: "Continuation Token",
              args: { name: "skip-token" },
            },
          ],
        },
        {
          name: "reinstate",
          description: "Reinstate share subscription in a provider share",
          options: [
            {
              name: "--account-name",
              description: "The name of the share account",
              args: { name: "account-name" },
            },
            {
              name: "--expiration-date",
              description:
                "Expiration date of the share subscription in UTC format",
              args: { name: "expiration-date" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--provider-share-subscription-id",
              description: "To locate shareSubscription",
              args: { name: "provider-share-subscription-id" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--share-name",
              description: "The name of the share",
              args: { name: "share-name" },
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
          description: "Revoke share subscription in a provider share",
          options: [
            {
              name: "--account-name",
              description: "The name of the share account",
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
              name: "--provider-share-subscription-id",
              description: "To locate shareSubscription",
              args: { name: "provider-share-subscription-id" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--share-name",
              description: "The name of the share",
              args: { name: "share-name" },
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
          description: "Get share subscription in a provider share",
          options: [
            {
              name: "--account-name",
              description: "The name of the share account",
              args: { name: "account-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--provider-share-subscription-id",
              description: "To locate shareSubscription",
              args: { name: "provider-share-subscription-id" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--share-name",
              description: "The name of the share",
              args: { name: "share-name" },
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
            "Place the CLI in a waiting state until a condition of the datashare provider-share-subscription is met",
          options: [
            {
              name: "--account-name",
              description: "The name of the share account",
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
              name: "--provider-share-subscription-id",
              description: "To locate shareSubscription",
              args: { name: "provider-share-subscription-id" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--share-name",
              description: "The name of the share",
              args: { name: "share-name" },
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
      name: "share-subscription",
      description: "Manage share subscription with datashare",
      subcommands: [
        {
          name: "cancel-synchronization",
          description: "Request to cancel a synchronization",
          options: [
            {
              name: "--synchronization-id",
              description: "Synchronization id",
              args: { name: "synchronization-id" },
              isRequired: true,
            },
            {
              name: "--account-name",
              description: "The name of the share account",
              args: { name: "account-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--share-subscription-name", "--name", "-n"],
              description: "The name of the shareSubscription",
              args: { name: "share-subscription-name" },
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
          ],
        },
        {
          name: "create",
          description: "Create a shareSubscription in an account",
          options: [
            {
              name: "--account-name",
              description: "The name of the share account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: "--invitation-id",
              description: "The invitation id",
              args: { name: "invitation-id" },
              isRequired: true,
            },
            {
              name: ["--share-subscription-name", "--name", "-n"],
              description: "The name of the shareSubscription",
              args: { name: "share-subscription-name" },
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
              name: "--source-share-location",
              description: "Source share location",
              args: { name: "source-share-location" },
              isRequired: true,
            },
            {
              name: "--expiration-date",
              description: "The expiration date of the share subscription",
              args: { name: "expiration-date" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a shareSubscription in an account",
          options: [
            {
              name: "--account-name",
              description: "The name of the share account",
              args: { name: "account-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--share-subscription-name", "--name", "-n"],
              description: "The name of the shareSubscription",
              args: { name: "share-subscription-name" },
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
          description: "List share subscriptions in an account",
          options: [
            {
              name: "--account-name",
              description: "The name of the share account",
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
              name: "--filter",
              description: "Filters the results using OData syntax",
              args: { name: "filter" },
            },
            {
              name: "--orderby",
              description: "Sorts the results using OData syntax",
              args: { name: "orderby" },
            },
            {
              name: "--skip-token",
              description: "Continuation Token",
              args: { name: "skip-token" },
            },
          ],
        },
        {
          name: "list-source-share-synchronization-setting",
          description: "Get synchronization settings set on a share",
          options: [
            {
              name: "--account-name",
              description: "The name of the share account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--share-subscription-name", "--name", "-n"],
              description: "The name of the shareSubscription",
              args: { name: "share-subscription-name" },
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
              name: "--skip-token",
              description: "Continuation token",
              args: { name: "skip-token" },
            },
          ],
        },
        {
          name: "list-synchronization",
          description: "List synchronizations of a share subscription",
          options: [
            {
              name: "--account-name",
              description: "The name of the share account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--share-subscription-name", "--name", "-n"],
              description: "The name of the share subscription",
              args: { name: "share-subscription-name" },
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
              name: "--filter",
              description: "Filters the results using OData syntax",
              args: { name: "filter" },
            },
            {
              name: "--orderby",
              description: "Sorts the results using OData syntax",
              args: { name: "orderby" },
            },
            {
              name: "--skip-token",
              description: "Continuation token",
              args: { name: "skip-token" },
            },
          ],
        },
        {
          name: "list-synchronization-detail",
          description: "List synchronization details",
          options: [
            {
              name: "--account-name",
              description: "The name of the share account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--share-subscription-name", "--name", "-n"],
              description: "The name of the share subscription",
              args: { name: "share-subscription-name" },
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
              name: "--synchronization-id",
              description: "Synchronization id",
              args: { name: "synchronization-id" },
              isRequired: true,
            },
            {
              name: "--filter",
              description: "Filters the results using OData syntax",
              args: { name: "filter" },
            },
            {
              name: "--orderby",
              description: "Sorts the results using OData syntax",
              args: { name: "orderby" },
            },
            {
              name: "--skip-token",
              description: "Continuation token",
              args: { name: "skip-token" },
            },
          ],
        },
        {
          name: "show",
          description: "Get a shareSubscription in an account",
          options: [
            {
              name: "--account-name",
              description: "The name of the share account",
              args: { name: "account-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--share-subscription-name", "--name", "-n"],
              description: "The name of the shareSubscription",
              args: { name: "share-subscription-name" },
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
          name: "synchronize",
          description: "Initiate a copy",
          options: [
            {
              name: "--account-name",
              description: "The name of the share account",
              args: { name: "account-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--share-subscription-name", "--name", "-n"],
              description: "The name of share subscription",
              args: { name: "share-subscription-name" },
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
              name: "--synchronization-mode",
              description:
                "Mode of synchronization used in triggers and snapshot sync. Incremental by default",
              args: {
                name: "synchronization-mode",
                suggestions: ["FullSync", "Incremental"],
              },
            },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the datashare share-subscription is met",
          options: [
            {
              name: "--account-name",
              description: "The name of the share account",
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
              name: ["--share-subscription-name", "--name", "-n"],
              description: "The name of the shareSubscription",
              args: { name: "share-subscription-name" },
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
      name: "synchronization-setting",
      description: "Manage synchronization setting with datashare",
      subcommands: [
        {
          name: "create",
          description: "Create a synchronizationSetting",
          options: [
            {
              name: "--account-name",
              description: "The name of the share account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--synchronization-setting-name", "--name", "-n"],
              description: "The name of the synchronizationSetting",
              args: { name: "synchronization-setting-name" },
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
                "The name of the share to add the synchronization setting to",
              args: { name: "share-name" },
              isRequired: true,
            },
            {
              name: "--scheduled-synchronization-setting",
              description:
                "A type of synchronization setting based on schedule",
              args: { name: "scheduled-synchronization-setting" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a synchronizationSetting in a share",
          options: [
            {
              name: "--account-name",
              description: "The name of the share account",
              args: { name: "account-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--synchronization-setting-name", "--name", "-n"],
              description: "The name of the synchronizationSetting",
              args: { name: "synchronization-setting-name" },
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
              name: "--share-name",
              description: "The name of the share",
              args: { name: "share-name" },
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
          description: "List synchronizationSettings in a share",
          options: [
            {
              name: "--account-name",
              description: "The name of the share account",
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
              name: "--share-name",
              description: "The name of the share",
              args: { name: "share-name" },
              isRequired: true,
            },
            {
              name: "--skip-token",
              description: "Continuation token",
              args: { name: "skip-token" },
            },
          ],
        },
        {
          name: "show",
          description: "Get a synchronizationSetting in a share",
          options: [
            {
              name: "--account-name",
              description: "The name of the share account",
              args: { name: "account-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--synchronization-setting-name", "--name", "-n"],
              description: "The name of the synchronizationSetting",
              args: { name: "synchronization-setting-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--share-name",
              description: "The name of the share",
              args: { name: "share-name" },
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
            "Place the CLI in a waiting state until a condition of the datashare synchronization-setting is met",
          options: [
            {
              name: "--account-name",
              description: "The name of the share account",
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
              name: ["--synchronization-setting-name", "--name", "-n"],
              description: "The name of the synchronizationSetting",
              args: { name: "synchronization-setting-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--share-name",
              description: "The name of the share",
              args: { name: "share-name" },
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
      name: "trigger",
      description: "Manage trigger with datashare",
      subcommands: [
        {
          name: "create",
          description: "Create a Trigger",
          options: [
            {
              name: "--account-name",
              description: "The name of the share account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--trigger-name", "--name", "-n"],
              description: "The name of the trigger",
              args: { name: "trigger-name" },
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
              name: "--share-subscription-name",
              description:
                "The name of the share subscription which will hold the data set sink",
              args: { name: "share-subscription-name" },
              isRequired: true,
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--scheduled-trigger",
              description: "A type of trigger based on schedule",
              args: { name: "scheduled-trigger" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a Trigger in a shareSubscription",
          options: [
            {
              name: "--account-name",
              description: "The name of the share account",
              args: { name: "account-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--trigger-name", "--name", "-n"],
              description: "The name of the trigger",
              args: { name: "trigger-name" },
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
              name: "--share-subscription-name",
              description: "The name of the shareSubscription",
              args: { name: "share-subscription-name" },
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
          description: "List Triggers in a share subscription",
          options: [
            {
              name: "--account-name",
              description: "The name of the share account",
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
              name: "--share-subscription-name",
              description: "The name of the share subscription",
              args: { name: "share-subscription-name" },
              isRequired: true,
            },
            {
              name: "--skip-token",
              description: "Continuation token",
              args: { name: "skip-token" },
            },
          ],
        },
        {
          name: "show",
          description: "Get a Trigger in a shareSubscription",
          options: [
            {
              name: "--account-name",
              description: "The name of the share account",
              args: { name: "account-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--trigger-name", "--name", "-n"],
              description: "The name of the trigger",
              args: { name: "trigger-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--share-subscription-name",
              description: "The name of the shareSubscription",
              args: { name: "share-subscription-name" },
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
            "Place the CLI in a waiting state until a condition of the datashare trigger is met",
          options: [
            {
              name: "--account-name",
              description: "The name of the share account",
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
              name: ["--trigger-name", "--name", "-n"],
              description: "The name of the trigger",
              args: { name: "trigger-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--share-subscription-name",
              description: "The name of the shareSubscription",
              args: { name: "share-subscription-name" },
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
