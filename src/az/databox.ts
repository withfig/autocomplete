const completionSpec: Fig.Spec = {
  name: "databox",
  description: "Manage databox",
  subcommands: [
    {
      name: "job",
      description: "Commands to manage databox job",
      subcommands: [
        { name: "cancel", description: "Cancel a job" },
        {
          name: "create",
          description: "Create a new job with the specified parameters",
        },
        { name: "delete", description: "Delete a job" },
        {
          name: "list",
          description:
            "List all the jobs available under the given resource group or the given subscription",
        },
        {
          name: "list-credentials",
          description: "List the unencrypted secrets related to the job",
        },
        {
          name: "show",
          description: "Get information about the specified job",
        },
        {
          name: "update",
          description: "Update an existing job with the specified parameters",
        },
      ],
    },
  ],
};

export default completionSpec;
