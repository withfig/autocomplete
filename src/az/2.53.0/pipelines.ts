const completion: Fig.Spec = {
  name: "pipelines",
  description:
    "Manage Azure Pipelines.\n\n\t\tThis command group is a part of the azure-devops extension",
  subcommands: [
    {
      name: "agent",
      description: "Manage agents",
      subcommands: [
        {
          name: "list",
          description: "Get a list of agents in a pool",
          options: [
            {
              name: "--pool-id",
              description: "The agent pool containing the agents",
              args: { name: "pool-id" },
              isRequired: true,
            },
            {
              name: "--agent-name",
              description: "Filter on agent name",
              args: { name: "agent-name" },
            },
            {
              name: "--demands",
              description:
                "Filter by demands the agents can satisfy. Comma separated list",
              args: { name: "demands" },
            },
            {
              name: "--detect",
              description: "Automatically detect organization",
              args: { name: "detect", suggestions: ["false", "true"] },
            },
            {
              name: "--include-assigned-request",
              description:
                "Whether to include details about the agents' current work",
              args: {
                name: "include-assigned-request",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--include-capabilities",
              description:
                "Whether to include the agents' capabilities in the response",
              args: {
                name: "include-capabilities",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--include-last-completed-request",
              description:
                "Whether to include details about the agents' most recent completed work",
              args: {
                name: "include-last-completed-request",
                suggestions: ["false", "true"],
              },
            },
            {
              name: ["--organization", "--org"],
              description:
                "Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: https://dev.azure.com/MyOrganizationName/",
              args: { name: "organization" },
            },
          ],
        },
        {
          name: "show",
          description: "Show agent details",
          options: [
            {
              name: ["--agent-id", "--id"],
              description: "The agent ID to get information about",
              args: { name: "agent-id" },
              isRequired: true,
            },
            {
              name: "--pool-id",
              description: "The agent pool containing the agent",
              args: { name: "pool-id" },
              isRequired: true,
            },
            {
              name: "--detect",
              description: "Automatically detect organization",
              args: { name: "detect", suggestions: ["false", "true"] },
            },
            {
              name: "--include-assigned-request",
              description:
                "Whether to include details about the agents' current work",
              args: {
                name: "include-assigned-request",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--include-capabilities",
              description:
                "Whether to include the agents' capabilities in the response",
              args: {
                name: "include-capabilities",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--include-last-completed-request",
              description:
                "Whether to include details about the agents' most recent completed work",
              args: {
                name: "include-last-completed-request",
                suggestions: ["false", "true"],
              },
            },
            {
              name: ["--organization", "--org"],
              description:
                "Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: https://dev.azure.com/MyOrganizationName/",
              args: { name: "organization" },
            },
          ],
        },
      ],
    },
    {
      name: "build",
      description: "Manage builds",
      subcommands: [
        {
          name: "cancel",
          description: "Cancels if build is running",
          options: [
            {
              name: "--build-id",
              description: "ID of the build",
              args: { name: "build-id" },
              isRequired: true,
            },
            {
              name: "--detect",
              description: "Automatically detect organization",
              args: { name: "detect", suggestions: ["false", "true"] },
            },
            {
              name: "--open",
              description: "Open the build results page in your web browser",
            },
            {
              name: ["--organization", "--org"],
              description:
                "Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: https://dev.azure.com/MyOrganizationName/",
              args: { name: "organization" },
            },
            {
              name: ["--project", "-p"],
              description:
                "Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config",
              args: { name: "project" },
            },
          ],
        },
        {
          name: "list",
          description: "List build results",
          options: [
            {
              name: "--branch",
              description: "Filter by builds for this branch",
              args: { name: "branch" },
            },
            {
              name: "--definition-ids",
              description:
                "IDs (space separated) of definitions to list builds for",
              args: { name: "definition-ids" },
            },
            {
              name: "--detect",
              description: "Automatically detect organization",
              args: { name: "detect", suggestions: ["false", "true"] },
            },
            {
              name: ["--organization", "--org"],
              description:
                "Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: https://dev.azure.com/MyOrganizationName/",
              args: { name: "organization" },
            },
            {
              name: ["--project", "-p"],
              description:
                "Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config",
              args: { name: "project" },
            },
            {
              name: "--reason",
              description: "Limit to builds with this reason",
              args: {
                name: "reason",
                suggestions: [
                  "all",
                  "batchedCI",
                  "buildCompletion",
                  "checkInShelveset",
                  "individualCI",
                  "manual",
                  "pullRequest",
                  "schedule",
                  "triggered",
                  "userCreated",
                  "validateShelveset",
                ],
              },
            },
            {
              name: "--requested-for",
              description: "Limit to builds requested for this user or group",
              args: { name: "requested-for" },
            },
            {
              name: "--result",
              description: "Limit to builds with this result",
              args: {
                name: "result",
                suggestions: [
                  "canceled",
                  "failed",
                  "none",
                  "partiallySucceeded",
                  "succeeded",
                ],
              },
            },
            {
              name: "--status",
              description: "Limit to builds with this status",
              args: {
                name: "status",
                suggestions: [
                  "all",
                  "cancelling",
                  "completed",
                  "inProgress",
                  "none",
                  "notStarted",
                  "postponed",
                ],
              },
            },
            {
              name: "--tags",
              description:
                "Limit to builds with each of the specified tags. Space separated",
              args: { name: "tags" },
            },
            {
              name: "--top",
              description: "Maximum number of builds to list",
              args: { name: "top" },
            },
          ],
        },
        {
          name: "queue",
          description: "Request (queue) a build",
          options: [
            {
              name: "--branch",
              description:
                "Branch to build. Required if there is not a default branch set up on the definition. Example: refs/heads/master or master or refs/pull/1/merge or refs/tags/tag",
              args: { name: "branch" },
            },
            {
              name: "--commit-id",
              description: "Commit ID of the branch to build",
              args: { name: "commit-id" },
            },
            {
              name: "--definition-id",
              description:
                "ID of the definition to queue. Required if --name is not supplied",
              args: { name: "definition-id" },
            },
            {
              name: "--definition-name",
              description:
                "Name of the definition to queue. Ignored if --id is supplied",
              args: { name: "definition-name" },
            },
            {
              name: "--detect",
              description: "Automatically detect organization",
              args: { name: "detect", suggestions: ["false", "true"] },
            },
            {
              name: "--open",
              description: "Open the build results page in your web browser",
            },
            {
              name: ["--organization", "--org"],
              description:
                "Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: https://dev.azure.com/MyOrganizationName/",
              args: { name: "organization" },
            },
            {
              name: ["--project", "-p"],
              description:
                "Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config",
              args: { name: "project" },
            },
            {
              name: "--queue-id",
              description:
                "Queue Id of the pool that will be used to queue the build",
              args: { name: "queue-id" },
            },
            {
              name: "--variables",
              description:
                'Space separated "name=value" pairs for the variables you would like to set',
              args: { name: "variables" },
            },
          ],
        },
        {
          name: "show",
          description: "Get the details of a build",
          options: [
            {
              name: "--id",
              description: "ID of the build",
              args: { name: "id" },
              isRequired: true,
            },
            {
              name: "--detect",
              description: "Automatically detect organization",
              args: { name: "detect", suggestions: ["false", "true"] },
            },
            {
              name: "--open",
              description: "Open the build results page in your web browser",
            },
            {
              name: ["--organization", "--org"],
              description:
                "Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: https://dev.azure.com/MyOrganizationName/",
              args: { name: "organization" },
            },
            {
              name: ["--project", "-p"],
              description:
                "Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config",
              args: { name: "project" },
            },
          ],
        },
        {
          name: "definition",
          description: "Manage build definitions",
          subcommands: [
            {
              name: "list",
              description: "List build definitions",
              options: [
                {
                  name: "--detect",
                  description: "Automatically detect organization",
                  args: { name: "detect", suggestions: ["false", "true"] },
                },
                {
                  name: "--name",
                  description:
                    'Limit results to definitions with this name or starting with this name. Examples: "FabCI" or "Fab*"',
                  args: { name: "name" },
                },
                {
                  name: ["--organization", "--org"],
                  description:
                    "Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: https://dev.azure.com/MyOrganizationName/",
                  args: { name: "organization" },
                },
                {
                  name: ["--project", "-p"],
                  description:
                    "Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config",
                  args: { name: "project" },
                },
                {
                  name: "--repository",
                  description:
                    "Limit results to definitions associated with this repository",
                  args: { name: "repository" },
                },
                {
                  name: "--repository-type",
                  description:
                    "Limit results to definitions associated with this repository type. It is mandatory to pass 'repository' argument along with this argument",
                  args: {
                    name: "repository-type",
                    suggestions: [
                      "bitbucket",
                      "git",
                      "github",
                      "githubenterprise",
                      "svn",
                      "tfsgit",
                      "tfsversioncontrol",
                    ],
                  },
                },
                {
                  name: "--top",
                  description: "Maximum number of definitions to list",
                  args: { name: "top" },
                },
              ],
            },
            {
              name: "show",
              description: "Get the details of a build definition",
              options: [
                {
                  name: "--detect",
                  description: "Automatically detect organization",
                  args: { name: "detect", suggestions: ["false", "true"] },
                },
                {
                  name: "--id",
                  description: "ID of the definition",
                  args: { name: "id" },
                },
                {
                  name: "--name",
                  description:
                    "Name of the definition. Ignored if --id is supplied",
                  args: { name: "name" },
                },
                {
                  name: "--open",
                  description:
                    "Open the definition summary page in your web browser",
                },
                {
                  name: ["--organization", "--org"],
                  description:
                    "Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: https://dev.azure.com/MyOrganizationName/",
                  args: { name: "organization" },
                },
                {
                  name: ["--project", "-p"],
                  description:
                    "Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config",
                  args: { name: "project" },
                },
              ],
            },
          ],
        },
        {
          name: "tag",
          description: "Manage build tags",
          subcommands: [
            {
              name: "add",
              description: "Add tag(s) for a build",
              options: [
                {
                  name: "--build-id",
                  description: "ID of the build",
                  args: { name: "build-id" },
                  isRequired: true,
                },
                {
                  name: "--tags",
                  description:
                    "Tag(s) to be added to the build. [Comma seperated values]",
                  args: { name: "tags" },
                  isRequired: true,
                },
                {
                  name: "--detect",
                  description: "Automatically detect organization",
                  args: { name: "detect", suggestions: ["false", "true"] },
                },
                {
                  name: ["--organization", "--org"],
                  description:
                    "Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: https://dev.azure.com/MyOrganizationName/",
                  args: { name: "organization" },
                },
                {
                  name: ["--project", "-p"],
                  description:
                    "Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config",
                  args: { name: "project" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a build tag",
              options: [
                {
                  name: "--build-id",
                  description: "ID of the build",
                  args: { name: "build-id" },
                  isRequired: true,
                },
                {
                  name: "--tag",
                  description: "Tag to be deleted from the build",
                  args: { name: "tag" },
                  isRequired: true,
                },
                {
                  name: "--detect",
                  description: "Automatically detect organization",
                  args: { name: "detect", suggestions: ["false", "true"] },
                },
                {
                  name: ["--organization", "--org"],
                  description:
                    "Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: https://dev.azure.com/MyOrganizationName/",
                  args: { name: "organization" },
                },
                {
                  name: ["--project", "-p"],
                  description:
                    "Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config",
                  args: { name: "project" },
                },
              ],
            },
            {
              name: "list",
              description: "Get tags for a build",
              options: [
                {
                  name: "--build-id",
                  description: "ID of the build",
                  args: { name: "build-id" },
                  isRequired: true,
                },
                {
                  name: "--detect",
                  description: "Automatically detect organization",
                  args: { name: "detect", suggestions: ["false", "true"] },
                },
                {
                  name: ["--organization", "--org"],
                  description:
                    "Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: https://dev.azure.com/MyOrganizationName/",
                  args: { name: "organization" },
                },
                {
                  name: ["--project", "-p"],
                  description:
                    "Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config",
                  args: { name: "project" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "create",
      description: "Create a new Azure Pipeline (YAML based)",
      options: [
        {
          name: "--name",
          description: "Name of the new pipeline",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: "--branch",
          description:
            "Branch name for which the pipeline will be configured. If omitted, it will be auto-detected from local repository",
          args: { name: "branch" },
        },
        {
          name: "--description",
          description: "Description for the new pipeline",
          args: { name: "description" },
        },
        {
          name: "--detect",
          description: "Automatically detect organization",
          args: { name: "detect", suggestions: ["false", "true"] },
        },
        {
          name: "--folder-path",
          description:
            'Path of the folder where the pipeline needs to be created. Default is root folder. e.g. "user1/test_pipelines"',
          args: { name: "folder-path" },
        },
        {
          name: ["--organization", "--org"],
          description:
            "Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: https://dev.azure.com/MyOrganizationName/",
          args: { name: "organization" },
        },
        {
          name: ["--project", "-p"],
          description:
            "Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config",
          args: { name: "project" },
        },
        {
          name: "--queue-id",
          description:
            "Id of the queue in the available agent pools. Will be auto detected if not specified",
          args: { name: "queue-id" },
        },
        {
          name: "--repository",
          description:
            "Repository for which the pipeline needs to be configured. Can be clone url of the git repository or name of the repository for a Azure Repos or Owner/RepoName in case of GitHub repository. If omitted it will be auto-detected from the remote url of local git repository. If name is mentioned instead of url, --repository-type argument is also required",
          args: { name: "repository" },
        },
        {
          name: "--repository-type",
          description:
            "Type of repository. If omitted, it will be auto-detected from remote url of local repository. 'tfsgit' for Azure Repos, 'github' for GitHub repository",
          args: { name: "repository-type", suggestions: ["github", "tfsgit"] },
        },
        {
          name: "--service-connection",
          description:
            "Id of the Service connection created for the repository for GitHub repository. Use command az devops service-endpoint -h for creating/listing service_connections. Not required for Azure Repos",
          args: { name: "service-connection" },
        },
        {
          name: ["--skip-first-run", "--skip-run"],
          description:
            "Specify this flag to prevent the first run being triggered by the command. Command will return a pipeline if run is skipped else it will output a pipeline run",
          args: { name: "skip-first-run", suggestions: ["false", "true"] },
        },
        {
          name: ["--yaml-path", "--yml-path"],
          description:
            "Path of the pipelines yaml file in the repo (if yaml is already present in the repo)",
          args: { name: "yaml-path" },
        },
      ],
    },
    {
      name: "delete",
      description: "Delete a pipeline",
      options: [
        {
          name: "--id",
          description: "ID of the pipeline",
          args: { name: "id" },
          isRequired: true,
        },
        {
          name: "--detect",
          description: "Automatically detect organization",
          args: { name: "detect", suggestions: ["false", "true"] },
        },
        {
          name: ["--organization", "--org"],
          description:
            "Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: https://dev.azure.com/MyOrganizationName/",
          args: { name: "organization" },
        },
        {
          name: ["--project", "-p"],
          description:
            "Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config",
          args: { name: "project" },
        },
        {
          name: ["--yes", "-y"],
          description: "Do not prompt for confirmation",
        },
      ],
    },
    {
      name: "list",
      description: "List pipelines",
      options: [
        {
          name: "--detect",
          description: "Automatically detect organization",
          args: { name: "detect", suggestions: ["false", "true"] },
        },
        {
          name: "--folder-path",
          description: "If specified, filters to definitions under this folder",
          args: { name: "folder-path" },
        },
        {
          name: "--name",
          description:
            'Limit results to pipelines with this name or starting with this name. Examples: "FabCI" or "Fab*"',
          args: { name: "name" },
        },
        {
          name: ["--organization", "--org"],
          description:
            "Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: https://dev.azure.com/MyOrganizationName/",
          args: { name: "organization" },
        },
        {
          name: ["--project", "-p"],
          description:
            "Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config",
          args: { name: "project" },
        },
        {
          name: "--query-order",
          description: "Order of the results",
          args: {
            name: "query-order",
            suggestions: [
              "ModifiedAsc",
              "ModifiedDesc",
              "NameAsc",
              "NameDesc",
              "None",
            ],
          },
        },
        {
          name: "--repository",
          description:
            "Limit results to pipelines associated with this repository",
          args: { name: "repository" },
        },
        {
          name: "--repository-type",
          description:
            "Limit results to pipelines associated with this repository type. It is mandatory to pass 'repository' argument along with this argument",
          args: {
            name: "repository-type",
            suggestions: [
              "bitbucket",
              "git",
              "github",
              "githubenterprise",
              "svn",
              "tfsgit",
              "tfsversioncontrol",
            ],
          },
        },
        {
          name: "--top",
          description: "Maximum number of pipelines to list",
          args: { name: "top" },
        },
      ],
    },
    {
      name: "run",
      description: "Queue (run) a pipeline",
      options: [
        {
          name: "--branch",
          description:
            "Name of the branch on which the pipeline run is to be queued. Example: refs/heads/master or master or refs/pull/1/merge or refs/tags/tag",
          args: { name: "branch" },
        },
        {
          name: "--commit-id",
          description: "Commit-id on which the pipeline run is to be queued",
          args: { name: "commit-id" },
        },
        {
          name: "--detect",
          description: "Automatically detect organization",
          args: { name: "detect", suggestions: ["false", "true"] },
        },
        {
          name: "--folder-path",
          description: "Folder path of pipeline. Default is root level folder",
          args: { name: "folder-path" },
        },
        {
          name: "--id",
          description:
            "ID of the pipeline to queue. Required if --name is not supplied",
          args: { name: "id" },
        },
        {
          name: "--name",
          description:
            "Name of the pipeline to queue. Ignored if --id is supplied",
          args: { name: "name" },
        },
        {
          name: "--open",
          description: "Open the pipeline results page in your web browser",
        },
        {
          name: ["--organization", "--org"],
          description:
            "Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: https://dev.azure.com/MyOrganizationName/",
          args: { name: "organization" },
        },
        {
          name: "--parameters",
          description:
            'Space separated "name=value" pairs for the parameters you would like to set',
          args: { name: "parameters" },
        },
        {
          name: ["--project", "-p"],
          description:
            "Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config",
          args: { name: "project" },
        },
        {
          name: "--variables",
          description:
            'Space separated "name=value" pairs for the variables you would like to set',
          args: { name: "variables" },
        },
      ],
    },
    {
      name: "show",
      description: "Get the details of a pipeline",
      options: [
        {
          name: "--detect",
          description: "Automatically detect organization",
          args: { name: "detect", suggestions: ["false", "true"] },
        },
        {
          name: "--folder-path",
          description: "Folder path of pipeline. Default is root level folder",
          args: { name: "folder-path" },
        },
        {
          name: "--id",
          description: "ID of the pipeline",
          args: { name: "id" },
        },
        {
          name: "--name",
          description: "Name of the pipeline. Ignored if --id is supplied",
          args: { name: "name" },
        },
        {
          name: "--open",
          description: "Open the pipeline summary page in your web browser",
        },
        {
          name: ["--organization", "--org"],
          description:
            "Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: https://dev.azure.com/MyOrganizationName/",
          args: { name: "organization" },
        },
        {
          name: ["--project", "-p"],
          description:
            "Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config",
          args: { name: "project" },
        },
      ],
    },
    {
      name: "update",
      description: "Update a pipeline",
      options: [
        {
          name: "--id",
          description: "Id of the pipeline to update",
          args: { name: "id" },
          isRequired: true,
        },
        {
          name: "--branch",
          description: "Branch name for which the pipeline will be configured",
          args: { name: "branch" },
        },
        {
          name: "--description",
          description: "New description for the pipeline",
          args: { name: "description" },
        },
        {
          name: "--detect",
          description: "Automatically detect organization",
          args: { name: "detect", suggestions: ["false", "true"] },
        },
        {
          name: "--new-folder-path",
          description:
            'New full path of the folder to move the pipeline to. e.g. "user1/production_pipelines"',
          args: { name: "new-folder-path" },
        },
        {
          name: "--new-name",
          description: "New updated name of the pipeline",
          args: { name: "new-name" },
        },
        {
          name: ["--organization", "--org"],
          description:
            "Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: https://dev.azure.com/MyOrganizationName/",
          args: { name: "organization" },
        },
        {
          name: ["--project", "-p"],
          description:
            "Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config",
          args: { name: "project" },
        },
        {
          name: "--queue-id",
          description:
            "Queue id of the agent pool where the pipeline needs to run",
          args: { name: "queue-id" },
        },
        {
          name: ["--yaml-path", "--yml-path"],
          description: "Path of the pipelines yaml file in the repo",
          args: { name: "yaml-path" },
        },
      ],
    },
    {
      name: "folder",
      description: "Manage folders for organizing pipelines",
      subcommands: [
        {
          name: "create",
          description: "Create a folder",
          options: [
            {
              name: "--path",
              description: "Full path of the folder",
              args: { name: "path" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "Description of the folder",
              args: { name: "description" },
            },
            {
              name: "--detect",
              description: "Automatically detect organization",
              args: { name: "detect", suggestions: ["false", "true"] },
            },
            {
              name: ["--organization", "--org"],
              description:
                "Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: https://dev.azure.com/MyOrganizationName/",
              args: { name: "organization" },
            },
            {
              name: ["--project", "-p"],
              description:
                "Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config",
              args: { name: "project" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a folder",
          options: [
            {
              name: "--path",
              description: "Full path of the folder",
              args: { name: "path" },
              isRequired: true,
            },
            {
              name: "--detect",
              description: "Automatically detect organization",
              args: { name: "detect", suggestions: ["false", "true"] },
            },
            {
              name: ["--organization", "--org"],
              description:
                "Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: https://dev.azure.com/MyOrganizationName/",
              args: { name: "organization" },
            },
            {
              name: ["--project", "-p"],
              description:
                "Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config",
              args: { name: "project" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "List all folders",
          options: [
            {
              name: "--detect",
              description: "Automatically detect organization",
              args: { name: "detect", suggestions: ["false", "true"] },
            },
            {
              name: ["--organization", "--org"],
              description:
                "Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: https://dev.azure.com/MyOrganizationName/",
              args: { name: "organization" },
            },
            {
              name: "--path",
              description: "Full path of the folder",
              args: { name: "path" },
            },
            {
              name: ["--project", "-p"],
              description:
                "Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config",
              args: { name: "project" },
            },
            {
              name: "--query-order",
              description: "Order in which folders are returned",
              args: {
                name: "query-order",
                suggestions: ["Asc", "Desc", "None"],
              },
            },
          ],
        },
        {
          name: "update",
          description: "Update a folder name or description",
          options: [
            {
              name: "--path",
              description: "Full path of the folder",
              args: { name: "path" },
              isRequired: true,
            },
            {
              name: "--detect",
              description: "Automatically detect organization",
              args: { name: "detect", suggestions: ["false", "true"] },
            },
            {
              name: "--new-description",
              description: "New description of the folder",
              args: { name: "new-description" },
            },
            {
              name: "--new-path",
              description: "New full path of the folder",
              args: { name: "new-path" },
            },
            {
              name: ["--organization", "--org"],
              description:
                "Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: https://dev.azure.com/MyOrganizationName/",
              args: { name: "organization" },
            },
            {
              name: ["--project", "-p"],
              description:
                "Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config",
              args: { name: "project" },
            },
          ],
        },
      ],
    },
    {
      name: "pool",
      description: "Manage agent pools",
      subcommands: [
        {
          name: "list",
          description: "List agent pools",
          options: [
            {
              name: "--action",
              description: "Filter the list with user action permitted",
              args: { name: "action", suggestions: ["manage", "none", "use"] },
            },
            {
              name: "--detect",
              description: "Automatically detect organization",
              args: { name: "detect", suggestions: ["false", "true"] },
            },
            {
              name: ["--organization", "--org"],
              description:
                "Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: https://dev.azure.com/MyOrganizationName/",
              args: { name: "organization" },
            },
            {
              name: "--pool-name",
              description: "Filter the list with matching pool name",
              args: { name: "pool-name" },
            },
            {
              name: "--pool-type",
              description: "Filter the list with type of pool",
              args: {
                name: "pool-type",
                suggestions: ["automation", "deployment"],
              },
            },
          ],
        },
        {
          name: "show",
          description: "Show agent pool details",
          options: [
            {
              name: ["--pool-id", "--id"],
              description: "Id of the pool to list the details",
              args: { name: "pool-id" },
              isRequired: true,
            },
            {
              name: "--action",
              description: "Filter the list with user action permitted",
              args: { name: "action", suggestions: ["manage", "none", "use"] },
            },
            {
              name: "--detect",
              description: "Automatically detect organization",
              args: { name: "detect", suggestions: ["false", "true"] },
            },
            {
              name: ["--organization", "--org"],
              description:
                "Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: https://dev.azure.com/MyOrganizationName/",
              args: { name: "organization" },
            },
          ],
        },
      ],
    },
    {
      name: "queue",
      description: "Manage agent queues",
      subcommands: [
        {
          name: "list",
          description: "List agent queues",
          options: [
            {
              name: "--action",
              description:
                "Filter by whether the calling user has use or manage permissions",
              args: { name: "action", suggestions: ["manage", "none", "use"] },
            },
            {
              name: "--detect",
              description: "Automatically detect organization",
              args: { name: "detect", suggestions: ["false", "true"] },
            },
            {
              name: ["--organization", "--org"],
              description:
                "Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: https://dev.azure.com/MyOrganizationName/",
              args: { name: "organization" },
            },
            {
              name: ["--project", "-p"],
              description:
                "Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config",
              args: { name: "project" },
            },
            {
              name: "--queue-name",
              description:
                "Filter the list with matching queue name regex. e.g. ubuntu for queue with name 'Hosted Ubuntu 1604'",
              args: { name: "queue-name" },
            },
          ],
        },
        {
          name: "show",
          description: "Show details of agent queue",
          options: [
            {
              name: ["--queue-id", "--id"],
              description: "Id of the agent queue to get information about",
              args: { name: "queue-id" },
              isRequired: true,
            },
            {
              name: "--action",
              description:
                "Filter by whether the calling user has use or manage permissions",
              args: { name: "action", suggestions: ["manage", "none", "use"] },
            },
            {
              name: "--detect",
              description: "Automatically detect organization",
              args: { name: "detect", suggestions: ["false", "true"] },
            },
            {
              name: ["--organization", "--org"],
              description:
                "Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: https://dev.azure.com/MyOrganizationName/",
              args: { name: "organization" },
            },
            {
              name: ["--project", "-p"],
              description:
                "Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config",
              args: { name: "project" },
            },
          ],
        },
      ],
    },
    {
      name: "release",
      description: "Manage releases",
      subcommands: [
        {
          name: "create",
          description: "Request (create) a release",
          options: [
            {
              name: "--artifact-metadata-list",
              description: 'Space separated "alias=version_id" pairs',
              args: { name: "artifact-metadata-list" },
            },
            {
              name: "--definition-id",
              description:
                "ID of the definition to create. Required if --definition-name is not supplied",
              args: { name: "definition-id" },
            },
            {
              name: "--definition-name",
              description:
                "Name of the definition to create. Ignored if --definition-id is supplied",
              args: { name: "definition-name" },
            },
            {
              name: "--description",
              description: "Description of the release",
              args: { name: "description" },
            },
            {
              name: "--detect",
              description: "Automatically detect organization",
              args: { name: "detect", suggestions: ["false", "true"] },
            },
            {
              name: "--open",
              description: "Open the release results page in your web browser",
            },
            {
              name: ["--organization", "--org"],
              description:
                "Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: https://dev.azure.com/MyOrganizationName/",
              args: { name: "organization" },
            },
            {
              name: ["--project", "-p"],
              description:
                "Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config",
              args: { name: "project" },
            },
          ],
        },
        {
          name: "list",
          description: "List release results",
          options: [
            {
              name: "--definition-id",
              description: "ID of definition to list releases for",
              args: { name: "definition-id" },
            },
            {
              name: "--detect",
              description: "Automatically detect organization",
              args: { name: "detect", suggestions: ["false", "true"] },
            },
            {
              name: ["--organization", "--org"],
              description:
                "Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: https://dev.azure.com/MyOrganizationName/",
              args: { name: "organization" },
            },
            {
              name: ["--project", "-p"],
              description:
                "Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config",
              args: { name: "project" },
            },
            {
              name: "--source-branch",
              description: "Filter releases for this branch",
              args: { name: "source-branch" },
            },
            {
              name: "--status",
              description: "Limit to releases with this status",
              args: { name: "status" },
            },
            {
              name: "--top",
              description: "Maximum number of releases to list. Default is 50",
              args: { name: "top" },
            },
          ],
        },
        {
          name: "show",
          description: "Get the details of a release",
          options: [
            {
              name: "--id",
              description: "ID of the release",
              args: { name: "id" },
              isRequired: true,
            },
            {
              name: "--detect",
              description: "Automatically detect organization",
              args: { name: "detect", suggestions: ["false", "true"] },
            },
            {
              name: "--open",
              description: "Open the release results page in your web browser",
            },
            {
              name: ["--organization", "--org"],
              description:
                "Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: https://dev.azure.com/MyOrganizationName/",
              args: { name: "organization" },
            },
            {
              name: ["--project", "-p"],
              description:
                "Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config",
              args: { name: "project" },
            },
          ],
        },
        {
          name: "definition",
          description: "Manage release definitions",
          subcommands: [
            {
              name: "list",
              description: "List release definitions",
              options: [
                {
                  name: "--artifact-source-id",
                  description:
                    "Limit results to definitions associated with this artifact_source_id. e.g. For build it would be {projectGuid}:{BuildDefinitionId}, for Jenkins it would be {JenkinsConnectionId}:{JenkinsDefinitionId}, for TfsOnPrem it would be {TfsOnPremConnectionId}:{ProjectName}:{TfsOnPremDefinitionId}. For third-party artifacts e.g. TeamCity, BitBucket you may refer 'uniqueSourceIdentifier' inside vss-extension.json at https://github.com/Microsoft/vsts-rm-extensions/blob/master/Extensions",
                  args: { name: "artifact-source-id" },
                },
                {
                  name: "--artifact-type",
                  description:
                    "Release definitions with given artifactType will be returned",
                  args: {
                    name: "artifact-type",
                    suggestions: [
                      "build",
                      "externaltfsbuild",
                      "git",
                      "github",
                      "jenkins",
                      "tfvc",
                    ],
                  },
                },
                {
                  name: "--detect",
                  description: "Automatically detect organization",
                  args: { name: "detect", suggestions: ["false", "true"] },
                },
                {
                  name: "--name",
                  description:
                    'Limit results to definitions with this name or contains this name. Example: "FabCI"',
                  args: { name: "name" },
                },
                {
                  name: ["--organization", "--org"],
                  description:
                    "Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: https://dev.azure.com/MyOrganizationName/",
                  args: { name: "organization" },
                },
                {
                  name: ["--project", "-p"],
                  description:
                    "Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config",
                  args: { name: "project" },
                },
                {
                  name: "--top",
                  description: "Maximum number of definitions to list",
                  args: { name: "top" },
                },
              ],
            },
            {
              name: "show",
              description: "Get the details of a release definition",
              options: [
                {
                  name: "--detect",
                  description: "Automatically detect organization",
                  args: { name: "detect", suggestions: ["false", "true"] },
                },
                {
                  name: "--id",
                  description: "ID of the definition",
                  args: { name: "id" },
                },
                {
                  name: "--name",
                  description:
                    "Name of the definition. Ignored if --id is supplied",
                  args: { name: "name" },
                },
                {
                  name: "--open",
                  description:
                    "Open the definition summary page in your web browser",
                },
                {
                  name: ["--organization", "--org"],
                  description:
                    "Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: https://dev.azure.com/MyOrganizationName/",
                  args: { name: "organization" },
                },
                {
                  name: ["--project", "-p"],
                  description:
                    "Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config",
                  args: { name: "project" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "runs",
      description: "Manage pipeline runs",
      subcommands: [
        {
          name: "list",
          description: "List the pipeline runs in a project",
          options: [
            {
              name: "--branch",
              description: "Filter by builds for this branch",
              args: { name: "branch" },
            },
            {
              name: "--detect",
              description: "Automatically detect organization",
              args: { name: "detect", suggestions: ["false", "true"] },
            },
            {
              name: ["--organization", "--org"],
              description:
                "Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: https://dev.azure.com/MyOrganizationName/",
              args: { name: "organization" },
            },
            {
              name: "--pipeline-ids",
              description:
                "IDs (space separated) of definitions to list builds for. For multiple pipeline ids: --pipeline-ids 1 2",
              args: { name: "pipeline-ids" },
            },
            {
              name: ["--project", "-p"],
              description:
                "Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config",
              args: { name: "project" },
            },
            {
              name: "--query-order",
              description: "Order of pipeline runs",
              args: {
                name: "query-order",
                suggestions: [
                  "FinishTimeAsc",
                  "FinishTimeDesc",
                  "QueueTimeAsc",
                  "QueueTimeDesc",
                  "StartTimeAsc",
                  "StartTimeDesc",
                ],
              },
            },
            {
              name: "--reason",
              description: "Limit to builds with this reason",
              args: {
                name: "reason",
                suggestions: [
                  "all",
                  "batchedCI",
                  "buildCompletion",
                  "checkInShelveset",
                  "individualCI",
                  "manual",
                  "pullRequest",
                  "schedule",
                  "triggered",
                  "userCreated",
                  "validateShelveset",
                ],
              },
            },
            {
              name: "--requested-for",
              description: "Limit to builds requested for this user or group",
              args: { name: "requested-for" },
            },
            {
              name: "--result",
              description: "Limit to builds with this result",
              args: {
                name: "result",
                suggestions: [
                  "canceled",
                  "failed",
                  "none",
                  "partiallySucceeded",
                  "succeeded",
                ],
              },
            },
            {
              name: "--status",
              description: "Limit to builds with this status",
              args: {
                name: "status",
                suggestions: [
                  "all",
                  "cancelling",
                  "completed",
                  "inProgress",
                  "none",
                  "notStarted",
                  "postponed",
                ],
              },
            },
            {
              name: "--tags",
              description:
                "Limit to builds with each of the specified tags. Space separated",
              args: { name: "tags" },
            },
            {
              name: "--top",
              description: "Maximum number of builds to list",
              args: { name: "top" },
            },
          ],
        },
        {
          name: "show",
          description: "Show details of a pipeline run",
          options: [
            {
              name: "--id",
              description: "ID of the pipeline run",
              args: { name: "id" },
              isRequired: true,
            },
            {
              name: "--detect",
              description: "Automatically detect organization",
              args: { name: "detect", suggestions: ["false", "true"] },
            },
            {
              name: "--open",
              description: "Open the build results page in your web browser",
            },
            {
              name: ["--organization", "--org"],
              description:
                "Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: https://dev.azure.com/MyOrganizationName/",
              args: { name: "organization" },
            },
            {
              name: ["--project", "-p"],
              description:
                "Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config",
              args: { name: "project" },
            },
          ],
        },
        {
          name: "artifact",
          description: "Manage pipeline run artifacts",
          subcommands: [
            {
              name: "download",
              description: "Download a pipeline artifact",
              options: [
                {
                  name: "--artifact-name",
                  description: "Name of the artifact to download",
                  args: { name: "artifact-name" },
                  isRequired: true,
                },
                {
                  name: "--path",
                  description: "Path to download the artifact into",
                  args: { name: "path" },
                  isRequired: true,
                },
                {
                  name: "--run-id",
                  description:
                    "ID of the run that the artifact is associated to",
                  args: { name: "run-id" },
                  isRequired: true,
                },
                {
                  name: "--detect",
                  description: "Automatically detect organization",
                  args: { name: "detect", suggestions: ["false", "true"] },
                },
                {
                  name: ["--organization", "--org"],
                  description:
                    "Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: https://dev.azure.com/MyOrganizationName/",
                  args: { name: "organization" },
                },
                {
                  name: ["--project", "-p"],
                  description:
                    "Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config",
                  args: { name: "project" },
                },
              ],
            },
            {
              name: "list",
              description: "List artifacts associated with a run",
              options: [
                {
                  name: "--run-id",
                  description:
                    "ID of the run that the artifact is associated to",
                  args: { name: "run-id" },
                  isRequired: true,
                },
                {
                  name: "--detect",
                  description: "Automatically detect organization",
                  args: { name: "detect", suggestions: ["false", "true"] },
                },
                {
                  name: ["--organization", "--org"],
                  description:
                    "Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: https://dev.azure.com/MyOrganizationName/",
                  args: { name: "organization" },
                },
                {
                  name: ["--project", "-p"],
                  description:
                    "Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config",
                  args: { name: "project" },
                },
              ],
            },
            {
              name: "upload",
              description: "Upload a pipeline artifact",
              options: [
                {
                  name: "--artifact-name",
                  description: "Name of the artifact to upload",
                  args: { name: "artifact-name" },
                  isRequired: true,
                },
                {
                  name: "--path",
                  description: "Path to upload the artifact from",
                  args: { name: "path" },
                  isRequired: true,
                },
                {
                  name: "--run-id",
                  description:
                    "ID of the run that the artifact is associated to",
                  args: { name: "run-id" },
                  isRequired: true,
                },
                {
                  name: "--detect",
                  description: "Automatically detect organization",
                  args: { name: "detect", suggestions: ["false", "true"] },
                },
                {
                  name: ["--organization", "--org"],
                  description:
                    "Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: https://dev.azure.com/MyOrganizationName/",
                  args: { name: "organization" },
                },
                {
                  name: ["--project", "-p"],
                  description:
                    "Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config",
                  args: { name: "project" },
                },
              ],
            },
          ],
        },
        {
          name: "tag",
          description: "Manage pipeline run tags",
          subcommands: [
            {
              name: "add",
              description: "Add tag(s) for a pipeline run",
              options: [
                {
                  name: "--run-id",
                  description: "ID of the pipeline run",
                  args: { name: "run-id" },
                  isRequired: true,
                },
                {
                  name: "--tags",
                  description:
                    "Tag(s) to be added to the pipeline run. [Comma seperated values]",
                  args: { name: "tags" },
                  isRequired: true,
                },
                {
                  name: "--detect",
                  description: "Automatically detect organization",
                  args: { name: "detect", suggestions: ["false", "true"] },
                },
                {
                  name: ["--organization", "--org"],
                  description:
                    "Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: https://dev.azure.com/MyOrganizationName/",
                  args: { name: "organization" },
                },
                {
                  name: ["--project", "-p"],
                  description:
                    "Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config",
                  args: { name: "project" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a pipeline run tag",
              options: [
                {
                  name: "--run-id",
                  description: "ID of the pipeline run",
                  args: { name: "run-id" },
                  isRequired: true,
                },
                {
                  name: "--tag",
                  description: "Tag to be deleted from the pipeline run",
                  args: { name: "tag" },
                  isRequired: true,
                },
                {
                  name: "--detect",
                  description: "Automatically detect organization",
                  args: { name: "detect", suggestions: ["false", "true"] },
                },
                {
                  name: ["--organization", "--org"],
                  description:
                    "Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: https://dev.azure.com/MyOrganizationName/",
                  args: { name: "organization" },
                },
                {
                  name: ["--project", "-p"],
                  description:
                    "Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config",
                  args: { name: "project" },
                },
              ],
            },
            {
              name: "list",
              description: "Get tags for a pipeline run",
              options: [
                {
                  name: "--run-id",
                  description: "ID of the pipeline run",
                  args: { name: "run-id" },
                  isRequired: true,
                },
                {
                  name: "--detect",
                  description: "Automatically detect organization",
                  args: { name: "detect", suggestions: ["false", "true"] },
                },
                {
                  name: ["--organization", "--org"],
                  description:
                    "Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: https://dev.azure.com/MyOrganizationName/",
                  args: { name: "organization" },
                },
                {
                  name: ["--project", "-p"],
                  description:
                    "Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config",
                  args: { name: "project" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "variable",
      description: "Manage pipeline variables",
      subcommands: [
        {
          name: "create",
          description: "Add a variable to a pipeline",
          options: [
            {
              name: "--name",
              description: "Name of the variable",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--allow-override",
              description:
                "Indicates whether the value can be set at queue time",
              args: { name: "allow-override", suggestions: ["false", "true"] },
            },
            {
              name: "--detect",
              description: "Automatically detect organization",
              args: { name: "detect", suggestions: ["false", "true"] },
            },
            {
              name: ["--organization", "--org"],
              description:
                "Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: https://dev.azure.com/MyOrganizationName/",
              args: { name: "organization" },
            },
            {
              name: "--pipeline-id",
              description: "Id of the pipeline",
              args: { name: "pipeline-id" },
            },
            {
              name: "--pipeline-name",
              description:
                "Name of the pipeline. Ignored if --pipeline-id parameter is supplied",
              args: { name: "pipeline-name" },
            },
            {
              name: ["--project", "-p"],
              description:
                "Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config",
              args: { name: "project" },
            },
            {
              name: "--secret",
              description: "Indicates whether the variable's value is a secret",
              args: { name: "secret", suggestions: ["false", "true"] },
            },
            {
              name: "--value",
              description:
                "Value of the variable. For secret variables, if --value parameter is not given, it will be picked from environment variable prefixed with AZURE_DEVOPS_EXT_PIPELINE_VAR_ or user will be prompted to enter it via standard input. e.g. A variable named MySecret can be input using environment variable AZURE_DEVOPS_EXT_PIPELINE_VAR_MySecret",
              args: { name: "value" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a variable from pipeline",
          options: [
            {
              name: "--name",
              description: "Name of the variable to delete",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--detect",
              description: "Automatically detect organization",
              args: { name: "detect", suggestions: ["false", "true"] },
            },
            {
              name: ["--organization", "--org"],
              description:
                "Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: https://dev.azure.com/MyOrganizationName/",
              args: { name: "organization" },
            },
            {
              name: "--pipeline-id",
              description: "Id of the pipeline",
              args: { name: "pipeline-id" },
            },
            {
              name: "--pipeline-name",
              description: "Name of the pipeline",
              args: { name: "pipeline-name" },
            },
            {
              name: ["--project", "-p"],
              description:
                "Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config",
              args: { name: "project" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "List the variables in a pipeline",
          options: [
            {
              name: "--detect",
              description: "Automatically detect organization",
              args: { name: "detect", suggestions: ["false", "true"] },
            },
            {
              name: ["--organization", "--org"],
              description:
                "Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: https://dev.azure.com/MyOrganizationName/",
              args: { name: "organization" },
            },
            {
              name: "--pipeline-id",
              description: "Id of the pipeline",
              args: { name: "pipeline-id" },
            },
            {
              name: "--pipeline-name",
              description:
                "Name of the pipeline. Ignored if --pipeline-id parameter is supplied",
              args: { name: "pipeline-name" },
            },
            {
              name: ["--project", "-p"],
              description:
                "Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config",
              args: { name: "project" },
            },
          ],
        },
        {
          name: "update",
          description: "Update a variable in a pipeline",
          options: [
            {
              name: "--name",
              description: "Name of the variable",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--allow-override",
              description:
                "Indicates whether the value can be set at queue time",
              args: { name: "allow-override", suggestions: ["false", "true"] },
            },
            {
              name: "--detect",
              description: "Automatically detect organization",
              args: { name: "detect", suggestions: ["false", "true"] },
            },
            {
              name: "--new-name",
              description: "New name of the variable",
              args: { name: "new-name" },
            },
            {
              name: ["--organization", "--org"],
              description:
                "Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: https://dev.azure.com/MyOrganizationName/",
              args: { name: "organization" },
            },
            {
              name: "--pipeline-id",
              description: "Id of the pipeline",
              args: { name: "pipeline-id" },
            },
            {
              name: "--pipeline-name",
              description:
                "Name of the pipeline. Ignored if --pipeline-id parameter is supplied",
              args: { name: "pipeline-name" },
            },
            {
              name: ["--project", "-p"],
              description:
                "Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config",
              args: { name: "project" },
            },
            {
              name: "--prompt-value",
              description:
                "Set it to True to update the value of a secret variable using environment variable or prompt via standard input",
              args: { name: "prompt-value", suggestions: ["false", "true"] },
            },
            {
              name: "--secret",
              description: "If the value of the variable is a secret",
              args: { name: "secret", suggestions: ["false", "true"] },
            },
            {
              name: "--value",
              description:
                "New value of the variable. For secret variables, use --prompt-value parameter, to be prompted to enter it via standard input. For non-interactive consoles it can be picked from environment variable prefixed with AZURE_DEVOPS_EXT_PIPELINE_VAR_ e.g. A variable nameed MySecret can be input using environment variable AZURE_DEVOPS_EXT_PIPELINE_VAR_MySecret",
              args: { name: "value" },
            },
          ],
        },
      ],
    },
    {
      name: "variable-group",
      description: "Manage variable groups",
      subcommands: [
        {
          name: "create",
          description: "Create a variable group",
          options: [
            {
              name: "--name",
              description: "Name of the variable group",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--variables",
              description:
                "Variables in format key=value space separated pairs. Secret variables should be managed using az pipelines variable-group variable commands",
              args: { name: "variables" },
              isRequired: true,
            },
            {
              name: "--authorize",
              description:
                "Whether the variable group should be accessible by all pipelines",
              args: { name: "authorize", suggestions: ["false", "true"] },
            },
            {
              name: "--description",
              description: "Description of the variable group",
              args: { name: "description" },
            },
            {
              name: "--detect",
              description: "Automatically detect organization",
              args: { name: "detect", suggestions: ["false", "true"] },
            },
            {
              name: ["--organization", "--org"],
              description:
                "Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: https://dev.azure.com/MyOrganizationName/",
              args: { name: "organization" },
            },
            {
              name: ["--project", "-p"],
              description:
                "Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config",
              args: { name: "project" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a variable group",
          options: [
            {
              name: ["--group-id", "--id"],
              description: "Id of the variable group",
              args: { name: "group-id" },
              isRequired: true,
            },
            {
              name: "--detect",
              description: "Automatically detect organization",
              args: { name: "detect", suggestions: ["false", "true"] },
            },
            {
              name: ["--organization", "--org"],
              description:
                "Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: https://dev.azure.com/MyOrganizationName/",
              args: { name: "organization" },
            },
            {
              name: ["--project", "-p"],
              description:
                "Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config",
              args: { name: "project" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "List variable groups",
          options: [
            {
              name: ["--action-filter", "--action"],
              description:
                "Action filter for the variable group. It specifies the action which can be performed on the variable groups",
              args: {
                name: "action-filter",
                suggestions: ["manage", "none", "use"],
              },
            },
            {
              name: "--continuation-token",
              description:
                "Gets the variable groups after the continuation token provided",
              args: { name: "continuation-token" },
            },
            {
              name: "--detect",
              description: "Automatically detect organization",
              args: { name: "detect", suggestions: ["false", "true"] },
            },
            {
              name: "--group-name",
              description:
                "Name of the variable group. Wildcards are accepted. e.g. var_group*",
              args: { name: "group-name" },
            },
            {
              name: ["--organization", "--org"],
              description:
                "Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: https://dev.azure.com/MyOrganizationName/",
              args: { name: "organization" },
            },
            {
              name: ["--project", "-p"],
              description:
                "Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config",
              args: { name: "project" },
            },
            {
              name: "--query-order",
              description: "Gets the results in the defined order",
              args: { name: "query-order", suggestions: ["Asc", "Desc"] },
            },
            {
              name: "--top",
              description: "Number of variable groups to get",
              args: { name: "top" },
            },
          ],
        },
        {
          name: "show",
          description: "Show variable group details",
          options: [
            {
              name: ["--group-id", "--id"],
              description: "ID of the variable group",
              args: { name: "group-id" },
              isRequired: true,
            },
            {
              name: "--detect",
              description: "Automatically detect organization",
              args: { name: "detect", suggestions: ["false", "true"] },
            },
            {
              name: ["--organization", "--org"],
              description:
                "Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: https://dev.azure.com/MyOrganizationName/",
              args: { name: "organization" },
            },
            {
              name: ["--project", "-p"],
              description:
                "Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config",
              args: { name: "project" },
            },
          ],
        },
        {
          name: "update",
          description: "Update a variable group",
          options: [
            {
              name: ["--group-id", "--id"],
              description: "Id of the variable group",
              args: { name: "group-id" },
              isRequired: true,
            },
            {
              name: "--authorize",
              description:
                "Whether the variable group should be accessible by all pipelines",
              args: { name: "authorize", suggestions: ["false", "true"] },
            },
            {
              name: "--description",
              description: "New description of the variable group",
              args: { name: "description" },
            },
            {
              name: "--detect",
              description: "Automatically detect organization",
              args: { name: "detect", suggestions: ["false", "true"] },
            },
            {
              name: "--name",
              description: "New name of the variable group",
              args: { name: "name" },
            },
            {
              name: ["--organization", "--org"],
              description:
                "Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: https://dev.azure.com/MyOrganizationName/",
              args: { name: "organization" },
            },
            {
              name: ["--project", "-p"],
              description:
                "Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config",
              args: { name: "project" },
            },
          ],
        },
        {
          name: "variable",
          description: "Manage variables in a variable group",
          subcommands: [
            {
              name: "create",
              description: "Add a variable to a variable group",
              options: [
                {
                  name: ["--group-id", "--id"],
                  description: "Id of the variable group",
                  args: { name: "group-id" },
                  isRequired: true,
                },
                {
                  name: "--name",
                  description: "Name of the variable",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--detect",
                  description: "Automatically detect organization",
                  args: { name: "detect", suggestions: ["false", "true"] },
                },
                {
                  name: ["--organization", "--org"],
                  description:
                    "Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: https://dev.azure.com/MyOrganizationName/",
                  args: { name: "organization" },
                },
                {
                  name: ["--project", "-p"],
                  description:
                    "Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config",
                  args: { name: "project" },
                },
                {
                  name: "--secret",
                  description: "If the value of the variable is a secret",
                  args: { name: "secret", suggestions: ["false", "true"] },
                },
                {
                  name: "--value",
                  description:
                    "Value of the variable. For secret variables, if --value parameter is not given, it will be picked from environment variable prefixed with AZURE_DEVOPS_EXT_PIPELINE_VAR_ or user will be prompted to enter it via standard input. e.g. PersonalAccessToken can be input using environment variable AZURE_DEVOPS_EXT_PIPELINE_VAR_PersonalAccessToken",
                  args: { name: "value" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a variable from variable group",
              options: [
                {
                  name: ["--group-id", "--id"],
                  description: "Id of the variable group",
                  args: { name: "group-id" },
                  isRequired: true,
                },
                {
                  name: "--name",
                  description: "Name of the variable",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--detect",
                  description: "Automatically detect organization",
                  args: { name: "detect", suggestions: ["false", "true"] },
                },
                {
                  name: ["--organization", "--org"],
                  description:
                    "Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: https://dev.azure.com/MyOrganizationName/",
                  args: { name: "organization" },
                },
                {
                  name: ["--project", "-p"],
                  description:
                    "Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config",
                  args: { name: "project" },
                },
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "list",
              description: "List the variables in a variable group",
              options: [
                {
                  name: ["--group-id", "--id"],
                  description: "Id of the variable group",
                  args: { name: "group-id" },
                  isRequired: true,
                },
                {
                  name: "--detect",
                  description: "Automatically detect organization",
                  args: { name: "detect", suggestions: ["false", "true"] },
                },
                {
                  name: ["--organization", "--org"],
                  description:
                    "Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: https://dev.azure.com/MyOrganizationName/",
                  args: { name: "organization" },
                },
                {
                  name: ["--project", "-p"],
                  description:
                    "Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config",
                  args: { name: "project" },
                },
              ],
            },
            {
              name: "update",
              description: "Update a variable in a variable group",
              options: [
                {
                  name: ["--group-id", "--id"],
                  description: "Id of the variable group",
                  args: { name: "group-id" },
                  isRequired: true,
                },
                {
                  name: "--name",
                  description: "Name of the variable",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--detect",
                  description: "Automatically detect organization",
                  args: { name: "detect", suggestions: ["false", "true"] },
                },
                {
                  name: "--new-name",
                  description: "New name of the variable",
                  args: { name: "new-name" },
                },
                {
                  name: ["--organization", "--org"],
                  description:
                    "Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: https://dev.azure.com/MyOrganizationName/",
                  args: { name: "organization" },
                },
                {
                  name: ["--project", "-p"],
                  description:
                    "Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config",
                  args: { name: "project" },
                },
                {
                  name: "--prompt-value",
                  description:
                    "Set it to True to update the value of a secret variable using environment variable or prompt via standard input",
                },
                {
                  name: "--secret",
                  description: "If the value of the variable is a secret",
                  args: { name: "secret", suggestions: ["false", "true"] },
                },
                {
                  name: "--value",
                  description:
                    "New value of the variable. For secret variables, if --value parameter is not given, it will be picked from environment variable prefixed with AZURE_DEVOPS_EXT_PIPELINE_VAR_ or user will be prompted to enter it via standard input. e.g. PersonalAccessToken can be input using environment variable AZURE_DEVOPS_EXT_PIPELINE_VAR_PersonalAccessToken",
                  args: { name: "value" },
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
