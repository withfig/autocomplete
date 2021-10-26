const completionSpec: Fig.Spec = {
  name: "synapse",
  description: "Manage and operate Synapse Workspace, Spark Pool, SQL Pool",
  subcommands: [
    {
      name: "activity-run",
      description: "Synapse activity-run",
      subcommands: [
        {
          name: "query-by-pipeline-run",
          description: "Query activity runs based on input filter conditions",
        },
      ],
    },
    {
      name: "data-flow",
      description: "Manage Synapse's data flows",
      subcommands: [
        { name: "create", description: "Create a data flow" },
        { name: "delete", description: "Delete a data flow" },
        { name: "list", description: "List data flows" },
        { name: "set", description: "Set an exist data flow" },
        { name: "show", description: "Get a data flow" },
      ],
    },
    {
      name: "dataset",
      description: "Manage Synapse's datasets",
      subcommands: [
        { name: "create", description: "Create a dataset" },
        { name: "delete", description: "Delete a dataset" },
        { name: "list", description: "List datasets" },
        { name: "set", description: "Update an exist dataset" },
        { name: "show", description: "Get a dataset" },
        { name: "update", description: "Update an exist dataset" },
      ],
    },
    {
      name: "integration-runtime",
      description: "Manage Synapse's integration runtimes",
      subcommands: [
        { name: "create", description: "Create an integration runtime" },
        { name: "delete", description: "Delete an integration runtime" },
        {
          name: "get-connection-info",
          description: "Get the integration runtime connection infomation",
        },
        {
          name: "get-monitoring-data",
          description: "Get metric data for a self-hosted integration runtime",
        },
        {
          name: "get-status",
          description:
            "Gets detailed status information for an integration runtime",
        },
        { name: "list", description: "List integration runtimes" },
        {
          name: "list-auth-key",
          description: "Get keys for a self-hosted integration runtime",
        },
        {
          name: "managed",
          description:
            "Manage integration runtime with synapse sub group managed",
          subcommands: [
            {
              name: "create",
              description: "Create an managed integration runtime",
            },
          ],
        },
        {
          name: "regenerate-auth-key",
          description: "Regenerate self-hosted integration runtime key",
        },
        {
          name: "self-hosted",
          description:
            "Manage integration runtime with synapse sub group self-hosted",
          subcommands: [
            {
              name: "create",
              description: "Create an self-hosted integration runtime",
            },
          ],
        },
        { name: "show", description: "Get an integration runtime" },
        { name: "start", description: "Start an SSIS integration runtime" },
        { name: "stop", description: "Stop an SSIS integration runtime" },
        {
          name: "sync-credentials",
          description:
            "Synchronize credentials among integration runtime nodes",
        },
        { name: "update", description: "Update an integration runtime" },
        {
          name: "upgrade",
          description: "Upgrade self-hosted integration runtime",
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of a integration runtime is met",
        },
      ],
    },
    {
      name: "integration-runtime-node",
      description: "Manage Synapse's self-hosted integration runtime nodes",
      subcommands: [
        {
          name: "delete",
          description: "Remove a self-hosted integration runtime node",
        },
        {
          name: "get-ip-address",
          description: "Get self-hosted integration runtime node ip",
        },
        {
          name: "show",
          description: "Get self-hosted integration runtime node information",
        },
        {
          name: "update",
          description: "Update self-hosted integration runtime node",
        },
      ],
    },
    {
      name: "linked-service",
      description: "Manage Synapse's linked services",
      subcommands: [
        { name: "create", description: "Create a linked service" },
        { name: "delete", description: "Delete a linked service" },
        { name: "list", description: "List linked services" },
        { name: "set", description: "Update an exist linked service" },
        { name: "show", description: "Get a linked service" },
        { name: "update", description: "Update an exist linked service" },
      ],
    },
    {
      name: "managed-private-endpoints",
      description: "Manage synapse managed private endpoints",
      subcommands: [
        {
          name: "create",
          description: "Create a synapse managed private endpoints",
        },
        {
          name: "delete",
          description:
            "Delete synapse managed private endpoints in a workspace",
        },
        {
          name: "list",
          description: "List synapse managed private endpoints in a workspace",
        },
        {
          name: "show",
          description: "Get a synapse managed private endpoints",
        },
      ],
    },
    {
      name: "notebook",
      description: "Manage Synapse's notebooks",
      subcommands: [
        { name: "create", description: "Create a notebook" },
        { name: "delete", description: "Delete a notebook" },
        { name: "export", description: "Export notebooks" },
        { name: "import", description: "Import a notebook" },
        { name: "list", description: "List notebooks" },
        { name: "set", description: "Set an exist notebook" },
        { name: "show", description: "Get a notebook" },
      ],
    },
    {
      name: "pipeline",
      description: "Manage Synapse's pipelines",
      subcommands: [
        { name: "create", description: "Create a pipeline" },
        { name: "create-run", description: "Creates a run of a pipeline" },
        { name: "delete", description: "Delete a pipeline" },
        { name: "list", description: "List pipelines" },
        { name: "set", description: "Update an exist pipeline" },
        { name: "show", description: "Get a pipeline" },
        { name: "update", description: "Update an exist pipeline" },
      ],
    },
    {
      name: "pipeline-run",
      description: "Manage Synapse's pipeline run",
      subcommands: [
        { name: "cancel", description: "Cancel a pipeline run by its run ID" },
        {
          name: "query-by-workspace",
          description:
            "Query pipeline runs in the workspace based on input filter conditions",
        },
        { name: "show", description: "Get a pipeline run by its run ID" },
      ],
    },
    {
      name: "role",
      description: "Manage Synapse's role assignments and definitions",
      subcommands: [
        {
          name: "assignment",
          description: "Manage Synapse's role assignments",
          subcommands: [
            { name: "create", description: "Create a role assignment" },
            {
              name: "delete",
              description: "Delete role assignments of workspace",
            },
            { name: "list", description: "List role assignments" },
            { name: "show", description: "Get a role assignment by id" },
          ],
        },
        {
          name: "definition",
          description: "Manage Synapse's role definitions",
          subcommands: [
            { name: "list", description: "List role definitions" },
            {
              name: "show",
              description: "Get role definition by role id/name",
            },
          ],
        },
        {
          name: "scope",
          description: "Manage Synapse's role scopes",
          subcommands: [{ name: "list", description: "List role scopes" }],
        },
      ],
    },
    {
      name: "spark",
      description: "Manage Spark pools and Spark jobs",
      subcommands: [
        {
          name: "job",
          description: "Manage Synapse Spark batch jobs",
          subcommands: [
            { name: "cancel", description: "Cancel a Spark job" },
            { name: "list", description: "List all Spark jobs" },
            { name: "show", description: "Get a Spark job" },
            { name: "submit", description: "Submit a Spark job" },
          ],
        },
        {
          name: "pool",
          description: "Manage Spark pools",
          subcommands: [
            { name: "create", description: "Create a Spark pool" },
            { name: "delete", description: "Delete a Spark pool" },
            { name: "list", description: "List all Spark pools" },
            { name: "show", description: "Get a Spark pool" },
            { name: "update", description: "Update the Spark pool" },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition of a Spark pool is met",
            },
          ],
        },
        {
          name: "session",
          description: "Manage Synapse Spark sessions",
          subcommands: [
            { name: "cancel", description: "Cancel a Spark session" },
            { name: "create", description: "Create a Spark session" },
            { name: "list", description: "List all Spark sessions" },
            {
              name: "reset-timeout",
              description: "Reset a Spark session timeout time",
            },
            { name: "show", description: "Get a Spark session" },
          ],
        },
        {
          name: "statement",
          description: "Manage Synapse Spark statements",
          subcommands: [
            { name: "cancel", description: "Cancel a Spark statement" },
            { name: "invoke", description: "Invoke a Spark statement" },
            { name: "list", description: "List all Spark statements" },
            { name: "show", description: "Get a Spark statement" },
          ],
        },
      ],
    },
    {
      name: "spark-job-definition",
      description: "Manage spark job definitions in a synapse workspace",
      subcommands: [
        { name: "create", description: "Create a spark job definition" },
        { name: "delete", description: "Delete a spark job definition" },
        { name: "list", description: "List spark job definitions" },
        { name: "show", description: "Get a spark job definition" },
        { name: "update", description: "Update a spark job definition" },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of a spark job definition is met",
        },
      ],
    },
    {
      name: "sql",
      description: "Manage SQL pools",
      subcommands: [
        {
          name: "ad-admin",
          description: "Manage SQL Active Directory administrator",
          subcommands: [
            {
              name: "create",
              description:
                "Create the SQL Azure Active Directory administrator",
            },
            {
              name: "delete",
              description:
                "Delete the SQL Azure Active Directory administrator",
            },
            {
              name: "show",
              description: "Get the SQL Azure Active Directory administrator",
            },
            {
              name: "update",
              description:
                "Update the SQL Azure Active Directory administrator",
            },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition is met",
            },
          ],
        },
        {
          name: "audit-policy",
          description: "Manage SQL auditing policy",
          subcommands: [
            { name: "show", description: "Get a SQL's auditing policy" },
            { name: "update", description: "Update a SQL's auditing policy" },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition is met",
            },
          ],
        },
        {
          name: "pool",
          description: "Manage SQL pools",
          subcommands: [
            {
              name: "audit-policy",
              description: "Manage a SQL pool's auditing policy",
              subcommands: [
                {
                  name: "show",
                  description: "Get a SQL pool's auditing policy",
                },
                {
                  name: "update",
                  description: "Update a SQL pool's auditing policy",
                },
              ],
            },
            {
              name: "classification",
              description: "Manage sensitivity classifications",
              subcommands: [
                {
                  name: "create",
                  description: "Create a column's sensitivity classification",
                },
                {
                  name: "delete",
                  description:
                    "Delete the sensitivity classification of a given column",
                },
                {
                  name: "list",
                  description:
                    "Get the sensitivity classifications of a given SQL pool",
                },
                {
                  name: "recommendation",
                  description:
                    "Manage sensitivity classification recommendations",
                  subcommands: [
                    {
                      name: "disable",
                      description:
                        "Disable sensitivity recommendations for a given column(recommendations are enabled by default on all columns)",
                    },
                    {
                      name: "enable",
                      description:
                        "Enable sensitivity recommendations for a given column(recommendations are enabled by default on all columns)",
                    },
                    {
                      name: "list",
                      description:
                        "List the recommended sensitivity classifications of a given SQL pool",
                    },
                  ],
                },
                {
                  name: "show",
                  description:
                    "Get the sensitivity classification of a given column",
                },
                {
                  name: "update",
                  description: "Update a column's sensitivity classification",
                },
              ],
            },
            { name: "create", description: "Create a SQL pool" },
            { name: "delete", description: "Delete a SQL pool" },
            { name: "list", description: "List all SQL pools" },
            { name: "list-deleted", description: "List all deleted SQL pools" },
            { name: "pause", description: "Pause a SQL pool" },
            {
              name: "restore",
              description: "Create a new SQL pool by restoring from a backup",
            },
            { name: "resume", description: "Resume a SQL pool" },
            { name: "show", description: "Get a SQL pool" },
            {
              name: "show-connection-string",
              description: "Generate a connection string to a SQL pool",
            },
            {
              name: "tde",
              description: "Manage a SQL pool's transparent data encryption",
              subcommands: [
                {
                  name: "set",
                  description:
                    "Set a SQL pool's transparent data encryption configuration",
                },
                {
                  name: "show",
                  description:
                    "Get a SQL pool's transparent data encryption configuration",
                },
              ],
            },
            {
              name: "threat-policy",
              description: "Manage a SQL pool's threat detection policies",
              subcommands: [
                {
                  name: "show",
                  description: "Get a SQL pool's threat detection policy",
                },
                {
                  name: "update",
                  description: "Update a SQL pool's threat detection policy",
                },
              ],
            },
            { name: "update", description: "Update a SQL pool" },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition of a SQL pool is met",
            },
          ],
        },
      ],
    },
    {
      name: "trigger",
      description: "Manage Synapse's triggers",
      subcommands: [
        { name: "create", description: "Create a trigger" },
        { name: "delete", description: "Delete a trigger" },
        {
          name: "get-event-subscription-status",
          description: "Get a trigger's event subscription status",
        },
        { name: "list", description: "List triggers" },
        { name: "set", description: "Update an exist trigger" },
        { name: "show", description: "Get a trigger" },
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
        { name: "update", description: "Update an exist trigger" },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of a trigger is met",
        },
      ],
    },
    {
      name: "trigger-run",
      description: "Synapse trigger-run",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel a single trigger instance by runId",
        },
        {
          name: "query-by-workspace",
          description:
            "Query trigger runs in the workspace based on input filter conditions",
        },
        {
          name: "rerun",
          description: "Rerun single trigger instance by runId",
        },
      ],
    },
    {
      name: "workspace",
      description: "Manage Synapse workspaces",
      subcommands: [
        {
          name: "activate",
          description:
            "Activates a workspace and change it's state from pending to success state when the workspace is first being provisioned and double encryption is enabled",
        },
        {
          name: "check-name",
          description: "Check if a Synapse workspace name is available or not",
        },
        { name: "create", description: "Create a Synapse workspace" },
        { name: "delete", description: "Delete a Synapse workspace" },
        {
          name: "firewall-rule",
          description: "Manage a workspace's firewall rules",
          subcommands: [
            { name: "create", description: "Create a firewall rule" },
            { name: "delete", description: "Delete a firewall rule" },
            { name: "list", description: "List all firewall rules" },
            { name: "show", description: "Get a firewall rule" },
            { name: "update", description: "Update a firewall rule" },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition of a firewall rule is met",
            },
          ],
        },
        {
          name: "key",
          description: "Manage workspace's keys",
          subcommands: [
            { name: "create", description: "Create a workspace's key" },
            {
              name: "delete",
              description:
                "Delete a workspace's key. The key at active status can't be deleted",
            },
            {
              name: "list",
              description: "List keys under specified workspace",
            },
            { name: "show", description: "Show a workspace's key by name" },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition of a workspace key is met",
            },
          ],
        },
        { name: "list", description: "List all Synapse workspaces" },
        {
          name: "managed-identity",
          description: "Manage workspace's managed-identity",
          subcommands: [
            {
              name: "grant-sql-access",
              description: "Grant workspace's sql-access to managed-identity",
            },
            {
              name: "revoke-sql-access",
              description: "Revoke workspace's sql-access to managed-identity",
            },
            {
              name: "show-sql-access",
              description:
                "Show workspace's sql-access state to managed-identity",
            },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition of sql-access state to managed-identity is met",
            },
          ],
        },
        { name: "show", description: "Get a Synapse workspace" },
        { name: "update", description: "Update a Synapse workspace" },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the workspace is met",
        },
      ],
    },
    {
      name: "workspace-package",
      description: "Manage Synapse's workspace packages",
      subcommands: [
        { name: "delete", description: "Delete a workspace package" },
        { name: "list", description: "List workspace packages" },
        { name: "show", description: "Get a workspace package" },
        {
          name: "upload",
          description:
            "Upload a local workspace package file to an Azure Synapse workspace",
        },
        {
          name: "upload-batch",
          description:
            "Upload workspace package files from a local directory to an Azure Synapse workspace",
        },
      ],
    },
  ],
};

export default completionSpec;
