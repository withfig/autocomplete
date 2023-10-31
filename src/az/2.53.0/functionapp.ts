const completion: Fig.Spec = {
  name: "functionapp",
  description:
    "Manage function apps. To install the Azure Functions Core tools see https://github.com/Azure/azure-functions-core-tools",
  subcommands: [
    {
      name: "app",
      description: "Commands to manage Azure Functions app",
      subcommands: [
        {
          name: "up",
          description: "Deploy to Azure Functions via GitHub actions",
          options: [
            {
              name: "--app-name",
              description: "FunctionApp name in the subscription",
              args: { name: "app-name" },
            },
            {
              name: "--branch-name",
              description:
                "New branch name to be created to check in files and raise a PR",
              args: { name: "branch-name" },
            },
            {
              name: "--do-not-wait",
              description: "Do not wait for workflow completion",
            },
            {
              name: ["--repository", "-r"],
              description:
                "GitHub repository URL e.g. https://github.com/azure/azure-cli",
              args: { name: "repository" },
            },
          ],
        },
      ],
    },
    {
      name: "config",
      description: "Configure a function app",
      subcommands: [
        {
          name: "set",
          description: "Set an existing function app's configuration",
          options: [
            {
              name: "--always-on",
              description:
                "Ensure web app gets loaded all the time, rather unloaded after been idle. Recommended when you have continuous web jobs running",
              args: { name: "always-on", suggestions: ["false", "true"] },
            },
            {
              name: "--auto-heal-enabled",
              description: "Enable or disable auto heal",
              args: {
                name: "auto-heal-enabled",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--ftps-state",
              description:
                "Set the Ftps state value for an app. Default value is 'AllAllowed'",
              args: {
                name: "ftps-state",
                suggestions: ["AllAllowed", "Disabled", "FtpsOnly"],
              },
            },
            {
              name: "--generic-configurations",
              description:
                "Provide site configuration list in a format of either key=value pair or @<json_file>. PowerShell and Windows Command Prompt users should use a JSON file to provide these configurations to avoid compatibility issues with escape characters",
              args: { name: "generic-configurations" },
            },
            {
              name: "--http20-enabled",
              description:
                "Configures a web site to allow clients to connect over http2.0",
              args: { name: "http20-enabled", suggestions: ["false", "true"] },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--java-container",
              description: "The java container, e.g., Tomcat, Jetty",
              args: { name: "java-container" },
            },
            {
              name: "--java-container-version",
              description:
                "The version of the java container, e.g., '8.0.23' for Tomcat",
              args: { name: "java-container-version" },
            },
            {
              name: "--java-version",
              description:
                "The version used to run your web app if using Java, e.g., '1.7' for Java 7, '1.8' for Java 8",
              args: { name: "java-version" },
            },
            {
              name: "--linux-fx-version",
              description:
                'The runtime stack used for your linux-based webapp, e.g., "RUBY|2.5.5", "NODE|12LTS", "PHP|7.2", "DOTNETCORE|2.1". See https://aka.ms/linux-stacks for more info',
              args: { name: "linux-fx-version" },
            },
            {
              name: "--min-tls-version",
              description:
                "The minimum version of TLS required for SSL requests, e.g., '1.0', '1.1', '1.2'",
              args: { name: "min-tls-version" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the function app",
              args: { name: "name" },
            },
            {
              name: "--net-framework-version",
              description:
                "The version used to run your web app if using .NET Framework, e.g., 'v4.0' for .NET 4.6 and 'v3.0' for .NET 3.5",
              args: { name: "net-framework-version" },
            },
            {
              name: "--number-of-workers",
              description: "The number of workers to be allocated",
              args: { name: "number-of-workers" },
            },
            {
              name: "--php-version",
              description:
                "The version used to run your web app if using PHP, e.g., 5.5, 5.6, 7.0",
              args: { name: "php-version" },
            },
            {
              name: "--powershell-version",
              description:
                "The version used to run your function app if using PowerShell, e.g., 7.2",
              args: { name: "powershell-version" },
            },
            {
              name: "--prewarmed-instance-count",
              description: "Number of pre-warmed instances a function app has",
              args: { name: "prewarmed-instance-count" },
            },
            {
              name: "--python-version",
              description:
                "The version used to run your web app if using Python, e.g., 2.7, 3.4",
              args: { name: "python-version" },
            },
            {
              name: "--remote-debugging-enabled",
              description: "Enable or disable remote debugging",
              args: {
                name: "remote-debugging-enabled",
                suggestions: ["false", "true"],
              },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--slot", "-s"],
              description:
                "The name of the slot. Default to the productions slot if not specified",
              args: { name: "slot" },
            },
            {
              name: "--startup-file",
              description:
                "The startup file for linux hosted web apps, e.g. 'process.json' for Node.js web",
              args: { name: "startup-file" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--use-32bit-worker-process",
              description: "Use 32 bits worker process or not",
              args: {
                name: "use-32bit-worker-process",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--vnet-route-all-enabled",
              description:
                "Configure regional VNet integration to route all traffic to the VNet",
              args: {
                name: "vnet-route-all-enabled",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--web-sockets-enabled",
              description: "Enable or disable web sockets",
              args: {
                name: "web-sockets-enabled",
                suggestions: ["false", "true"],
              },
            },
          ],
        },
        {
          name: "show",
          description:
            "Get the details of an existing function app's configuration",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the function app",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--slot", "-s"],
              description:
                "The name of the slot. Default to the productions slot if not specified",
              args: { name: "slot" },
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
          name: "access-restriction",
          description:
            "Methods that show, set, add, and remove access restrictions on a functionapp",
          subcommands: [
            {
              name: "add",
              description: "Adds an Access Restriction to the function app",
              options: [
                {
                  name: ["--priority", "-p"],
                  description: "Priority of the access restriction rule",
                  args: { name: "priority" },
                  isRequired: true,
                },
                {
                  name: "--action",
                  description: "Allow or deny access",
                  args: { name: "action", suggestions: ["Allow", "Deny"] },
                },
                {
                  name: "--description",
                  description: "Description of the access restriction rule",
                  args: { name: "description" },
                },
                {
                  name: "--http-headers",
                  description:
                    "Space-separated http headers in a format of <name>=<value>",
                  args: { name: "http-headers" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--ignore-missing-endpoint", "-i"],
                  description:
                    "Create access restriction rule with checking if the subnet has Microsoft.Web service endpoint enabled",
                },
                {
                  name: "--ip-address",
                  description:
                    "IP address or CIDR range (optional comma separated list of up to 8 ranges)",
                  args: { name: "ip-address" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the function app",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--rule-name", "-r"],
                  description: "Name of the access restriction rule to add",
                  args: { name: "rule-name" },
                },
                {
                  name: "--scm-site",
                  description:
                    "True if access restrictions is added for scm site",
                },
                {
                  name: "--service-tag",
                  description:
                    "Service Tag (optional comma separated list of up to 8 tags)",
                  args: { name: "service-tag" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--subnet",
                  description:
                    "Subnet name (requires vNet name) or subnet resource id",
                  args: { name: "subnet" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--vnet-name",
                  description: "VNet name",
                  args: { name: "vnet-name" },
                },
                {
                  name: "--vnet-resource-group",
                  description:
                    "Resource group of virtual network (default is web app resource group)",
                  args: { name: "vnet-resource-group" },
                },
              ],
            },
            {
              name: "remove",
              description: "Removes an Access Restriction from the functionapp",
              options: [
                {
                  name: "--action",
                  description: "Allow or deny access",
                  args: { name: "action", suggestions: ["Allow", "Deny"] },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--ip-address",
                  description:
                    "IP address or CIDR range (optional comma separated list of up to 8 ranges)",
                  args: { name: "ip-address" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the function app",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--rule-name", "-r"],
                  description: "Name of the access restriction to remove",
                  args: { name: "rule-name" },
                },
                {
                  name: "--scm-site",
                  description:
                    "True if access restriction should be removed from scm site",
                },
                {
                  name: "--service-tag",
                  description:
                    "Service Tag (optional comma separated list of up to 8 tags)",
                  args: { name: "service-tag" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--subnet",
                  description:
                    "Subnet name (requires vNet name) or subnet resource id",
                  args: { name: "subnet" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--vnet-name",
                  description: "VNet name",
                  args: { name: "vnet-name" },
                },
              ],
            },
            {
              name: "set",
              description:
                "Sets if SCM site is using the same restrictions as the main site",
              options: [
                {
                  name: "--use-same-restrictions-for-scm-site",
                  description: "Use same access restrictions for scm site",
                  args: {
                    name: "use-same-restrictions-for-scm-site",
                    suggestions: ["false", "true"],
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
                  name: ["--name", "-n"],
                  description: "Name of the function app",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
              description: "Show Access Restriction settings for functionapp",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the function app",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
          name: "appsettings",
          description: "Configure function app settings",
          subcommands: [
            {
              name: "delete",
              description: "Delete a function app's settings",
              options: [
                {
                  name: "--setting-names",
                  description: "Space-separated app setting names",
                  args: { name: "setting-names" },
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
                  description: "Name of the function app",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
              description: "Show settings for a function app",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the function app",
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
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
                },
              ],
            },
            {
              name: "set",
              description: "Update a function app's settings",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the function app",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--settings",
                  description:
                    "Space-separated appsettings in KEY=VALUE format. Use @{file} to load from a file",
                  args: { name: "settings" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--slot-settings",
                  description:
                    "Space-separated appsettings in KEY=VALUE format. Use @{file} to load from a file. Given setting are added to the configuration and marked as Deployment slot setting by default",
                  args: { name: "slot-settings" },
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
          name: "container",
          description: "Manage an existing function app's container settings",
          subcommands: [
            {
              name: "delete",
              description:
                "Delete an existing function app's container settings",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the function app",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
              name: "set",
              description: "Set an existing function app's container settings",
              options: [
                {
                  name: "--docker-custom-image-name",
                  description:
                    "Option '--docker-custom-image-name' has been deprecated and will be removed in a future release. Use '--image' instead. The container custom image name and optionally the tag name (e.g., /:)",
                  args: { name: "docker-custom-image-name" },
                },
                {
                  name: "--docker-registry-server-password",
                  description:
                    "Option '--docker-registry-server-password' has been deprecated and will be removed in a future release. Use '--registry-password' instead. The container registry server password",
                  args: { name: "docker-registry-server-password" },
                },
                {
                  name: "--docker-registry-server-url",
                  description:
                    "Option '--docker-registry-server-url' has been deprecated and will be removed in a future release. Use '--registry-server' instead. The container registry server url",
                  args: { name: "docker-registry-server-url" },
                },
                {
                  name: "--docker-registry-server-user",
                  description:
                    "Option '--docker-registry-server-user' has been deprecated and will be removed in a future release. Use '--registry-username' instead. The container registry server username",
                  args: { name: "docker-registry-server-user" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--image", "-c", "-i"],
                  description:
                    "The container custom image name and optionally the tag name (e.g., /:)",
                  args: { name: "image" },
                },
                {
                  name: "--max-replicas",
                  description:
                    "The maximum number of replicas when create funtion app on container app",
                  args: { name: "max-replicas" },
                },
                {
                  name: "--min-replicas",
                  description:
                    "The minimum number of replicas when create funtion app on container app",
                  args: { name: "min-replicas" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the function app",
                  args: { name: "name" },
                },
                {
                  name: ["--registry-password", "-p"],
                  description: "The container registry server password",
                  args: { name: "registry-password" },
                },
                {
                  name: ["--registry-server", "-r"],
                  description: "The container registry server url",
                  args: { name: "registry-server" },
                },
                {
                  name: ["--registry-username", "-u"],
                  description: "The container registry server username",
                  args: { name: "registry-username" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
              description: "Get details of a function app's container settings",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the function app",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
          name: "hostname",
          description: "Configure hostnames for a function app",
          subcommands: [
            {
              name: "add",
              description: "Bind a hostname to a function app",
              options: [
                {
                  name: "--hostname",
                  description:
                    "Hostname assigned to the site, such as custom domains",
                  args: { name: "hostname" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the function app",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
              description: "Unbind a hostname from a function app",
              options: [
                {
                  name: "--hostname",
                  description:
                    "Hostname assigned to the site, such as custom domains",
                  args: { name: "hostname" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the function app",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
              name: "get-external-ip",
              description:
                "Get the external-facing IP address for a function app",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the function app",
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
              description: "List all hostname bindings for a function app",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--webapp-name",
                  description:
                    "Name of the web app. If left unspecified, a name will be randomly generated. You can configure the default using az configure --defaults web=<name>",
                  args: { name: "webapp-name" },
                  isRequired: true,
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
                },
              ],
            },
          ],
        },
        {
          name: "ssl",
          description: "Configure SSL certificates",
          subcommands: [
            {
              name: "bind",
              description: "Bind an SSL certificate to a function app",
              options: [
                {
                  name: "--certificate-thumbprint",
                  description: "The ssl cert thumbprint",
                  args: { name: "certificate-thumbprint" },
                  isRequired: true,
                },
                {
                  name: "--ssl-type",
                  description: "The ssl cert type",
                  args: { name: "ssl-type", suggestions: ["IP", "SNI"] },
                  isRequired: true,
                },
                {
                  name: "--hostname",
                  description:
                    "The custom domain name. If empty, hostnames will be selected automatically",
                  args: { name: "hostname" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the function app",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
              description:
                "Create a Managed Certificate for a hostname in a function app",
              options: [
                {
                  name: "--hostname",
                  description: "The custom domain name",
                  args: { name: "hostname" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the web app",
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
                  name: "--certificate-name",
                  description: "The name of the certificate",
                  args: { name: "certificate-name" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete an SSL certificate from a function app",
              options: [
                {
                  name: "--certificate-thumbprint",
                  description: "The ssl cert thumbprint",
                  args: { name: "certificate-thumbprint" },
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
              name: "import",
              description:
                "Import an SSL certificate to a function app from Key Vault",
              options: [
                {
                  name: "--key-vault",
                  description: "The name or resource ID of the Key Vault",
                  args: { name: "key-vault" },
                  isRequired: true,
                },
                {
                  name: "--key-vault-certificate-name",
                  description: "The name of the certificate in Key Vault",
                  args: { name: "key-vault-certificate-name" },
                  isRequired: true,
                },
                {
                  name: "--certificate-name",
                  description: "The name of the certificate",
                  args: { name: "certificate-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the function app",
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
              description: "List SSL certificates for a function app",
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
              name: "show",
              description:
                "Show the details of an SSL certificate for a function app",
              options: [
                {
                  name: "--certificate-name",
                  description: "The name of the certificate",
                  args: { name: "certificate-name" },
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
              name: "unbind",
              description: "Unbind an SSL certificate from a function app",
              options: [
                {
                  name: "--certificate-thumbprint",
                  description: "The ssl cert thumbprint",
                  args: { name: "certificate-thumbprint" },
                  isRequired: true,
                },
                {
                  name: "--hostname",
                  description:
                    "The custom domain name. If empty, hostnames will be selected automatically",
                  args: { name: "hostname" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the function app",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
              name: "upload",
              description: "Upload an SSL certificate to a function app",
              options: [
                {
                  name: "--certificate-file",
                  description: "The filepath for the .pfx file",
                  args: { name: "certificate-file" },
                  isRequired: true,
                },
                {
                  name: "--certificate-password",
                  description: "The ssl cert password",
                  args: { name: "certificate-password" },
                  isRequired: true,
                },
                {
                  name: "--certificate-name",
                  description: "The name of the certificate",
                  args: { name: "certificate-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the function app",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
      name: "connection",
      description: "Commands to manage functionapp connections",
      subcommands: [
        {
          name: "delete",
          description: "Delete a functionapp connection",
          options: [
            {
              name: "--connection",
              description: "Name of the functionapp connection",
              args: { name: "connection" },
            },
            {
              name: "--id",
              description:
                "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
              args: { name: "id" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the function app. Required if '--id' is not specified.None",
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
                "The resource group which contains the function app. Required if '--id' is not specified.None",
              args: { name: "resource-group" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "List connections of a functionapp",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "Name of the function app. Required if '--source-id' is not specified.None",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "The resource group which contains the function app. Required if '--source-id' is not specified.None",
              args: { name: "resource-group" },
            },
            {
              name: "--source-id",
              description:
                "The resource id of a functionapp. Required if ['--resource-group', '--name'] are not specified",
              args: { name: "source-id" },
            },
          ],
        },
        {
          name: "list-configuration",
          description: "List source configurations of a functionapp connection",
          options: [
            {
              name: "--connection",
              description: "Name of the functionapp connection",
              args: { name: "connection" },
            },
            {
              name: "--id",
              description:
                "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
              args: { name: "id" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the function app. Required if '--id' is not specified.None",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "The resource group which contains the function app. Required if '--id' is not specified.None",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "list-support-types",
          description:
            "List client types and auth types supported by functionapp connections",
          options: [
            {
              name: ["--target-type", "-t"],
              description: "The target resource type",
              args: {
                name: "target-type",
                suggestions: [
                  "appconfig",
                  "confluent-cloud",
                  "cosmos-cassandra",
                  "cosmos-gremlin",
                  "cosmos-mongo",
                  "cosmos-sql",
                  "cosmos-table",
                  "eventhub",
                  "keyvault",
                  "mysql",
                  "mysql-flexible",
                  "postgres",
                  "postgres-flexible",
                  "redis",
                  "redis-enterprise",
                  "servicebus",
                  "signalr",
                  "sql",
                  "storage-blob",
                  "storage-file",
                  "storage-queue",
                  "storage-table",
                  "webpubsub",
                ],
              },
            },
          ],
        },
        {
          name: "show",
          description: "Get the details of a functionapp connection",
          options: [
            {
              name: "--connection",
              description: "Name of the functionapp connection",
              args: { name: "connection" },
            },
            {
              name: "--id",
              description:
                "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
              args: { name: "id" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the function app. Required if '--id' is not specified.None",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "The resource group which contains the function app. Required if '--id' is not specified.None",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "validate",
          description: "Validate a functionapp connection",
          options: [
            {
              name: "--connection",
              description: "Name of the functionapp connection",
              args: { name: "connection" },
            },
            {
              name: "--id",
              description:
                "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
              args: { name: "id" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the function app. Required if '--id' is not specified.None",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "The resource group which contains the function app. Required if '--id' is not specified.None",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the connection is met",
          options: [
            {
              name: "--connection",
              description: "Name of the functionapp connection",
              args: { name: "connection" },
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
              name: "--id",
              description:
                "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
              args: { name: "id" },
            },
            {
              name: "--interval",
              description: "Polling interval in seconds",
              args: { name: "interval" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the function app. Required if '--id' is not specified.None",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "The resource group which contains the function app. Required if '--id' is not specified.None",
              args: { name: "resource-group" },
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
          name: "create",
          description:
            "Create a connection between a functionapp and a target resource",
          subcommands: [
            {
              name: "appconfig",
              description: "Create a functionapp connection to appconfig",
              options: [
                {
                  name: "--app-config",
                  description:
                    "Name of the app configuration. Required if '--target-id' is not specified",
                  args: { name: "app-config" },
                },
                {
                  name: "--client-type",
                  description: "The client type used on the functionapp",
                  args: {
                    name: "client-type",
                    suggestions: ["dotnet", "java", "nodejs", "none", "python"],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the functionapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the function app. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the function app. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: { name: "service-principal" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a functionapp. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--app-config'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the app configuration. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: { name: "user-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "confluent-cloud",
              description: "Create a functionapp connection to confluent-cloud",
              options: [
                {
                  name: "--bootstrap-server",
                  description: "Kafka bootstrap server url",
                  args: { name: "bootstrap-server" },
                  isRequired: true,
                },
                {
                  name: "--kafka-key",
                  description: "Kafka API-Key (key)",
                  args: { name: "kafka-key" },
                  isRequired: true,
                },
                {
                  name: "--kafka-secret",
                  description: "Kafka API-Key (secret)",
                  args: { name: "kafka-secret" },
                  isRequired: true,
                },
                {
                  name: "--schema-key",
                  description: "Schema registry API-Key (key)",
                  args: { name: "schema-key" },
                  isRequired: true,
                },
                {
                  name: "--schema-registry",
                  description: "Schema registry url",
                  args: { name: "schema-registry" },
                  isRequired: true,
                },
                {
                  name: "--schema-secret",
                  description: "Schema registry API-Key (secret)",
                  args: { name: "schema-secret" },
                  isRequired: true,
                },
                {
                  name: "--client-type",
                  description: "The client type used on the functionapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "go",
                      "java",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the function app. Required if '--source-id' is not specified.None",
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
                    "The resource group which contains the function app. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a functionapp. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "cosmos-cassandra",
              description:
                "Create a functionapp connection to cosmos-cassandra",
              options: [
                {
                  name: "--account",
                  description:
                    "Name of the cosmos database account. Required if '--target-id' is not specified",
                  args: { name: "account" },
                },
                {
                  name: "--client-type",
                  description: "The client type used on the functionapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the functionapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--key-space",
                  description:
                    "Name of the keyspace. Required if '--target-id' is not specified",
                  args: { name: "key-space" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the function app. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the function app. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: { name: "service-principal" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a functionapp. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--account', '--key-space'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the cosmos database account. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: { name: "user-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "cosmos-gremlin",
              description: "Create a functionapp connection to cosmos-gremlin",
              options: [
                {
                  name: "--account",
                  description:
                    "Name of the cosmos database account. Required if '--target-id' is not specified",
                  args: { name: "account" },
                },
                {
                  name: "--client-type",
                  description: "The client type used on the functionapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "java",
                      "nodejs",
                      "none",
                      "php",
                      "python",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the functionapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--database",
                  description:
                    "Name of the database. Required if '--target-id' is not specified",
                  args: { name: "database" },
                },
                {
                  name: "--graph",
                  description:
                    "Name of the graph. Required if '--target-id' is not specified",
                  args: { name: "graph" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the function app. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the function app. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: { name: "service-principal" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a functionapp. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--account', '--database', '--graph'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the cosmos database account. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: { name: "user-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "cosmos-mongo",
              description: "Create a functionapp connection to cosmos-mongo",
              options: [
                {
                  name: "--account",
                  description:
                    "Name of the cosmos database account. Required if '--target-id' is not specified",
                  args: { name: "account" },
                },
                {
                  name: "--client-type",
                  description: "The client type used on the functionapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the functionapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--database",
                  description:
                    "Name of the database. Required if '--target-id' is not specified",
                  args: { name: "database" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the function app. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the function app. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: { name: "service-principal" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a functionapp. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--account', '--database'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the cosmos database account. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: { name: "user-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "cosmos-sql",
              description: "Create a functionapp connection to cosmos-sql",
              options: [
                {
                  name: "--account",
                  description:
                    "Name of the cosmos database account. Required if '--target-id' is not specified",
                  args: { name: "account" },
                },
                {
                  name: "--client-type",
                  description: "The client type used on the functionapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the functionapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--database",
                  description:
                    "Name of the database. Required if '--target-id' is not specified",
                  args: { name: "database" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the function app. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the function app. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: { name: "service-principal" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a functionapp. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--account', '--database'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the cosmos database account. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: { name: "user-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "cosmos-table",
              description: "Create a functionapp connection to cosmos-table",
              options: [
                {
                  name: "--account",
                  description:
                    "Name of the cosmos database account. Required if '--target-id' is not specified",
                  args: { name: "account" },
                },
                {
                  name: "--client-type",
                  description: "The client type used on the functionapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the functionapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the function app. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the function app. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: { name: "service-principal" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a functionapp. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--table",
                  description:
                    "Name of the table. Required if '--target-id' is not specified",
                  args: { name: "table" },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--account', '--table'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the cosmos database account. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: { name: "user-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "eventhub",
              description: "Create a functionapp connection to eventhub",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the functionapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "go",
                      "java",
                      "kafka-springBoot",
                      "nodejs",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the functionapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the function app. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--namespace",
                  description:
                    "Name of the eventhub namespace. Required if '--target-id' is not specified",
                  args: { name: "namespace" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the function app. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: { name: "service-principal" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a functionapp. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--namespace'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the eventhub. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: { name: "user-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "keyvault",
              description: "Create a functionapp connection to keyvault",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the functionapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the functionapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the function app. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--new",
                  description:
                    "Indicates whether to create a new keyvault when creating the functionapp connection",
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the function app. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: { name: "service-principal" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a functionapp. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--vault'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the keyvault. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: { name: "user-identity" },
                },
                {
                  name: "--vault",
                  description:
                    "Name of the keyvault. Required if '--target-id' is not specified",
                  args: { name: "vault" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "mysql",
              description: "Create a functionapp connection to mysql",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the functionapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "django",
                      "dotnet",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "php",
                      "python",
                      "ruby",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the functionapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--database",
                  description:
                    "Name of the mysql database. Required if '--target-id' is not specified",
                  args: { name: "database" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the function app. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the function app. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--server",
                  description:
                    "Name of the mysql server. Required if '--target-id' is not specified",
                  args: { name: "server" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a functionapp. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--server', '--database'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the mysql server. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "mysql-flexible",
              description: "Create a functionapp connection to mysql-flexible",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the functionapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "django",
                      "dotnet",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "php",
                      "python",
                      "ruby",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the functionapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--database",
                  description:
                    "Name of the mysql flexible database. Required if '--target-id' is not specified",
                  args: { name: "database" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the function app. Required if '--source-id' is not specified.None",
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
                    "The resource group which contains the function app. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--server",
                  description:
                    "Name of the mysql flexible server. Required if '--target-id' is not specified",
                  args: { name: "server" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a functionapp. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--server', '--database'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the mysql flexible server. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "postgres",
              description: "Create a functionapp connection to postgres",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the functionapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "django",
                      "dotnet",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "php",
                      "python",
                      "ruby",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the functionapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--database",
                  description:
                    "Name of postgres database. Required if '--target-id' is not specified",
                  args: { name: "database" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the function app. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--new",
                  description:
                    "Indicates whether to create a new postgres when creating the functionapp connection",
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the function app. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--server",
                  description:
                    "Name of postgres server. Required if '--target-id' is not specified",
                  args: { name: "server" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a functionapp. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--server', '--database'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the postgres service. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "postgres-flexible",
              description:
                "Create a functionapp connection to postgres-flexible",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the functionapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "django",
                      "dotnet",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "php",
                      "python",
                      "ruby",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the functionapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--database",
                  description:
                    "Name of postgres flexible database. Required if '--target-id' is not specified",
                  args: { name: "database" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the function app. Required if '--source-id' is not specified.None",
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
                    "The resource group which contains the function app. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--server",
                  description:
                    "Name of postgres flexible server. Required if '--target-id' is not specified",
                  args: { name: "server" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a functionapp. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--server', '--database'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the flexible postgres service. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "redis",
              description: "Create a functionapp connection to redis",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the functionapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the functionapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--database",
                  description:
                    "Name of the redis database. Required if '--target-id' is not specified",
                  args: { name: "database" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the function app. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the function app. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--server",
                  description:
                    "Name of the redis server. Required if '--target-id' is not specified",
                  args: { name: "server" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a functionapp. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--server', '--database'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the redis server. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "redis-enterprise",
              description:
                "Create a functionapp connection to redis-enterprise",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the functionapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the functionapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--database",
                  description:
                    "Name of the redis enterprise database. Required if '--target-id' is not specified",
                  args: { name: "database" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the function app. Required if '--source-id' is not specified.None",
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
                    "The resource group which contains the function app. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--server",
                  description:
                    "Name of the redis enterprise server. Required if '--target-id' is not specified",
                  args: { name: "server" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a functionapp. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--server', '--database'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the redis server. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "servicebus",
              description: "Create a functionapp connection to servicebus",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the functionapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the functionapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the function app. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--namespace",
                  description:
                    "Name of the servicebus namespace. Required if '--target-id' is not specified",
                  args: { name: "namespace" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the function app. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: { name: "service-principal" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a functionapp. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--namespace'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the servicebus. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: { name: "user-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "signalr",
              description: "Create a functionapp connection to signalr",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the functionapp",
                  args: {
                    name: "client-type",
                    suggestions: ["dotnet", "none"],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the functionapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the function app. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the function app. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: { name: "service-principal" },
                },
                {
                  name: "--signalr",
                  description:
                    "Name of the signalr service. Required if '--target-id' is not specified",
                  args: { name: "signalr" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a functionapp. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--signalr'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the signalr. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: { name: "user-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "sql",
              description: "Create a functionapp connection to sql",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the functionapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "django",
                      "dotnet",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "php",
                      "python",
                      "ruby",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the functionapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--database",
                  description:
                    "Name of the sql database. Required if '--target-id' is not specified",
                  args: { name: "database" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the function app. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the function app. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--server",
                  description:
                    "Name of the sql server. Required if '--target-id' is not specified",
                  args: { name: "server" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a functionapp. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--server', '--database'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the sql server. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "storage-blob",
              description: "Create a functionapp connection to storage-blob",
              options: [
                {
                  name: "--account",
                  description:
                    "Name of the storage account. Required if '--target-id' is not specified",
                  args: { name: "account" },
                },
                {
                  name: "--client-type",
                  description: "The client type used on the functionapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the functionapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the function app. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--new",
                  description:
                    "Indicates whether to create a new storage-blob when creating the functionapp connection",
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the function app. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: { name: "service-principal" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a functionapp. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--account'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the storage account. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: { name: "user-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "storage-file",
              description: "Create a functionapp connection to storage-file",
              options: [
                {
                  name: "--account",
                  description:
                    "Name of the storage account. Required if '--target-id' is not specified",
                  args: { name: "account" },
                },
                {
                  name: "--client-type",
                  description: "The client type used on the functionapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "java",
                      "nodejs",
                      "none",
                      "php",
                      "python",
                      "ruby",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the functionapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the function app. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the function app. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a functionapp. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--account'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the storage account. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "storage-queue",
              description: "Create a functionapp connection to storage-queue",
              options: [
                {
                  name: "--account",
                  description:
                    "Name of the storage account. Required if '--target-id' is not specified",
                  args: { name: "account" },
                },
                {
                  name: "--client-type",
                  description: "The client type used on the functionapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the functionapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the function app. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the function app. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: { name: "service-principal" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a functionapp. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--account'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the storage account. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: { name: "user-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "storage-table",
              description: "Create a functionapp connection to storage-table",
              options: [
                {
                  name: "--account",
                  description:
                    "Name of the storage account. Required if '--target-id' is not specified",
                  args: { name: "account" },
                },
                {
                  name: "--client-type",
                  description: "The client type used on the functionapp",
                  args: {
                    name: "client-type",
                    suggestions: ["dotnet", "java", "nodejs", "none", "python"],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the functionapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the function app. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the function app. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a functionapp. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--account'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the storage account. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "webpubsub",
              description: "Create a functionapp connection to webpubsub",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the functionapp",
                  args: {
                    name: "client-type",
                    suggestions: ["dotnet", "java", "nodejs", "none", "python"],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the functionapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the function app. Required if '--source-id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the function app. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: { name: "service-principal" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a functionapp. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--target-id",
                  description:
                    "The resource id of target service. Required if ['--target-resource-group', '--webpubsub'] are not specified",
                  args: { name: "target-id" },
                },
                {
                  name: ["--target-resource-group", "--tg"],
                  description:
                    "The resource group which contains the webpubsub. Required if '--target-id' is not specified",
                  args: { name: "target-resource-group" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: { name: "user-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
                {
                  name: "--webpubsub",
                  description:
                    "Name of the webpubsub service. Required if '--target-id' is not specified",
                  args: { name: "webpubsub" },
                },
              ],
            },
          ],
        },
        {
          name: "update",
          description: "Update a functionapp connection",
          subcommands: [
            {
              name: "appconfig",
              description: "Update a functionapp to appconfig connection",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the functionapp",
                  args: {
                    name: "client-type",
                    suggestions: ["dotnet", "java", "nodejs", "none", "python"],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the functionapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the function app. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the function app. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: { name: "service-principal" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: { name: "user-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "confluent-cloud",
              description: "Update a functionapp to confluent-cloud connection",
              options: [
                {
                  name: "--connection",
                  description: "Name of the connection",
                  args: { name: "connection" },
                  isRequired: true,
                },
                {
                  name: "--bootstrap-server",
                  description: "Kafka bootstrap server url",
                  args: { name: "bootstrap-server" },
                },
                {
                  name: "--client-type",
                  description: "The client type used on the functionapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "go",
                      "java",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--kafka-key",
                  description: "Kafka API-Key (key)",
                  args: { name: "kafka-key" },
                },
                {
                  name: "--kafka-secret",
                  description: "Kafka API-Key (secret)",
                  args: { name: "kafka-secret" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the function app. Required if '--source-id' is not specified.None",
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
                    "The resource group which contains the function app. Required if '--source-id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--schema-key",
                  description: "Schema registry API-Key (key)",
                  args: { name: "schema-key" },
                },
                {
                  name: "--schema-registry",
                  description: "Schema registry url",
                  args: { name: "schema-registry" },
                },
                {
                  name: "--schema-secret",
                  description: "Schema registry API-Key (secret)",
                  args: { name: "schema-secret" },
                },
                {
                  name: "--source-id",
                  description:
                    "The resource id of a functionapp. Required if ['--resource-group', '--name'] are not specified",
                  args: { name: "source-id" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "cosmos-cassandra",
              description:
                "Update a functionapp to cosmos-cassandra connection",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the functionapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the functionapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the function app. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the function app. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: { name: "service-principal" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: { name: "user-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "cosmos-gremlin",
              description: "Update a functionapp to cosmos-gremlin connection",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the functionapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "java",
                      "nodejs",
                      "none",
                      "php",
                      "python",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the functionapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the function app. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the function app. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: { name: "service-principal" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: { name: "user-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "cosmos-mongo",
              description: "Update a functionapp to cosmos-mongo connection",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the functionapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the functionapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the function app. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the function app. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: { name: "service-principal" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: { name: "user-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "cosmos-sql",
              description: "Update a functionapp to cosmos-sql connection",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the functionapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the functionapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the function app. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the function app. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: { name: "service-principal" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: { name: "user-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "cosmos-table",
              description: "Update a functionapp to cosmos-table connection",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the functionapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the functionapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the function app. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the function app. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: { name: "service-principal" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: { name: "user-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "eventhub",
              description: "Update a functionapp to eventhub connection",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the functionapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "go",
                      "java",
                      "kafka-springBoot",
                      "nodejs",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the functionapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the function app. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the function app. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: { name: "service-principal" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: { name: "user-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "keyvault",
              description: "Update a functionapp to keyvault connection",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the functionapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the functionapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the function app. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the function app. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: { name: "service-principal" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: { name: "user-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "mysql",
              description: "Update a functionapp to mysql connection",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the functionapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "django",
                      "dotnet",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "php",
                      "python",
                      "ruby",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the functionapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the function app. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the function app. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "mysql-flexible",
              description: "Update a functionapp to mysql-flexible connection",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the functionapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "django",
                      "dotnet",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "php",
                      "python",
                      "ruby",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the functionapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the function app. Required if '--id' is not specified.None",
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
                    "The resource group which contains the function app. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "postgres",
              description: "Update a functionapp to postgres connection",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the functionapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "django",
                      "dotnet",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "php",
                      "python",
                      "ruby",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the functionapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the function app. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the function app. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "postgres-flexible",
              description:
                "Update a functionapp to postgres-flexible connection",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the functionapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "django",
                      "dotnet",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "php",
                      "python",
                      "ruby",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the functionapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the function app. Required if '--id' is not specified.None",
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
                    "The resource group which contains the function app. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "redis",
              description: "Update a functionapp to redis connection",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the functionapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the functionapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the function app. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the function app. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "redis-enterprise",
              description:
                "Update a functionapp to redis-enterprise connection",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the functionapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the functionapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the function app. Required if '--id' is not specified.None",
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
                    "The resource group which contains the function app. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "servicebus",
              description: "Update a functionapp to servicebus connection",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the functionapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the functionapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the function app. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the function app. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: { name: "service-principal" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: { name: "user-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "signalr",
              description: "Update a functionapp to signalr connection",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the functionapp",
                  args: {
                    name: "client-type",
                    suggestions: ["dotnet", "none"],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the functionapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the function app. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the function app. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: { name: "service-principal" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: { name: "user-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "sql",
              description: "Update a functionapp to sql connection",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the functionapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "django",
                      "dotnet",
                      "go",
                      "java",
                      "nodejs",
                      "none",
                      "php",
                      "python",
                      "ruby",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the functionapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the function app. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the function app. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "storage-blob",
              description: "Update a functionapp to storage-blob connection",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the functionapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the functionapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the function app. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the function app. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: { name: "service-principal" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: { name: "user-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "storage-file",
              description: "Update a functionapp to storage-file connection",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the functionapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "java",
                      "nodejs",
                      "none",
                      "php",
                      "python",
                      "ruby",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the functionapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the function app. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the function app. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "storage-queue",
              description: "Update a functionapp to storage-queue connection",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the functionapp",
                  args: {
                    name: "client-type",
                    suggestions: [
                      "dotnet",
                      "java",
                      "nodejs",
                      "none",
                      "python",
                      "springBoot",
                    ],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the functionapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the function app. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the function app. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: { name: "service-principal" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: { name: "user-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "storage-table",
              description: "Update a functionapp to storage-table connection",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the functionapp",
                  args: {
                    name: "client-type",
                    suggestions: ["dotnet", "java", "nodejs", "none", "python"],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the functionapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the function app. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the function app. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service-endpoint",
                  description:
                    "Connect target service by service endpoint. Source resource must be in the VNet and target SKU must support service endpoint feature",
                  args: {
                    name: "service-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
            {
              name: "webpubsub",
              description: "Update a functionapp to webpubsub connection",
              options: [
                {
                  name: "--client-type",
                  description: "The client type used on the functionapp",
                  args: {
                    name: "client-type",
                    suggestions: ["dotnet", "java", "nodejs", "none", "python"],
                  },
                },
                {
                  name: "--connection",
                  description: "Name of the functionapp connection",
                  args: { name: "connection" },
                },
                {
                  name: "--customized-keys",
                  description:
                    "The customized keys used to change default configuration names. Key is the original name, value is the customized name",
                  args: { name: "customized-keys" },
                },
                {
                  name: "--id",
                  description:
                    "The resource id of the connection. ['--resource-group', '--name', '--connection'] are required if '--id' is not specified",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the function app. Required if '--id' is not specified.None",
                  args: { name: "name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-endpoint",
                  description:
                    "Connect target service by private endpoint. The private endpoint in source virtual network must be created ahead",
                  args: {
                    name: "private-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group which contains the function app. Required if '--id' is not specified.None",
                  args: { name: "resource-group" },
                },
                {
                  name: "--secret",
                  description: "The secret auth info",
                  args: { name: "secret" },
                },
                {
                  name: "--service-principal",
                  description: "The service principal auth info",
                  args: { name: "service-principal" },
                },
                {
                  name: "--system-identity",
                  description: "The system assigned identity auth info",
                  args: { name: "system-identity" },
                },
                {
                  name: "--user-identity",
                  description: "The user assigned identity auth info",
                  args: { name: "user-identity" },
                },
                {
                  name: "--vault-id",
                  description: "The id of key vault to store secret value",
                  args: { name: "vault-id" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "cors",
      description: "Manage Cross-Origin Resource Sharing (CORS)",
      subcommands: [
        {
          name: "add",
          description: "Add allowed origins",
          options: [
            {
              name: ["--allowed-origins", "-a"],
              description:
                'Space separated origins that should be allowed to make cross-origin calls (for example: http://example.com:12345). To allow all, use "*" and remove all other origins from the list',
              args: { name: "allowed-origins" },
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
              description: "Name of the function app",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--slot", "-s"],
              description:
                "The name of the slot. Default to the productions slot if not specified",
              args: { name: "slot" },
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
          name: "credentials",
          description: "Enable or disable access-control-allow-credentials",
          options: [
            {
              name: "--enable",
              description: "Enable/disable access-control-allow-credentials",
              args: { name: "enable", suggestions: ["false", "true"] },
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
              description: "Name of the function app",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--slot", "-s"],
              description:
                "The name of the slot. Default to the productions slot if not specified",
              args: { name: "slot" },
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
          description: "Remove allowed origins",
          options: [
            {
              name: ["--allowed-origins", "-a"],
              description:
                'Space separated origins that should be allowed to make cross-origin calls (for example: http://example.com:12345). To allow all, use "*" and remove all other origins from the list',
              args: { name: "allowed-origins" },
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
              description: "Name of the function app",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--slot", "-s"],
              description:
                "The name of the slot. Default to the productions slot if not specified",
              args: { name: "slot" },
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
          description: "Show allowed origins",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the function app",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--slot", "-s"],
              description:
                "The name of the slot. Default to the productions slot if not specified",
              args: { name: "slot" },
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
      name: "create",
      description: "Create a function app",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the new function app",
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
          name: ["--storage-account", "-s"],
          description:
            "Provide a string value of a Storage Account in the provided Resource Group. Or Resource ID of a Storage Account in a different Resource Group",
          args: { name: "storage-account" },
          isRequired: true,
        },
        {
          name: "--app-insights",
          description:
            "Name of the existing App Insights project to be added to the function app. Must be in the same resource group",
          args: { name: "app-insights" },
        },
        {
          name: "--app-insights-key",
          description: "Instrumentation key of App Insights to be added",
          args: { name: "app-insights-key" },
        },
        {
          name: "--assign-identity",
          description:
            "Accept system or user assigned identities separated by spaces. Use '[system]' to refer system assigned identity, or a resource id to refer user assigned identity. Check out help for more examples",
          args: { name: "assign-identity" },
        },
        {
          name: ["--consumption-plan-location", "-c"],
          description:
            "Geographic location where function app will be hosted. Use az functionapp list-consumption-locations to view available locations",
          args: { name: "consumption-plan-location" },
        },
        {
          name: "--deployment-container-image-name",
          description:
            "Option '--deployment-container-image-name' has been deprecated and will be removed in a future release. Use '--image' instead. Container image, e.g. publisher/image-name:tag",
          args: { name: "deployment-container-image-name" },
        },
        {
          name: ["--deployment-local-git", "-l"],
          description: "Enable local git",
          args: { name: "deployment-local-git" },
        },
        {
          name: ["--deployment-source-branch", "-b"],
          description: "The branch to deploy",
          args: { name: "deployment-source-branch" },
        },
        {
          name: ["--deployment-source-url", "-u"],
          description: "Git repository URL to link with manual integration",
          args: { name: "deployment-source-url" },
        },
        {
          name: "--disable-app-insights",
          description:
            "Disable creating application insights resource during functionapp create. No logs will be available",
          args: {
            name: "disable-app-insights",
            suggestions: ["false", "true"],
          },
        },
        {
          name: "--docker-registry-server-password",
          description:
            "Option '--docker-registry-server-password' has been deprecated and will be removed in a future release. Use '--registry-password' instead. The container registry server password. Required for private registries",
          args: { name: "docker-registry-server-password" },
        },
        {
          name: "--docker-registry-server-user",
          description:
            "Option '--docker-registry-server-user' has been deprecated and will be removed in a future release. Use '--registry-username' instead. The container registry server username",
          args: { name: "docker-registry-server-user" },
        },
        {
          name: "--environment",
          description: "Name of the container app environment",
          args: { name: "environment" },
        },
        {
          name: "--functions-version",
          description:
            "The functions app version. NOTE: This will be required starting the next release cycle",
          args: { name: "functions-version", suggestions: ["2", "3", "4"] },
        },
        {
          name: "--https-only",
          description:
            "Redirect all traffic made to an app using HTTP to HTTPS",
        },
        {
          name: ["--image", "-i"],
          description: "Container image, e.g. publisher/image-name:tag",
          args: { name: "image" },
        },
        {
          name: "--max-replicas",
          description:
            "The maximum number of replicas when create funtion app on container app",
          args: { name: "max-replicas" },
        },
        {
          name: "--min-replicas",
          description:
            "The minimum number of replicas when create funtion app on container app",
          args: { name: "min-replicas" },
        },
        {
          name: "--os-type",
          description: "Set the OS type for the app to be created",
          args: { name: "os-type", suggestions: ["Linux", "Windows"] },
        },
        {
          name: ["--plan", "-p"],
          description:
            "Name or resource id of the functionapp app service plan. Use 'appservice plan create' to get one. If using an App Service plan from a different resource group, the full resource id must be used and not the plan name",
          args: { name: "plan" },
        },
        {
          name: ["--registry-password", "-w"],
          description:
            "The container registry server password. Required for private registries",
          args: { name: "registry-password" },
        },
        {
          name: "--registry-server",
          description:
            "The container registry server hostname, e.g. myregistry.azurecr.io",
          args: { name: "registry-server" },
        },
        {
          name: ["--registry-username", "-d"],
          description: "The container registry server username",
          args: { name: "registry-username" },
        },
        {
          name: "--role",
          description: "Role name or id the system assigned identity will have",
          args: { name: "role" },
        },
        {
          name: "--runtime",
          description:
            'The functions runtime stack. Use "az functionapp list-runtimes" to check supported runtimes and versions',
          args: { name: "runtime" },
        },
        {
          name: "--runtime-version",
          description:
            'The version of the functions runtime stack. The functions runtime stack. Use "az functionapp list-runtimes" to check supported runtimes and versions',
          args: { name: "runtime-version" },
        },
        {
          name: "--scope",
          description: "Scope that the system assigned identity can access",
          args: { name: "scope" },
        },
        {
          name: "--subnet",
          description:
            "Name or resource ID of the pre-existing subnet to have the webapp join. The --vnet is argument also needed if specifying subnet by name",
          args: { name: "subnet" },
        },
        {
          name: "--tags",
          description:
            'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
          args: { name: "tags" },
        },
        {
          name: "--vnet",
          description:
            "Name or resource ID of the regional virtual network. If there are multiple vnets of the same name across different resource groups, use vnet resource id to specify which vnet to use. If vnet name is used, by default, the vnet in the same resource group as the webapp will be used. Must be used with --subnet argument",
          args: { name: "vnet" },
        },
      ],
    },
    {
      name: "delete",
      description: "Delete a function app",
      options: [
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: "--keep-empty-plan",
          description: "Keep empty app service plan",
          args: { name: "keep-empty-plan" },
        },
        {
          name: ["--name", "-n"],
          description: "The name of the functionapp",
          args: { name: "name" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: ["--slot", "-s"],
          description:
            "The name of the slot. Default to the productions slot if not specified",
          args: { name: "slot" },
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
      name: "deploy",
      description: "Deploys a provided artifact to Azure functionapp",
      options: [
        {
          name: "--async",
          description: "Asynchronous deployment",
          args: { name: "async", suggestions: ["false", "true"] },
        },
        {
          name: "--clean",
          description:
            "If true, cleans the target directory prior to deploying the file(s). Default value is determined based on artifact type",
          args: { name: "clean", suggestions: ["false", "true"] },
        },
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: "--ignore-stack",
          description: "If true, any stack-specific defaults are ignored",
          args: { name: "ignore-stack", suggestions: ["false", "true"] },
        },
        {
          name: ["--name", "-n"],
          description: "Name of the function app to deploy to",
          args: { name: "name" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: "--restart",
          description:
            "If true, the web app will be restarted following the deployment, default value is true. Set this to false if you are deploying multiple artifacts and do not want to restart the site on the earlier deployments",
          args: { name: "restart", suggestions: ["false", "true"] },
        },
        {
          name: ["--slot", "-s"],
          description:
            "The name of the slot. Default to the productions slot if not specified",
          args: { name: "slot" },
        },
        {
          name: "--src-path",
          description:
            'Path of the artifact to be deployed. Ex: "myapp.zip" or "/myworkspace/apps/myapp.war"',
          args: { name: "src-path" },
        },
        {
          name: "--src-url",
          description:
            'URL of the artifact. The webapp will pull the artifact from this URL. Ex: "http://mysite.com/files/myapp.war?key=123"',
          args: { name: "src-url" },
        },
        {
          name: "--subscription",
          description:
            "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
          args: { name: "subscription" },
        },
        {
          name: "--target-path",
          description:
            'Absolute path that the artifact should be deployed to. Defaults to "home/site/wwwroot/". Ex: "/home/site/deployments/tools/", "/home/site/scripts/startup-script.sh"',
          args: { name: "target-path" },
        },
        {
          name: "--timeout",
          description: "Timeout for the deployment operation in milliseconds",
          args: { name: "timeout" },
        },
        {
          name: "--type",
          description: "Used to override the type of artifact being deployed",
          args: {
            name: "type",
            suggestions: [
              "ear",
              "jar",
              "lib",
              "startup",
              "static",
              "war",
              "zip",
            ],
          },
        },
      ],
    },
    {
      name: "list",
      description: "List function apps",
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
      name: "list-consumption-locations",
      description: "List available locations for running function apps",
    },
    {
      name: "list-runtimes",
      description:
        "List available built-in stacks which can be used for function apps",
      options: [
        {
          name: ["--os-type", "--os"],
          description: "Limit the output to just windows or linux runtimes",
          args: { name: "os-type", suggestions: ["linux", "windows"] },
        },
      ],
    },
    {
      name: "restart",
      description: "Restart a function app",
      options: [
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: ["--name", "-n"],
          description: "Name of the function app",
          args: { name: "name" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: ["--slot", "-s"],
          description:
            "The name of the slot. Default to the productions slot if not specified",
          args: { name: "slot" },
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
      description: "Get the details of a function app",
      options: [
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: ["--name", "-n"],
          description: "Name of the function app",
          args: { name: "name" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: ["--slot", "-s"],
          description:
            "The name of the slot. Default to the productions slot if not specified",
          args: { name: "slot" },
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
      name: "start",
      description: "Start a function app",
      options: [
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: ["--name", "-n"],
          description: "Name of the function app",
          args: { name: "name" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: ["--slot", "-s"],
          description:
            "The name of the slot. Default to the productions slot if not specified",
          args: { name: "slot" },
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
      name: "stop",
      description: "Stop a function app",
      options: [
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: ["--name", "-n"],
          description: "Name of the function app",
          args: { name: "name" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: ["--slot", "-s"],
          description:
            "The name of the slot. Default to the productions slot if not specified",
          args: { name: "slot" },
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
      description: "Update a function app",
      options: [
        {
          name: "--add",
          description:
            "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
          args: { name: "add" },
        },
        {
          name: "--force",
          description:
            "Required if attempting to migrate functionapp from Premium to Consumption --plan",
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
          description: "Name of the function app",
          args: { name: "name" },
        },
        {
          name: "--plan",
          description:
            "The name or resource id of the plan to update the functionapp with",
          args: { name: "plan" },
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
          name: ["--slot", "-s"],
          description:
            "The name of the slot. Default to the productions slot if not specified",
          args: { name: "slot" },
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
      name: "deployment",
      description: "Manage function app deployments",
      subcommands: [
        {
          name: "list-publishing-credentials",
          description:
            "Get the details for available function app publishing credentials",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the function app",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--slot", "-s"],
              description:
                "The name of the slot. Default to the productions slot if not specified",
              args: { name: "slot" },
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
          name: "list-publishing-profiles",
          description:
            "Get the details for available function app deployment profiles",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the function app",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--slot", "-s"],
              description:
                "The name of the slot. Default to the productions slot if not specified",
              args: { name: "slot" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--xml",
              description:
                "Retrieves the publishing profile details in XML format",
            },
          ],
        },
        {
          name: "container",
          description: "Manage container-based continuous deployment",
          subcommands: [
            {
              name: "config",
              description: "Configure continuous deployment via containers",
              options: [
                {
                  name: ["--enable-cd", "-e"],
                  description: "Enable/disable continuous deployment",
                  args: { name: "enable-cd", suggestions: ["false", "true"] },
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
                  description: "Name of the function app",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
              name: "show-cd-url",
              description:
                "Get the URL which can be used to configure webhooks for continuous deployment",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the function app",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
          name: "github-actions",
          description: "Configure GitHub Actions for a functionapp",
          subcommands: [
            {
              name: "add",
              description:
                "Add a GitHub Actions workflow file to the specified repository. The workflow will build and deploy your app to the specified functionapp",
              options: [
                {
                  name: "--repo",
                  description:
                    "The GitHub repository to which the workflow file will be added. In the format: https://github.com// or /",
                  args: { name: "repo" },
                  isRequired: true,
                },
                {
                  name: ["--branch", "-b"],
                  description:
                    "The branch to which the workflow file will be added",
                  args: { name: "branch" },
                },
                {
                  name: "--build-path",
                  description:
                    "Path to the build requirements. Ex: package path, POM XML directory",
                  args: { name: "build-path" },
                },
                {
                  name: ["--force", "-f"],
                  description:
                    "When true, the command will overwrite any workflow file with a conflicting name",
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--login-with-github",
                  description:
                    "Interactively log in with Github to retrieve the Personal Access Token",
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the function app",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--runtime", "-r"],
                  description:
                    'The functions runtime stack. Use "az functionapp list-runtimes" to check supported runtimes and versions',
                  args: { name: "runtime" },
                },
                {
                  name: ["--runtime-version", "-v"],
                  description:
                    'The version of the functions runtime stack. The functions runtime stack. Use "az functionapp list-runtimes" to check supported runtimes and versions',
                  args: { name: "runtime-version" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--token",
                  description:
                    "A Personal Access Token with write access to the specified repository. For more information: https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line",
                  args: { name: "token" },
                },
              ],
            },
            {
              name: "remove",
              description:
                "Remove and disconnect the GitHub Actions workflow file from the specified repository",
              options: [
                {
                  name: "--repo",
                  description:
                    "The GitHub repository to which the workflow file will be added. In the format: https://github.com// or /",
                  args: { name: "repo" },
                  isRequired: true,
                },
                {
                  name: ["--branch", "-b"],
                  description:
                    "The branch to which the workflow file will be added",
                  args: { name: "branch" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--login-with-github",
                  description:
                    "Interactively log in with Github to retrieve the Personal Access Token",
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the function app",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the production slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--token",
                  description:
                    "A Personal Access Token with write access to the specified repository. For more information: https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line",
                  args: { name: "token" },
                },
              ],
            },
          ],
        },
        {
          name: "slot",
          description: "Manage function app deployment slots",
          subcommands: [
            {
              name: "auto-swap",
              description: "Configure deployment slot auto swap",
              options: [
                {
                  name: ["--slot", "-s"],
                  description: "The name of the slot",
                  args: { name: "slot" },
                  isRequired: true,
                },
                {
                  name: "--auto-swap-slot",
                  description: "Target slot to auto swap",
                  args: { name: "auto-swap-slot" },
                },
                {
                  name: "--disable",
                  description: "Disable auto swap",
                  args: { name: "disable" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the function app",
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
              name: "create",
              description: "Create a deployment slot",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the function app",
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
                  name: ["--slot", "-s"],
                  description: "The name of the slot",
                  args: { name: "slot" },
                  isRequired: true,
                },
                {
                  name: "--configuration-source",
                  description:
                    "Source slot to clone configurations from. Use function app's name to refer to the production slot",
                  args: { name: "configuration-source" },
                },
                {
                  name: "--deployment-container-image-name",
                  description:
                    "Option '--deployment-container-image-name' has been deprecated and will be removed in a future release. Use '--image' instead. Container image, e.g. publisher/image-name:tag",
                  args: { name: "deployment-container-image-name" },
                },
                {
                  name: "--docker-registry-server-password",
                  description:
                    "Option '--docker-registry-server-password' has been deprecated and will be removed in a future release. Use '--registry-password' instead. The container registry server password",
                  args: { name: "docker-registry-server-password" },
                },
                {
                  name: "--docker-registry-server-user",
                  description:
                    "Option '--docker-registry-server-user' has been deprecated and will be removed in a future release. Use '--registry-username' instead. The container registry server username",
                  args: { name: "docker-registry-server-user" },
                },
                {
                  name: ["--image", "-i"],
                  description: "Container image, e.g. publisher/image-name:tag",
                  args: { name: "image" },
                },
                {
                  name: ["--registry-password", "-d"],
                  description: "The container registry server password",
                  args: { name: "registry-password" },
                },
                {
                  name: ["--registry-username", "-u"],
                  description: "The container registry server username",
                  args: { name: "registry-username" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a deployment slot",
              options: [
                {
                  name: ["--slot", "-s"],
                  description: "The name of the slot",
                  args: { name: "slot" },
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
                  description: "Name of the function app",
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
              description: "List all deployment slots",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the function app",
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
              name: "swap",
              description: "Swap deployment slots for a function app",
              options: [
                {
                  name: ["--slot", "-s"],
                  description: "The name of the slot",
                  args: { name: "slot" },
                  isRequired: true,
                },
                {
                  name: "--action",
                  description:
                    "Swap types. use 'preview' to apply target slot's settings on the source slot first; use 'swap' to complete it; use 'reset' to reset the swap",
                  args: {
                    name: "action",
                    suggestions: ["preview", "reset", "swap"],
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
                  description: "Name of the function app",
                  args: { name: "name" },
                },
                {
                  name: "--preserve-vnet",
                  description:
                    "Preserve Virtual Network to the slot during swap, default to 'true'",
                  args: {
                    name: "preserve-vnet",
                    suggestions: ["false", "true"],
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
                  name: "--target-slot",
                  description: "Target slot to swap, default to 'production'",
                  args: { name: "target-slot" },
                },
              ],
            },
          ],
        },
        {
          name: "source",
          description: "Manage function app deployment via source control",
          subcommands: [
            {
              name: "config",
              description:
                "Manage deployment from git or Mercurial repositories",
              options: [
                {
                  name: ["--repo-url", "-u"],
                  description:
                    "Repository url to pull the latest source from, e.g. https://github.com/foo/foo-web",
                  args: { name: "repo-url" },
                  isRequired: true,
                },
                {
                  name: "--branch",
                  description: "The branch name of the repository",
                  args: { name: "branch" },
                },
                {
                  name: "--git-token",
                  description: "Git access token required for auto sync",
                  args: { name: "git-token" },
                },
                {
                  name: "--github-action",
                  description: "If using GitHub action, default to False",
                  args: { name: "github-action" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--manual-integration",
                  description:
                    "Disable automatic sync between source control and web",
                  args: { name: "manual-integration" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the function app",
                  args: { name: "name" },
                },
                {
                  name: "--repository-type",
                  description: "Repository type",
                  args: {
                    name: "repository-type",
                    suggestions: [
                      "externalgit",
                      "git",
                      "github",
                      "localgit",
                      "mercurial",
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
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
              name: "config-local-git",
              description:
                "Get a URL for a git repository endpoint to clone and push to for function app deployment",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the function app",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
              name: "config-zip",
              description:
                "Perform deployment using the kudu zip push deployment for a function app",
              options: [
                {
                  name: "--src",
                  description: "A zip file path for deployment",
                  args: { name: "src" },
                  isRequired: true,
                },
                {
                  name: "--build-remote",
                  description: "Enable remote build during deployment",
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the function app",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: ["--timeout", "-t"],
                  description:
                    "Configurable timeout in seconds for checking the status of deployment",
                  args: { name: "timeout" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a source control deployment configuration",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the function app",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
                "Get the details of a source control deployment configuration",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the function app",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
              name: "sync",
              description:
                "Synchronize from the repository. Only needed under manual integration mode",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the function app",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
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
              name: "update-token",
              description:
                "Update source control token cached in Azure app service",
              options: [
                {
                  name: "--git-token",
                  description: "Git access token required for auto sync",
                  args: { name: "git-token" },
                },
              ],
            },
          ],
        },
        {
          name: "user",
          description: "Manage user credentials for deployment",
          subcommands: [
            {
              name: "set",
              description: "Update deployment credentials",
              options: [
                {
                  name: "--user-name",
                  description: "User name",
                  args: { name: "user-name" },
                  isRequired: true,
                },
                {
                  name: "--password",
                  description: "Password, will prompt if not specified",
                  args: { name: "password" },
                },
              ],
            },
            { name: "show", description: "Gets publishing user" },
          ],
        },
      ],
    },
    {
      name: "devops-pipeline",
      description:
        "Azure Function specific integration with Azure DevOps. Please visit https://aka.ms/functions-azure-devops for more information",
      subcommands: [
        {
          name: "create",
          description: "Create an Azure DevOps pipeline for a function app",
          options: [
            {
              name: "--allow-force-push",
              description:
                "If Azure DevOps repository is not clean, should it overwrite remote content?",
              args: {
                name: "allow-force-push",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--functionapp-name",
              description:
                "Name of the Azure function app that you want to use",
              args: { name: "functionapp-name" },
            },
            {
              name: "--github-pat",
              description:
                "Github personal access token for creating pipeline from Github repository",
              args: { name: "github-pat" },
            },
            {
              name: "--github-repository",
              description:
                "Fullname of your Github repository (e.g. Azure/azure-cli)",
              args: { name: "github-repository" },
            },
            {
              name: "--organization-name",
              description:
                "Name of the Azure DevOps organization that you want to use",
              args: { name: "organization-name" },
            },
            {
              name: "--overwrite-yaml",
              description:
                "If you have an existing yaml, should it be overwritten?",
              args: { name: "overwrite-yaml", suggestions: ["false", "true"] },
            },
            {
              name: "--project-name",
              description:
                "Name of the Azure DevOps project that you want to use",
              args: { name: "project-name" },
            },
            {
              name: "--repository-name",
              description:
                "Name of the Azure DevOps repository that you want to use",
              args: { name: "repository-name" },
            },
          ],
        },
      ],
    },
    {
      name: "function",
      description: "Manage function app functions",
      subcommands: [
        {
          name: "delete",
          description: "Delete a function",
          options: [
            {
              name: "--function-name",
              description: "Name of the Function",
              args: { name: "function-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the function app",
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
          description: "List functions in a function app",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the function app",
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
          description: "Get the details of a function",
          options: [
            {
              name: "--function-name",
              description: "Name of the Function",
              args: { name: "function-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the function app",
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
          name: "keys",
          description: "Manage function keys",
          subcommands: [
            {
              name: "delete",
              description: "Delete a function key",
              options: [
                {
                  name: "--key-name",
                  description: "Name of the key to set",
                  args: { name: "key-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the function app",
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
                  name: "--function-name",
                  description: "Name of the Function",
                  args: { name: "function-name" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Defaults to the productions slot if not specified",
                  args: { name: "slot" },
                },
              ],
            },
            {
              name: "list",
              description: "List all function keys",
              options: [
                {
                  name: "--function-name",
                  description: "Name of the Function",
                  args: { name: "function-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the function app",
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
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Defaults to the productions slot if not specified",
                  args: { name: "slot" },
                },
              ],
            },
            {
              name: "set",
              description: "Create or update a function key",
              options: [
                {
                  name: "--function-name",
                  description: "Name of the Function",
                  args: { name: "function-name" },
                  isRequired: true,
                },
                {
                  name: "--key-name",
                  description: "Name of the key to set",
                  args: { name: "key-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the function app",
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
                  name: "--key-value",
                  description:
                    "Value of the new key. If not provided, a value will be generated",
                  args: { name: "key-value" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Defaults to the productions slot if not specified",
                  args: { name: "slot" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "hybrid-connection",
      description:
        "Methods that list, add and remove hybrid-connections from functionapp",
      subcommands: [
        {
          name: "add",
          description: "Add an existing hybrid-connection to a functionapp",
          options: [
            {
              name: "--hybrid-connection",
              description: "Hybrid connection name",
              args: { name: "hybrid-connection" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the function app",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--namespace",
              description: "Hybrid connection namespace",
              args: { name: "namespace" },
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
              name: ["--slot", "-s"],
              description:
                "The name of the slot. Default to the productions slot if not specified",
              args: { name: "slot" },
            },
          ],
        },
        {
          name: "list",
          description: "List the hybrid-connections on a functionapp",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the function app",
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
              name: ["--slot", "-s"],
              description:
                "The name of the slot. Default to the productions slot if not specified",
              args: { name: "slot" },
            },
          ],
        },
        {
          name: "remove",
          description: "Remove a hybrid-connection from a functionapp",
          options: [
            {
              name: "--hybrid-connection",
              description: "Hybrid connection name",
              args: { name: "hybrid-connection" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the function app",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--namespace",
              description: "Hybrid connection namespace",
              args: { name: "namespace" },
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
              name: ["--slot", "-s"],
              description:
                "The name of the slot. Default to the productions slot if not specified",
              args: { name: "slot" },
            },
          ],
        },
      ],
    },
    {
      name: "identity",
      description: "Manage web app's managed identity",
      subcommands: [
        {
          name: "assign",
          description: "Assign managed identity to the web app",
          options: [
            {
              name: "--identities",
              description:
                "Space-separated identities to assign. Use '[system]' to refer to the system assigned identity. Default: '[system]'",
              args: { name: "identities" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the function app",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--role",
              description:
                "Role name or id the managed identity will be assigned",
              args: { name: "role" },
            },
            {
              name: "--scope",
              description: "The scope the managed identity has access to",
              args: { name: "scope" },
            },
            {
              name: ["--slot", "-s"],
              description:
                "The name of the slot. Default to the productions slot if not specified",
              args: { name: "slot" },
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
          description: "Disable web app's managed identity",
          options: [
            {
              name: "--identities",
              description:
                "Space-separated identities to assign. Use '[system]' to refer to the system assigned identity. Default: '[system]'",
              args: { name: "identities" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the function app",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--slot", "-s"],
              description:
                "The name of the slot. Default to the productions slot if not specified",
              args: { name: "slot" },
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
          description: "Display web app's managed identity",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the function app",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--slot", "-s"],
              description:
                "The name of the slot. Default to the productions slot if not specified",
              args: { name: "slot" },
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
      name: "keys",
      description: "Manage function app keys",
      subcommands: [
        {
          name: "delete",
          description: "Delete a function app key",
          options: [
            {
              name: "--key-name",
              description: "Name of the key to set",
              args: { name: "key-name" },
              isRequired: true,
            },
            {
              name: "--key-type",
              description: "Type of key",
              args: {
                name: "key-type",
                suggestions: ["functionKeys", "masterKey", "systemKeys"],
              },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the function app",
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
              name: ["--slot", "-s"],
              description:
                "The name of the slot. Defaults to the productions slot if not specified",
              args: { name: "slot" },
            },
          ],
        },
        {
          name: "list",
          description: "List all function app keys",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the function app",
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
              name: ["--slot", "-s"],
              description:
                "The name of the slot. Defaults to the productions slot if not specified",
              args: { name: "slot" },
            },
          ],
        },
        {
          name: "set",
          description: "Create or update a function app key",
          options: [
            {
              name: "--key-name",
              description: "Name of the key to set",
              args: { name: "key-name" },
              isRequired: true,
            },
            {
              name: "--key-type",
              description: "Type of key",
              args: {
                name: "key-type",
                suggestions: ["functionKeys", "masterKey", "systemKeys"],
              },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the function app",
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
              name: "--key-value",
              description:
                "Value of the new key. If not provided, a value will be generated",
              args: { name: "key-value" },
            },
            {
              name: ["--slot", "-s"],
              description:
                "The name of the slot. Defaults to the productions slot if not specified",
              args: { name: "slot" },
            },
          ],
        },
      ],
    },
    {
      name: "log",
      description: "Manage function app logs",
      subcommands: [
        {
          name: "deployment",
          description: "Manage function app deployment logs",
          subcommands: [
            {
              name: "list",
              description:
                "List deployment logs of the deployments associated with function app",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the function app",
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
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
                },
              ],
            },
            {
              name: "show",
              description:
                "Show deployment logs of the latest deployment, or a specific deployment if deployment-id is specified",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the function app",
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
                  name: "--deployment-id",
                  description:
                    "Deployment ID. If none specified, returns the deployment logs of the latest deployment",
                  args: { name: "deployment-id" },
                },
                {
                  name: ["--slot", "-s"],
                  description:
                    "The name of the slot. Default to the productions slot if not specified",
                  args: { name: "slot" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "plan",
      description: "Manage App Service Plans for an Azure Function",
      subcommands: [
        {
          name: "create",
          description: "Create an App Service Plan for an Azure Function",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the app service plan",
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
              name: "--sku",
              description:
                "The SKU of the app service plan. e.g., F1(Free), D1(Shared), B1(Basic Small), B2(Basic Medium), B3(Basic Large), S1(Standard Small), P1V2(Premium V2 Small), I1 (Isolated Small), I2 (Isolated Medium), I3 (Isolated Large), K1 (Kubernetes)",
              args: { name: "sku" },
              isRequired: true,
            },
            {
              name: "--is-linux",
              description: "Host function app on Linux worker",
              args: { name: "is-linux", suggestions: ["false", "true"] },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--max-burst",
              description: "The maximum number of elastic workers for the plan",
              args: { name: "max-burst" },
            },
            {
              name: ["--number-of-workers", "--min-instances"],
              description: "The number of workers for the app service plan",
              args: { name: "number-of-workers" },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
            {
              name: ["--zone-redundant", "-z"],
              description:
                "Enable zone redundancy for high availability. Cannot be changed after plan creation. Minimum instance count is 3",
            },
          ],
        },
        {
          name: "delete",
          description: "Delete an App Service Plan",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the app service plan",
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
          description: "List App Service Plans",
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
          description:
            "Get the App Service Plans for a resource group or a set of resource groups",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the app service plan",
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
          description: "Update an App Service plan for an Azure Function",
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
              name: "--max-burst",
              description: "The maximum number of elastic workers for the plan",
              args: { name: "max-burst" },
            },
            {
              name: ["--number-of-workers", "--min-instances"],
              description: "The number of workers for the app service plan",
              args: { name: "number-of-workers" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the app service plan",
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
              name: "--sku",
              description: "The SKU of the app service plan",
              args: { name: "sku" },
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
      name: "vnet-integration",
      description:
        "Methods that list, add, and remove virtual networks integrations from a functionapp",
      subcommands: [
        {
          name: "add",
          description:
            "Add a regional virtual network integration to a functionapp",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the function app",
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
              name: "--subnet",
              description: "The name or resource ID of the subnet",
              args: { name: "subnet" },
              isRequired: true,
            },
            {
              name: "--vnet",
              description: "The name or resource ID of the Vnet",
              args: { name: "vnet" },
              isRequired: true,
            },
            {
              name: "--skip-delegation-check",
              description:
                "Skip check if you do not have permission or the VNet is in another subscription",
            },
            {
              name: ["--slot", "-s"],
              description:
                "The name of the slot. Default to the productions slot if not specified",
              args: { name: "slot" },
            },
          ],
        },
        {
          name: "list",
          description: "List the virtual network integrations on a functionapp",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the function app",
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
              name: ["--slot", "-s"],
              description:
                "The name of the slot. Default to the productions slot if not specified",
              args: { name: "slot" },
            },
          ],
        },
        {
          name: "remove",
          description:
            "Remove a regional virtual network integration from functionapp",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the function app",
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
              name: ["--slot", "-s"],
              description:
                "The name of the slot. Default to the productions slot if not specified",
              args: { name: "slot" },
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
