const completion: Fig.Spec = {
  name: "monitor",
  description: "Manage the Azure Monitor Service",
  subcommands: [
    {
      name: "account",
      description: "Manage monitor account",
      subcommands: [
        {
          name: "create",
          description: "Create a workspace",
          options: [
            {
              name: ["--azure-monitor-workspace-name", "--name", "-n"],
              description:
                "The name of the Azure Monitor workspace. The name is case insensitive",
              args: { name: "azure-monitor-workspace-name" },
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
          description: "Delete a workspace",
          options: [
            {
              name: ["--azure-monitor-workspace-name", "--name", "-n"],
              description:
                "The name of the Azure Monitor workspace. The name is case insensitive",
              args: { name: "azure-monitor-workspace-name" },
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
          description: "List all workspaces in the specified subscription",
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
          description: "Show the specific azure monitor workspace",
          options: [
            {
              name: ["--azure-monitor-workspace-name", "--name", "-n"],
              description:
                "The name of the Azure Monitor workspace. The name is case insensitive",
              args: { name: "azure-monitor-workspace-name" },
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
          description: "Update a workspace",
          options: [
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: ["--azure-monitor-workspace-name", "--name", "-n"],
              description:
                "The name of the Azure Monitor workspace. The name is case insensitive",
              args: { name: "azure-monitor-workspace-name" },
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
          description:
            "Place the CLI in a waiting state until a condition is met",
          options: [
            {
              name: ["--azure-monitor-workspace-name", "--name", "-n"],
              description:
                "The name of the Azure Monitor workspace. The name is case insensitive",
              args: { name: "azure-monitor-workspace-name" },
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
      name: "action-group",
      description: "Manage action groups",
      subcommands: [
        {
          name: "create",
          description: "Create a new action group",
          options: [
            {
              name: ["--action-group-name", "--name", "-n"],
              description: "The name of the action group",
              args: { name: "action-group-name" },
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
              name: ["--actions", "--action", "-a"],
              description:
                "Add receivers to the action group during the creation. Usage: --action TYPE NAME [ARG ...] Email: Format: --action email NAME EMAIL_ADDRESS [usecommonalertschema] Example: --action email bob bob@contoso.com SMS: Format: --action sms NAME COUNTRY_CODE PHONE_NUMBER Example: --action sms charli 1 5551234567 Webhook: Format: --action webhook NAME URI [useaadauth OBJECT_ID IDENTIFIER URI] [usecommonalertschema] Example: --action webhook alert_hook https://www.contoso.com/alert useaadauth testobj http://identifier usecommonalertschema Arm Role: Format: --action armrole NAME ROLE_ID [usecommonalertschema] Example: --action armole owner_role 8e3af657-a8ff-443c-a75c-2fe8c4bcb635 Azure App Push: Format: --action azureapppush NAME EMAIL_ADDRESS Example: --action azureapppush test_apppush bob@contoso.com ITSM: Format: --action itsm NAME WORKSPACE_ID CONNECTION_ID TICKET_CONFIGURATION REGION Example: --action itsm test_itsm test_workspace test_conn ticket_blob useast Automation runbook: Format: --action automationrunbook NAME AUTOMATION_ACCOUNT_ID RUNBOOK_NAME WEBHOOK_RESOURCE_ID SERVICE_URI [isglobalrunbook] [usecommonalertschema] Example: --action automationrunbook test_runbook test_acc test_book test_webhook test_rsrc http://example.com isglobalrunbook usecommonalertschema Voice: Format: --action voice NAME COUNTRY_CODE PHONE_NUMBER Example: --action voice charli 1 4441234567 Logic App: Format: --action logicapp NAME RESOURCE_ID CALLBACK_URL [usecommonalertschema] Example: --action logicapp test_logicapp test_rsrc http://callback Azure Function: Format: --action azurefunction NAME FUNCTION_APP_RESOURCE_ID FUNCTION_NAME HTTP_TRIGGER_URL [usecommonalertschema] Example: --action azurefunction test_function test_rsrc test_func http://trigger usecommonalertschema Event Hub: Format: --action eventhub NAME SUBSCRIPTION_ID EVENT_HUB_NAME_SPACE EVENT_HUB_NAME [usecommonalertschema] Example: --action eventhub test_eventhub 5def922a-3ed4-49c1-b9fd-05ec533819a3 eventhubNameSpace testEventHubName usecommonalertschema Multiple actions can be specified by using more than one --add-action argument. 'useaadauth', 'isglobalrunbook' and 'usecommonalertschema' are optional arguements that only need to be passed to set the respective parameter to True. If the 'useaadauth' argument is passed, then the OBJECT_ID and IDENTIFIER_URI values are required as well. Support shorthand-syntax, json-file and yaml-file. Try \"??\" to show more",
              args: { name: "actions" },
            },
            {
              name: ["--group-short-name", "--short-name"],
              description:
                "The short name of the action group. This will be used in SMS messages",
              args: { name: "group-short-name" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>. When not specified, the location of the resource group will be used",
              args: { name: "location" },
            },
            {
              name: "--tags",
              description:
                "Space-separated tags: key[=value] [key[=value] ...]. Use '' to clear existing tags. Support shorthand-syntax, json-file and yaml-file. Try \"??\" to show more",
              args: { name: "tags" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete an action group",
          options: [
            {
              name: ["--action-group-name", "--name", "-n"],
              description: "The name of the action group",
              args: { name: "action-group-name" },
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
          name: "enable-receiver",
          description: "Enable a receiver in an action group",
          options: [
            {
              name: ["--receiver-name", "--name", "-n"],
              description: "The name of the receiver to resubscribe",
              args: { name: "receiver-name" },
              isRequired: true,
            },
            {
              name: ["--action-group-name", "--action-group"],
              description: "The name of the action group",
              args: { name: "action-group-name" },
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
          name: "list",
          description:
            "List action groups under a resource group or the current subscription",
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
          description: "Show the details of an action group",
          options: [
            {
              name: ["--action-group-name", "--name", "-n"],
              description: "The name of the action group",
              args: { name: "action-group-name" },
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
          description: "Update an action group",
          options: [
            {
              name: ["--action-group-name", "--name", "-n"],
              description: "The name of the action group",
              args: { name: "action-group-name" },
            },
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: ["--add-actions", "--add-action", "-a"],
              description:
                "Add receivers to the action group. Usage: --add-action TYPE NAME [ARG ...] Email: Format: --add-action email NAME EMAIL_ADDRESS [usecommonalertschema] Example: --add-action email bob bob@contoso.com SMS: Format: --add-action sms NAME COUNTRY_CODE PHONE_NUMBER Example: --add-action sms charli 1 5551234567 Webhook: Format: --add-action webhook NAME URI [useaadauth OBJECT_ID IDENTIFIER URI] [usecommonalertschema] Example: --add-action https://www.contoso.com/alert useaadauth testobj http://identifier usecommonalertschema Arm Role: Format: --add-action armrole NAME ROLE_ID [usecommonalertschema] Example: --add-action armole owner_role 8e3af657-a8ff-443c-a75c-2fe8c4bcb635 Azure App Push: Format: --add-action azureapppush NAME EMAIL_ADDRESS Example: --add-action azureapppush test_apppush bob@contoso.com ITSM: Format: --add-action itsm NAME WORKSPACE_ID CONNECTION_ID TICKET_CONFIGURATION REGION Example: --add-action itsm test_itsm test_workspace test_conn ticket_blob useast Automation runbook: Format: --add-action automationrunbook NAME AUTOMATION_ACCOUNT_ID RUNBOOK_NAME WEBHOOK_RESOURCE_ID SERVICE_URI [isglobalrunbook] [usecommonalertschema] Example: --add-action automationrunbook test_runbook test_acc test_book test_webhook test_rsrc http://example.com isglobalrunbook usecommonalertschema Voice: Format: --add-action voice NAME COUNTRY_CODE PHONE_NUMBER Example: --add-action voice charli 1 4441234567 Logic App: Format: --add-action logicapp NAME RESOURCE_ID CALLBACK_URL [usecommonalertschema] Example: --add-action logicapp test_logicapp test_rsrc http://callback Azure Function: Format: --add-action azurefunction NAME FUNCTION_APP_RESOURCE_ID FUNCTION_NAME HTTP_TRIGGER_URL [usecommonalertschema] Example: --add-action azurefunction test_function test_rsrc test_func http://trigger usecommonalertschema Event Hub: Format: --action eventhub NAME SUBSCRIPTION_ID EVENT_HUB_NAME_SPACE EVENT_HUB_NAME [usecommonalertschema] Example: --action eventhub test_eventhub 5def922a-3ed4-49c1-b9fd-05ec533819a3 eventhubNameSpace testEventHubName usecommonalertschema Multiple actions can be specified by using more than one --add-action argument. 'useaadauth', 'isglobalrunbook' and 'usecommonalertschema' are optional arguements that only need to be passed to set the respective parameter to True. If the 'useaadauth' argument is passed, then the OBJECT_ID and IDENTIFIER_URI values are required as well. Support shorthand-syntax, json-file and yaml-file. Try \"??\" to show more",
              args: { name: "add-actions" },
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
              name: ["--group-short-name", "--short-name"],
              description:
                "The short name of the action group. This will be used in SMS messages",
              args: { name: "group-short-name" },
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
              name: ["--remove-action", "-r"],
              description:
                'Remove receivers from the action group. Accept space-separated list of receiver names. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "remove-action" },
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
                "Space-separated tags: key[=value] [key[=value] ...]. Use '' to clear existing tags. Support shorthand-syntax, json-file and yaml-file. Try \"??\" to show more",
              args: { name: "tags" },
            },
          ],
        },
        {
          name: "wait",
          description: "Place the CLI in a waiting state",
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
              description: "The name of the action group. Required",
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
          name: "test-notifications",
          description: "Manage action groups test-notifications",
          subcommands: [
            {
              name: "create",
              description: "Create an action group test-notifications",
              options: [
                {
                  name: ["--action-group-name", "--action-group"],
                  description: "The name of the action group",
                  args: { name: "action-group-name" },
                  isRequired: true,
                },
                {
                  name: "--alert-type",
                  description:
                    "The value of the supported alert type. Supported alert type values are: servicehealth, metricstaticthreshold, metricsdynamicthreshold, logalertv2, smartalert, webtestalert, logalertv1numresult, logalertv1metricmeasurement, resourcehealth, activitylog, budget",
                  args: { name: "alert-type" },
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
                  name: ["--add-actions", "--add-action", "-a"],
                  description:
                    "Add receivers to the action group. Usage: --add-action TYPE NAME [ARG ...] Email: Format: --add-action email NAME EMAIL_ADDRESS [usecommonalertschema] Example: --add-action email bob bob@contoso.com SMS: Format: --add-action sms NAME COUNTRY_CODE PHONE_NUMBER Example: --add-action sms charli 1 5551234567 Webhook: Format: --add-action webhook NAME URI [useaadauth OBJECT_ID IDENTIFIER URI] [usecommonalertschema] Example: --add-action https://www.contoso.com/alert useaadauth testobj http://identifier usecommonalertschema Arm Role: Format: --add-action armrole NAME ROLE_ID [usecommonalertschema] Example: --add-action armole owner_role 8e3af657-a8ff-443c-a75c-2fe8c4bcb635 Azure App Push: Format: --add-action azureapppush NAME EMAIL_ADDRESS Example: --add-action azureapppush test_apppush bob@contoso.com ITSM: Format: --add-action itsm NAME WORKSPACE_ID CONNECTION_ID TICKET_CONFIGURATION REGION Example: --add-action itsm test_itsm test_workspace test_conn ticket_blob useast Automation runbook: Format: --add-action automationrunbook NAME AUTOMATION_ACCOUNT_ID RUNBOOK_NAME WEBHOOK_RESOURCE_ID SERVICE_URI [isglobalrunbook] [usecommonalertschema] Example: --add-action automationrunbook test_runbook test_acc test_book test_webhook test_rsrc http://example.com isglobalrunbook usecommonalertschema Voice: Format: --add-action voice NAME COUNTRY_CODE PHONE_NUMBER Example: --add-action voice charli 1 4441234567 Logic App: Format: --add-action logicapp NAME RESOURCE_ID CALLBACK_URL [usecommonalertschema] Example: --add-action logicapp test_logicapp test_rsrc http://callback Azure Function: Format: --add-action azurefunction NAME FUNCTION_APP_RESOURCE_ID FUNCTION_NAME HTTP_TRIGGER_URL [usecommonalertschema] Example: --add-action azurefunction test_function test_rsrc test_func http://trigger usecommonalertschema Event Hub: Format: --action eventhub NAME SUBSCRIPTION_ID EVENT_HUB_NAME_SPACE EVENT_HUB_NAME [usecommonalertschema] Example: --action eventhub test_eventhub 5def922a-3ed4-49c1-b9fd-05ec533819a3 eventhubNameSpace testEventHubName usecommonalertschema Multiple actions can be specified by using more than one --add-action argument. 'useaadauth', 'isglobalrunbook' and 'usecommonalertschema' are optional arguements that only need to be passed to set the respective parameter to True. If the 'useaadauth' argument is passed, then the OBJECT_ID and IDENTIFIER_URI values are required as well. Support shorthand-syntax, json-file and yaml-file. Try \"??\" to show more",
                  args: { name: "add-actions" },
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
              ],
            },
          ],
        },
      ],
    },
    {
      name: "activity-log",
      description: "Manage activity logs",
      subcommands: [
        {
          name: "list",
          description: "List and query activity log events",
          options: [
            {
              name: "--caller",
              description:
                "Caller to query for, such as an e-mail address or service principal ID",
              args: { name: "caller" },
            },
            {
              name: "--correlation-id",
              description: "Correlation ID to query",
              args: { name: "correlation-id" },
            },
            {
              name: "--end-time",
              description:
                "End time of the query. Defaults to the current time. Format: date (yyyy-mm-dd) time (hh:mm:ss.xxxxx) timezone (+/-hh:mm)",
              args: { name: "end-time" },
            },
            {
              name: "--max-events",
              description: "Maximum number of records to return",
              args: { name: "max-events" },
            },
            {
              name: "--namespace",
              description: "Resource provider namespace",
              args: { name: "namespace" },
            },
            {
              name: "--offset",
              description: "Time offset of the query range, in ##d##h format",
              args: { name: "offset" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-id",
              description: "ARM ID of a resource",
              args: { name: "resource-id" },
            },
            {
              name: "--select",
              description: "Space-separated list of properties to return",
              args: {
                name: "select",
                suggestions: [
                  "authorization",
                  "caller",
                  "category",
                  "claims",
                  "correlationId",
                  "description",
                  "eventDataId",
                  "eventName",
                  "eventTimestamp",
                  "httpRequest",
                  "id",
                  "level",
                  "operationId",
                  "operationName",
                  "properties",
                  "resourceGroupName",
                  "resourceId",
                  "resourceProviderName",
                  "resourceType",
                  "status",
                  "subStatus",
                  "submissionTimestamp",
                  "subscriptionId",
                  "tenantId",
                ],
              },
            },
            {
              name: "--start-time",
              description:
                "Start time of the query. Format: date (yyyy-mm-dd) time (hh:mm:ss.xxxxx) timezone (+/-hh:mm)",
              args: { name: "start-time" },
            },
            {
              name: "--status",
              description: "Status to query for (ex: Failed)",
              args: { name: "status" },
            },
          ],
        },
        {
          name: "list-categories",
          description: "List the event categories of activity logs",
        },
        {
          name: "alert",
          description: "Manage activity log alert rules",
          subcommands: [
            {
              name: "create",
              description: "Create a default activity log alert rule",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the activity log alert rule",
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
                  name: ["--action-group", "-a"],
                  description:
                    "Add an action group. Accepts space-separated action group identifiers. The identifier can be the action group's name or its resource ID",
                  args: { name: "action-group" },
                },
                {
                  name: ["--condition", "-c"],
                  description:
                    "The condition that will cause the alert rule to activate. The format is FIELD=VALUE[ and FIELD=VALUE...]",
                  args: { name: "condition" },
                },
                {
                  name: "--description",
                  description: "A description of this activity log alert rule",
                  args: { name: "description" },
                },
                {
                  name: "--disable",
                  description:
                    "Disable the activity log alert rule after it is created",
                },
                {
                  name: ["--scope", "-s"],
                  description:
                    "A list of strings that will be used as prefixes",
                  args: { name: "scope" },
                },
                {
                  name: "--tags",
                  description:
                    'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
                  args: { name: "tags" },
                },
                {
                  name: ["--webhook-properties", "-w"],
                  description:
                    "Space-separated webhook properties in 'key[=value]' format. These properties are associated with the action groups added in this command",
                  args: { name: "webhook-properties" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete an activity log alert",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the activity log alert. Required",
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
                "List activity log alert rules under a resource group or the current subscription",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of the resource group under which the activity log alert rules are being listed. If it is omitted, all the activity log alert rules under the current subscription are listed",
                  args: { name: "resource-group" },
                },
              ],
            },
            {
              name: "show",
              description: "Get an activity log alert",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the activity log alert. Required",
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
              description: "Update the details of this activity log alert rule",
              options: [
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add" },
                },
                {
                  name: ["--condition", "-c"],
                  description:
                    "The conditional expression that will cause the alert rule to activate. The format is FIELD=VALUE[ and FIELD=VALUE...]",
                  args: { name: "condition" },
                },
                {
                  name: "--description",
                  description: "A description of this activity log alert rule",
                  args: { name: "description" },
                },
                {
                  name: "--enabled",
                  description: "",
                  args: { name: "enabled", suggestions: ["false", "true"] },
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
                  description: "The name of the activity log alert. Required",
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
                {
                  name: "--tags",
                  description:
                    'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
                  args: { name: "tags" },
                },
              ],
            },
            {
              name: "action-group",
              description: "Manage action groups for activity log alert rules",
              subcommands: [
                {
                  name: "add",
                  description:
                    "Add action groups to this activity log alert rule. It can also be used to overwrite existing webhook properties of particular action groups",
                  options: [
                    {
                      name: ["--action-group", "-a"],
                      description:
                        "The names or the resource ids of the action groups to be added",
                      args: { name: "action-group" },
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
                      description: "Name of the activity log alert rule",
                      args: { name: "name" },
                    },
                    {
                      name: "--reset",
                      description:
                        "Remove all the existing action groups before add new conditions",
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                    },
                    {
                      name: "--strict",
                      description:
                        "Fails the command if an action group to be added will change existing webhook properties",
                    },
                    {
                      name: "--subscription",
                      description:
                        "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                      args: { name: "subscription" },
                    },
                    {
                      name: ["--webhook-properties", "-w"],
                      description:
                        "Space-separated webhook properties in 'key[=value]' format. These properties will be associated with the action groups added in this command",
                      args: { name: "webhook-properties" },
                    },
                  ],
                },
                {
                  name: "remove",
                  description:
                    "Remove action groups from this activity log alert rule",
                  options: [
                    {
                      name: ["--action-group", "-a"],
                      description:
                        "The names or the resource ids of the action groups to be removed",
                      args: { name: "action-group" },
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
                      description: "Name of the activity log alert rule",
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
              name: "scope",
              description: "Manage scopes for activity log alert rules",
              subcommands: [
                {
                  name: "add",
                  description: "Add scopes to this activity log alert rule",
                  options: [
                    {
                      name: ["--scope", "-s"],
                      description:
                        "List of scopes to add. Each scope could be a resource ID, a resource group ID or a subscription ID",
                      args: { name: "scope" },
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
                      description: "Name of the activity log alert rule",
                      args: { name: "name" },
                    },
                    {
                      name: "--reset",
                      description:
                        "Remove all the existing scopes before add new scopes",
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
                  description:
                    "Removes scopes from this activity log alert rule",
                  options: [
                    {
                      name: ["--scope", "-s"],
                      description: "The scopes to remove",
                      args: { name: "scope" },
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
                      description: "Name of the activity log alert rule",
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
    },
    {
      name: "alert-processing-rule",
      description: "Manage alert processing rule with alertsmanagement",
      subcommands: [
        {
          name: "create",
          description: "Create an alert processing rule",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the alert processing rule",
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
              name: "--rule-type",
              description: "Indicate type of the alert processing rule",
              args: {
                name: "rule-type",
                suggestions: ["AddActionGroups", "RemoveAllActionGroups"],
              },
              isRequired: true,
            },
            {
              name: "--scopes",
              description:
                "List of resource IDs (space-delimited) for scope. The rule will apply to alerts that fired on resources within that scope",
              args: { name: "scopes" },
              isRequired: true,
            },
            {
              name: "--action-groups",
              description:
                "List of resource ids (space-delimited) of action groups to add. A use of this argument requires that rule-type is AddActionGroups",
              args: { name: "action-groups" },
            },
            {
              name: "--description",
              description: "Description of the alert processing rule",
              args: { name: "description" },
            },
            {
              name: "--enabled",
              description:
                "Indicate if the given alert processing rule is enabled or disabled (default is enabled)",
              args: { name: "enabled", suggestions: ["false", "true"] },
            },
            {
              name: "--filter-alert-context",
              description: "Filter alerts by alert context (payload)",
              args: { name: "filter-alert-context" },
            },
            {
              name: "--filter-alert-rule-description",
              description: "Filter alerts by alert rule description",
              args: { name: "filter-alert-rule-description" },
            },
            {
              name: "--filter-alert-rule-id",
              description: "Filter alerts by alert ID",
              args: { name: "filter-alert-rule-id" },
            },
            {
              name: "--filter-alert-rule-name",
              description: "Filter alerts by alert rule name",
              args: { name: "filter-alert-rule-name" },
            },
            {
              name: "--filter-monitor-condition",
              description: "Filter alerts by monitor condition",
              args: { name: "filter-monitor-condition" },
            },
            {
              name: "--filter-monitor-service",
              description: "Filter alerts by monitor service",
              args: { name: "filter-monitor-service" },
            },
            {
              name: "--filter-resource-group",
              description: "Filter alerts by resource group",
              args: { name: "filter-resource-group" },
            },
            {
              name: "--filter-resource-type",
              description: "Filter alerts by resource type",
              args: { name: "filter-resource-type" },
            },
            {
              name: "--filter-severity",
              description:
                "Filter alerts by severity <Sev0, Sev1, Sev2, Sev3, Sev4>",
              args: { name: "filter-severity" },
            },
            {
              name: "--filter-signal-type",
              description: "Filter alerts by signal type",
              args: { name: "filter-signal-type" },
            },
            {
              name: "--filter-target-resource",
              description: "Filter alerts by resource",
              args: { name: "filter-target-resource" },
            },
            {
              name: "--schedule-end-datetime",
              description:
                "End date for the rule. Format: 'YYYY-MM-DD hh:mm:ss'",
              args: { name: "schedule-end-datetime" },
            },
            {
              name: "--schedule-recurrence",
              description: "List of recurrence pattern values",
              args: { name: "schedule-recurrence" },
            },
            {
              name: "--schedule-recurrence-2",
              description:
                "List of recurrence pattern values for the second recurrence pattern",
              args: { name: "schedule-recurrence-2" },
            },
            {
              name: "--schedule-recurrence-2-end-time",
              description: "End time for each recurrence. Format: hh:mm:ss",
              args: { name: "schedule-recurrence-2-end-time" },
            },
            {
              name: "--schedule-recurrence-2-start-time",
              description: "Start time for each recurrence. Format: hh:mm:ss",
              args: { name: "schedule-recurrence-2-start-time" },
            },
            {
              name: "--schedule-recurrence-2-type",
              description:
                "Specifies when the processing rule should be applied. Default to Always",
              args: {
                name: "schedule-recurrence-2-type",
                suggestions: ["Daily", "Monthly", "Weekly"],
              },
            },
            {
              name: "--schedule-recurrence-end-time",
              description: "End time for each recurrence. Format: 'hh:mm:ss'",
              args: { name: "schedule-recurrence-end-time" },
            },
            {
              name: "--schedule-recurrence-start-time",
              description: "Start time for each recurrence. Format: 'hh:mm:ss'",
              args: { name: "schedule-recurrence-start-time" },
            },
            {
              name: "--schedule-recurrence-type",
              description:
                "Specifies when the processing rule should be applied",
              args: {
                name: "schedule-recurrence-type",
                suggestions: ["Daily", "Monthly", "Weekly"],
              },
            },
            {
              name: "--schedule-start-datetime",
              description:
                "Start date for the rule. Format: 'YYYY-MM-DD hh:mm:ss'",
              args: { name: "schedule-start-datetime" },
            },
            {
              name: "--schedule-time-zone",
              description: "Schedule time zone",
              args: { name: "schedule-time-zone" },
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
          description: "Delete an alert processing rule",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the alert processing rule",
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
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description:
            "List all alert processing rules in a subscription or resource group",
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
          description: "Get an alert processing rule",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the alert processing rule",
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
            "Enable, disable, or update tags for an alert processing rule",
          options: [
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: "--enabled",
              description:
                "Indicate if the given processing rule is enabled or disabled (values are True and False)",
              args: { name: "enabled", suggestions: ["false", "true"] },
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
              description: "Name of the alert processing rule",
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
      name: "app-insights",
      description:
        "Commands for querying data in Application Insights applications",
      subcommands: [
        {
          name: "query",
          description: "Execute a query over data in your application",
          options: [
            {
              name: "--analytics-query",
              description: "Query to execute over Application Insights data",
              args: { name: "analytics-query" },
              isRequired: true,
            },
            {
              name: ["--apps", "-a"],
              description:
                "GUID, app name, or fully-qualified Azure resource name of Application Insights component. The application GUID may be acquired from the API Access menu item on any Application Insights resource in the Azure portal. If using an application name, please specify resource group",
              args: { name: "apps" },
            },
            {
              name: "--end-time",
              description:
                "End of time range for current operation. Defaults to the current time. Format: date (yyyy-mm-dd) time (hh:mm:ss.xxxxx) timezone (+/-hh:mm)",
              args: { name: "end-time" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--offset",
              description: "Time offset of the query range, in ##d##h format",
              args: { name: "offset" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--start-time",
              description:
                "Start-time of time range for which to retrieve data. Format: date (yyyy-mm-dd) time (hh:mm:ss.xxxxx) timezone (+/-hh:mm)",
              args: { name: "start-time" },
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
          name: "api-key",
          description:
            "Operations on API keys associated with an Application Insights component",
          subcommands: [
            {
              name: "create",
              description:
                "Create an API Key of an Application Insights component",
              options: [
                {
                  name: "--api-key",
                  description: "Name of the API key to create",
                  args: { name: "api-key" },
                  isRequired: true,
                },
                {
                  name: ["--app", "-a"],
                  description:
                    "GUID, app name, or fully-qualified Azure resource name of Application Insights component. The application GUID may be acquired from the API Access menu item on any Application Insights resource in the Azure portal. If using an application name, please specify resource group",
                  args: { name: "app" },
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
                  name: "--read-properties",
                  description:
                    'A space-separated list of names of read Roles for this API key to inherit. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "read-properties" },
                },
                {
                  name: "--write-properties",
                  description:
                    'A space-separated list of names of write Roles for this API key to inherit. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "write-properties" },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete an API key from an Application Insights resource",
              options: [
                {
                  name: "--api-key",
                  description:
                    "Name of the API key to delete. Can be found using api-key show",
                  args: { name: "api-key" },
                },
                {
                  name: ["--app", "-a"],
                  description:
                    "GUID, app name, or fully-qualified Azure resource name of Application Insights component. The application GUID may be acquired from the API Access menu item on any Application Insights resource in the Azure portal. If using an application name, please specify resource group",
                  args: { name: "app" },
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
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "show",
              description:
                "Get all keys or a specific API key associated with an Application Insights resource",
              options: [
                {
                  name: ["--app", "-a"],
                  description:
                    "The name of the Application Insights component resource",
                  args: { name: "app" },
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
                  name: "--api-key",
                  description:
                    "Name of the API key to fetch. Can be found using api-key show",
                  args: { name: "api-key" },
                },
              ],
            },
          ],
        },
        {
          name: "component",
          description:
            "Manage an Application Insights component or its subcomponents",
          subcommands: [
            {
              name: "connect-function",
              description: "Connect AI to an Azure function",
              options: [
                {
                  name: "--function",
                  description: "Name or resource id of the Azure function",
                  args: { name: "function" },
                  isRequired: true,
                },
                {
                  name: ["--app", "-a"],
                  description:
                    "GUID, app name, or fully-qualified Azure resource name of Application Insights component. The application GUID may be acquired from the API Access menu item on any Application Insights resource in the Azure portal. If using an application name, please specify resource group",
                  args: { name: "app" },
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
              name: "connect-webapp",
              description: "Connect AI to a web app",
              options: [
                {
                  name: "--web-app",
                  description: "Name or resource id of the web app",
                  args: { name: "web-app" },
                  isRequired: true,
                },
                {
                  name: ["--app", "-a"],
                  description:
                    "GUID, app name, or fully-qualified Azure resource name of Application Insights component. The application GUID may be acquired from the API Access menu item on any Application Insights resource in the Azure portal. If using an application name, please specify resource group",
                  args: { name: "app" },
                },
                {
                  name: ["--enable-snapshot-debugger", "--enable-debugger"],
                  description:
                    "Enable snapshot debugger when an exception is thrown. Currently it is only supported for .NET/.NET Core Web Apps",
                  args: {
                    name: "enable-snapshot-debugger",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--enable-profiler",
                  description:
                    "Enable collecting profiling traces that help you see where time is spent in code. Currently it is only supported for .NET/.NET Core Web Apps",
                  args: {
                    name: "enable-profiler",
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
              description: "Create a new Application Insights resource",
              options: [
                {
                  name: ["--app", "-a"],
                  description:
                    "GUID, app name, or fully-qualified Azure resource name of Application Insights component. The application GUID may be acquired from the API Access menu item on any Application Insights resource in the Azure portal. If using an application name, please specify resource group",
                  args: { name: "app" },
                  isRequired: true,
                },
                {
                  name: ["--location", "-l"],
                  description:
                    "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
                  args: { name: "location" },
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
                  name: "--application-type",
                  description:
                    "Type of application being monitored. Possible values include 'web', 'other'. Default value is'web'",
                  args: { name: "application-type" },
                },
                {
                  name: "--ingestion-access",
                  description:
                    "The public network access type for accessing Application Insights ingestion",
                  args: {
                    name: "ingestion-access",
                    suggestions: ["Disabled", "Enabled"],
                  },
                },
                {
                  name: ["--kind", "-k"],
                  description:
                    "The kind of application that this component refers to, used to customize UI. This value is a freeform string, values should typically be one of web, ios, other, store, java, phone",
                  args: { name: "kind" },
                },
                {
                  name: "--query-access",
                  description:
                    "The public network access type for accessing Application Insights query",
                  args: {
                    name: "query-access",
                    suggestions: ["Disabled", "Enabled"],
                  },
                },
                {
                  name: "--retention-time",
                  description:
                    "Retention in days for Application Insights. The value can be one of the following values: 30,60,90,120,180,270,365,550,730. It can be set only when Application Insights is not connected to a Log Analytics workspace",
                  args: { name: "retention-time" },
                },
                {
                  name: "--tags",
                  description:
                    'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
                  args: { name: "tags" },
                },
                {
                  name: "--workspace",
                  description:
                    "Name or resource ID of a log analytics workspace",
                  args: { name: "workspace" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a new Application Insights resource",
              options: [
                {
                  name: ["--app", "-a"],
                  description:
                    "GUID, app name, or fully-qualified Azure resource name of Application Insights component. The application GUID may be acquired from the API Access menu item on any Application Insights resource in the Azure portal. If using an application name, please specify resource group",
                  args: { name: "app" },
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
              name: "show",
              description: "Get an Application Insights resource",
              options: [
                {
                  name: ["--app", "-a"],
                  description:
                    "GUID, app name, or fully-qualified Azure resource name of Application Insights component. The application GUID may be acquired from the API Access menu item on any Application Insights resource in the Azure portal. If using an application name, please specify resource group",
                  args: { name: "app" },
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
              description:
                "Update properties on an existing Application Insights resource. The primary value which can be updated is kind, which customizes the UI experience",
              options: [
                {
                  name: ["--app", "-a"],
                  description:
                    "GUID, app name, or fully-qualified Azure resource name of Application Insights component. The application GUID may be acquired from the API Access menu item on any Application Insights resource in the Azure portal. If using an application name, please specify resource group",
                  args: { name: "app" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--ingestion-access",
                  description:
                    "The public network access type for accessing Application Insights ingestion",
                  args: {
                    name: "ingestion-access",
                    suggestions: ["Disabled", "Enabled"],
                  },
                },
                {
                  name: ["--kind", "-k"],
                  description:
                    "The kind of application that this component refers to, used to customize UI. This value is a freeform string, values should typically be one of web, ios, other, store, java, phone",
                  args: { name: "kind" },
                },
                {
                  name: "--query-access",
                  description:
                    "The public network access type for accessing Application Insights query",
                  args: {
                    name: "query-access",
                    suggestions: ["Disabled", "Enabled"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--retention-time",
                  description:
                    "Retention in days for Application Insights. The value can be one of the following values: 30,60,90,120,180,270,365,550,730. It can be set only when Application Insights is not connected to a Log Analytics workspace",
                  args: { name: "retention-time" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--workspace",
                  description:
                    "Name or resource ID of a log analytics workspace",
                  args: { name: "workspace" },
                },
              ],
            },
            {
              name: "update-tags",
              description:
                "Update tags on an existing Application Insights resource",
              options: [
                {
                  name: "--tags",
                  description:
                    'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
                  args: { name: "tags" },
                  isRequired: true,
                },
                {
                  name: ["--app", "-a"],
                  description:
                    "GUID, app name, or fully-qualified Azure resource name of Application Insights component. The application GUID may be acquired from the API Access menu item on any Application Insights resource in the Azure portal. If using an application name, please specify resource group",
                  args: { name: "app" },
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
              name: "billing",
              description:
                "Manage an Application Insights component billing features",
              subcommands: [
                {
                  name: "show",
                  description:
                    "Show the billing features of an Application Insights resource",
                  options: [
                    {
                      name: ["--app", "-a"],
                      description:
                        "GUID, app name, or fully-qualified Azure resource name of Application Insights component. The application GUID may be acquired from the API Access menu item on any Application Insights resource in the Azure portal. If using an application name, please specify resource group",
                      args: { name: "app" },
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
                  description:
                    "Update the billing features of an Application Insights resource",
                  options: [
                    {
                      name: "--add",
                      description:
                        "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                      args: { name: "add" },
                    },
                    {
                      name: ["--app", "-a"],
                      description:
                        "GUID, app name, or fully-qualified Azure resource name of Application Insights component. The application GUID may be acquired from the API Access menu item on any Application Insights resource in the Azure portal. If using an application name, please specify resource group",
                      args: { name: "app" },
                    },
                    {
                      name: "--cap",
                      description: "Daily data volume cap in GB",
                      args: { name: "cap" },
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
                      name: ["--stop", "-s"],
                      description:
                        "Do not send a notification email when the daily data volume cap is met",
                      args: {
                        name: "stop",
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
              name: "continues-export",
              description:
                "Manage Continuous Export configurations for an Application Insights component",
              subcommands: [
                {
                  name: "create",
                  description:
                    "Create a Continuous Export configuration for an Application Insights component",
                  options: [
                    {
                      name: ["--app", "-a"],
                      description:
                        "GUID, app name, or fully-qualified Azure resource name of Application Insights component. The application GUID may be acquired from the API Access menu item on any Application Insights resource in the Azure portal. If using an application name, please specify resource group",
                      args: { name: "app" },
                      isRequired: true,
                    },
                    {
                      name: "--dest-account",
                      description: "The name of destination storage account",
                      args: { name: "dest-account" },
                      isRequired: true,
                    },
                    {
                      name: "--dest-container",
                      description:
                        "The name of the destination storage container",
                      args: { name: "dest-container" },
                      isRequired: true,
                    },
                    {
                      name: "--dest-sas",
                      description:
                        "The SAS token for the destination storage container. It must grant write permission",
                      args: { name: "dest-sas" },
                      isRequired: true,
                    },
                    {
                      name: "--dest-sub-id",
                      description:
                        "The subscription ID of the destination storage account",
                      args: { name: "dest-sub-id" },
                      isRequired: true,
                    },
                    {
                      name: "--record-types",
                      description:
                        "The document types to be exported, as comma separated values. Allowed values include 'Requests', 'Event', 'Exceptions', 'Metrics', 'PageViews', 'PageViewPerformance', 'Rdd', 'PerformanceCounters', 'Availability', 'Messages'",
                      args: {
                        name: "record-types",
                        suggestions: [
                          "Availability",
                          "Event",
                          "Exceptions",
                          "Messages",
                          "Metrics",
                          "PageViewPerformance",
                          "PageViews",
                          "PerformanceCounters",
                          "Rdd",
                          "Requests",
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
                      name: "--dest-type",
                      description:
                        "The Continuous Export destination type. This has to be 'Blob'",
                      args: { name: "dest-type", suggestions: ["Blob"] },
                    },
                    {
                      name: "--is-enabled",
                      description:
                        "Set to 'true' to create a Continuous Export configuration as enabled, otherwise set it to 'false'",
                      args: {
                        name: "is-enabled",
                        suggestions: ["false", "true"],
                      },
                    },
                  ],
                },
                {
                  name: "delete",
                  description:
                    "Delete a specific Continuous Export     configuration of an Application Insights component",
                  options: [
                    {
                      name: "--id",
                      description:
                        "The Continuous Export configuration ID. This is unique within a Application Insights component",
                      args: { name: "id" },
                      isRequired: true,
                    },
                    {
                      name: ["--app", "-a"],
                      description:
                        "GUID, app name, or fully-qualified Azure resource name of Application Insights component. The application GUID may be acquired from the API Access menu item on any Application Insights resource in the Azure portal. If using an application name, please specify resource group",
                      args: { name: "app" },
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
                      name: ["--yes", "-y"],
                      description: "Do not prompt for confirmation",
                    },
                  ],
                },
                {
                  name: "list",
                  description:
                    "List a list of Continuous Export configuration of an Application Insights component",
                  options: [
                    {
                      name: ["--app", "-a"],
                      description:
                        "GUID, app name, or fully-qualified Azure resource name of Application Insights component. The application GUID may be acquired from the API Access menu item on any Application Insights resource in the Azure portal. If using an application name, please specify resource group",
                      args: { name: "app" },
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
                  description:
                    "Get the Continuous Export configuration for this export id",
                  options: [
                    {
                      name: "--id",
                      description:
                        "The Continuous Export configuration ID. This is unique within a Application Insights component",
                      args: { name: "id" },
                      isRequired: true,
                    },
                    {
                      name: ["--app", "-a"],
                      description:
                        "GUID, app name, or fully-qualified Azure resource name of Application Insights component. The application GUID may be acquired from the API Access menu item on any Application Insights resource in the Azure portal. If using an application name, please specify resource group",
                      args: { name: "app" },
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
                  description:
                    "Update a Continuous Export configuration for an Application Insights component",
                  options: [
                    {
                      name: "--id",
                      description:
                        "The Continuous Export configuration ID. This is unique within a Application Insights component",
                      args: { name: "id" },
                      isRequired: true,
                    },
                    {
                      name: ["--app", "-a"],
                      description:
                        "GUID, app name, or fully-qualified Azure resource name of Application Insights component. The application GUID may be acquired from the API Access menu item on any Application Insights resource in the Azure portal. If using an application name, please specify resource group",
                      args: { name: "app" },
                    },
                    {
                      name: "--dest-account",
                      description: "The name of destination storage account",
                      args: { name: "dest-account" },
                    },
                    {
                      name: "--dest-container",
                      description:
                        "The name of the destination storage container",
                      args: { name: "dest-container" },
                    },
                    {
                      name: "--dest-sas",
                      description:
                        "The SAS token for the destination storage container. It must grant write permission",
                      args: { name: "dest-sas" },
                    },
                    {
                      name: "--dest-sub-id",
                      description:
                        "The subscription ID of the destination storage account",
                      args: { name: "dest-sub-id" },
                    },
                    {
                      name: "--dest-type",
                      description:
                        "The Continuous Export destination type. This has to be 'Blob'",
                      args: { name: "dest-type", suggestions: ["Blob"] },
                    },
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids" },
                    },
                    {
                      name: "--is-enabled",
                      description:
                        "Set to 'true' to create a Continuous Export configuration as enabled, otherwise set it to 'false'",
                      args: {
                        name: "is-enabled",
                        suggestions: ["false", "true"],
                      },
                    },
                    {
                      name: "--record-types",
                      description:
                        "The document types to be exported, as comma separated values. Allowed values include 'Requests', 'Event', 'Exceptions', 'Metrics', 'PageViews', 'PageViewPerformance', 'Rdd', 'PerformanceCounters', 'Availability', 'Messages'",
                      args: {
                        name: "record-types",
                        suggestions: [
                          "Availability",
                          "Event",
                          "Exceptions",
                          "Messages",
                          "Metrics",
                          "PageViewPerformance",
                          "PageViews",
                          "PerformanceCounters",
                          "Rdd",
                          "Requests",
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
                  ],
                },
              ],
            },
            {
              name: "linked-storage",
              description:
                "Manage linked storage account for an Application Insights component",
              subcommands: [
                {
                  name: "link",
                  description:
                    "Link a storage account with an     Application Insights component",
                  options: [
                    {
                      name: ["--storage-account", "-s"],
                      description: "Name or ID of a linked storage account",
                      args: { name: "storage-account" },
                      isRequired: true,
                    },
                    {
                      name: ["--app", "-a"],
                      description:
                        "GUID, app name, or fully-qualified Azure resource name of Application Insights component. The application GUID may be acquired from the API Access menu item on any Application Insights resource in the Azure portal. If using an application name, please specify resource group",
                      args: { name: "app" },
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
                  name: "show",
                  description:
                    "Get the current linked storage settings for an Application Insights component",
                  options: [
                    {
                      name: ["--app", "-a"],
                      description:
                        "GUID, app name, or fully-qualified Azure resource name of Application Insights component. The application GUID may be acquired from the API Access menu item on any Application Insights resource in the Azure portal. If using an application name, please specify resource group",
                      args: { name: "app" },
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
                  name: "unlink",
                  description:
                    "Unlink a storage account with an Application Insights component",
                  options: [
                    {
                      name: ["--app", "-a"],
                      description:
                        "GUID, app name, or fully-qualified Azure resource name of Application Insights component. The application GUID may be acquired from the API Access menu item on any Application Insights resource in the Azure portal. If using an application name, please specify resource group",
                      args: { name: "app" },
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
                      name: ["--yes", "-y"],
                      description: "Do not prompt for confirmation",
                    },
                  ],
                },
                {
                  name: "update",
                  description:
                    "Update current linked storage account for an Application Insights component",
                  options: [
                    {
                      name: ["--storage-account", "-s"],
                      description: "Name or ID of a linked storage account",
                      args: { name: "storage-account" },
                      isRequired: true,
                    },
                    {
                      name: ["--app", "-a"],
                      description:
                        "GUID, app name, or fully-qualified Azure resource name of Application Insights component. The application GUID may be acquired from the API Access menu item on any Application Insights resource in the Azure portal. If using an application name, please specify resource group",
                      args: { name: "app" },
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
              ],
            },
          ],
        },
        {
          name: "events",
          description: "Retrieve events from an application",
          subcommands: [
            {
              name: "show",
              description:
                "List events by type or view a single event from an application, specified by type and ID",
              options: [
                {
                  name: "--type",
                  description: "The type of events to retrieve",
                  args: {
                    name: "type",
                    suggestions: [
                      "$all",
                      "availabilityResults",
                      "browserTimings",
                      "customEvents",
                      "customMetrics",
                      "dependencies",
                      "exceptions",
                      "pageViews",
                      "performanceCounters",
                      "requests",
                      "traces",
                    ],
                  },
                  isRequired: true,
                },
                {
                  name: ["--app", "-a"],
                  description:
                    "GUID, app name, or fully-qualified Azure resource name of Application Insights component. The application GUID may be acquired from the API Access menu item on any Application Insights resource in the Azure portal. If using an application name, please specify resource group",
                  args: { name: "app" },
                },
                {
                  name: "--end-time",
                  description:
                    "End of time range for current operation. Defaults to the current time. Format: date (yyyy-mm-dd) time (hh:mm:ss.xxxxx) timezone (+/-hh:mm)",
                  args: { name: "end-time" },
                },
                {
                  name: "--event",
                  description:
                    "GUID of the event to retrieve. This could be obtained by first listing and filtering events, then selecting an event of interest",
                  args: { name: "event" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--offset",
                  description:
                    "Time offset of the query range, in ##d##h format",
                  args: { name: "offset" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--start-time",
                  description:
                    "Start-time of time range for which to retrieve data. Format: date (yyyy-mm-dd) time (hh:mm:ss.xxxxx) timezone (+/-hh:mm)",
                  args: { name: "start-time" },
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
          name: "metrics",
          description: "Retrieve metrics from an application",
          subcommands: [
            {
              name: "get-metadata",
              description:
                "Get the metadata for metrics on a particular application",
              options: [
                {
                  name: ["--app", "-a"],
                  description:
                    "GUID, app name, or fully-qualified Azure resource name of Application Insights component. The application GUID may be acquired from the API Access menu item on any Application Insights resource in the Azure portal. If using an application name, please specify resource group",
                  args: { name: "app" },
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
              name: "show",
              description: "View the value of a single metric",
              options: [
                {
                  name: ["--metrics", "-m"],
                  description:
                    "The metric to retrieve. May be either a standard AI metric or an application-specific custom metric",
                  args: { name: "metrics" },
                  isRequired: true,
                },
                {
                  name: "--aggregation",
                  description:
                    "The aggregation to use when computing the metric values. To retrieve more than one aggregation at a time, separate them with a comma. If no aggregation is specified, then the default aggregation for the metric is used",
                  args: { name: "aggregation" },
                },
                {
                  name: ["--app", "-a"],
                  description:
                    "GUID, app name, or fully-qualified Azure resource name of Application Insights component. The application GUID may be acquired from the API Access menu item on any Application Insights resource in the Azure portal. If using an application name, please specify resource group",
                  args: { name: "app" },
                },
                {
                  name: "--end-time",
                  description:
                    "End of time range for current operation. Defaults to the current time. Format: date (yyyy-mm-dd) time (hh:mm:ss.xxxxx) timezone (+/-hh:mm)",
                  args: { name: "end-time" },
                },
                {
                  name: "--filter",
                  description:
                    "An expression used to filter the results. This value should be a valid OData filter expression where the keys of each clause should be applicable dimensions for the metric you are retrieving",
                  args: { name: "filter" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--interval",
                  description:
                    "The interval over which to aggregate metrics, in ##h##m format",
                  args: { name: "interval" },
                },
                {
                  name: "--offset",
                  description:
                    "Time offset of the query range, in ##d##h format",
                  args: { name: "offset" },
                },
                {
                  name: "--orderby",
                  description:
                    "The aggregation function and direction to sort the segments by. This value is only valid when segment is specified",
                  args: { name: "orderby" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--segment",
                  description:
                    "The name of the dimension to segment the metric values by. This dimension must be applicable to the metric you are retrieving. To segment by more than one dimension at a time, separate them with a comma (,). In this case, the metric data will be segmented in the order the dimensions are listed in the parameter",
                  args: { name: "segment" },
                },
                {
                  name: "--start-time",
                  description:
                    "Start-time of time range for which to retrieve data. Format: date (yyyy-mm-dd) time (hh:mm:ss.xxxxx) timezone (+/-hh:mm)",
                  args: { name: "start-time" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--top",
                  description:
                    "The number of segments to return. This value is only valid when segment is specified",
                  args: { name: "top" },
                },
              ],
            },
          ],
        },
        {
          name: "web-test",
          description: "Manage web test with application insights",
          subcommands: [
            {
              name: "create",
              description: "Create an Application Insights web test definition",
              options: [
                {
                  name: ["--web-test-name", "--name", "-n"],
                  description:
                    "The name of the Application Insights WebTest resource",
                  args: { name: "web-test-name" },
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
                  name: "--content-validation",
                  description:
                    "The collection of content validation properties",
                  args: { name: "content-validation" },
                },
                {
                  name: "--defined-web-test-name",
                  description: "User defined name if this WebTest",
                  args: { name: "defined-web-test-name" },
                },
                {
                  name: "--description",
                  description: "User defined description for this WebTest",
                  args: { name: "description" },
                },
                {
                  name: "--enabled",
                  description: "Is the test actively being monitored",
                  args: { name: "enabled", suggestions: ["false", "true"] },
                },
                {
                  name: "--expected-status-code",
                  description:
                    "Validate that the WebTest returns the http status code provided",
                  args: { name: "expected-status-code" },
                },
                {
                  name: "--follow-redirects",
                  description: "Follow redirects for this web test",
                  args: {
                    name: "follow-redirects",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--frequency",
                  description:
                    "Interval in seconds between test runs for this WebTest. Default value is 300",
                  args: { name: "frequency" },
                },
                {
                  name: "--headers",
                  description:
                    "List of headers and their values to add to the WebTest call",
                  args: { name: "headers" },
                },
                {
                  name: "--http-verb",
                  description: "Http verb to use for this web test",
                  args: { name: "http-verb" },
                },
                {
                  name: "--ignore-status-code",
                  description:
                    "When set, validation will ignore the status code",
                  args: {
                    name: "ignore-status-code",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--kind",
                  description:
                    "The kind of WebTest that this web test watches. Choices are ping and multistep",
                  args: { name: "kind", suggestions: ["multistep", "ping"] },
                },
                {
                  name: ["--location", "-l"],
                  description:
                    "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
                  args: { name: "location" },
                },
                {
                  name: "--locations",
                  description:
                    "A list of where to physically run the tests from to give global coverage for accessibility of your application",
                  args: { name: "locations" },
                },
                {
                  name: "--parse-requests",
                  description: "Parse Dependent request for this WebTest",
                  args: {
                    name: "parse-requests",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--request-body",
                  description:
                    "Base64 encoded string body to send with this web test",
                  args: { name: "request-body" },
                },
                {
                  name: "--request-url",
                  description: "Url location to test",
                  args: { name: "request-url" },
                },
                {
                  name: "--retry-enabled",
                  description: "Allow for retries should this WebTest fail",
                  args: {
                    name: "retry-enabled",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--ssl-check",
                  description: "Checks to see if the SSL cert is still valid",
                  args: { name: "ssl-check", suggestions: ["false", "true"] },
                },
                {
                  name: "--ssl-lifetime-check",
                  description:
                    "A number of days to check still remain before the the existing SSL cert expires. Value must be positive and the SSLCheck must be set to true",
                  args: { name: "ssl-lifetime-check" },
                },
                {
                  name: "--synthetic-monitor-id",
                  description:
                    "Unique ID of this WebTest. This is typically the same value as the Name field",
                  args: { name: "synthetic-monitor-id" },
                },
                {
                  name: "--tags",
                  description:
                    'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
                  args: { name: "tags" },
                },
                {
                  name: "--timeout",
                  description:
                    "Seconds until this WebTest will timeout and fail. Default value is 30",
                  args: { name: "timeout" },
                },
                {
                  name: "--web-test",
                  description:
                    "The XML specification of a WebTest to run against an application",
                  args: { name: "web-test" },
                },
                {
                  name: "--web-test-kind",
                  description:
                    "The kind of web test this is, valid choices are ping, multistep and standard",
                  args: {
                    name: "web-test-kind",
                    suggestions: ["multistep", "ping", "standard"],
                  },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete an Application Insights web test",
              options: [
                {
                  name: ["--web-test-name", "--name", "-n"],
                  description:
                    "The name of the Application Insights WebTest resource",
                  args: { name: "web-test-name" },
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
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "list",
              description:
                "Get all Application Insights web tests defined for the specified component. And Get all Application Insights web tests defined within a specified resource group. And Get all Application Insights web test alerts definitions within a subscription",
              options: [
                {
                  name: "--component-name",
                  description:
                    "The name of the Application Insights component resource",
                  args: { name: "component-name" },
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
              description:
                "Get a specific Application Insights web test definition",
              options: [
                {
                  name: ["--web-test-name", "--name", "-n"],
                  description:
                    "The name of the Application Insights WebTest resource",
                  args: { name: "web-test-name" },
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
              description: "Update an Application Insights web test definition",
              options: [
                {
                  name: ["--web-test-name", "--name", "-n"],
                  description:
                    "The name of the Application Insights WebTest resource",
                  args: { name: "web-test-name" },
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
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add" },
                },
                {
                  name: "--content-validation",
                  description:
                    "The collection of content validation properties",
                  args: { name: "content-validation" },
                },
                {
                  name: "--defined-web-test-name",
                  description: "User defined name if this WebTest",
                  args: { name: "defined-web-test-name" },
                },
                {
                  name: "--description",
                  description: "User defined description for this WebTest",
                  args: { name: "description" },
                },
                {
                  name: "--enabled",
                  description: "Is the test actively being monitored",
                  args: { name: "enabled", suggestions: ["false", "true"] },
                },
                {
                  name: "--expected-status-code",
                  description:
                    "Validate that the WebTest returns the http status code provided",
                  args: { name: "expected-status-code" },
                },
                {
                  name: "--follow-redirects",
                  description: "Follow redirects for this web test",
                  args: {
                    name: "follow-redirects",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--force-string",
                  description:
                    "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
                },
                {
                  name: "--frequency",
                  description:
                    "Interval in seconds between test runs for this WebTest. Default value is 300",
                  args: { name: "frequency" },
                },
                {
                  name: "--headers",
                  description:
                    "List of headers and their values to add to the WebTest call",
                  args: { name: "headers" },
                },
                {
                  name: "--http-verb",
                  description: "Http verb to use for this web test",
                  args: { name: "http-verb" },
                },
                {
                  name: "--ignore-status-code",
                  description:
                    "When set, validation will ignore the status code",
                  args: {
                    name: "ignore-status-code",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--kind",
                  description:
                    "The kind of WebTest that this web test watches. Choices are ping and multistep",
                  args: { name: "kind", suggestions: ["multistep", "ping"] },
                },
                {
                  name: ["--location", "-l"],
                  description:
                    "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
                  args: { name: "location" },
                },
                {
                  name: "--locations",
                  description:
                    "A list of where to physically run the tests from to give global coverage for accessibility of your application",
                  args: { name: "locations" },
                },
                {
                  name: "--parse-requests",
                  description: "Parse Dependent request for this WebTest",
                  args: {
                    name: "parse-requests",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--remove",
                  description:
                    "Remove a property or an element from a list. Example: --remove property.list OR --remove propertyToRemove",
                  args: { name: "remove" },
                },
                {
                  name: "--request-body",
                  description:
                    "Base64 encoded string body to send with this web test",
                  args: { name: "request-body" },
                },
                {
                  name: "--request-url",
                  description: "Url location to test",
                  args: { name: "request-url" },
                },
                {
                  name: "--retry-enabled",
                  description: "Allow for retries should this WebTest fail",
                  args: {
                    name: "retry-enabled",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--set",
                  description:
                    "Update an object by specifying a property path and value to set. Example: --set property1.property2=",
                  args: { name: "set" },
                },
                {
                  name: "--ssl-check",
                  description: "Checks to see if the SSL cert is still valid",
                  args: { name: "ssl-check", suggestions: ["false", "true"] },
                },
                {
                  name: "--ssl-lifetime-check",
                  description:
                    "A number of days to check still remain before the the existing SSL cert expires. Value must be positive and the SSLCheck must be set to true",
                  args: { name: "ssl-lifetime-check" },
                },
                {
                  name: "--synthetic-monitor-id",
                  description:
                    "Unique ID of this WebTest. This is typically the same value as the Name field",
                  args: { name: "synthetic-monitor-id" },
                },
                {
                  name: "--tags",
                  description:
                    'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
                  args: { name: "tags" },
                },
                {
                  name: "--timeout",
                  description:
                    "Seconds until this WebTest will timeout and fail. Default value is 30",
                  args: { name: "timeout" },
                },
                {
                  name: "--web-test",
                  description:
                    "The XML specification of a WebTest to run against an application",
                  args: { name: "web-test" },
                },
                {
                  name: "--web-test-kind",
                  description:
                    "The kind of web test this is, valid choices are ping, multistep and standard",
                  args: {
                    name: "web-test-kind",
                    suggestions: ["multistep", "ping", "standard"],
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "autoscale",
      description: "Manage autoscale settings",
      subcommands: [
        {
          name: "create",
          description: "Create new autoscale settings",
          options: [
            {
              name: "--count",
              description:
                "The numer of instances to use. If used with --min/max-count, the default number of instances to use",
              args: { name: "count" },
              isRequired: true,
            },
            {
              name: "--resource",
              description: "Name or ID of the target resource",
              args: { name: "resource" },
              isRequired: true,
            },
            {
              name: ["--action", "-a"],
              description: "Add an action to fire when a scaling event occurs",
              args: { name: "action" },
            },
            {
              name: "--disabled",
              description: "Create the autoscale settings in a disabled state",
              args: { name: "disabled", suggestions: ["false", "true"] },
            },
            {
              name: "--email-administrator",
              description:
                "Send email to subscription administrator on scaling",
              args: {
                name: "email-administrator",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--email-coadministrators",
              description:
                "Send email to subscription co-administrators on scaling",
              args: {
                name: "email-coadministrators",
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
              name: "--max-count",
              description: "The maximum number of instances",
              args: { name: "max-count" },
            },
            {
              name: "--min-count",
              description: "The minimum number of instances",
              args: { name: "min-count" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the autoscale settings",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-namespace",
              description: "Target resource provider namespace",
              args: { name: "resource-namespace" },
            },
            {
              name: "--resource-parent",
              description: "Target resource parent path, if applicable",
              args: { name: "resource-parent" },
            },
            {
              name: "--resource-type",
              description:
                "Target resource type. Can also accept namespace/type format (Ex: 'Microsoft.Compute/virtualMachines')",
              args: { name: "resource-type" },
            },
            {
              name: "--scale-look-ahead-time",
              description:
                "The amount of time to specify by which instances are launched in advance. It must be between 1 minute and 60 minutes in ISO 8601 format (for example, 100 days would be P100D)",
              args: { name: "scale-look-ahead-time" },
            },
            {
              name: "--scale-mode",
              description: "The predictive autoscale mode",
              args: {
                name: "scale-mode",
                suggestions: ["Disabled", "Enabled", "ForecastOnly"],
              },
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
          description: "Delete an autoscale setting",
          options: [
            {
              name: ["--autoscale-name", "--name", "-n"],
              description: "The autoscale setting name",
              args: { name: "autoscale-name" },
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
          name: "list",
          description: "Lists the autoscale settings for a resource group",
          options: [
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
          description: "Get an autoscale setting",
          options: [
            {
              name: ["--autoscale-name", "--name", "-n"],
              description: "The autoscale setting name",
              args: { name: "autoscale-name" },
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
          name: "show-predictive-metric",
          description: "Show predictive autoscale metric future data",
          options: [
            {
              name: "--aggregation",
              description:
                "The list of aggregation types (comma separated) to retrieve",
              args: { name: "aggregation" },
              isRequired: true,
            },
            {
              name: "--interval",
              description: "The interval (i.e. timegrain) of the query",
              args: { name: "interval" },
              isRequired: true,
            },
            {
              name: "--metric-name",
              description:
                "The names of the metrics (comma separated) to retrieve. Special case: If a metricname itself has a comma in it then use %2 to indicate it. Eg: 'Metric,Name1' should be 'Metric%2Name1'",
              args: { name: "metric-name" },
              isRequired: true,
            },
            {
              name: "--metric-namespace",
              description: "Metric namespace to query metric definitions for",
              args: { name: "metric-namespace" },
              isRequired: true,
            },
            {
              name: "--timespan",
              description:
                "The timespan of the query. It is a string with the following format 'startDateTime_ISO/endDateTime_ISO'",
              args: { name: "timespan" },
              isRequired: true,
            },
            {
              name: "--autoscale-setting-name",
              description: "The autoscale setting name",
              args: { name: "autoscale-setting-name" },
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
          description: "Update an autoscale setting",
          options: [
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: ["--add-actions", "--add-action", "-a"],
              description:
                'Add an action to fire when a scaling event occurs. Usage: --add-action TYPE KEY [ARG ...] Email: --add-action email bob@contoso.com ann@contoso.com Webhook: --add-action webhook https://www.contoso.com/alert apiKey=value Webhook: --add-action webhook https://www.contoso.com/alert?apiKey=value Multiple actions can be specified by using more than one --add-action argument. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "add-actions" },
            },
            {
              name: ["--autoscale-name", "--name", "-n"],
              description: "The autoscale setting name",
              args: { name: "autoscale-name" },
            },
            {
              name: "--count",
              description:
                "The numer of instances to use. If used with --min/max-count, the default number of instances to use",
              args: { name: "count" },
            },
            {
              name: "--email-administrator",
              description:
                "Send email to subscription administrator on scaling",
              args: {
                name: "email-administrator",
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
              name: "--email-coadministrators",
              description:
                "Send email to subscription co-administrators on scaling",
              args: {
                name: "email-coadministrators",
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
              name: "--enabled",
              description:
                "The enabled flag. Specifies whether automatic scaling is enabled for the resource. The default value is 'false'",
              args: {
                name: "enabled",
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
              name: "--max-count",
              description: "The maximum number of instances",
              args: { name: "max-count" },
            },
            {
              name: "--min-count",
              description: "The minimum number of instances",
              args: { name: "min-count" },
            },
            {
              name: "--remove",
              description:
                "Remove a property or an element from a list. Example: --remove property.list OR --remove propertyToRemove",
              args: { name: "remove" },
            },
            {
              name: ["--remove-actions", "--remove-action", "-r"],
              description:
                'Remove one or more actions. Usage: --remove-action TYPE KEY [KEY ...] Email: --remove-action email bob@contoso.com ann@contoso.com Webhook: --remove-action webhook https://contoso.com/alert https://alerts.contoso.com. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "remove-actions" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--scale-look-ahead-time",
              description:
                "The amount of time to specify by which instances are launched in advance. It must be between 1 minute and 60 minutes in ISO 8601 format (for example, 100 days would be P100D)",
              args: { name: "scale-look-ahead-time" },
            },
            {
              name: "--scale-mode",
              description: "The predictive autoscale mode",
              args: {
                name: "scale-mode",
                suggestions: ["Disabled", "Enabled", "ForecastOnly"],
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
              name: "--tags",
              description:
                'Gets or sets a list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater in length than 128 characters and a value no greater in length than 256 characters. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tags" },
            },
          ],
        },
        {
          name: "profile",
          description:
            "Manage autoscaling profiles.\n\n\t\tFor more information on autoscaling, visit: https://docs.microsoft.com/azure/monitoring-and-diagnostics/monitoring-understanding-autoscale-settings",
          subcommands: [
            {
              name: "create",
              description: "Create a fixed or recurring autoscale profile",
              options: [
                {
                  name: "--autoscale-name",
                  description: "Name of the autoscale settings",
                  args: { name: "autoscale-name" },
                  isRequired: true,
                },
                {
                  name: "--count",
                  description:
                    "The numer of instances to use. If used with --min/max-count, the default number of instances to use",
                  args: { name: "count" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the autoscale profile",
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
                  name: "--timezone",
                  description:
                    "Timezone name. value from: az monitor autoscale profile list-timezones",
                  args: { name: "timezone" },
                  isRequired: true,
                },
                {
                  name: "--copy-rules",
                  description:
                    "Name of an existing schedule from which to copy the scaling rules for the new schedule",
                  args: { name: "copy-rules" },
                },
                {
                  name: "--end",
                  description:
                    "When the autoscale profile ends. Format depends on the type of profile",
                  args: { name: "end" },
                },
                {
                  name: "--max-count",
                  description: "The maximum number of instances",
                  args: { name: "max-count" },
                },
                {
                  name: "--min-count",
                  description: "The minimum number of instances",
                  args: { name: "min-count" },
                },
                {
                  name: ["--recurrence", "-r"],
                  description:
                    "When the profile recurs. If omitted, a fixed (non-recurring) profile is created",
                  args: { name: "recurrence" },
                },
                {
                  name: "--start",
                  description:
                    "When the autoscale profile begins. Format depends on the type of profile",
                  args: { name: "start" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete an autoscale profile",
              options: [
                {
                  name: "--autoscale-name",
                  description: "Name of the autoscale settings",
                  args: { name: "autoscale-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the autoscale profile",
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
              description: "List autoscale profiles",
              options: [
                {
                  name: "--autoscale-name",
                  description: "Name of the autoscale settings",
                  args: { name: "autoscale-name" },
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
              name: "list-timezones",
              description: "Look up time zone information",
              options: [
                {
                  name: "--offset",
                  description: "Filter results based on UTC hour offset",
                  args: { name: "offset" },
                },
                {
                  name: ["--search-query", "-q"],
                  description: "Query text to find",
                  args: { name: "search-query" },
                },
              ],
            },
            {
              name: "show",
              description: "Show details of an autoscale profile",
              options: [
                {
                  name: "--autoscale-name",
                  description: "Name of the autoscale settings",
                  args: { name: "autoscale-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the autoscale profile",
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
          ],
        },
        {
          name: "rule",
          description:
            "Manage autoscale scaling rules.\n\n\t\tFor more information on autoscaling, visit: https://docs.microsoft.com/azure/monitoring-and-diagnostics/monitoring-understanding-autoscale-settings",
          subcommands: [
            {
              name: "copy",
              description: "Copy autoscale rules from one profile to another",
              options: [
                {
                  name: "--autoscale-name",
                  description: "Name of the autoscale settings",
                  args: { name: "autoscale-name" },
                  isRequired: true,
                },
                {
                  name: "--dest-schedule",
                  description: "Name of the profile to copy rules to",
                  args: { name: "dest-schedule" },
                  isRequired: true,
                },
                {
                  name: "--index",
                  description:
                    "Space-separated list of rule indices to copy, or '*' to copy all rules",
                  args: { name: "index" },
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
                  name: "--source-schedule",
                  description: "Name of the profile to copy rules from",
                  args: { name: "source-schedule" },
                },
              ],
            },
            {
              name: "create",
              description: "Add a new autoscale rule",
              options: [
                {
                  name: "--autoscale-name",
                  description: "Name of the autoscale settings",
                  args: { name: "autoscale-name" },
                  isRequired: true,
                },
                {
                  name: "--condition",
                  description:
                    "The condition which triggers the scaling action",
                  args: { name: "condition" },
                  isRequired: true,
                },
                {
                  name: "--scale",
                  description: "The direction and amount to scale",
                  args: { name: "scale" },
                  isRequired: true,
                },
                {
                  name: "--cooldown",
                  description:
                    "The number of minutes that must elapse before another scaling event can occur",
                  args: { name: "cooldown" },
                },
                {
                  name: "--profile-name",
                  description: "Name of the autoscale profile",
                  args: { name: "profile-name" },
                },
                {
                  name: "--resource",
                  description: "Name or ID of the target resource",
                  args: { name: "resource" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--resource-namespace",
                  description: "Target resource provider namespace",
                  args: { name: "resource-namespace" },
                },
                {
                  name: "--resource-parent",
                  description: "Target resource parent path, if applicable",
                  args: { name: "resource-parent" },
                },
                {
                  name: "--resource-type",
                  description:
                    "Target resource type. Can also accept namespace/type format (Ex: 'Microsoft.Compute/virtualMachines')",
                  args: { name: "resource-type" },
                },
                {
                  name: "--timegrain",
                  description: "The way metrics are polled across instances",
                  args: { name: "timegrain" },
                },
              ],
            },
            {
              name: "delete",
              description: "Remove autoscale rules from a profile",
              options: [
                {
                  name: "--autoscale-name",
                  description: "Name of the autoscale settings",
                  args: { name: "autoscale-name" },
                  isRequired: true,
                },
                {
                  name: "--index",
                  description:
                    "Space-separated list of rule indices to remove, or '*' to clear all rules",
                  args: { name: "index" },
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
                  name: "--profile-name",
                  description: "Name of the autoscale profile",
                  args: { name: "profile-name" },
                },
              ],
            },
            {
              name: "list",
              description: "List autoscale rules for a profile",
              options: [
                {
                  name: "--autoscale-name",
                  description: "Name of the autoscale settings",
                  args: { name: "autoscale-name" },
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
                  name: "--profile-name",
                  description: "Name of the autoscale profile",
                  args: { name: "profile-name" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "clone",
      description:
        "Clone metrics alert rules from one resource to another resource",
      options: [
        {
          name: "--source-resource",
          description: "Resource ID of the source resource",
          args: { name: "source-resource" },
          isRequired: true,
        },
        {
          name: "--target-resource",
          description: "Resource ID of the target resource",
          args: { name: "target-resource" },
          isRequired: true,
        },
        {
          name: "--always-clone",
          description:
            "If this argument is applied, all monitor settings would be cloned instead of expanding its scope",
        },
        {
          name: ["--types", "-t"],
          description:
            "List of types of monitor settings which would be cloned",
          args: { name: "types", suggestions: ["metricsAlert"] },
        },
      ],
    },
    {
      name: "data-collection",
      description: "Manage data collection for monitor control service",
      subcommands: [
        {
          name: "endpoint",
          description:
            "Manage data collection endpoint for monitor control service",
          subcommands: [
            {
              name: "create",
              description: "Create a data collection endpoint",
              options: [
                {
                  name: ["--name", "-n"],
                  description:
                    "The name of the data collection endpoint. The name is case insensitive",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--public-network-access",
                  description:
                    "The configuration to set whether network access from public internet to the endpoints are allowed",
                  args: {
                    name: "public-network-access",
                    suggestions: ["Disabled", "Enabled"],
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
                  name: "--description",
                  description: "Description of the data collection endpoint",
                  args: { name: "description" },
                },
                {
                  name: "--kind",
                  description: "The kind of the resource",
                  args: { name: "kind", suggestions: ["Linux", "Windows"] },
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
              description: "Delete a data collection endpoint",
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
                    "The name of the data collection endpoint. The name is case insensitive",
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
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "list",
              description: "List all data collection endpoints",
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
              description: "Show the specified data collection endpoint",
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
                    "The name of the data collection endpoint. The name is case insensitive",
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
              description: "Update a data collection endpoint",
              options: [
                {
                  name: "--description",
                  description: "Description of the data collection endpoint",
                  args: { name: "description" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--kind",
                  description: "The kind of the resource",
                  args: { name: "kind", suggestions: ["Linux", "Windows"] },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "The name of the data collection endpoint. The name is case insensitive",
                  args: { name: "name" },
                },
                {
                  name: "--public-network-access",
                  description:
                    "The configuration to set whether network access from public internet to the endpoints are allowed",
                  args: {
                    name: "public-network-access",
                    suggestions: ["Disabled", "Enabled"],
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
          name: "rule",
          description:
            "Manage data collection rule for monitor control service",
          subcommands: [
            {
              name: "create",
              description: "Create a data collection rule",
              options: [
                {
                  name: ["--name", "-n"],
                  description:
                    "The name of the data collection rule. The name is case insensitive",
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
                  name: "--rule-file",
                  description: "The json file for rule parameters",
                  args: { name: "rule-file" },
                  isRequired: true,
                },
                {
                  name: "--description",
                  description: "Description of the data collection rule",
                  args: { name: "description" },
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
              description: "Deletes a data collection rule",
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
                    "The name of the data collection rule. The name is case insensitive",
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
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "list",
              description:
                "List all data collection rules in the specified resource group. And Lists all data collection rules in the specified subscription",
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
              description: "Return the specified data collection rule",
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
                    "The name of the data collection rule. The name is case insensitive",
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
              description: "Update a data collection rule",
              options: [
                {
                  name: "--data-flows",
                  description: "The specification of data flows",
                  args: { name: "data-flows" },
                },
                {
                  name: "--description",
                  description: "Description of the data collection rule",
                  args: { name: "description" },
                },
                {
                  name: "--extensions",
                  description:
                    "The list of Azure VM extension data source configurations. Expected value: json-string/@json-file",
                  args: { name: "extensions" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--log-analytics",
                  description: "List of Log Analytics destinations",
                  args: { name: "log-analytics" },
                },
                {
                  name: "--monitor-metrics",
                  description: "Azure Monitor Metrics destination",
                  args: { name: "monitor-metrics" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "The name of the data collection rule. The name is case insensitive",
                  args: { name: "name" },
                },
                {
                  name: "--performance-counters",
                  description:
                    "The list of performance counter data source configurations",
                  args: { name: "performance-counters" },
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
                  name: "--syslog",
                  description: "The list of Syslog data source configurations",
                  args: { name: "syslog" },
                },
                {
                  name: "--tags",
                  description:
                    'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
                  args: { name: "tags" },
                },
                {
                  name: "--windows-event-logs",
                  description:
                    "The list of Windows Event Log data source configurations",
                  args: { name: "windows-event-logs" },
                },
              ],
            },
            {
              name: "association",
              description:
                "Manage data collection rule association for monitor control service",
              subcommands: [
                {
                  name: "create",
                  description: "Create an association",
                  options: [
                    {
                      name: ["--name", "-n"],
                      description: "The name of the association",
                      args: { name: "name" },
                      isRequired: true,
                    },
                    {
                      name: "--resource",
                      description: "The identifier of the resource",
                      args: { name: "resource" },
                      isRequired: true,
                    },
                    {
                      name: "--description",
                      description: "Description of the association",
                      args: { name: "description" },
                    },
                    {
                      name: "--rule-id",
                      description:
                        "The resource ID of the data collection rule that is to be associated",
                      args: { name: "rule-id" },
                    },
                  ],
                },
                {
                  name: "delete",
                  description: "Delete an association",
                  options: [
                    {
                      name: ["--name", "-n"],
                      description:
                        "The name of the association. The name is case insensitive",
                      args: { name: "name" },
                      isRequired: true,
                    },
                    {
                      name: "--resource",
                      description: "The identifier of the resource",
                      args: { name: "resource" },
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
                  description:
                    "List associations for the specified data collection rule. And Lists associations for the specified resource",
                  options: [
                    {
                      name: "--endpoint-name",
                      description:
                        "The name of the data collection endpoint. The name is case insensitive",
                      args: { name: "endpoint-name" },
                    },
                    {
                      name: "--resource",
                      description: "The identifier of the resource",
                      args: { name: "resource" },
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                    },
                    {
                      name: "--rule-name",
                      description:
                        "The name of the data collection rule. The name is case insensitive",
                      args: { name: "rule-name" },
                    },
                  ],
                },
                {
                  name: "show",
                  description: "Return the specified association",
                  options: [
                    {
                      name: ["--name", "-n"],
                      description:
                        "The name of the association. The name is case insensitive",
                      args: { name: "name" },
                      isRequired: true,
                    },
                    {
                      name: "--resource",
                      description: "The identifier of the resource",
                      args: { name: "resource" },
                      isRequired: true,
                    },
                  ],
                },
                {
                  name: "update",
                  description: "Update an association",
                  options: [
                    {
                      name: ["--name", "-n"],
                      description: "The name of the association",
                      args: { name: "name" },
                      isRequired: true,
                    },
                    {
                      name: "--resource",
                      description: "The identifier of the resource",
                      args: { name: "resource" },
                      isRequired: true,
                    },
                    {
                      name: "--description",
                      description: "Description of the association",
                      args: { name: "description" },
                    },
                    {
                      name: "--rule-id",
                      description:
                        "The resource ID of the data collection rule that is to be associated",
                      args: { name: "rule-id" },
                    },
                  ],
                },
              ],
            },
            {
              name: "data-flow",
              description: "Manage data flows",
              subcommands: [
                {
                  name: "add",
                  description: "Add a data flow",
                  options: [
                    {
                      name: "--destinations",
                      description: "List of destinations for this data flow",
                      args: { name: "destinations" },
                      isRequired: true,
                    },
                    {
                      name: "--streams",
                      description: "List of streams for this data flow",
                      args: {
                        name: "streams",
                        suggestions: [
                          "Microsoft-Event",
                          "Microsoft-InsightsMetrics",
                          "Microsoft-Perf",
                          "Microsoft-Syslog",
                          "Microsoft-WindowsEvent",
                        ],
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
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                    },
                    {
                      name: "--rule-name",
                      description:
                        "The name of the data collection rule. The name is case insensitive",
                      args: { name: "rule-name" },
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
                  description: "List data flows",
                  options: [
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                      isRequired: true,
                    },
                    {
                      name: "--rule-name",
                      description:
                        "The name of the data collection rule. The name is case insensitive",
                      args: { name: "rule-name" },
                      isRequired: true,
                    },
                  ],
                },
              ],
            },
            {
              name: "log-analytics",
              description: "Manage Log Analytics destinations",
              subcommands: [
                {
                  name: "add",
                  description:
                    "Add Log Analytics destinations of a data collection rule",
                  options: [
                    {
                      name: ["--name", "-n"],
                      description:
                        "A friendly name for the destination. This name should be unique across all destinations (regardless of type) within the data collection rule",
                      args: { name: "name" },
                      isRequired: true,
                    },
                    {
                      name: "--resource-id",
                      description:
                        "The resource ID of the Log Analytics workspace",
                      args: { name: "resource-id" },
                      isRequired: true,
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
                      name: "--rule-name",
                      description:
                        "The name of the data collection rule. The name is case insensitive",
                      args: { name: "rule-name" },
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
                  name: "delete",
                  description:
                    "Delete a Log Analytics destinations of a data collection rule",
                  options: [
                    {
                      name: ["--name", "-n"],
                      description:
                        "A friendly name for the destination. This name should be unique across all destinations (regardless of type) within the data collection rule",
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
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                    },
                    {
                      name: "--rule-name",
                      description:
                        "The name of the data collection rule. The name is case insensitive",
                      args: { name: "rule-name" },
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
                    "List Log Analytics destinations of a data collection rule",
                  options: [
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                      isRequired: true,
                    },
                    {
                      name: "--rule-name",
                      description:
                        "The name of the data collection rule. The name is case insensitive",
                      args: { name: "rule-name" },
                      isRequired: true,
                    },
                  ],
                },
                {
                  name: "show",
                  description:
                    "Show a Log Analytics destination of a data collection rule",
                  options: [
                    {
                      name: ["--name", "-n"],
                      description:
                        "A friendly name for the destination. This name should be unique across all destinations (regardless of type) within the data collection rule",
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
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                    },
                    {
                      name: "--rule-name",
                      description:
                        "The name of the data collection rule. The name is case insensitive",
                      args: { name: "rule-name" },
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
                    "Update a Log Analytics destination of a data collection rule",
                  options: [
                    {
                      name: ["--name", "-n"],
                      description:
                        "A friendly name for the destination. This name should be unique across all destinations (regardless of type) within the data collection rule",
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
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                    },
                    {
                      name: "--resource-id",
                      description:
                        "The resource ID of the Log Analytics workspace",
                      args: { name: "resource-id" },
                    },
                    {
                      name: "--rule-name",
                      description:
                        "The name of the data collection rule. The name is case insensitive",
                      args: { name: "rule-name" },
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
              name: "performance-counter",
              description: "Manage Log performance counter data source",
              subcommands: [
                {
                  name: "add",
                  description: "Add a Log performance counter data source",
                  options: [
                    {
                      name: "--counter-specifiers",
                      description:
                        "A list of specifier names of the performance counters you want to collect.Use a wildcard (*) to collect a counter for all instances. To get a list of performance counters on Windows, run the command 'typeperf'",
                      args: { name: "counter-specifiers" },
                      isRequired: true,
                    },
                    {
                      name: ["--name", "-n"],
                      description:
                        "A friendly name for the data source. This name should be unique across all data sources (regardless of type) within the data collection rule",
                      args: { name: "name" },
                      isRequired: true,
                    },
                    {
                      name: "--sampling-frequency",
                      description:
                        "The number of seconds between consecutive counter measurements (samples)",
                      args: { name: "sampling-frequency" },
                      isRequired: true,
                    },
                    {
                      name: "--streams",
                      description:
                        "List of streams that this data source will be sent to. A stream indicates what schema will be used for this data and usually what table in Log Analytics the data will be sent to",
                      args: {
                        name: "streams",
                        suggestions: [
                          "Microsoft-InsightsMetrics",
                          "Microsoft-Perf",
                        ],
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
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                    },
                    {
                      name: "--rule-name",
                      description:
                        "The name of the data collection rule. The name is case insensitive",
                      args: { name: "rule-name" },
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
                  name: "delete",
                  description: "Delete a Log performance counter data source",
                  options: [
                    {
                      name: ["--name", "-n"],
                      description:
                        "A friendly name for the data source. This name should be unique across all data sources (regardless of type) within the data collection rule",
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
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                    },
                    {
                      name: "--rule-name",
                      description:
                        "The name of the data collection rule. The name is case insensitive",
                      args: { name: "rule-name" },
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
                  description: "List Log performance counter data sources",
                  options: [
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                      isRequired: true,
                    },
                    {
                      name: "--rule-name",
                      description:
                        "The name of the data collection rule. The name is case insensitive",
                      args: { name: "rule-name" },
                      isRequired: true,
                    },
                  ],
                },
                {
                  name: "show",
                  description: "Show a Log performance counter data source",
                  options: [
                    {
                      name: ["--name", "-n"],
                      description:
                        "A friendly name for the data source. This name should be unique across all data sources (regardless of type) within the data collection rule",
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
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                    },
                    {
                      name: "--rule-name",
                      description:
                        "The name of the data collection rule. The name is case insensitive",
                      args: { name: "rule-name" },
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
                  description: "Update a Log performance counter data source",
                  options: [
                    {
                      name: ["--name", "-n"],
                      description:
                        "A friendly name for the data source. This name should be unique across all data sources (regardless of type) within the data collection rule",
                      args: { name: "name" },
                      isRequired: true,
                    },
                    {
                      name: "--counter-specifiers",
                      description:
                        "A list of specifier names of the performance counters you want to collect.Use a wildcard (*) to collect a counter for all instances. To get a list of performance counters on Windows, run the command 'typeperf'",
                      args: { name: "counter-specifiers" },
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
                      name: "--rule-name",
                      description:
                        "The name of the data collection rule. The name is case insensitive",
                      args: { name: "rule-name" },
                    },
                    {
                      name: "--sampling-frequency",
                      description:
                        "The number of seconds between consecutive counter measurements (samples)",
                      args: { name: "sampling-frequency" },
                    },
                    {
                      name: "--streams",
                      description:
                        "List of streams that this data source will be sent to. A stream indicates what schema will be used for this data and usually what table in Log Analytics the data will be sent to",
                      args: {
                        name: "streams",
                        suggestions: [
                          "Microsoft-InsightsMetrics",
                          "Microsoft-Perf",
                        ],
                      },
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
              name: "syslog",
              description: "Manage Syslog data source",
              subcommands: [
                {
                  name: "add",
                  description: "Add a Syslog data source",
                  options: [
                    {
                      name: "--facility-names",
                      description: "The list of facility names",
                      args: {
                        name: "facility-names",
                        suggestions: [
                          "*",
                          "auth",
                          "authpriv",
                          "cron",
                          "daemon",
                          "kern",
                          "local0",
                          "local1",
                          "local2",
                          "local3",
                          "local4",
                          "local5",
                          "local6",
                          "local7",
                          "lpr",
                          "mail",
                          "mark",
                          "news",
                          "syslog",
                          "user",
                          "uucp",
                        ],
                      },
                      isRequired: true,
                    },
                    {
                      name: ["--name", "-n"],
                      description:
                        "A friendly name for the data source. This name should be unique across all data sources (regardless of type) within the data collection rule",
                      args: { name: "name" },
                      isRequired: true,
                    },
                    {
                      name: "--streams",
                      description:
                        "List of streams that this data source will be sent to. A stream indicates what schema will be used for this data and usually what table in Log Analytics the data will be sent to",
                      args: {
                        name: "streams",
                        suggestions: ["Microsoft-Syslog"],
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
                      name: "--log-levels",
                      description: "The log levels to collect",
                      args: {
                        name: "log-levels",
                        suggestions: [
                          "*",
                          "Alert",
                          "Critical",
                          "Debug",
                          "Emergency",
                          "Error",
                          "Info",
                          "Notice",
                          "Warning",
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
                      name: "--rule-name",
                      description:
                        "The name of the data collection rule. The name is case insensitive",
                      args: { name: "rule-name" },
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
                  name: "delete",
                  description: "Delete a Syslog data source",
                  options: [
                    {
                      name: ["--name", "-n"],
                      description:
                        "A friendly name for the data source. This name should be unique across all data sources (regardless of type) within the data collection rule",
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
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                    },
                    {
                      name: "--rule-name",
                      description:
                        "The name of the data collection rule. The name is case insensitive",
                      args: { name: "rule-name" },
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
                  description: "List Syslog data sources",
                  options: [
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                      isRequired: true,
                    },
                    {
                      name: "--rule-name",
                      description:
                        "The name of the data collection rule. The name is case insensitive",
                      args: { name: "rule-name" },
                      isRequired: true,
                    },
                  ],
                },
                {
                  name: "show",
                  description: "Show a Syslog data source",
                  options: [
                    {
                      name: ["--name", "-n"],
                      description:
                        "A friendly name for the data source. This name should be unique across all data sources (regardless of type) within the data collection rule",
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
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                    },
                    {
                      name: "--rule-name",
                      description:
                        "The name of the data collection rule. The name is case insensitive",
                      args: { name: "rule-name" },
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
                  description: "Update a Syslog data source",
                  options: [
                    {
                      name: ["--name", "-n"],
                      description:
                        "A friendly name for the data source. This name should be unique across all data sources (regardless of type) within the data collection rule",
                      args: { name: "name" },
                      isRequired: true,
                    },
                    {
                      name: "--facility-names",
                      description: "The list of facility names",
                      args: {
                        name: "facility-names",
                        suggestions: [
                          "*",
                          "auth",
                          "authpriv",
                          "cron",
                          "daemon",
                          "kern",
                          "local0",
                          "local1",
                          "local2",
                          "local3",
                          "local4",
                          "local5",
                          "local6",
                          "local7",
                          "lpr",
                          "mail",
                          "mark",
                          "news",
                          "syslog",
                          "user",
                          "uucp",
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
                      name: "--log-levels",
                      description: "The log levels to collect",
                      args: {
                        name: "log-levels",
                        suggestions: [
                          "*",
                          "Alert",
                          "Critical",
                          "Debug",
                          "Emergency",
                          "Error",
                          "Info",
                          "Notice",
                          "Warning",
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
                      name: "--rule-name",
                      description:
                        "The name of the data collection rule. The name is case insensitive",
                      args: { name: "rule-name" },
                    },
                    {
                      name: "--streams",
                      description:
                        "List of streams that this data source will be sent to. A stream indicates what schema will be used for this data and usually what table in Log Analytics the data will be sent to",
                      args: {
                        name: "streams",
                        suggestions: ["Microsoft-Syslog"],
                      },
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
              name: "windows-event-log",
              description: "Manage Windows Event Log data source",
              subcommands: [
                {
                  name: "add",
                  description: "Add a Windows Event Log data source",
                  options: [
                    {
                      name: ["--name", "-n"],
                      description:
                        "A friendly name for the data source. This name should be unique across all data sources (regardless of type) within the data collection rule",
                      args: { name: "name" },
                      isRequired: true,
                    },
                    {
                      name: "--streams",
                      description:
                        "List of streams that this data source will be sent to. A stream indicates what schema will be used for this data and usually what table in Log Analytics the data will be sent to",
                      args: {
                        name: "streams",
                        suggestions: [
                          "Microsoft-Event",
                          "Microsoft-WindowsEvent",
                        ],
                      },
                      isRequired: true,
                    },
                    {
                      name: "--x-path-queries",
                      description:
                        "A list of Windows Event Log queries in XPATH format",
                      args: { name: "x-path-queries" },
                      isRequired: true,
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
                      name: "--rule-name",
                      description:
                        "The name of the data collection rule. The name is case insensitive",
                      args: { name: "rule-name" },
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
                  name: "delete",
                  description: "Delete a Windows Event Log data source",
                  options: [
                    {
                      name: ["--name", "-n"],
                      description:
                        "A friendly name for the data source. This name should be unique across all data sources (regardless of type) within the data collection rule",
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
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                    },
                    {
                      name: "--rule-name",
                      description:
                        "The name of the data collection rule. The name is case insensitive",
                      args: { name: "rule-name" },
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
                  description: "List Windows Event Log data sources",
                  options: [
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                      isRequired: true,
                    },
                    {
                      name: "--rule-name",
                      description:
                        "The name of the data collection rule. The name is case insensitive",
                      args: { name: "rule-name" },
                      isRequired: true,
                    },
                  ],
                },
                {
                  name: "show",
                  description: "Show a Windows Event Log data source",
                  options: [
                    {
                      name: ["--name", "-n"],
                      description:
                        "A friendly name for the data source. This name should be unique across all data sources (regardless of type) within the data collection rule",
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
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                    },
                    {
                      name: "--rule-name",
                      description:
                        "The name of the data collection rule. The name is case insensitive",
                      args: { name: "rule-name" },
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
                  description: "Update a Windows Event Log data source",
                  options: [
                    {
                      name: ["--name", "-n"],
                      description:
                        "A friendly name for the data source. This name should be unique across all data sources (regardless of type) within the data collection rule",
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
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                    },
                    {
                      name: "--rule-name",
                      description:
                        "The name of the data collection rule. The name is case insensitive",
                      args: { name: "rule-name" },
                    },
                    {
                      name: "--streams",
                      description:
                        "List of streams that this data source will be sent to. A stream indicates what schema will be used for this data and usually what table in Log Analytics the data will be sent to",
                      args: {
                        name: "streams",
                        suggestions: [
                          "Microsoft-Event",
                          "Microsoft-WindowsEvent",
                        ],
                      },
                    },
                    {
                      name: "--subscription",
                      description:
                        "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                      args: { name: "subscription" },
                    },
                    {
                      name: "--x-path-queries",
                      description:
                        "A list of Windows Event Log queries in XPATH format",
                      args: { name: "x-path-queries" },
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
      name: "diagnostic-settings",
      description: "Manage service diagnostic settings",
      subcommands: [
        {
          name: "create",
          description:
            "Create diagnostic settings for the specified resource. For more information, visit: https://docs.microsoft.com/rest/api/monitor/diagnosticsettings/createorupdate#metricsettings",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the diagnostic setting. Required",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--resource",
              description: "Name or ID of the target resource",
              args: { name: "resource" },
              isRequired: true,
            },
            {
              name: "--event-hub",
              description:
                "Name or ID an event hub. If none is specified, the default event hub will be selected",
              args: { name: "event-hub" },
            },
            {
              name: "--event-hub-rule",
              description: "Name or ID of the event hub authorization rule",
              args: { name: "event-hub-rule" },
            },
            {
              name: "--export-to-resource-specific",
              description:
                "Indicate that the export to LA must be done to a resource specific table, a.k.a. dedicated or fixed schema table, as opposed to the default dynamic schema table called AzureDiagnostics. This argument is effective only when the argument --workspace is also given. Allowed values: false, true",
              args: {
                name: "export-to-resource-specific",
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
              name: "--logs",
              description:
                "JSON encoded list of logs settings. Use '@{file}' to load from a file.For more information, visit: https://docs.microsoft.com/rest/api/monitor/diagnosticsettings/createorupdate#logsettings. Support shorthand-syntax, json-file and yaml-file. Try \"??\" to show more",
              args: { name: "logs" },
            },
            {
              name: "--marketplace-partner-id",
              description:
                "The full ARM resource ID of the Marketplace resource to which you would like to send Diagnostic Logs",
              args: { name: "marketplace-partner-id" },
            },
            {
              name: "--metrics",
              description:
                'The list of metric settings. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "metrics" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-namespace",
              description: "Target resource provider namespace",
              args: { name: "resource-namespace" },
            },
            {
              name: "--resource-parent",
              description: "Target resource parent path, if applicable",
              args: { name: "resource-parent" },
            },
            {
              name: "--resource-type",
              description:
                "Target resource type. Can also accept namespace/type format (Ex: 'Microsoft.Compute/virtualMachines')",
              args: { name: "resource-type" },
            },
            {
              name: "--storage-account",
              description:
                "Name or ID of the storage account to send diagnostic logs to",
              args: { name: "storage-account" },
            },
            {
              name: "--workspace",
              description:
                "Name or ID of the Log Analytics workspace to send diagnostic logs to",
              args: { name: "workspace" },
            },
          ],
        },
        {
          name: "delete",
          description:
            "Deletes existing diagnostic settings for the specified resource",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the diagnostic setting. Required",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--resource",
              description: "Name or ID of the target resource",
              args: { name: "resource" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-namespace",
              description: "Target resource provider namespace",
              args: { name: "resource-namespace" },
            },
            {
              name: "--resource-parent",
              description: "Target resource parent path, if applicable",
              args: { name: "resource-parent" },
            },
            {
              name: "--resource-type",
              description:
                "Target resource type. Can also accept namespace/type format (Ex: 'Microsoft.Compute/virtualMachines')",
              args: { name: "resource-type" },
            },
          ],
        },
        {
          name: "list",
          description:
            "Gets the active diagnostic settings list for the specified resource",
          options: [
            {
              name: "--resource",
              description: "Name or ID of the target resource",
              args: { name: "resource" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-namespace",
              description: "Target resource provider namespace",
              args: { name: "resource-namespace" },
            },
            {
              name: "--resource-parent",
              description: "Target resource parent path, if applicable",
              args: { name: "resource-parent" },
            },
            {
              name: "--resource-type",
              description:
                "Target resource type. Can also accept namespace/type format (Ex: 'Microsoft.Compute/virtualMachines')",
              args: { name: "resource-type" },
            },
          ],
        },
        {
          name: "show",
          description:
            "Gets the active diagnostic settings for the specified resource",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the diagnostic setting. Required",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--resource",
              description: "Name or ID of the target resource",
              args: { name: "resource" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-namespace",
              description: "Target resource provider namespace",
              args: { name: "resource-namespace" },
            },
            {
              name: "--resource-parent",
              description: "Target resource parent path, if applicable",
              args: { name: "resource-parent" },
            },
            {
              name: "--resource-type",
              description:
                "Target resource type. Can also accept namespace/type format (Ex: 'Microsoft.Compute/virtualMachines')",
              args: { name: "resource-type" },
            },
          ],
        },
        {
          name: "update",
          description: "Update diagnostic settings for the specified resource",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the diagnostic setting. Required",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--resource",
              description: "Name or ID of the target resource",
              args: { name: "resource" },
              isRequired: true,
            },
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: "--event-hub",
              description:
                "The name of the event hub. If none is specified, the default event hub will be selected",
              args: { name: "event-hub" },
            },
            {
              name: "--event-hub-rule",
              description:
                "The resource Id for the event hub authorization rule",
              args: { name: "event-hub-rule" },
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
              name: ["--log-analytics-destination-type", "--log-ana-dtype"],
              description:
                "A string indicating whether the export to Log Analytics should use the default destination type, i.e. AzureDiagnostics, or use a destination type constructed as follows: _. Possible values are: Dedicated and null (null is default.)",
              args: { name: "log-analytics-destination-type" },
            },
            {
              name: "--logs",
              description:
                'The list of logs settings. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "logs" },
            },
            {
              name: "--marketplace-partner-id",
              description:
                "The full ARM resource ID of the Marketplace resource to which you would like to send Diagnostic Logs",
              args: { name: "marketplace-partner-id" },
            },
            {
              name: "--metrics",
              description:
                'The list of metric settings. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "metrics" },
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
              name: "--resource-namespace",
              description: "Target resource provider namespace",
              args: { name: "resource-namespace" },
            },
            {
              name: "--resource-parent",
              description: "Target resource parent path, if applicable",
              args: { name: "resource-parent" },
            },
            {
              name: "--resource-type",
              description:
                "Target resource type. Can also accept namespace/type format (Ex: 'Microsoft.Compute/virtualMachines')",
              args: { name: "resource-type" },
            },
            {
              name: "--service-bus-rule-id",
              description:
                "The service bus rule Id of the diagnostic setting. This is here to maintain backwards compatibility",
              args: { name: "service-bus-rule-id" },
            },
            {
              name: "--set",
              description:
                "Update an object by specifying a property path and value to set. Example: --set property1.property2=",
              args: { name: "set" },
            },
            {
              name: "--storage-account-id",
              description:
                "The resource ID of the storage account to which you would like to send Diagnostic Logs",
              args: { name: "storage-account-id" },
            },
            {
              name: "--workspace-id",
              description:
                "The full ARM resource ID of the Log Analytics workspace to which you would like to send Diagnostic Logs. Example: /subscriptions/4b9e8510-67ab-4e9a-95a9-e2f1e570ea9c/resourceGroups/insights-integration/providers/Microsoft.OperationalInsights/workspaces/viruela2",
              args: { name: "workspace-id" },
            },
          ],
        },
        {
          name: "categories",
          description: "Retrieve service diagnostic settings categories",
          subcommands: [
            {
              name: "list",
              description:
                "List the diagnostic settings categories for the specified resource",
              options: [
                {
                  name: "--resource",
                  description: "Name or ID of the target resource",
                  args: { name: "resource" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--resource-namespace",
                  description: "Target resource provider namespace",
                  args: { name: "resource-namespace" },
                },
                {
                  name: "--resource-parent",
                  description: "Target resource parent path, if applicable",
                  args: { name: "resource-parent" },
                },
                {
                  name: "--resource-type",
                  description:
                    "Target resource type. Can also accept namespace/type format (Ex: 'Microsoft.Compute/virtualMachines')",
                  args: { name: "resource-type" },
                },
              ],
            },
            {
              name: "show",
              description:
                "Gets the diagnostic settings category for the specified resource",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The name of the diagnostic setting. Required",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--resource",
                  description: "Name or ID of the target resource",
                  args: { name: "resource" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--resource-namespace",
                  description: "Target resource provider namespace",
                  args: { name: "resource-namespace" },
                },
                {
                  name: "--resource-parent",
                  description: "Target resource parent path, if applicable",
                  args: { name: "resource-parent" },
                },
                {
                  name: "--resource-type",
                  description:
                    "Target resource type. Can also accept namespace/type format (Ex: 'Microsoft.Compute/virtualMachines')",
                  args: { name: "resource-type" },
                },
              ],
            },
          ],
        },
        {
          name: "subscription",
          description: "Manage diagnostic settings for subscription",
          subcommands: [
            {
              name: "create",
              description:
                "Create subscription diagnostic settings for the specified resource",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The name of the diagnostic setting",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--event-hub-auth-rule",
                  description:
                    "The resource Id for the event hub authorization rule",
                  args: { name: "event-hub-auth-rule" },
                },
                {
                  name: "--event-hub-name",
                  description:
                    "The name of the event hub. If none is specified, the default event hub will be selected",
                  args: { name: "event-hub-name" },
                },
                {
                  name: ["--location", "-l"],
                  description: "Location of the resource",
                  args: { name: "location" },
                },
                {
                  name: "--logs",
                  description:
                    "JSON encoded list of logs settings. Use '@{file}' to load from a file. Support shorthand-syntax, json-file and yaml-file. Try \"??\" to show more",
                  args: { name: "logs" },
                },
                {
                  name: "--service-bus-rule",
                  description:
                    "The service bus rule ID of the service bus namespace in which you would like to have Event Hubs created for streaming the Activity Log. The rule ID is of the format '{service bus resourceID}/authorizationrules/{key name}'",
                  args: { name: "service-bus-rule" },
                },
                {
                  name: "--storage-account",
                  description:
                    "The resource id of the storage account to which you would like to send the Activity Log",
                  args: { name: "storage-account" },
                },
                {
                  name: "--workspace",
                  description: "The resource id of the log analytics workspace",
                  args: { name: "workspace" },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Deletes existing subscription diagnostic settings for the specified resource",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the diagnostic setting",
                  args: { name: "name" },
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
                "Gets the active subscription diagnostic settings list for the specified subscriptionId. :keyword callable cls: A custom type or function that will be passed the direct response:return: SubscriptionDiagnosticSettingsResourceCollection or the result of cls(response):rtype:  ~$(python-base-namespace).v2017_05_01_preview.models.SubscriptionDiagnosticSettingsResourceCollection:raises ~azure.core.exceptions.HttpResponseError:",
            },
            {
              name: "show",
              description:
                "Gets the active subscription diagnostic settings for the specified resource",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the diagnostic setting",
                  args: { name: "name" },
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
                "Update subscription diagnostic settings for the specified resource",
              options: [
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add" },
                },
                {
                  name: "--event-hub-auth-rule",
                  description:
                    "The resource Id for the event hub authorization rule",
                  args: { name: "event-hub-auth-rule" },
                },
                {
                  name: "--event-hub-name",
                  description:
                    "The name of the event hub. If none is specified, the default event hub will be selected",
                  args: { name: "event-hub-name" },
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
                  description: "Location of the resource",
                  args: { name: "location" },
                },
                {
                  name: "--logs",
                  description:
                    "JSON encoded list of logs settings. Use '@{file}' to load from a file. Support shorthand-syntax, json-file and yaml-file. Try \"??\" to show more",
                  args: { name: "logs" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the diagnostic setting",
                  args: { name: "name" },
                },
                {
                  name: "--remove",
                  description:
                    "Remove a property or an element from a list. Example: --remove property.list OR --remove propertyToRemove",
                  args: { name: "remove" },
                },
                {
                  name: "--service-bus-rule",
                  description:
                    "The service bus rule ID of the service bus namespace in which you would like to have Event Hubs created for streaming the Activity Log. The rule ID is of the format '{service bus resourceID}/authorizationrules/{key name}'",
                  args: { name: "service-bus-rule" },
                },
                {
                  name: "--set",
                  description:
                    "Update an object by specifying a property path and value to set. Example: --set property1.property2=",
                  args: { name: "set" },
                },
                {
                  name: "--storage-account",
                  description:
                    "The resource id of the storage account to which you would like to send the Activity Log",
                  args: { name: "storage-account" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--workspace",
                  description: "The resource id of the log analytics workspace",
                  args: { name: "workspace" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "log-analytics",
      description: "Manage Azure log analytics",
      subcommands: [
        {
          name: "query",
          description: "Query a Log Analytics workspace",
          options: [
            {
              name: "--analytics-query",
              description: "Query to execute over Log Analytics data",
              args: { name: "analytics-query" },
              isRequired: true,
            },
            {
              name: ["--workspace", "-w"],
              description: "GUID of the Log Analytics Workspace",
              args: { name: "workspace" },
              isRequired: true,
            },
            {
              name: ["--timespan", "-t"],
              description:
                "Timespan over which to query. Defaults to querying all available data",
              args: { name: "timespan" },
            },
            {
              name: "--workspaces",
              description:
                "Additional workspaces to union data for querying. Specify additional workspace IDs separated by space",
              args: { name: "workspaces" },
            },
          ],
        },
        {
          name: "cluster",
          description: "Manage Azure log analytics cluster",
          subcommands: [
            {
              name: "create",
              description: "Create a cluster instance",
              options: [
                {
                  name: ["--cluster-name", "--name", "-n"],
                  description: "The name of the Log Analytics cluster",
                  args: { name: "cluster-name" },
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
                  name: "--billing-type",
                  description: "The cluster's billing type",
                  args: {
                    name: "billing-type",
                    suggestions: ["Cluster", "Workspaces"],
                  },
                },
                {
                  name: "--identity-type",
                  description: "Type of managed service identity",
                  args: {
                    name: "identity-type",
                    suggestions: ["None", "SystemAssigned", "UserAssigned"],
                  },
                },
                {
                  name: "--key-name",
                  description:
                    "The name of the key associated with the Log Analytics cluster",
                  args: { name: "key-name" },
                },
                {
                  name: "--key-rsa-size",
                  description: "Selected key minimum required size",
                  args: { name: "key-rsa-size" },
                },
                {
                  name: "--key-vault-uri",
                  description:
                    "The Key Vault uri which holds they key associated with the Log Analytics cluster",
                  args: { name: "key-vault-uri" },
                },
                {
                  name: "--key-version",
                  description:
                    "The version of the key associated with the Log Analytics cluster",
                  args: { name: "key-version" },
                },
                {
                  name: ["--location", "-l"],
                  description:
                    "The geo-location where the resource lives When not specified, the location of the resource group will be used",
                  args: { name: "location" },
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
                  name: "--sku-capacity",
                  description:
                    "The capacity of the SKU. It can be decreased only after 31 days",
                  args: {
                    name: "sku-capacity",
                    suggestions: ["1000", "2000", "500", "5000"],
                  },
                },
                {
                  name: "--sku-name",
                  description: "The name of the SKU",
                  args: {
                    name: "sku-name",
                    suggestions: ["CapacityReservation"],
                  },
                },
                {
                  name: "--tags",
                  description:
                    'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "tags" },
                },
                {
                  name: "--user-assigned",
                  description:
                    "The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. Support shorthand-syntax, json-file and yaml-file. Try \"??\" to show more",
                  args: { name: "user-assigned" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a cluster instance",
              options: [
                {
                  name: ["--cluster-name", "--name", "-n"],
                  description: "Name of the Log Analytics Cluster",
                  args: { name: "cluster-name" },
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
                "List all cluster instances in a resource group or in current subscription",
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
              description: "Show the properties of a cluster instance",
              options: [
                {
                  name: ["--cluster-name", "--name", "-n"],
                  description: "Name of the Log Analytics Cluster",
                  args: { name: "cluster-name" },
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
              description: "Update a cluster instance",
              options: [
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add" },
                },
                {
                  name: "--billing-type",
                  description: "The cluster's billing type",
                  args: {
                    name: "billing-type",
                    suggestions: ["Cluster", "Workspaces"],
                  },
                },
                {
                  name: ["--cluster-name", "--name", "-n"],
                  description: "Name of the Log Analytics Cluster",
                  args: { name: "cluster-name" },
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
                  name: "--identity-type",
                  description: "Type of managed service identity",
                  args: {
                    name: "identity-type",
                    suggestions: ["None", "SystemAssigned", "UserAssigned"],
                  },
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
                    "The name of the key associated with the Log Analytics cluster",
                  args: { name: "key-name" },
                },
                {
                  name: "--key-rsa-size",
                  description: "Selected key minimum required size",
                  args: { name: "key-rsa-size" },
                },
                {
                  name: "--key-vault-uri",
                  description:
                    "The Key Vault uri which holds they key associated with the Log Analytics cluster",
                  args: { name: "key-vault-uri" },
                },
                {
                  name: "--key-version",
                  description:
                    "The version of the key associated with the Log Analytics cluster",
                  args: { name: "key-version" },
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
                  name: "--sku-capacity",
                  description:
                    "The capacity of the SKU. It can be decreased only after 31 days",
                  args: {
                    name: "sku-capacity",
                    suggestions: ["1000", "2000", "500", "5000"],
                  },
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
                  name: "--user-assigned",
                  description:
                    "The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. Support shorthand-syntax, json-file and yaml-file. Try \"??\" to show more",
                  args: { name: "user-assigned" },
                },
              ],
            },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition is met",
              options: [
                {
                  name: ["--cluster-name", "--name", "-n"],
                  description: "Name of the Log Analytics Cluster",
                  args: { name: "cluster-name" },
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
              ],
            },
          ],
        },
        {
          name: "query-pack",
          description: "Manage Azure log analytics query pack",
          subcommands: [
            {
              name: "create",
              description: "Create a log analytics query pack",
              options: [
                {
                  name: ["--query-pack-name", "--name", "-n"],
                  description: "The name of the log analytics query pack",
                  args: { name: "query-pack-name" },
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
                  name: "--tags",
                  description:
                    'Resource tags Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "tags" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a log analytics query pack",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--query-pack-name", "--name", "-n"],
                  description: "The name of the log analytics query pack",
                  args: { name: "query-pack-name" },
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
              description: "List of all log analytics query packs",
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
              description: "Show a log analytics query pack",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--query-pack-name", "--name", "-n"],
                  description: "The name of the log analytics query pack",
                  args: { name: "query-pack-name" },
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
              description: "Update a log analytics query pack",
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
                  name: ["--query-pack-name", "--name", "-n"],
                  description: "The name of the log analytics query pack",
                  args: { name: "query-pack-name" },
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
              name: "query",
              description: "Manage the query of log analytics query pack",
              subcommands: [
                {
                  name: "create",
                  description:
                    "Create a specific query within a log analytics query pack",
                  options: [
                    {
                      name: "--body",
                      description: "Content of the query",
                      args: { name: "body" },
                      isRequired: true,
                    },
                    {
                      name: "--display-name",
                      description:
                        "Unique display name for your query within the query pack",
                      args: { name: "display-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--query-id", "--name", "-n"],
                      description:
                        "The id name of a specific query defined in the log analytics query pack. It must be of type GUID",
                      args: { name: "query-id" },
                      isRequired: true,
                    },
                    {
                      name: "--query-pack-name",
                      description: "The name of the log analytics query pack",
                      args: { name: "query-pack-name" },
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
                      name: "--categories",
                      description:
                        'The related categories for the function. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                      args: { name: "categories" },
                    },
                    {
                      name: "--description",
                      description: "Description of the query",
                      args: { name: "description" },
                    },
                    {
                      name: "--resource-types",
                      description:
                        'The related resource types for the function. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                      args: { name: "resource-types" },
                    },
                    {
                      name: "--solutions",
                      description:
                        'The related Log Analytics solutions for the function. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                      args: { name: "solutions" },
                    },
                    {
                      name: "--tags",
                      description:
                        'Tags associated with the query. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                      args: { name: "tags" },
                    },
                  ],
                },
                {
                  name: "delete",
                  description:
                    "Delete a specific query defined within a log analytics query pack",
                  options: [
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids" },
                    },
                    {
                      name: ["--query-id", "--name", "-n"],
                      description:
                        "The id name of a specific query defined in the log analytics query pack. It must be of type GUID",
                      args: { name: "query-id" },
                    },
                    {
                      name: "--query-pack-name",
                      description: "The name of the log analytics query pack",
                      args: { name: "query-pack-name" },
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
                    "List queries defined within a log analytics query pack",
                  options: [
                    {
                      name: "--query-pack-name",
                      description: "The name of the log analytics query pack",
                      args: { name: "query-pack-name" },
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
                      name: "--include-body",
                      description:
                        "Whether or not to return the body of each applicable query. If false, only return the query information. Default: true",
                      args: {
                        name: "include-body",
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
                  ],
                },
                {
                  name: "search",
                  description:
                    "Search a list of queries defined within a log analytics query pack according to given search properties",
                  options: [
                    {
                      name: "--categories",
                      description:
                        'The related categories for the function. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                      args: { name: "categories" },
                    },
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids" },
                    },
                    {
                      name: "--include-body",
                      description:
                        "Whether or not to return the body of each applicable query. If false, only return the query information. Default: true",
                      args: {
                        name: "include-body",
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
                      name: "--query-pack-name",
                      description: "The name of the log analytics query pack",
                      args: { name: "query-pack-name" },
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                    },
                    {
                      name: "--resource-types",
                      description:
                        'The related resource types for the function. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                      args: { name: "resource-types" },
                    },
                    {
                      name: "--solutions",
                      description:
                        'The related Log Analytics solutions for the function. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                      args: { name: "solutions" },
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
                        'Tags associated with the query. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                      args: { name: "tags" },
                    },
                  ],
                },
                {
                  name: "show",
                  description:
                    "Show a specific query defined within a log analytics query pack",
                  options: [
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids" },
                    },
                    {
                      name: ["--query-id", "--name", "-n"],
                      description:
                        "The id name of a specific query defined in the log analytics query pack. It must be of type GUID",
                      args: { name: "query-id" },
                    },
                    {
                      name: "--query-pack-name",
                      description: "The name of the log analytics query pack",
                      args: { name: "query-pack-name" },
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
                    "Update a specific query within a log analytics query pack",
                  options: [
                    {
                      name: "--add",
                      description:
                        "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                      args: { name: "add" },
                    },
                    {
                      name: "--body",
                      description: "Content of the query",
                      args: { name: "body" },
                    },
                    {
                      name: "--categories",
                      description:
                        'The related categories for the function. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                      args: { name: "categories" },
                    },
                    {
                      name: "--description",
                      description: "Description of the query",
                      args: { name: "description" },
                    },
                    {
                      name: "--display-name",
                      description:
                        "Unique display name for your query within the query pack",
                      args: { name: "display-name" },
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
                      name: ["--query-id", "--name", "-n"],
                      description:
                        "The id name of a specific query defined in the log analytics query pack. It must be of type GUID",
                      args: { name: "query-id" },
                    },
                    {
                      name: "--query-pack-name",
                      description: "The name of the log analytics query pack",
                      args: { name: "query-pack-name" },
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
                      name: "--resource-types",
                      description:
                        'The related resource types for the function. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                      args: { name: "resource-types" },
                    },
                    {
                      name: "--set",
                      description:
                        "Update an object by specifying a property path and value to set. Example: --set property1.property2=",
                      args: { name: "set" },
                    },
                    {
                      name: "--solutions",
                      description:
                        'The related Log Analytics solutions for the function. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                      args: { name: "solutions" },
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
                        'Tags associated with the query. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                      args: { name: "tags" },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "solution",
          description: "Commands to manage monitor log-analytics solution",
          subcommands: [
            {
              name: "create",
              description: "Create the Solution",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: ["--solution-type", "-t"],
                  description:
                    "Type of the log-analytics solution. The most used are: SecurityCenterFree, Security, Updates, ContainerInsights, ServiceMap, AzureActivity, ChangeTracking, VMInsights, SecurityInsights, NetworkMonitoring, SQLVulnerabilityAssessment, SQLAdvancedThreatProtection, AntiMalware, AzureAutomation, LogicAppsManagement, SQLDataClassification",
                  args: { name: "solution-type" },
                  isRequired: true,
                },
                {
                  name: ["--workspace", "-w"],
                  description:
                    "The name or resource ID of the log analytics workspace with which the solution will be linked",
                  args: { name: "workspace" },
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
                  name: "--tags",
                  description:
                    'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "tags" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete the solution in the subscription",
              options: [
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the log-analytics solution. It should be in the format of solutionType(workspaceName). SolutionType part is case sensitive",
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
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "list",
              description:
                "List the solution list. It will retrieve both first party and third party solutions",
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
              description: "Get the user solution",
              options: [
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the log-analytics solution. It should be in the format of solutionType(workspaceName). SolutionType part is case sensitive",
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
              description: "Update a Solution. Only updating tags supported",
              options: [
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the log-analytics solution. It should be in the format of solutionType(workspaceName). SolutionType part is case sensitive",
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
                  name: "--tags",
                  description:
                    'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
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
                  name: ["--name", "-n"],
                  description:
                    "Name of the log-analytics solution. It should be in the format of solutionType(workspaceName). SolutionType part is case sensitive",
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
          ],
        },
        {
          name: "workspace",
          description: "Manage Azure log analytics workspace",
          subcommands: [
            {
              name: "create",
              description: "Create a workspace instance",
              options: [
                {
                  name: ["--workspace-name", "--name", "-n"],
                  description: "Name of the Log Analytics Workspace",
                  args: { name: "workspace-name" },
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
                  name: ["--capacity-reservation-level", "--level"],
                  description:
                    "The capacity reservation level for this workspace, when CapacityReservation sku is selected. The maximum value is 1000 and must be in multiples of 100. If you want to increase the limit, please contact LAIngestionRate@microsoft.com",
                  args: {
                    name: "capacity-reservation-level",
                    suggestions: [
                      "100",
                      "1000",
                      "200",
                      "2000",
                      "300",
                      "400",
                      "500",
                      "5000",
                    ],
                  },
                },
                {
                  name: "--ingestion-access",
                  description:
                    "The public network access type to access workspace ingestion",
                  args: {
                    name: "ingestion-access",
                    suggestions: ["Disabled", "Enabled"],
                  },
                },
                {
                  name: ["--location", "-l"],
                  description:
                    "The geo-location where the resource lives When not specified, the location of the resource group will be used",
                  args: { name: "location" },
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
                  name: "--query-access",
                  description:
                    "The public network access type to access workspace query",
                  args: {
                    name: "query-access",
                    suggestions: ["Disabled", "Enabled"],
                  },
                },
                {
                  name: "--quota",
                  description:
                    "The workspace daily quota for ingestion in gigabytes. The minimum value is 0.023 and default is -1 which means unlimited",
                  args: { name: "quota" },
                },
                {
                  name: "--retention-time",
                  description:
                    "The workspace data retention in days. Allowed values are per pricing plan. See pricing tiers documentation for details",
                  args: { name: "retention-time" },
                },
                {
                  name: ["--sku-name", "--sku"],
                  description: "The name of the SKU",
                  args: {
                    name: "sku-name",
                    suggestions: [
                      "CapacityReservation",
                      "Free",
                      "LACluster",
                      "PerGB2018",
                      "PerNode",
                      "Premium",
                      "Standalone",
                      "Standard",
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
              description: "Deletes a workspace resource",
              options: [
                {
                  name: ["--force", "-f"],
                  description:
                    "Deletes the workspace without the recovery option. A workspace that was deleted with this flag cannot be recovered",
                  args: {
                    name: "force",
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
                  name: ["--workspace-name", "--name", "-n"],
                  description: "Name of the Log Analytics Workspace",
                  args: { name: "workspace-name" },
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
              name: "get-schema",
              description: "Get the schema for a given workspace",
              options: [
                {
                  name: ["--workspace-name", "--name", "-n"],
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
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
              name: "get-shared-keys",
              description: "Get the shared keys for a workspace",
              options: [
                {
                  name: ["--workspace-name", "--name", "-n"],
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
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
              description:
                "Get a list of workspaces under a resource group or a subscription",
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
              name: "list-deleted-workspaces",
              description:
                "Get a list of deleted workspaces that can be recovered in a subscription or a resource group",
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
              name: "list-management-groups",
              description:
                "Get a list of management groups connected to a workspace",
              options: [
                {
                  name: ["--workspace-name", "--name", "-n"],
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
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
              name: "list-usages",
              description: "Get a list of usage metrics for a workspace",
              options: [
                {
                  name: ["--workspace-name", "--name", "-n"],
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
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
              name: "recover",
              description:
                "Recover a workspace in a soft-delete state within 14 days",
              options: [
                {
                  name: ["--workspace-name", "-n"],
                  description: "Name of the Log Analytics Workspace",
                  args: { name: "workspace-name" },
                  isRequired: true,
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
              ],
            },
            {
              name: "show",
              description: "Show a workspace instance",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--workspace-name", "--name", "-n"],
                  description: "Name of the Log Analytics Workspace",
                  args: { name: "workspace-name" },
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
              description: "Update a workspace instance",
              options: [
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add" },
                },
                {
                  name: ["--capacity-reservation-level", "--level"],
                  description:
                    "The capacity reservation level for this workspace, when CapacityReservation sku is selected. The maximum value is 1000 and must be in multiples of 100. If you want to increase the limit, please contact LAIngestionRate@microsoft.com",
                  args: {
                    name: "capacity-reservation-level",
                    suggestions: [
                      "100",
                      "1000",
                      "200",
                      "2000",
                      "300",
                      "400",
                      "500",
                      "5000",
                    ],
                  },
                },
                {
                  name: "--data-collection-rule",
                  description:
                    "The resource ID of the default Data Collection Rule to use for this workspace. Expected format is - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/dataCollectionRules/{dcrName}",
                  args: { name: "data-collection-rule" },
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
                  name: "--ingestion-access",
                  description:
                    "The public network access type to access workspace ingestion",
                  args: {
                    name: "ingestion-access",
                    suggestions: ["Disabled", "Enabled"],
                  },
                },
                {
                  name: ["--workspace-name", "--name", "-n"],
                  description: "Name of the Log Analytics Workspace",
                  args: { name: "workspace-name" },
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
                  name: "--query-access",
                  description:
                    "The public network access type to access workspace query",
                  args: {
                    name: "query-access",
                    suggestions: ["Disabled", "Enabled"],
                  },
                },
                {
                  name: "--quota",
                  description:
                    "The workspace daily quota for ingestion in gigabytes. The minimum value is 0.023 and default is -1 which means unlimited",
                  args: { name: "quota" },
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
                  name: "--retention-time",
                  description:
                    "The workspace data retention in days. Allowed values are per pricing plan. See pricing tiers documentation for details",
                  args: { name: "retention-time" },
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
                  name: ["--workspace-name", "--name", "-n"],
                  description: "Name of the Log Analytics Workspace",
                  args: { name: "workspace-name" },
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
              name: "data-export",
              description:
                "Manage data export ruls for log analytics workspace",
              subcommands: [
                {
                  name: "create",
                  description:
                    "Create a data export rule for a given workspace",
                  options: [
                    {
                      name: ["--data-export-name", "--name", "-n"],
                      description: "The data export rule name",
                      args: { name: "data-export-name" },
                      isRequired: true,
                    },
                    {
                      name: "--destination",
                      description:
                        "The destination resource ID. It should be a storage account, an event hub namespace. If event hub namespace is provided without --event-hub-name, event hub would be created for each table automatically",
                      args: { name: "destination" },
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
                      name: ["--tables", "-t"],
                      description:
                        'An array of tables to export. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                      args: { name: "tables" },
                      isRequired: true,
                    },
                    {
                      name: "--workspace-name",
                      description: "The name of the workspace",
                      args: { name: "workspace-name" },
                      isRequired: true,
                    },
                    {
                      name: "--enable",
                      description: "Active when enabled",
                      args: {
                        name: "enable",
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
                      name: "--event-hub-name",
                      description:
                        "Optional. Allows to define an Event Hub name. Not applicable when destination is Storage Account",
                      args: { name: "event-hub-name" },
                    },
                  ],
                },
                {
                  name: "delete",
                  description:
                    "Delete a data export rule for a given workspace",
                  options: [
                    {
                      name: ["--data-export-name", "--name", "-n"],
                      description: "The data export rule name",
                      args: { name: "data-export-name" },
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
                    "List all data export ruleses for a given workspace",
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
                  name: "show",
                  description: "Show a data export rule for a given workspace",
                  options: [
                    {
                      name: ["--data-export-name", "--name", "-n"],
                      description: "The data export rule name",
                      args: { name: "data-export-name" },
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
                      name: "--workspace-name",
                      description: "The name of the workspace",
                      args: { name: "workspace-name" },
                    },
                  ],
                },
                {
                  name: "update",
                  description:
                    "Update a data export rule for a given workspace",
                  options: [
                    {
                      name: "--add",
                      description:
                        "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                      args: { name: "add" },
                    },
                    {
                      name: ["--data-export-name", "--name", "-n"],
                      description: "The data export rule name",
                      args: { name: "data-export-name" },
                    },
                    {
                      name: "--destination",
                      description:
                        "The destination resource ID. It should be a storage account, an event hub namespace. If event hub namespace is provided without --event-hub-name, event hub would be created for each table automatically",
                      args: { name: "destination" },
                    },
                    {
                      name: "--enable",
                      description: "Active when enabled",
                      args: {
                        name: "enable",
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
                      name: "--event-hub-name",
                      description:
                        "Optional. Allows to define an Event Hub name. Not applicable when destination is Storage Account",
                      args: { name: "event-hub-name" },
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
                      name: "--subscription",
                      description:
                        "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                      args: { name: "subscription" },
                    },
                    {
                      name: ["--tables", "-t"],
                      description:
                        'An array of tables to export. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                      args: { name: "tables" },
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
              name: "linked-service",
              description:
                "Manage linked service for log analytics workspace.\n\n\t\tLinked services is used to define a relation from the workspace to another Azure resource. Log Analytics and Azure resources then leverage this connection in their operations. Example uses of Linked Services in Log Analytics workspace are Automation account and workspace association to CMK",
              subcommands: [
                {
                  name: "create",
                  description: "Create a linked service",
                  options: [
                    {
                      name: ["--linked-service-name", "--name", "-n"],
                      description:
                        "Name of the linkedServices resource. Supported values: cluster, automation",
                      args: { name: "linked-service-name" },
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
                      name: "--resource-id",
                      description:
                        "The resource id of the resource that will be linked to the workspace. This should be used for linking resources which require read access",
                      args: { name: "resource-id" },
                    },
                    {
                      name: "--tags",
                      description:
                        'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                      args: { name: "tags" },
                    },
                    {
                      name: "--write-access-resource-id",
                      description:
                        "The resource id of the resource that will be linked to the workspace. This should be used for linking resources which require write access",
                      args: { name: "write-access-resource-id" },
                    },
                  ],
                },
                {
                  name: "delete",
                  description: "Delete a linked service",
                  options: [
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids" },
                    },
                    {
                      name: ["--linked-service-name", "--name", "-n"],
                      description:
                        "Name of the linkedServices resource. Supported values: cluster, automation",
                      args: { name: "linked-service-name" },
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
                  description: "Get all the linked services in a workspace",
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
                  name: "show",
                  description: "Show the properties of a linked service",
                  options: [
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids" },
                    },
                    {
                      name: ["--linked-service-name", "--name", "-n"],
                      description:
                        "Name of the linkedServices resource. Supported values: cluster, automation",
                      args: { name: "linked-service-name" },
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
                  description: "Update a linked service",
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
                      name: ["--linked-service-name", "--name", "-n"],
                      description:
                        "Name of the linkedServices resource. Supported values: cluster, automation",
                      args: { name: "linked-service-name" },
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
                      name: "--resource-id",
                      description:
                        "The resource id of the resource that will be linked to the workspace. This should be used for linking resources which require read access",
                      args: { name: "resource-id" },
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
                      name: "--workspace-name",
                      description: "The name of the workspace",
                      args: { name: "workspace-name" },
                    },
                    {
                      name: "--write-access-resource-id",
                      description:
                        "The resource id of the resource that will be linked to the workspace. This should be used for linking resources which require write access",
                      args: { name: "write-access-resource-id" },
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
                      name: ["--linked-service-name", "--name", "-n"],
                      description:
                        "Name of the linkedServices resource. Supported values: cluster, automation",
                      args: { name: "linked-service-name" },
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
              name: "linked-storage",
              description:
                "Manage linked storage account for log analytics workspace",
              subcommands: [
                {
                  name: "add",
                  description:
                    "Add some linked storage accounts with specific data source type for log analytics workspace",
                  options: [
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                      isRequired: true,
                    },
                    {
                      name: "--storage-accounts",
                      description:
                        "List of Name or ID of Azure Storage Account",
                      args: { name: "storage-accounts" },
                      isRequired: true,
                    },
                    {
                      name: "--type",
                      description:
                        "Data source type for the linked storage account",
                      args: {
                        name: "type",
                        suggestions: [
                          "Alerts",
                          "AzureWatson",
                          "CustomLogs",
                          "Ingestion",
                          "Query",
                        ],
                      },
                      isRequired: true,
                    },
                    {
                      name: ["--workspace-name", "-n"],
                      description: "Name of the Log Analytics Workspace",
                      args: { name: "workspace-name" },
                      isRequired: true,
                    },
                  ],
                },
                {
                  name: "create",
                  description:
                    "Create some linked storage accounts for log analytics workspace",
                  options: [
                    {
                      name: ["--data-source-type", "--type"],
                      description:
                        "Data source type for the linked storage account",
                      args: {
                        name: "data-source-type",
                        suggestions: [
                          "Alerts",
                          "AzureWatson",
                          "CustomLogs",
                          "Ingestion",
                          "Query",
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
                      name: "--storage-accounts",
                      description:
                        'List of Name or ID of Azure Storage Account. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                      args: { name: "storage-accounts" },
                      isRequired: true,
                    },
                    {
                      name: ["--workspace-name", "-n"],
                      description: "The name of the workspace",
                      args: { name: "workspace-name" },
                      isRequired: true,
                    },
                  ],
                },
                {
                  name: "delete",
                  description:
                    "Delete all linked storage accounts with specific data source type for log analytics workspace",
                  options: [
                    {
                      name: ["--data-source-type", "--type"],
                      description:
                        "Data source type for the linked storage account",
                      args: {
                        name: "data-source-type",
                        suggestions: [
                          "Alerts",
                          "AzureWatson",
                          "CustomLogs",
                          "Ingestion",
                          "Query",
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
                      name: ["--workspace-name", "-n"],
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
                    "List all linked storage accounts for a log analytics workspace",
                  options: [
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                      isRequired: true,
                    },
                    {
                      name: ["--workspace-name", "-n"],
                      description: "The name of the workspace",
                      args: { name: "workspace-name" },
                      isRequired: true,
                    },
                  ],
                },
                {
                  name: "remove",
                  description:
                    "Remove some linked storage accounts with specific data source type for log analytics workspace",
                  options: [
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                      isRequired: true,
                    },
                    {
                      name: "--storage-accounts",
                      description:
                        "List of Name or ID of Azure Storage Account",
                      args: { name: "storage-accounts" },
                      isRequired: true,
                    },
                    {
                      name: "--type",
                      description:
                        "Data source type for the linked storage account",
                      args: {
                        name: "type",
                        suggestions: [
                          "Alerts",
                          "AzureWatson",
                          "CustomLogs",
                          "Ingestion",
                          "Query",
                        ],
                      },
                      isRequired: true,
                    },
                    {
                      name: ["--workspace-name", "-n"],
                      description: "Name of the Log Analytics Workspace",
                      args: { name: "workspace-name" },
                      isRequired: true,
                    },
                  ],
                },
                {
                  name: "show",
                  description:
                    "Show all linked storage accounts with specific data source type for a log analytics workspace",
                  options: [
                    {
                      name: ["--data-source-type", "--type"],
                      description:
                        "Data source type for the linked storage account",
                      args: {
                        name: "data-source-type",
                        suggestions: [
                          "Alerts",
                          "AzureWatson",
                          "CustomLogs",
                          "Ingestion",
                          "Query",
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
                      name: ["--workspace-name", "-n"],
                      description: "The name of the workspace",
                      args: { name: "workspace-name" },
                    },
                  ],
                },
              ],
            },
            {
              name: "pack",
              description:
                "Manage intelligent packs for log analytics workspace",
              subcommands: [
                {
                  name: "disable",
                  description:
                    "Disable an intelligence pack for a given workspace",
                  options: [
                    {
                      name: ["--intelligence-pack-name", "--name", "-n"],
                      description:
                        "The name of the intelligence pack to be enabled",
                      args: { name: "intelligence-pack-name" },
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
                  name: "enable",
                  description:
                    "Enable an intelligence pack for a given workspace",
                  options: [
                    {
                      name: ["--intelligence-pack-name", "--name", "-n"],
                      description:
                        "The name of the intelligence pack to be enabled",
                      args: { name: "intelligence-pack-name" },
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
                  name: "list",
                  description:
                    "List all the intelligence packs possible and whether they are enabled or disabled for a given workspace",
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
              name: "saved-search",
              description: "Manage saved search for log analytics workspace",
              subcommands: [
                {
                  name: "create",
                  description: "Create a saved search for a given workspace",
                  options: [
                    {
                      name: "--category",
                      description:
                        "The category of the saved search. This helps the user to find a saved search faster",
                      args: { name: "category" },
                      isRequired: true,
                    },
                    {
                      name: "--display-name",
                      description: "Display name of the saved search",
                      args: { name: "display-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--name", "-n"],
                      description:
                        "Name of the saved search and it's unique in a given workspace",
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
                      name: ["--saved-query", "-q"],
                      description: "The query expression for the saved search",
                      args: { name: "saved-query" },
                      isRequired: true,
                    },
                    {
                      name: "--workspace-name",
                      description: "Name of the Log Analytics Workspace",
                      args: { name: "workspace-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--func-alias", "--fa"],
                      description:
                        "Function Aliases are short names given to Saved Searches so they can be easily referenced in query. They are required for Computer Groups",
                      args: { name: "func-alias" },
                    },
                    {
                      name: ["--func-param", "--fp"],
                      description:
                        "The optional function parameters if query serves as a function. Value should be in the following format: 'param-name1:type1 = default_value1, param-name2:type2 = default_value2'. For more examples and proper syntax please refer to https://docs.microsoft.com/azure/kusto/query/functions/user-defined-functions",
                      args: { name: "func-param" },
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
                  description: "Delete a saved search for a given workspace",
                  options: [
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids" },
                    },
                    {
                      name: ["--saved-search-name", "--name", "-n"],
                      description:
                        "Name of the saved search and it's unique in a given workspace",
                      args: { name: "saved-search-name" },
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
                  description: "List all saved searches for a given workspace",
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
                  name: "show",
                  description: "Show a saved search for a given workspace",
                  options: [
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids" },
                    },
                    {
                      name: ["--saved-search-name", "--name", "-n"],
                      description:
                        "Name of the saved search and it's unique in a given workspace",
                      args: { name: "saved-search-name" },
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
                  description: "Update a saved search for a given workspace",
                  options: [
                    {
                      name: ["--name", "-n"],
                      description:
                        "Name of the saved search and it's unique in a given workspace",
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
                      description: "Name of the Log Analytics Workspace",
                      args: { name: "workspace-name" },
                      isRequired: true,
                    },
                    {
                      name: "--category",
                      description:
                        "The category of the saved search. This helps the user to find a saved search faster",
                      args: { name: "category" },
                    },
                    {
                      name: "--display-name",
                      description: "Display name of the saved search",
                      args: { name: "display-name" },
                    },
                    {
                      name: ["--func-alias", "--fa"],
                      description:
                        "Function Aliases are short names given to Saved Searches so they can be easily referenced in query. They are required for Computer Groups",
                      args: { name: "func-alias" },
                    },
                    {
                      name: ["--func-param", "--fp"],
                      description:
                        "The optional function parameters if query serves as a function. Value should be in the following format: 'param-name1:type1 = default_value1, param-name2:type2 = default_value2'. For more examples and proper syntax please refer to https://docs.microsoft.com/azure/kusto/query/functions/user-defined-functions",
                      args: { name: "func-param" },
                    },
                    {
                      name: ["--saved-query", "-q"],
                      description: "The query expression for the saved search",
                      args: { name: "saved-query" },
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
              name: "table",
              description: "Manage tables for log analytics workspace",
              subcommands: [
                {
                  name: "create",
                  description:
                    "Create a Log Analytics workspace microsoft/custom log table. The table name needs to end with '_CL'",
                  options: [
                    {
                      name: ["--name", "-n"],
                      description: "Name of the table",
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
                      description: "Name of the Log Analytics Workspace",
                      args: { name: "workspace-name" },
                      isRequired: true,
                    },
                    {
                      name: "--columns",
                      description:
                        "A list of table custom columns.Extracts multiple space-separated columns in column_name=column_type format",
                      args: { name: "columns" },
                    },
                    {
                      name: "--description",
                      description: "Schema description",
                      args: { name: "description" },
                    },
                    {
                      name: "--no-wait",
                      description:
                        "Do not wait for the long-running operation to finish",
                    },
                    {
                      name: "--plan",
                      description:
                        'The table plan. Possible values include: "Basic", "Analytics"',
                      args: {
                        name: "plan",
                        suggestions: ["Analytics", "Basic"],
                      },
                    },
                    {
                      name: "--retention-time",
                      description:
                        "The data table data retention in days, between 4 and 730. Setting this property to null will default to the workspace",
                      args: { name: "retention-time" },
                    },
                    {
                      name: "--total-retention-time",
                      description:
                        "The table data total retention in days, between 4 and 2555. Setting this property to null will default to table retention",
                      args: { name: "total-retention-time" },
                    },
                  ],
                },
                {
                  name: "delete",
                  description: "Delete a Log Analytics workspace table",
                  options: [
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids" },
                    },
                    {
                      name: ["--table-name", "--name", "-n"],
                      description: "The name of the table",
                      args: { name: "table-name" },
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
                    "List all the tables for the given Log Analytics workspace",
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
                  name: "migrate",
                  description:
                    "Migrate a Log Analytics table from support of the Data Collector API and Custom Fields features to support of Data Collection Rule-based Custom Logs",
                  options: [
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                      isRequired: true,
                    },
                    {
                      name: "--table-name",
                      description: "The name of the table",
                      args: { name: "table-name" },
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
                  description: "Get a Log Analytics workspace table",
                  options: [
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids" },
                    },
                    {
                      name: ["--table-name", "--name", "-n"],
                      description: "The name of the table",
                      args: { name: "table-name" },
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
                  description:
                    "Update the properties of a Log Analytics workspace table",
                  options: [
                    {
                      name: ["--name", "-n"],
                      description: "Name of the table",
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
                      description: "Name of the Log Analytics Workspace",
                      args: { name: "workspace-name" },
                      isRequired: true,
                    },
                    {
                      name: "--columns",
                      description:
                        "A list of table custom columns.Extracts multiple space-separated columns in column_name=column_type format",
                      args: { name: "columns" },
                    },
                    {
                      name: "--description",
                      description: "Table description",
                      args: { name: "description" },
                    },
                    {
                      name: "--no-wait",
                      description:
                        "Do not wait for the long-running operation to finish",
                    },
                    {
                      name: "--plan",
                      description:
                        'The table plan. Possible values include: "Basic", "Analytics"',
                      args: {
                        name: "plan",
                        suggestions: ["Analytics", "Basic"],
                      },
                    },
                    {
                      name: "--retention-time",
                      description:
                        "The data table data retention in days, between 4 and 730. Setting this property to null will default to the workspace",
                      args: { name: "retention-time" },
                    },
                    {
                      name: "--total-retention-time",
                      description:
                        "The table data total retention in days, between 4 and 2555. Setting this property to null will default to table retention",
                      args: { name: "total-retention-time" },
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
                      name: ["--table-name", "--name", "-n"],
                      description: "The name of the table",
                      args: { name: "table-name" },
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
                  name: "restore",
                  description:
                    "Manage tables for log analytics workspace restore logs table",
                  subcommands: [
                    {
                      name: "create",
                      description:
                        "Create a Log Analytics workspace restore logs table. The table name needs to end with '_RST'",
                      options: [
                        {
                          name: "--end-restore-time",
                          description:
                            "Datetime format. Format: date (yyyy-mm-dd) time (hh:mm:ss.xxxxx) timezone (+/-hh:mm)",
                          args: { name: "end-restore-time" },
                          isRequired: true,
                        },
                        {
                          name: ["--name", "-n"],
                          description: "Name of the table",
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
                          name: "--restore-source-table",
                          description: "The table to restore data from",
                          args: { name: "restore-source-table" },
                          isRequired: true,
                        },
                        {
                          name: "--start-restore-time",
                          description:
                            "Datetime format. Format: date (yyyy-mm-dd) time (hh:mm:ss.xxxxx) timezone (+/-hh:mm)",
                          args: { name: "start-restore-time" },
                          isRequired: true,
                        },
                        {
                          name: "--workspace-name",
                          description: "Name of the Log Analytics Workspace",
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
                  name: "search-job",
                  description:
                    "Manage tables for log analytics workspace search results table",
                  subcommands: [
                    {
                      name: "create",
                      description:
                        "Create a Log Analytics workspace search results table. The table name needs to end with '_SRCH'",
                      options: [
                        {
                          name: "--end-search-time",
                          description:
                            "Datetime format. Format: date (yyyy-mm-dd) time (hh:mm:ss.xxxxx) timezone (+/-hh:mm)",
                          args: { name: "end-search-time" },
                          isRequired: true,
                        },
                        {
                          name: ["--name", "-n"],
                          description: "Name of the table",
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
                          name: "--search-query",
                          description: "Search job query",
                          args: { name: "search-query" },
                          isRequired: true,
                        },
                        {
                          name: "--start-search-time",
                          description:
                            "Datetime format. Format: date (yyyy-mm-dd) time (hh:mm:ss.xxxxx) timezone (+/-hh:mm)",
                          args: { name: "start-search-time" },
                          isRequired: true,
                        },
                        {
                          name: "--workspace-name",
                          description: "Name of the Log Analytics Workspace",
                          args: { name: "workspace-name" },
                          isRequired: true,
                        },
                        {
                          name: "--limit",
                          description:
                            "Limit the search job to return up to specified number of rows",
                          args: { name: "limit" },
                        },
                        {
                          name: "--no-wait",
                          description:
                            "Do not wait for the long-running operation to finish",
                        },
                        {
                          name: "--retention-time",
                          description:
                            "The data table data retention in days, between 4 and 730. Setting this property to null will default to the workspace",
                          args: { name: "retention-time" },
                        },
                        {
                          name: "--total-retention-time",
                          description:
                            "The table data total retention in days, between 4 and 2555. Setting this property to null will default to table retention",
                          args: { name: "total-retention-time" },
                        },
                      ],
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
      name: "log-profiles",
      description: "Manage log profiles",
      subcommands: [
        {
          name: "create",
          description: "Create a log profile in Azure Monitoring REST API",
          options: [
            {
              name: "--categories",
              description:
                "Space-separated categories of the logs. These categories are created as is convenient to the user. Some values are: 'Write', 'Delete', and/or 'Action.' Support shorthand-syntax, json-file and yaml-file. Try \"??\" to show more",
              args: { name: "categories" },
              isRequired: true,
            },
            {
              name: "--days",
              description:
                "The number of days for the retention in days. A value of 0 will retain the events indefinitely",
              args: { name: "days" },
              isRequired: true,
            },
            {
              name: "--enabled",
              description:
                "Whether the retention policy is enabled. Allowed values: false, true",
              args: {
                name: "enabled",
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
              isRequired: true,
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: "--locations",
              description:
                'Space-separated list of regions for which Activity Log events should be stored. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "locations" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The name of the log profile",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--service-bus-rule-id",
              description:
                "The service bus rule ID of the service bus namespace in which you would like to have Event Hubs created for streaming the Activity Log. The rule ID is of the format: '{service bus resource ID}/authorizationrules/{key name}'",
              args: { name: "service-bus-rule-id" },
            },
            {
              name: "--storage-account-id",
              description:
                "The resource id of the storage account to which you would like to send the Activity Log",
              args: { name: "storage-account-id" },
            },
            {
              name: "--tags",
              description:
                "Space-separated tags: key[=value] [key[=value] ...]. Use '' to clear existing tags. Support shorthand-syntax, json-file and yaml-file. Try \"??\" to show more",
              args: { name: "tags" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete the log profile",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the log profile",
              args: { name: "name" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
          ],
        },
        { name: "list", description: "List the log profiles" },
        {
          name: "show",
          description: "Get the log profile",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the log profile",
              args: { name: "name" },
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
          description: "Update a log profile in Azure Monitoring REST API",
          options: [
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: "--categories",
              description:
                "Space-separated categories of the logs. These categories are created as is convenient to the user. Some values are: 'Write', 'Delete', and/or 'Action.' Support shorthand-syntax, json-file and yaml-file. Try \"??\" to show more",
              args: { name: "categories" },
            },
            {
              name: "--days",
              description:
                "The number of days for the retention in days. A value of 0 will retain the events indefinitely",
              args: { name: "days" },
            },
            {
              name: "--enabled",
              description:
                "Whether the retention policy is enabled. Allowed values: false, true",
              args: {
                name: "enabled",
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
              name: "--locations",
              description:
                'Space-separated list of regions for which Activity Log events should be stored. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "locations" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the log profile",
              args: { name: "name" },
            },
            {
              name: "--remove",
              description:
                "Remove a property or an element from a list. Example: --remove property.list OR --remove propertyToRemove",
              args: { name: "remove" },
            },
            {
              name: "--service-bus-rule-id",
              description:
                "The service bus rule ID of the service bus namespace in which you would like to have Event Hubs created for streaming the Activity Log. The rule ID is of the format: '{service bus resource ID}/authorizationrules/{key name}'",
              args: { name: "service-bus-rule-id" },
            },
            {
              name: "--set",
              description:
                "Update an object by specifying a property path and value to set. Example: --set property1.property2=",
              args: { name: "set" },
            },
            {
              name: "--storage-account-id",
              description:
                "The resource id of the storage account to which you would like to send the Activity Log",
              args: { name: "storage-account-id" },
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
                "Space-separated tags: key[=value] [key[=value] ...]. Use '' to clear existing tags. Support shorthand-syntax, json-file and yaml-file. Try \"??\" to show more",
              args: { name: "tags" },
            },
          ],
        },
      ],
    },
    {
      name: "metrics",
      description: "View Azure resource metrics",
      subcommands: [
        {
          name: "list",
          description: "List the metric values for a resource",
          options: [
            {
              name: "--resource",
              description: "Name or ID of the target resource",
              args: { name: "resource" },
              isRequired: true,
            },
            {
              name: "--aggregation",
              description:
                "The list of aggregation types (space-separated) to retrieve. value from: az monitor metrics list-definitions",
              args: {
                name: "aggregation",
                suggestions: [
                  "Average",
                  "Count",
                  "Maximum",
                  "Minimum",
                  "None",
                  "Total",
                ],
              },
            },
            {
              name: "--dimension",
              description:
                "The list of dimensions (space-separated) the metrics are queried into. value from: az monitor metrics list-definitions",
              args: { name: "dimension" },
            },
            {
              name: "--end-time",
              description:
                "End time of the query. Defaults to the current time. Format: date (yyyy-mm-dd) time (hh:mm:ss.xxxxx) timezone (+/-hh:mm)",
              args: { name: "end-time" },
            },
            {
              name: "--filter",
              description:
                "A string used to reduce the set of metric data returned. eg. \"BlobType eq '*'\"",
              args: { name: "filter" },
            },
            {
              name: "--interval",
              description:
                "The interval over which to aggregate metrics, in ##h##m format",
              args: { name: "interval" },
            },
            {
              name: "--metadata",
              description: "Returns the metadata values instead of metric data",
              args: { name: "metadata" },
            },
            {
              name: "--metrics",
              description:
                "Space-separated list of metric names to retrieve. value from: az monitor metrics list-definitions",
              args: { name: "metrics" },
            },
            {
              name: "--namespace",
              description:
                "Namespace to query metric definitions for. value from: az monitor metrics list-namespaces",
              args: { name: "namespace" },
            },
            {
              name: "--offset",
              description: "Time offset of the query range, in ##d##h format",
              args: { name: "offset" },
            },
            {
              name: "--orderby",
              description:
                "Aggregation to use for sorting results and the direction of the sort. Only one order can be specificed. Examples: sum asc",
              args: { name: "orderby" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-namespace",
              description: "Target resource provider namespace",
              args: { name: "resource-namespace" },
            },
            {
              name: "--resource-parent",
              description: "Target resource parent path, if applicable",
              args: { name: "resource-parent" },
            },
            {
              name: "--resource-type",
              description:
                "Target resource type. Can also accept namespace/type format (Ex: 'Microsoft.Compute/virtualMachines')",
              args: { name: "resource-type" },
            },
            {
              name: "--start-time",
              description:
                "Start time of the query. Format: date (yyyy-mm-dd) time (hh:mm:ss.xxxxx) timezone (+/-hh:mm)",
              args: { name: "start-time" },
            },
            {
              name: "--top",
              description:
                "Max number of records to retrieve. Valid only if --filter used",
              args: { name: "top" },
            },
          ],
        },
        {
          name: "list-definitions",
          description: "List the metric definitions for the resource",
          options: [
            {
              name: "--resource",
              description: "Name or ID of the target resource",
              args: { name: "resource" },
              isRequired: true,
            },
            {
              name: "--namespace",
              description:
                "Namespace to query metric definitions for. value from: az monitor metrics list-namespaces",
              args: { name: "namespace" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-namespace",
              description: "Target resource provider namespace",
              args: { name: "resource-namespace" },
            },
            {
              name: "--resource-parent",
              description: "Target resource parent path, if applicable",
              args: { name: "resource-parent" },
            },
            {
              name: "--resource-type",
              description:
                "Target resource type. Can also accept namespace/type format (Ex: 'Microsoft.Compute/virtualMachines')",
              args: { name: "resource-type" },
            },
          ],
        },
        {
          name: "list-namespaces",
          description: "List the metric namespaces for the resource",
          options: [
            {
              name: "--resource-uri",
              description: "The identifier of the resource",
              args: { name: "resource-uri" },
              isRequired: true,
            },
            {
              name: "--start-time",
              description:
                "Start time of the query. Format: date (yyyy-mm-dd) time (hh:mm:ss.xxxxx) timezone (+/-hh:mm)",
              args: { name: "start-time" },
            },
          ],
        },
        {
          name: "alert",
          description: "Manage near-realtime metric alert rules",
          subcommands: [
            {
              name: "create",
              description: "Create a metric-based alert rule",
              options: [
                {
                  name: "--condition",
                  description:
                    "The condition which triggers the rule. It can be created by 'az monitor metrics alert condition create' command",
                  args: { name: "condition" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the alert rule",
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
                  name: "--scopes",
                  description:
                    "Space-separated list of scopes the rule applies to. The resources specified in this parameter must be of the same type and exist in the same location",
                  args: { name: "scopes" },
                  isRequired: true,
                },
                {
                  name: ["--action", "-a"],
                  description:
                    "Add an action group and optional webhook properties to fire when the alert is triggered",
                  args: { name: "action" },
                },
                {
                  name: "--auto-mitigate",
                  description: "Automatically resolve the alert",
                  args: {
                    name: "auto-mitigate",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--description",
                  description: "Free-text description of the rule",
                  args: { name: "description" },
                },
                {
                  name: "--disabled",
                  description: "Create the rule in a disabled state",
                },
                {
                  name: "--evaluation-frequency",
                  description:
                    'Frequency with which to evaluate the rule in "##h##m##s" format',
                  args: { name: "evaluation-frequency" },
                },
                {
                  name: ["--target-resource-region", "--region"],
                  description:
                    "The region of the target resource(s) in scopes. This must be provided when scopes is resource group or subscription",
                  args: { name: "target-resource-region" },
                },
                {
                  name: "--severity",
                  description:
                    "Severity of the alert from 0 (critical) to 4 (verbose)",
                  args: { name: "severity" },
                },
                {
                  name: "--tags",
                  description:
                    'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
                  args: { name: "tags" },
                },
                {
                  name: ["--target-resource-type", "--type"],
                  description:
                    "The resource type of the target resource(s) in scopes. This must be provided when scopes is resource group or subscription",
                  args: { name: "target-resource-type" },
                },
                {
                  name: "--window-size",
                  description:
                    'Time over which to aggregate metrics in "##h##m##s" format',
                  args: { name: "window-size" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a metrics-based alert rule",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the alert rule",
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
              description: "List metric-based alert rules",
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
              description: "Show a metrics-based alert rule",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the alert rule",
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
              description: "Update a metric-based alert rule",
              options: [
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add" },
                },
                {
                  name: "--add-action",
                  description:
                    "Add an action group and optional webhook properties to fire when the alert is triggered",
                  args: { name: "add-action" },
                },
                {
                  name: "--add-condition",
                  description: "Add a condition which triggers the rule",
                  args: { name: "add-condition" },
                },
                {
                  name: "--auto-mitigate",
                  description: "Automatically resolve the alert",
                  args: {
                    name: "auto-mitigate",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--description",
                  description: "Free-text description of the rule",
                  args: { name: "description" },
                },
                {
                  name: "--enabled",
                  description: "Whether the metric alert rule is enabled",
                  args: { name: "enabled", suggestions: ["false", "true"] },
                },
                {
                  name: "--evaluation-frequency",
                  description:
                    'Frequency with which to evaluate the rule in "##h##m##s" format',
                  args: { name: "evaluation-frequency" },
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
                  description: "Name of the alert rule",
                  args: { name: "name" },
                },
                {
                  name: "--remove",
                  description:
                    "Remove a property or an element from a list. Example: --remove property.list OR --remove propertyToRemove",
                  args: { name: "remove" },
                },
                {
                  name: "--remove-actions",
                  description:
                    "Space-separated list of action group names to remove",
                  args: { name: "remove-actions" },
                },
                {
                  name: "--remove-conditions",
                  description:
                    "Space-separated list of condition names to remove",
                  args: { name: "remove-conditions" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--scopes",
                  description:
                    "Space-separated list of scopes the rule applies to. The resources specified in this parameter must be of the same type and exist in the same location",
                  args: { name: "scopes" },
                },
                {
                  name: "--set",
                  description:
                    "Update an object by specifying a property path and value to set. Example: --set property1.property2=",
                  args: { name: "set" },
                },
                {
                  name: "--severity",
                  description:
                    "Severity of the alert from 0 (critical) to 4 (verbose)",
                  args: { name: "severity" },
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
                  name: "--window-size",
                  description:
                    'Time over which to aggregate metrics in "##h##m##s" format',
                  args: { name: "window-size" },
                },
              ],
            },
            {
              name: "condition",
              description: "Manage near-realtime metric alert rule conditions",
              subcommands: [
                {
                  name: "create",
                  description: "Build a metric alert rule condition",
                  options: [
                    {
                      name: "--aggregation",
                      description: "Time aggregation",
                      args: {
                        name: "aggregation",
                        suggestions: [
                          "Average",
                          "Count",
                          "Maximum",
                          "Minimum",
                          "Total",
                        ],
                      },
                      isRequired: true,
                    },
                    {
                      name: "--metric",
                      description:
                        "Name of the metric to base the rule on. value from: az monitor metrics list-definitions",
                      args: { name: "metric" },
                      isRequired: true,
                    },
                    {
                      name: ["--operator", "--op"],
                      description:
                        "Operator for static threshold can be 'Equals', 'NotEquals', 'GreaterThan', 'GreaterThanOrEqual', 'LessThan' or 'LessThanOrEqual'. Operator for dynamic threshold can be 'GreaterThan', 'LessThan', 'GreaterOrLessThan'",
                      args: {
                        name: "operator",
                        suggestions: [
                          "Equals",
                          "GreaterOrLessThan",
                          "GreaterThan",
                          "GreaterThanOrEqual",
                          "LessThan",
                          "LessThanOrEqual",
                          "NotEquals",
                        ],
                      },
                      isRequired: true,
                    },
                    {
                      name: ["--type", "-t"],
                      description: "Type of condition threshold",
                      args: {
                        name: "type",
                        suggestions: ["dynamic", "static"],
                      },
                      isRequired: true,
                    },
                    {
                      name: "--dimension",
                      description:
                        "Dimension created by 'az monitor metrics alert dimension create'",
                      args: { name: "dimension" },
                    },
                    {
                      name: "--namespace",
                      description: "Namespace of metric",
                      args: { name: "namespace" },
                    },
                    {
                      name: "--num-periods",
                      description:
                        "The number of evaluation periods for dynamic threshold. Range: 1-6",
                      args: { name: "num-periods" },
                    },
                    {
                      name: "--num-violations",
                      description:
                        "The number of violations to trigger an dynamic alert. Range: 1-6. It should be less than or equal to --num-periods",
                      args: { name: "num-violations" },
                    },
                    {
                      name: "--sensitivity",
                      description: "Alert sensitivity for dynamic threshold",
                      args: {
                        name: "sensitivity",
                        suggestions: ["High", "Low", "Medium"],
                      },
                    },
                    {
                      name: "--since",
                      description:
                        "The date from which to start learning the metric historical data and calculate the dynamic thresholds. Format: date (yyyy-mm-dd) time (hh:mm:ss.xxxxx) timezone (+/-hh:mm)",
                      args: { name: "since" },
                    },
                    {
                      name: "--skip-metric-validation",
                      description:
                        "Cause the metric validation to be skipped. This allows to use a metric that has not been emitted yet",
                      args: {
                        name: "skip-metric-validation",
                        suggestions: ["false", "true"],
                      },
                    },
                    {
                      name: "--threshold",
                      description: "Static threshold value",
                      args: { name: "threshold" },
                    },
                  ],
                },
              ],
            },
            {
              name: "dimension",
              description: "Manage near-realtime metric alert rule dimensions",
              subcommands: [
                {
                  name: "create",
                  description: "Build a metric alert rule dimension",
                  options: [
                    {
                      name: ["--name", "-n"],
                      description: "Name of the dimension",
                      args: { name: "name" },
                      isRequired: true,
                    },
                    {
                      name: ["--value", "-v"],
                      description: "The values to apply on the operation",
                      args: { name: "value" },
                      isRequired: true,
                    },
                    {
                      name: ["--operator", "--op"],
                      description: "Dimension operator",
                      args: {
                        name: "operator",
                        suggestions: ["Exclude", "Include"],
                      },
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
      name: "private-link-scope",
      description: "Manage monitor private link scope resource",
      subcommands: [
        {
          name: "create",
          description: "Create a private link scope resource",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the Azure Monitor Private Link Scope",
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
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tags" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a monitor private link scope resource",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Azure Monitor Private Link Scope",
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
          description: "List all monitor private link scope resources",
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
          description: "Show a monitor private link scope resource",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Azure Monitor Private Link Scope",
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
          description: "Update a monitor private link scope resource",
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
              name: ["--name", "-n"],
              description: "Name of the Azure Monitor Private Link Scope",
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
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
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
              description: "Name of the Azure Monitor Private Link Scope",
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
          name: "private-endpoint-connection",
          description:
            "Manage private endpoint connection of a private link scope resource",
          subcommands: [
            {
              name: "approve",
              description:
                "Approve a private endpoint connection of a private link scope resource",
              options: [
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add" },
                },
                {
                  name: "--description",
                  description: "Description of private link service connection",
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
                  name: "--id",
                  description:
                    "ID of the private endpoint connection associated with the private link scope. Values from az monitor private-link-scope show",
                  args: { name: "id" },
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
                    "Name of the private endpoint connection associated with the private link scope",
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
                  name: "--scope-name",
                  description: "Name of the Azure Monitor Private Link Scope",
                  args: { name: "scope-name" },
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
            {
              name: "delete",
              description:
                "Delete a private endpoint connection of a private link scope resource",
              options: [
                {
                  name: "--id",
                  description:
                    "ID of the private endpoint connection associated with the private link scope. Values from az monitor private-link-scope show",
                  args: { name: "id" },
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
                    "Name of the private endpoint connection associated with the private link scope",
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
                  name: "--scope-name",
                  description: "Name of the Azure Monitor Private Link Scope",
                  args: { name: "scope-name" },
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
                "List all private endpoint connections on a private link scope",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--scope-name",
                  description: "Name of the Azure Monitor Private Link Scope",
                  args: { name: "scope-name" },
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
              name: "reject",
              description:
                "Reject a private endpoint connection of a private link scope resource",
              options: [
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add" },
                },
                {
                  name: "--description",
                  description: "Description of private link service connection",
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
                  name: "--id",
                  description:
                    "ID of the private endpoint connection associated with the private link scope. Values from az monitor private-link-scope show",
                  args: { name: "id" },
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
                    "Name of the private endpoint connection associated with the private link scope",
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
                  name: "--scope-name",
                  description: "Name of the Azure Monitor Private Link Scope",
                  args: { name: "scope-name" },
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
            {
              name: "show",
              description:
                "Show a private endpoint connection of a private link scope resource",
              options: [
                {
                  name: "--id",
                  description:
                    "ID of the private endpoint connection associated with the private link scope. Values from az monitor private-link-scope show",
                  args: { name: "id" },
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
                    "Name of the private endpoint connection associated with the private link scope",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--scope-name",
                  description: "Name of the Azure Monitor Private Link Scope",
                  args: { name: "scope-name" },
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
                  name: ["--name", "-n"],
                  description:
                    "Name of the private endpoint connection associated with the private link scope",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--scope-name",
                  description: "Name of the Azure Monitor Private Link Scope",
                  args: { name: "scope-name" },
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
          name: "private-link-resource",
          description:
            "Manage private link resource of a private link scope resource",
          subcommands: [
            {
              name: "list",
              description:
                "List all private link resources of a private link scope resource",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--scope-name",
                  description: "Name of the Azure Monitor Private Link Scope",
                  args: { name: "scope-name" },
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
              description:
                "Show a private link resource of a private link scope resource",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the private link resource",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--scope-name",
                  description: "Name of the Azure Monitor Private Link Scope",
                  args: { name: "scope-name" },
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
          name: "scoped-resource",
          description:
            "Manage scoped resource of a private link scope resource",
          subcommands: [
            {
              name: "create",
              description:
                "Create a scoped resource for a private link scope resource",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the assigned resource",
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
                  name: "--scope-name",
                  description: "Name of the Azure Monitor Private Link Scope",
                  args: { name: "scope-name" },
                  isRequired: true,
                },
                {
                  name: "--linked-resource",
                  description:
                    "ARM resource ID of the linked resource. It should be one of log analytics workspace or application insights component",
                  args: { name: "linked-resource" },
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
              ],
            },
            {
              name: "delete",
              description:
                "Delete a scoped resource of a private link scope resource",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the assigned resource",
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
                  name: "--scope-name",
                  description: "Name of the Azure Monitor Private Link Scope",
                  args: { name: "scope-name" },
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
                "List all scoped resource of a private link scope resource",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--scope-name",
                  description: "Name of the Azure Monitor Private Link Scope",
                  args: { name: "scope-name" },
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
              description:
                "Show a scoped resource of a private link scope resource",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the assigned resource",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--scope-name",
                  description: "Name of the Azure Monitor Private Link Scope",
                  args: { name: "scope-name" },
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
                  name: ["--name", "-n"],
                  description: "Name of the assigned resource",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--scope-name",
                  description: "Name of the Azure Monitor Private Link Scope",
                  args: { name: "scope-name" },
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
    },
    {
      name: "scheduled-query",
      description: "Commands to manage scheduled queries",
      subcommands: [
        {
          name: "create",
          description: "Create a scheduled query",
          options: [
            {
              name: "--condition",
              description: "The condition which triggers the rule",
              args: { name: "condition" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the scheduled query rule",
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
              name: "--scopes",
              description:
                "Space-separated list of scopes the rule applies to. The resources specified in this parameter must be of the same type and exist in the same location",
              args: { name: "scopes" },
              isRequired: true,
            },
            {
              name: "--action-groups",
              description:
                "Action Group resource Ids to invoke when the alert fires",
              args: { name: "action-groups" },
            },
            {
              name: "--auto-mitigate",
              description:
                "The flag that indicates whether the alert should be automatically resolved or not. The default is true",
              args: { name: "auto-mitigate", suggestions: ["false", "true"] },
            },
            {
              name: ["--check-ws-alerts-storage", "--cwas"],
              description:
                "The flag which indicates whether this scheduled query rule should be stored in the customer's storage",
            },
            {
              name: "--condition-query",
              description:
                "Query deteils to replace the placeholders in --condition argument",
              args: { name: "condition-query" },
            },
            {
              name: "--custom-properties",
              description: "The properties of an alert payload",
              args: { name: "custom-properties" },
            },
            {
              name: "--description",
              description: "Free-text description of the rule",
              args: { name: "description" },
            },
            { name: "--disabled", description: "Disable the scheduled query" },
            {
              name: "--evaluation-frequency",
              description:
                'Frequency with which to evaluate the rule in "##h##m##s" format',
              args: { name: "evaluation-frequency" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: ["--mute-actions-duration", "--mad"],
              description:
                "Mute actions for the chosen period of time (in ISO 8601 duration format) after the alert is fired",
              args: { name: "mute-actions-duration" },
            },
            {
              name: "--severity",
              description:
                "Severity of the alert from 0 (critical) to 4 (verbose)",
              args: { name: "severity" },
            },
            {
              name: "--skip-query-validation",
              description:
                "The flag which indicates whether the provided query should be validated or not",
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
            {
              name: ["--target-resource-type", "--type"],
              description:
                "The resource type of the target resource(s) in scopes. This must be provided when scopes is resource group or subscription",
              args: { name: "target-resource-type" },
            },
            {
              name: "--window-size",
              description:
                'Time over which to aggregate metrics in "##h##m##s" format',
              args: { name: "window-size" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a scheduled query",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the scheduled query rule",
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
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "List all scheduled queries",
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
          description: "Show detail of a scheduled query",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the scheduled query rule",
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
          description: "Update a scheduled query",
          options: [
            {
              name: "--action-groups",
              description:
                "Action Group resource Ids to invoke when the alert fires",
              args: { name: "action-groups" },
            },
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: "--auto-mitigate",
              description:
                "The flag that indicates whether the alert should be automatically resolved or not. The default is true",
              args: { name: "auto-mitigate", suggestions: ["false", "true"] },
            },
            {
              name: ["--check-ws-alerts-storage", "--cwas"],
              description:
                "The flag which indicates whether this scheduled query rule should be stored in the customer's storage",
              args: {
                name: "check-ws-alerts-storage",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--condition",
              description: "The condition which triggers the rule",
              args: { name: "condition" },
            },
            {
              name: "--condition-query",
              description:
                "Query deteils to replace the placeholders in --condition argument",
              args: { name: "condition-query" },
            },
            {
              name: "--custom-properties",
              description: "The properties of an alert payload",
              args: { name: "custom-properties" },
            },
            {
              name: "--description",
              description: "Free-text description of the rule",
              args: { name: "description" },
            },
            {
              name: "--disabled",
              description: "Disable the scheduled query",
              args: { name: "disabled", suggestions: ["false", "true"] },
            },
            {
              name: "--evaluation-frequency",
              description:
                'Frequency with which to evaluate the rule in "##h##m##s" format',
              args: { name: "evaluation-frequency" },
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
              name: ["--mute-actions-duration", "--mad"],
              description:
                "Mute actions for the chosen period of time (in ISO 8601 duration format) after the alert is fired",
              args: { name: "mute-actions-duration" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the scheduled query rule",
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
              name: "--severity",
              description:
                "Severity of the alert from 0 (critical) to 4 (verbose)",
              args: { name: "severity" },
            },
            {
              name: "--skip-query-validation",
              description:
                "The flag which indicates whether the provided query should be validated or not",
              args: {
                name: "skip-query-validation",
                suggestions: ["false", "true"],
              },
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
              name: ["--target-resource-type", "--type"],
              description:
                "The resource type of the target resource(s) in scopes. This must be provided when scopes is resource group or subscription",
              args: { name: "target-resource-type" },
            },
            {
              name: "--window-size",
              description:
                'Time over which to aggregate metrics in "##h##m##s" format',
              args: { name: "window-size" },
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
