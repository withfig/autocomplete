const completionSpec: Fig.Spec = {
  name: "batch",
  description: "Manage Azure Batch",
  subcommands: [
    {
      name: "account",
      description: "Manage Azure Batch accounts",
      subcommands: [
        {
          name: "autostorage-keys",
          description:
            "Manage the access keys for the auto storage account configured for a Batch account",
          subcommands: [
            {
              name: "sync",
              description:
                "Synchronizes access keys for the auto-storage account configured for the specified Batch account, only if storage key authentication is being used",
            },
          ],
        },
        {
          name: "create",
          description: "Create a Batch account with the specified parameters",
        },
        { name: "delete", description: "Deletes the specified Batch account" },
        {
          name: "keys",
          description: "Manage Batch account keys",
          subcommands: [
            {
              name: "list",
              description:
                "Gets the account keys for the specified Batch account",
            },
            { name: "renew", description: "Renew keys for a Batch account" },
          ],
        },
        {
          name: "list",
          description:
            "List the Batch accounts associated with a subscription or resource group",
        },
        {
          name: "login",
          description:
            "Log in to a Batch account through Azure Active Directory or Shared Key authentication",
        },
        {
          name: "outbound-endpoints",
          description: "List an account's outbound network dependencies",
        },
        { name: "set", description: "Update properties for a Batch account" },
        {
          name: "show",
          description:
            "Get a specified Batch account or the currently set account",
        },
      ],
    },
    {
      name: "application",
      description: "Manage Batch applications",
      subcommands: [
        {
          name: "create",
          description: "Adds an application to the specified Batch account",
        },
        { name: "delete", description: "Deletes an application" },
        {
          name: "list",
          description: "Lists all of the applications in the specified account",
        },
        {
          name: "package",
          description: "Manage Batch application packages",
          subcommands: [
            {
              name: "activate",
              description: "Activates a Batch application package",
            },
            {
              name: "create",
              description:
                "Create a Batch application package record and activate it",
            },
            {
              name: "delete",
              description:
                "Deletes an application package record and its associated binary file",
            },
            {
              name: "list",
              description:
                "Lists all of the application packages in the specified application",
            },
            {
              name: "show",
              description:
                "Gets information about the specified application package",
            },
          ],
        },
        {
          name: "set",
          description: "Update properties for a Batch application",
        },
        {
          name: "show",
          description: "Gets information about the specified application",
        },
        {
          name: "summary",
          description: "View a summary of Batch application packages",
          subcommands: [
            {
              name: "list",
              description:
                "Lists all of the applications available in the specified account",
            },
            {
              name: "show",
              description: "Gets information about the specified application",
            },
          ],
        },
      ],
    },
    {
      name: "certificate",
      description: "Manage Batch certificates",
      subcommands: [
        { name: "create", description: "Add a certificate to a Batch account" },
        {
          name: "delete",
          description: "Delete a certificate from a Batch account",
        },
        {
          name: "list",
          description:
            "Lists all of the Certificates that have been added to the specified Account",
        },
        {
          name: "show",
          description: "Gets information about the specified Certificate",
        },
      ],
    },
    {
      name: "file",
      description: "Manage Batch input files",
      subcommands: [
        {
          name: "download",
          description:
            "Download a specified file or directory of files to the specified storage path",
        },
        {
          name: "upload",
          description:
            "Upload a specified file or directory of files to the specified storage path",
        },
      ],
    },
    {
      name: "job",
      description: "Manage Batch jobs",
      subcommands: [
        {
          name: "all-statistics",
          description: "View statistics of all jobs under a Batch account",
          subcommands: [
            {
              name: "show",
              description:
                "Get lifetime summary statistics for all of the jobs in a Batch account",
            },
          ],
        },
        { name: "create", description: "Add a job to a Batch account" },
        { name: "delete", description: "Deletes a Job" },
        {
          name: "disable",
          description:
            "Disables the specified Job, preventing new Tasks from running",
        },
        {
          name: "enable",
          description: "Enables the specified Job, allowing new Tasks to run",
        },
        {
          name: "list",
          description:
            "List all of the jobs or job schedule in a Batch account",
        },
        {
          name: "prep-release-status",
          description:
            "View the status of Batch job preparation and release tasks",
          subcommands: [
            {
              name: "list",
              description:
                "Lists the execution status of the Job Preparation and Job Release Task for the specified Job across the Compute Nodes where the Job has run",
            },
          ],
        },
        {
          name: "reset",
          description:
            "Update the properties of a Batch job. Unspecified properties which can be updated are reset to their defaults",
        },
        {
          name: "set",
          description:
            "Update the properties of a Batch job. Updating a property in a subgroup will reset the unspecified properties of that group",
        },
        {
          name: "show",
          description: "Gets information about the specified Job",
        },
        { name: "stop", description: "Stop a running Batch job" },
        {
          name: "task-counts",
          description:
            "View the number of tasks and slots in a Batch job and their states",
          subcommands: [
            {
              name: "show",
              description: "Gets the Task counts for the specified Job",
            },
          ],
        },
      ],
    },
    {
      name: "job-schedule",
      description: "Manage Batch job schedules",
      subcommands: [
        {
          name: "create",
          description: "Add a Batch job schedule to an account",
        },
        {
          name: "delete",
          description: "Deletes a Job Schedule from the specified Account",
        },
        { name: "disable", description: "Disables a Job Schedule" },
        { name: "enable", description: "Enables a Job Schedule" },
        {
          name: "list",
          description:
            "Lists all of the Job Schedules in the specified Account",
        },
        {
          name: "reset",
          description:
            "Reset the properties of a job schedule. An updated job specification only applies to new jobs",
        },
        { name: "set", description: "Update the properties of a job schedule" },
        {
          name: "show",
          description: "Gets information about the specified Job Schedule",
        },
        { name: "stop", description: "Terminates a Job Schedule" },
      ],
    },
    {
      name: "location",
      description:
        "Manage Batch service options for a subscription at the region level",
      subcommands: [
        {
          name: "list-skus",
          description: "List virtual machine SKUs available in a location",
        },
        {
          name: "quotas",
          description: "Manage Batch service quotas at the region level",
          subcommands: [
            {
              name: "show",
              description:
                "Gets the Batch service quotas for the specified subscription at the given location",
            },
          ],
        },
      ],
    },
    {
      name: "node",
      description: "Manage Batch compute nodes",
      subcommands: [
        {
          name: "delete",
          description: "Removes Compute Nodes from the specified Pool",
        },
        {
          name: "file",
          description: "Manage Batch compute node files",
          subcommands: [
            {
              name: "delete",
              description: "Deletes the specified file from the Compute Node",
            },
            {
              name: "download",
              description: "Download the content of the a node file",
            },
            {
              name: "list",
              description:
                "Lists all of the files in Task directories on the specified Compute Node",
            },
            {
              name: "show",
              description:
                "Gets the properties of the specified Compute Node file",
            },
          ],
        },
        {
          name: "list",
          description: "Lists the Compute Nodes in the specified Pool",
        },
        { name: "reboot", description: "Restarts the specified Compute Node" },
        {
          name: "reimage",
          description:
            "Reinstalls the operating system on the specified Compute Node",
        },
        {
          name: "remote-desktop",
          description:
            "Retrieve the remote desktop protocol file for a Batch compute node",
          subcommands: [
            {
              name: "download",
              description:
                "Gets the Remote Desktop Protocol file for the specified Compute Node",
            },
          ],
        },
        {
          name: "remote-login-settings",
          description:
            "Retrieve the remote login settings for a Batch compute node",
          subcommands: [
            {
              name: "show",
              description:
                "Gets the settings required for remote login to a Compute Node",
            },
          ],
        },
        {
          name: "scheduling",
          description: "Manage task scheduling for a Batch compute node",
          subcommands: [
            {
              name: "disable",
              description:
                "Disables Task scheduling on the specified Compute Node",
            },
            {
              name: "enable",
              description:
                "Enables Task scheduling on the specified Compute Node",
            },
          ],
        },
        {
          name: "service-logs",
          description: "Manage the service log files of a Batch compute node",
          subcommands: [
            {
              name: "upload",
              description:
                "Upload Azure Batch service log files from the specified Compute Node to Azure Blob Storage",
            },
          ],
        },
        {
          name: "show",
          description: "Gets information about the specified Compute Node",
        },
        {
          name: "user",
          description: "Manage the user accounts of a Batch compute node",
          subcommands: [
            {
              name: "create",
              description: "Add a user account to a Batch compute node",
            },
            {
              name: "delete",
              description:
                "Deletes a user Account from the specified Compute Node",
            },
            {
              name: "reset",
              description:
                "Update the properties of a user account on a Batch compute node. Unspecified properties which can be updated are reset to their defaults",
            },
          ],
        },
      ],
    },
    {
      name: "pool",
      description: "Manage Batch pools",
      subcommands: [
        {
          name: "all-statistics",
          description: "View statistics of all pools under a Batch account",
          subcommands: [
            {
              name: "show",
              description:
                "Get lifetime summary statistics for all of the pools in a Batch account",
            },
          ],
        },
        {
          name: "autoscale",
          description: "Manage automatic scaling of Batch pools",
          subcommands: [
            {
              name: "disable",
              description: "Disables automatic scaling for a Pool",
            },
            {
              name: "enable",
              description: "Enables automatic scaling for a Pool",
            },
            {
              name: "evaluate",
              description:
                "Gets the result of evaluating an automatic scaling formula on the Pool",
            },
          ],
        },
        {
          name: "create",
          description:
            "Create a Batch pool in an account. When creating a pool, choose arguments from either Cloud Services Configuration or Virtual Machine Configuration",
        },
        {
          name: "delete",
          description: "Deletes a Pool from the specified Account",
        },
        {
          name: "list",
          description: "Lists all of the Pools in the specified Account",
        },
        {
          name: "node-counts",
          description: "Get node counts for Batch pools",
          subcommands: [
            {
              name: "list",
              description:
                "Gets the number of Compute Nodes in each state, grouped by Pool",
            },
          ],
        },
        {
          name: "reset",
          description:
            "Update the properties of a Batch pool. Unspecified properties which can be updated are reset to their defaults",
        },
        { name: "resize", description: "Resize or stop resizing a Batch pool" },
        {
          name: "set",
          description:
            "Update the properties of a Batch pool. Updating a property in a subgroup will reset the unspecified properties of that group",
        },
        {
          name: "show",
          description: "Gets information about the specified Pool",
        },
        {
          name: "supported-images",
          description:
            "Query information on VM images supported by Azure Batch service",
          subcommands: [
            {
              name: "list",
              description:
                "Lists all Virtual Machine Images supported by the Azure Batch service",
            },
          ],
        },
        {
          name: "usage-metrics",
          description: "View usage metrics of Batch pools",
          subcommands: [
            {
              name: "list",
              description:
                "Lists the usage metrics, aggregated by Pool across individual time intervals, for the specified Account",
            },
          ],
        },
      ],
    },
    {
      name: "task",
      description: "Manage Batch tasks",
      subcommands: [
        { name: "create", description: "Create Batch tasks" },
        {
          name: "delete",
          description: "Deletes a Task from the specified Job",
        },
        {
          name: "file",
          description: "Manage Batch task files",
          subcommands: [
            {
              name: "delete",
              description:
                "Deletes the specified Task file from the Compute Node where the Task ran",
            },
            {
              name: "download",
              description: "Download the content of a Batch task file",
            },
            {
              name: "list",
              description:
                "Lists the files in a Task's directory on its Compute Node",
            },
            {
              name: "show",
              description: "Gets the properties of the specified Task file",
            },
          ],
        },
        {
          name: "list",
          description:
            "Lists all of the Tasks that are associated with the specified Job",
        },
        {
          name: "reactivate",
          description:
            "Reactivates a Task, allowing it to run again even if its retry count has been exhausted",
        },
        { name: "reset", description: "Reset the properties of a Batch task" },
        {
          name: "show",
          description: "Gets information about the specified Task",
        },
        { name: "stop", description: "Terminates the specified Task" },
        {
          name: "subtask",
          description: "Manage subtask information of a Batch task",
          subcommands: [
            {
              name: "list",
              description:
                "Lists all of the subtasks that are associated with the specified multi-instance Task",
            },
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
