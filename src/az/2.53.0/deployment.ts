const completion: Fig.Spec = {
  name: "deployment",
  description:
    "Manage Azure Resource Manager template deployment at subscription scope",
  subcommands: [
    {
      name: "cancel",
      description: "Cancel a deployment at subscription scope",
      options: [
        {
          name: ["--name", "-n"],
          description: "The deployment name",
          args: { name: "name" },
          isRequired: true,
        },
      ],
    },
    {
      name: "create",
      description: "Start a deployment at subscription scope",
      options: [
        {
          name: ["--location", "-l"],
          description: "The location to store the deployment metadata",
          args: { name: "location" },
          isRequired: true,
        },
        {
          name: ["--confirm-with-what-if", "-c"],
          description:
            "Instruct the command to run deployment What-If before executing the deployment. It then prompts you to acknowledge resource changes before it continues",
          args: { name: "confirm-with-what-if" },
        },
        {
          name: ["--handle-extended-json-format", "-j"],
          description:
            "Option '--handle-extended-json-format/-j' has been deprecated and will be removed in a future release. Support to handle extended template content including multiline and comments in deployment",
          args: { name: "handle-extended-json-format" },
        },
        {
          name: ["--name", "-n"],
          description: "The deployment name",
          args: { name: "name" },
        },
        {
          name: "--no-prompt",
          description:
            "The option to disable the prompt of missing parameters for ARM template. When the value is true, the prompt requiring users to provide missing parameter will be ignored. The default value is false",
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
        {
          name: ["--parameters", "-p"],
          description: "Supply deployment parameter values",
          args: { name: "parameters" },
        },
        {
          name: "--proceed-if-no-change",
          description:
            "Instruct the command to execute the deployment if the What-If result contains no resource changes. Applicable when --confirm-with-what-if is set",
          args: { name: "proceed-if-no-change" },
        },
        {
          name: ["--query-string", "-q"],
          description:
            "The query string (a SAS token) to be used with the template-uri in the case of linked templates",
          args: { name: "query-string" },
        },
        {
          name: ["--template-file", "-f"],
          description: "The path to the template file or Bicep file",
          args: { name: "template-file" },
        },
        {
          name: ["--template-spec", "-s"],
          description: "The template spec resource id",
          args: { name: "template-spec" },
        },
        {
          name: ["--template-uri", "-u"],
          description: "The URI to the template file",
          args: { name: "template-uri" },
        },
        {
          name: ["--what-if", "-w"],
          description: "Instruct the command to run deployment What-If",
          args: { name: "what-if" },
        },
        {
          name: ["--what-if-exclude-change-types", "-x"],
          description:
            "Space-separated list of resource change types to be excluded from What-If results. Applicable when --confirm-with-what-if is set",
          args: {
            name: "what-if-exclude-change-types",
            suggestions: [
              "Create",
              "Delete",
              "Deploy",
              "Ignore",
              "Modify",
              "NoChange",
              "Unsupported",
            ],
          },
        },
        {
          name: ["--what-if-result-format", "-r"],
          description:
            "The format of What-If results. Applicable when --confirm-with-what-if is set",
          args: {
            name: "what-if-result-format",
            suggestions: ["FullResourcePayloads", "ResourceIdOnly"],
          },
        },
      ],
    },
    {
      name: "delete",
      description: "Delete a deployment at subscription scope",
      options: [
        {
          name: ["--name", "-n"],
          description: "The deployment name",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
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
      ],
    },
    {
      name: "list",
      description: "List deployments at subscription scope",
      options: [
        {
          name: "--filter",
          description:
            "Filter expression using OData notation. You can use --filter \"provisioningState eq '{state}'\" to filter provisioningState. To get more information, please visit https://docs.microsoft.com/rest/api/resources/deployments/listatsubscriptionscope#uri-parameters",
          args: { name: "filter" },
        },
      ],
    },
    {
      name: "show",
      description: "Show a deployment at subscription scope",
      options: [
        {
          name: ["--name", "-n"],
          description: "The deployment name",
          args: { name: "name" },
          isRequired: true,
        },
      ],
    },
    {
      name: "validate",
      description: "Validate whether a template is valid at subscription scope",
      options: [
        {
          name: ["--location", "-l"],
          description: "The location to store the deployment metadata",
          args: { name: "location" },
          isRequired: true,
        },
        {
          name: ["--handle-extended-json-format", "-j"],
          description:
            "Option '--handle-extended-json-format/-j' has been deprecated and will be removed in a future release. Support to handle extended template content including multiline and comments in deployment",
          args: { name: "handle-extended-json-format" },
        },
        {
          name: ["--name", "-n"],
          description: "The deployment name",
          args: { name: "name" },
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
          name: ["--query-string", "-q"],
          description:
            "The query string (a SAS token) to be used with the template-uri in the case of linked templates",
          args: { name: "query-string" },
        },
        {
          name: ["--template-file", "-f"],
          description: "The path to the template file or Bicep file",
          args: { name: "template-file" },
        },
        {
          name: ["--template-spec", "-s"],
          description: "The template spec resource id",
          args: { name: "template-spec" },
        },
        {
          name: ["--template-uri", "-u"],
          description: "The URI to the template file",
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
      name: "group",
      description:
        "Manage Azure Resource Manager template deployment at resource group",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel a deployment at resource group",
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
          description: "Start a deployment at resource group",
          options: [
            {
              name: ["--resource-group", "-g"],
              description: "The resource group to create deployment at",
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
              name: ["--confirm-with-what-if", "-c"],
              description:
                "Instruct the command to run deployment What-If before executing the deployment. It then prompts you to acknowledge resource changes before it continues",
              args: { name: "confirm-with-what-if" },
            },
            {
              name: ["--handle-extended-json-format", "-j"],
              description:
                "Option '--handle-extended-json-format/-j' has been deprecated and will be removed in a future release. Support to handle extended template content including multiline and comments in deployment",
              args: { name: "handle-extended-json-format" },
            },
            {
              name: "--mode",
              description: "The deployment mode",
              args: { name: "mode", suggestions: ["Complete", "Incremental"] },
            },
            {
              name: ["--name", "-n"],
              description: "The deployment name",
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
              name: "--proceed-if-no-change",
              description:
                "Instruct the command to execute the deployment if the What-If result contains no resource changes. Applicable when --confirm-with-what-if is set",
              args: { name: "proceed-if-no-change" },
            },
            {
              name: ["--query-string", "-q"],
              description:
                "The query string (a SAS token) to be used with the template-uri in the case of linked templates",
              args: { name: "query-string" },
            },
            {
              name: "--rollback-on-error",
              description:
                "The name of a deployment to roll back to on error, or use as a flag to roll back to the last successful deployment",
              args: { name: "rollback-on-error" },
            },
            {
              name: ["--template-file", "-f"],
              description: "The path to the template file or Bicep file",
              args: { name: "template-file" },
            },
            {
              name: ["--template-spec", "-s"],
              description: "The template spec resource id",
              args: { name: "template-spec" },
            },
            {
              name: ["--template-uri", "-u"],
              description: "The URI to the template file",
              args: { name: "template-uri" },
            },
            {
              name: ["--what-if", "-w"],
              description: "Instruct the command to run deployment What-If",
              args: { name: "what-if" },
            },
            {
              name: ["--what-if-exclude-change-types", "-x"],
              description:
                "Space-separated list of resource change types to be excluded from What-If results. Applicable when --confirm-with-what-if is set",
              args: {
                name: "what-if-exclude-change-types",
                suggestions: [
                  "Create",
                  "Delete",
                  "Deploy",
                  "Ignore",
                  "Modify",
                  "NoChange",
                  "Unsupported",
                ],
              },
            },
            {
              name: ["--what-if-result-format", "-r"],
              description:
                "The format of What-If results. Applicable when --confirm-with-what-if is set",
              args: {
                name: "what-if-result-format",
                suggestions: ["FullResourcePayloads", "ResourceIdOnly"],
              },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a deployment at resource group",
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
          description: "List deployments at resource group",
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
                "Filter expression using OData notation. You can use --filter \"provisioningState eq '{state}'\" to filter provisioningState. To get more information, please visit https://docs.microsoft.com/rest/api/resources/deployments/listatsubscriptionscope#uri-parameters",
              args: { name: "filter" },
            },
          ],
        },
        {
          name: "show",
          description: "Show a deployment at resource group",
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
          description: "Validate whether a template is valid at resource group",
          options: [
            {
              name: ["--resource-group", "-g"],
              description: "The resource group to create deployment at",
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
              description: "The deployment mode",
              args: { name: "mode", suggestions: ["Complete", "Incremental"] },
            },
            {
              name: ["--name", "-n"],
              description: "The deployment name",
              args: { name: "name" },
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
              name: ["--query-string", "-q"],
              description:
                "The query string (a SAS token) to be used with the template-uri in the case of linked templates",
              args: { name: "query-string" },
            },
            {
              name: "--rollback-on-error",
              description:
                "The name of a deployment to roll back to on error, or use as a flag to roll back to the last successful deployment",
              args: { name: "rollback-on-error" },
            },
            {
              name: ["--template-file", "-f"],
              description: "The path to the template file or Bicep file",
              args: { name: "template-file" },
            },
            {
              name: ["--template-spec", "-s"],
              description: "The template spec resource id",
              args: { name: "template-spec" },
            },
            {
              name: ["--template-uri", "-u"],
              description: "The URI to the template file",
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
          name: "what-if",
          description:
            "Execute a deployment What-If operation at resource group scope",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "The resource group to execute deployment What-If operation at",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--aux-tenants",
              description:
                "Auxiliary tenants which will be used during deployment across tenants",
              args: { name: "aux-tenants" },
            },
            {
              name: ["--exclude-change-types", "-x"],
              description:
                "Space-separated list of resource change types to be excluded from What-If results",
              args: {
                name: "exclude-change-types",
                suggestions: [
                  "Create",
                  "Delete",
                  "Deploy",
                  "Ignore",
                  "Modify",
                  "NoChange",
                  "Unsupported",
                ],
              },
            },
            {
              name: "--mode",
              description: "The deployment mode",
              args: { name: "mode", suggestions: ["Complete", "Incremental"] },
            },
            {
              name: ["--name", "-n"],
              description: "The deployment name",
              args: { name: "name" },
            },
            {
              name: "--no-pretty-print",
              description:
                "Disable pretty-print for What-If results. When set, the output format type will be used",
              args: { name: "no-pretty-print" },
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
              name: ["--query-string", "-q"],
              description:
                "The query string (a SAS token) to be used with the template-uri in the case of linked templates",
              args: { name: "query-string" },
            },
            {
              name: ["--result-format", "-r"],
              description: "The format of What-If results",
              args: {
                name: "result-format",
                suggestions: ["FullResourcePayloads", "ResourceIdOnly"],
              },
            },
            {
              name: ["--template-file", "-f"],
              description: "The path to the template file or Bicep file",
              args: { name: "template-file" },
            },
            {
              name: ["--template-spec", "-s"],
              description: "The template spec resource id",
              args: { name: "template-spec" },
            },
            {
              name: ["--template-uri", "-u"],
              description: "The URI to the template file",
              args: { name: "template-uri" },
            },
          ],
        },
      ],
    },
    {
      name: "mg",
      description:
        "Manage Azure Resource Manager template deployment at management group",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel a deployment at management group",
          options: [
            {
              name: ["--management-group-id", "-m"],
              description: "The management group id",
              args: { name: "management-group-id" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The deployment name",
              args: { name: "name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "create",
          description: "Start a deployment at management group",
          options: [
            {
              name: ["--location", "-l"],
              description: "The location to store the deployment metadata",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: ["--management-group-id", "-m"],
              description: "The management group id to create deployment at",
              args: { name: "management-group-id" },
              isRequired: true,
            },
            {
              name: ["--confirm-with-what-if", "-c"],
              description:
                "Instruct the command to run deployment What-If before executing the deployment. It then prompts you to acknowledge resource changes before it continues",
              args: { name: "confirm-with-what-if" },
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
                "The mode that is used to deploy resources. This value can be either Incremental or Complete. In Incremental mode, resources are deployed without deleting existing resources that are not included in the template. In Complete mode, resources are deployed and existing resources in the resource group that are not included in the template are deleted. Be careful when using Complete mode as you may unintentionally delete resources",
              args: { name: "mode", suggestions: ["Complete", "Incremental"] },
            },
            {
              name: ["--name", "-n"],
              description: "The deployment name",
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
              name: "--proceed-if-no-change",
              description:
                "Instruct the command to execute the deployment if the What-If result contains no resource changes. Applicable when --confirm-with-what-if is set",
              args: { name: "proceed-if-no-change" },
            },
            {
              name: ["--query-string", "-q"],
              description:
                "The query string (a SAS token) to be used with the template-uri in the case of linked templates",
              args: { name: "query-string" },
            },
            {
              name: ["--template-file", "-f"],
              description: "The path to the template file or Bicep file",
              args: { name: "template-file" },
            },
            {
              name: ["--template-spec", "-s"],
              description: "The template spec resource id",
              args: { name: "template-spec" },
            },
            {
              name: ["--template-uri", "-u"],
              description: "The URI to the template file",
              args: { name: "template-uri" },
            },
            {
              name: ["--what-if", "-w"],
              description: "Instruct the command to run deployment What-If",
              args: { name: "what-if" },
            },
            {
              name: ["--what-if-exclude-change-types", "-x"],
              description:
                "Space-separated list of resource change types to be excluded from What-If results. Applicable when --confirm-with-what-if is set",
              args: {
                name: "what-if-exclude-change-types",
                suggestions: [
                  "Create",
                  "Delete",
                  "Deploy",
                  "Ignore",
                  "Modify",
                  "NoChange",
                  "Unsupported",
                ],
              },
            },
            {
              name: ["--what-if-result-format", "-r"],
              description:
                "The format of What-If results. Applicable when --confirm-with-what-if is set",
              args: {
                name: "what-if-result-format",
                suggestions: ["FullResourcePayloads", "ResourceIdOnly"],
              },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a deployment at management group",
          options: [
            {
              name: ["--management-group-id", "-m"],
              description: "The management group id",
              args: { name: "management-group-id" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The deployment name",
              args: { name: "name" },
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
              name: ["--management-group-id", "-m"],
              description: "The management group id",
              args: { name: "management-group-id" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The deployment name",
              args: { name: "name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list",
          description: "List deployments at management group",
          options: [
            {
              name: ["--management-group-id", "-m"],
              description: "The management group id",
              args: { name: "management-group-id" },
              isRequired: true,
            },
            {
              name: "--filter",
              description:
                "Filter expression using OData notation. You can use --filter \"provisioningState eq '{state}'\" to filter provisioningState. To get more information, please visit https://docs.microsoft.com/rest/api/resources/deployments/listatsubscriptionscope#uri-parameters",
              args: { name: "filter" },
            },
          ],
        },
        {
          name: "show",
          description: "Show a deployment at management group",
          options: [
            {
              name: ["--management-group-id", "-m"],
              description: "The management group id",
              args: { name: "management-group-id" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The deployment name",
              args: { name: "name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "validate",
          description:
            "Validate whether a template is valid at management group",
          options: [
            {
              name: ["--location", "-l"],
              description: "The location to store the deployment metadata",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: ["--management-group-id", "-m"],
              description: "The management group id to create deployment at",
              args: { name: "management-group-id" },
              isRequired: true,
            },
            {
              name: ["--handle-extended-json-format", "-j"],
              description:
                "Option '--handle-extended-json-format/-j' has been deprecated and will be removed in a future release. Support to handle extended template content including multiline and comments in deployment",
              args: { name: "handle-extended-json-format" },
            },
            {
              name: ["--name", "-n"],
              description: "The deployment name",
              args: { name: "name" },
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
              name: ["--query-string", "-q"],
              description:
                "The query string (a SAS token) to be used with the template-uri in the case of linked templates",
              args: { name: "query-string" },
            },
            {
              name: ["--template-file", "-f"],
              description: "The path to the template file or Bicep file",
              args: { name: "template-file" },
            },
            {
              name: ["--template-spec", "-s"],
              description: "The template spec resource id",
              args: { name: "template-spec" },
            },
            {
              name: ["--template-uri", "-u"],
              description: "The URI to the template file",
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
              name: ["--management-group-id", "-m"],
              description: "The management group id",
              args: { name: "management-group-id" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The deployment name",
              args: { name: "name" },
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
          name: "what-if",
          description:
            "Execute a deployment What-If operation at management group scope",
          options: [
            {
              name: ["--location", "-l"],
              description: "The location to store the deployment metadata",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: ["--management-group-id", "-m"],
              description: "The management group id to create deployment at",
              args: { name: "management-group-id" },
              isRequired: true,
            },
            {
              name: ["--exclude-change-types", "-x"],
              description:
                "Space-separated list of resource change types to be excluded from What-If results",
              args: {
                name: "exclude-change-types",
                suggestions: [
                  "Create",
                  "Delete",
                  "Deploy",
                  "Ignore",
                  "Modify",
                  "NoChange",
                  "Unsupported",
                ],
              },
            },
            {
              name: ["--name", "-n"],
              description: "The deployment name",
              args: { name: "name" },
            },
            {
              name: "--no-pretty-print",
              description:
                "Disable pretty-print for What-If results. When set, the output format type will be used",
              args: { name: "no-pretty-print" },
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
              name: ["--query-string", "-q"],
              description:
                "The query string (a SAS token) to be used with the template-uri in the case of linked templates",
              args: { name: "query-string" },
            },
            {
              name: ["--result-format", "-r"],
              description: "The format of What-If results",
              args: {
                name: "result-format",
                suggestions: ["FullResourcePayloads", "ResourceIdOnly"],
              },
            },
            {
              name: ["--template-file", "-f"],
              description: "The path to the template file or Bicep file",
              args: { name: "template-file" },
            },
            {
              name: ["--template-spec", "-s"],
              description: "The template spec resource id",
              args: { name: "template-spec" },
            },
            {
              name: ["--template-uri", "-u"],
              description: "The URI to the template file",
              args: { name: "template-uri" },
            },
          ],
        },
      ],
    },
    {
      name: "operation",
      description: "Manage deployment operations at subscription scope",
      subcommands: [
        {
          name: "list",
          description: "List deployment operations at subscription scope",
          options: [
            {
              name: ["--name", "-n"],
              description: "The deployment name",
              args: { name: "name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description: "Show a deployment operation at subscription scope",
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
          ],
        },
        {
          name: "group",
          description: "Manage deployment operations at resource group",
          subcommands: [
            {
              name: "list",
              description: "List deployment operations at resource group",
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
              name: "show",
              description: "Show a deployment operation at resource group",
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
        {
          name: "mg",
          description: "Manage deployment operations at management group",
          subcommands: [
            {
              name: "list",
              description: "List deployment operations at management group",
              options: [
                {
                  name: ["--management-group-id", "-m"],
                  description: "The management group id",
                  args: { name: "management-group-id" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "The deployment name",
                  args: { name: "name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description: "Show a deployment operation at management group",
              options: [
                {
                  name: ["--management-group-id", "-m"],
                  description: "The management group id",
                  args: { name: "management-group-id" },
                  isRequired: true,
                },
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
              ],
            },
          ],
        },
        {
          name: "sub",
          description: "Manage deployment operations at subscription scope",
          subcommands: [
            {
              name: "list",
              description: "List deployment operations at subscription scope",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The deployment name",
                  args: { name: "name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description: "Show a deployment operation at subscription scope",
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
              ],
            },
          ],
        },
        {
          name: "tenant",
          description: "Manage deployment operations at tenant scope",
          subcommands: [
            {
              name: "list",
              description: "List deployment operations at tenant scope",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The deployment name",
                  args: { name: "name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description: "Show a deployment operation at tenant scope",
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
              ],
            },
          ],
        },
      ],
    },
    {
      name: "sub",
      description:
        "Manage Azure Resource Manager template deployment at subscription scope",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel a deployment at subscription scope",
          options: [
            {
              name: ["--name", "-n"],
              description: "The deployment name",
              args: { name: "name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "create",
          description: "Start a deployment at subscription scope",
          options: [
            {
              name: ["--location", "-l"],
              description: "The location to store the deployment metadata",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: ["--confirm-with-what-if", "-c"],
              description:
                "Instruct the command to run deployment What-If before executing the deployment. It then prompts you to acknowledge resource changes before it continues",
              args: { name: "confirm-with-what-if" },
            },
            {
              name: ["--handle-extended-json-format", "-j"],
              description:
                "Option '--handle-extended-json-format/-j' has been deprecated and will be removed in a future release. Support to handle extended template content including multiline and comments in deployment",
              args: { name: "handle-extended-json-format" },
            },
            {
              name: ["--name", "-n"],
              description: "The deployment name",
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
              name: "--proceed-if-no-change",
              description:
                "Instruct the command to execute the deployment if the What-If result contains no resource changes. Applicable when --confirm-with-what-if is set",
              args: { name: "proceed-if-no-change" },
            },
            {
              name: ["--query-string", "-q"],
              description:
                "The query string (a SAS token) to be used with the template-uri in the case of linked templates",
              args: { name: "query-string" },
            },
            {
              name: ["--template-file", "-f"],
              description: "The path to the template file or Bicep file",
              args: { name: "template-file" },
            },
            {
              name: ["--template-spec", "-s"],
              description: "The template spec resource id",
              args: { name: "template-spec" },
            },
            {
              name: ["--template-uri", "-u"],
              description: "The URI to the template file",
              args: { name: "template-uri" },
            },
            {
              name: ["--what-if", "-w"],
              description: "Instruct the command to run deployment What-If",
              args: { name: "what-if" },
            },
            {
              name: ["--what-if-exclude-change-types", "-x"],
              description:
                "Space-separated list of resource change types to be excluded from What-If results. Applicable when --confirm-with-what-if is set",
              args: {
                name: "what-if-exclude-change-types",
                suggestions: [
                  "Create",
                  "Delete",
                  "Deploy",
                  "Ignore",
                  "Modify",
                  "NoChange",
                  "Unsupported",
                ],
              },
            },
            {
              name: ["--what-if-result-format", "-r"],
              description:
                "The format of What-If results. Applicable when --confirm-with-what-if is set",
              args: {
                name: "what-if-result-format",
                suggestions: ["FullResourcePayloads", "ResourceIdOnly"],
              },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a deployment at subscription scope",
          options: [
            {
              name: ["--name", "-n"],
              description: "The deployment name",
              args: { name: "name" },
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
          ],
        },
        {
          name: "list",
          description: "List deployments at subscription scope",
          options: [
            {
              name: "--filter",
              description:
                "Filter expression using OData notation. You can use --filter \"provisioningState eq '{state}'\" to filter provisioningState. To get more information, please visit https://docs.microsoft.com/rest/api/resources/deployments/listatsubscriptionscope#uri-parameters",
              args: { name: "filter" },
            },
          ],
        },
        {
          name: "show",
          description: "Show a deployment at subscription scope",
          options: [
            {
              name: ["--name", "-n"],
              description: "The deployment name",
              args: { name: "name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "validate",
          description:
            "Validate whether a template is valid at subscription scope",
          options: [
            {
              name: ["--location", "-l"],
              description: "The location to store the deployment metadata",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: ["--handle-extended-json-format", "-j"],
              description:
                "Option '--handle-extended-json-format/-j' has been deprecated and will be removed in a future release. Support to handle extended template content including multiline and comments in deployment",
              args: { name: "handle-extended-json-format" },
            },
            {
              name: ["--name", "-n"],
              description: "The deployment name",
              args: { name: "name" },
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
              name: ["--query-string", "-q"],
              description:
                "The query string (a SAS token) to be used with the template-uri in the case of linked templates",
              args: { name: "query-string" },
            },
            {
              name: ["--template-file", "-f"],
              description: "The path to the template file or Bicep file",
              args: { name: "template-file" },
            },
            {
              name: ["--template-spec", "-s"],
              description: "The template spec resource id",
              args: { name: "template-spec" },
            },
            {
              name: ["--template-uri", "-u"],
              description: "The URI to the template file",
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
          name: "what-if",
          description:
            "Execute a deployment What-If operation at subscription scope",
          options: [
            {
              name: ["--location", "-l"],
              description:
                "The location to store the deployment What-If operation metadata",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: ["--exclude-change-types", "-x"],
              description:
                "Space-separated list of resource change types to be excluded from What-If results",
              args: {
                name: "exclude-change-types",
                suggestions: [
                  "Create",
                  "Delete",
                  "Deploy",
                  "Ignore",
                  "Modify",
                  "NoChange",
                  "Unsupported",
                ],
              },
            },
            {
              name: ["--name", "-n"],
              description: "The deployment name",
              args: { name: "name" },
            },
            {
              name: "--no-pretty-print",
              description:
                "Disable pretty-print for What-If results. When set, the output format type will be used",
              args: { name: "no-pretty-print" },
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
              name: ["--query-string", "-q"],
              description:
                "The query string (a SAS token) to be used with the template-uri in the case of linked templates",
              args: { name: "query-string" },
            },
            {
              name: ["--result-format", "-r"],
              description: "The format of What-If results",
              args: {
                name: "result-format",
                suggestions: ["FullResourcePayloads", "ResourceIdOnly"],
              },
            },
            {
              name: ["--template-file", "-f"],
              description: "The path to the template file or Bicep file",
              args: { name: "template-file" },
            },
            {
              name: ["--template-spec", "-s"],
              description: "The template spec resource id",
              args: { name: "template-spec" },
            },
            {
              name: ["--template-uri", "-u"],
              description: "The URI to the template file",
              args: { name: "template-uri" },
            },
          ],
        },
      ],
    },
    {
      name: "tenant",
      description:
        "Manage Azure Resource Manager template deployment at tenant scope",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel a deployment at tenant scope",
          options: [
            {
              name: ["--name", "-n"],
              description: "The deployment name",
              args: { name: "name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "create",
          description: "Start a deployment at tenant scope",
          options: [
            {
              name: ["--location", "-l"],
              description: "The location to store the deployment metadata",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: ["--confirm-with-what-if", "-c"],
              description:
                "Instruct the command to run deployment What-If before executing the deployment. It then prompts you to acknowledge resource changes before it continues",
              args: { name: "confirm-with-what-if" },
            },
            {
              name: ["--handle-extended-json-format", "-j"],
              description:
                "Option '--handle-extended-json-format/-j' has been deprecated and will be removed in a future release. Support to handle extended template content including multiline and comments in deployment",
              args: { name: "handle-extended-json-format" },
            },
            {
              name: ["--name", "-n"],
              description: "The deployment name",
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
              name: "--proceed-if-no-change",
              description:
                "Instruct the command to execute the deployment if the What-If result contains no resource changes. Applicable when --confirm-with-what-if is set",
              args: { name: "proceed-if-no-change" },
            },
            {
              name: ["--query-string", "-q"],
              description:
                "The query string (a SAS token) to be used with the template-uri in the case of linked templates",
              args: { name: "query-string" },
            },
            {
              name: ["--template-file", "-f"],
              description: "The path to the template file or Bicep file",
              args: { name: "template-file" },
            },
            {
              name: ["--template-spec", "-s"],
              description: "The template spec resource id",
              args: { name: "template-spec" },
            },
            {
              name: ["--template-uri", "-u"],
              description: "The URI to the template file",
              args: { name: "template-uri" },
            },
            {
              name: ["--what-if", "-w"],
              description: "Instruct the command to run deployment What-If",
              args: { name: "what-if" },
            },
            {
              name: ["--what-if-exclude-change-types", "-x"],
              description:
                "Space-separated list of resource change types to be excluded from What-If results. Applicable when --confirm-with-what-if is set",
              args: {
                name: "what-if-exclude-change-types",
                suggestions: [
                  "Create",
                  "Delete",
                  "Deploy",
                  "Ignore",
                  "Modify",
                  "NoChange",
                  "Unsupported",
                ],
              },
            },
            {
              name: ["--what-if-result-format", "-r"],
              description:
                "The format of What-If results. Applicable when --confirm-with-what-if is set",
              args: {
                name: "what-if-result-format",
                suggestions: ["FullResourcePayloads", "ResourceIdOnly"],
              },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a deployment at tenant scope",
          options: [
            {
              name: ["--name", "-n"],
              description: "The deployment name",
              args: { name: "name" },
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
          ],
        },
        {
          name: "list",
          description: "List deployments at tenant scope",
          options: [
            {
              name: "--filter",
              description:
                "Filter expression using OData notation. You can use --filter \"provisioningState eq '{state}'\" to filter provisioningState. To get more information, please visit https://docs.microsoft.com/rest/api/resources/deployments/listatsubscriptionscope#uri-parameters",
              args: { name: "filter" },
            },
          ],
        },
        {
          name: "show",
          description: "Show a deployment at tenant scope",
          options: [
            {
              name: ["--name", "-n"],
              description: "The deployment name",
              args: { name: "name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "validate",
          description: "Validate whether a template is valid at tenant scope",
          options: [
            {
              name: ["--location", "-l"],
              description: "The location to store the deployment metadata",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: ["--handle-extended-json-format", "-j"],
              description:
                "Option '--handle-extended-json-format/-j' has been deprecated and will be removed in a future release. Support to handle extended template content including multiline and comments in deployment",
              args: { name: "handle-extended-json-format" },
            },
            {
              name: ["--name", "-n"],
              description: "The deployment name",
              args: { name: "name" },
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
              name: ["--query-string", "-q"],
              description:
                "The query string (a SAS token) to be used with the template-uri in the case of linked templates",
              args: { name: "query-string" },
            },
            {
              name: ["--template-file", "-f"],
              description: "The path to the template file or Bicep file",
              args: { name: "template-file" },
            },
            {
              name: ["--template-spec", "-s"],
              description: "The template spec resource id",
              args: { name: "template-spec" },
            },
            {
              name: ["--template-uri", "-u"],
              description: "The URI to the template file",
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
          name: "what-if",
          description: "Execute a deployment What-If operation at tenant scope",
          options: [
            {
              name: ["--location", "-l"],
              description:
                "The location to store the deployment What-If operation metadata",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: ["--exclude-change-types", "-x"],
              description:
                "Space-separated list of resource change types to be excluded from What-If results",
              args: {
                name: "exclude-change-types",
                suggestions: [
                  "Create",
                  "Delete",
                  "Deploy",
                  "Ignore",
                  "Modify",
                  "NoChange",
                  "Unsupported",
                ],
              },
            },
            {
              name: ["--name", "-n"],
              description: "The deployment name",
              args: { name: "name" },
            },
            {
              name: "--no-pretty-print",
              description:
                "Disable pretty-print for What-If results. When set, the output format type will be used",
              args: { name: "no-pretty-print" },
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
              name: ["--query-string", "-q"],
              description:
                "The query string (a SAS token) to be used with the template-uri in the case of linked templates",
              args: { name: "query-string" },
            },
            {
              name: ["--result-format", "-r"],
              description: "The format of What-If results",
              args: {
                name: "result-format",
                suggestions: ["FullResourcePayloads", "ResourceIdOnly"],
              },
            },
            {
              name: ["--template-file", "-f"],
              description: "The path to the template file or Bicep file",
              args: { name: "template-file" },
            },
            {
              name: ["--template-spec", "-s"],
              description: "The template spec resource id",
              args: { name: "template-spec" },
            },
            {
              name: ["--template-uri", "-u"],
              description: "The URI to the template file",
              args: { name: "template-uri" },
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
