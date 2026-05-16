const completion: Fig.Spec = {
  name: "nginx",
  description: "Manage NGINX deployment resources",
  subcommands: [
    {
      name: "deployment",
      description: "Manage NGINX deployment resources",
      subcommands: [
        {
          name: "create",
          description: "Create an NGINX for Azure resource",
          options: [
            {
              name: ["--deployment-name", "--name", "-n"],
              description: "The name of targeted Nginx deployment",
              args: { name: "deployment-name" },
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
              name: "--enable-diagnostics",
              description:
                "Boolean to enable or disable diagnostics on your deployment",
              args: {
                name: "enable-diagnostics",
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
              name: "--identity",
              description:
                'Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "identity" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--logging",
              description:
                'Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "logging" },
            },
            {
              name: "--managed-resource-group",
              description:
                "The managed resource group to deploy VNet injection related network resources",
              args: { name: "managed-resource-group" },
            },
            {
              name: "--network-profile",
              description:
                'Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "network-profile" },
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
              name: "--provisioning-state",
              description: "State of the deployment",
              args: {
                name: "provisioning-state",
                suggestions: [
                  "Accepted",
                  "Canceled",
                  "Creating",
                  "Deleted",
                  "Deleting",
                  "Failed",
                  "NotSpecified",
                  "Succeeded",
                  "Updating",
                ],
              },
            },
            {
              name: "--sku",
              description:
                'Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "sku" },
            },
            {
              name: "--tags",
              description:
                'Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tags" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete an Nginx deployment",
          options: [
            {
              name: ["--deployment-name", "--name", "-n"],
              description: "The name of targeted Nginx deployment",
              args: { name: "deployment-name" },
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
          description: "List of Nginx deployments",
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
          description: "Get the properties of a specific Nginx Deployment",
          options: [
            {
              name: ["--deployment-name", "--name", "-n"],
              description: "The name of targeted Nginx deployment",
              args: { name: "deployment-name" },
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
          description: "Update an Nginx deployment",
          options: [
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: ["--deployment-name", "--name", "-n"],
              description: "The name of targeted Nginx deployment",
              args: { name: "deployment-name" },
            },
            {
              name: "--enable-diagnostics",
              description:
                "Boolean to enable or disable diagnostics on your deployment",
              args: {
                name: "enable-diagnostics",
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
              name: "--identity",
              description:
                'Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "identity" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--logging",
              description:
                'Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "logging" },
            },
            {
              name: "--managed-resource-group",
              description:
                "The managed resource group to deploy VNet injection related network resources",
              args: { name: "managed-resource-group" },
            },
            {
              name: "--network-profile",
              description:
                'Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "network-profile" },
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
              name: "--provisioning-state",
              description: "State of the deployment",
              args: {
                name: "provisioning-state",
                suggestions: [
                  "Accepted",
                  "Canceled",
                  "Creating",
                  "Deleted",
                  "Deleting",
                  "Failed",
                  "NotSpecified",
                  "Succeeded",
                  "Updating",
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
              name: "--sku",
              description:
                'Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
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
                'Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
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
              name: ["--deployment-name", "--name", "-n"],
              description: "The name of targeted Nginx deployment",
              args: { name: "deployment-name" },
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
          name: "certificate",
          description: "Manage NGINX certificate resources",
          subcommands: [
            {
              name: "create",
              description: "Create a certificate for an NGINX deployment",
              options: [
                {
                  name: ["--certificate-name", "--name", "-n"],
                  description: "The name of certificate",
                  args: { name: "certificate-name" },
                  isRequired: true,
                },
                {
                  name: "--deployment-name",
                  description: "The name of targeted Nginx deployment",
                  args: { name: "deployment-name" },
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
                  name: "--certificate-path",
                  description:
                    "This path must match one or more ssl_certificate directive file argument in your Nginx configuration. This path must be unique between certificates within the same deployment",
                  args: { name: "certificate-path" },
                },
                {
                  name: "--key-path",
                  description:
                    "This path must match one or more ssl_certificate_key directive file argument in your Nginx configuration. This path must be unique between certificates within the same deployment",
                  args: { name: "key-path" },
                },
                {
                  name: "--key-vault-secret-id",
                  description: "The secret id to the certificate in KeyVault",
                  args: { name: "key-vault-secret-id" },
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
                  name: "--provisioning-state",
                  description: "State of the certificate deployment",
                  args: {
                    name: "provisioning-state",
                    suggestions: [
                      "Accepted",
                      "Canceled",
                      "Creating",
                      "Deleted",
                      "Deleting",
                      "Failed",
                      "NotSpecified",
                      "Succeeded",
                      "Updating",
                    ],
                  },
                },
                {
                  name: "--tags",
                  description:
                    'Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "tags" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete an Nginx deployment certificate",
              options: [
                {
                  name: ["--certificate-name", "--name", "-n"],
                  description: "The name of certificate",
                  args: { name: "certificate-name" },
                },
                {
                  name: "--deployment-name",
                  description: "The name of targeted Nginx deployment",
                  args: { name: "deployment-name" },
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
                "List all certificates under the specified deployment and resource group",
              options: [
                {
                  name: "--deployment-name",
                  description: "The name of targeted Nginx deployment",
                  args: { name: "deployment-name" },
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
              description: "Get the properties of a specific Nginx certificate",
              options: [
                {
                  name: ["--certificate-name", "--name", "-n"],
                  description: "The name of certificate",
                  args: { name: "certificate-name" },
                },
                {
                  name: "--deployment-name",
                  description: "The name of targeted Nginx deployment",
                  args: { name: "deployment-name" },
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
              description: "Update an Nginx deployment certificate",
              options: [
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add" },
                },
                {
                  name: ["--certificate-name", "--name", "-n"],
                  description: "The name of certificate",
                  args: { name: "certificate-name" },
                },
                {
                  name: "--certificate-path",
                  description:
                    "This path must match one or more ssl_certificate directive file argument in your Nginx configuration. This path must be unique between certificates within the same deployment",
                  args: { name: "certificate-path" },
                },
                {
                  name: "--deployment-name",
                  description: "The name of targeted Nginx deployment",
                  args: { name: "deployment-name" },
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
                  name: "--key-path",
                  description:
                    "This path must match one or more ssl_certificate_key directive file argument in your Nginx configuration. This path must be unique between certificates within the same deployment",
                  args: { name: "key-path" },
                },
                {
                  name: "--key-vault-secret-id",
                  description: "The secret id to the certificate in KeyVault",
                  args: { name: "key-vault-secret-id" },
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
                  name: "--provisioning-state",
                  description: "State of the certificate deployment",
                  args: {
                    name: "provisioning-state",
                    suggestions: [
                      "Accepted",
                      "Canceled",
                      "Creating",
                      "Deleted",
                      "Deleting",
                      "Failed",
                      "NotSpecified",
                      "Succeeded",
                      "Updating",
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
                    'Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
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
                  name: ["--certificate-name", "--name", "-n"],
                  description: "The name of certificate",
                  args: { name: "certificate-name" },
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
                  name: "--deployment-name",
                  description: "The name of targeted Nginx deployment",
                  args: { name: "deployment-name" },
                },
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
          name: "configuration",
          description: "Manage NGINX configuration resources",
          subcommands: [
            {
              name: "create",
              description: "Create a configuration for an NGINX deployment",
              options: [
                {
                  name: ["--configuration-name", "--name", "-n"],
                  description:
                    "The name of configuration, only 'default' is supported value due to the singleton of Nginx conf",
                  args: { name: "configuration-name" },
                  isRequired: true,
                },
                {
                  name: "--deployment-name",
                  description: "The name of targeted Nginx deployment",
                  args: { name: "deployment-name" },
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
                  name: "--files",
                  description:
                    'Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "files" },
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
                  name: "--package",
                  description:
                    'Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "package" },
                },
                {
                  name: "--protected-files",
                  description:
                    'Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "protected-files" },
                },
                {
                  name: "--provisioning-state",
                  description: "State of the configuration deployment",
                  args: {
                    name: "provisioning-state",
                    suggestions: [
                      "Accepted",
                      "Canceled",
                      "Creating",
                      "Deleted",
                      "Deleting",
                      "Failed",
                      "NotSpecified",
                      "Succeeded",
                      "Updating",
                    ],
                  },
                },
                {
                  name: "--root-file",
                  description: "Aligns with your Nginx configuration structure",
                  args: { name: "root-file" },
                },
                {
                  name: "--tags",
                  description:
                    'Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "tags" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete an Nginx configuration",
              options: [
                {
                  name: ["--configuration-name", "--name", "-n"],
                  description:
                    "The name of configuration, only 'default' is supported value due to the singleton of Nginx conf",
                  args: { name: "configuration-name" },
                },
                {
                  name: "--deployment-name",
                  description: "The name of targeted Nginx deployment",
                  args: { name: "deployment-name" },
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
                "List all configurations under the specified deployment and resource group",
              options: [
                {
                  name: "--deployment-name",
                  description: "The name of targeted Nginx deployment",
                  args: { name: "deployment-name" },
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
                "Get the properties of a specific Nginx configuration",
              options: [
                {
                  name: ["--configuration-name", "--name", "-n"],
                  description:
                    "The name of configuration, only 'default' is supported value due to the singleton of Nginx conf",
                  args: { name: "configuration-name" },
                },
                {
                  name: "--deployment-name",
                  description: "The name of targeted Nginx deployment",
                  args: { name: "deployment-name" },
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
              description: "Update an Nginx configuration",
              options: [
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add" },
                },
                {
                  name: ["--configuration-name", "--name", "-n"],
                  description:
                    "The name of configuration, only 'default' is supported value due to the singleton of Nginx conf",
                  args: { name: "configuration-name" },
                },
                {
                  name: "--deployment-name",
                  description: "The name of targeted Nginx deployment",
                  args: { name: "deployment-name" },
                },
                {
                  name: "--files",
                  description:
                    'Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "files" },
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
                  description:
                    "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
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
                  name: "--package",
                  description:
                    'Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "package" },
                },
                {
                  name: "--protected-files",
                  description:
                    'Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "protected-files" },
                },
                {
                  name: "--provisioning-state",
                  description: "State of the configuration deployment",
                  args: {
                    name: "provisioning-state",
                    suggestions: [
                      "Accepted",
                      "Canceled",
                      "Creating",
                      "Deleted",
                      "Deleting",
                      "Failed",
                      "NotSpecified",
                      "Succeeded",
                      "Updating",
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
                  name: "--root-file",
                  description: "Aligns with your Nginx configuration structure",
                  args: { name: "root-file" },
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
                    'Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
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
                  name: ["--configuration-name", "--name", "-n"],
                  description:
                    "The name of configuration, only 'default' is supported value due to the singleton of Nginx conf",
                  args: { name: "configuration-name" },
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
                  name: "--deployment-name",
                  description: "The name of targeted Nginx deployment",
                  args: { name: "deployment-name" },
                },
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
      ],
    },
  ],
};

export default completion;
