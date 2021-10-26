const completionSpec: Fig.Spec = {
  name: "acr",
  description: "Manage private registries with Azure Container Registries",
  subcommands: [
    {
      name: "agentpool",
      description:
        "Manage private Tasks agent pools with Azure Container Registries",
      subcommands: [
        {
          name: "create",
          description: "Create an agent pool for an Azure Container Registry",
        },
        { name: "delete", description: "Delete an agent pool" },
        {
          name: "list",
          description: "List the agent pools for an Azure Container Registry",
        },
        {
          name: "show",
          description:
            "Get the properties of a specified agent pool for an Azure Container Registry",
        },
        {
          name: "update",
          description: "Update an agent pool for an Azure Container Registry",
        },
      ],
    },
    {
      name: "build",
      description:
        "Queues a quick build, providing streaming logs for an Azure Container Registry",
    },
    {
      name: "check-health",
      description:
        "Gets health information on the environment and optionally a target registry",
    },
    {
      name: "check-name",
      description:
        "Checks if an Azure Container Registry name is valid and available for use",
    },
    {
      name: "config",
      description: "Configure policies for Azure Container Registries",
      subcommands: [
        {
          name: "content-trust",
          description:
            "Manage content-trust policy for Azure Container Registries",
          subcommands: [
            {
              name: "show",
              description:
                "Show the configured content-trust policy for an Azure Container Registry",
            },
            {
              name: "update",
              description:
                "Update content-trust policy for an Azure Container Registry",
            },
          ],
        },
        {
          name: "retention",
          description: "Manage retention policy for Azure Container Registries",
          subcommands: [
            {
              name: "show",
              description:
                "Show the configured retention policy for an Azure Container Registry",
            },
            {
              name: "update",
              description:
                "Update retention policy for an Azure Container Registry",
            },
          ],
        },
      ],
    },
    {
      name: "connected-registry",
      description:
        "Manage connected registry resources with Azure Container Registries",
      subcommands: [
        {
          name: "create",
          description:
            "Create a connected registry for an Azure Container Registry",
        },
        {
          name: "deactivate",
          description:
            "Deactivate a connected registry from Azure Container Registry",
        },
        {
          name: "delete",
          description:
            "Delete a connected registry from Azure Container Registry",
        },
        {
          name: "install",
          description:
            "Helps to access the necessary information for installing a connected registry. Please see https://aka.ms/acr/connected-registry for more information",
          subcommands: [
            {
              name: "info",
              description:
                "Retrieves information required to activate a connected registry",
            },
            {
              name: "renew-credentials",
              description:
                "Retrieves information required to activate a connected registry, and renews the sync token credentials",
            },
          ],
        },
        {
          name: "list",
          description:
            "Lists all the connected registries under the current parent registry",
        },
        {
          name: "list-client-tokens",
          description:
            "Lists all the client tokens associated to a specific connected registries",
        },
        {
          name: "repo",
          description:
            "Updates all the necessary connected registry sync scope maps repository permissions",
        },
        { name: "show", description: "Show connected registry details" },
        {
          name: "update",
          description:
            "Update a connected registry for an Azure Container Registry",
        },
      ],
    },
    { name: "create", description: "Create an Azure Container Registry" },
    {
      name: "credential",
      description: "Manage login credentials for Azure Container Registries",
      subcommands: [
        {
          name: "renew",
          description:
            "Regenerate login credentials for an Azure Container Registry",
        },
        {
          name: "show",
          description:
            "Get the login credentials for an Azure Container Registry",
        },
      ],
    },
    { name: "delete", description: "Deletes an Azure Container Registry" },
    {
      name: "encryption",
      description: "Manage container registry encryption",
      subcommands: [
        {
          name: "rotate-key",
          description:
            "Rotate (update) the container registry's encryption key",
        },
        {
          name: "show",
          description: "Show the container registry's encryption details",
        },
      ],
    },
    {
      name: "export-pipeline",
      description: "Manage ACR export pipelines",
      subcommands: [
        { name: "create", description: "Create an export pipeline" },
        { name: "delete", description: "Delete an export pipeline" },
        {
          name: "list",
          description: "List export pipelines on a Container Registry",
        },
        { name: "show", description: "Show an export pipeline in detail" },
      ],
    },
    {
      name: "helm",
      description: "Manage helm charts for Azure Container Registries",
      subcommands: [
        {
          name: "delete",
          description:
            "Delete a helm chart version in an Azure Container Registry",
        },
        {
          name: "install-cli",
          description: "Download and install Helm command-line tool",
        },
        {
          name: "list",
          description: "List all helm charts in an Azure Container Registry",
        },
        {
          name: "push",
          description:
            "Push a helm chart package to an Azure Container Registry",
        },
        {
          name: "repo",
          description:
            "Manage helm chart repositories for Azure Container Registries",
          subcommands: [
            {
              name: "add",
              description:
                "Add a helm chart repository from an Azure Container Registry through the Helm CLI",
            },
          ],
        },
        {
          name: "show",
          description: "Describe a helm chart in an Azure Container Registry",
        },
      ],
    },
    {
      name: "identity",
      description:
        "Manage service (managed) identities for a container registry",
      subcommands: [
        {
          name: "assign",
          description: "Assign a managed identity to a container registry",
        },
        {
          name: "remove",
          description: "Remove a managed identity from a container registry",
        },
        {
          name: "show",
          description: "Show the container registry's identity details",
        },
      ],
    },
    {
      name: "import",
      description:
        "Imports an image to an Azure Container Registry from another Container Registry. Import removes the need to docker pull, docker tag, docker push. For larger images consider using --no-wait",
    },
    {
      name: "import-pipeline",
      description: "Manage ACR import pipelines",
      subcommands: [
        { name: "create", description: "Create an import pipeline" },
        { name: "delete", description: "Delete an import pipeline" },
        {
          name: "list",
          description: "List import pipelines on a Container Registry",
        },
        { name: "show", description: "Show an import pipeline in detail" },
      ],
    },
    {
      name: "list",
      description:
        "Lists all the container registries under the current subscription",
    },
    {
      name: "login",
      description:
        "Log in to an Azure Container Registry through the Docker CLI",
    },
    {
      name: "network-rule",
      description: "Manage network rules for Azure Container Registries",
      subcommands: [
        { name: "add", description: "Add a network rule" },
        { name: "list", description: "List network rules" },
        { name: "remove", description: "Remove a network rule" },
      ],
    },
    {
      name: "pack",
      description:
        "Manage Azure Container Registry Tasks that use Cloud Native Buildpacks",
      subcommands: [
        {
          name: "build",
          description:
            "Queues a quick build task that builds an app and pushes it into an Azure Container Registry",
        },
      ],
    },
    {
      name: "pipeline-run",
      description: "Manage ACR import and export pipeline runs",
      subcommands: [
        { name: "create", description: "Create a pipeline run" },
        { name: "delete", description: "Delete an export pipeline" },
        {
          name: "list",
          description:
            "List pipelineruns of all pipelines on a container registry",
        },
        { name: "show", description: "Show an export pipeline in detail" },
      ],
    },
    {
      name: "private-endpoint-connection",
      description: "Manage container registry private endpoint connections",
      subcommands: [
        {
          name: "approve",
          description:
            "Approve a private endpoint connection request for a container registry",
        },
        {
          name: "delete",
          description:
            "Delete a private endpoint connection request for a container registry",
        },
        {
          name: "list",
          description:
            "List all private endpoint connections to a container registry",
        },
        {
          name: "reject",
          description:
            "Reject a private endpoint connection request for a container registry",
        },
        {
          name: "show",
          description:
            "Show details of a container registry's private endpoint connection",
        },
      ],
    },
    {
      name: "private-link-resource",
      description: "Manage registry private link resources",
      subcommands: [
        {
          name: "list",
          description:
            "List the private link resources supported for a registry",
        },
      ],
    },
    {
      name: "replication",
      description:
        "Manage geo-replicated regions of Azure Container Registries",
      subcommands: [
        {
          name: "create",
          description:
            "Create a replicated region for an Azure Container Registry",
        },
        {
          name: "delete",
          description:
            "Delete a replicated region from an Azure Container Registry",
        },
        {
          name: "list",
          description:
            "List all of the regions for a geo-replicated Azure Container Registry",
        },
        { name: "show", description: "Get the details of a replicated region" },
        { name: "update", description: "Updates a replication" },
      ],
    },
    {
      name: "repository",
      description:
        "Manage repositories (image names) for Azure Container Registries",
      subcommands: [
        {
          name: "delete",
          description:
            "Delete a repository or image in an Azure Container Registry",
        },
        {
          name: "list",
          description: "List repositories in an Azure Container Registry",
        },
        {
          name: "show",
          description:
            "Get the attributes of a repository or image in an Azure Container Registry",
        },
        {
          name: "show-manifests",
          description:
            "Show manifests of a repository in an Azure Container Registry",
        },
        {
          name: "show-tags",
          description:
            "Show tags for a repository in an Azure Container Registry",
        },
        {
          name: "untag",
          description: "Untag an image in an Azure Container Registry",
        },
        {
          name: "update",
          description:
            "Update the attributes of a repository or image in an Azure Container Registry",
        },
      ],
    },
    {
      name: "run",
      description:
        "Queues a quick run providing streamed logs for an Azure Container Registry",
    },
    {
      name: "scope-map",
      description: "Manage scope access maps for Azure Container Registries",
      subcommands: [
        {
          name: "create",
          description: "Create a scope map for an Azure Container Registry",
        },
        {
          name: "delete",
          description: "Delete a scope map for an Azure Container Registry",
        },
        {
          name: "list",
          description: "List all scope maps for an Azure Container Registry",
        },
        {
          name: "show",
          description:
            "Show details and attributes of a scope map for an Azure Container Registry",
        },
        {
          name: "update",
          description: "Update a scope map for an Azure Container Registry",
        },
      ],
    },
    {
      name: "show",
      description: "Get the details of an Azure Container Registry",
    },
    { name: "show-endpoints", description: "Display registry endpoints" },
    {
      name: "show-usage",
      description: "Get the storage usage for an Azure Container Registry",
    },
    {
      name: "task",
      description:
        "Manage a collection of steps for building, testing and OS & Framework patching container images using Azure Container Registries",
      subcommands: [
        {
          name: "cancel-run",
          description: "Cancel a specified run of an Azure Container Registry",
        },
        {
          name: "create",
          description:
            "Create a series of steps for building, testing and OS & Framework patching containers. Tasks support triggers from git commits and base image updates",
        },
        {
          name: "credential",
          description:
            "Manage credentials for a task. Please see https://aka.ms/acr/tasks/cross-registry-authentication for more information",
          subcommands: [
            {
              name: "add",
              description: "Add a custom registry login credential to the task",
            },
            {
              name: "list",
              description: "List all the custom registry credentials for task",
            },
            { name: "remove", description: "Remove credential for a task" },
            {
              name: "update",
              description: "Update the registry login credential for a task",
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a task from an Azure Container Registry",
        },
        {
          name: "identity",
          description:
            "Managed Identities for Task. Please see https://aka.ms/acr/tasks/task-create-managed-identity for more information",
          subcommands: [
            {
              name: "assign",
              description: "Update the managed identity for a task",
            },
            {
              name: "remove",
              description: "Remove managed identities for a task",
            },
            {
              name: "show",
              description: "Display the managed identities for task",
            },
          ],
        },
        {
          name: "list",
          description: "List the tasks for an Azure Container Registry",
        },
        {
          name: "list-runs",
          description:
            "List all of the executed runs for an Azure Container Registry, with the ability to filter by a specific Task",
        },
        {
          name: "logs",
          description:
            "Show logs for a particular run. If no run-id is supplied, show logs for the last created run",
        },
        {
          name: "run",
          description:
            "Manually trigger a task that might otherwise be waiting for git commits or base image update triggers",
        },
        {
          name: "show",
          description:
            "Get the properties of a named task for an Azure Container Registry",
        },
        {
          name: "show-run",
          description:
            "Get the properties of a specified run of an Azure Container Registry Task",
        },
        {
          name: "timer",
          description: "Manage timer triggers for a task",
          subcommands: [
            { name: "add", description: "Add a timer trigger to a task" },
            { name: "list", description: "List all timer triggers for a task" },
            {
              name: "remove",
              description: "Remove a timer trigger from a task",
            },
            {
              name: "update",
              description: "Update the timer trigger for a task",
            },
          ],
        },
        {
          name: "update",
          description: "Update a task for an Azure Container Registry",
        },
        {
          name: "update-run",
          description:
            "Patch the run properties of an Azure Container Registry Task",
        },
      ],
    },
    {
      name: "taskrun",
      description: "Manage taskruns using Azure Container Registries",
      subcommands: [
        {
          name: "delete",
          description: "Delete a taskrun from an Azure Container Registry",
        },
        {
          name: "list",
          description: "List the taskruns for an Azure Container Registry",
        },
        { name: "logs", description: "Show run logs for a particular taskrun" },
        {
          name: "show",
          description:
            "Get the properties of a named taskrun for an Azure Container Registry",
        },
      ],
    },
    {
      name: "token",
      description: "Manage tokens for an Azure Container Registry",
      subcommands: [
        {
          name: "create",
          description:
            "Create a token associated with a scope map for an Azure Container Registry",
        },
        {
          name: "credential",
          description:
            "Manage credentials of a token for an Azure Container Registry",
          subcommands: [
            { name: "delete", description: "Delete a token credential" },
            {
              name: "generate",
              description:
                "Generate or replace one or both passwords of a token for an Azure Container Registry. For using token and password to access a container registry, see https://aka.ms/acr/repo-permissions",
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a token for an Azure Container Registry",
        },
        {
          name: "list",
          description: "List all tokens for an Azure Container Registry",
        },
        {
          name: "show",
          description:
            "Show details and attributes of a token for an Azure Container Registry",
        },
        {
          name: "update",
          description:
            "Update a token (replace associated scope map) for an Azure Container Registry",
        },
      ],
    },
    { name: "update", description: "Update an Azure Container Registry" },
    {
      name: "webhook",
      description: "Manage webhooks for Azure Container Registries",
      subcommands: [
        {
          name: "create",
          description: "Create a webhook for an Azure Container Registry",
        },
        {
          name: "delete",
          description: "Delete a webhook from an Azure Container Registry",
        },
        {
          name: "get-config",
          description: "Get the service URI and custom headers for the webhook",
        },
        {
          name: "list",
          description:
            "List all of the webhooks for an Azure Container Registry",
        },
        {
          name: "list-events",
          description: "List recent events for a webhook",
        },
        { name: "ping", description: "Trigger a ping event for a webhook" },
        { name: "show", description: "Get the details of a webhook" },
        { name: "update", description: "Update a webhook" },
      ],
    },
  ],
};

export default completionSpec;
