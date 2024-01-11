const completion: Fig.Spec = {
  name: "load",
  description: "Manage Azure Load Testing resources",
  subcommands: [
    {
      name: "create",
      description: "Create an Azure Load Testing resource",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the new Azure Load Testing resource",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=",
          args: { name: "resource-group" },
          isRequired: true,
        },
        {
          name: "--encryption-identity",
          description:
            "The managed identity for Customer-managed key settings defining which identity should be used to authenticate to Key Vault",
          args: { name: "encryption-identity" },
        },
        {
          name: "--encryption-key",
          description:
            "Encryption key URL, versioned. For example, https://contosovault.vault.azure.net/keys/contosokek/562a4bb76b524a1493a6afe8e536ee78",
          args: { name: "encryption-key" },
        },
        {
          name: "--identity-type",
          description: "Type of managed service identity",
          args: {
            name: "identity-type",
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
          name: ["--location", "-l"],
          description:
            "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=. When not specified, the location of the resource group will be used",
          args: { name: "location" },
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
            'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
          args: { name: "tags" },
        },
        {
          name: "--user-assigned",
          description:
            "The list of user-assigned identities associated with the resource. The user-assigned identity will be ARM resource id. For example, a list of user-assigned identities would look like \"{'/subscriptions/ abcdef01-2345-6789-0abc-def012345678 /resourcegroups/sample-rg/providers/microsoft.managedidentity/userassignedidentities/identity1','/subscriptions/ abcdef01-2345-6789-0abc-def012345678 /resourcegroups/test-rg/providers/microsoft.managedidentity/userassignedidentities/identity2'}\" Support shorthand-syntax, json-file and yaml-file. Try \"??\" to show more",
          args: { name: "user-assigned" },
        },
      ],
    },
    {
      name: "delete",
      description: "Delete an Azure Load Testing resource",
      options: [
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: ["--name", "-n"],
          description: "Name of the Azure Load Testing resource",
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
            "Name of resource group. You can configure the default group using az configure --defaults group=",
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
      description: "Lists Azure Load Testing resources",
      options: [
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=",
          args: { name: "resource-group" },
        },
      ],
    },
    {
      name: "show",
      description:
        "Show the details of one or more Azure Load Testing resources",
      options: [
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: ["--name", "-n"],
          description: "Name of the Azure Load Testing resource",
          args: { name: "name" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=",
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
      description: "Update an Azure Load Testing resource",
      options: [
        {
          name: "--encryption-identity",
          description:
            "The managed identity for Customer-managed key settings defining which identity should be used to authenticate to Key Vault",
          args: { name: "encryption-identity" },
        },
        {
          name: "--encryption-key",
          description:
            "Encryption key URL, versioned. For example, https://contosovault.vault.azure.net/keys/contosokek/562a4bb76b524a1493a6afe8e536ee78",
          args: { name: "encryption-key" },
        },
        {
          name: "--identity-type",
          description: "Type of managed service identity",
          args: {
            name: "identity-type",
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
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: ["--name", "-n"],
          description: "Name of the Azure Load Testing resource",
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
            "Name of resource group. You can configure the default group using az configure --defaults group=",
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
            'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
          args: { name: "tags" },
        },
        {
          name: "--user-assigned",
          description:
            'The list of user-assigned identities associated with the resource. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
          args: { name: "user-assigned" },
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
          description: "Name of the Azure Load Testing resource",
          args: { name: "name" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=",
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
      name: "test",
      description:
        "Command group to manage load tests.\n\n\t\tCommand group to manage load test with create, update, delete, list, etc",
      subcommands: [
        {
          name: "create",
          description: "Create a new load test",
          options: [
            {
              name: ["--load-test-resource", "--name", "-n"],
              description:
                "Name or ARM resource ID of the Load Testing resource",
              args: { name: "load-test-resource" },
              isRequired: true,
            },
            {
              name: ["--test-id", "-t"],
              description: "Test ID of the load test",
              args: { name: "test-id" },
              isRequired: true,
            },
            {
              name: "--certificate",
              description:
                "A single certificate in 'key[=value]' format. The certificate should be stored in Azure Key Vault in PFX format, and the certificate identifier should be provided as the value",
              args: { name: "certificate" },
            },
            {
              name: "--description",
              description: "Description of the load test",
              args: { name: "description" },
            },
            {
              name: "--display-name",
              description: "Display name of the load test",
              args: { name: "display-name" },
            },
            {
              name: "--engine-instances",
              description:
                "Number of engine instances on which the test should run",
              args: { name: "engine-instances" },
            },
            {
              name: "--env",
              description:
                "Space-separated environment variables: key[=value] [key[=value] ...]",
              args: { name: "env" },
            },
            {
              name: "--keyvault-reference-id",
              description:
                "The identity that will be used to access the key vault",
              args: { name: "keyvault-reference-id" },
            },
            {
              name: "--load-test-config-file",
              description:
                "Path to the load test config file. Refer https://learn.microsoft.com/azure/load-testing/reference-test-config-yaml",
              args: { name: "load-test-config-file" },
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
              name: "--secret",
              description:
                "Space-separated secrets: key[=value] [key[=value] ...]. Secrets should be stored in Azure Key Vault, and the secret identifier should be provided as the value",
              args: { name: "secret" },
            },
            {
              name: "--split-csv",
              description: "Split CSV files evenly among engine instances",
              args: { name: "split-csv" },
            },
            {
              name: "--subnet-id",
              description:
                "Resource ID of the subnet to use for private load test",
              args: { name: "subnet-id" },
            },
            {
              name: "--test-plan",
              description: "Path to the JMeter script",
              args: { name: "test-plan" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete an existing load test",
          options: [
            {
              name: ["--load-test-resource", "--name", "-n"],
              description:
                "Name or ARM resource ID of the Load Testing resource",
              args: { name: "load-test-resource" },
              isRequired: true,
            },
            {
              name: ["--test-id", "-t"],
              description: "Test ID of the load test",
              args: { name: "test-id" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "download-files",
          description: "Download files of an existing load test",
          options: [
            {
              name: ["--load-test-resource", "--name", "-n"],
              description:
                "Name or ARM resource ID of the Load Testing resource",
              args: { name: "load-test-resource" },
              isRequired: true,
            },
            {
              name: "--path",
              description: "Path of the directory to download files",
              args: { name: "path" },
              isRequired: true,
            },
            {
              name: ["--test-id", "-t"],
              description: "Test ID of the load test",
              args: { name: "test-id" },
              isRequired: true,
            },
            {
              name: "--force",
              description:
                "Force run the command. This will create the directory to download files if it does not exist",
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
          description: "List all tests in the given load test resource",
          options: [
            {
              name: ["--load-test-resource", "--name", "-n"],
              description:
                "Name or ARM resource ID of the Load Testing resource",
              args: { name: "load-test-resource" },
              isRequired: true,
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
          description: "Show details of test",
          options: [
            {
              name: ["--load-test-resource", "--name", "-n"],
              description:
                "Name or ARM resource ID of the Load Testing resource",
              args: { name: "load-test-resource" },
              isRequired: true,
            },
            {
              name: ["--test-id", "-t"],
              description: "Test ID of the load test",
              args: { name: "test-id" },
              isRequired: true,
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
          description: "Update an existing load test",
          options: [
            {
              name: ["--load-test-resource", "--name", "-n"],
              description:
                "Name or ARM resource ID of the Load Testing resource",
              args: { name: "load-test-resource" },
              isRequired: true,
            },
            {
              name: ["--test-id", "-t"],
              description: "Test ID of the load test",
              args: { name: "test-id" },
              isRequired: true,
            },
            {
              name: "--certificate",
              description:
                "A single certificate in 'key[=value]' format. The certificate should be stored in Azure Key Vault in PFX format, and the certificate identifier should be provided as the value.Use \"\" to clear existing certificate",
              args: { name: "certificate" },
            },
            {
              name: "--description",
              description: "Description of the load test",
              args: { name: "description" },
            },
            {
              name: "--display-name",
              description: "Display name of the load test",
              args: { name: "display-name" },
            },
            {
              name: "--engine-instances",
              description:
                "Number of engine instances on which the test should run",
              args: { name: "engine-instances" },
            },
            {
              name: "--env",
              description:
                'Space-separated environment variables: key[=value] [key[=value] ...]. Use "" to clear existing environment variables',
              args: { name: "env" },
            },
            {
              name: "--keyvault-reference-id",
              description:
                "The identity that will be used to access the key vault. Provide null or None to use the system assigned identity of the load test resource",
              args: { name: "keyvault-reference-id" },
            },
            {
              name: "--load-test-config-file",
              description:
                "Path to the load test config file. Refer https://learn.microsoft.com/azure/load-testing/reference-test-config-yaml",
              args: { name: "load-test-config-file" },
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
              name: "--secret",
              description:
                'Space-separated secrets: key[=value] [key[=value] ...]. Secrets should be stored in Azure Key Vault, and the secret identifier should be provided as the value.Use "" to clear existing secrets',
              args: { name: "secret" },
            },
            {
              name: "--split-csv",
              description: "Split CSV files evenly among engine instances",
              args: { name: "split-csv" },
            },
            {
              name: "--subnet-id",
              description:
                "Resource ID of the subnet to use for private load test",
              args: { name: "subnet-id" },
            },
            {
              name: "--test-plan",
              description: "Path to the JMeter script",
              args: { name: "test-plan" },
            },
          ],
        },
        {
          name: "app-component",
          description:
            "Command group to manage app components.\n\n\t\tCommand group to manage load test app-components with add, list and remove",
          subcommands: [
            {
              name: "add",
              description: "Add an app component to a test",
              options: [
                {
                  name: "--app-component-id",
                  description:
                    "Fully qualified resource ID of the App Component. For example, subscriptions/{subId}/resourceGroups/{rg}/providers/Microsoft.LoadTestService/loadtests/{resName}",
                  args: { name: "app-component-id" },
                  isRequired: true,
                },
                {
                  name: "--app-component-name",
                  description:
                    "Name of the app component. Refer https://learn.microsoft.com/cli/azure/resource#az-resource-show",
                  args: { name: "app-component-name" },
                  isRequired: true,
                },
                {
                  name: "--app-component-type",
                  description:
                    "Type of resource of the app component. Refer https://learn.microsoft.com/cli/azure/resource#az-resource-show",
                  args: { name: "app-component-type" },
                  isRequired: true,
                },
                {
                  name: ["--load-test-resource", "--name", "-n"],
                  description:
                    "Name or ARM resource ID of the Load Testing resource",
                  args: { name: "load-test-resource" },
                  isRequired: true,
                },
                {
                  name: ["--test-id", "-t"],
                  description: "Test ID of the load test",
                  args: { name: "test-id" },
                  isRequired: true,
                },
                {
                  name: "--app-component-kind",
                  description:
                    "Kind of the app component. Refer https://learn.microsoft.com/cli/azure/resource#az-resource-show",
                  args: { name: "app-component-kind" },
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
              description: "List all app components for a test",
              options: [
                {
                  name: ["--load-test-resource", "--name", "-n"],
                  description:
                    "Name or ARM resource ID of the Load Testing resource",
                  args: { name: "load-test-resource" },
                  isRequired: true,
                },
                {
                  name: ["--test-id", "-t"],
                  description: "Test ID of the load test",
                  args: { name: "test-id" },
                  isRequired: true,
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
              name: "remove",
              description: "Remove the given app component from a test",
              options: [
                {
                  name: "--app-component-id",
                  description:
                    "Fully qualified resource ID of the App Component. For example, subscriptions/{subId}/resourceGroups/{rg}/providers/Microsoft.LoadTestService/loadtests/{resName}",
                  args: { name: "app-component-id" },
                  isRequired: true,
                },
                {
                  name: ["--load-test-resource", "--name", "-n"],
                  description:
                    "Name or ARM resource ID of the Load Testing resource",
                  args: { name: "load-test-resource" },
                  isRequired: true,
                },
                {
                  name: ["--test-id", "-t"],
                  description: "Test ID of the load test",
                  args: { name: "test-id" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
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
          name: "file",
          description:
            "Command group for operations on test files.\n\n\t\tCommand group for operations on test files such as upload, delete, list and download",
          subcommands: [
            {
              name: "delete",
              description: "Delete a file from test",
              options: [
                {
                  name: "--file-name",
                  description: "Name of the file",
                  args: { name: "file-name" },
                  isRequired: true,
                },
                {
                  name: ["--load-test-resource", "--name", "-n"],
                  description:
                    "Name or ARM resource ID of the Load Testing resource",
                  args: { name: "load-test-resource" },
                  isRequired: true,
                },
                {
                  name: ["--test-id", "-t"],
                  description: "Test ID of the load test",
                  args: { name: "test-id" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "download",
              description: "Download a file from a test",
              options: [
                {
                  name: "--file-name",
                  description: "Name of the file",
                  args: { name: "file-name" },
                  isRequired: true,
                },
                {
                  name: ["--load-test-resource", "--name", "-n"],
                  description:
                    "Name or ARM resource ID of the Load Testing resource",
                  args: { name: "load-test-resource" },
                  isRequired: true,
                },
                {
                  name: "--path",
                  description: "Path of the directory to download files",
                  args: { name: "path" },
                  isRequired: true,
                },
                {
                  name: ["--test-id", "-t"],
                  description: "Test ID of the load test",
                  args: { name: "test-id" },
                  isRequired: true,
                },
                {
                  name: "--force",
                  description:
                    "Force run the command. This will create the directory to download files if it does not exist",
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
              description: "List all files in a test",
              options: [
                {
                  name: ["--load-test-resource", "--name", "-n"],
                  description:
                    "Name or ARM resource ID of the Load Testing resource",
                  args: { name: "load-test-resource" },
                  isRequired: true,
                },
                {
                  name: ["--test-id", "-t"],
                  description: "Test ID of the load test",
                  args: { name: "test-id" },
                  isRequired: true,
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
              name: "upload",
              description: "Upload a file to a test",
              options: [
                {
                  name: ["--load-test-resource", "--name", "-n"],
                  description:
                    "Name or ARM resource ID of the Load Testing resource",
                  args: { name: "load-test-resource" },
                  isRequired: true,
                },
                {
                  name: "--path",
                  description: "Path to the file to upload",
                  args: { name: "path" },
                  isRequired: true,
                },
                {
                  name: ["--test-id", "-t"],
                  description: "Test ID of the load test",
                  args: { name: "test-id" },
                  isRequired: true,
                },
                {
                  name: "--file-type",
                  description:
                    "Type of file to be uploaded. Allowed values: ADDITIONAL_ARTIFACTS, JMX_FILE, USER_PROPERTIES",
                  args: { name: "file-type" },
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
          ],
        },
        {
          name: "server-metric",
          description:
            "Command group to manage server metrics.\n\n\t\tCommand group to manage load test server-metrics with add, list and remove",
          subcommands: [
            {
              name: "add",
              description: "Add a server-metric to a test",
              options: [
                {
                  name: "--aggregation",
                  description: "Aggregation to be applied on the metric",
                  args: { name: "aggregation" },
                  isRequired: true,
                },
                {
                  name: "--app-component-id",
                  description:
                    "Fully qualified resource ID of the App Component. For example, subscriptions/{subId}/resourceGroups/{rg}/providers/Microsoft.LoadTestService/loadtests/{resName}",
                  args: { name: "app-component-id" },
                  isRequired: true,
                },
                {
                  name: "--app-component-type",
                  description:
                    "Type of resource of the app component. Refer https://learn.microsoft.com/cli/azure/resource#az-resource-show",
                  args: { name: "app-component-type" },
                  isRequired: true,
                },
                {
                  name: ["--load-test-resource", "--name", "-n"],
                  description:
                    "Name or ARM resource ID of the Load Testing resource",
                  args: { name: "load-test-resource" },
                  isRequired: true,
                },
                {
                  name: "--metric-id",
                  description:
                    "Fully qualified ID of the server metric. Refer https://docs.microsoft.com/en-us/rest/api/monitor/metric-definitions/list#metricdefinition",
                  args: { name: "metric-id" },
                  isRequired: true,
                },
                {
                  name: "--metric-name",
                  description: "Name of the metric. Example, requests/duration",
                  args: { name: "metric-name" },
                  isRequired: true,
                },
                {
                  name: "--metric-namespace",
                  description:
                    "Namespace of the server metric. Example, microsoft.insights/components",
                  args: { name: "metric-namespace" },
                  isRequired: true,
                },
                {
                  name: ["--test-id", "-t"],
                  description: "Test ID of the load test",
                  args: { name: "test-id" },
                  isRequired: true,
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
              description: "List all server-metrics for a test",
              options: [
                {
                  name: ["--load-test-resource", "--name", "-n"],
                  description:
                    "Name or ARM resource ID of the Load Testing resource",
                  args: { name: "load-test-resource" },
                  isRequired: true,
                },
                {
                  name: ["--test-id", "-t"],
                  description: "Test ID of the load test",
                  args: { name: "test-id" },
                  isRequired: true,
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
              name: "remove",
              description: "Remove the given server-metric from the test",
              options: [
                {
                  name: ["--load-test-resource", "--name", "-n"],
                  description:
                    "Name or ARM resource ID of the Load Testing resource",
                  args: { name: "load-test-resource" },
                  isRequired: true,
                },
                {
                  name: "--metric-id",
                  description:
                    "Fully qualified ID of the server metric. Refer https://docs.microsoft.com/en-us/rest/api/monitor/metric-definitions/list#metricdefinition",
                  args: { name: "metric-id" },
                  isRequired: true,
                },
                {
                  name: ["--test-id", "-t"],
                  description: "Test ID of the load test",
                  args: { name: "test-id" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
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
      name: "test-run",
      description:
        "Command group to manage load test runs.\n\n\t\tCommand group to manage load test runs with create, update, delete, list, stop, etc",
      subcommands: [
        {
          name: "create",
          description: "Create a new load test run",
          options: [
            {
              name: ["--load-test-resource", "--name", "-n"],
              description:
                "Name or ARM resource ID of the Load Testing resource",
              args: { name: "load-test-resource" },
              isRequired: true,
            },
            {
              name: ["--test-id", "-t"],
              description: "Test ID of the load test",
              args: { name: "test-id" },
              isRequired: true,
            },
            {
              name: ["--test-run-id", "-r"],
              description: "Test run ID of the load test run",
              args: { name: "test-run-id" },
              isRequired: true,
            },
            {
              name: "--certificate",
              description:
                "A single certificate in 'key[=value]' format. The certificate should be stored in Azure Key Vault in PFX format, and the certificate identifier should be provided as the value.Use \"\" to clear existing certificate",
              args: { name: "certificate" },
            },
            {
              name: "--description",
              description: "Description of the load test run",
              args: { name: "description" },
            },
            {
              name: "--display-name",
              description: "Display name of the load test run",
              args: { name: "display-name" },
            },
            {
              name: "--env",
              description:
                'Space-separated environment variables: key[=value] [key[=value] ...]. Use "" to clear existing environment variables',
              args: { name: "env" },
            },
            {
              name: "--existing-test-run-id",
              description:
                "Test run ID of an existing load test run which should be rerun",
              args: { name: "existing-test-run-id" },
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
              name: "--secret",
              description:
                'Space-separated secrets: key[=value] [key[=value] ...]. Secrets should be stored in Azure Key Vault, and the secret identifier should be provided as the value.Use "" to clear existing secrets',
              args: { name: "secret" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete an existing load test run",
          options: [
            {
              name: ["--load-test-resource", "--name", "-n"],
              description:
                "Name or ARM resource ID of the Load Testing resource",
              args: { name: "load-test-resource" },
              isRequired: true,
            },
            {
              name: ["--test-run-id", "-r"],
              description: "Test run ID of the load test run",
              args: { name: "test-run-id" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "download-files",
          description: "Download files for an existing load test run",
          options: [
            {
              name: ["--load-test-resource", "--name", "-n"],
              description:
                "Name or ARM resource ID of the Load Testing resource",
              args: { name: "load-test-resource" },
              isRequired: true,
            },
            {
              name: "--path",
              description: "Path of the directory to download files",
              args: { name: "path" },
              isRequired: true,
            },
            {
              name: ["--test-run-id", "-r"],
              description: "Test run ID of the load test run",
              args: { name: "test-run-id" },
              isRequired: true,
            },
            {
              name: "--force",
              description:
                "Force run the command. This will create the directory to download files if it does not exist",
            },
            { name: "--input", description: "Download the input files zip" },
            { name: "--log", description: "Download the log files zip" },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            { name: "--result", description: "Download the results files zip" },
          ],
        },
        {
          name: "list",
          description: "List all test runs",
          options: [
            {
              name: ["--load-test-resource", "--name", "-n"],
              description:
                "Name or ARM resource ID of the Load Testing resource",
              args: { name: "load-test-resource" },
              isRequired: true,
            },
            {
              name: ["--test-id", "-t"],
              description: "Test ID of the load test",
              args: { name: "test-id" },
              isRequired: true,
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
          description: "Show details of a test run",
          options: [
            {
              name: ["--load-test-resource", "--name", "-n"],
              description:
                "Name or ARM resource ID of the Load Testing resource",
              args: { name: "load-test-resource" },
              isRequired: true,
            },
            {
              name: ["--test-run-id", "-r"],
              description: "Test run ID of the load test run",
              args: { name: "test-run-id" },
              isRequired: true,
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
          name: "stop",
          description: "Stop running a load test run",
          options: [
            {
              name: ["--load-test-resource", "--name", "-n"],
              description:
                "Name or ARM resource ID of the Load Testing resource",
              args: { name: "load-test-resource" },
              isRequired: true,
            },
            {
              name: ["--test-run-id", "-r"],
              description: "Test run ID of the load test run",
              args: { name: "test-run-id" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "update",
          description: "Update an existing load test run",
          options: [
            {
              name: "--description",
              description: "Description of the load test run",
              args: { name: "description" },
              isRequired: true,
            },
            {
              name: ["--load-test-resource", "--name", "-n"],
              description:
                "Name or ARM resource ID of the Load Testing resource",
              args: { name: "load-test-resource" },
              isRequired: true,
            },
            {
              name: ["--test-run-id", "-r"],
              description: "Test run ID of the load test run",
              args: { name: "test-run-id" },
              isRequired: true,
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
          name: "app-component",
          description:
            "Command group to manage load test run app components.\n\n\t\tCommand group to manage load test run app-components with add, list and remove",
          subcommands: [
            {
              name: "add",
              description: "Add an app component to a test run",
              options: [
                {
                  name: "--app-component-id",
                  description:
                    "Fully qualified resource ID of the App Component. For example, subscriptions/{subId}/resourceGroups/{rg}/providers/Microsoft.LoadTestService/loadtests/{resName}",
                  args: { name: "app-component-id" },
                  isRequired: true,
                },
                {
                  name: "--app-component-name",
                  description:
                    "Name of the app component. Refer https://learn.microsoft.com/cli/azure/resource#az-resource-show",
                  args: { name: "app-component-name" },
                  isRequired: true,
                },
                {
                  name: "--app-component-type",
                  description:
                    "Type of resource of the app component. Refer https://learn.microsoft.com/cli/azure/resource#az-resource-show",
                  args: { name: "app-component-type" },
                  isRequired: true,
                },
                {
                  name: ["--load-test-resource", "--name", "-n"],
                  description:
                    "Name or ARM resource ID of the Load Testing resource",
                  args: { name: "load-test-resource" },
                  isRequired: true,
                },
                {
                  name: ["--test-run-id", "-r"],
                  description: "Test run ID of the load test run",
                  args: { name: "test-run-id" },
                  isRequired: true,
                },
                {
                  name: "--app-component-kind",
                  description:
                    "Kind of the app component. Refer https://learn.microsoft.com/cli/azure/resource#az-resource-show",
                  args: { name: "app-component-kind" },
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
              description: "List all app components for a test run",
              options: [
                {
                  name: ["--load-test-resource", "--name", "-n"],
                  description:
                    "Name or ARM resource ID of the Load Testing resource",
                  args: { name: "load-test-resource" },
                  isRequired: true,
                },
                {
                  name: ["--test-run-id", "-r"],
                  description: "Test run ID of the load test run",
                  args: { name: "test-run-id" },
                  isRequired: true,
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
              name: "remove",
              description: "Remove an app component from a test run",
              options: [
                {
                  name: "--app-component-id",
                  description:
                    "Fully qualified resource ID of the App Component. For example, subscriptions/{subId}/resourceGroups/{rg}/providers/Microsoft.LoadTestService/loadtests/{resName}",
                  args: { name: "app-component-id" },
                  isRequired: true,
                },
                {
                  name: ["--load-test-resource", "--name", "-n"],
                  description:
                    "Name or ARM resource ID of the Load Testing resource",
                  args: { name: "load-test-resource" },
                  isRequired: true,
                },
                {
                  name: ["--test-run-id", "-r"],
                  description: "Test run ID of the load test run",
                  args: { name: "test-run-id" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
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
          name: "metrics",
          description:
            "Command group to retrieve load test run metrics.\n\n\t\tCommand group to retrieve load test run metrics with list, get-namespaces, get-definitions, get-dimension",
          subcommands: [
            {
              name: "get-definitions",
              description: "Get all metric definitions for a load test run",
              options: [
                {
                  name: ["--load-test-resource", "--name", "-n"],
                  description:
                    "Name or ARM resource ID of the Load Testing resource",
                  args: { name: "load-test-resource" },
                  isRequired: true,
                },
                {
                  name: "--metric-namespace",
                  description:
                    "Namespace of the metric. Allowed values: LoadTestRunMetrics, EngineHealthMetrics",
                  args: { name: "metric-namespace" },
                  isRequired: true,
                },
                {
                  name: ["--test-run-id", "-r"],
                  description: "Test run ID of the load test run",
                  args: { name: "test-run-id" },
                  isRequired: true,
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
              name: "get-dimensions",
              description: "Get all metric dimension values for load test run",
              options: [
                {
                  name: ["--load-test-resource", "--name", "-n"],
                  description:
                    "Name or ARM resource ID of the Load Testing resource",
                  args: { name: "load-test-resource" },
                  isRequired: true,
                },
                {
                  name: ["--metric-definition-name", "--metric-name"],
                  description: "Name of the metric",
                  args: { name: "metric-definition-name" },
                  isRequired: true,
                },
                {
                  name: "--metric-dimension",
                  description: "Value of the metric dimension",
                  args: { name: "metric-dimension" },
                  isRequired: true,
                },
                {
                  name: "--metric-namespace",
                  description:
                    "Namespace of the metric. Allowed values: LoadTestRunMetrics, EngineHealthMetrics",
                  args: { name: "metric-namespace" },
                  isRequired: true,
                },
                {
                  name: ["--test-run-id", "-r"],
                  description: "Test run ID of the load test run",
                  args: { name: "test-run-id" },
                  isRequired: true,
                },
                {
                  name: "--end-time",
                  description: "ISO 8601 formatted end time",
                  args: { name: "end-time" },
                },
                {
                  name: "--interval",
                  description:
                    "ISO 8601 formatted interval. Allowed values: PT10S, PT1H, PT1M, PT5M, PT5S",
                  args: { name: "interval" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--start-time",
                  description: "ISO 8601 formatted start time",
                  args: { name: "start-time" },
                },
              ],
            },
            {
              name: "get-namespaces",
              description: "Get all metric namespaces for a load test run",
              options: [
                {
                  name: ["--load-test-resource", "--name", "-n"],
                  description:
                    "Name or ARM resource ID of the Load Testing resource",
                  args: { name: "load-test-resource" },
                  isRequired: true,
                },
                {
                  name: ["--test-run-id", "-r"],
                  description: "Test run ID of the load test run",
                  args: { name: "test-run-id" },
                  isRequired: true,
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
              description: "List metrics for a load test run",
              options: [
                {
                  name: ["--load-test-resource", "--name", "-n"],
                  description:
                    "Name or ARM resource ID of the Load Testing resource",
                  args: { name: "load-test-resource" },
                  isRequired: true,
                },
                {
                  name: "--metric-namespace",
                  description:
                    "Namespace of the metric. Allowed values: LoadTestRunMetrics, EngineHealthMetrics",
                  args: { name: "metric-namespace" },
                  isRequired: true,
                },
                {
                  name: ["--test-run-id", "-r"],
                  description: "Test run ID of the load test run",
                  args: { name: "test-run-id" },
                  isRequired: true,
                },
                {
                  name: "--aggregation",
                  description: "Operation used to aggregate the metrics",
                  args: { name: "aggregation" },
                },
                {
                  name: "--dimension-filters",
                  description:
                    "Space and comma-separated dimension filters: key1[=value1] key1[=value2] key2[=value3] format ...]. * is supported as a wildcard for both key and value. Example: --dimension-filters key1=value1 key2=*, --dimension-filters *",
                  args: { name: "dimension-filters" },
                },
                {
                  name: "--end-time",
                  description: "ISO 8601 formatted end time",
                  args: { name: "end-time" },
                },
                {
                  name: "--interval",
                  description:
                    "ISO 8601 formatted interval. Allowed values: PT10S, PT1H, PT1M, PT5M, PT5S",
                  args: { name: "interval" },
                },
                {
                  name: ["--metric-definition-name", "--metric-name"],
                  description: "Name of the metric",
                  args: { name: "metric-definition-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--start-time",
                  description: "ISO 8601 formatted start time",
                  args: { name: "start-time" },
                },
              ],
            },
          ],
        },
        {
          name: "server-metric",
          description:
            "Command group to manage load test run server-metrics.\n\n\t\tCommand group to manage load test run server-metrics with add, list and remove",
          subcommands: [
            {
              name: "add",
              description: "Add a server-metric to a test run",
              options: [
                {
                  name: "--aggregation",
                  description: "Aggregation to be applied on the metric",
                  args: { name: "aggregation" },
                  isRequired: true,
                },
                {
                  name: "--app-component-id",
                  description:
                    "Fully qualified resource ID of the App Component. For example, subscriptions/{subId}/resourceGroups/{rg}/providers/Microsoft.LoadTestService/loadtests/{resName}",
                  args: { name: "app-component-id" },
                  isRequired: true,
                },
                {
                  name: "--app-component-type",
                  description:
                    "Type of resource of the app component. Refer https://learn.microsoft.com/cli/azure/resource#az-resource-show",
                  args: { name: "app-component-type" },
                  isRequired: true,
                },
                {
                  name: ["--load-test-resource", "--name", "-n"],
                  description:
                    "Name or ARM resource ID of the Load Testing resource",
                  args: { name: "load-test-resource" },
                  isRequired: true,
                },
                {
                  name: "--metric-id",
                  description:
                    "Fully qualified ID of the server metric. Refer https://docs.microsoft.com/en-us/rest/api/monitor/metric-definitions/list#metricdefinition",
                  args: { name: "metric-id" },
                  isRequired: true,
                },
                {
                  name: "--metric-name",
                  description: "Name of the metric. Example, requests/duration",
                  args: { name: "metric-name" },
                  isRequired: true,
                },
                {
                  name: "--metric-namespace",
                  description:
                    "Namespace of the server metric. Example, microsoft.insights/components",
                  args: { name: "metric-namespace" },
                  isRequired: true,
                },
                {
                  name: ["--test-run-id", "-r"],
                  description: "Test run ID of the load test run",
                  args: { name: "test-run-id" },
                  isRequired: true,
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
              description: "List all server-metrics for a test run",
              options: [
                {
                  name: ["--load-test-resource", "--name", "-n"],
                  description:
                    "Name or ARM resource ID of the Load Testing resource",
                  args: { name: "load-test-resource" },
                  isRequired: true,
                },
                {
                  name: ["--test-run-id", "-r"],
                  description: "Test run ID of the load test run",
                  args: { name: "test-run-id" },
                  isRequired: true,
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
              name: "remove",
              description: "Remove a server-metric from a test run",
              options: [
                {
                  name: ["--load-test-resource", "--name", "-n"],
                  description:
                    "Name or ARM resource ID of the Load Testing resource",
                  args: { name: "load-test-resource" },
                  isRequired: true,
                },
                {
                  name: "--metric-id",
                  description:
                    "Fully qualified ID of the server metric. Refer https://docs.microsoft.com/en-us/rest/api/monitor/metric-definitions/list#metricdefinition",
                  args: { name: "metric-id" },
                  isRequired: true,
                },
                {
                  name: ["--test-run-id", "-r"],
                  description: "Test run ID of the load test run",
                  args: { name: "test-run-id" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
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
