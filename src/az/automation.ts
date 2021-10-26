const completionSpec: Fig.Spec = {
  name: "automation",
  description: "Manage Automation",
  subcommands: [
    {
      name: "account",
      description: "Automation Account",
      subcommands: [
        { name: "create", description: "Create automation account" },
        { name: "delete", description: "Delete an automation account" },
        {
          name: "list",
          description:
            "Retrieve a list of accounts within a given resource group. And Retrieve a list of accounts within a given subscription",
        },
        {
          name: "show",
          description: "Get information about an Automation Account",
        },
        { name: "update", description: "Update an automation account" },
      ],
    },
    {
      name: "job",
      description: "Automation Job",
      subcommands: [
        { name: "list", description: "Retrieve a list of jobs" },
        { name: "resume", description: "Resume the job identified by jobName" },
        {
          name: "show",
          description: "Retrieve the job identified by job name",
        },
        { name: "stop", description: "Stop the job identified by jobName" },
        {
          name: "suspend",
          description: "Suspend the job identified by job name",
        },
      ],
    },
    {
      name: "runbook",
      description: "Automation Runbook",
      subcommands: [
        {
          name: "create",
          description: "Create the runbook identified by runbook name",
        },
        { name: "delete", description: "Delete the runbook by name" },
        { name: "list", description: "Retrieve a list of runbooks" },
        { name: "publish", description: "Publish runbook draft" },
        {
          name: "replace-content",
          description: "Replace content of the runbook",
        },
        {
          name: "revert-to-published",
          description:
            "Revert the runbook content to last known published state",
        },
        {
          name: "show",
          description: "Retrieve the runbook identified by runbook name",
        },
        { name: "start", description: "Start the runbook" },
        {
          name: "update",
          description: "Update the runbook identified by runbook name",
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the automation runbook is met",
        },
      ],
    },
  ],
};

export default completionSpec;
