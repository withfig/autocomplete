const completionSpec: Fig.Spec = {
  name: "ml",
  description: "Manage Machine Learning resources",
  subcommands: [
    {
      name: "code",
      description: "Manage Azure ML code assets",
      subcommands: [
        { name: "show", description: "Show details for a code asset" },
      ],
    },
    {
      name: "compute",
      description: "Manage Azure ML compute resources",
      subcommands: [
        {
          name: "attach",
          description: "Attach an existing compute resource to a workspace",
        },
        { name: "create", description: "Create a compute target" },
        { name: "delete", description: "Delete a compute target" },
        {
          name: "detach",
          description:
            "Detach a previously attached compute resource from a workspace",
        },
        {
          name: "list",
          description: "List the compute targets in a workspace",
        },
        {
          name: "list-sizes",
          description: "List the VM sizes available by location",
        },
        {
          name: "list-usage",
          description: "List the available usage resources for VMs",
        },
        { name: "restart", description: "Restart a ComputeInstance target" },
        { name: "show", description: "Show details for a compute target" },
        { name: "start", description: "Start a ComputeInstance target" },
        { name: "stop", description: "Stop a ComputeInstance target" },
        { name: "update", description: "Update a compute target" },
      ],
    },
    {
      name: "data",
      description: "Manage Azure ML data assets",
      subcommands: [
        { name: "create", description: "Create a data asset" },
        { name: "delete", description: "Delete a data asset" },
        { name: "list", description: "List data assets in a workspace" },
        { name: "show", description: "Shows details for a data asset" },
        { name: "update", description: "Update a data asset" },
      ],
    },
    {
      name: "datastore",
      description: "Manage Azure ML datastores",
      subcommands: [
        { name: "create", description: "Create a datastore" },
        { name: "delete", description: "Delete a datastore" },
        { name: "list", description: "List datastores in a workspace" },
        { name: "show", description: "Show details for a datastore" },
        { name: "update", description: "Update a datastore" },
      ],
    },
    {
      name: "endpoint",
      description: "Manage Azure ML endpoints",
      subcommands: [
        { name: "create", description: "Create an endpoint" },
        {
          name: "delete",
          description: "Delete an endpoint or a specific deployment",
        },
        {
          name: "get-credentials",
          description: "List the token/keys for an online endpoint",
        },
        {
          name: "get-logs",
          description: "Get the container logs for an online deployment",
        },
        { name: "invoke", description: "Invoke an endpoint" },
        { name: "list", description: "List endpoints in a workspace" },
        {
          name: "list-jobs",
          description: "List the batch scoring jobs for a batch endpoint",
        },
        {
          name: "regenerate-keys",
          description: "Regenerate the keys for an online endpoint",
        },
        { name: "show", description: "Show details for an endpoint" },
        { name: "update", description: "Update an endpoint" },
      ],
    },
    {
      name: "environment",
      description: "Manage Azure ML environments",
      subcommands: [
        { name: "create", description: "Create an environment" },
        { name: "delete", description: "Delete an environment" },
        { name: "list", description: "List environments in a workspace" },
        { name: "show", description: "Show details for an environment" },
        { name: "update", description: "Update an environment" },
      ],
    },
    {
      name: "job",
      description: "Manage Azure ML jobs",
      subcommands: [
        { name: "cancel", description: "Cancel a job" },
        { name: "create", description: "Create a job" },
        { name: "download", description: "Download all job-related files" },
        { name: "list", description: "List jobs in a workspace" },
        { name: "show", description: "Show details for a job" },
        { name: "stream", description: "Stream job logs to the console" },
        { name: "update", description: "Update a job" },
      ],
    },
    {
      name: "model",
      description: "Manage Azure ML models",
      subcommands: [
        { name: "create", description: "Create a model" },
        { name: "delete", description: "Delete a model" },
        { name: "list", description: "List models in a workspace" },
        { name: "show", description: "Show details for a model" },
        { name: "update", description: "Update a model" },
      ],
    },
    {
      name: "workspace",
      description: "Manage Azure ML workspaces",
      subcommands: [
        { name: "create", description: "Create a workspace" },
        { name: "delete", description: "Delete a workspace" },
        {
          name: "list",
          description: "List all the workspaces in a subscription",
        },
        {
          name: "list-keys",
          description:
            "List workspace keys for dependent resources such as Azure Storage, Azure Container Registry, and Azure Application Insights",
        },
        { name: "show", description: "Show details for a workspace" },
        {
          name: "sync-keys",
          description:
            "Sync workspace keys for dependent resources such as Azure Storage, Azure Container Registry, and Azure Application Insights",
        },
        { name: "update", description: "Update a workspace" },
      ],
    },
  ],
};

export default completionSpec;
