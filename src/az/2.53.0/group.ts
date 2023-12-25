const completion: Fig.Spec = {
  name: "group",
  description: "Manage resource groups and template deployments",
  subcommands: [
    {
      name: "create",
      description: "Create a new resource group",
      options: [
        {
          name: ["--location", "-l"],
          description:
            "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
          args: { name: "location" },
          isRequired: true,
        },
        {
          name: ["--resource-group", "--name", "-g", "-n"],
          description: "Name of the new resource group",
          args: { name: "resource-group" },
          isRequired: true,
        },
        {
          name: "--managed-by",
          description:
            "The ID of the resource that manages this resource group",
          args: { name: "managed-by" },
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
      description: "Delete a resource group",
      options: [
        {
          name: ["--resource-group", "--name", "-g", "-n"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
          isRequired: true,
        },
        {
          name: ["--force-deletion-types", "-f"],
          description: "The resource types you want to force delete",
          args: {
            name: "force-deletion-types",
            suggestions: [
              "Microsoft.Compute/virtualMachineScaleSets",
              "Microsoft.Compute/virtualMachines",
            ],
          },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
        {
          name: ["--yes", "-y"],
          description: "Do not prompt for confirmation",
        },
      ],
    },
    {
      name: "exists",
      description: "Check if a resource group exists",
      options: [
        {
          name: ["--resource-group", "--name", "-g", "-n"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
          isRequired: true,
        },
      ],
    },
    {
      name: "export",
      description: "Captures a resource group as a template",
      options: [
        {
          name: ["--resource-group", "--name", "-g", "-n"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
          isRequired: true,
        },
        {
          name: "--include-comments",
          description: "Export template with comments",
        },
        {
          name: "--include-parameter-default-value",
          description: "Export template parameter with default value",
        },
        {
          name: "--resource-ids",
          description:
            'Space-separated resource ids to filter the export by. To export all resources, do not specify this argument or supply "*"',
          args: { name: "resource-ids" },
        },
        {
          name: "--skip-all-params",
          description:
            "Export template parameter and skip all parameterization",
        },
        {
          name: "--skip-resource-name-params",
          description:
            "Export template and skip resource name parameterization",
        },
      ],
    },
    {
      name: "list",
      description: "List resource groups",
      options: [
        {
          name: "--tag",
          description:
            "A single tag in 'key[=value]' format. Use \"\" to clear existing tags",
          args: { name: "tag" },
        },
      ],
    },
    {
      name: "show",
      description: "Gets a resource group",
      options: [
        {
          name: ["--resource-group", "--name", "-g", "-n"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
          isRequired: true,
        },
      ],
    },
    {
      name: "update",
      description: "Update a resource group",
      options: [
        {
          name: ["--resource-group", "--name", "-g", "-n"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
          isRequired: true,
        },
        {
          name: "--force-string",
          description:
            "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
        },
        {
          name: "--set",
          description:
            "Update an object by specifying a property path and value to set. Example: --set property1.property2=",
          args: { name: "set" },
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
        "Place the CLI in a waiting state until a condition of the resource group is met",
      options: [
        {
          name: ["--resource-group", "--name", "-g", "-n"],
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
      name: "deployment",
      description: "Manage Azure Resource Manager deployments",
      subcommands: [
        {
          name: "cancel",
          description: "Cancels a currently running template deployment",
          options: [
            {
              name: ["--name", "-n"],
              description: "The deployment name",
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
          name: "create",
          description: "Start a deployment",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--aux-subs",
              description:
                "Option '--aux-subs' has been deprecated and will be removed in a future release. Use '--aux-tenants' instead. Auxiliary subscriptions which will be used during deployment across tenants",
              args: { name: "aux-subs" },
            },
            {
              name: "--aux-tenants",
              description:
                "Auxiliary tenants which will be used during deployment across tenants",
              args: { name: "aux-tenants" },
            },
            {
              name: ["--handle-extended-json-format", "-j"],
              description:
                "Option '--handle-extended-json-format/-j' has been deprecated and will be removed in a future release. Support to handle extended template content including multiline and comments in deployment",
              args: { name: "handle-extended-json-format" },
            },
            {
              name: "--mode",
              description:
                "Incremental (only add resources to resource group) or Complete (remove extra resources from resource group)",
              args: { name: "mode", suggestions: ["Complete", "Incremental"] },
            },
            {
              name: ["--name", "-n"],
              description:
                "The deployment name. Default to template file base name",
              args: { name: "name" },
            },
            {
              name: "--no-prompt",
              description:
                "The option to disable the prompt of missing parameters for ARM template. When the value is true, the prompt requiring users to provide missing parameter will be ignored. The default value is false",
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--parameters", "-p"],
              description: "Supply deployment parameter values",
              args: { name: "parameters" },
            },
            {
              name: "--rollback-on-error",
              description:
                "The name of a deployment to roll back to on error, or use as a flag to roll back to the last successful deployment",
              args: { name: "rollback-on-error" },
            },
            {
              name: ["--template-file", "-f"],
              description:
                "A path to a template file or Bicep file in the file system",
              args: { name: "template-file" },
            },
            {
              name: ["--template-uri", "-u"],
              description: "A uri to a remote template file",
              args: { name: "template-uri" },
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes a deployment from the deployment history",
          options: [
            {
              name: ["--name", "-n"],
              description: "The deployment name",
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
            },
          ],
        },
        {
          name: "export",
          description: "Export the template used for a deployment",
          options: [
            {
              name: ["--name", "-n"],
              description: "The deployment name",
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
          name: "list",
          description: "Get all the deployments for a resource group",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--filter",
              description:
                "The filter to apply on the operation. For example, you can use $filter=provisioningState eq '{state}'. Default value is None",
              args: { name: "filter" },
            },
            {
              name: "--top",
              description:
                "The number of results to get. If null is passed, returns all deployments. Default value is None",
              args: { name: "top" },
            },
          ],
        },
        {
          name: "show",
          description: "Gets a deployment",
          options: [
            {
              name: ["--name", "-n"],
              description: "The deployment name",
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
          name: "validate",
          description: "Validate whether a template is syntactically correct",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--handle-extended-json-format", "-j"],
              description:
                "Option '--handle-extended-json-format/-j' has been deprecated and will be removed in a future release. Support to handle extended template content including multiline and comments in deployment",
              args: { name: "handle-extended-json-format" },
            },
            {
              name: "--mode",
              description:
                "Incremental (only add resources to resource group) or Complete (remove extra resources from resource group)",
              args: { name: "mode", suggestions: ["Complete", "Incremental"] },
            },
            {
              name: "--no-prompt",
              description:
                "The option to disable the prompt of missing parameters for ARM template. When the value is true, the prompt requiring users to provide missing parameter will be ignored. The default value is false",
            },
            {
              name: ["--parameters", "-p"],
              description: "Supply deployment parameter values",
              args: { name: "parameters" },
            },
            {
              name: "--rollback-on-error",
              description:
                "The name of a deployment to roll back to on error, or use as a flag to roll back to the last successful deployment",
              args: { name: "rollback-on-error" },
            },
            {
              name: ["--template-file", "-f"],
              description:
                "A path to a template file or Bicep file in the file system",
              args: { name: "template-file" },
            },
            {
              name: ["--template-uri", "-u"],
              description: "A uri to a remote template file",
              args: { name: "template-uri" },
            },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a deployment condition is met",
          options: [
            {
              name: ["--name", "-n"],
              description: "The deployment name",
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
          name: "operation",
          description: "Manage deployment operations",
          subcommands: [
            {
              name: "list",
              description: "Gets all deployments operations for a deployment",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The deployment name",
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
                  name: "--top",
                  description:
                    "The number of results to return. Default value is None",
                  args: { name: "top" },
                },
              ],
            },
            {
              name: "show",
              description: "Get a deployment's operation",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The deployment name",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--operation-ids",
                  description: "A list of operation ids to show",
                  args: { name: "operation-ids" },
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
      ],
    },
    {
      name: "lock",
      description: "Manage Azure resource group locks",
      subcommands: [
        {
          name: "create",
          description: "Create a resource group lock",
          options: [
            {
              name: ["--lock-type", "-t"],
              description: "The type of lock restriction",
              args: {
                name: "lock-type",
                suggestions: ["CanNotDelete", "ReadOnly"],
              },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the lock",
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
              name: "--notes",
              description: "Notes about this lock",
              args: { name: "notes" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a resource group lock",
          options: [
            {
              name: "--ids",
              description:
                'One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified',
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the lock",
              args: { name: "name" },
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
          name: "list",
          description: "List lock information in the resource-group",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--filter-string",
              description: "A query filter to use to restrict the results",
              args: { name: "filter-string" },
            },
          ],
        },
        {
          name: "show",
          description: "Show the details of a resource group lock",
          options: [
            {
              name: "--ids",
              description:
                'One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified',
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the lock",
              args: { name: "name" },
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
          name: "update",
          description: "Update a resource group lock",
          options: [
            {
              name: "--ids",
              description:
                'One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified',
              args: { name: "ids" },
            },
            {
              name: ["--lock-type", "-t"],
              description: "The type of lock restriction",
              args: {
                name: "lock-type",
                suggestions: ["CanNotDelete", "ReadOnly"],
              },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the lock",
              args: { name: "name" },
            },
            {
              name: "--notes",
              description: "Notes about this lock",
              args: { name: "notes" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
