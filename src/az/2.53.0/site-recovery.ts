const completion: Fig.Spec = {
  name: "site-recovery",
  description: "Manage Site Recovery Service",
  subcommands: [
    {
      name: "alert-setting",
      description: "Manage Alert Setting",
      subcommands: [
        {
          name: "create",
          description: "Create an email notification(alert) configuration",
          options: [
            {
              name: ["--alert-setting-name", "--name", "-n"],
              description:
                "The name of the email notification(alert) configuration",
              args: { name: "alert-setting-name" },
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
              name: "--vault-name",
              description: "The name of the recovery services vault",
              args: { name: "vault-name" },
              isRequired: true,
            },
            {
              name: "--custom-email-addresses",
              description:
                'The custom email address for sending emails. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "custom-email-addresses" },
            },
            {
              name: "--locale",
              description: "The locale for the email notification",
              args: { name: "locale" },
            },
            {
              name: "--send-to-owners",
              description:
                'A value indicating whether to send email to subscription administrator. Allowed values: "Send", "DoNotSend"',
              args: { name: "send-to-owners" },
            },
          ],
        },
        {
          name: "list",
          description:
            "List the list of email notification(alert) configurations for the vault",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--vault-name",
              description: "The name of the recovery services vault",
              args: { name: "vault-name" },
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
            "Get the details of the specified email notification(alert) configuration",
          options: [
            {
              name: ["--alert-setting-name", "--name", "-n"],
              description: "The name of the email notification configuration",
              args: { name: "alert-setting-name" },
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
              name: "--vault-name",
              description: "The name of the recovery services vault",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "update",
          description: "Update an email notification(alert) configuration",
          options: [
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: ["--alert-setting-name", "--name", "-n"],
              description: "The name of the email notification configuration",
              args: { name: "alert-setting-name" },
            },
            {
              name: "--custom-email-addresses",
              description:
                'The custom email address for sending emails. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "custom-email-addresses" },
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
              name: "--locale",
              description: "The locale for the email notification",
              args: { name: "locale" },
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
              name: "--send-to-owners",
              description:
                'A value indicating whether to send email to subscription administrator. Allowed values: "Send", "DoNotSend"',
              args: { name: "send-to-owners" },
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
              name: "--vault-name",
              description: "The name of the recovery services vault",
              args: { name: "vault-name" },
            },
          ],
        },
      ],
    },
    {
      name: "event",
      description: "Manage the events of the vault",
      subcommands: [
        {
          name: "list",
          description:
            "List the list of Azure Site Recovery events for the vault",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--vault-name",
              description: "The name of the recovery services vault",
              args: { name: "vault-name" },
              isRequired: true,
            },
            {
              name: "--filter",
              description: "OData filter options",
              args: { name: "filter" },
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
            "Get operation to get the details of an Azure Site recovery event",
          options: [
            {
              name: ["--event-name", "--name", "-n"],
              description: "The name of the Azure Site Recovery event",
              args: { name: "event-name" },
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
              name: "--vault-name",
              description: "The name of the recovery services vault",
              args: { name: "vault-name" },
            },
          ],
        },
      ],
    },
    {
      name: "fabric",
      description: "Manage Fabric",
      subcommands: [
        {
          name: "create",
          description:
            "Create operation to create an Azure Site Recovery fabric (for e.g. Hyper-V site)",
          options: [
            {
              name: ["--fabric-name", "--name", "-n"],
              description: "Name of the ASR fabric",
              args: { name: "fabric-name" },
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
              name: "--vault-name",
              description: "The name of the recovery services vault",
              args: { name: "vault-name" },
              isRequired: true,
            },
            {
              name: "--custom-details",
              description:
                'Fabric provider specific creation input. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "custom-details" },
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
            "Delete operation to purge(force delete) an Azure Site Recovery fabric",
          options: [
            {
              name: ["--fabric-name", "--name", "-n"],
              description: "ASR fabric to purge",
              args: { name: "fabric-name" },
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
              name: "--vault-name",
              description: "The name of the recovery services vault",
              args: { name: "vault-name" },
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
            "List a list of the Azure Site Recovery fabrics in the vault",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--vault-name",
              description: "The name of the recovery services vault",
              args: { name: "vault-name" },
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
          name: "remove",
          description:
            "The operation to delete or remove an Azure Site Recovery fabric",
          options: [
            {
              name: ["--fabric-name", "--name", "-n"],
              description: "ASR fabric to delete",
              args: { name: "fabric-name" },
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
              name: "--vault-name",
              description: "The name of the recovery services vault",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "show",
          description: "Get the details of an Azure Site Recovery fabric",
          options: [
            {
              name: ["--fabric-name", "--name", "-n"],
              description: "Fabric name",
              args: { name: "fabric-name" },
            },
            {
              name: "--filter",
              description: "OData filter options",
              args: { name: "filter" },
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
              name: "--vault-name",
              description: "The name of the recovery services vault",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "update",
          description:
            "Update operation to create an Azure Site Recovery fabric (for e.g. Hyper-V site)",
          options: [
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: "--custom-details",
              description:
                'Fabric provider specific creation input. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "custom-details" },
            },
            {
              name: ["--fabric-name", "--name", "-n"],
              description: "Fabric name",
              args: { name: "fabric-name" },
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
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--vault-name",
              description: "The name of the recovery services vault",
              args: { name: "vault-name" },
            },
          ],
        },
      ],
    },
    {
      name: "job",
      description: "Manage Azure Site Recovery Jobs for the vault",
      subcommands: [
        {
          name: "cancel",
          description: "The operation to cancel an Azure Site Recovery job",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--job-name", "--name", "-n"],
              description: "Job identifier",
              args: { name: "job-name" },
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
              name: "--vault-name",
              description: "The name of the recovery services vault",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "export",
          description:
            "The operation to export the details of the Azure Site Recovery jobs of the vault",
          options: [
            {
              name: "--affected-object-types",
              description: "The type of objects",
              args: { name: "affected-object-types" },
            },
            {
              name: "--end-time",
              description: "Date time to get jobs upto",
              args: { name: "end-time" },
            },
            {
              name: "--fabric-id",
              description: "The Id of the fabric to search jobs under",
              args: { name: "fabric-id" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--job-name", "--name", "-n"],
              description: "The job Name",
              args: { name: "job-name" },
            },
            {
              name: "--job-output-type",
              description: "The output type of the jobs",
              args: {
                name: "job-output-type",
                suggestions: ["Excel", "Json", "Xml"],
              },
            },
            {
              name: "--job-status",
              description: "The states of the job to be filtered can be in",
              args: { name: "job-status" },
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
              name: "--start-time",
              description: "Date time to get jobs from",
              args: { name: "start-time" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--timezone-offset",
              description:
                "The timezone offset for the location of the request (in minutes)",
              args: { name: "timezone-offset" },
            },
            {
              name: "--vault-name",
              description: "The name of the recovery services vault",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "list",
          description:
            "List the list of Azure Site Recovery Jobs for the vault",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--vault-name",
              description: "The name of the recovery services vault",
              args: { name: "vault-name" },
              isRequired: true,
            },
            {
              name: "--filter",
              description: "OData filter options",
              args: { name: "filter" },
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
          name: "restart",
          description: "The operation to restart an Azure Site Recovery job",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--job-name", "--name", "-n"],
              description: "Job identifier",
              args: { name: "job-name" },
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
              name: "--vault-name",
              description: "The name of the recovery services vault",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "resume",
          description: "The operation to resume an Azure Site Recovery job",
          options: [
            {
              name: "--comments",
              description: "Resume job comments",
              args: { name: "comments" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--job-name", "--name", "-n"],
              description: "Job identifier",
              args: { name: "job-name" },
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
              name: "--vault-name",
              description: "The name of the recovery services vault",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "show",
          description: "Get the details of an Azure Site Recovery job",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--job-name", "--name", "-n"],
              description: "Job identifier",
              args: { name: "job-name" },
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
              name: "--vault-name",
              description: "The name of the recovery services vault",
              args: { name: "vault-name" },
            },
          ],
        },
      ],
    },
    {
      name: "logical-network",
      description: "Manage logical-network",
      subcommands: [
        {
          name: "list",
          description:
            "List all the logical networks of the Azure Site Recovery fabric",
          options: [
            {
              name: "--fabric-name",
              description: "Server Id",
              args: { name: "fabric-name" },
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
              name: "--vault-name",
              description: "The name of the recovery services vault",
              args: { name: "vault-name" },
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
          description: "Get the details of a logical network",
          options: [
            {
              name: "--fabric-name",
              description: "Server Id",
              args: { name: "fabric-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--logical-network-name", "--name", "-n"],
              description: "Logical network name",
              args: { name: "logical-network-name" },
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
              name: "--vault-name",
              description: "The name of the recovery services vault",
              args: { name: "vault-name" },
            },
          ],
        },
      ],
    },
    {
      name: "network",
      description: "Manage network",
      subcommands: [
        {
          name: "list",
          description: "List the networks available for a fabric",
          options: [
            {
              name: "--fabric-name",
              description: "Fabric name",
              args: { name: "fabric-name" },
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
              name: "--vault-name",
              description: "The name of the recovery services vault",
              args: { name: "vault-name" },
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
          description: "Get the details of a network",
          options: [
            {
              name: "--fabric-name",
              description: "Server Id",
              args: { name: "fabric-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--network-name", "--name", "-n"],
              description: "Primary network name",
              args: { name: "network-name" },
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
              name: "--vault-name",
              description: "The name of the recovery services vault",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "mapping",
          description: "Manage Network Mapping",
          subcommands: [
            {
              name: "create",
              description: "Create operation to create an ASR network mapping",
              options: [
                {
                  name: "--fabric-name",
                  description: "Primary fabric name",
                  args: { name: "fabric-name" },
                  isRequired: true,
                },
                {
                  name: ["--network-mapping-name", "--name", "-n"],
                  description: "Network mapping name",
                  args: { name: "network-mapping-name" },
                  isRequired: true,
                },
                {
                  name: "--network-name",
                  description: "Primary network name",
                  args: { name: "network-name" },
                  isRequired: true,
                },
                {
                  name: "--recovery-network-id",
                  description: "Recovery network Id",
                  args: { name: "recovery-network-id" },
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
                  name: "--vault-name",
                  description: "The name of the recovery services vault",
                  args: { name: "vault-name" },
                  isRequired: true,
                },
                {
                  name: ["--fabric-specific-details", "--fabric-details"],
                  description:
                    'Fabric specific input properties. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "fabric-specific-details" },
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
                  name: "--recovery-fabric-name",
                  description: "Recovery fabric Name",
                  args: { name: "recovery-fabric-name" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete operation to delete a network mapping",
              options: [
                {
                  name: "--fabric-name",
                  description: "Primary fabric name",
                  args: { name: "fabric-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--network-mapping-name", "--name", "-n"],
                  description: "ARM Resource Name for network mapping",
                  args: { name: "network-mapping-name" },
                },
                {
                  name: "--network-name",
                  description: "Primary network name",
                  args: { name: "network-name" },
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
                  name: "--vault-name",
                  description: "The name of the recovery services vault",
                  args: { name: "vault-name" },
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
                "List all ASR network mappings for the specified network",
              options: [
                {
                  name: "--fabric-name",
                  description: "Primary fabric name",
                  args: { name: "fabric-name" },
                  isRequired: true,
                },
                {
                  name: "--network-name",
                  description: "Primary network name",
                  args: { name: "network-name" },
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
                  name: "--vault-name",
                  description: "The name of the recovery services vault",
                  args: { name: "vault-name" },
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
              description: "Get the details of an ASR network mapping",
              options: [
                {
                  name: "--fabric-name",
                  description: "Primary fabric name",
                  args: { name: "fabric-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--network-mapping-name", "--name", "-n"],
                  description: "Network mapping name",
                  args: { name: "network-mapping-name" },
                },
                {
                  name: "--network-name",
                  description: "Primary network name",
                  args: { name: "network-name" },
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
                  name: "--vault-name",
                  description: "The name of the recovery services vault",
                  args: { name: "vault-name" },
                },
              ],
            },
            {
              name: "update",
              description: "Update operation to create an ASR network mapping",
              options: [
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add" },
                },
                {
                  name: ["--fabric-specific-details", "--fabric-details"],
                  description:
                    'Fabric specific input properties. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "fabric-specific-details" },
                },
                {
                  name: "--fabric-name",
                  description: "Primary fabric name",
                  args: { name: "fabric-name" },
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
                  name: ["--network-mapping-name", "--name", "-n"],
                  description: "Network mapping name",
                  args: { name: "network-mapping-name" },
                },
                {
                  name: "--network-name",
                  description: "Primary network name",
                  args: { name: "network-name" },
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
                  name: "--recovery-fabric-name",
                  description: "Recovery fabric Name",
                  args: { name: "recovery-fabric-name" },
                },
                {
                  name: "--recovery-network-id",
                  description: "Recovery network Id",
                  args: { name: "recovery-network-id" },
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
                  name: "--vault-name",
                  description: "The name of the recovery services vault",
                  args: { name: "vault-name" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "policy",
      description: "Manage the replication policies for a vault",
      subcommands: [
        {
          name: "create",
          description: "Create operation to create a replication policy",
          options: [
            {
              name: ["--policy-name", "--name", "-n"],
              description: "Replication policy name",
              args: { name: "policy-name" },
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
              name: "--vault-name",
              description: "The name of the recovery services vault",
              args: { name: "vault-name" },
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
              name: ["--provider-specific-input", "--provider-input"],
              description:
                'The ReplicationProviderSettings. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "provider-specific-input" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete operation to delete a replication policy",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--policy-name", "--name", "-n"],
              description: "Replication policy name",
              args: { name: "policy-name" },
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
              name: "--vault-name",
              description: "The name of the recovery services vault",
              args: { name: "vault-name" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "List the replication policies for a vault",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--vault-name",
              description: "The name of the recovery services vault",
              args: { name: "vault-name" },
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
          description: "Get the details of a replication policy",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--policy-name", "--name", "-n"],
              description: "Replication policy name",
              args: { name: "policy-name" },
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
              name: "--vault-name",
              description: "The name of the recovery services vault",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "update",
          description: "Update operation to update a replication policy",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--policy-name", "--name", "-n"],
              description: "Policy Id",
              args: { name: "policy-name" },
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
              name: ["--provider-specific-input", "--provider-input"],
              description:
                'The ReplicationProviderSettings. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "provider-specific-input" },
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
              name: "--vault-name",
              description: "The name of the recovery services vault",
              args: { name: "vault-name" },
            },
          ],
        },
      ],
    },
    {
      name: "protectable-item",
      description: "Manage Protectable Item",
      subcommands: [
        {
          name: "list",
          description: "List the protectable items in a protection container",
          options: [
            {
              name: "--fabric-name",
              description: "Fabric name",
              args: { name: "fabric-name" },
              isRequired: true,
            },
            {
              name: ["--protection-container-name", "--protection-container"],
              description: "Protection container name",
              args: { name: "protection-container-name" },
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
              name: "--vault-name",
              description: "The name of the recovery services vault",
              args: { name: "vault-name" },
              isRequired: true,
            },
            {
              name: "--filter",
              description: "OData filter options",
              args: { name: "filter" },
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
            {
              name: "--skip-token",
              description: "SkipToken OData query parameter",
              args: { name: "skip-token" },
            },
            {
              name: "--take",
              description: "Take OData query parameter",
              args: { name: "take" },
            },
          ],
        },
        {
          name: "show",
          description: "Get operation to get the details of a protectable item",
          options: [
            {
              name: "--fabric-name",
              description: "Fabric name",
              args: { name: "fabric-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--protectable-item-name", "--name", "-n"],
              description: "Protectable item name",
              args: { name: "protectable-item-name" },
            },
            {
              name: ["--protection-container-name", "--protection-container"],
              description: "Protection container name",
              args: { name: "protection-container-name" },
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
              name: "--vault-name",
              description: "The name of the recovery services vault",
              args: { name: "vault-name" },
            },
          ],
        },
      ],
    },
    {
      name: "protected-item",
      description: "Manage Protected Item",
      subcommands: [
        {
          name: "create",
          description:
            "Create operation to create an ASR replication protected item (Enable replication)",
          options: [
            {
              name: "--fabric-name",
              description: "Name of the fabric",
              args: { name: "fabric-name" },
              isRequired: true,
            },
            {
              name: ["--replicated-protected-item-name", "--name", "-n"],
              description: "A name for the replication protected item",
              args: { name: "replicated-protected-item-name" },
              isRequired: true,
            },
            {
              name: ["--protection-container-name", "--protection-container"],
              description: "Protection container name",
              args: { name: "protection-container-name" },
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
              name: "--vault-name",
              description: "The name of the recovery services vault",
              args: { name: "vault-name" },
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
              name: "--policy-id",
              description: "The Policy Id",
              args: { name: "policy-id" },
            },
            {
              name: "--protectable-item-id",
              description: "The protectable item Id",
              args: { name: "protectable-item-id" },
            },
            {
              name: ["--provider-specific-details", "--provider-details"],
              description:
                'The ReplicationProviderInput. For HyperVReplicaAzure provider, it will be AzureEnableProtectionInput object. For San provider, it will be SanEnableProtectionInput object. For HyperVReplicaAzure provider, it can be null. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "provider-specific-details" },
            },
          ],
        },
        {
          name: "delete",
          description:
            "Delete operation to delete or purge a replication protected item. This operation will force delete the replication protected item. Use the remove operation on replication protected item to perform a clean disable replication for the item",
          options: [
            {
              name: "--fabric-name",
              description: "Fabric name",
              args: { name: "fabric-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--replicated-protected-item-name", "--name", "-n"],
              description: "Replication protected item name",
              args: { name: "replicated-protected-item-name" },
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
              name: ["--protection-container-name", "--protection-container"],
              description: "Protection container name",
              args: { name: "protection-container-name" },
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
              name: "--vault-name",
              description: "The name of the recovery services vault",
              args: { name: "vault-name" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "failover-commit",
          description:
            "Operation to commit the failover of the replication protected item",
          options: [
            {
              name: "--fabric-name",
              description: "Unique fabric name",
              args: { name: "fabric-name" },
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
              name: ["--protection-container-name", "--protection-container"],
              description: "Protection container name",
              args: { name: "protection-container-name" },
            },
            {
              name: ["--replicated-protected-item-name", "-n"],
              description: "Replication protected item name",
              args: { name: "replicated-protected-item-name" },
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
              name: "--vault-name",
              description: "The name of the recovery services vault",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "list",
          description:
            "List the list of ASR replication protected items in the protection container",
          options: [
            {
              name: "--fabric-name",
              description: "Fabric name",
              args: { name: "fabric-name" },
              isRequired: true,
            },
            {
              name: ["--protection-container-name", "--protection-container"],
              description: "Protection container name",
              args: { name: "protection-container-name" },
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
              name: "--vault-name",
              description: "The name of the recovery services vault",
              args: { name: "vault-name" },
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
          name: "planned-failover",
          description:
            "Operation to initiate a planned failover of the replication protected item",
          options: [
            {
              name: "--fabric-name",
              description: "Unique fabric name",
              args: { name: "fabric-name" },
            },
            {
              name: "--failover-direction",
              description: "Failover direction",
              args: { name: "failover-direction" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--replicated-protected-item-name", "--name", "-n"],
              description: "Replication protected item name",
              args: { name: "replicated-protected-item-name" },
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
              name: ["--protection-container-name", "--protection-container"],
              description: "Protection container name",
              args: { name: "protection-container-name" },
            },
            {
              name: ["--provider-specific-details", "--provider-details"],
              description:
                'Provider specific settings. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "provider-specific-details" },
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
              name: "--vault-name",
              description: "The name of the recovery services vault",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "remove",
          description:
            "The operation to disable replication on a replication protected item. This will also remove the item",
          options: [
            {
              name: ["--disable-protection-reason", "--disable-reason"],
              description:
                "Disable protection reason. It can have values NotSpecified/MigrationComplete",
              args: {
                name: "disable-protection-reason",
                suggestions: ["MigrationComplete", "NotSpecified"],
              },
            },
            {
              name: "--fabric-name",
              description: "Fabric name",
              args: { name: "fabric-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--replicated-protected-item-name", "--name", "-n"],
              description: "Replication protected item name",
              args: { name: "replicated-protected-item-name" },
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
              name: ["--protection-container-name", "--protection-container"],
              description: "Protection container name",
              args: { name: "protection-container-name" },
            },
            {
              name: ["--replication-provider-input", "--provider-input"],
              description:
                'Replication provider specific input. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "replication-provider-input" },
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
              name: "--vault-name",
              description: "The name of the recovery services vault",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "reprotect",
          description:
            "Operation to reprotect or reverse replicate a failed over replication protected item",
          options: [
            {
              name: "--fabric-name",
              description: "Unique fabric name",
              args: { name: "fabric-name" },
            },
            {
              name: "--failover-direction",
              description: "Failover direction",
              args: { name: "failover-direction" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--replicated-protected-item-name", "--name", "-n"],
              description: "Replication protected item name",
              args: { name: "replicated-protected-item-name" },
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
              name: ["--protection-container-name", "--protection-container"],
              description: "Protection container name",
              args: { name: "protection-container-name" },
            },
            {
              name: ["--provider-specific-details", "--provider-details"],
              description:
                'Provider specific reverse replication input. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "provider-specific-details" },
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
              name: "--vault-name",
              description: "The name of the recovery services vault",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "show",
          description: "Get the details of an ASR replication protected item",
          options: [
            {
              name: "--fabric-name",
              description: "Fabric unique name",
              args: { name: "fabric-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--replicated-protected-item-name", "--name", "-n"],
              description: "Replication protected item name",
              args: { name: "replicated-protected-item-name" },
            },
            {
              name: ["--protection-container-name", "--protection-container"],
              description: "Protection container name",
              args: { name: "protection-container-name" },
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
              name: "--vault-name",
              description: "The name of the recovery services vault",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "unplanned-failover",
          description:
            "Operation to initiate a failover of the replication protected item",
          options: [
            {
              name: "--fabric-name",
              description: "Unique fabric name",
              args: { name: "fabric-name" },
            },
            {
              name: "--failover-direction",
              description: "Failover direction",
              args: { name: "failover-direction" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--replicated-protected-item-name", "--name", "-n"],
              description: "Replication protected item name",
              args: { name: "replicated-protected-item-name" },
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
              name: ["--protection-container-name", "--protection-container"],
              description: "Protection container name",
              args: { name: "protection-container-name" },
            },
            {
              name: ["--provider-specific-details", "--provider-details"],
              description:
                'Provider specific settings. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "provider-specific-details" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--source-site-operations",
              description: "Source site operations status",
              args: { name: "source-site-operations" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--vault-name",
              description: "The name of the recovery services vault",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "update",
          description:
            "Update operation to create an ASR replication protected item (Enable replication)",
          options: [
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: "--fabric-name",
              description: "Fabric unique name",
              args: { name: "fabric-name" },
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
              name: ["--replicated-protected-item-name", "--name", "-n"],
              description: "Replication protected item name",
              args: { name: "replicated-protected-item-name" },
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
              name: "--policy-id",
              description: "The Policy Id",
              args: { name: "policy-id" },
            },
            {
              name: "--protectable-item-id",
              description: "The protectable item Id",
              args: { name: "protectable-item-id" },
            },
            {
              name: ["--protection-container-name", "--protection-container"],
              description: "Protection container name",
              args: { name: "protection-container-name" },
            },
            {
              name: ["--provider-specific-details", "--provider-details"],
              description:
                'The ReplicationProviderInput. For HyperVReplicaAzure provider, it will be AzureEnableProtectionInput object. For San provider, it will be SanEnableProtectionInput object. For HyperVReplicaAzure provider, it can be null. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "provider-specific-details" },
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
              name: "--vault-name",
              description: "The name of the recovery services vault",
              args: { name: "vault-name" },
            },
          ],
        },
      ],
    },
    {
      name: "protection-container",
      description: "Manage Protection Container",
      subcommands: [
        {
          name: "create",
          description: "Create to create a protection container",
          options: [
            {
              name: "--fabric-name",
              description: "Unique fabric ARM name",
              args: { name: "fabric-name" },
              isRequired: true,
            },
            {
              name: ["--protection-container-name", "--name", "-n"],
              description: "Unique protection container ARM name",
              args: { name: "protection-container-name" },
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
              name: "--vault-name",
              description: "The name of the recovery services vault",
              args: { name: "vault-name" },
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
              name: ["--provider-specific-input", "--provider-input"],
              description:
                'Provider specific inputs for container creation. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "provider-specific-input" },
            },
          ],
        },
        {
          name: "list",
          description: "List the protection containers in the specified fabric",
          options: [
            {
              name: "--fabric-name",
              description: "Fabric name",
              args: { name: "fabric-name" },
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
              name: "--vault-name",
              description: "The name of the recovery services vault",
              args: { name: "vault-name" },
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
          name: "remove",
          description: "Operation to remove a protection container",
          options: [
            {
              name: "--fabric-name",
              description: "Unique fabric ARM name",
              args: { name: "fabric-name" },
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
              name: ["--protection-container-name", "-n"],
              description: "The name of the protection container",
              args: { name: "protection-container-name" },
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
              name: "--vault-name",
              description: "The name of the recovery services vault",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "show",
          description: "Get the details of a protection container",
          options: [
            {
              name: "--fabric-name",
              description: "Fabric name",
              args: { name: "fabric-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--protection-container-name", "--name", "-n"],
              description: "Protection container name",
              args: { name: "protection-container-name" },
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
              name: "--vault-name",
              description: "The name of the recovery services vault",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "switch-protection",
          description:
            "Operation to switch protection from one container to another or one replication provider to another",
          options: [
            {
              name: "--fabric-name",
              description: "Unique fabric name",
              args: { name: "fabric-name" },
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
              name: ["--replication-protected-item-name", "--protected-item"],
              description: "The unique replication protected item name",
              args: { name: "replication-protected-item-name" },
            },
            {
              name: ["--protection-container-name", "-n"],
              description: "The name of the protection container",
              args: { name: "protection-container-name" },
            },
            {
              name: ["--provider-specific-details", "--provider-details"],
              description:
                'Provider specific switch protection input. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "provider-specific-details" },
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
              name: "--vault-name",
              description: "The name of the recovery services vault",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "update",
          description: "Update to create a protection container",
          options: [
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: "--fabric-name",
              description: "Fabric name",
              args: { name: "fabric-name" },
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
              name: ["--protection-container-name", "--name", "-n"],
              description: "Protection container name",
              args: { name: "protection-container-name" },
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
              name: ["--provider-specific-input", "--provider-input"],
              description:
                'Provider specific inputs for container creation. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "provider-specific-input" },
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
              name: "--vault-name",
              description: "The name of the recovery services vault",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "mapping",
          description:
            "Manage a protection container mapping for a protection container",
          subcommands: [
            {
              name: "create",
              description:
                "Create operation to create a protection container mapping",
              options: [
                {
                  name: "--fabric-name",
                  description: "Fabric name",
                  args: { name: "fabric-name" },
                  isRequired: true,
                },
                {
                  name: ["--mapping-name", "--name", "-n"],
                  description: "Protection container mapping name",
                  args: { name: "mapping-name" },
                  isRequired: true,
                },
                {
                  name: [
                    "--protection-container-name",
                    "--protection-container",
                  ],
                  description: "Protection container name",
                  args: { name: "protection-container-name" },
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
                  name: "--vault-name",
                  description: "The name of the recovery services vault",
                  args: { name: "vault-name" },
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
                  name: "--policy-id",
                  description: "Applicable policy",
                  args: { name: "policy-id" },
                },
                {
                  name: ["--provider-specific-input", "--provider-input"],
                  description:
                    'Provider specific input for pairing. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "provider-specific-input" },
                },
                {
                  name: [
                    "--target-protection-container-id",
                    "--target-container",
                  ],
                  description: "The target unique protection container name",
                  args: { name: "target-protection-container-id" },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete operation to purge(force delete) a protection container mapping",
              options: [
                {
                  name: "--fabric-name",
                  description: "Fabric name",
                  args: { name: "fabric-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--mapping-name", "--name", "-n"],
                  description: "Protection container mapping name",
                  args: { name: "mapping-name" },
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
                  name: [
                    "--protection-container-name",
                    "--protection-container",
                  ],
                  description: "Protection container name",
                  args: { name: "protection-container-name" },
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
                  name: "--vault-name",
                  description: "The name of the recovery services vault",
                  args: { name: "vault-name" },
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
                "List the protection container mappings for a protection container",
              options: [
                {
                  name: "--fabric-name",
                  description: "Fabric name",
                  args: { name: "fabric-name" },
                  isRequired: true,
                },
                {
                  name: [
                    "--protection-container-name",
                    "--protection-container",
                  ],
                  description: "Protection container name",
                  args: { name: "protection-container-name" },
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
                  name: "--vault-name",
                  description: "The name of the recovery services vault",
                  args: { name: "vault-name" },
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
              name: "remove",
              description:
                "The operation to delete or remove a protection container mapping",
              options: [
                {
                  name: "--fabric-name",
                  description: "Fabric name",
                  args: { name: "fabric-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--mapping-name", "--name", "-n"],
                  description: "Protection container mapping name",
                  args: { name: "mapping-name" },
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
                  name: [
                    "--protection-container-name",
                    "--protection-container",
                  ],
                  description: "Protection container name",
                  args: { name: "protection-container-name" },
                },
                {
                  name: ["--provider-specific-input", "--provider-input"],
                  description:
                    'Provider specific input for unpairing. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "provider-specific-input" },
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
                  name: "--vault-name",
                  description: "The name of the recovery services vault",
                  args: { name: "vault-name" },
                },
              ],
            },
            {
              name: "show",
              description: "Get the details of a protection container mapping",
              options: [
                {
                  name: "--fabric-name",
                  description: "Fabric name",
                  args: { name: "fabric-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--mapping-name", "--name", "-n"],
                  description: "Protection Container mapping name",
                  args: { name: "mapping-name" },
                },
                {
                  name: [
                    "--protection-container-name",
                    "--protection-container",
                  ],
                  description: "Protection container name",
                  args: { name: "protection-container-name" },
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
                  name: "--vault-name",
                  description: "The name of the recovery services vault",
                  args: { name: "vault-name" },
                },
              ],
            },
            {
              name: "update",
              description:
                "Update operation to create a protection container mapping",
              options: [
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add" },
                },
                {
                  name: "--fabric-name",
                  description: "Fabric name",
                  args: { name: "fabric-name" },
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
                  name: ["--mapping-name", "--name", "-n"],
                  description: "Protection Container mapping name",
                  args: { name: "mapping-name" },
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
                  name: "--policy-id",
                  description: "Applicable policy",
                  args: { name: "policy-id" },
                },
                {
                  name: [
                    "--protection-container-name",
                    "--protection-container",
                  ],
                  description: "Protection container name",
                  args: { name: "protection-container-name" },
                },
                {
                  name: ["--provider-specific-input", "--provider-input"],
                  description:
                    'Provider specific input for pairing. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "provider-specific-input" },
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
                  name: [
                    "--target-protection-container-id",
                    "--target-container",
                  ],
                  description: "The target unique protection container name",
                  args: { name: "target-protection-container-id" },
                },
                {
                  name: "--vault-name",
                  description: "The name of the recovery services vault",
                  args: { name: "vault-name" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "recovery-plan",
      description: "Manage the recovery plans in the vault",
      subcommands: [
        {
          name: "create",
          description: "Create operation to create a recovery plan",
          options: [
            {
              name: "--groups",
              description:
                'The recovery plan groups. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "groups" },
              isRequired: true,
            },
            {
              name: ["--recovery-plan-name", "--name", "-n"],
              description: "Recovery plan name",
              args: { name: "recovery-plan-name" },
              isRequired: true,
            },
            {
              name: "--primary-fabric-id",
              description: "The primary fabric Id",
              args: { name: "primary-fabric-id" },
              isRequired: true,
            },
            {
              name: "--recovery-fabric-id",
              description: "The recovery fabric Id",
              args: { name: "recovery-fabric-id" },
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
              name: "--vault-name",
              description: "The name of the recovery services vault",
              args: { name: "vault-name" },
              isRequired: true,
            },
            {
              name: ["--failover-deployment-model", "--failover-deploy-model"],
              description: "The failover deployment model",
              args: {
                name: "failover-deployment-model",
                suggestions: ["Classic", "NotApplicable", "ResourceManager"],
              },
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
              name: ["--provider-specific-input", "--provider-input"],
              description:
                'The provider specific input. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "provider-specific-input" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a recovery plan",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--recovery-plan-name", "--name", "-n"],
              description: "Recovery plan name",
              args: { name: "recovery-plan-name" },
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
              name: "--vault-name",
              description: "The name of the recovery services vault",
              args: { name: "vault-name" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "List the recovery plans in the vault",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--vault-name",
              description: "The name of the recovery services vault",
              args: { name: "vault-name" },
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
          description: "Get the details of the recovery plan",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--recovery-plan-name", "--name", "-n"],
              description: "Name of the recovery plan",
              args: { name: "recovery-plan-name" },
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
              name: "--vault-name",
              description: "The name of the recovery services vault",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "update",
          description: "Update operation to create a recovery plan",
          options: [
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: ["--failover-deployment-model", "--failover-deploy-model"],
              description: "The failover deployment model",
              args: {
                name: "failover-deployment-model",
                suggestions: ["Classic", "NotApplicable", "ResourceManager"],
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
              name: "--groups",
              description:
                'The recovery plan groups. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "groups" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--recovery-plan-name", "--name", "-n"],
              description: "Name of the recovery plan",
              args: { name: "recovery-plan-name" },
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
              name: "--primary-fabric-id",
              description: "The primary fabric Id",
              args: { name: "primary-fabric-id" },
            },
            {
              name: ["--provider-specific-input", "--provider-input"],
              description:
                'The provider specific input. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "provider-specific-input" },
            },
            {
              name: "--recovery-fabric-id",
              description: "The recovery fabric Id",
              args: { name: "recovery-fabric-id" },
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
              name: "--vault-name",
              description: "The name of the recovery services vault",
              args: { name: "vault-name" },
            },
          ],
        },
      ],
    },
    {
      name: "recovery-services-provider",
      description: "Manage fabric recovery-services-provider",
      subcommands: [
        {
          name: "list",
          description:
            "List the registered recovery services providers for the specified fabric",
          options: [
            {
              name: "--fabric-name",
              description: "Fabric name",
              args: { name: "fabric-name" },
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
              name: "--vault-name",
              description: "The name of the recovery services vault",
              args: { name: "vault-name" },
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
      ],
    },
    {
      name: "replication-eligibility",
      description: "Manage Replication Eligibility",
      subcommands: [
        {
          name: "list",
          description:
            "List whether a given VM can be protected or not in which case returns list of errors",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--virtual-machine-name",
              description: "Virtual Machine name",
              args: { name: "virtual-machine-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show-default",
          description:
            "Get whether a given VM can be protected or not in which case returns list of errors",
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
              name: "--virtual-machine-name",
              description: "Virtual Machine name",
              args: { name: "virtual-machine-name" },
            },
          ],
        },
      ],
    },
    {
      name: "vault",
      description: "Manage Vault",
      subcommands: [
        {
          name: "list-appliance",
          description:
            "List the list of Azure Site Recovery appliances for the vault",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--vault-name",
              description: "The name of the recovery services vault",
              args: { name: "vault-name" },
              isRequired: true,
            },
            {
              name: "--filter",
              description: "OData filter options",
              args: { name: "filter" },
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
          name: "list-migration-item",
          description:
            "Get the list of ASR replication migration items in the vault",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--vault-name",
              description: "The name of the recovery services vault",
              args: { name: "vault-name" },
              isRequired: true,
            },
            {
              name: "--filter",
              description: "OData filter options",
              args: { name: "filter" },
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
            {
              name: "--skip-token",
              description: "The pagination token",
              args: { name: "skip-token" },
            },
            {
              name: "--take-token",
              description: "The page size",
              args: { name: "take-token" },
            },
          ],
        },
        {
          name: "list-network",
          description: "List the networks available in a vault",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--vault-name",
              description: "The name of the recovery services vault",
              args: { name: "vault-name" },
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
          name: "list-network-mapping",
          description: "List all ASR network mappings in the vault",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--vault-name",
              description: "The name of the recovery services vault",
              args: { name: "vault-name" },
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
          name: "list-protected-item",
          description:
            "List the list of ASR replication protected items in the vault",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--vault-name",
              description: "The name of the recovery services vault",
              args: { name: "vault-name" },
              isRequired: true,
            },
            {
              name: "--filter",
              description: "OData filter options",
              args: { name: "filter" },
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
            {
              name: "--skip-token",
              description:
                'The pagination token. Possible values: "FabricId" or "FabricId_CloudId" or null',
              args: { name: "skip-token" },
            },
          ],
        },
        {
          name: "list-protection-container",
          description: "List the protection containers in a vault",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--vault-name",
              description: "The name of the recovery services vault",
              args: { name: "vault-name" },
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
          name: "list-protection-container-mapping",
          description: "List the protection container mappings in the vault",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--vault-name",
              description: "The name of the recovery services vault",
              args: { name: "vault-name" },
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
          name: "list-recovery-services-provider",
          description:
            "List the registered recovery services providers in the vault",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--vault-name",
              description: "The name of the recovery services vault",
              args: { name: "vault-name" },
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
          name: "list-storage-classification",
          description: "List the storage classifications in the vault",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--vault-name",
              description: "The name of the recovery services vault",
              args: { name: "vault-name" },
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
          name: "list-storage-classification-mapping",
          description: "List the storage classification mappings in the vault",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--vault-name",
              description: "The name of the recovery services vault",
              args: { name: "vault-name" },
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
          name: "list-v-center",
          description: "List the vCenter servers registered in the vault",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--vault-name",
              description: "The name of the recovery services vault",
              args: { name: "vault-name" },
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
          name: "show-supported-operating-system",
          description: "Show the supported operating system for the vault",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--instance-type",
              description: "The instance type",
              args: { name: "instance-type" },
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
              name: "--vault-name",
              description: "The name of the recovery services vault",
              args: { name: "vault-name" },
            },
          ],
        },
        {
          name: "health",
          description: "Manage the health details of the vault",
          subcommands: [
            {
              name: "refresh-default",
              description: "Refresh default for the health of the vault",
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
                  name: "--vault-name",
                  description: "The name of the recovery services vault",
                  args: { name: "vault-name" },
                },
              ],
            },
            {
              name: "show",
              description: "Get the health details of the vault",
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
                  name: "--vault-name",
                  description: "The name of the recovery services vault",
                  args: { name: "vault-name" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "vmware-site",
      description: "Manage vmware-site",
      subcommands: [
        {
          name: "machine",
          description: "Manage vmware-site machines",
          subcommands: [
            {
              name: "list",
              description: "List to get machine",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--site-name",
                  description: "Site name",
                  args: { name: "site-name" },
                  isRequired: true,
                },
                {
                  name: "--continuation-token",
                  description: "Optional parameter for continuation token",
                  args: { name: "continuation-token" },
                },
                {
                  name: "--filter",
                  description: "Filter",
                  args: { name: "filter" },
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
                {
                  name: "--top",
                  description: "List a set number of machines",
                  args: { name: "top" },
                },
                {
                  name: "--total-record-count",
                  description: "Total count of machines in the given site",
                  args: { name: "total-record-count" },
                },
              ],
            },
          ],
        },
        {
          name: "run-as-account",
          description: "Manage vmware-site run-as-account",
          subcommands: [
            {
              name: "list",
              description: "List to get run as accounts",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--site-name",
                  description: "Site name",
                  args: { name: "site-name" },
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
          ],
        },
      ],
    },
  ],
};

export default completion;
