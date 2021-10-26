const completionSpec: Fig.Spec = {
  name: "dms",
  description: "Manage Azure Data Migration Service (DMS) instances",
  subcommands: [
    {
      name: "check-name",
      description:
        "Check if a given DMS instance name is available in a given region as well as the name's validity",
    },
    {
      name: "check-status",
      description:
        "Perform a health check and return the status of the service and virtual machine size",
    },
    {
      name: "create",
      description: "Create an instance of the Data Migration Service",
    },
    {
      name: "delete",
      description: "Delete an instance of the Data Migration Service",
    },
    {
      name: "list",
      description:
        'List the DMS instances within your currently configured subscription (to set this use "az account set"). If provided, only show the instances within a given resource group',
    },
    {
      name: "list-skus",
      description:
        "List the SKUs that are supported by the Data Migration Service",
    },
    {
      name: "project",
      description:
        "Manage projects for an instance of the Data Migration Service",
      subcommands: [
        {
          name: "check-name",
          description:
            "Check if a given project name is available within a given instance of DMS as well as the name's validity",
        },
        {
          name: "create",
          description:
            "Create a migration project which can contain multiple tasks",
        },
        { name: "delete", description: "Delete a project" },
        {
          name: "list",
          description: "List the projects within an instance of DMS",
        },
        {
          name: "show",
          description: "Show the details of a migration project",
        },
        {
          name: "task",
          description:
            "Manage tasks for a Data Migration Service instance's project",
          subcommands: [
            {
              name: "cancel",
              description: "Cancel a task if it's currently queued or running",
            },
            {
              name: "check-name",
              description:
                "Check if a given task name is available within a given instance of DMS as well as the name's validity",
            },
            {
              name: "create",
              description: "Create and start a migration task",
            },
            {
              name: "cutover",
              description:
                "For an online migration task, complete the migration by performing a cutover",
            },
            { name: "delete", description: "Delete a migration task" },
            {
              name: "list",
              description:
                "List the tasks within a project. Some tasks may have a status of Unknown, which indicates that an error occurred while querying the status of that task",
            },
            {
              name: "restart",
              description:
                "Restart either the entire migration or just a specified object. Currently only supported by MongoDB migrations",
            },
            {
              name: "show",
              description:
                'Show the details of a migration task. Use the "--expand" to get more details',
            },
            {
              name: "stop",
              description:
                "Stops the task, or stops migration on the specified object (MongoDB migrations only)",
            },
          ],
        },
      ],
    },
    {
      name: "show",
      description:
        "Show the details for an instance of the Data Migration Service",
    },
    {
      name: "start",
      description:
        "Start an instance of the Data Migration Service. It can then be used to run data migrations",
    },
    {
      name: "stop",
      description:
        "Stop an instance of the Data Migration Service. While stopped, it can't be used to run data migrations and the owner won't be billed",
    },
    {
      name: "wait",
      description:
        "Place the CLI in a waiting state until a condition of the DMS instance is met",
    },
  ],
};

export default completionSpec;
