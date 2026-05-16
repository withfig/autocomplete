const completion: Fig.Spec = {
  name: "dms",
  description: "Manage Azure Data Migration Service (classic) instances",
  subcommands: [
    {
      name: "check-name",
      description:
        "Check if a given DMS instance name is available in a given region as well as the name's validity",
      options: [
        {
          name: ["--location", "-l"],
          description:
            "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
          args: { name: "location" },
          isRequired: true,
        },
        {
          name: ["--name", "-n"],
          description: "The service name to check",
          args: { name: "name" },
          isRequired: true,
        },
      ],
    },
    {
      name: "check-status",
      description:
        "Perform a health check and return the status of the service and virtual machine size",
      options: [
        {
          name: ["--name", "-n"],
          description: "The name of the Service",
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
      description:
        "Create an instance of the Azure Database Migration Service (classic)",
      options: [
        {
          name: ["--location", "-l"],
          description:
            "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
          args: { name: "location" },
          isRequired: true,
        },
        {
          name: ["--name", "-n"],
          description: "The name of the Service",
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
          name: "--sku-name",
          description:
            'The name of the CPU SKU on which the service\'s virtual machine will run. Check the name and the availability of SKUs in your area with "az dms list-skus"',
          args: { name: "sku-name" },
          isRequired: true,
        },
        {
          name: "--subnet",
          description:
            "The Resource ID of the VNet's Subnet you will use to connect the source and target DBs. Use \"az network vnet subnet show -h\" for help to get your subnet's ID",
          args: { name: "subnet" },
          isRequired: true,
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
        {
          name: "--tags",
          description:
            'A space-delimited list of tags in "tag1[=value1]" format',
          args: { name: "tags" },
        },
      ],
    },
    {
      name: "delete",
      description:
        "Delete an instance of the Azure Database Migration Service (classic)",
      options: [
        {
          name: ["--name", "-n"],
          description: "The name of the Service",
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
          name: "--delete-running-tasks",
          description: "Cancel any running tasks before deleting the service",
          args: { name: "delete-running-tasks" },
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
      name: "list",
      description:
        'List the DMS instances within your currently configured subscription (to set this use "az account set"). If provided, only show the instances within a given resource group',
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
      name: "list-skus",
      description:
        "List the SKUs that are supported by the Azure Database Migration Service (classic)",
    },
    {
      name: "show",
      description:
        "Show the details for an instance of the Azure Database Migration Service (classic)",
      options: [
        {
          name: ["--name", "-n"],
          description: "The name of the Service",
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
      name: "start",
      description:
        "Start an instance of the Azure Database Migration Service (classic). It can then be used to run data migrations",
      options: [
        {
          name: ["--name", "-n"],
          description: "The name of the Service",
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
          description: "Do not wait for the long-running operation to finish",
        },
      ],
    },
    {
      name: "stop",
      description:
        "Stop an instance of the Azure Database Migration Service (classic). While stopped, it can't be used to run data migrations and the owner won't be billed",
      options: [
        {
          name: ["--name", "-n"],
          description: "The name of the Service",
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
          description: "Do not wait for the long-running operation to finish",
        },
      ],
    },
    {
      name: "wait",
      description:
        "Place the CLI in a waiting state until a condition of the DMS instance is met",
      options: [
        {
          name: ["--name", "-n"],
          description: "The name of the Service",
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
      name: "project",
      description:
        "Manage projects for an instance of the Azure Database Migration Service (classic)",
      subcommands: [
        {
          name: "check-name",
          description:
            "Check if a given project name is available within a given instance of DMS as well as the name's validity",
          options: [
            {
              name: ["--name", "-n"],
              description: "The project name to check",
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
              name: "--service-name",
              description: "The name of the Service",
              args: { name: "service-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "create",
          description:
            "Create a migration project which can contain multiple tasks",
          options: [
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The name of the Project",
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
              name: "--service-name",
              description: "The name of the Service",
              args: { name: "service-name" },
              isRequired: true,
            },
            {
              name: "--source-platform",
              description:
                "The type of server for the source database. The supported types are: SQL, PostgreSQL, MySQL",
              args: { name: "source-platform" },
              isRequired: true,
            },
            {
              name: "--target-platform",
              description:
                "The type of service for the target database. The supported types are: SQLDB, AzureDbForPostgreSQL, AzureDbForMySQL",
              args: { name: "target-platform" },
              isRequired: true,
            },
            {
              name: "--tags",
              description:
                'A space-delimited list of tags in "tag1[=value1]" format',
              args: { name: "tags" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a project",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the Project",
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
              name: "--service-name",
              description: "The name of the Service",
              args: { name: "service-name" },
              isRequired: true,
            },
            {
              name: "--delete-running-tasks",
              description:
                "Cancel any running tasks before deleting the project",
              args: { name: "delete-running-tasks" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "List the projects within an instance of DMS",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--service-name",
              description: "The name of the Service",
              args: { name: "service-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description: "Show the details of a migration project",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the Project",
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
              name: "--service-name",
              description: "The name of the Service",
              args: { name: "service-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "task",
          description:
            "Manage tasks for a Azure Database Migration Service (classic) instance's project",
          subcommands: [
            {
              name: "cancel",
              description: "Cancel a task if it's currently queued or running",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The name of the Task",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--project-name",
                  description: "The name of the Project",
                  args: { name: "project-name" },
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
                  name: "--service-name",
                  description: "The name of the Service",
                  args: { name: "service-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "check-name",
              description:
                "Check if a given task name is available within a given instance of DMS as well as the name's validity",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The task name to check",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--project-name",
                  description: "The name of the Project",
                  args: { name: "project-name" },
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
                  name: "--service-name",
                  description: "The name of the Service",
                  args: { name: "service-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "create",
              description: "Create and start a migration task",
              options: [
                {
                  name: "--database-options-json",
                  description:
                    "Database and table information. This can be either a JSON-formatted string or the location to a file containing the JSON object. See example below for the format",
                  args: { name: "database-options-json" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the Task",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--project-name",
                  description: "The name of the Project",
                  args: { name: "project-name" },
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
                  name: "--service-name",
                  description: "The name of the Service",
                  args: { name: "service-name" },
                  isRequired: true,
                },
                {
                  name: "--source-connection-json",
                  description:
                    "The connection information to the source server. This can be either a JSON-formatted string or the location to a file containing the JSON object. See examples below for the format",
                  args: { name: "source-connection-json" },
                  isRequired: true,
                },
                {
                  name: "--target-connection-json",
                  description:
                    "The connection information to the target server. This can be either a JSON-formatted string or the location to a file containing the JSON object. See 'source-connection-json' for examples of connection formats",
                  args: { name: "target-connection-json" },
                  isRequired: true,
                },
                {
                  name: "--enable-data-integrity-validation",
                  description:
                    "For SQL only. Whether to perform a checksum based data integrity validation between source and target for the selected database and tables",
                },
                {
                  name: "--enable-query-analysis-validation",
                  description:
                    "For SQL only. Whether to perform a quick and intelligent query analysis by retrieving queries from the source database and executing them in the target. The result will have execution statistics for executions in source and target databases for the extracted queries",
                },
                {
                  name: "--enable-schema-validation",
                  description:
                    "For SQL only. Whether to compare the schema information between source and target",
                },
                {
                  name: "--task-type",
                  description:
                    "The type of data movement the task will support. The supported types are: OnlineMigration, OfflineMigration. If not provided, will default to OfflineMigration for SQL, MySQL and OnlineMigration for PostgreSQL",
                  args: { name: "task-type" },
                },
              ],
            },
            {
              name: "cutover",
              description:
                "For an online migration task, complete the migration by performing a cutover",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The name of the Task",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--object-name",
                  description:
                    "The name of the database on the source you wish to cutover",
                  args: { name: "object-name" },
                  isRequired: true,
                },
                {
                  name: "--project-name",
                  description: "The name of the Project",
                  args: { name: "project-name" },
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
                  name: "--service-name",
                  description: "The name of the Service",
                  args: { name: "service-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a migration task",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The name of the Task",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--project-name",
                  description: "The name of the Project",
                  args: { name: "project-name" },
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
                  name: "--service-name",
                  description: "The name of the Service",
                  args: { name: "service-name" },
                  isRequired: true,
                },
                {
                  name: "--delete-running-tasks",
                  description:
                    "If the task is currently running, cancel the task before deleting the project",
                  args: { name: "delete-running-tasks" },
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
                "List the tasks within a project. Some tasks may have a status of Unknown, which indicates that an error occurred while querying the status of that task",
              options: [
                {
                  name: "--project-name",
                  description: "The name of the Project",
                  args: { name: "project-name" },
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
                  name: "--service-name",
                  description: "The name of the Service",
                  args: { name: "service-name" },
                  isRequired: true,
                },
                {
                  name: "--task-type",
                  description:
                    'Filters the list by the type of task. For the list of possible types see "az dms check-status"',
                  args: { name: "task-type" },
                },
              ],
            },
            {
              name: "restart",
              description:
                "Restart either the entire migration or just a specified object. Currently only supported by MongoDB migrations",
              options: [
                {
                  name: ["--name", "-n"],
                  description:
                    "The name of the Task. A DMS Project Task is the activity that performs migration related work. There could be multiple Tasks associated with a Project",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--project-name",
                  description:
                    "The name of the Project. DMS Project is a logical grouping that encompasses source database connection, target database connection and a list of databases to migrate",
                  args: { name: "project-name" },
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
                  name: "--service-name",
                  description:
                    "The name of the Service. DMS Service is an Azure instance that performs database migrations",
                  args: { name: "service-name" },
                  isRequired: true,
                },
                {
                  name: "--object-name",
                  description:
                    "The qualified name of the database or collection you wish to restart. Leave blank to restart the entire migration",
                  args: { name: "object-name" },
                },
              ],
            },
            {
              name: "show",
              description:
                'Show the details of a migration task. Use the "--expand" to get more details',
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The name of the Task",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--project-name",
                  description: "The name of the Project",
                  args: { name: "project-name" },
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
                  name: "--service-name",
                  description: "The name of the Service",
                  args: { name: "service-name" },
                  isRequired: true,
                },
                {
                  name: "--expand",
                  description:
                    'Expand the response to provide more details. Use with "command" to see more details of the task. Use with "output" to see the results of the task\'s migration',
                  args: { name: "expand" },
                },
              ],
            },
            {
              name: "stop",
              description:
                "Stops the task, or stops migration on the specified object (MongoDB migrations only)",
              options: [
                {
                  name: ["--name", "-n"],
                  description:
                    "The name of the Task. A DMS Project Task is the activity that performs migration related work. There could be multiple Tasks associated with a Project",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--project-name",
                  description:
                    "The name of the Project. DMS Project is a logical grouping that encompasses source database connection, target database connection and a list of databases to migrate",
                  args: { name: "project-name" },
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
                  name: "--service-name",
                  description:
                    "The name of the Service. DMS Service is an Azure instance that performs database migrations",
                  args: { name: "service-name" },
                  isRequired: true,
                },
                {
                  name: "--object-name",
                  description:
                    "Supported by MongoDB migrations only. The qualified name of the database or collection you wish to stop. Leave blank to stop the entire migration",
                  args: { name: "object-name" },
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
