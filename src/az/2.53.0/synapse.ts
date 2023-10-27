const completion: Fig.Spec = {
  name: "synapse",
  description: "Manage and operate Synapse Workspace, Spark Pool, SQL Pool",
  subcommands: [
    {
      name: "activity-run",
      description: "Synapse activity-run",
      subcommands: [
        {
          name: "query-by-pipeline-run",
          description: "Query activity runs based on input filter conditions",
          options: [
            {
              name: "--last-updated-after",
              description:
                "The time at or after which the run event was updated in 'ISO 8601' format",
              args: { name: "last-updated-after" },
              isRequired: true,
            },
            {
              name: "--last-updated-before",
              description:
                "The time at or before which the run event was updated in 'ISO 8601' format",
              args: { name: "last-updated-before" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The pipeline name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--run-id",
              description: "The pipeline run identifier",
              args: { name: "run-id" },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
              isRequired: true,
            },
            {
              name: "--continuation-token",
              description:
                "The continuation token for getting the next page of results. Null for first page",
              args: { name: "continuation-token" },
            },
            {
              name: "--filters",
              description: "List of filters",
              args: { name: "filters" },
            },
            {
              name: "--order-by",
              description: "List of OrderBy option",
              args: { name: "order-by" },
            },
          ],
        },
      ],
    },
    {
      name: "ad-only-auth",
      description:
        "Manage Azure Active Directly only Authentication settings for this Synapse workspace",
      subcommands: [
        {
          name: "disable",
          description:
            "Disable Azure Active Directly only Authentication for this Synapse workspace",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The name of the workspace",
              args: { name: "workspace-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "enable",
          description:
            "Enable Azure Active Directly only Authentication for this Synapse workspace",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The name of the workspace",
              args: { name: "workspace-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "get",
          description:
            "Get a specific Azure Active Directly only Authentication property",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The name of the workspace",
              args: { name: "workspace-name" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "data-flow",
      description: "Manage Synapse's data flows",
      subcommands: [
        {
          name: "create",
          description: "Create a data flow",
          options: [
            {
              name: "--file",
              description:
                "Properties may be supplied from a JSON file using the @{path} syntax or a JSON string",
              args: { name: "file" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The data flow name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
              isRequired: true,
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a data flow",
          options: [
            {
              name: ["--name", "-n"],
              description: "The data flow name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
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
          description: "List data flows",
          options: [
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "set",
          description: "Set an exist data flow",
          options: [
            {
              name: "--file",
              description:
                "Properties may be supplied from a JSON file using the @{path} syntax or a JSON string",
              args: { name: "file" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The data flow name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
              isRequired: true,
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
          ],
        },
        {
          name: "show",
          description: "Get a data flow",
          options: [
            {
              name: ["--name", "-n"],
              description: "The data flow name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "dataset",
      description: "Manage Synapse's datasets",
      subcommands: [
        {
          name: "create",
          description: "Create a dataset",
          options: [
            {
              name: "--file",
              description:
                "Properties may be supplied from a JSON file using the @{path} syntax or a JSON string",
              args: { name: "file" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The dataset name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
              isRequired: true,
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a dataset",
          options: [
            {
              name: ["--name", "-n"],
              description: "The dataset name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
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
          description: "List datasets",
          options: [
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "set",
          description: "Update an exist dataset",
          options: [
            {
              name: "--file",
              description:
                "Properties may be supplied from a JSON file using the @{path} syntax or a JSON string",
              args: { name: "file" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The dataset name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
              isRequired: true,
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
          ],
        },
        {
          name: "show",
          description: "Get a dataset",
          options: [
            {
              name: ["--name", "-n"],
              description: "The dataset name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update",
          description: "Update an exist dataset",
          options: [
            {
              name: "--file",
              description:
                "Properties may be supplied from a JSON file using the @{path} syntax or a JSON string",
              args: { name: "file" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The dataset name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
              isRequired: true,
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
          ],
        },
      ],
    },
    {
      name: "integration-runtime",
      description: "Manage Synapse's integration runtimes",
      subcommands: [
        {
          name: "create",
          description: "Create an integration runtime",
          options: [
            {
              name: ["--name", "-n"],
              description: "The integration runtime name",
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
              name: "--type",
              description: "The integration runtime type",
              args: { name: "type", suggestions: ["Managed", "SelfHosted"] },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
              isRequired: true,
            },
            {
              name: "--compute-type",
              description:
                "Compute type of the data flow cluster which will execute data flow job",
              args: {
                name: "compute-type",
                suggestions: ["ComputeOptimized", "General", "MemoryOptimized"],
              },
            },
            {
              name: "--core-count",
              description:
                "Core count of the data flow cluster which will execute data flow job",
              args: { name: "core-count" },
            },
            {
              name: "--description",
              description: "The integration runtime description",
              args: { name: "description" },
            },
            {
              name: "--if-match",
              description:
                "ETag of the integration runtime entity. Should only be specified for update, for which it should match existing entity or can be * for unconditional update",
              args: { name: "if-match" },
            },
            {
              name: ["--location", "-l"],
              description: "The integration runtime location",
              args: { name: "location" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--time-to-live",
              description:
                "Time to live (in minutes) setting of the data flow cluster which will execute data flow job",
              args: { name: "time-to-live" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete an integration runtime",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The integration runtime name",
              args: { name: "name" },
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
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "get-connection-info",
          description: "Get the integration runtime connection infomation",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The integration runtime name",
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
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "get-monitoring-data",
          description: "Get metric data for a self-hosted integration runtime",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The integration runtime name",
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
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "get-status",
          description:
            "Gets detailed status information for an integration runtime",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The integration runtime name",
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
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "list",
          description: "List integration runtimes",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list-auth-key",
          description: "Get keys for a self-hosted integration runtime",
          options: [
            {
              name: ["--name", "-n"],
              description: "The integration runtime name",
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
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "regenerate-auth-key",
          description: "Regenerate self-hosted integration runtime key",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--key-name",
              description: "The name of the authentication key to regenerate",
              args: { name: "key-name", suggestions: ["authKey1", "authKey2"] },
            },
            {
              name: ["--name", "-n"],
              description: "The integration runtime name",
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
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "show",
          description: "Get an integration runtime",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--if-none-match",
              description:
                "ETag of the integration runtime entity. Should only be specified for get. If the ETag matches the existing entity tag, or if * was provided, then no content will be returned. Default value is None",
              args: { name: "if-none-match" },
            },
            {
              name: ["--name", "-n"],
              description: "The integration runtime name",
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
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "start",
          description: "Start an SSIS integration runtime",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The integration runtime name",
              args: { name: "name" },
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
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "stop",
          description: "Stop an SSIS integration runtime",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The integration runtime name",
              args: { name: "name" },
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
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "sync-credentials",
          description:
            "Synchronize credentials among integration runtime nodes",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The integration runtime name",
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
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "update",
          description: "Update an integration runtime",
          options: [
            {
              name: "--auto-update",
              description:
                "Enable or disable the self-hosted integration runtime auto-update",
              args: { name: "auto-update", suggestions: ["Off", "On"] },
              isRequired: true,
            },
            {
              name: "--update-delay-offset",
              description:
                "The time of the day for the self-hosted integration runtime auto-update",
              args: { name: "update-delay-offset" },
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
              description: "The integration runtime name",
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
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "upgrade",
          description: "Upgrade self-hosted integration runtime",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The integration runtime name",
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
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of a integration runtime is met",
          options: [
            {
              name: ["--name", "-n"],
              description: "The integration runtime name",
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
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
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
              name: "--if-none-match",
              description:
                "ETag of the integration runtime entity. Should only be specified for get. If the ETag matches the existing entity tag, or if * was provided, then no content will be returned. Default value is None",
              args: { name: "if-none-match" },
            },
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
        {
          name: "managed",
          description:
            "Manage integration runtime with synapse sub group managed",
          subcommands: [
            {
              name: "create",
              description: "Create an managed integration runtime",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The integration runtime name",
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
                  name: "--workspace-name",
                  description: "The workspace name",
                  args: { name: "workspace-name" },
                  isRequired: true,
                },
                {
                  name: "--compute-type",
                  description:
                    "Compute type of the data flow cluster which will execute data flow job",
                  args: {
                    name: "compute-type",
                    suggestions: [
                      "ComputeOptimized",
                      "General",
                      "MemoryOptimized",
                    ],
                  },
                },
                {
                  name: "--core-count",
                  description:
                    "Core count of the data flow cluster which will execute data flow job",
                  args: { name: "core-count" },
                },
                {
                  name: "--description",
                  description: "The integration runtime description",
                  args: { name: "description" },
                },
                {
                  name: "--if-match",
                  description:
                    "ETag of the integration runtime entity. Should only be specified for update, for which it should match existing entity or can be * for unconditional update",
                  args: { name: "if-match" },
                },
                {
                  name: ["--location", "-l"],
                  description: "The integration runtime location",
                  args: { name: "location" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--time-to-live",
                  description:
                    "Time to live (in minutes) setting of the data flow cluster which will execute data flow job",
                  args: { name: "time-to-live" },
                },
              ],
            },
          ],
        },
        {
          name: "self-hosted",
          description:
            "Manage integration runtime with synapse sub group self-hosted",
          subcommands: [
            {
              name: "create",
              description: "Create an self-hosted integration runtime",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The integration runtime name",
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
                  name: "--workspace-name",
                  description: "The workspace name",
                  args: { name: "workspace-name" },
                  isRequired: true,
                },
                {
                  name: "--description",
                  description: "The integration runtime description",
                  args: { name: "description" },
                },
                {
                  name: "--if-match",
                  description:
                    "ETag of the integration runtime entity. Should only be specified for update, for which it should match existing entity or can be * for unconditional update",
                  args: { name: "if-match" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "integration-runtime-node",
      description: "Manage Synapse's self-hosted integration runtime nodes",
      subcommands: [
        {
          name: "delete",
          description: "Remove a self-hosted integration runtime node",
          options: [
            {
              name: "--node-name",
              description: "The integration runtime node name",
              args: { name: "node-name" },
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
              description: "The integration runtime name",
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
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "get-ip-address",
          description: "Get self-hosted integration runtime node ip",
          options: [
            {
              name: "--node-name",
              description: "The integration runtime node name",
              args: { name: "node-name" },
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
              description: "The integration runtime name",
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
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "show",
          description: "Get self-hosted integration runtime node information",
          options: [
            {
              name: "--node-name",
              description: "The integration runtime node name",
              args: { name: "node-name" },
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
              description: "The integration runtime name",
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
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "update",
          description: "Update self-hosted integration runtime node",
          options: [
            {
              name: "--auto-update",
              description:
                "Enable or disable the self-hosted integration runtime auto-update",
              args: { name: "auto-update", suggestions: ["Off", "On"] },
              isRequired: true,
            },
            {
              name: "--node-name",
              description: "The integration runtime node name",
              args: { name: "node-name" },
              isRequired: true,
            },
            {
              name: "--update-delay-offset",
              description:
                "The time of the day for the self-hosted integration runtime auto-update",
              args: { name: "update-delay-offset" },
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
              description: "The integration runtime name",
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
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
      ],
    },
    {
      name: "kql-script",
      description: "Manage script with kusto",
      subcommands: [
        {
          name: "create",
          description: "Creates a KQL script",
          options: [
            {
              name: ["--file", "-f"],
              description: "The KQL query file path",
              args: { name: "file" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The name of the KQL script",
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
              name: "--workspace-name",
              description: "The name of the workspace",
              args: { name: "workspace-name" },
              isRequired: true,
            },
            {
              name: "--kusto-database-name",
              description: "The name of the Kusto database",
              args: { name: "kusto-database-name" },
            },
            {
              name: "--kusto-pool-name",
              description: "The name of the Kusto pool",
              args: { name: "kusto-pool-name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes a KQL script",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the KQL script",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The name of the workspace",
              args: { name: "workspace-name" },
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
          name: "export",
          description: "Export KQL scripts",
          options: [
            {
              name: "--output-folder",
              description: "The name of the output folder",
              args: { name: "output-folder" },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The name of the workspace",
              args: { name: "workspace-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The name of the KQL script",
              args: { name: "name" },
            },
          ],
        },
        {
          name: "import",
          description: "Creates a KQL script",
          options: [
            {
              name: ["--file", "-f"],
              description: "The KQL query file path",
              args: { name: "file" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The name of the KQL script",
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
              name: "--workspace-name",
              description: "The name of the workspace",
              args: { name: "workspace-name" },
              isRequired: true,
            },
            {
              name: "--kusto-database-name",
              description: "The name of the Kusto database",
              args: { name: "kusto-database-name" },
            },
            {
              name: "--kusto-pool-name",
              description: "The name of the Kusto pool",
              args: { name: "kusto-pool-name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
          ],
        },
        {
          name: "list",
          description: "List KQL scripts",
          options: [
            {
              name: "--workspace-name",
              description: "The name of the workspace",
              args: { name: "workspace-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description: "Gets a KQL script",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the KQL script",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The name of the workspace",
              args: { name: "workspace-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of a KQL script is met",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the KQL script",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The name of the workspace",
              args: { name: "workspace-name" },
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
      name: "kusto",
      description: "Manage synapse kusto",
      subcommands: [
        {
          name: "attached-database-configuration",
          description:
            "Manage kusto pool attached database configuration with synapse",
          subcommands: [
            {
              name: "create",
              description: "Create an attached database configuration",
              options: [
                {
                  name: "--attached-database-configuration-name",
                  description:
                    "The name of the attached database configuration",
                  args: { name: "attached-database-configuration-name" },
                  isRequired: true,
                },
                {
                  name: "--kusto-pool-name",
                  description: "The name of the Kusto pool",
                  args: { name: "kusto-pool-name" },
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
                  name: "--workspace-name",
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                  isRequired: true,
                },
                {
                  name: "--database-name",
                  description:
                    "The name of the database which you would like to attach, use * if you want to follow all current and future databases",
                  args: { name: "database-name" },
                },
                {
                  name: "--default-principals-modification-kind",
                  description: "The default principals modification kind",
                  args: {
                    name: "default-principals-modification-kind",
                    suggestions: ["None", "Replace", "Union"],
                  },
                },
                {
                  name: "--kusto-pool-resource-id",
                  description:
                    "The resource id of the kusto pool where the databases you would like to attach reside",
                  args: { name: "kusto-pool-resource-id" },
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
                  name: "--table-level-sharing-properties",
                  description: "Table level sharing specifications",
                  args: { name: "table-level-sharing-properties" },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Deletes the attached database configuration with the given name",
              options: [
                {
                  name: "--attached-database-configuration-name",
                  description:
                    "The name of the attached database configuration",
                  args: { name: "attached-database-configuration-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--kusto-pool-name",
                  description: "The name of the Kusto pool",
                  args: { name: "kusto-pool-name" },
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
                  name: "--workspace-name",
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
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
                "Returns the list of attached database configurations of the given Kusto Pool",
              options: [
                {
                  name: "--kusto-pool-name",
                  description: "The name of the Kusto pool",
                  args: { name: "kusto-pool-name" },
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
                  name: "--workspace-name",
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description: "Returns an attached database configuration",
              options: [
                {
                  name: "--attached-database-configuration-name",
                  description:
                    "The name of the attached database configuration",
                  args: { name: "attached-database-configuration-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--kusto-pool-name",
                  description: "The name of the Kusto pool",
                  args: { name: "kusto-pool-name" },
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
                  name: "--workspace-name",
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                },
              ],
            },
            {
              name: "update",
              description: "Update an attached database configuration",
              options: [
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add" },
                },
                {
                  name: "--attached-database-configuration-name",
                  description:
                    "The name of the attached database configuration",
                  args: { name: "attached-database-configuration-name" },
                },
                {
                  name: "--database-name",
                  description:
                    "The name of the database which you would like to attach, use * if you want to follow all current and future databases",
                  args: { name: "database-name" },
                },
                {
                  name: "--default-principals-modification-kind",
                  description: "The default principals modification kind",
                  args: {
                    name: "default-principals-modification-kind",
                    suggestions: ["None", "Replace", "Union"],
                  },
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
                  name: "--kusto-pool-name",
                  description: "The name of the Kusto pool",
                  args: { name: "kusto-pool-name" },
                },
                {
                  name: "--kusto-pool-resource-id",
                  description:
                    "The resource id of the kusto pool where the databases you would like to attach reside",
                  args: { name: "kusto-pool-resource-id" },
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
                  name: "--table-level-sharing-properties",
                  description: "Table level sharing specifications",
                  args: { name: "table-level-sharing-properties" },
                },
                {
                  name: "--workspace-name",
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                },
              ],
            },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition of the synapse kusto attached-database-configuration is met",
              options: [
                {
                  name: "--attached-database-configuration-name",
                  description:
                    "The name of the attached database configuration",
                  args: { name: "attached-database-configuration-name" },
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
                {
                  name: "--exists",
                  description: "Wait until the resource exists",
                },
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
                  name: "--kusto-pool-name",
                  description: "The name of the Kusto pool",
                  args: { name: "kusto-pool-name" },
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
                {
                  name: "--workspace-name",
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                },
              ],
            },
          ],
        },
        {
          name: "data-connection",
          description: "Manage kusto pool data connection with synapse",
          subcommands: [
            {
              name: "delete",
              description: "Deletes the data connection with the given name",
              options: [
                {
                  name: "--data-connection-name",
                  description: "The name of the data connection",
                  args: { name: "data-connection-name" },
                },
                {
                  name: "--database-name",
                  description: "The name of the database in the Kusto pool",
                  args: { name: "database-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--kusto-pool-name",
                  description: "The name of the Kusto pool",
                  args: { name: "kusto-pool-name" },
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
                  name: "--workspace-name",
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
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
                "Returns the list of data connections of the given Kusto pool database",
              options: [
                {
                  name: "--database-name",
                  description: "The name of the database in the Kusto pool",
                  args: { name: "database-name" },
                  isRequired: true,
                },
                {
                  name: "--kusto-pool-name",
                  description: "The name of the Kusto pool",
                  args: { name: "kusto-pool-name" },
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
                  name: "--workspace-name",
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description: "Returns a data connection",
              options: [
                {
                  name: "--data-connection-name",
                  description: "The name of the data connection",
                  args: { name: "data-connection-name" },
                },
                {
                  name: "--database-name",
                  description: "The name of the database in the Kusto pool",
                  args: { name: "database-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--kusto-pool-name",
                  description: "The name of the Kusto pool",
                  args: { name: "kusto-pool-name" },
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
                  name: "--workspace-name",
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                },
              ],
            },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition of the synapse kusto data-connection is met",
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
                {
                  name: "--data-connection-name",
                  description: "The name of the data connection",
                  args: { name: "data-connection-name" },
                },
                {
                  name: "--database-name",
                  description: "The name of the database in the Kusto pool",
                  args: { name: "database-name" },
                },
                { name: "--deleted", description: "Wait until deleted" },
                {
                  name: "--exists",
                  description: "Wait until the resource exists",
                },
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
                  name: "--kusto-pool-name",
                  description: "The name of the Kusto pool",
                  args: { name: "kusto-pool-name" },
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
                {
                  name: "--workspace-name",
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                },
              ],
            },
            {
              name: "event-grid",
              description:
                "Manage kusto pool data connection with synapse sub group event-grid",
              subcommands: [
                {
                  name: "create",
                  description: "Create a data connection",
                  options: [
                    {
                      name: "--data-connection-name",
                      description: "The name of the data connection",
                      args: { name: "data-connection-name" },
                      isRequired: true,
                    },
                    {
                      name: "--database-name",
                      description: "The name of the database in the Kusto pool",
                      args: { name: "database-name" },
                      isRequired: true,
                    },
                    {
                      name: "--kusto-pool-name",
                      description: "The name of the Kusto pool",
                      args: { name: "kusto-pool-name" },
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
                      name: "--workspace-name",
                      description: "The name of the workspace",
                      args: { name: "workspace-name" },
                      isRequired: true,
                    },
                    {
                      name: "--blob-storage-event-type",
                      description:
                        "The name of blob storage event type to process",
                      args: {
                        name: "blob-storage-event-type",
                        suggestions: [
                          "Microsoft.Storage.BlobCreated",
                          "Microsoft.Storage.BlobRenamed",
                        ],
                      },
                    },
                    {
                      name: "--consumer-group",
                      description: "The event hub consumer group",
                      args: { name: "consumer-group" },
                    },
                    {
                      name: "--data-format",
                      description:
                        "The data format of the message. Optionally the data format can be added to each message",
                      args: {
                        name: "data-format",
                        suggestions: [
                          "APACHEAVRO",
                          "AVRO",
                          "CSV",
                          "JSON",
                          "MULTIJSON",
                          "ORC",
                          "PARQUET",
                          "PSV",
                          "RAW",
                          "SCSV",
                          "SINGLEJSON",
                          "SOHSV",
                          "TSV",
                          "TSVE",
                          "TXT",
                          "W3CLOGFILE",
                        ],
                      },
                    },
                    {
                      name: "--event-hub-resource-id",
                      description:
                        "The resource ID where the event grid is configured to send events",
                      args: { name: "event-hub-resource-id" },
                    },
                    {
                      name: "--ignore-first-record",
                      description:
                        "A Boolean value that, if set to true, indicates that ingestion should ignore the first record of every file",
                      args: {
                        name: "ignore-first-record",
                        suggestions: ["false", "true"],
                      },
                    },
                    {
                      name: ["--location", "-l"],
                      description:
                        "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
                      args: { name: "location" },
                    },
                    {
                      name: "--mapping-rule-name",
                      description:
                        "The mapping rule to be used to ingest the data. Optionally the mapping information can be added to each message",
                      args: { name: "mapping-rule-name" },
                    },
                    {
                      name: "--no-wait",
                      description:
                        "Do not wait for the long-running operation to finish",
                    },
                    {
                      name: "--storage-account-resource-id",
                      description:
                        "The resource ID of the storage account where the data resides",
                      args: { name: "storage-account-resource-id" },
                    },
                    {
                      name: "--table-name",
                      description:
                        "The table where the data should be ingested. Optionally the table information can be added to each message",
                      args: { name: "table-name" },
                    },
                  ],
                },
                {
                  name: "update",
                  description: "Updates a data connection",
                  options: [
                    {
                      name: "--blob-storage-event-type",
                      description:
                        "The name of blob storage event type to process",
                      args: {
                        name: "blob-storage-event-type",
                        suggestions: [
                          "Microsoft.Storage.BlobCreated",
                          "Microsoft.Storage.BlobRenamed",
                        ],
                      },
                    },
                    {
                      name: "--consumer-group",
                      description: "The event hub consumer group",
                      args: { name: "consumer-group" },
                    },
                    {
                      name: "--data-connection-name",
                      description: "The name of the data connection",
                      args: { name: "data-connection-name" },
                    },
                    {
                      name: "--data-format",
                      description:
                        "The data format of the message. Optionally the data format can be added to each message",
                      args: {
                        name: "data-format",
                        suggestions: [
                          "APACHEAVRO",
                          "AVRO",
                          "CSV",
                          "JSON",
                          "MULTIJSON",
                          "ORC",
                          "PARQUET",
                          "PSV",
                          "RAW",
                          "SCSV",
                          "SINGLEJSON",
                          "SOHSV",
                          "TSV",
                          "TSVE",
                          "TXT",
                          "W3CLOGFILE",
                        ],
                      },
                    },
                    {
                      name: "--database-name",
                      description: "The name of the database in the Kusto pool",
                      args: { name: "database-name" },
                    },
                    {
                      name: "--event-hub-resource-id",
                      description:
                        "The resource ID where the event grid is configured to send events",
                      args: { name: "event-hub-resource-id" },
                    },
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids" },
                    },
                    {
                      name: "--ignore-first-record",
                      description:
                        "A Boolean value that, if set to true, indicates that ingestion should ignore the first record of every file",
                      args: {
                        name: "ignore-first-record",
                        suggestions: ["false", "true"],
                      },
                    },
                    {
                      name: "--kusto-pool-name",
                      description: "The name of the Kusto pool",
                      args: { name: "kusto-pool-name" },
                    },
                    {
                      name: ["--location", "-l"],
                      description:
                        "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
                      args: { name: "location" },
                    },
                    {
                      name: "--mapping-rule-name",
                      description:
                        "The mapping rule to be used to ingest the data. Optionally the mapping information can be added to each message",
                      args: { name: "mapping-rule-name" },
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
                      name: "--storage-account-resource-id",
                      description:
                        "The resource ID of the storage account where the data resides",
                      args: { name: "storage-account-resource-id" },
                    },
                    {
                      name: "--subscription",
                      description:
                        "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                      args: { name: "subscription" },
                    },
                    {
                      name: "--table-name",
                      description:
                        "The table where the data should be ingested. Optionally the table information can be added to each message",
                      args: { name: "table-name" },
                    },
                    {
                      name: "--workspace-name",
                      description: "The name of the workspace",
                      args: { name: "workspace-name" },
                    },
                  ],
                },
              ],
            },
            {
              name: "event-hub",
              description:
                "Manage kusto pool data connection with synapse sub group event-hub",
              subcommands: [
                {
                  name: "create",
                  description: "Create a data connection",
                  options: [
                    {
                      name: "--data-connection-name",
                      description: "The name of the data connection",
                      args: { name: "data-connection-name" },
                      isRequired: true,
                    },
                    {
                      name: "--database-name",
                      description: "The name of the database in the Kusto pool",
                      args: { name: "database-name" },
                      isRequired: true,
                    },
                    {
                      name: "--kusto-pool-name",
                      description: "The name of the Kusto pool",
                      args: { name: "kusto-pool-name" },
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
                      name: "--workspace-name",
                      description: "The name of the workspace",
                      args: { name: "workspace-name" },
                      isRequired: true,
                    },
                    {
                      name: "--compression",
                      description: "The event hub messages compression type",
                      args: {
                        name: "compression",
                        suggestions: ["GZip", "None"],
                      },
                    },
                    {
                      name: "--consumer-group",
                      description: "The event hub consumer group",
                      args: { name: "consumer-group" },
                    },
                    {
                      name: "--data-format",
                      description:
                        "The data format of the message. Optionally the data format can be added to each message",
                      args: {
                        name: "data-format",
                        suggestions: [
                          "APACHEAVRO",
                          "AVRO",
                          "CSV",
                          "JSON",
                          "MULTIJSON",
                          "ORC",
                          "PARQUET",
                          "PSV",
                          "RAW",
                          "SCSV",
                          "SINGLEJSON",
                          "SOHSV",
                          "TSV",
                          "TSVE",
                          "TXT",
                          "W3CLOGFILE",
                        ],
                      },
                    },
                    {
                      name: "--event-hub-resource-id",
                      description:
                        "The resource ID of the event hub to be used to create a data connection",
                      args: { name: "event-hub-resource-id" },
                    },
                    {
                      name: "--event-system-properties",
                      description: "System properties of the event hub",
                      args: { name: "event-system-properties" },
                    },
                    {
                      name: ["--location", "-l"],
                      description:
                        "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
                      args: { name: "location" },
                    },
                    {
                      name: "--managed-identity-resource-id",
                      description:
                        "The resource ID of a managed identity (system or user assigned) to be used to authenticate with event hub",
                      args: { name: "managed-identity-resource-id" },
                    },
                    {
                      name: "--mapping-rule-name",
                      description:
                        "The mapping rule to be used to ingest the data. Optionally the mapping information can be added to each message",
                      args: { name: "mapping-rule-name" },
                    },
                    {
                      name: "--no-wait",
                      description:
                        "Do not wait for the long-running operation to finish",
                    },
                    {
                      name: "--table-name",
                      description:
                        "The table where the data should be ingested. Optionally the table information can be added to each message",
                      args: { name: "table-name" },
                    },
                  ],
                },
                {
                  name: "update",
                  description: "Updates a data connection",
                  options: [
                    {
                      name: "--compression",
                      description: "The event hub messages compression type",
                      args: {
                        name: "compression",
                        suggestions: ["GZip", "None"],
                      },
                    },
                    {
                      name: "--consumer-group",
                      description: "The event hub consumer group",
                      args: { name: "consumer-group" },
                    },
                    {
                      name: "--data-connection-name",
                      description: "The name of the data connection",
                      args: { name: "data-connection-name" },
                    },
                    {
                      name: "--data-format",
                      description:
                        "The data format of the message. Optionally the data format can be added to each message",
                      args: {
                        name: "data-format",
                        suggestions: [
                          "APACHEAVRO",
                          "AVRO",
                          "CSV",
                          "JSON",
                          "MULTIJSON",
                          "ORC",
                          "PARQUET",
                          "PSV",
                          "RAW",
                          "SCSV",
                          "SINGLEJSON",
                          "SOHSV",
                          "TSV",
                          "TSVE",
                          "TXT",
                          "W3CLOGFILE",
                        ],
                      },
                    },
                    {
                      name: "--database-name",
                      description: "The name of the database in the Kusto pool",
                      args: { name: "database-name" },
                    },
                    {
                      name: "--event-hub-resource-id",
                      description:
                        "The resource ID of the event hub to be used to create a data connection",
                      args: { name: "event-hub-resource-id" },
                    },
                    {
                      name: "--event-system-properties",
                      description: "System properties of the event hub",
                      args: { name: "event-system-properties" },
                    },
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids" },
                    },
                    {
                      name: "--kusto-pool-name",
                      description: "The name of the Kusto pool",
                      args: { name: "kusto-pool-name" },
                    },
                    {
                      name: ["--location", "-l"],
                      description:
                        "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
                      args: { name: "location" },
                    },
                    {
                      name: "--managed-identity-resource-id",
                      description:
                        "The resource ID of a managed identity (system or user assigned) to be used to authenticate with event hub",
                      args: { name: "managed-identity-resource-id" },
                    },
                    {
                      name: "--mapping-rule-name",
                      description:
                        "The mapping rule to be used to ingest the data. Optionally the mapping information can be added to each message",
                      args: { name: "mapping-rule-name" },
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
                      name: "--table-name",
                      description:
                        "The table where the data should be ingested. Optionally the table information can be added to each message",
                      args: { name: "table-name" },
                    },
                    {
                      name: "--workspace-name",
                      description: "The name of the workspace",
                      args: { name: "workspace-name" },
                    },
                  ],
                },
              ],
            },
            {
              name: "iot-hub",
              description:
                "Manage kusto pool data connection with synapse sub group iot-hub",
              subcommands: [
                {
                  name: "create",
                  description: "Create a data connection",
                  options: [
                    {
                      name: "--data-connection-name",
                      description: "The name of the data connection",
                      args: { name: "data-connection-name" },
                      isRequired: true,
                    },
                    {
                      name: "--database-name",
                      description: "The name of the database in the Kusto pool",
                      args: { name: "database-name" },
                      isRequired: true,
                    },
                    {
                      name: "--kusto-pool-name",
                      description: "The name of the Kusto pool",
                      args: { name: "kusto-pool-name" },
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
                      name: "--workspace-name",
                      description: "The name of the workspace",
                      args: { name: "workspace-name" },
                      isRequired: true,
                    },
                    {
                      name: "--consumer-group",
                      description: "The iot hub consumer group",
                      args: { name: "consumer-group" },
                    },
                    {
                      name: "--data-format",
                      description:
                        "The data format of the message. Optionally the data format can be added to each message",
                      args: {
                        name: "data-format",
                        suggestions: [
                          "APACHEAVRO",
                          "AVRO",
                          "CSV",
                          "JSON",
                          "MULTIJSON",
                          "ORC",
                          "PARQUET",
                          "PSV",
                          "RAW",
                          "SCSV",
                          "SINGLEJSON",
                          "SOHSV",
                          "TSV",
                          "TSVE",
                          "TXT",
                          "W3CLOGFILE",
                        ],
                      },
                    },
                    {
                      name: "--event-system-properties",
                      description: "System properties of the iot hub",
                      args: { name: "event-system-properties" },
                    },
                    {
                      name: "--iot-hub-resource-id",
                      description:
                        "The resource ID of the Iot hub to be used to create a data connection",
                      args: { name: "iot-hub-resource-id" },
                    },
                    {
                      name: ["--location", "-l"],
                      description:
                        "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
                      args: { name: "location" },
                    },
                    {
                      name: "--mapping-rule-name",
                      description:
                        "The mapping rule to be used to ingest the data. Optionally the mapping information can be added to each message",
                      args: { name: "mapping-rule-name" },
                    },
                    {
                      name: "--no-wait",
                      description:
                        "Do not wait for the long-running operation to finish",
                    },
                    {
                      name: "--shared-access-policy-name",
                      description: "The name of the share access policy",
                      args: { name: "shared-access-policy-name" },
                    },
                    {
                      name: "--table-name",
                      description:
                        "The table where the data should be ingested. Optionally the table information can be added to each message",
                      args: { name: "table-name" },
                    },
                  ],
                },
                {
                  name: "update",
                  description: "Updates a data connection",
                  options: [
                    {
                      name: "--consumer-group",
                      description: "The iot hub consumer group",
                      args: { name: "consumer-group" },
                    },
                    {
                      name: "--data-connection-name",
                      description: "The name of the data connection",
                      args: { name: "data-connection-name" },
                    },
                    {
                      name: "--data-format",
                      description:
                        "The data format of the message. Optionally the data format can be added to each message",
                      args: {
                        name: "data-format",
                        suggestions: [
                          "APACHEAVRO",
                          "AVRO",
                          "CSV",
                          "JSON",
                          "MULTIJSON",
                          "ORC",
                          "PARQUET",
                          "PSV",
                          "RAW",
                          "SCSV",
                          "SINGLEJSON",
                          "SOHSV",
                          "TSV",
                          "TSVE",
                          "TXT",
                          "W3CLOGFILE",
                        ],
                      },
                    },
                    {
                      name: "--database-name",
                      description: "The name of the database in the Kusto pool",
                      args: { name: "database-name" },
                    },
                    {
                      name: "--event-system-properties",
                      description: "System properties of the iot hub",
                      args: { name: "event-system-properties" },
                    },
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids" },
                    },
                    {
                      name: "--iot-hub-resource-id",
                      description:
                        "The resource ID of the Iot hub to be used to create a data connection",
                      args: { name: "iot-hub-resource-id" },
                    },
                    {
                      name: "--kusto-pool-name",
                      description: "The name of the Kusto pool",
                      args: { name: "kusto-pool-name" },
                    },
                    {
                      name: ["--location", "-l"],
                      description:
                        "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
                      args: { name: "location" },
                    },
                    {
                      name: "--mapping-rule-name",
                      description:
                        "The mapping rule to be used to ingest the data. Optionally the mapping information can be added to each message",
                      args: { name: "mapping-rule-name" },
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
                      name: "--shared-access-policy-name",
                      description: "The name of the share access policy",
                      args: { name: "shared-access-policy-name" },
                    },
                    {
                      name: "--subscription",
                      description:
                        "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                      args: { name: "subscription" },
                    },
                    {
                      name: "--table-name",
                      description:
                        "The table where the data should be ingested. Optionally the table information can be added to each message",
                      args: { name: "table-name" },
                    },
                    {
                      name: "--workspace-name",
                      description: "The name of the workspace",
                      args: { name: "workspace-name" },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "database",
          description: "Manage kusto pool database with synapse",
          subcommands: [
            {
              name: "create",
              description: "Create a database",
              options: [
                {
                  name: "--database-name",
                  description: "The name of the database in the Kusto pool",
                  args: { name: "database-name" },
                  isRequired: true,
                },
                {
                  name: "--kusto-pool-name",
                  description: "The name of the Kusto pool",
                  args: { name: "kusto-pool-name" },
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
                  name: "--workspace-name",
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                  isRequired: true,
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--read-write-database",
                  description: "Class representing a read write database",
                  args: { name: "read-write-database" },
                },
              ],
            },
            {
              name: "delete",
              description: "Deletes the database with the given name",
              options: [
                {
                  name: "--database-name",
                  description: "The name of the database in the Kusto pool",
                  args: { name: "database-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--kusto-pool-name",
                  description: "The name of the Kusto pool",
                  args: { name: "kusto-pool-name" },
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
                  name: "--workspace-name",
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
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
                "Returns the list of databases of the given Kusto pool",
              options: [
                {
                  name: "--kusto-pool-name",
                  description: "The name of the Kusto pool",
                  args: { name: "kusto-pool-name" },
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
                  name: "--workspace-name",
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description: "Returns a database",
              options: [
                {
                  name: "--database-name",
                  description: "The name of the database in the Kusto pool",
                  args: { name: "database-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--kusto-pool-name",
                  description: "The name of the Kusto pool",
                  args: { name: "kusto-pool-name" },
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
                  name: "--workspace-name",
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                },
              ],
            },
            {
              name: "update",
              description: "Updates a database",
              options: [
                {
                  name: "--database-name",
                  description: "The name of the database in the Kusto pool",
                  args: { name: "database-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--kusto-pool-name",
                  description: "The name of the Kusto pool",
                  args: { name: "kusto-pool-name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--read-write-database",
                  description: "Class representing a read write database",
                  args: { name: "read-write-database" },
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
                  name: "--workspace-name",
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                },
              ],
            },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition of the synapse kusto database is met",
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
                {
                  name: "--database-name",
                  description: "The name of the database in the Kusto pool",
                  args: { name: "database-name" },
                },
                { name: "--deleted", description: "Wait until deleted" },
                {
                  name: "--exists",
                  description: "Wait until the resource exists",
                },
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
                  name: "--kusto-pool-name",
                  description: "The name of the Kusto pool",
                  args: { name: "kusto-pool-name" },
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
                {
                  name: "--workspace-name",
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                },
              ],
            },
          ],
        },
        {
          name: "database-principal-assignment",
          description:
            "Manage kusto pool database principal assignment with synapse",
          subcommands: [
            {
              name: "create",
              description: "Creates a Kusto pool database principalAssignment",
              options: [
                {
                  name: "--database-name",
                  description: "The name of the database in the Kusto pool",
                  args: { name: "database-name" },
                  isRequired: true,
                },
                {
                  name: "--kusto-pool-name",
                  description: "The name of the Kusto pool",
                  args: { name: "kusto-pool-name" },
                  isRequired: true,
                },
                {
                  name: "--principal-assignment-name",
                  description: "The name of the Kusto principalAssignment",
                  args: { name: "principal-assignment-name" },
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
                  name: "--workspace-name",
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                  isRequired: true,
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--principal-id",
                  description:
                    "The principal ID assigned to the database principal. It can be a user email, application ID, or security group name",
                  args: { name: "principal-id" },
                },
                {
                  name: "--principal-type",
                  description: "Principal type",
                  args: {
                    name: "principal-type",
                    suggestions: ["App", "Group", "User"],
                  },
                },
                {
                  name: "--role",
                  description: "Database principal role",
                  args: {
                    name: "role",
                    suggestions: [
                      "Admin",
                      "Ingestor",
                      "Monitor",
                      "UnrestrictedViewer",
                      "User",
                      "Viewer",
                    ],
                  },
                },
                {
                  name: "--tenant-id",
                  description: "The tenant id of the principal",
                  args: { name: "tenant-id" },
                },
              ],
            },
            {
              name: "delete",
              description: "Deletes a Kusto pool principalAssignment",
              options: [
                {
                  name: "--database-name",
                  description: "The name of the database in the Kusto pool",
                  args: { name: "database-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--kusto-pool-name",
                  description: "The name of the Kusto pool",
                  args: { name: "kusto-pool-name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--principal-assignment-name",
                  description: "The name of the Kusto principalAssignment",
                  args: { name: "principal-assignment-name" },
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
                  name: "--workspace-name",
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                },
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "list",
              description: "Lists all Kusto pool database principalAssignments",
              options: [
                {
                  name: "--database-name",
                  description: "The name of the database in the Kusto pool",
                  args: { name: "database-name" },
                  isRequired: true,
                },
                {
                  name: "--kusto-pool-name",
                  description: "The name of the Kusto pool",
                  args: { name: "kusto-pool-name" },
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
                  name: "--workspace-name",
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description: "Gets a Kusto pool database principalAssignment",
              options: [
                {
                  name: "--database-name",
                  description: "The name of the database in the Kusto pool",
                  args: { name: "database-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--kusto-pool-name",
                  description: "The name of the Kusto pool",
                  args: { name: "kusto-pool-name" },
                },
                {
                  name: "--principal-assignment-name",
                  description: "The name of the Kusto principalAssignment",
                  args: { name: "principal-assignment-name" },
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
                  name: "--workspace-name",
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                },
              ],
            },
            {
              name: "update",
              description: "Update a Kusto pool database principalAssignment",
              options: [
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add" },
                },
                {
                  name: "--database-name",
                  description: "The name of the database in the Kusto pool",
                  args: { name: "database-name" },
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
                  name: "--kusto-pool-name",
                  description: "The name of the Kusto pool",
                  args: { name: "kusto-pool-name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--principal-assignment-name",
                  description: "The name of the Kusto principalAssignment",
                  args: { name: "principal-assignment-name" },
                },
                {
                  name: "--principal-id",
                  description:
                    "The principal ID assigned to the database principal. It can be a user email, application ID, or security group name",
                  args: { name: "principal-id" },
                },
                {
                  name: "--principal-type",
                  description: "Principal type",
                  args: {
                    name: "principal-type",
                    suggestions: ["App", "Group", "User"],
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
                  name: "--role",
                  description: "Database principal role",
                  args: {
                    name: "role",
                    suggestions: [
                      "Admin",
                      "Ingestor",
                      "Monitor",
                      "UnrestrictedViewer",
                      "User",
                      "Viewer",
                    ],
                  },
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
                  name: "--tenant-id",
                  description: "The tenant id of the principal",
                  args: { name: "tenant-id" },
                },
                {
                  name: "--workspace-name",
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                },
              ],
            },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition of the synapse kusto database-principal-assignment is met",
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
                {
                  name: "--database-name",
                  description: "The name of the database in the Kusto pool",
                  args: { name: "database-name" },
                },
                { name: "--deleted", description: "Wait until deleted" },
                {
                  name: "--exists",
                  description: "Wait until the resource exists",
                },
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
                  name: "--kusto-pool-name",
                  description: "The name of the Kusto pool",
                  args: { name: "kusto-pool-name" },
                },
                {
                  name: "--principal-assignment-name",
                  description: "The name of the Kusto principalAssignment",
                  args: { name: "principal-assignment-name" },
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
                {
                  name: "--workspace-name",
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                },
              ],
            },
          ],
        },
        {
          name: "pool",
          description: "Manage kusto pool with synapse",
          subcommands: [
            {
              name: "add-language-extension",
              description:
                "Add a list of language extensions that can run within KQL queries",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--kusto-pool-name", "--name", "-n"],
                  description: "The name of the Kusto pool",
                  args: { name: "kusto-pool-name" },
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
                  name: "--value",
                  description: "The list of language extensions",
                  args: { name: "value" },
                },
                {
                  name: "--workspace-name",
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                },
              ],
            },
            {
              name: "create",
              description: "Create a Kusto pool",
              options: [
                {
                  name: ["--kusto-pool-name", "--name", "-n"],
                  description: "The name of the Kusto pool",
                  args: { name: "kusto-pool-name" },
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
                  description: "The SKU of the kusto pool",
                  args: { name: "sku" },
                  isRequired: true,
                },
                {
                  name: "--workspace-name",
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                  isRequired: true,
                },
                {
                  name: "--enable-purge",
                  description:
                    "A boolean value that indicates if the purge operations are enabled",
                  args: {
                    name: "enable-purge",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--enable-streaming-ingest", "--esig"],
                  description:
                    "A boolean value that indicates if the streaming ingest is enabled",
                  args: {
                    name: "enable-streaming-ingest",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--if-match",
                  description:
                    "The ETag of the Kusto Pool. Omit this value to always overwrite the current Kusto Pool. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes",
                  args: { name: "if-match" },
                },
                {
                  name: "--if-none-match",
                  description:
                    "Set to '*' to allow a new Kusto Pool to be created, but to prevent updating an existing Kusto Pool. Other values will result in a 412 Pre-condition Failed response",
                  args: { name: "if-none-match" },
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
                  name: "--optimized-autoscale",
                  description: "Optimized auto scale definition",
                  args: { name: "optimized-autoscale" },
                },
                {
                  name: "--tags",
                  description:
                    'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
                  args: { name: "tags" },
                },
                {
                  name: "--workspace-uid",
                  description: "The workspace unique identifier",
                  args: { name: "workspace-uid" },
                },
              ],
            },
            {
              name: "delete",
              description: "Deletes a Kusto pool",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--kusto-pool-name", "--name", "-n"],
                  description: "The name of the Kusto pool",
                  args: { name: "kusto-pool-name" },
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
                  name: "--workspace-name",
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                },
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "detach-follower-database",
              description:
                "Detaches all followers of a database owned by this Kusto Pool",
              options: [
                {
                  name: ["--attached-database-configuration-name", "--adcn"],
                  description:
                    "Resource name of the attached database configuration in the follower cluster",
                  args: { name: "attached-database-configuration-name" },
                  isRequired: true,
                },
                {
                  name: "--kusto-pool-resource-id",
                  description:
                    "Resource id of the cluster that follows a database owned by this cluster",
                  args: { name: "kusto-pool-resource-id" },
                  isRequired: true,
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--kusto-pool-name", "--name", "-n"],
                  description: "The name of the Kusto pool",
                  args: { name: "kusto-pool-name" },
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
                  name: "--workspace-name",
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                },
              ],
            },
            {
              name: "list",
              description: "List all Kusto pools",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--workspace-name",
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "list-follower-database",
              description:
                "Returns a list of databases that are owned by this Kusto Pool and were followed by another Kusto Pool",
              options: [
                {
                  name: ["--kusto-pool-name", "--name", "-n"],
                  description: "The name of the Kusto pool",
                  args: { name: "kusto-pool-name" },
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
                  name: "--workspace-name",
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "list-language-extension",
              description:
                "Returns a list of language extensions that can run within KQL queries",
              options: [
                {
                  name: ["--kusto-pool-name", "--name", "-n"],
                  description: "The name of the Kusto pool",
                  args: { name: "kusto-pool-name" },
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
                  name: "--workspace-name",
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "list-sku",
              description:
                "Returns the SKUs available for the provided resource",
              options: [
                {
                  name: ["--kusto-pool-name", "--name", "-n"],
                  description: "The name of the Kusto pool",
                  args: { name: "kusto-pool-name" },
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
                  name: "--workspace-name",
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "remove-language-extension",
              description:
                "Remove a list of language extensions that can run within KQL queries",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--kusto-pool-name", "--name", "-n"],
                  description: "The name of the Kusto pool",
                  args: { name: "kusto-pool-name" },
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
                  name: "--value",
                  description: "The list of language extensions",
                  args: { name: "value" },
                },
                {
                  name: "--workspace-name",
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                },
              ],
            },
            {
              name: "show",
              description: "Gets a Kusto pool",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--kusto-pool-name", "--name", "-n"],
                  description: "The name of the Kusto pool",
                  args: { name: "kusto-pool-name" },
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
                  name: "--workspace-name",
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                },
              ],
            },
            {
              name: "start",
              description: "Starts a Kusto pool",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--kusto-pool-name", "--name", "-n"],
                  description: "The name of the Kusto pool",
                  args: { name: "kusto-pool-name" },
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
                  name: "--workspace-name",
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                },
              ],
            },
            {
              name: "stop",
              description: "Stops a Kusto pool",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--kusto-pool-name", "--name", "-n"],
                  description: "The name of the Kusto pool",
                  args: { name: "kusto-pool-name" },
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
                  name: "--workspace-name",
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                },
              ],
            },
            {
              name: "update",
              description: "Update a Kusto Kusto Pool",
              options: [
                {
                  name: "--enable-purge",
                  description:
                    "A boolean value that indicates if the purge operations are enabled",
                  args: {
                    name: "enable-purge",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--enable-streaming-ingest", "--esig"],
                  description:
                    "A boolean value that indicates if the streaming ingest is enabled",
                  args: {
                    name: "enable-streaming-ingest",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--if-match",
                  description:
                    "The ETag of the Kusto Pool. Omit this value to always overwrite the current Kusto Pool. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes",
                  args: { name: "if-match" },
                },
                {
                  name: ["--kusto-pool-name", "--name", "-n"],
                  description: "The name of the Kusto pool",
                  args: { name: "kusto-pool-name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--optimized-autoscale",
                  description: "Optimized auto scale definition",
                  args: { name: "optimized-autoscale" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--sku",
                  description: "The SKU of the kusto pool",
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
                  name: "--workspace-name",
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                },
                {
                  name: "--workspace-uid",
                  description: "The workspace unique identifier",
                  args: { name: "workspace-uid" },
                },
              ],
            },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition of the synapse kusto pool is met",
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
                  name: "--exists",
                  description: "Wait until the resource exists",
                },
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
                  name: ["--kusto-pool-name", "--name", "-n"],
                  description: "The name of the Kusto pool",
                  args: { name: "kusto-pool-name" },
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
                {
                  name: "--workspace-name",
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                },
              ],
            },
          ],
        },
        {
          name: "pool-principal-assignment",
          description: "Manage kusto pool principal assignment with synapse",
          subcommands: [
            {
              name: "create",
              description: "Create a Kusto pool principalAssignment",
              options: [
                {
                  name: "--kusto-pool-name",
                  description: "The name of the Kusto pool",
                  args: { name: "kusto-pool-name" },
                  isRequired: true,
                },
                {
                  name: "--principal-assignment-name",
                  description: "The name of the Kusto principalAssignment",
                  args: { name: "principal-assignment-name" },
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
                  name: "--workspace-name",
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                  isRequired: true,
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--principal-id",
                  description:
                    "The principal ID assigned to the cluster principal. It can be a user email, application ID, or security group name",
                  args: { name: "principal-id" },
                },
                {
                  name: "--principal-type",
                  description: "Principal type",
                  args: {
                    name: "principal-type",
                    suggestions: ["App", "Group", "User"],
                  },
                },
                {
                  name: "--role",
                  description: "Cluster principal role",
                  args: {
                    name: "role",
                    suggestions: ["AllDatabasesAdmin", "AllDatabasesViewer"],
                  },
                },
                {
                  name: "--tenant-id",
                  description: "The tenant id of the principal",
                  args: { name: "tenant-id" },
                },
              ],
            },
            {
              name: "delete",
              description: "Deletes a Kusto pool principalAssignment",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--kusto-pool-name",
                  description: "The name of the Kusto pool",
                  args: { name: "kusto-pool-name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--principal-assignment-name",
                  description: "The name of the Kusto principalAssignment",
                  args: { name: "principal-assignment-name" },
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
                  name: "--workspace-name",
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                },
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "list",
              description: "Lists all Kusto pool principalAssignments",
              options: [
                {
                  name: "--kusto-pool-name",
                  description: "The name of the Kusto pool",
                  args: { name: "kusto-pool-name" },
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
                  name: "--workspace-name",
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description: "Gets a Kusto pool principalAssignment",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--kusto-pool-name",
                  description: "The name of the Kusto pool",
                  args: { name: "kusto-pool-name" },
                },
                {
                  name: "--principal-assignment-name",
                  description: "The name of the Kusto principalAssignment",
                  args: { name: "principal-assignment-name" },
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
                  name: "--workspace-name",
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                },
              ],
            },
            {
              name: "update",
              description: "Update a Kusto pool principalAssignment",
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
                  name: "--kusto-pool-name",
                  description: "The name of the Kusto pool",
                  args: { name: "kusto-pool-name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--principal-assignment-name",
                  description: "The name of the Kusto principalAssignment",
                  args: { name: "principal-assignment-name" },
                },
                {
                  name: "--principal-id",
                  description:
                    "The principal ID assigned to the cluster principal. It can be a user email, application ID, or security group name",
                  args: { name: "principal-id" },
                },
                {
                  name: "--principal-type",
                  description: "Principal type",
                  args: {
                    name: "principal-type",
                    suggestions: ["App", "Group", "User"],
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
                  name: "--role",
                  description: "Cluster principal role",
                  args: {
                    name: "role",
                    suggestions: ["AllDatabasesAdmin", "AllDatabasesViewer"],
                  },
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
                  name: "--tenant-id",
                  description: "The tenant id of the principal",
                  args: { name: "tenant-id" },
                },
                {
                  name: "--workspace-name",
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                },
              ],
            },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition of the synapse kusto pool-principal-assignment is met",
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
                  name: "--exists",
                  description: "Wait until the resource exists",
                },
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
                  name: "--kusto-pool-name",
                  description: "The name of the Kusto pool",
                  args: { name: "kusto-pool-name" },
                },
                {
                  name: "--principal-assignment-name",
                  description: "The name of the Kusto principalAssignment",
                  args: { name: "principal-assignment-name" },
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
                {
                  name: "--workspace-name",
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "kusto-operation",
      description: "Manage kusto operation with synapse",
      subcommands: [
        {
          name: "list",
          description:
            "Lists available operations for the Kusto sub-resources inside Microsoft.Synapse provider",
        },
      ],
    },
    {
      name: "link-connection",
      description: "Manage Synapse's link connection",
      subcommands: [
        {
          name: "create",
          description: "Create a link connection",
          options: [
            {
              name: "--file",
              description:
                "Properties may be supplied from a JSON file using the @{path} syntax or a JSON string",
              args: { name: "file" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The link connection name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a link connection",
          options: [
            {
              name: ["--name", "-n"],
              description: "The link connection name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "edit-link-tables",
          description: "Edit tables for a link connection",
          options: [
            {
              name: ["--file", "-f"],
              description:
                "The Edit link-tables file path, The file format can be viewed using --help",
              args: { name: "file" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The link connection name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "get-link-tables-status",
          description: "Query the link table status of a link connection",
          options: [
            {
              name: ["--name", "-n"],
              description: "The link connection name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
              isRequired: true,
            },
            {
              name: "--continuation-token",
              description: "Continuation token to query table status",
              args: { name: "continuation-token" },
            },
            {
              name: "--max-segment-count",
              description: "Max segment count to query table status",
              args: { name: "max-segment-count" },
            },
          ],
        },
        {
          name: "get-status",
          description:
            "Check a link connection status after start/stop a link connection",
          options: [
            {
              name: ["--name", "-n"],
              description: "The link connection name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list",
          description: "List link connections in a synapse workspace",
          options: [
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list-link-tables",
          description: "List the link tables of a link connection",
          options: [
            {
              name: ["--name", "-n"],
              description: "The link connection name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description: "Get a link connection",
          options: [
            {
              name: ["--name", "-n"],
              description: "The link connection name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "start",
          description: "Start a link connnection",
          options: [
            {
              name: ["--name", "-n"],
              description: "The link connection name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "stop",
          description: "Stop a link connection",
          options: [
            {
              name: ["--name", "-n"],
              description: "The link connection name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update",
          description: "Update a link connection",
          options: [
            {
              name: "--file",
              description:
                "Properties may be supplied from a JSON file using the @{path} syntax or a JSON string",
              args: { name: "file" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The link connection name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update-landing-zone-credential",
          description: "Update landing zone credetial of a link connection",
          options: [
            {
              name: ["--name", "-n"],
              description: "The link connection name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--sas-token",
              description: "Value of secure string",
              args: { name: "sas-token" },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "linked-service",
      description: "Manage Synapse's linked services",
      subcommands: [
        {
          name: "create",
          description: "Create a linked service",
          options: [
            {
              name: "--file",
              description:
                "Properties may be supplied from a JSON file using the @{path} syntax or a JSON string",
              args: { name: "file" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The linked service name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
              isRequired: true,
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a linked service",
          options: [
            {
              name: ["--name", "-n"],
              description: "The linked service name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
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
          description: "List linked services",
          options: [
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "set",
          description: "Update an exist linked service",
          options: [
            {
              name: "--file",
              description:
                "Properties may be supplied from a JSON file using the @{path} syntax or a JSON string",
              args: { name: "file" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The linked service name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
              isRequired: true,
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
          ],
        },
        {
          name: "show",
          description: "Get a linked service",
          options: [
            {
              name: ["--name", "-n"],
              description: "The linked service name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update",
          description: "Update an exist linked service",
          options: [
            {
              name: "--file",
              description:
                "Properties may be supplied from a JSON file using the @{path} syntax or a JSON string",
              args: { name: "file" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The linked service name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
              isRequired: true,
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
          ],
        },
      ],
    },
    {
      name: "managed-private-endpoints",
      description: "Manage synapse managed private endpoints",
      subcommands: [
        {
          name: "create",
          description: "Create a synapse managed private endpoints",
          options: [
            {
              name: "--file",
              description:
                "Properties may be supplied from a JSON file using the @{path} syntax or a JSON string",
              args: { name: "file" },
              isRequired: true,
            },
            {
              name: "--pe-name",
              description: "The managed private endpoint name",
              args: { name: "pe-name" },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "delete",
          description:
            "Delete synapse managed private endpoints in a workspace",
          options: [
            {
              name: "--pe-name",
              description: "The managed private endpoint name",
              args: { name: "pe-name" },
              isRequired: true,
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "List synapse managed private endpoints in a workspace",
          options: [
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description: "Get a synapse managed private endpoints",
          options: [
            {
              name: "--pe-name",
              description: "The managed private endpoint name",
              args: { name: "pe-name" },
              isRequired: true,
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
      ],
    },
    {
      name: "notebook",
      description: "Manage Synapse's notebooks",
      subcommands: [
        {
          name: "create",
          description: "Create a notebook",
          options: [
            {
              name: "--file",
              description:
                "Properties may be supplied from a JSON file using the @{path} syntax or a JSON string",
              args: { name: "file" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The notebook name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
              isRequired: true,
            },
            {
              name: "--executor-count",
              description:
                "Number of executors to be allocated in the specified Spark pool for the job",
              args: { name: "executor-count" },
            },
            {
              name: "--executor-size",
              description:
                "Number of core and memory to be used for executors allocated in the specified Spark pool for the job",
              args: {
                name: "executor-size",
                suggestions: ["Large", "Medium", "Small"],
              },
            },
            {
              name: "--folder-path",
              description:
                "The folder that this notebook is in. If not specified, this notebook will appear at the root level. Eg: folder/subfolder1",
              args: { name: "folder-path" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--spark-pool-name",
              description: "The name of the Spark pool",
              args: { name: "spark-pool-name" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a notebook",
          options: [
            {
              name: ["--name", "-n"],
              description: "The notebook name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
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
          name: "export",
          description: "Export notebooks",
          options: [
            {
              name: "--output-folder",
              description: "The folder where the notebook should be placed",
              args: { name: "output-folder" },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The notebook name",
              args: { name: "name" },
            },
          ],
        },
        {
          name: "import",
          description: "Import a notebook",
          options: [
            {
              name: "--file",
              description:
                "Properties may be supplied from a JSON file using the @{path} syntax or a JSON string",
              args: { name: "file" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The notebook name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
              isRequired: true,
            },
            {
              name: "--executor-count",
              description:
                "Number of executors to be allocated in the specified Spark pool for the job",
              args: { name: "executor-count" },
            },
            {
              name: "--executor-size",
              description:
                "Number of core and memory to be used for executors allocated in the specified Spark pool for the job",
              args: {
                name: "executor-size",
                suggestions: ["Large", "Medium", "Small"],
              },
            },
            {
              name: "--folder-path",
              description:
                "The folder that this notebook is in. If not specified, this notebook will appear at the root level. Eg: folder/subfolder1",
              args: { name: "folder-path" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--spark-pool-name",
              description: "The name of the Spark pool",
              args: { name: "spark-pool-name" },
            },
          ],
        },
        {
          name: "list",
          description: "List notebooks",
          options: [
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "set",
          description: "Set an exist notebook",
          options: [
            {
              name: "--file",
              description:
                "Properties may be supplied from a JSON file using the @{path} syntax or a JSON string",
              args: { name: "file" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The notebook name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
              isRequired: true,
            },
            {
              name: "--executor-count",
              description:
                "Number of executors to be allocated in the specified Spark pool for the job",
              args: { name: "executor-count" },
            },
            {
              name: "--executor-size",
              description:
                "Number of core and memory to be used for executors allocated in the specified Spark pool for the job",
              args: {
                name: "executor-size",
                suggestions: ["Large", "Medium", "Small"],
              },
            },
            {
              name: "--folder-path",
              description:
                "The folder that this notebook is in. If not specified, this notebook will appear at the root level. Eg: folder/subfolder1",
              args: { name: "folder-path" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--spark-pool-name",
              description: "The name of the Spark pool",
              args: { name: "spark-pool-name" },
            },
          ],
        },
        {
          name: "show",
          description: "Get a notebook",
          options: [
            {
              name: ["--name", "-n"],
              description: "The notebook name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "pipeline",
      description: "Manage Synapse's pipelines",
      subcommands: [
        {
          name: "create",
          description: "Create a pipeline",
          options: [
            {
              name: "--file",
              description:
                "Properties may be supplied from a JSON file using the @{path} syntax or a JSON string",
              args: { name: "file" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The pipeline name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
              isRequired: true,
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
          ],
        },
        {
          name: "create-run",
          description: "Creates a run of a pipeline",
          options: [
            {
              name: ["--name", "-n"],
              description: "The pipeline name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
              isRequired: true,
            },
            {
              name: "--is-recovery",
              description:
                "Recovery mode flag. If recovery mode is set to true, the specified referenced pipeline run and the new run will be grouped under the same groupId",
              args: { name: "is-recovery", suggestions: ["false", "true"] },
            },
            {
              name: "--parameters",
              description:
                "Parameters for pipeline run. Can be supplied from a JSON file using the @{path} syntax or a JSON string",
              args: { name: "parameters" },
            },
            {
              name: ["--reference-pipeline-run-id", "--run-id"],
              description:
                "The pipeline run ID for rerun. If run ID is specified, the parameters of the specified run will be used to create a new run",
              args: { name: "reference-pipeline-run-id" },
            },
            {
              name: "--start-activity-name",
              description:
                "In recovery mode, the rerun will start from this activity. If not specified, all activities will run",
              args: { name: "start-activity-name" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a pipeline",
          options: [
            {
              name: ["--name", "-n"],
              description: "The pipeline name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
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
          description: "List pipelines",
          options: [
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "set",
          description: "Update an exist pipeline",
          options: [
            {
              name: "--file",
              description:
                "Properties may be supplied from a JSON file using the @{path} syntax or a JSON string",
              args: { name: "file" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The pipeline name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
              isRequired: true,
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
          ],
        },
        {
          name: "show",
          description: "Get a pipeline",
          options: [
            {
              name: ["--name", "-n"],
              description: "The pipeline name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update",
          description: "Update an exist pipeline",
          options: [
            {
              name: "--file",
              description:
                "Properties may be supplied from a JSON file using the @{path} syntax or a JSON string",
              args: { name: "file" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The pipeline name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
              isRequired: true,
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
          ],
        },
      ],
    },
    {
      name: "pipeline-run",
      description: "Manage Synapse's pipeline run",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel a pipeline run by its run ID",
          options: [
            {
              name: "--run-id",
              description: "The pipeline run identifier",
              args: { name: "run-id" },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
              isRequired: true,
            },
            {
              name: "--is-recursive",
              description:
                "If true, cancel all the Child pipelines that are triggered by the current pipeline",
              args: { name: "is-recursive", suggestions: ["false", "true"] },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "query-by-workspace",
          description:
            "Query pipeline runs in the workspace based on input filter conditions",
          options: [
            {
              name: "--last-updated-after",
              description:
                "The time at or after which the run event was updated in 'ISO 8601' format",
              args: { name: "last-updated-after" },
              isRequired: true,
            },
            {
              name: "--last-updated-before",
              description:
                "The time at or before which the run event was updated in 'ISO 8601' format",
              args: { name: "last-updated-before" },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
              isRequired: true,
            },
            {
              name: "--continuation-token",
              description:
                "The continuation token for getting the next page of results. Null for first page",
              args: { name: "continuation-token" },
            },
            {
              name: "--filters",
              description: "List of filters",
              args: { name: "filters" },
            },
            {
              name: "--order-by",
              description: "List of OrderBy option",
              args: { name: "order-by" },
            },
          ],
        },
        {
          name: "show",
          description: "Get a pipeline run by its run ID",
          options: [
            {
              name: "--run-id",
              description: "The pipeline run identifier",
              args: { name: "run-id" },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "role",
      description: "Manage Synapse's role assignments and definitions",
      subcommands: [
        {
          name: "assignment",
          description: "Manage Synapse's role assignments",
          subcommands: [
            {
              name: "create",
              description: "Create a role assignment",
              options: [
                {
                  name: "--role",
                  description:
                    "The role name/id that is assigned to the principal",
                  args: { name: "role" },
                  isRequired: true,
                },
                {
                  name: "--workspace-name",
                  description: "The workspace name",
                  args: { name: "workspace-name" },
                  isRequired: true,
                },
                {
                  name: "--assignee",
                  description:
                    "Represent a user or service principal. Supported format: object id, user sign-in name, or service principal name",
                  args: { name: "assignee" },
                },
                {
                  name: "--assignee-object-id",
                  description:
                    "Use this parameter instead of '--assignee' to bypass Graph API invocation in case of insufficient privileges. This parameter only works with object ids for users, groups, service principals, and managed identities. For managed identities use the principal id. For service principals, use the object id and not the app id",
                  args: { name: "assignee-object-id" },
                },
                {
                  name: ["--assignee-principal-type", "--assignee-type"],
                  description:
                    "Use with --assignee-object-id to avoid errors caused by propagation latency in AAD Graph",
                  args: {
                    name: "assignee-principal-type",
                    suggestions: ["Group", "ServicePrincipal", "User"],
                  },
                },
                {
                  name: "--assignment-id",
                  description:
                    "Custom role assignment id in guid format, if not specified, assignment id will be randomly generated",
                  args: { name: "assignment-id" },
                },
                {
                  name: "--item",
                  description:
                    "Item granted access in the workspace. Using with --item-type to combine the scope of assignment",
                  args: { name: "item" },
                },
                {
                  name: "--item-type",
                  description:
                    "Item type granted access in the workspace. Using with --item to combine the scope of assignment",
                  args: {
                    name: "item-type",
                    suggestions: [
                      "bigDataPools",
                      "credentials",
                      "integrationRuntimes",
                      "linkedServices",
                    ],
                  },
                },
                {
                  name: "--scope",
                  description:
                    "A scope defines the resources or artifacts that the access applies to. Synapse supports hierarchical scopes. Permissions granted at a higher-level scope are inherited by objects at a lower level. In Synapse RBAC, the top-level scope is a workspace. Assigning a role with workspace scope grants permissions to all applicable objects in the workspace",
                  args: { name: "scope" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete role assignments of workspace",
              options: [
                {
                  name: "--workspace-name",
                  description: "The workspace name",
                  args: { name: "workspace-name" },
                  isRequired: true,
                },
                {
                  name: "--assignee",
                  description:
                    "Represent a user or service principal. Supported format: object id, user sign-in name, or service principal name",
                  args: { name: "assignee" },
                },
                {
                  name: "--assignee-object-id",
                  description:
                    "Use this parameter instead of '--assignee' to bypass Graph API invocation in case of insufficient privileges. This parameter only works with object ids for users, groups, service principals, and managed identities. For managed identities use the principal id. For service principals, use the object id and not the app id",
                  args: { name: "assignee-object-id" },
                },
                {
                  name: "--ids",
                  description:
                    "Space-separated role assignment ids. You should not provide --role or --assignee when --ids is provided",
                  args: { name: "ids" },
                },
                {
                  name: "--item",
                  description:
                    "Item granted access in the workspace. Using with --item-type to combine the scope of assignment.Using az role assignment with filter condition before executing delete operation to be clearly aware of which assignments will be deleted",
                  args: { name: "item" },
                },
                {
                  name: "--item-type",
                  description:
                    "Item type granted access in the workspace. Using with --item to combine the scope of assignment.Using az role assignment with filter condition before executing delete operation to be clearly aware of which assignments will be deleted",
                  args: {
                    name: "item-type",
                    suggestions: [
                      "bigDataPools",
                      "credentials",
                      "integrationRuntimes",
                      "linkedServices",
                    ],
                  },
                },
                {
                  name: "--role",
                  description:
                    "The role name/id that is assigned to the principal",
                  args: { name: "role" },
                },
                {
                  name: "--scope",
                  description:
                    "A scope defines the resources or artifacts that the access applies to. Synapse supports hierarchical scopes. Permissions granted at a higher-level scope are inherited by objects at a lower level. In Synapse RBAC, the top-level scope is a workspace. Using az role assignment with filter condition before executing delete operation to be clearly aware of which assignments will be deleted",
                  args: { name: "scope" },
                },
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "list",
              description: "List role assignments",
              options: [
                {
                  name: "--workspace-name",
                  description: "The workspace name",
                  args: { name: "workspace-name" },
                  isRequired: true,
                },
                {
                  name: "--assignee",
                  description:
                    "Represent a user or service principal. Supported format: object id, user sign-in name, or service principal name",
                  args: { name: "assignee" },
                },
                {
                  name: "--assignee-object-id",
                  description:
                    "Use this parameter instead of '--assignee' to bypass Graph API invocation in case of insufficient privileges. This parameter only works with object ids for users, groups, service principals, and managed identities. For managed identities use the principal id. For service principals, use the object id and not the app id",
                  args: { name: "assignee-object-id" },
                },
                {
                  name: "--item",
                  description:
                    "Item granted access in the workspace. Using with --item-type to combine the scope of assignment",
                  args: { name: "item" },
                },
                {
                  name: "--item-type",
                  description:
                    "Item type granted access in the workspace. Using with --item to combine the scope of assignment",
                  args: {
                    name: "item-type",
                    suggestions: [
                      "bigDataPools",
                      "credentials",
                      "integrationRuntimes",
                      "linkedServices",
                    ],
                  },
                },
                {
                  name: "--role",
                  description:
                    "The role name/id that is assigned to the principal",
                  args: { name: "role" },
                },
                {
                  name: "--scope",
                  description:
                    "A scope defines the resources or artifacts that the access applies to. Synapse supports hierarchical scopes. Permissions granted at a higher-level scope are inherited by objects at a lower level. In Synapse RBAC, the top-level scope is a workspace. Assigning a role with workspace scope grants permissions to all applicable objects in the workspace",
                  args: { name: "scope" },
                },
              ],
            },
            {
              name: "show",
              description: "Get a role assignment by id",
              options: [
                {
                  name: "--id",
                  description:
                    "Id of the role that is assigned to the principal",
                  args: { name: "id" },
                  isRequired: true,
                },
                {
                  name: "--workspace-name",
                  description: "The workspace name",
                  args: { name: "workspace-name" },
                  isRequired: true,
                },
              ],
            },
          ],
        },
        {
          name: "definition",
          description: "Manage Synapse's role definitions",
          subcommands: [
            {
              name: "list",
              description: "List role definitions",
              options: [
                {
                  name: "--workspace-name",
                  description: "The workspace name",
                  args: { name: "workspace-name" },
                  isRequired: true,
                },
                {
                  name: "--is-built-in",
                  description: "Is a Synapse Built-In Role or not",
                  args: { name: "is-built-in", suggestions: ["false", "true"] },
                },
              ],
            },
            {
              name: "show",
              description: "Get role definition by role id/name",
              options: [
                {
                  name: "--role",
                  description:
                    "The role name/id that is assigned to the principal",
                  args: { name: "role" },
                  isRequired: true,
                },
                {
                  name: "--workspace-name",
                  description: "The workspace name",
                  args: { name: "workspace-name" },
                  isRequired: true,
                },
              ],
            },
          ],
        },
        {
          name: "scope",
          description: "Manage Synapse's role scopes",
          subcommands: [
            {
              name: "list",
              description: "List role scopes",
              options: [
                {
                  name: "--workspace-name",
                  description: "The workspace name",
                  args: { name: "workspace-name" },
                  isRequired: true,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "spark",
      description: "Manage Spark pools and Spark jobs",
      subcommands: [
        {
          name: "job",
          description: "Manage Synapse Spark batch jobs",
          subcommands: [
            {
              name: "cancel",
              description: "Cancel a Spark job",
              options: [
                {
                  name: "--livy-id",
                  description: "The id of the Spark job",
                  args: { name: "livy-id" },
                  isRequired: true,
                },
                {
                  name: "--spark-pool-name",
                  description: "The name of the Spark pool",
                  args: { name: "spark-pool-name" },
                  isRequired: true,
                },
                {
                  name: "--workspace-name",
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
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
              description: "List all Spark jobs",
              options: [
                {
                  name: "--spark-pool-name",
                  description: "The name of the Spark pool",
                  args: { name: "spark-pool-name" },
                  isRequired: true,
                },
                {
                  name: "--workspace-name",
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                  isRequired: true,
                },
                {
                  name: "--from-index",
                  description:
                    "Optional parameter specifying which index the list should begin from",
                  args: { name: "from-index" },
                },
                {
                  name: "--size",
                  description:
                    "The size of the returned list.By default it is 20 and that is the maximum",
                  args: { name: "size" },
                },
              ],
            },
            {
              name: "show",
              description: "Get a Spark job",
              options: [
                {
                  name: "--livy-id",
                  description: "The id of the Spark job",
                  args: { name: "livy-id" },
                  isRequired: true,
                },
                {
                  name: "--spark-pool-name",
                  description: "The name of the Spark pool",
                  args: { name: "spark-pool-name" },
                  isRequired: true,
                },
                {
                  name: "--workspace-name",
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "submit",
              description: "Submit a Spark job",
              options: [
                {
                  name: "--executor-size",
                  description: "The executor size",
                  args: {
                    name: "executor-size",
                    suggestions: ["Large", "Medium", "Small"],
                  },
                  isRequired: true,
                },
                {
                  name: "--executors",
                  description: "The number of executors",
                  args: { name: "executors" },
                  isRequired: true,
                },
                {
                  name: "--main-definition-file",
                  description: "The main file used for the job",
                  args: { name: "main-definition-file" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "The Spark job name",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--spark-pool-name",
                  description: "The name of the Spark pool",
                  args: { name: "spark-pool-name" },
                  isRequired: true,
                },
                {
                  name: "--workspace-name",
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                  isRequired: true,
                },
                {
                  name: "--archives",
                  description: "The array of archives",
                  args: { name: "archives" },
                },
                {
                  name: "--arguments",
                  description:
                    "Optional arguments to the job (Note: please use storage URIs for file arguments)",
                  args: { name: "arguments" },
                },
                {
                  name: "--configuration",
                  description: "The configuration of Spark job",
                  args: { name: "configuration" },
                },
                {
                  name: "--language",
                  description: "The Spark job language",
                  args: {
                    name: "language",
                    suggestions: [
                      "CSharp",
                      "PySpark",
                      "Python",
                      "Scala",
                      "Spark",
                      "SparkDotNet",
                    ],
                  },
                },
                {
                  name: "--main-class-name",
                  description:
                    "The fully-qualified identifier or the main class that is in the main definition file",
                  args: { name: "main-class-name" },
                },
                {
                  name: "--reference-files",
                  description:
                    "Additional files used for reference in the main definition file",
                  args: { name: "reference-files" },
                },
                {
                  name: "--tags",
                  description:
                    'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
                  args: { name: "tags" },
                },
              ],
            },
          ],
        },
        {
          name: "pool",
          description: "Manage Spark pools",
          subcommands: [
            {
              name: "create",
              description: "Create a Spark pool",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The name of the Spark pool",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--node-count",
                  description: "The number of node",
                  args: { name: "node-count" },
                  isRequired: true,
                },
                {
                  name: "--node-size",
                  description:
                    "The level of compute power that each node in the Big Data pool has",
                  args: {
                    name: "node-size",
                    suggestions: [
                      "Large",
                      "Medium",
                      "None",
                      "Small",
                      "XLarge",
                      "XXLarge",
                      "XXXLarge",
                    ],
                  },
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
                  name: "--spark-version",
                  description: "The supported Spark version is 2.4 now",
                  args: { name: "spark-version" },
                  isRequired: true,
                },
                {
                  name: "--workspace-name",
                  description: "The workspace name",
                  args: { name: "workspace-name" },
                  isRequired: true,
                },
                {
                  name: "--delay",
                  description: "The delay time whose unit is minute",
                  args: { name: "delay" },
                },
                {
                  name: "--enable-auto-pause",
                  description: "The flag of enabling auto pause",
                  args: {
                    name: "enable-auto-pause",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--enable-auto-scale",
                  description: "The flag of enabling auto scale",
                  args: {
                    name: "enable-auto-scale",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--enable-dynamic-exec",
                  description:
                    "Indicates whether Dynamic Executor Allocation is enabled or not",
                  args: {
                    name: "enable-dynamic-exec",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--max-executors",
                  description: "The maximum number of executors alloted",
                  args: { name: "max-executors" },
                },
                {
                  name: "--max-node-count",
                  description: "The max node count",
                  args: { name: "max-node-count" },
                },
                {
                  name: "--min-executors",
                  description: "The minimum number of executors alloted",
                  args: { name: "min-executors" },
                },
                {
                  name: "--min-node-count",
                  description: "The min node count",
                  args: { name: "min-node-count" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--node-size-family",
                  description:
                    "The kind of nodes that the Big Data pool provides",
                  args: {
                    name: "node-size-family",
                    suggestions: [
                      "HardwareAcceleratedFPGA",
                      "HardwareAcceleratedGPU",
                      "MemoryOptimized",
                      "None",
                    ],
                  },
                },
                {
                  name: "--spark-config-file-path",
                  description:
                    "Absolute path of Spark pool properties configuration file",
                  args: { name: "spark-config-file-path" },
                },
                {
                  name: "--spark-events-folder",
                  description: "The Spark events folder",
                  args: { name: "spark-events-folder" },
                },
                {
                  name: "--spark-log-folder",
                  description: "The default Spark log folder",
                  args: { name: "spark-log-folder" },
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
              description: "Delete a Spark pool",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the Spark pool",
                  args: { name: "name" },
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
                  name: "--workspace-name",
                  description: "The workspace name",
                  args: { name: "workspace-name" },
                },
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "list",
              description: "List all Spark pools",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--workspace-name",
                  description: "The workspace name",
                  args: { name: "workspace-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description: "Get a Spark pool",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the Spark pool",
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
                  name: "--workspace-name",
                  description: "The workspace name",
                  args: { name: "workspace-name" },
                },
              ],
            },
            {
              name: "update",
              description: "Update the Spark pool",
              options: [
                {
                  name: "--delay",
                  description: "The delay time whose unit is minute",
                  args: { name: "delay" },
                },
                {
                  name: "--enable-auto-pause",
                  description: "The flag of enabling auto pause",
                  args: {
                    name: "enable-auto-pause",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--enable-auto-scale",
                  description: "The flag of enabling auto scale",
                  args: {
                    name: "enable-auto-scale",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--enable-dynamic-exec",
                  description:
                    "Indicates whether Dynamic Executor Allocation is enabled or not",
                  args: {
                    name: "enable-dynamic-exec",
                    suggestions: ["false", "true"],
                  },
                },
                { name: "--force", description: "The flag of force operation" },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--library-requirements",
                  description: "The library requirements file",
                  args: { name: "library-requirements" },
                },
                {
                  name: "--max-executors",
                  description: "The maximum number of executors alloted",
                  args: { name: "max-executors" },
                },
                {
                  name: "--max-node-count",
                  description: "The max node count",
                  args: { name: "max-node-count" },
                },
                {
                  name: "--min-executors",
                  description: "The minimum number of executors alloted",
                  args: { name: "min-executors" },
                },
                {
                  name: "--min-node-count",
                  description: "The min node count",
                  args: { name: "min-node-count" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the Spark pool",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--node-count",
                  description: "The number of node",
                  args: { name: "node-count" },
                },
                {
                  name: "--node-size",
                  description:
                    "The level of compute power that each node in the Big Data pool has",
                  args: {
                    name: "node-size",
                    suggestions: [
                      "Large",
                      "Medium",
                      "None",
                      "Small",
                      "XLarge",
                      "XXLarge",
                      "XXXLarge",
                    ],
                  },
                },
                {
                  name: "--package",
                  description: "List of workspace packages name",
                  args: { name: "package" },
                },
                {
                  name: "--package-action",
                  description:
                    "Package action must be specified when you add or remove a workspace package from a Apache Spark pool",
                  args: {
                    name: "package-action",
                    suggestions: ["Add", "Remove"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--spark-config-file-path",
                  description:
                    "Absolute path of Spark pool properties configuration file",
                  args: { name: "spark-config-file-path" },
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
                  name: "--workspace-name",
                  description: "The workspace name",
                  args: { name: "workspace-name" },
                },
              ],
            },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition of a Spark pool is met",
              options: [
                {
                  name: "--big-data-pool-name",
                  description: "Big Data pool name",
                  args: { name: "big-data-pool-name" },
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
                {
                  name: "--exists",
                  description: "Wait until the resource exists",
                },
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
                {
                  name: "--workspace-name",
                  description: "The workspace name",
                  args: { name: "workspace-name" },
                },
              ],
            },
          ],
        },
        {
          name: "session",
          description: "Manage Synapse Spark sessions",
          subcommands: [
            {
              name: "cancel",
              description: "Cancel a Spark session",
              options: [
                {
                  name: "--livy-id",
                  description: "The id of the Spark session job",
                  args: { name: "livy-id" },
                  isRequired: true,
                },
                {
                  name: "--spark-pool-name",
                  description: "The name of the Spark pool",
                  args: { name: "spark-pool-name" },
                  isRequired: true,
                },
                {
                  name: "--workspace-name",
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                  isRequired: true,
                },
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "create",
              description: "Create a Spark session",
              options: [
                {
                  name: "--executor-size",
                  description: "The executor size",
                  args: {
                    name: "executor-size",
                    suggestions: ["Large", "Medium", "Small"],
                  },
                  isRequired: true,
                },
                {
                  name: "--executors",
                  description: "The number of executors",
                  args: { name: "executors" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "The Spark session name",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--spark-pool-name",
                  description: "The name of the Spark pool",
                  args: { name: "spark-pool-name" },
                  isRequired: true,
                },
                {
                  name: "--workspace-name",
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                  isRequired: true,
                },
                {
                  name: "--configuration",
                  description: "The configuration of Spark session",
                  args: { name: "configuration" },
                },
                {
                  name: "--reference-files",
                  description:
                    "Additional files used for reference in the main definition file",
                  args: { name: "reference-files" },
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
              name: "list",
              description: "List all Spark sessions",
              options: [
                {
                  name: "--spark-pool-name",
                  description: "The name of the Spark pool",
                  args: { name: "spark-pool-name" },
                  isRequired: true,
                },
                {
                  name: "--workspace-name",
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                  isRequired: true,
                },
                {
                  name: "--from-index",
                  description:
                    "Optional parameter specifying which index the list should begin from",
                  args: { name: "from-index" },
                },
                {
                  name: "--size",
                  description:
                    "The size of the returned list.By default it is 20 and that is the maximum",
                  args: { name: "size" },
                },
              ],
            },
            {
              name: "reset-timeout",
              description: "Reset a Spark session timeout time",
              options: [
                {
                  name: "--livy-id",
                  description: "The id of the Spark session job",
                  args: { name: "livy-id" },
                  isRequired: true,
                },
                {
                  name: "--spark-pool-name",
                  description: "The name of the Spark pool",
                  args: { name: "spark-pool-name" },
                  isRequired: true,
                },
                {
                  name: "--workspace-name",
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description: "Get a Spark session",
              options: [
                {
                  name: "--livy-id",
                  description: "The id of the Spark session job",
                  args: { name: "livy-id" },
                  isRequired: true,
                },
                {
                  name: "--spark-pool-name",
                  description: "The name of the Spark pool",
                  args: { name: "spark-pool-name" },
                  isRequired: true,
                },
                {
                  name: "--workspace-name",
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                  isRequired: true,
                },
              ],
            },
          ],
        },
        {
          name: "statement",
          description: "Manage Synapse Spark statements",
          subcommands: [
            {
              name: "cancel",
              description: "Cancel a Spark statement",
              options: [
                {
                  name: "--livy-id",
                  description: "The id of the statement",
                  args: { name: "livy-id" },
                  isRequired: true,
                },
                {
                  name: "--session-id",
                  description: "The id of Spark session",
                  args: { name: "session-id" },
                  isRequired: true,
                },
                {
                  name: "--spark-pool-name",
                  description: "The name of the Spark pool",
                  args: { name: "spark-pool-name" },
                  isRequired: true,
                },
                {
                  name: "--workspace-name",
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                  isRequired: true,
                },
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "invoke",
              description: "Invoke a Spark statement",
              options: [
                {
                  name: "--code",
                  description:
                    "The code of Spark statement. This is either the code contents or use @<file path> to load the content from a file",
                  args: { name: "code" },
                  isRequired: true,
                },
                {
                  name: "--language",
                  description: "The language of Spark statement",
                  args: {
                    name: "language",
                    suggestions: [
                      "CSharp",
                      "PySpark",
                      "Python",
                      "SQL",
                      "Scala",
                      "Spark",
                      "SparkDotNet",
                    ],
                  },
                  isRequired: true,
                },
                {
                  name: "--session-id",
                  description: "The id of Spark session",
                  args: { name: "session-id" },
                  isRequired: true,
                },
                {
                  name: "--spark-pool-name",
                  description: "The name of the Spark pool",
                  args: { name: "spark-pool-name" },
                  isRequired: true,
                },
                {
                  name: "--workspace-name",
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "list",
              description: "List all Spark statements",
              options: [
                {
                  name: "--session-id",
                  description: "The id of Spark session",
                  args: { name: "session-id" },
                  isRequired: true,
                },
                {
                  name: "--spark-pool-name",
                  description: "The name of the Spark pool",
                  args: { name: "spark-pool-name" },
                  isRequired: true,
                },
                {
                  name: "--workspace-name",
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description: "Get a Spark statement",
              options: [
                {
                  name: "--livy-id",
                  description: "The id of the statement",
                  args: { name: "livy-id" },
                  isRequired: true,
                },
                {
                  name: "--session-id",
                  description: "The id of Spark session",
                  args: { name: "session-id" },
                  isRequired: true,
                },
                {
                  name: "--spark-pool-name",
                  description: "The name of the Spark pool",
                  args: { name: "spark-pool-name" },
                  isRequired: true,
                },
                {
                  name: "--workspace-name",
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                  isRequired: true,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "spark-job-definition",
      description: "Manage spark job definitions in a synapse workspace",
      subcommands: [
        {
          name: "create",
          description: "Create a spark job definition",
          options: [
            {
              name: "--file",
              description:
                "Properties may be supplied from a JSON file using the @{path} syntax or a JSON string",
              args: { name: "file" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The spark job definition name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
              isRequired: true,
            },
            {
              name: "--folder-path",
              description:
                "The folder that this spark job definition is in. If not specified, it will appear at the root level. Eg: folder/subfolder1",
              args: { name: "folder-path" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a spark job definition",
          options: [
            {
              name: ["--name", "-n"],
              description: "The spark job definition name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
              isRequired: true,
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
          ],
        },
        {
          name: "list",
          description: "List spark job definitions",
          options: [
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description: "Get a spark job definition",
          options: [
            {
              name: ["--name", "-n"],
              description: "The spark job definition name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update",
          description: "Update a spark job definition",
          options: [
            {
              name: "--file",
              description:
                "Properties may be supplied from a JSON file using the @{path} syntax or a JSON string",
              args: { name: "file" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The spark job definition name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
              isRequired: true,
            },
            {
              name: "--folder-path",
              description:
                "The folder that this spark job definition is in. If not specified, it will appear at the root level. Eg: folder/subfolder1",
              args: { name: "folder-path" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of a spark job definition is met",
          options: [
            {
              name: ["--name", "-n"],
              description: "The spark job definition name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
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
      name: "sql",
      description: "Manage SQL pools",
      subcommands: [
        {
          name: "ad-admin",
          description: "Manage SQL Active Directory administrator",
          subcommands: [
            {
              name: "create",
              description:
                "Create the SQL Azure Active Directory administrator",
              options: [
                {
                  name: ["--display-name", "-u"],
                  description:
                    "Display name of the Azure AD administrator user or group",
                  args: { name: "display-name" },
                  isRequired: true,
                },
                {
                  name: ["--object-id", "-i"],
                  description: "The unique ID of the Azure AD administrator",
                  args: { name: "object-id" },
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
                  name: "--workspace-name",
                  description: "The workspace name",
                  args: { name: "workspace-name" },
                  isRequired: true,
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete the SQL Azure Active Directory administrator",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--workspace-name",
                  description: "The workspace name",
                  args: { name: "workspace-name" },
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
              name: "show",
              description: "Get the SQL Azure Active Directory administrator",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--workspace-name",
                  description: "The workspace name",
                  args: { name: "workspace-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "update",
              description:
                "Update the SQL Azure Active Directory administrator",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--workspace-name",
                  description: "The workspace name",
                  args: { name: "workspace-name" },
                  isRequired: true,
                },
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add" },
                },
                {
                  name: ["--display-name", "-u"],
                  description:
                    "Display name of the Azure AD administrator user or group",
                  args: { name: "display-name" },
                },
                {
                  name: "--force-string",
                  description:
                    "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: ["--object-id", "-i"],
                  description: "The unique ID of the Azure AD administrator",
                  args: { name: "object-id" },
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
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition is met",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--workspace-name",
                  description: "The workspace name",
                  args: { name: "workspace-name" },
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
                {
                  name: "--exists",
                  description: "Wait until the resource exists",
                },
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
          name: "audit-policy",
          description: "Manage SQL auditing policy",
          subcommands: [
            {
              name: "show",
              description: "Get a SQL's auditing policy",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--workspace-name",
                  description: "The workspace name",
                  args: { name: "workspace-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "update",
              description: "Update a SQL's auditing policy",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--workspace-name",
                  description: "The workspace name",
                  args: { name: "workspace-name" },
                  isRequired: true,
                },
                {
                  name: "--actions",
                  description: "List of actions and action groups to audit",
                  args: { name: "actions" },
                },
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add" },
                },
                {
                  name: "--blob-auditing-policy-name",
                  description: "",
                  args: { name: "blob-auditing-policy-name" },
                },
                {
                  name: ["--blob-storage-target-state", "--bsts"],
                  description:
                    "Indicate whether blob storage is a destination for audit records",
                  args: {
                    name: "blob-storage-target-state",
                    suggestions: ["Disabled", "Enabled"],
                  },
                },
                {
                  name: ["--event-hub", "--eh"],
                  description:
                    "The name of the event hub. If none is specified when providing event_hub_authorization_rule_id, the default event hub will be selected",
                  args: { name: "event-hub" },
                },
                {
                  name: ["--event-hub-authorization-rule-id", "--ehari"],
                  description:
                    "The resource Id for the event hub authorization rule",
                  args: { name: "event-hub-authorization-rule-id" },
                },
                {
                  name: ["--event-hub-target-state", "--ehts"],
                  description:
                    "Indicate whether event hub is a destination for audit records",
                  args: {
                    name: "event-hub-target-state",
                    suggestions: ["Disabled", "Enabled"],
                  },
                },
                {
                  name: "--enable-azure-monitor",
                  description: "Whether enabling azure monitor target or not",
                  args: {
                    name: "enable-azure-monitor",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--force-string",
                  description:
                    "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
                },
                {
                  name: ["--log-analytics-target-state", "--lats"],
                  description:
                    "Indicate whether log analytics is a destination for audit records",
                  args: {
                    name: "log-analytics-target-state",
                    suggestions: ["Disabled", "Enabled"],
                  },
                },
                {
                  name: ["--log-analytics-workspace-resource-id", "--lawri"],
                  description:
                    "The workspace ID (resource ID of a Log Analytics workspace) for a Log Analytics workspace to which you would like to send Audit Logs",
                  args: { name: "log-analytics-workspace-resource-id" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: ["--queue-delay-milliseconds", "--queue-delay-time"],
                  description:
                    "The amount of time in milliseconds that can elapse before audit actions are forced to be processed",
                  args: { name: "queue-delay-milliseconds" },
                },
                {
                  name: "--remove",
                  description:
                    "Remove a property or an element from a list. Example: --remove property.list OR --remove propertyToRemove",
                  args: { name: "remove" },
                },
                {
                  name: "--retention-days",
                  description: "The number of days to retain audit logs",
                  args: { name: "retention-days" },
                },
                {
                  name: "--set",
                  description:
                    "Update an object by specifying a property path and value to set. Example: --set property1.property2=",
                  args: { name: "set" },
                },
                {
                  name: "--state",
                  description: "Auditing policy state",
                  args: { name: "state", suggestions: ["Disabled", "Enabled"] },
                },
                {
                  name: "--storage-account",
                  description: "Name of the storage account",
                  args: { name: "storage-account" },
                },
                {
                  name: "--storage-endpoint",
                  description: "The storage account endpoint",
                  args: { name: "storage-endpoint" },
                },
                {
                  name: "--storage-key",
                  description: "Access key for the storage account",
                  args: { name: "storage-key" },
                },
                {
                  name: "--storage-subscription",
                  description: "The subscription id of storage account",
                  args: { name: "storage-subscription" },
                },
                {
                  name: "--use-secondary-key",
                  description:
                    "Indicates whether using the secondary storeage key or not",
                  args: {
                    name: "use-secondary-key",
                    suggestions: ["false", "true"],
                  },
                },
              ],
            },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition is met",
              options: [
                {
                  name: "--blob-auditing-policy-name",
                  description: "The name of the blob auditing policy",
                  args: { name: "blob-auditing-policy-name" },
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
                  name: "--workspace-name",
                  description: "The workspace name",
                  args: { name: "workspace-name" },
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
                {
                  name: "--exists",
                  description: "Wait until the resource exists",
                },
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
          name: "pool",
          description: "Manage SQL pools",
          subcommands: [
            {
              name: "create",
              description: "Create a SQL pool",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The SQL pool name",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--performance-level",
                  description: "The performance level",
                  args: { name: "performance-level" },
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
                  name: "--workspace-name",
                  description: "The workspace name",
                  args: { name: "workspace-name" },
                  isRequired: true,
                },
                {
                  name: "--collation",
                  description:
                    'Collation defines the rules that sort and compare data, and cannot be changed after SQL pool creation. The default collation is "SQL_Latin1_General_CP1_CI_AS"',
                  args: { name: "collation" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--storage-type",
                  description: "The Storage Account Type",
                  args: { name: "storage-type", suggestions: ["GRS", "LRS"] },
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
              description: "Delete a SQL pool",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The SQL pool name",
                  args: { name: "name" },
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
                  name: "--workspace-name",
                  description: "The workspace name",
                  args: { name: "workspace-name" },
                },
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "list",
              description: "List all SQL pools",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--workspace-name",
                  description: "The workspace name",
                  args: { name: "workspace-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "list-deleted",
              description: "List all deleted SQL pools",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--workspace-name",
                  description: "The workspace name",
                  args: { name: "workspace-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "pause",
              description: "Pause a SQL pool",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The SQL pool name",
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
                  name: "--workspace-name",
                  description: "The workspace name",
                  args: { name: "workspace-name" },
                },
              ],
            },
            {
              name: "restore",
              description: "Create a new SQL pool by restoring from a backup",
              options: [
                {
                  name: ["--destination-name", "--dest-name"],
                  description:
                    "Name of the sql pool that will be created as the restore destination",
                  args: { name: "destination-name" },
                  isRequired: true,
                },
                {
                  name: "--deleted-time",
                  description:
                    'If specified, restore from a deleted database instead of from an existing database. Must match the deleted time of a deleted database in the same server. Either --time or --deleted-time (or both) must be specified. Time should be in following format: "YYYY-MM-DDTHH:MM:SS"',
                  args: { name: "deleted-time" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The SQL pool name",
                  args: { name: "name" },
                },
                {
                  name: "--performance-level",
                  description: "The performance level",
                  args: { name: "performance-level" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--storage-type",
                  description: "The Storage Account Type",
                  args: { name: "storage-type", suggestions: ["GRS", "LRS"] },
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
                  name: ["--time", "-t"],
                  description:
                    'The point in time of the source database that will be restored to create the new database. Must be greater than or equal to the source database\'s earliestRestoreDate value. Either --time or --deleted-time (or both) must be specified. Time should be in following format: "YYYY-MM-DDTHH:MM:SS"',
                  args: { name: "time" },
                },
                {
                  name: "--workspace-name",
                  description: "The workspace name",
                  args: { name: "workspace-name" },
                },
              ],
            },
            {
              name: "resume",
              description: "Resume a SQL pool",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The SQL pool name",
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
                  name: "--workspace-name",
                  description: "The workspace name",
                  args: { name: "workspace-name" },
                },
              ],
            },
            {
              name: "show",
              description: "Get a SQL pool",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The SQL pool name",
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
                  name: "--workspace-name",
                  description: "The workspace name",
                  args: { name: "workspace-name" },
                },
              ],
            },
            {
              name: "show-connection-string",
              description: "Generate a connection string to a SQL pool",
              options: [
                {
                  name: ["--client", "-c"],
                  description: "Type of client connection provider",
                  args: {
                    name: "client",
                    suggestions: ["ado.net", "jdbc", "odbc", "php", "php_pdo"],
                  },
                  isRequired: true,
                },
                {
                  name: ["--auth-type", "-a"],
                  description: "Type of authentication",
                  args: {
                    name: "auth-type",
                    suggestions: ["ADIntegrated", "ADPassword", "SqlPassword"],
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
                  description: "The SQL pool name",
                  args: { name: "name" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--workspace-name",
                  description: "The workspace name",
                  args: { name: "workspace-name" },
                },
              ],
            },
            {
              name: "update",
              description: "Update a SQL pool",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The SQL pool name",
                  args: { name: "name" },
                },
                {
                  name: "--performance-level",
                  description: "The performance level",
                  args: { name: "performance-level" },
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
                {
                  name: "--workspace-name",
                  description: "The workspace name",
                  args: { name: "workspace-name" },
                },
              ],
            },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition of a SQL pool is met",
              options: [
                {
                  name: "--sql-pool-name",
                  description: "SQL pool name",
                  args: { name: "sql-pool-name" },
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
                {
                  name: "--exists",
                  description: "Wait until the resource exists",
                },
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
                {
                  name: "--workspace-name",
                  description: "The workspace name",
                  args: { name: "workspace-name" },
                },
              ],
            },
            {
              name: "audit-policy",
              description: "Manage a SQL pool's auditing policy",
              subcommands: [
                {
                  name: "show",
                  description: "Get a SQL pool's auditing policy",
                  options: [
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids" },
                    },
                    {
                      name: ["--name", "-n"],
                      description: "The SQL pool name",
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
                      name: "--workspace-name",
                      description: "The workspace name",
                      args: { name: "workspace-name" },
                    },
                  ],
                },
                {
                  name: "update",
                  description: "Update a SQL pool's auditing policy",
                  options: [
                    {
                      name: "--actions",
                      description: "List of actions and action groups to audit",
                      args: { name: "actions" },
                    },
                    {
                      name: "--add",
                      description:
                        "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                      args: { name: "add" },
                    },
                    {
                      name: ["--blob-storage-target-state", "--bsts"],
                      description:
                        "Indicate whether blob storage is a destination for audit records",
                      args: {
                        name: "blob-storage-target-state",
                        suggestions: ["Disabled", "Enabled"],
                      },
                    },
                    {
                      name: ["--event-hub", "--eh"],
                      description:
                        "The name of the event hub. If none is specified when providing event_hub_authorization_rule_id, the default event hub will be selected",
                      args: { name: "event-hub" },
                    },
                    {
                      name: ["--event-hub-authorization-rule-id", "--ehari"],
                      description:
                        "The resource Id for the event hub authorization rule",
                      args: { name: "event-hub-authorization-rule-id" },
                    },
                    {
                      name: ["--event-hub-target-state", "--ehts"],
                      description:
                        "Indicate whether event hub is a destination for audit records",
                      args: {
                        name: "event-hub-target-state",
                        suggestions: ["Disabled", "Enabled"],
                      },
                    },
                    {
                      name: "--enable-azure-monitor",
                      description:
                        "Whether enabling azure monitor target or not",
                      args: {
                        name: "enable-azure-monitor",
                        suggestions: ["false", "true"],
                      },
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
                      name: ["--log-analytics-target-state", "--lats"],
                      description:
                        "Indicate whether log analytics is a destination for audit records",
                      args: {
                        name: "log-analytics-target-state",
                        suggestions: ["Disabled", "Enabled"],
                      },
                    },
                    {
                      name: [
                        "--log-analytics-workspace-resource-id",
                        "--lawri",
                      ],
                      description:
                        "The workspace ID (resource ID of a Log Analytics workspace) for a Log Analytics workspace to which you would like to send Audit Logs",
                      args: { name: "log-analytics-workspace-resource-id" },
                    },
                    {
                      name: ["--name", "-n"],
                      description: "The SQL pool name",
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
                      name: "--retention-days",
                      description: "The number of days to retain audit logs",
                      args: { name: "retention-days" },
                    },
                    {
                      name: "--set",
                      description:
                        "Update an object by specifying a property path and value to set. Example: --set property1.property2=",
                      args: { name: "set" },
                    },
                    {
                      name: "--state",
                      description: "Auditing policy state",
                      args: {
                        name: "state",
                        suggestions: ["Disabled", "Enabled"],
                      },
                    },
                    {
                      name: "--storage-account",
                      description: "Name of the storage account",
                      args: { name: "storage-account" },
                    },
                    {
                      name: "--storage-endpoint",
                      description: "The storage account endpoint",
                      args: { name: "storage-endpoint" },
                    },
                    {
                      name: "--storage-key",
                      description: "Access key for the storage account",
                      args: { name: "storage-key" },
                    },
                    {
                      name: "--storage-subscription",
                      description: "The subscription id of storage account",
                      args: { name: "storage-subscription" },
                    },
                    {
                      name: "--subscription",
                      description:
                        "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                      args: { name: "subscription" },
                    },
                    {
                      name: "--use-secondary-key",
                      description:
                        "Indicates whether using the secondary storeage key or not",
                      args: {
                        name: "use-secondary-key",
                        suggestions: ["false", "true"],
                      },
                    },
                    {
                      name: "--workspace-name",
                      description: "The workspace name",
                      args: { name: "workspace-name" },
                    },
                  ],
                },
              ],
            },
            {
              name: "classification",
              description: "Manage sensitivity classifications",
              subcommands: [
                {
                  name: "create",
                  description: "Create a column's sensitivity classification",
                  options: [
                    {
                      name: "--column",
                      description: "The name of column",
                      args: { name: "column" },
                      isRequired: true,
                    },
                    {
                      name: "--information-type",
                      description: "The information type",
                      args: { name: "information-type" },
                      isRequired: true,
                    },
                    {
                      name: "--label",
                      description: "The label name",
                      args: { name: "label" },
                      isRequired: true,
                    },
                    {
                      name: ["--name", "-n"],
                      description: "The SQL pool name",
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
                      name: "--schema",
                      description: "The name of schema",
                      args: { name: "schema" },
                      isRequired: true,
                    },
                    {
                      name: "--table",
                      description: "The name of table",
                      args: { name: "table" },
                      isRequired: true,
                    },
                    {
                      name: "--workspace-name",
                      description: "The workspace name",
                      args: { name: "workspace-name" },
                      isRequired: true,
                    },
                  ],
                },
                {
                  name: "delete",
                  description:
                    "Delete the sensitivity classification of a given column",
                  options: [
                    {
                      name: "--column",
                      description: "The name of column",
                      args: { name: "column" },
                      isRequired: true,
                    },
                    {
                      name: "--schema",
                      description: "The name of schema",
                      args: { name: "schema" },
                      isRequired: true,
                    },
                    {
                      name: "--table",
                      description: "The name of table",
                      args: { name: "table" },
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
                      description: "The SQL pool name",
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
                      name: "--workspace-name",
                      description: "The workspace name",
                      args: { name: "workspace-name" },
                    },
                  ],
                },
                {
                  name: "list",
                  description:
                    "Get the sensitivity classifications of a given SQL pool",
                  options: [
                    {
                      name: ["--name", "-n"],
                      description: "The SQL pool name",
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
                      name: "--workspace-name",
                      description: "The workspace name",
                      args: { name: "workspace-name" },
                      isRequired: true,
                    },
                    {
                      name: "--filter",
                      description:
                        "An OData filter expression that filters elements in the collection. Default value is None",
                      args: { name: "filter" },
                    },
                  ],
                },
                {
                  name: "show",
                  description:
                    "Get the sensitivity classification of a given column",
                  options: [
                    {
                      name: "--column",
                      description: "The name of column",
                      args: { name: "column" },
                      isRequired: true,
                    },
                    {
                      name: "--schema",
                      description: "The name of schema",
                      args: { name: "schema" },
                      isRequired: true,
                    },
                    {
                      name: "--table",
                      description: "The name of table",
                      args: { name: "table" },
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
                      description: "The SQL pool name",
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
                      name: "--workspace-name",
                      description: "The workspace name",
                      args: { name: "workspace-name" },
                    },
                  ],
                },
                {
                  name: "update",
                  description: "Update a column's sensitivity classification",
                  options: [
                    {
                      name: "--column",
                      description: "The name of column",
                      args: { name: "column" },
                      isRequired: true,
                    },
                    {
                      name: "--schema",
                      description: "The name of schema",
                      args: { name: "schema" },
                      isRequired: true,
                    },
                    {
                      name: "--table",
                      description: "The name of table",
                      args: { name: "table" },
                      isRequired: true,
                    },
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids" },
                    },
                    {
                      name: "--information-type",
                      description: "The information type",
                      args: { name: "information-type" },
                    },
                    {
                      name: "--label",
                      description: "The label name",
                      args: { name: "label" },
                    },
                    {
                      name: ["--name", "-n"],
                      description: "The SQL pool name",
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
                      name: "--workspace-name",
                      description: "The workspace name",
                      args: { name: "workspace-name" },
                    },
                  ],
                },
                {
                  name: "recommendation",
                  description:
                    "Manage sensitivity classification recommendations",
                  subcommands: [
                    {
                      name: "disable",
                      description:
                        "Disable sensitivity recommendations for a given column(recommendations are enabled by default on all columns)",
                      options: [
                        {
                          name: "--column",
                          description: "The name of column",
                          args: { name: "column" },
                          isRequired: true,
                        },
                        {
                          name: "--schema",
                          description: "The name of schema",
                          args: { name: "schema" },
                          isRequired: true,
                        },
                        {
                          name: "--table",
                          description: "The name of table",
                          args: { name: "table" },
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
                          description: "The SQL pool name",
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
                          name: "--workspace-name",
                          description: "The workspace name",
                          args: { name: "workspace-name" },
                        },
                      ],
                    },
                    {
                      name: "enable",
                      description:
                        "Enable sensitivity recommendations for a given column(recommendations are enabled by default on all columns)",
                      options: [
                        {
                          name: "--column",
                          description: "The name of column",
                          args: { name: "column" },
                          isRequired: true,
                        },
                        {
                          name: "--schema",
                          description: "The name of schema",
                          args: { name: "schema" },
                          isRequired: true,
                        },
                        {
                          name: "--table",
                          description: "The name of table",
                          args: { name: "table" },
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
                          description: "The SQL pool name",
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
                          name: "--workspace-name",
                          description: "The workspace name",
                          args: { name: "workspace-name" },
                        },
                      ],
                    },
                    {
                      name: "list",
                      description:
                        "List the recommended sensitivity classifications of a given SQL pool",
                      options: [
                        {
                          name: ["--name", "-n"],
                          description: "The SQL pool name",
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
                          name: "--workspace-name",
                          description: "The workspace name",
                          args: { name: "workspace-name" },
                          isRequired: true,
                        },
                        {
                          name: "--filter",
                          description:
                            "An OData filter expression that filters elements in the collection. Default value is None",
                          args: { name: "filter" },
                        },
                        {
                          name: "--included-disabled",
                          description:
                            "Indicates whether the result should include disabled recommendations",
                          args: {
                            name: "included-disabled",
                            suggestions: ["false", "true"],
                          },
                        },
                        {
                          name: "--skip-token",
                          description:
                            "An OData query option to indicate how many elements to skip in the collection. Default value is None",
                          args: { name: "skip-token" },
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              name: "tde",
              description: "Manage a SQL pool's transparent data encryption",
              subcommands: [
                {
                  name: "set",
                  description:
                    "Set a SQL pool's transparent data encryption configuration",
                  options: [
                    {
                      name: "--status",
                      description: "Status of the transparent data encryption",
                      args: {
                        name: "status",
                        suggestions: ["Disabled", "Enabled"],
                      },
                      isRequired: true,
                    },
                    {
                      name: ["--transparent-data-encryption-name", "-d"],
                      description: "Name of the transparent data encryption",
                      args: { name: "transparent-data-encryption-name" },
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
                      description: "The SQL pool name",
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
                      name: "--workspace-name",
                      description: "The workspace name",
                      args: { name: "workspace-name" },
                    },
                  ],
                },
                {
                  name: "show",
                  description:
                    "Get a SQL pool's transparent data encryption configuration",
                  options: [
                    {
                      name: ["--transparent-data-encryption-name", "-d"],
                      description: "Name of the transparent data encryption",
                      args: { name: "transparent-data-encryption-name" },
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
                      description: "The SQL pool name",
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
                      name: "--workspace-name",
                      description: "The workspace name",
                      args: { name: "workspace-name" },
                    },
                  ],
                },
              ],
            },
            {
              name: "threat-policy",
              description: "Manage a SQL pool's threat detection policies",
              subcommands: [
                {
                  name: "show",
                  description: "Get a SQL pool's threat detection policy",
                  options: [
                    {
                      name: ["--security-alert-policy-name", "-s"],
                      description: "Name of the security alert policy",
                      args: { name: "security-alert-policy-name" },
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
                      description: "The SQL pool name",
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
                      name: "--workspace-name",
                      description: "The workspace name",
                      args: { name: "workspace-name" },
                    },
                  ],
                },
                {
                  name: "update",
                  description: "Update a SQL pool's threat detection policy",
                  options: [
                    {
                      name: "--add",
                      description:
                        "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                      args: { name: "add" },
                    },
                    {
                      name: "--disabled-alerts",
                      description: "List of disabled alerts",
                      args: { name: "disabled-alerts" },
                    },
                    {
                      name: "--email-account-admins",
                      description:
                        "Whether the alert is sent to the account administrators",
                      args: {
                        name: "email-account-admins",
                        suggestions: ["false", "true"],
                      },
                    },
                    {
                      name: "--email-addresses",
                      description:
                        "List of email addresses that alerts are sent to",
                      args: { name: "email-addresses" },
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
                      description: "The SQL pool name",
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
                      name: "--retention-days",
                      description:
                        "The number of days to retain threat detection logs",
                      args: { name: "retention-days" },
                    },
                    {
                      name: ["--security-alert-policy-name", "-s"],
                      description: "Name of the security alert policy",
                      args: { name: "security-alert-policy-name" },
                    },
                    {
                      name: "--set",
                      description:
                        "Update an object by specifying a property path and value to set. Example: --set property1.property2=",
                      args: { name: "set" },
                    },
                    {
                      name: "--state",
                      description: "Threat detection policy state",
                      args: {
                        name: "state",
                        suggestions: ["Disabled", "Enabled", "New"],
                      },
                    },
                    {
                      name: "--storage-account",
                      description: "Name of the storage account",
                      args: { name: "storage-account" },
                    },
                    {
                      name: "--storage-endpoint",
                      description: "The storage account endpoint",
                      args: { name: "storage-endpoint" },
                    },
                    {
                      name: "--storage-key",
                      description: "Access key for the storage account",
                      args: { name: "storage-key" },
                    },
                    {
                      name: "--subscription",
                      description:
                        "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                      args: { name: "subscription" },
                    },
                    {
                      name: "--workspace-name",
                      description: "The workspace name",
                      args: { name: "workspace-name" },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "sql-script",
      description: "Manage SQL scripts in a synapse workspace",
      subcommands: [
        {
          name: "create",
          description: "Create or update a SQL script",
          options: [
            {
              name: ["--file", "-f"],
              description: "The SQL query file path",
              args: { name: "file" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The SQL script name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
              isRequired: true,
            },
            {
              name: "--additional-properties",
              description: "The SQL script additional properties",
              args: { name: "additional-properties" },
            },
            {
              name: "--description",
              description: "The SQL script description",
              args: { name: "description" },
            },
            {
              name: "--folder-name",
              description:
                "The folder that this SQL script is in. If not specified, this SQL script will appear at the root level. Eg: folder/subfolder1",
              args: { name: "folder-name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--result-limit",
              description:
                "The SQL query results limit. Default is 5000. '-1' is no limit",
              args: { name: "result-limit", suggestions: ["-1", "5000"] },
            },
            {
              name: "--sql-database-name",
              description: "The SQL database name",
              args: { name: "sql-database-name" },
            },
            {
              name: "--sql-pool-name",
              description: "The SQL pool name",
              args: { name: "sql-pool-name" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a SQL script",
          options: [
            {
              name: ["--name", "-n"],
              description: "The SQL script name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
              isRequired: true,
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
          ],
        },
        {
          name: "export",
          description: "Export a SQL script",
          options: [
            {
              name: "--output-folder",
              description: "The SQL script export path",
              args: { name: "output-folder" },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The SQL script name",
              args: { name: "name" },
            },
          ],
        },
        {
          name: "import",
          description: "Import a SQL script",
          options: [
            {
              name: ["--file", "-f"],
              description: "The SQL query file path",
              args: { name: "file" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The SQL script name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
              isRequired: true,
            },
            {
              name: "--additional-properties",
              description: "The SQL script additional properties",
              args: { name: "additional-properties" },
            },
            {
              name: "--description",
              description: "The SQL script description",
              args: { name: "description" },
            },
            {
              name: "--folder-name",
              description:
                "The folder that this SQL script is in. If not specified, this SQL script will appear at the root level. Eg: folder/subfolder1",
              args: { name: "folder-name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--result-limit",
              description:
                "The SQL query results limit. Default is 5000. '-1' is no limit",
              args: { name: "result-limit", suggestions: ["-1", "5000"] },
            },
            {
              name: "--sql-database-name",
              description: "The SQL database name",
              args: { name: "sql-database-name" },
            },
            {
              name: "--sql-pool-name",
              description: "The SQL pool name",
              args: { name: "sql-pool-name" },
            },
          ],
        },
        {
          name: "list",
          description: "List SQL scripts in a synapse workspace",
          options: [
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description: "Get a SQL script",
          options: [
            {
              name: ["--name", "-n"],
              description: "The SQL script name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of a sql script is met",
          options: [
            {
              name: ["--name", "-n"],
              description: "The SQL script name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
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
      name: "trigger",
      description: "Manage Synapse's triggers",
      subcommands: [
        {
          name: "create",
          description: "Create a trigger",
          options: [
            {
              name: "--file",
              description:
                "Properties may be supplied from a JSON file using the @{path} syntax or a JSON string",
              args: { name: "file" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The trigger name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
              isRequired: true,
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a trigger",
          options: [
            {
              name: ["--name", "-n"],
              description: "The trigger name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
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
          name: "get-event-subscription-status",
          description: "Get a trigger's event subscription status",
          options: [
            {
              name: ["--name", "-n"],
              description: "The trigger name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list",
          description: "List triggers",
          options: [
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "set",
          description: "Update an exist trigger",
          options: [
            {
              name: "--file",
              description:
                "Properties may be supplied from a JSON file using the @{path} syntax or a JSON string",
              args: { name: "file" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The trigger name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
              isRequired: true,
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
          ],
        },
        {
          name: "show",
          description: "Get a trigger",
          options: [
            {
              name: ["--name", "-n"],
              description: "The trigger name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "start",
          description: "Starts a trigger",
          options: [
            {
              name: ["--name", "-n"],
              description: "The trigger name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
              isRequired: true,
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
          ],
        },
        {
          name: "stop",
          description: "Stops a trigger",
          options: [
            {
              name: ["--name", "-n"],
              description: "The trigger name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
              isRequired: true,
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
          ],
        },
        {
          name: "subscribe-to-event",
          description: "Subscribe event trigger to events",
          options: [
            {
              name: ["--name", "-n"],
              description: "The trigger name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
              isRequired: true,
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
          ],
        },
        {
          name: "unsubscribe-from-event",
          description: "Unsubscribe event trigger from events",
          options: [
            {
              name: ["--name", "-n"],
              description: "The trigger name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
              isRequired: true,
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
          ],
        },
        {
          name: "update",
          description: "Update an exist trigger",
          options: [
            {
              name: "--file",
              description:
                "Properties may be supplied from a JSON file using the @{path} syntax or a JSON string",
              args: { name: "file" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The trigger name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
              isRequired: true,
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of a trigger is met",
          options: [
            {
              name: ["--name", "-n"],
              description: "The trigger name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
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
      name: "trigger-run",
      description: "Synapse trigger-run",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel a single trigger instance by runId",
          options: [
            {
              name: ["--name", "-n"],
              description: "The trigger name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--run-id",
              description: "The trigger run identifier",
              args: { name: "run-id" },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "query-by-workspace",
          description:
            "Query trigger runs in the workspace based on input filter conditions",
          options: [
            {
              name: "--last-updated-after",
              description:
                "The time at or after which the run event was updated in 'ISO 8601' format",
              args: { name: "last-updated-after" },
              isRequired: true,
            },
            {
              name: "--last-updated-before",
              description:
                "The time at or before which the run event was updated in 'ISO 8601' format",
              args: { name: "last-updated-before" },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
              isRequired: true,
            },
            {
              name: "--continuation-token",
              description:
                "The continuation token for getting the next page of results. Null for first page",
              args: { name: "continuation-token" },
            },
            {
              name: "--filters",
              description: "List of filters",
              args: { name: "filters" },
            },
            {
              name: "--order-by",
              description: "List of OrderBy option",
              args: { name: "order-by" },
            },
          ],
        },
        {
          name: "rerun",
          description: "Rerun single trigger instance by runId",
          options: [
            {
              name: ["--name", "-n"],
              description: "The trigger name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--run-id",
              description: "The trigger run identifier",
              args: { name: "run-id" },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "workspace",
      description: "Manage Synapse workspaces",
      subcommands: [
        {
          name: "activate",
          description:
            "Activates a workspace and change it's state from pending to success state when the workspace is first being provisioned and double encryption is enabled",
          options: [
            {
              name: "--key-identifier",
              description:
                "The Key Vault Url of the workspace encryption key. should be in the format of: https://{keyvaultname}.vault.azure.net/keys/{keyname}",
              args: { name: "key-identifier" },
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
                'The workspace customer-managed key display name. All existing keys can be found using /"az synapse workspace key list/" cmdlet',
              args: { name: "name" },
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
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "check-name",
          description: "Check if a Synapse workspace name is available or not",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name you wanted to check",
              args: { name: "name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "create",
          description: "Create a Synapse workspace",
          options: [
            {
              name: "--file-system",
              description: "The file system of the data lake storage account",
              args: { name: "file-system" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The workspace name",
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
              name: ["--sql-admin-login-password", "-p"],
              description: "The sql administrator login password",
              args: { name: "sql-admin-login-password" },
              isRequired: true,
            },
            {
              name: ["--sql-admin-login-user", "-u"],
              description: "The sql administrator login user name",
              args: { name: "sql-admin-login-user" },
              isRequired: true,
            },
            {
              name: "--storage-account",
              description: "The data lake storage account name or resource id",
              args: { name: "storage-account" },
              isRequired: true,
            },
            {
              name: "--account-name",
              description:
                "GitHub account name used for the repository or Azure devops organization name",
              args: { name: "account-name" },
            },
            {
              name: "--allowed-tenant-ids",
              description:
                "The approved Azure AD tenants which outbound data traffic allowed to. The Azure AD tenant of the current user will be included by default. Use ('' in PowerShell) to disable all allowed tenant ids",
              args: { name: "allowed-tenant-ids" },
            },
            {
              name: ["--key-identifier", "--cmk"],
              description:
                "The customer-managed key used to encrypt all data at rest in the workspace. Key identifier should be in the format of: https://{keyvaultname}.vault.azure.net/keys/{keyname}",
              args: { name: "key-identifier" },
            },
            {
              name: "--collaboration-branch",
              description:
                "The branch name where you will collaborate with others and from which you will publish",
              args: { name: "collaboration-branch" },
            },
            {
              name: [
                "--enable-managed-virtual-network",
                "--enable-managed-vnet",
              ],
              description:
                "The flag indicates whether enable managed virtual network",
              args: {
                name: "enable-managed-virtual-network",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--host-name",
              description:
                "If using github Enterprise Server, provide sever URL like https://github.mydomain.com.Do not use this option with GitHub Enterprise Cloud",
              args: { name: "host-name" },
            },
            {
              name: "--key-name",
              description:
                'The workspace customer-managed key display name. All existing keys can be found using "az synapse workspace key list" cmdlet',
              args: { name: "key-name" },
            },
            {
              name: "--last-commit-id",
              description: "The last commit ID",
              args: { name: "last-commit-id" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--managed-rg-name",
              description:
                "Workspace managed resource group. The resource group name uniquely identifies the resource group within the user subscriptionId",
              args: { name: "managed-rg-name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--prevent-data-exfiltration", "--prevent-exfiltration"],
              description:
                "The flag indicates whether enable data exfiltration",
              args: {
                name: "prevent-data-exfiltration",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--project-name",
              description: "The project name to which you are connecting",
              args: { name: "project-name" },
            },
            {
              name: "--repository-name",
              description:
                "The name of the repository to which you are connecting",
              args: { name: "repository-name" },
            },
            {
              name: "--repository-type",
              description: "The repository configuration type",
              args: {
                name: "repository-type",
                suggestions: ["AzureDevOpsGit", "GitHub"],
              },
            },
            {
              name: "--root-folder",
              description:
                "The name of the folder to the location of your Azure synapse JSON resources are imported. Default is /",
              args: { name: "root-folder" },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
            {
              name: "--tenant-id",
              description: "The tenant id used to connect Azure devops",
              args: { name: "tenant-id" },
            },
            {
              name: "--uami-id",
              description:
                "The list of User-assigned Managed Identity Id for workspace",
              args: { name: "uami-id" },
            },
            {
              name: "--uami-id-in-encrypt",
              description:
                "User assigned identity resource Id used in Workspace Encryption",
              args: { name: "uami-id-in-encrypt" },
            },
            {
              name: "--use-sami-in-encrypt",
              description:
                "Whether use System assigned identity in Workspace Encryption. If use uami, please set True.If not, set False",
              args: { name: "use-sami-in-encrypt" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a Synapse workspace",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The workspace name",
              args: { name: "name" },
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
          description: "List all Synapse workspaces",
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
          name: "show",
          description: "Get a Synapse workspace",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The workspace name",
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
          description: "Update a Synapse workspace",
          options: [
            {
              name: "--account-name",
              description:
                "GitHub account name used for the repository or Azure devops organization name",
              args: { name: "account-name" },
            },
            {
              name: "--allowed-tenant-ids",
              description:
                "The approved Azure AD tenants which outbound data traffic allowed to. The Azure AD tenant of the current user will be included by default. Use ('' in PowerShell) to disable all allowed tenant ids",
              args: { name: "allowed-tenant-ids" },
            },
            {
              name: "--collaboration-branch",
              description:
                "The branch name where you will collaborate with others and from which you will publish",
              args: { name: "collaboration-branch" },
            },
            {
              name: "--host-name",
              description:
                "If using github Enterprise Server, provide sever URL like https://github.mydomain.com.Do not use this option with GitHub Enterprise Cloud",
              args: { name: "host-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--key-name",
              description:
                'The workspace customer-managed key display name. All existing keys can be found using "az synapse workspace key list" cmdlet',
              args: { name: "key-name" },
            },
            {
              name: "--last-commit-id",
              description: "The last commit ID",
              args: { name: "last-commit-id" },
            },
            {
              name: ["--name", "-n"],
              description: "The workspace name",
              args: { name: "name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--project-name",
              description: "The project name to which you are connecting",
              args: { name: "project-name" },
            },
            {
              name: "--repository-name",
              description:
                "The name of the repository to which you are connecting",
              args: { name: "repository-name" },
            },
            {
              name: "--repository-type",
              description: "The repository configuration type",
              args: {
                name: "repository-type",
                suggestions: ["AzureDevOpsGit", "GitHub"],
              },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--root-folder",
              description:
                "The name of the folder to the location of your Azure synapse JSON resources are imported. Default is /",
              args: { name: "root-folder" },
            },
            {
              name: ["--sql-admin-login-password", "-p"],
              description: "The sql administrator login password",
              args: { name: "sql-admin-login-password" },
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
              name: "--tenant-id",
              description: "The tenant id used to connect Azure devops",
              args: { name: "tenant-id" },
            },
            {
              name: "--uami-action",
              description:
                "Action must be specified when you add/remove/set user assigned managed identities for workspace.The supported actions are:Add,Remove,Set.Add means to add user assigned managed identities for workspace, Remove means to remove user assigned managed identities from workspace, Set can be used when you want to add and remove user assigned managed identities at the same time, current identities will be coverd by specified ones",
              args: {
                name: "uami-action",
                suggestions: ["Add", "Remove", "Set"],
              },
            },
            {
              name: "--uami-id",
              description:
                "The list of User-assigned Managed Identity Id for workspace",
              args: { name: "uami-id" },
            },
            {
              name: "--uami-id-in-encrypt",
              description:
                "User assigned identity resource Id used in Workspace Encryption",
              args: { name: "uami-id-in-encrypt" },
            },
            {
              name: "--use-sami-in-encrypt",
              description:
                "Whether use System assigned identity in Workspace Encryption. If use uami, please set True.If not, set False",
              args: { name: "use-sami-in-encrypt" },
            },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the workspace is met",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The name of the workspace",
              args: { name: "workspace-name" },
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
        {
          name: "firewall-rule",
          description: "Manage a workspace's firewall rules",
          subcommands: [
            {
              name: "create",
              description: "Create a firewall rule",
              options: [
                {
                  name: "--end-ip-address",
                  description:
                    "The end IP address of the firewall rule. Must be IPv4 format. Must be greater than or equal to startIpAddress",
                  args: { name: "end-ip-address" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "The IP firewall rule name",
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
                  name: "--start-ip-address",
                  description:
                    "The start IP address of the firewall rule. Must be IPv4 format",
                  args: { name: "start-ip-address" },
                  isRequired: true,
                },
                {
                  name: "--workspace-name",
                  description: "The workspace name",
                  args: { name: "workspace-name" },
                  isRequired: true,
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a firewall rule",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The IP firewall rule name",
                  args: { name: "name" },
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
                  name: "--workspace-name",
                  description: "The workspace name",
                  args: { name: "workspace-name" },
                },
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "list",
              description: "List all firewall rules",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--workspace-name",
                  description: "The workspace name",
                  args: { name: "workspace-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description: "Get a firewall rule",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The IP firewall rule name",
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
                  name: "--workspace-name",
                  description: "The workspace name",
                  args: { name: "workspace-name" },
                },
              ],
            },
            {
              name: "update",
              description: "Update a firewall rule",
              options: [
                {
                  name: "--end-ip-address",
                  description:
                    "The end IP address of the firewall rule. Must be IPv4 format. Must be greater than or equal to startIpAddress",
                  args: { name: "end-ip-address" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The IP firewall rule name",
                  args: { name: "name" },
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
                  name: "--start-ip-address",
                  description:
                    "The start IP address of the firewall rule. Must be IPv4 format",
                  args: { name: "start-ip-address" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--workspace-name",
                  description: "The workspace name",
                  args: { name: "workspace-name" },
                },
              ],
            },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition of a firewall rule is met",
              options: [
                {
                  name: "--rule-name",
                  description: "The IP firewall rule name",
                  args: { name: "rule-name" },
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
                {
                  name: "--exists",
                  description: "Wait until the resource exists",
                },
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
                {
                  name: "--workspace-name",
                  description: "The workspace name",
                  args: { name: "workspace-name" },
                },
              ],
            },
          ],
        },
        {
          name: "key",
          description: "Manage workspace's keys",
          subcommands: [
            {
              name: "create",
              description: "Create a workspace's key",
              options: [
                {
                  name: "--key-identifier",
                  description:
                    "The Key Vault Url of the workspace encryption key. should be in the format of: https://{keyvaultname}.vault.azure.net/keys/{keyname}",
                  args: { name: "key-identifier" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description:
                    'The workspace customer-managed key display name. All existing keys can be found using /"az synapse workspace key list/" cmdlet',
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
                  name: "--workspace-name",
                  description: "The workspace name",
                  args: { name: "workspace-name" },
                  isRequired: true,
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete a workspace's key. The key at active status can't be deleted",
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
                    'The workspace customer-managed key display name. All existing keys can be found using /"az synapse workspace key list/" cmdlet',
                  args: { name: "name" },
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
                  name: "--workspace-name",
                  description: "The workspace name",
                  args: { name: "workspace-name" },
                },
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "list",
              description: "List keys under specified workspace",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--workspace-name",
                  description: "The workspace name",
                  args: { name: "workspace-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description: "Show a workspace's key by name",
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
                    'The workspace customer-managed key display name. All existing keys can be found using /"az synapse workspace key list/" cmdlet',
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
                  name: "--workspace-name",
                  description: "The workspace name",
                  args: { name: "workspace-name" },
                },
              ],
            },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition of a workspace key is met",
              options: [
                {
                  name: "--key-name",
                  description: "The name of the workspace key",
                  args: { name: "key-name" },
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
                {
                  name: "--exists",
                  description: "Wait until the resource exists",
                },
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
                {
                  name: "--workspace-name",
                  description: "The workspace name",
                  args: { name: "workspace-name" },
                },
              ],
            },
          ],
        },
        {
          name: "managed-identity",
          description: "Manage workspace's managed-identity",
          subcommands: [
            {
              name: "grant-sql-access",
              description: "Grant workspace's sql-access to managed-identity",
              options: [
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
                  name: "--workspace-name",
                  description: "The workspace name",
                  args: { name: "workspace-name" },
                },
              ],
            },
            {
              name: "revoke-sql-access",
              description: "Revoke workspace's sql-access to managed-identity",
              options: [
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
                  name: "--workspace-name",
                  description: "The workspace name",
                  args: { name: "workspace-name" },
                },
              ],
            },
            {
              name: "show-sql-access",
              description:
                "Show workspace's sql-access state to managed-identity",
              options: [
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
                  name: "--workspace-name",
                  description: "The workspace name",
                  args: { name: "workspace-name" },
                },
              ],
            },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition of sql-access state to managed-identity is met",
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
                  name: "--exists",
                  description: "Wait until the resource exists",
                },
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
                {
                  name: "--workspace-name",
                  description: "The workspace name",
                  args: { name: "workspace-name" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "workspace-package",
      description: "Manage Synapse's workspace packages",
      subcommands: [
        {
          name: "delete",
          description: "Delete a workspace package",
          options: [
            {
              name: ["--package-name", "--package", "--name", "-n"],
              description: "The workspace package name",
              args: { name: "package-name" },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
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
          description: "List workspace packages",
          options: [
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description: "Get a workspace package",
          options: [
            {
              name: ["--package-name", "--package", "--name", "-n"],
              description: "The workspace package name",
              args: { name: "package-name" },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "upload",
          description:
            "Upload a local workspace package file to an Azure Synapse workspace",
          options: [
            {
              name: ["--package", "--file", "-f"],
              description:
                "Specifies a local file path for a file to upload as workspace package",
              args: { name: "package" },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
              isRequired: true,
            },
            {
              name: "--no-progress",
              description:
                "Include this flag to disable progress reporting for the command",
            },
          ],
        },
        {
          name: "upload-batch",
          description:
            "Upload workspace package files from a local directory to an Azure Synapse workspace",
          options: [
            {
              name: ["--source", "-s"],
              description:
                "The directory where the files to be uploaded are located",
              args: { name: "source" },
              isRequired: true,
            },
            {
              name: "--workspace-name",
              description: "The workspace name",
              args: { name: "workspace-name" },
              isRequired: true,
            },
            {
              name: "--no-progress",
              description:
                "Include this flag to disable progress reporting for the command",
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
