const completionSpec: Fig.Spec = {
  name: "datafactory",
  description: "Manage Data Factory",
  subcommands: [
    {
      name: "activity-run",
      description: "Manage activity run with datafactory",
      subcommands: [
        {
          name: "query-by-pipeline-run",
          description: "Query activity runs based on input filter conditions",
        },
      ],
    },
    {
      name: "configure-factory-repo",
      description: "Updates a factory's repo information",
    },
    { name: "create", description: "Create a factory" },
    {
      name: "dataset",
      description: "Manage dataset with datafactory",
      subcommands: [
        { name: "create", description: "Create a dataset" },
        { name: "delete", description: "Deletes a dataset" },
        { name: "list", description: "Lists datasets" },
        { name: "show", description: "Gets a dataset" },
        { name: "update", description: "Update a dataset" },
      ],
    },
    { name: "delete", description: "Deletes a factory" },
    { name: "get-data-plane-access", description: "Get Data Plane access" },
    {
      name: "get-git-hub-access-token",
      description: "Get GitHub Access Token",
    },
    {
      name: "integration-runtime",
      description: "Manage integration runtime with datafactory",
      subcommands: [
        { name: "delete", description: "Deletes an integration runtime" },
        {
          name: "get-connection-info",
          description:
            "Gets the on-premises integration runtime connection information for encrypting the on-premises data source credentials",
        },
        {
          name: "get-monitoring-data",
          description:
            "Get the integration runtime monitoring data, which includes the monitor data for all the nodes under this integration runtime",
        },
        {
          name: "get-status",
          description:
            "Gets detailed status information for an integration runtime",
        },
        {
          name: "linked-integration-runtime",
          description:
            "Manage integration runtime with datafactory sub group linked-integration-runtime",
          subcommands: [
            {
              name: "create",
              description:
                "Create a linked integration runtime entry in a shared integration runtime",
            },
          ],
        },
        { name: "list", description: "Lists integration runtimes" },
        {
          name: "list-auth-key",
          description:
            "Retrieves the authentication keys for an integration runtime",
        },
        {
          name: "managed",
          description:
            "Manage integration runtime with datafactory sub group managed",
          subcommands: [
            { name: "create", description: "Create an integration runtime" },
          ],
        },
        {
          name: "regenerate-auth-key",
          description:
            "Regenerates the authentication key for an integration runtime",
        },
        {
          name: "remove-link",
          description:
            "Remove all linked integration runtimes under specific data factory in a self-hosted integration runtime",
        },
        {
          name: "self-hosted",
          description:
            "Manage integration runtime with datafactory sub group self-hosted",
          subcommands: [
            { name: "create", description: "Create an integration runtime" },
          ],
        },
        { name: "show", description: "Gets an integration runtime" },
        {
          name: "start",
          description: "Starts a ManagedReserved type integration runtime",
        },
        {
          name: "stop",
          description: "Stops a ManagedReserved type integration runtime",
        },
        {
          name: "sync-credentials",
          description:
            "Force the integration runtime to synchronize credentials across integration runtime nodes, and this will override the credentials across all worker nodes with those available on the dispatcher node. If you already have the latest credential backup file, you should manually import it (preferred) on any self-hosted integration runtime node than using this API directly",
        },
        { name: "update", description: "Updates an integration runtime" },
        {
          name: "upgrade",
          description:
            "Upgrade self-hosted integration runtime to latest version if availability",
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the datafactory integration-runtime is met",
        },
      ],
    },
    {
      name: "integration-runtime-node",
      description: "Manage integration runtime node with datafactory",
      subcommands: [
        {
          name: "delete",
          description: "Deletes a self-hosted integration runtime node",
        },
        {
          name: "get-ip-address",
          description:
            "Get the IP address of self-hosted integration runtime node",
        },
        {
          name: "show",
          description: "Gets a self-hosted integration runtime node",
        },
        {
          name: "update",
          description: "Updates a self-hosted integration runtime node",
        },
      ],
    },
    {
      name: "linked-service",
      description: "Manage linked service with datafactory",
      subcommands: [
        { name: "create", description: "Create a linked service" },
        { name: "delete", description: "Deletes a linked service" },
        { name: "list", description: "Lists linked services" },
        { name: "show", description: "Gets a linked service" },
        { name: "update", description: "Update a linked service" },
      ],
    },
    {
      name: "list",
      description:
        "Lists factories. And Lists factories under the specified subscription",
    },
    {
      name: "managed-private-endpoint",
      description: "Manage managed private endpoint with datafactory",
      subcommands: [
        { name: "create", description: "Create a managed private endpoint" },
        { name: "delete", description: "Deletes a managed private endpoint" },
        { name: "list", description: "Lists managed private endpoints" },
        { name: "show", description: "Gets a managed private endpoint" },
        { name: "update", description: "Update a managed private endpoint" },
      ],
    },
    {
      name: "managed-virtual-network",
      description: "Manage managed virtual network with datafactory",
      subcommands: [
        { name: "create", description: "Create a managed Virtual Network" },
        { name: "list", description: "Lists managed Virtual Networks" },
        { name: "show", description: "Gets a managed Virtual Network" },
        { name: "update", description: "Update a managed Virtual Network" },
      ],
    },
    {
      name: "pipeline",
      description: "Manage pipeline with datafactory",
      subcommands: [
        { name: "create", description: "Create a pipeline" },
        { name: "create-run", description: "Creates a run of a pipeline" },
        { name: "delete", description: "Deletes a pipeline" },
        { name: "list", description: "Lists pipelines" },
        { name: "show", description: "Gets a pipeline" },
        { name: "update", description: "Update a pipeline" },
      ],
    },
    {
      name: "pipeline-run",
      description: "Manage pipeline run with datafactory",
      subcommands: [
        { name: "cancel", description: "Cancel a pipeline run by its run ID" },
        {
          name: "query-by-factory",
          description:
            "Query pipeline runs in the factory based on input filter conditions",
        },
        { name: "show", description: "Get a pipeline run by its run ID" },
      ],
    },
    { name: "show", description: "Gets a factory" },
    {
      name: "trigger",
      description: "Manage trigger with datafactory",
      subcommands: [
        { name: "create", description: "Create a trigger" },
        { name: "delete", description: "Deletes a trigger" },
        {
          name: "get-event-subscription-status",
          description: "Get a trigger's event subscription status",
        },
        { name: "list", description: "Lists triggers" },
        { name: "query-by-factory", description: "Query triggers" },
        { name: "show", description: "Gets a trigger" },
        { name: "start", description: "Starts a trigger" },
        { name: "stop", description: "Stops a trigger" },
        {
          name: "subscribe-to-event",
          description: "Subscribe event trigger to events",
        },
        {
          name: "unsubscribe-from-event",
          description: "Unsubscribe event trigger from events",
        },
        { name: "update", description: "Update a trigger" },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the datafactory trigger is met",
        },
      ],
    },
    {
      name: "trigger-run",
      description: "Manage trigger run with datafactory",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel a single trigger instance by runId",
        },
        { name: "query-by-factory", description: "Query trigger runs" },
        {
          name: "rerun",
          description: "Rerun single trigger instance by runId",
        },
      ],
    },
    { name: "update", description: "Updates a factory" },
  ],
};

export default completionSpec;
