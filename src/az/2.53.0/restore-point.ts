const completion: Fig.Spec = {
  name: "restore-point",
  description: "Manage restore point with res",
  subcommands: [
    {
      name: "collection",
      description:
        "Create the restore point collection. Please refer to https://aka.ms/RestorePoints for more details. When updating a restore point collection, only tags may be modified",
      subcommands: [
        {
          name: "create",
          description:
            "Create the restore point collection. Please refer to https://aka.ms/RestorePoints for more details. When updating a restore point collection, only tags may be modified",
          options: [
            {
              name: "--collection-name",
              description: "The name of the restore point collection",
              args: { name: "collection-name" },
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
              name: "--source-id",
              description:
                "Resource Id of the source resource used to create this restore point collection",
              args: { name: "source-id" },
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
          description:
            "Delete the restore point collection. This operation will also delete all the contained restore points",
          options: [
            {
              name: ["--restore-point-collection-name", "--collection-name"],
              description: "The name of the restore point collection",
              args: { name: "restore-point-collection-name" },
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
            "Get the list of restore point collections in a resource group",
          options: [
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
          name: "list-all",
          description:
            "Get the list of restore point collections in the subscription. Use nextLink property in the response to get the next page of restore point collections. Do this till nextLink is not null to fetch all the restore point collections",
        },
        {
          name: "show",
          description: "Get the restore point collection",
          options: [
            {
              name: "--collection-name",
              description: "The name of the restore point collection",
              args: { name: "collection-name" },
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
              name: "--restore-points",
              description:
                "Show all contained restore points in the restore point collection",
              args: { name: "restore-points" },
            },
          ],
        },
        {
          name: "update",
          description: "Update the restore point collection",
          options: [
            {
              name: "--collection-name",
              description: "The name of the restore point collection",
              args: { name: "collection-name" },
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
            "Place the CLI in a waiting state until a condition of the restore-point-collection is met",
          options: [
            {
              name: "--collection-name",
              description: "The name of the restore point collection",
              args: { name: "collection-name" },
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
              name: "--expand",
              description:
                'The expand expression to apply on the operation. If expand=restorePoints, server will return all contained restore points in the restorePointCollection. "restorePoints" Default value is None',
              args: { name: "expand" },
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
      name: "create",
      description:
        "Create the restore point. Updating properties of an existing restore point is not allowed",
      options: [
        {
          name: "--collection-name",
          description: "The name of the restore point collection",
          args: { name: "collection-name" },
          isRequired: true,
        },
        {
          name: ["--restore-point-name", "--name", "-n"],
          description: "The name of the restore point",
          args: { name: "restore-point-name" },
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
          name: "--consistency-mode",
          description:
            "Consistency mode of the restore point. Can be specified in the input while creating a restore point. For now, only CrashConsistent is accepted as a valid input. Please refer to https://aka.ms/RestorePoints for more details",
          args: {
            name: "consistency-mode",
            suggestions: [
              "ApplicationConsistent",
              "CrashConsistent",
              "FileSystemConsistent",
            ],
          },
        },
        {
          name: "--exclude-disks",
          description:
            "List of disk resource ids that the customer wishes to exclude from the restore point. If no disks are specified, all disks will be included",
          args: { name: "exclude-disks" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
        {
          name: "--source-restore-point",
          description:
            "Resource Id of the source restore point from which a copy needs to be created",
          args: { name: "source-restore-point" },
        },
      ],
    },
    {
      name: "delete",
      description: "Delete the restore point",
      options: [
        {
          name: ["--restore-point-collection-name", "--collection-name"],
          description: "The name of the restore point collection",
          args: { name: "restore-point-collection-name" },
        },
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: ["--restore-point-name", "--name", "-n"],
          description: "The name of the restore point",
          args: { name: "restore-point-name" },
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
      name: "show",
      description: "Get the restore point",
      options: [
        {
          name: "--collection-name",
          description: "The name of the restore point collection",
          args: { name: "collection-name" },
          isRequired: true,
        },
        {
          name: ["--restore-point-name", "--name", "-n"],
          description: "The name of the restore point",
          args: { name: "restore-point-name" },
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
          name: "--instance-view",
          description: "Show the instance view of a restore point",
          args: { name: "instance-view" },
        },
      ],
    },
    {
      name: "wait",
      description:
        "Place the CLI in a waiting state until a condition of the restore-point is met",
      options: [
        {
          name: "--collection-name",
          description: "The name of the restore point collection",
          args: { name: "collection-name" },
          isRequired: true,
        },
        {
          name: ["--restore-point-name", "--name", "-n"],
          description: "The name of the restore point",
          args: { name: "restore-point-name" },
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
          name: "--expand",
          description:
            "The expand expression to apply on the operation. 'InstanceView' retrieves information about the run-time state of a restore point. 'instanceView' Default value is None",
          args: { name: "expand" },
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
};

export default completion;
