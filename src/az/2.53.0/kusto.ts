const completion: Fig.Spec = {
  name: "kusto",
  description: "Manage Azure Kusto resources",
  subcommands: [
    {
      name: "attached-database-configuration",
      description: "Manage attached database configuration with kusto",
      subcommands: [
        {
          name: "create",
          description: "Create an attached database configuration",
          options: [
            {
              name: ["--attached-database-configuration-name", "--name", "-n"],
              description: "The name of the attached database configuration",
              args: { name: "attached-database-configuration-name" },
              isRequired: true,
            },
            {
              name: "--cluster-name",
              description: "The name of the Kusto cluster",
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
              name: "--cluster-resource-id",
              description:
                "The resource id of the cluster where the databases you would like to attach reside",
              args: { name: "cluster-resource-id" },
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
              name: ["--table-level-sharing-properties", "--table-level"],
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
              name: ["--attached-database-configuration-name", "--name", "-n"],
              description: "The name of the attached database configuration",
              args: { name: "attached-database-configuration-name" },
            },
            {
              name: "--cluster-name",
              description: "The name of the Kusto cluster",
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
            "Returns the list of attached database configurations of the given Kusto cluster",
          options: [
            {
              name: "--cluster-name",
              description: "The name of the Kusto cluster",
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
          ],
        },
        {
          name: "show",
          description: "Returns an attached database configuration",
          options: [
            {
              name: ["--attached-database-configuration-name", "--name", "-n"],
              description: "The name of the attached database configuration",
              args: { name: "attached-database-configuration-name" },
            },
            {
              name: "--cluster-name",
              description: "The name of the Kusto cluster",
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
          description: "Update an attached database configuration",
          options: [
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: ["--attached-database-configuration-name", "--name", "-n"],
              description: "The name of the attached database configuration",
              args: { name: "attached-database-configuration-name" },
            },
            {
              name: "--cluster-name",
              description: "The name of the Kusto cluster",
              args: { name: "cluster-name" },
            },
            {
              name: "--cluster-resource-id",
              description:
                "The resource id of the cluster where the databases you would like to attach reside",
              args: { name: "cluster-resource-id" },
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
              name: ["--table-level-sharing-properties", "--table-level"],
              description: "Table level sharing specifications",
              args: { name: "table-level-sharing-properties" },
            },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the kusto attached-database-configuration is met",
          options: [
            {
              name: ["--attached-database-configuration-name", "--name", "-n"],
              description: "The name of the attached database configuration",
              args: { name: "attached-database-configuration-name" },
            },
            {
              name: "--cluster-name",
              description: "The name of the Kusto cluster",
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
      name: "cluster",
      description:
        'Manage Azure Kusto clusters.\n\n\t\tThis module will not be supported starting January 1, 2021. Please execute "az extension add -n kusto" to install the supported Kusto extension',
      subcommands: [
        {
          name: "add-language-extension",
          description:
            "Add a list of language extensions that can run within KQL queries",
          options: [
            {
              name: ["--cluster-name", "--name", "-n"],
              description: "The name of the Kusto cluster",
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
          ],
        },
        {
          name: "create",
          description: "Create a Kusto cluster",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the cluster",
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
              description: "The name of the sku",
              args: {
                name: "sku",
                suggestions: [
                  "Dev(No SLA)_Standard_D11_v2",
                  "Dev(No SLA)_Standard_E2a_v4",
                  "Standard_D11_v2",
                  "Standard_D12_v2",
                  "Standard_D13_v2",
                  "Standard_D14_v2",
                  "Standard_DS13_v2+1TB_PS",
                  "Standard_DS13_v2+2TB_PS",
                  "Standard_DS14_v2+3TB_PS",
                  "Standard_DS14_v2+4TB_PS",
                  "Standard_E16a_v4",
                  "Standard_E16as_v4+3TB_PS",
                  "Standard_E16as_v4+4TB_PS",
                  "Standard_E2a_v4",
                  "Standard_E4a_v4",
                  "Standard_E8a_v4",
                  "Standard_E8as_v4+1TB_PS",
                  "Standard_E8as_v4+2TB_PS",
                  "Standard_L16s",
                  "Standard_L4s",
                  "Standard_L8s",
                ],
              },
              isRequired: true,
            },
            {
              name: "--capacity",
              description: "The instance number of the VM",
              args: { name: "capacity" },
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
          ],
        },
        {
          name: "delete",
          description: "Delete a Kusto cluster",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the cluster",
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
          name: "detach-follower-database",
          description:
            "Detaches all followers of a database owned by this cluster",
          options: [
            {
              name: "--attached-database-configuration-name",
              description:
                "Resource name of the attached database configuration in the follower cluster",
              args: { name: "attached-database-configuration-name" },
              isRequired: true,
            },
            {
              name: "--cluster-resource-id",
              description:
                "Resource id of the cluster that follows a database owned by this cluster",
              args: { name: "cluster-resource-id" },
              isRequired: true,
            },
            {
              name: ["--cluster-name", "--name", "-n"],
              description: "The name of the Kusto cluster",
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
          name: "diagnose-virtual-network",
          description:
            "Diagnoses network connectivity status for external resources on which the service is dependent on",
          options: [
            {
              name: ["--cluster-name", "--name", "-n"],
              description: "The name of the Kusto cluster",
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
          description: "List a Kusto cluster",
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
          name: "list-follower-database",
          description:
            "Returns a list of databases that are owned by this cluster and were followed by another cluster",
          options: [
            {
              name: ["--cluster-name", "--name", "-n"],
              description: "The name of the Kusto cluster",
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
          ],
        },
        {
          name: "list-language-extension",
          description:
            "Returns a list of language extensions that can run within KQL queries",
          options: [
            {
              name: ["--cluster-name", "--name", "-n"],
              description: "The name of the Kusto cluster",
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
          ],
        },
        {
          name: "list-outbound-network-dependency-endpoint",
          description:
            "Gets the network endpoints of all outbound dependencies of a Kusto cluster",
          options: [
            {
              name: ["--cluster-name", "--name", "-n"],
              description: "The name of the Kusto cluster",
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
          ],
        },
        {
          name: "list-sku",
          description:
            "Returns the SKUs available for the provided resource. And Lists eligible SKUs for Kusto resource provider",
          options: [
            {
              name: ["--cluster-name", "--name", "-n"],
              description: "The name of the Kusto cluster",
              args: { name: "cluster-name" },
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
          name: "remove-language-extension",
          description:
            "Remove a list of language extensions that can run within KQL queries",
          options: [
            {
              name: ["--cluster-name", "--name", "-n"],
              description: "The name of the Kusto cluster",
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
          ],
        },
        {
          name: "show",
          description: "Get a Kusto cluster",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the cluster",
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
          name: "start",
          description: "Start a Kusto cluster",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the cluster",
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
          ],
        },
        {
          name: "stop",
          description: "Stop a Kusto cluster",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the cluster",
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
          ],
        },
        {
          name: "update",
          description: "Update a Kusto cluster",
          options: [
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: "--capacity",
              description: "The instance number of the VM",
              args: { name: "capacity" },
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
              description: "The name of the cluster",
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
              description: "The name of the sku",
              args: {
                name: "sku",
                suggestions: [
                  "Dev(No SLA)_Standard_D11_v2",
                  "Dev(No SLA)_Standard_E2a_v4",
                  "Standard_D11_v2",
                  "Standard_D12_v2",
                  "Standard_D13_v2",
                  "Standard_D14_v2",
                  "Standard_DS13_v2+1TB_PS",
                  "Standard_DS13_v2+2TB_PS",
                  "Standard_DS14_v2+3TB_PS",
                  "Standard_DS14_v2+4TB_PS",
                  "Standard_E16a_v4",
                  "Standard_E16as_v4+3TB_PS",
                  "Standard_E16as_v4+4TB_PS",
                  "Standard_E2a_v4",
                  "Standard_E4a_v4",
                  "Standard_E8a_v4",
                  "Standard_E8as_v4+1TB_PS",
                  "Standard_E8as_v4+2TB_PS",
                  "Standard_L16s",
                  "Standard_L4s",
                  "Standard_L8s",
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
        {
          name: "wait",
          description:
            "Wait for a managed Kusto cluster to reach a desired state",
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
              description: "The name of the cluster",
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
      name: "cluster-principal-assignment",
      description: "Manage cluster principal assignment with kusto",
      subcommands: [
        {
          name: "create",
          description: "Create a Kusto cluster principalAssignment",
          options: [
            {
              name: "--cluster-name",
              description: "The name of the Kusto cluster",
              args: { name: "cluster-name" },
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
          description: "Deletes a Kusto cluster principalAssignment",
          options: [
            {
              name: "--cluster-name",
              description: "The name of the Kusto cluster",
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
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "Lists all Kusto cluster principalAssignments",
          options: [
            {
              name: "--cluster-name",
              description: "The name of the Kusto cluster",
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
          ],
        },
        {
          name: "show",
          description: "Gets a Kusto cluster principalAssignment",
          options: [
            {
              name: "--cluster-name",
              description: "The name of the Kusto cluster",
              args: { name: "cluster-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
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
          ],
        },
        {
          name: "update",
          description: "Update a Kusto cluster principalAssignment",
          options: [
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: "--cluster-name",
              description: "The name of the Kusto cluster",
              args: { name: "cluster-name" },
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
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the kusto cluster-principal-assignment is met",
          options: [
            {
              name: "--cluster-name",
              description: "The name of the Kusto cluster",
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
          ],
        },
      ],
    },
    {
      name: "data-connection",
      description: "Manage data connection with kusto",
      subcommands: [
        {
          name: "delete",
          description: "Deletes the data connection with the given name",
          options: [
            {
              name: "--cluster-name",
              description: "The name of the Kusto cluster",
              args: { name: "cluster-name" },
            },
            {
              name: ["--data-connection-name", "--name", "-n"],
              description: "The name of the data connection",
              args: { name: "data-connection-name" },
            },
            {
              name: "--database-name",
              description: "The name of the database in the Kusto cluster",
              args: { name: "database-name" },
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
            "Returns the list of data connections of the given Kusto database",
          options: [
            {
              name: "--cluster-name",
              description: "The name of the Kusto cluster",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: "--database-name",
              description: "The name of the database in the Kusto cluster",
              args: { name: "database-name" },
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
          description: "Returns a data connection",
          options: [
            {
              name: "--cluster-name",
              description: "The name of the Kusto cluster",
              args: { name: "cluster-name" },
            },
            {
              name: ["--data-connection-name", "--name", "-n"],
              description: "The name of the data connection",
              args: { name: "data-connection-name" },
            },
            {
              name: "--database-name",
              description: "The name of the database in the Kusto cluster",
              args: { name: "database-name" },
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
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the kusto data-connection is met",
          options: [
            {
              name: "--cluster-name",
              description: "The name of the Kusto cluster",
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
            {
              name: ["--data-connection-name", "--name", "-n"],
              description: "The name of the data connection",
              args: { name: "data-connection-name" },
            },
            {
              name: "--database-name",
              description: "The name of the database in the Kusto cluster",
              args: { name: "database-name" },
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
        {
          name: "event-grid",
          description: "Manage data connection with kusto sub group event-grid",
          subcommands: [
            {
              name: "create",
              description: "Create a data connection",
              options: [
                {
                  name: "--cluster-name",
                  description: "The name of the Kusto cluster",
                  args: { name: "cluster-name" },
                  isRequired: true,
                },
                {
                  name: ["--data-connection-name", "--name", "-n"],
                  description: "The name of the data connection",
                  args: { name: "data-connection-name" },
                  isRequired: true,
                },
                {
                  name: "--database-name",
                  description: "The name of the database in the Kusto cluster",
                  args: { name: "database-name" },
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
                  name: "--blob-storage-event-type",
                  description: "The name of blob storage event type to process",
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
                  name: "--database-routing",
                  description:
                    "Indication for database routing information from the data connection, by default only database routing information is allowed",
                  args: {
                    name: "database-routing",
                    suggestions: ["Multi", "Single"],
                  },
                },
                {
                  name: "--event-grid-resource-id",
                  description:
                    "The resource ID of the event grid that is subscribed to the storage account events",
                  args: { name: "event-grid-resource-id" },
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
                  name: [
                    "--managed-identity-resource-id",
                    "--managed-identity",
                  ],
                  description:
                    "Empty for non-managed identity based data connection. For system assigned identity, provide cluster resource Id. For user assigned identity (UAI) provide the UAI resource Id",
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
              name: "data-connection-validation",
              description:
                "Checks that the data connection parameters are valid",
              options: [
                {
                  name: "--blob-storage-event-type",
                  description: "The name of blob storage event type to process",
                  args: {
                    name: "blob-storage-event-type",
                    suggestions: [
                      "Microsoft.Storage.BlobCreated",
                      "Microsoft.Storage.BlobRenamed",
                    ],
                  },
                },
                {
                  name: "--cluster-name",
                  description: "The name of the Kusto cluster",
                  args: { name: "cluster-name" },
                },
                {
                  name: "--consumer-group",
                  description: "The event hub consumer group",
                  args: { name: "consumer-group" },
                },
                {
                  name: ["--data-connection-name", "--name", "-n"],
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
                  description: "The name of the database in the Kusto cluster",
                  args: { name: "database-name" },
                },
                {
                  name: "--database-routing",
                  description:
                    "Indication for database routing information from the data connection, by default only database routing information is allowed",
                  args: {
                    name: "database-routing",
                    suggestions: ["Multi", "Single"],
                  },
                },
                {
                  name: "--event-grid-resource-id",
                  description:
                    "The resource ID of the event grid that is subscribed to the storage account events",
                  args: { name: "event-grid-resource-id" },
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
                  name: ["--location", "-l"],
                  description:
                    "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
                  args: { name: "location" },
                },
                {
                  name: [
                    "--managed-identity-resource-id",
                    "--managed-identity",
                  ],
                  description:
                    "Empty for non-managed identity based data connection. For system assigned identity, provide cluster resource Id. For user assigned identity (UAI) provide the UAI resource Id",
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
              ],
            },
            {
              name: "update",
              description: "Updates a data connection",
              options: [
                {
                  name: "--blob-storage-event-type",
                  description: "The name of blob storage event type to process",
                  args: {
                    name: "blob-storage-event-type",
                    suggestions: [
                      "Microsoft.Storage.BlobCreated",
                      "Microsoft.Storage.BlobRenamed",
                    ],
                  },
                },
                {
                  name: "--cluster-name",
                  description: "The name of the Kusto cluster",
                  args: { name: "cluster-name" },
                },
                {
                  name: "--consumer-group",
                  description: "The event hub consumer group",
                  args: { name: "consumer-group" },
                },
                {
                  name: ["--data-connection-name", "--name", "-n"],
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
                  description: "The name of the database in the Kusto cluster",
                  args: { name: "database-name" },
                },
                {
                  name: "--database-routing",
                  description:
                    "Indication for database routing information from the data connection, by default only database routing information is allowed",
                  args: {
                    name: "database-routing",
                    suggestions: ["Multi", "Single"],
                  },
                },
                {
                  name: "--event-grid-resource-id",
                  description:
                    "The resource ID of the event grid that is subscribed to the storage account events",
                  args: { name: "event-grid-resource-id" },
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
                  name: ["--location", "-l"],
                  description:
                    "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
                  args: { name: "location" },
                },
                {
                  name: [
                    "--managed-identity-resource-id",
                    "--managed-identity",
                  ],
                  description:
                    "Empty for non-managed identity based data connection. For system assigned identity, provide cluster resource Id. For user assigned identity (UAI) provide the UAI resource Id",
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
              ],
            },
          ],
        },
        {
          name: "event-hub",
          description: "Manage data connection with kusto sub group event-hub",
          subcommands: [
            {
              name: "create",
              description: "Create a data connection",
              options: [
                {
                  name: "--cluster-name",
                  description: "The name of the Kusto cluster",
                  args: { name: "cluster-name" },
                  isRequired: true,
                },
                {
                  name: ["--data-connection-name", "--name", "-n"],
                  description: "The name of the data connection",
                  args: { name: "data-connection-name" },
                  isRequired: true,
                },
                {
                  name: "--database-name",
                  description: "The name of the database in the Kusto cluster",
                  args: { name: "database-name" },
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
                  name: "--compression",
                  description: "The event hub messages compression type",
                  args: { name: "compression", suggestions: ["GZip", "None"] },
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
                  name: "--database-routing",
                  description:
                    "Indication for database routing information from the data connection, by default only database routing information is allowed",
                  args: {
                    name: "database-routing",
                    suggestions: ["Multi", "Single"],
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
                  name: [
                    "--managed-identity-resource-id",
                    "--managed-identity",
                  ],
                  description:
                    "Empty for non-managed identity based data connection. For system assigned identity, provide cluster resource Id. For user assigned identity (UAI) provide the UAI resource Id",
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
              name: "data-connection-validation",
              description:
                "Checks that the data connection parameters are valid",
              options: [
                {
                  name: "--cluster-name",
                  description: "The name of the Kusto cluster",
                  args: { name: "cluster-name" },
                },
                {
                  name: "--compression",
                  description: "The event hub messages compression type",
                  args: { name: "compression", suggestions: ["GZip", "None"] },
                },
                {
                  name: "--consumer-group",
                  description: "The event hub consumer group",
                  args: { name: "consumer-group" },
                },
                {
                  name: ["--data-connection-name", "--name", "-n"],
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
                  description: "The name of the database in the Kusto cluster",
                  args: { name: "database-name" },
                },
                {
                  name: "--database-routing",
                  description:
                    "Indication for database routing information from the data connection, by default only database routing information is allowed",
                  args: {
                    name: "database-routing",
                    suggestions: ["Multi", "Single"],
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
                  name: [
                    "--managed-identity-resource-id",
                    "--managed-identity",
                  ],
                  description:
                    "Empty for non-managed identity based data connection. For system assigned identity, provide cluster resource Id. For user assigned identity (UAI) provide the UAI resource Id",
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
              ],
            },
            {
              name: "update",
              description: "Updates a data connection",
              options: [
                {
                  name: "--cluster-name",
                  description: "The name of the Kusto cluster",
                  args: { name: "cluster-name" },
                },
                {
                  name: "--compression",
                  description: "The event hub messages compression type",
                  args: { name: "compression", suggestions: ["GZip", "None"] },
                },
                {
                  name: "--consumer-group",
                  description: "The event hub consumer group",
                  args: { name: "consumer-group" },
                },
                {
                  name: ["--data-connection-name", "--name", "-n"],
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
                  description: "The name of the database in the Kusto cluster",
                  args: { name: "database-name" },
                },
                {
                  name: "--database-routing",
                  description:
                    "Indication for database routing information from the data connection, by default only database routing information is allowed",
                  args: {
                    name: "database-routing",
                    suggestions: ["Multi", "Single"],
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
                  name: [
                    "--managed-identity-resource-id",
                    "--managed-identity",
                  ],
                  description:
                    "Empty for non-managed identity based data connection. For system assigned identity, provide cluster resource Id. For user assigned identity (UAI) provide the UAI resource Id",
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
              ],
            },
          ],
        },
        {
          name: "iot-hub",
          description: "Manage data connection with kusto sub group iot-hub",
          subcommands: [
            {
              name: "create",
              description: "Create a data connection",
              options: [
                {
                  name: "--cluster-name",
                  description: "The name of the Kusto cluster",
                  args: { name: "cluster-name" },
                  isRequired: true,
                },
                {
                  name: ["--data-connection-name", "--name", "-n"],
                  description: "The name of the data connection",
                  args: { name: "data-connection-name" },
                  isRequired: true,
                },
                {
                  name: "--database-name",
                  description: "The name of the database in the Kusto cluster",
                  args: { name: "database-name" },
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
                  name: "--database-routing",
                  description:
                    "Indication for database routing information from the data connection, by default only database routing information is allowed",
                  args: {
                    name: "database-routing",
                    suggestions: ["Multi", "Single"],
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
              name: "data-connection-validation",
              description:
                "Checks that the data connection parameters are valid",
              options: [
                {
                  name: "--cluster-name",
                  description: "The name of the Kusto cluster",
                  args: { name: "cluster-name" },
                },
                {
                  name: "--consumer-group",
                  description: "The iot hub consumer group",
                  args: { name: "consumer-group" },
                },
                {
                  name: ["--data-connection-name", "--name", "-n"],
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
                  description: "The name of the database in the Kusto cluster",
                  args: { name: "database-name" },
                },
                {
                  name: "--database-routing",
                  description:
                    "Indication for database routing information from the data connection, by default only database routing information is allowed",
                  args: {
                    name: "database-routing",
                    suggestions: ["Multi", "Single"],
                  },
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
              ],
            },
            {
              name: "update",
              description: "Updates a data connection",
              options: [
                {
                  name: "--cluster-name",
                  description: "The name of the Kusto cluster",
                  args: { name: "cluster-name" },
                },
                {
                  name: "--consumer-group",
                  description: "The iot hub consumer group",
                  args: { name: "consumer-group" },
                },
                {
                  name: ["--data-connection-name", "--name", "-n"],
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
                  description: "The name of the database in the Kusto cluster",
                  args: { name: "database-name" },
                },
                {
                  name: "--database-routing",
                  description:
                    "Indication for database routing information from the data connection, by default only database routing information is allowed",
                  args: {
                    name: "database-routing",
                    suggestions: ["Multi", "Single"],
                  },
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
              ],
            },
          ],
        },
      ],
    },
    {
      name: "database",
      description:
        'Manage Azure Kusto databases.\n\n\t\tAzure CLI commands for Kusto are now an extension.  Execute "az extension add -n kusto" to install the extension.  The original core module for Kusto is no longer supported',
      subcommands: [
        {
          name: "add-principal",
          description: "Add Database principals permissions",
          options: [
            {
              name: "--cluster-name",
              description: "The name of the Kusto cluster",
              args: { name: "cluster-name" },
            },
            {
              name: "--database-name",
              description: "The name of the database in the Kusto cluster",
              args: { name: "database-name" },
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
              name: "--value",
              description: "The list of Kusto database principals",
              args: { name: "value" },
            },
          ],
        },
        {
          name: "create",
          description: "Create a Kusto database",
          options: [
            {
              name: "--cluster-name",
              description: "The name of the cluster",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The name of the database",
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
              name: "--hot-cache-period",
              description:
                "Amount of time that data should be kept in cache.Duration in ISO8601 format (for example, 100 days would be P100D)",
              args: { name: "hot-cache-period" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--soft-delete-period",
              description:
                "Amount of time that data should be kept so it is available to query. Duration in ISO8601 format (for example, 100 days would be P100D)",
              args: { name: "soft-delete-period" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a Kusto database",
          options: [
            {
              name: "--cluster-name",
              description: "The name of the cluster",
              args: { name: "cluster-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the database",
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
          description: "List a Kusto database",
          options: [
            {
              name: "--cluster-name",
              description: "The name of the cluster",
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
          ],
        },
        {
          name: "list-principal",
          description:
            "Returns a list of database principals of the given Kusto cluster and database",
          options: [
            {
              name: "--cluster-name",
              description: "The name of the Kusto cluster",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: "--database-name",
              description: "The name of the database in the Kusto cluster",
              args: { name: "database-name" },
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
          name: "remove-principal",
          description: "Remove Database principals permissions",
          options: [
            {
              name: "--cluster-name",
              description: "The name of the Kusto cluster",
              args: { name: "cluster-name" },
            },
            {
              name: "--database-name",
              description: "The name of the database in the Kusto cluster",
              args: { name: "database-name" },
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
              name: "--value",
              description: "The list of Kusto database principals",
              args: { name: "value" },
            },
          ],
        },
        {
          name: "show",
          description: "Get a Kusto database",
          options: [
            {
              name: "--cluster-name",
              description: "The name of the cluster",
              args: { name: "cluster-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the database",
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
          description: "Update a Kusto database",
          options: [
            {
              name: "--soft-delete-period",
              description:
                "Amount of time that data should be kept so it is available to query. Duration in ISO8601 format (for example, 100 days would be P100D)",
              args: { name: "soft-delete-period" },
              isRequired: true,
            },
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: "--cluster-name",
              description: "The name of the cluster",
              args: { name: "cluster-name" },
            },
            {
              name: "--force-string",
              description:
                "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
            },
            {
              name: "--hot-cache-period",
              description:
                "Amount of time that data should be kept in cache.Duration in ISO8601 format (for example, 100 days would be P100D)",
              args: { name: "hot-cache-period" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the database",
              args: { name: "name" },
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
          ],
        },
        {
          name: "wait",
          description:
            "Wait for a managed Kusto database to reach a desired state",
          options: [
            {
              name: "--cluster-name",
              description: "The name of the cluster",
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
              description: "The name of the database",
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
      name: "database-principal-assignment",
      description: "Manage database principal assignment with kusto",
      subcommands: [
        {
          name: "create",
          description: "Creates a Kusto cluster database principalAssignment",
          options: [
            {
              name: "--cluster-name",
              description: "The name of the Kusto cluster",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: "--database-name",
              description: "The name of the database in the Kusto cluster",
              args: { name: "database-name" },
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
          description: "Deletes a Kusto principalAssignment",
          options: [
            {
              name: "--cluster-name",
              description: "The name of the Kusto cluster",
              args: { name: "cluster-name" },
            },
            {
              name: "--database-name",
              description: "The name of the database in the Kusto cluster",
              args: { name: "database-name" },
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
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "Lists all Kusto cluster database principalAssignments",
          options: [
            {
              name: "--cluster-name",
              description: "The name of the Kusto cluster",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: "--database-name",
              description: "The name of the database in the Kusto cluster",
              args: { name: "database-name" },
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
          description: "Gets a Kusto cluster database principalAssignment",
          options: [
            {
              name: "--cluster-name",
              description: "The name of the Kusto cluster",
              args: { name: "cluster-name" },
            },
            {
              name: "--database-name",
              description: "The name of the database in the Kusto cluster",
              args: { name: "database-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
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
          ],
        },
        {
          name: "update",
          description: "Update a Kusto cluster database principalAssignment",
          options: [
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: "--cluster-name",
              description: "The name of the Kusto cluster",
              args: { name: "cluster-name" },
            },
            {
              name: "--database-name",
              description: "The name of the database in the Kusto cluster",
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
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the kusto database-principal-assignment is met",
          options: [
            {
              name: "--cluster-name",
              description: "The name of the Kusto cluster",
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
            {
              name: "--database-name",
              description: "The name of the database in the Kusto cluster",
              args: { name: "database-name" },
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
          ],
        },
      ],
    },
    {
      name: "managed-private-endpoint",
      description: "Manage managed private endpoint with kusto",
      subcommands: [
        {
          name: "create",
          description: "Creates a managed private endpoint",
          options: [
            {
              name: "--cluster-name",
              description: "The name of the Kusto cluster",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--managed-private-endpoint-name", "--name", "-n"],
              description: "The name of the managed private endpoint",
              args: { name: "managed-private-endpoint-name" },
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
              name: "--group-id",
              description:
                "The groupId in which the managed private endpoint is created",
              args: { name: "group-id" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--private-link-resource-id", "--private-link"],
              description:
                "The ARM resource ID of the resource for which the managed private endpoint is created",
              args: { name: "private-link-resource-id" },
            },
            {
              name: ["--private-link-resource-region", "--private-link-region"],
              description:
                "The region of the resource to which the managed private endpoint is created",
              args: { name: "private-link-resource-region" },
            },
            {
              name: "--request-message",
              description: "The user request message",
              args: { name: "request-message" },
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes a managed private endpoint",
          options: [
            {
              name: "--cluster-name",
              description: "The name of the Kusto cluster",
              args: { name: "cluster-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--managed-private-endpoint-name", "--name", "-n"],
              description: "The name of the managed private endpoint",
              args: { name: "managed-private-endpoint-name" },
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
          description: "Returns the list of managed private endpoints",
          options: [
            {
              name: "--cluster-name",
              description: "The name of the Kusto cluster",
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
          ],
        },
        {
          name: "show",
          description: "Gets a managed private endpoint",
          options: [
            {
              name: "--cluster-name",
              description: "The name of the Kusto cluster",
              args: { name: "cluster-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--managed-private-endpoint-name", "--name", "-n"],
              description: "The name of the managed private endpoint",
              args: { name: "managed-private-endpoint-name" },
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
          description: "Updates a managed private endpoint",
          options: [
            {
              name: "--cluster-name",
              description: "The name of the Kusto cluster",
              args: { name: "cluster-name" },
            },
            {
              name: "--group-id",
              description:
                "The groupId in which the managed private endpoint is created",
              args: { name: "group-id" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--managed-private-endpoint-name", "--name", "-n"],
              description: "The name of the managed private endpoint",
              args: { name: "managed-private-endpoint-name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--private-link-resource-id", "--private-link"],
              description:
                "The ARM resource ID of the resource for which the managed private endpoint is created",
              args: { name: "private-link-resource-id" },
            },
            {
              name: ["--private-link-resource-region", "--private-link-region"],
              description:
                "The region of the resource to which the managed private endpoint is created",
              args: { name: "private-link-resource-region" },
            },
            {
              name: "--request-message",
              description: "The user request message",
              args: { name: "request-message" },
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
            "Place the CLI in a waiting state until a condition of the kusto managed-private-endpoint is met",
          options: [
            {
              name: "--cluster-name",
              description: "The name of the Kusto cluster",
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
              name: ["--managed-private-endpoint-name", "--name", "-n"],
              description: "The name of the managed private endpoint",
              args: { name: "managed-private-endpoint-name" },
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
      name: "operation-result",
      description: "Manage operation result with kusto",
      subcommands: [
        {
          name: "show",
          description: "Returns operation results",
          options: [
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
              name: "--operation-id",
              description: "The Guid of the operation ID",
              args: { name: "operation-id" },
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
      name: "operation-result-location",
      description: "Manage operation result location with kusto",
      subcommands: [
        {
          name: "show",
          description: "Returns operation results",
          options: [
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
              name: "--operation-id",
              description: "The Guid of the operation ID",
              args: { name: "operation-id" },
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
      name: "private-endpoint-connection",
      description: "Manage private endpoint connection with kusto",
      subcommands: [
        {
          name: "create",
          description:
            "Approve or reject a private endpoint connection with a given name",
          options: [
            {
              name: "--cluster-name",
              description: "The name of the Kusto cluster",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--private-endpoint-connection-name", "--name", "-n"],
              description: "The name of the private endpoint connection",
              args: { name: "private-endpoint-connection-name" },
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
              name: [
                "--private-link-service-connection-state",
                "--connection-state",
              ],
              description:
                "Connection State of the Private Endpoint Connection",
              args: { name: "private-link-service-connection-state" },
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
            "Deletes a private endpoint connection with a given name",
          options: [
            {
              name: "--cluster-name",
              description: "The name of the Kusto cluster",
              args: { name: "cluster-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--private-endpoint-connection-name", "--name", "-n"],
              description: "The name of the private endpoint connection",
              args: { name: "private-endpoint-connection-name" },
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
          description: "Returns the list of private endpoint connections",
          options: [
            {
              name: "--cluster-name",
              description: "The name of the Kusto cluster",
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
          ],
        },
        {
          name: "show",
          description: "Gets a private endpoint connection",
          options: [
            {
              name: "--cluster-name",
              description: "The name of the Kusto cluster",
              args: { name: "cluster-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--private-endpoint-connection-name", "--name", "-n"],
              description: "The name of the private endpoint connection",
              args: { name: "private-endpoint-connection-name" },
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
            "Approve or reject a private endpoint connection with a given name",
          options: [
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: "--cluster-name",
              description: "The name of the Kusto cluster",
              args: { name: "cluster-name" },
            },
            {
              name: [
                "--private-link-service-connection-state",
                "--connection-state",
              ],
              description:
                "Connection State of the Private Endpoint Connection",
              args: { name: "private-link-service-connection-state" },
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
              name: ["--private-endpoint-connection-name", "--name", "-n"],
              description: "The name of the private endpoint connection",
              args: { name: "private-endpoint-connection-name" },
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
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the kusto private-endpoint-connection is met",
          options: [
            {
              name: "--cluster-name",
              description: "The name of the Kusto cluster",
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
              name: ["--private-endpoint-connection-name", "--name", "-n"],
              description: "The name of the private endpoint connection",
              args: { name: "private-endpoint-connection-name" },
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
      name: "private-link-resource",
      description: "Manage private link resource with kusto",
      subcommands: [
        {
          name: "list",
          description: "Returns the list of private link resources",
          options: [
            {
              name: "--cluster-name",
              description: "The name of the Kusto cluster",
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
          ],
        },
        {
          name: "show",
          description: "Gets a private link resource",
          options: [
            {
              name: "--cluster-name",
              description: "The name of the Kusto cluster",
              args: { name: "cluster-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--private-link-resource-name", "--name", "-n"],
              description: "The name of the private link resource",
              args: { name: "private-link-resource-name" },
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
      name: "script",
      description: "Manage script with kusto",
      subcommands: [
        {
          name: "create",
          description: "Creates a Kusto database script",
          options: [
            {
              name: "--cluster-name",
              description: "The name of the Kusto cluster",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: "--database-name",
              description: "The name of the database in the Kusto cluster",
              args: { name: "database-name" },
              isRequired: true,
            },
            {
              name: ["--script-name", "--name", "-n"],
              description: "The name of the Kusto database script",
              args: { name: "script-name" },
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
              name: "--continue-on-errors",
              description:
                "Flag that indicates whether to continue if one of the command fails",
              args: {
                name: "continue-on-errors",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--force-update-tag",
              description:
                "A unique string. If changed the script will be applied again",
              args: { name: "force-update-tag" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--script-content",
              description:
                "The script content. This property should be used when the script is provide inline and not through file in a SA. Must not be used together with scriptUrl and scriptUrlSasToken properties",
              args: { name: "script-content" },
            },
            {
              name: "--script-url",
              description:
                "The url to the KQL script blob file. Must not be used together with scriptContent property",
              args: { name: "script-url" },
            },
            {
              name: "--script-url-sas-token",
              description:
                "The SaS token that provide read access to the file which contain the script. Must be provided when using scriptUrl property",
              args: { name: "script-url-sas-token" },
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes a Kusto principalAssignment",
          options: [
            {
              name: "--cluster-name",
              description: "The name of the Kusto cluster",
              args: { name: "cluster-name" },
            },
            {
              name: "--database-name",
              description: "The name of the database in the Kusto cluster",
              args: { name: "database-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--script-name", "--name", "-n"],
              description: "The name of the Kusto database script",
              args: { name: "script-name" },
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
            "Returns the list of database scripts for given database",
          options: [
            {
              name: "--cluster-name",
              description: "The name of the Kusto cluster",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: "--database-name",
              description: "The name of the database in the Kusto cluster",
              args: { name: "database-name" },
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
          description: "Gets a Kusto cluster database script",
          options: [
            {
              name: "--cluster-name",
              description: "The name of the Kusto cluster",
              args: { name: "cluster-name" },
            },
            {
              name: "--database-name",
              description: "The name of the database in the Kusto cluster",
              args: { name: "database-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--script-name", "--name", "-n"],
              description: "The name of the Kusto database script",
              args: { name: "script-name" },
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
          description: "Updates a database script",
          options: [
            {
              name: "--cluster-name",
              description: "The name of the Kusto cluster",
              args: { name: "cluster-name" },
            },
            {
              name: "--continue-on-errors",
              description:
                "Flag that indicates whether to continue if one of the command fails",
              args: {
                name: "continue-on-errors",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--database-name",
              description: "The name of the database in the Kusto cluster",
              args: { name: "database-name" },
            },
            {
              name: "--force-update-tag",
              description:
                "A unique string. If changed the script will be applied again",
              args: { name: "force-update-tag" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--script-name", "--name", "-n"],
              description: "The name of the Kusto database script",
              args: { name: "script-name" },
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
              name: "--script-content",
              description:
                "The script content. This property should be used when the script is provide inline and not through file in a SA. Must not be used together with scriptUrl and scriptUrlSasToken properties",
              args: { name: "script-content" },
            },
            {
              name: "--script-url",
              description:
                "The url to the KQL script blob file. Must not be used together with scriptContent property",
              args: { name: "script-url" },
            },
            {
              name: "--script-url-sas-token",
              description:
                "The SaS token that provide read access to the file which contain the script. Must be provided when using scriptUrl property",
              args: { name: "script-url-sas-token" },
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
            "Place the CLI in a waiting state until a condition of the kusto script is met",
          options: [
            {
              name: "--cluster-name",
              description: "The name of the Kusto cluster",
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
            {
              name: "--database-name",
              description: "The name of the database in the Kusto cluster",
              args: { name: "database-name" },
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
              name: ["--script-name", "--name", "-n"],
              description: "The name of the Kusto database script",
              args: { name: "script-name" },
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
};

export default completion;
