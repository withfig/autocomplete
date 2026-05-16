const completion: Fig.Spec = {
  name: "repos",
  description:
    "Manage Azure Repos.\n\n\t\tThis command group is a part of the azure-devops extension",
  subcommands: [
    {
      name: "create",
      description: "Create a Git repository in a team project",
      options: [
        {
          name: "--name",
          description: "Name for the new repository",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: "--detect",
          description: "Automatically detect organization",
          args: { name: "detect", suggestions: ["false", "true"] },
        },
        {
          name: "--open",
          description: "Open the repository page in your web browser",
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
      description: "Delete a Git repository in a team project",
      options: [
        {
          name: "--id",
          description: "ID of the repository",
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
      description: "List Git repositories of a team project",
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
          name: ["--project", "-p"],
          description:
            "Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config",
          args: { name: "project" },
        },
      ],
    },
    {
      name: "show",
      description: "Get the details of a Git repository",
      options: [
        {
          name: ["--repository", "-r"],
          description: "Name or ID of the repository",
          args: { name: "repository" },
          isRequired: true,
        },
        {
          name: "--detect",
          description: "Automatically detect organization",
          args: { name: "detect", suggestions: ["false", "true"] },
        },
        {
          name: "--open",
          description: "Open the repository page in your web browser",
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
      description: "Update the Git repository",
      options: [
        {
          name: ["--repository", "-r"],
          description: "Name or ID of the repository",
          args: { name: "repository" },
          isRequired: true,
        },
        {
          name: "--default-branch",
          description:
            "Default branch to be set for the repository. Example: 'refs/heads/live' or 'live'",
          args: { name: "default-branch" },
        },
        {
          name: "--detect",
          description: "Automatically detect organization",
          args: { name: "detect", suggestions: ["false", "true"] },
        },
        {
          name: "--name",
          description: "New name for the repository",
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
      name: "import",
      description:
        'Manage Git repositories import.\n\n\t\tThis command imports the public repo fabrikam-open-source to the empty Git repo fabrikam-open-source for the default configuration az devops configure --defaults organization=https://dev.azure.com/fabrikamprime project="Fabrikam Fiber"',
      subcommands: [
        {
          name: "create",
          description: "Create a git import request",
          options: [
            {
              name: ["--git-source-url", "--git-url"],
              description: "Url of the source git repository",
              args: { name: "git-source-url" },
              isRequired: true,
            },
            {
              name: "--detect",
              description: "Automatically detect organization",
              args: { name: "detect", suggestions: ["false", "true"] },
            },
            {
              name: "--git-service-endpoint-id",
              description:
                "Service Endpoint for connection to external endpoint",
              args: { name: "git-service-endpoint-id" },
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
              name: ["--repository", "-r"],
              description:
                "Name or ID of the repository to create the import request in",
              args: { name: "repository" },
            },
            {
              name: "--requires-authorization",
              description: "Flag to tell if source git repository is private",
            },
            {
              name: "--user-name",
              description: "User name in case source git repository is private",
              args: { name: "user-name" },
            },
          ],
        },
      ],
    },
    {
      name: "policy",
      description: "Manage branch policy",
      subcommands: [
        {
          name: "create",
          description: "Create a policy using a configuration file",
          options: [
            {
              name: ["--policy-configuration", "--config"],
              description:
                "Local file path for configuration file. Please use \\backslash when typing in directory path",
              args: { name: "policy-configuration" },
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
          description: "Delete a policy",
          options: [
            {
              name: ["--policy-id", "--id"],
              description: "ID of the policy",
              args: { name: "policy-id" },
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
          description: "List all policies in a project",
          options: [
            {
              name: "--branch",
              description:
                "Branch name to filter results by exact match of branch name. The --repository-id parameter is required to use the branch filter. For example: --branch master",
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
              name: ["--project", "-p"],
              description:
                "Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config",
              args: { name: "project" },
            },
            {
              name: "--repository-id",
              description:
                "ID of the repository to filter results by exact match of the repository ID. For example --repository-ID e556f204-53c9-4153-9cd9-ef41a11e3345",
              args: { name: "repository-id" },
            },
          ],
        },
        {
          name: "show",
          description: "Show policy details",
          options: [
            {
              name: ["--policy-id", "--id"],
              description: "ID of the policy",
              args: { name: "policy-id" },
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
          description: "Update a policy using a configuration file",
          options: [
            {
              name: ["--policy-configuration", "--config"],
              description:
                "Local file path for configuration file. Please use \\backslash when typing in directory path",
              args: { name: "policy-configuration" },
              isRequired: true,
            },
            {
              name: ["--policy-id", "--id"],
              description: "ID of the policy",
              args: { name: "policy-id" },
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
          name: "approver-count",
          description: "Manage approver count policy",
          subcommands: [
            {
              name: "create",
              description: "Create approver count policy",
              options: [
                {
                  name: "--allow-downvotes",
                  description: "Whether to allow downvotes or not",
                  args: {
                    name: "allow-downvotes",
                    suggestions: ["false", "true"],
                  },
                  isRequired: true,
                },
                {
                  name: "--blocking",
                  description: "Whether the policy should be blocking or not",
                  args: { name: "blocking", suggestions: ["false", "true"] },
                  isRequired: true,
                },
                {
                  name: "--branch",
                  description:
                    "Branch on which this policy should be applied. For example: master",
                  args: { name: "branch" },
                  isRequired: true,
                },
                {
                  name: "--creator-vote-counts",
                  description: "Whether the creator's vote counts or not",
                  args: {
                    name: "creator-vote-counts",
                    suggestions: ["false", "true"],
                  },
                  isRequired: true,
                },
                {
                  name: "--enabled",
                  description: "Whether the policy is enabled or not",
                  args: { name: "enabled", suggestions: ["false", "true"] },
                  isRequired: true,
                },
                {
                  name: "--minimum-approver-count",
                  description:
                    "Minimum number of approvers required. For example: 2",
                  args: { name: "minimum-approver-count" },
                  isRequired: true,
                },
                {
                  name: "--repository-id",
                  description:
                    "Id of the repository on which to apply the policy",
                  args: { name: "repository-id" },
                  isRequired: true,
                },
                {
                  name: "--reset-on-source-push",
                  description: "Whether to reset source on push",
                  args: {
                    name: "reset-on-source-push",
                    suggestions: ["false", "true"],
                  },
                  isRequired: true,
                },
                {
                  name: "--branch-match-type",
                  description:
                    "Determines how the branch argument is used to apply a policy. If value is 'exact', the policy will be applied on a branch which has an exact match on the --branch argument. If value is 'prefix' the policy is applied across all branch folders that match the prefix provided by the --branch argument",
                  args: {
                    name: "branch-match-type",
                    suggestions: ["exact", "prefix"],
                  },
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
              description: "Update approver count policy",
              options: [
                {
                  name: ["--policy-id", "--id"],
                  description: "ID of the policy",
                  args: { name: "policy-id" },
                  isRequired: true,
                },
                {
                  name: "--allow-downvotes",
                  description: "Whether to allow downvotes or not",
                  args: {
                    name: "allow-downvotes",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--blocking",
                  description: "Whether the policy should be blocking or not",
                  args: { name: "blocking", suggestions: ["false", "true"] },
                },
                {
                  name: "--branch",
                  description:
                    "Branch on which this policy should be applied. For example: master",
                  args: { name: "branch" },
                },
                {
                  name: "--branch-match-type",
                  description:
                    "Determines how the branch argument is used to apply a policy. If value is 'exact', the policy will be applied on a branch which has an exact match on the --branch argument. If value is 'prefix' the policy is applied across all branch folders that match the prefix provided by the --branch argument",
                  args: {
                    name: "branch-match-type",
                    suggestions: ["exact", "prefix"],
                  },
                },
                {
                  name: "--creator-vote-counts",
                  description: "Whether the creator's vote counts or not",
                  args: {
                    name: "creator-vote-counts",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--detect",
                  description: "Automatically detect organization",
                  args: { name: "detect", suggestions: ["false", "true"] },
                },
                {
                  name: "--enabled",
                  description: "Whether the policy is enabled or not",
                  args: { name: "enabled", suggestions: ["false", "true"] },
                },
                {
                  name: "--minimum-approver-count",
                  description:
                    "Minimum number of approvers required. For example: 2",
                  args: { name: "minimum-approver-count" },
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
                  name: "--repository-id",
                  description:
                    "Id of the repository on which to apply the policy",
                  args: { name: "repository-id" },
                },
                {
                  name: "--reset-on-source-push",
                  description: "Whether to reset source on push",
                  args: {
                    name: "reset-on-source-push",
                    suggestions: ["false", "true"],
                  },
                },
              ],
            },
          ],
        },
        {
          name: "build",
          description: "Manage build policy",
          subcommands: [
            {
              name: "create",
              description: "Create build policy",
              options: [
                {
                  name: "--blocking",
                  description: "Whether the policy should be blocking or not",
                  args: { name: "blocking", suggestions: ["false", "true"] },
                  isRequired: true,
                },
                {
                  name: "--branch",
                  description:
                    "Branch on which this policy should be applied. For example: master",
                  args: { name: "branch" },
                  isRequired: true,
                },
                {
                  name: "--build-definition-id",
                  description: "Build Definition Id",
                  args: { name: "build-definition-id" },
                  isRequired: true,
                },
                {
                  name: "--display-name",
                  description:
                    "Display name for this build policy to identify the policy. For example: 'Manual queue policy'",
                  args: { name: "display-name" },
                  isRequired: true,
                },
                {
                  name: "--enabled",
                  description: "Whether the policy is enabled or not",
                  args: { name: "enabled", suggestions: ["false", "true"] },
                  isRequired: true,
                },
                {
                  name: "--manual-queue-only",
                  description: "Whether to allow only manual queue of builds",
                  args: {
                    name: "manual-queue-only",
                    suggestions: ["false", "true"],
                  },
                  isRequired: true,
                },
                {
                  name: "--queue-on-source-update-only",
                  description: "Queue Only on source update",
                  args: {
                    name: "queue-on-source-update-only",
                    suggestions: ["false", "true"],
                  },
                  isRequired: true,
                },
                {
                  name: "--repository-id",
                  description:
                    "Id of the repository on which to apply the policy",
                  args: { name: "repository-id" },
                  isRequired: true,
                },
                {
                  name: "--valid-duration",
                  description: "Policy validity duration (in minutes)",
                  args: { name: "valid-duration" },
                  isRequired: true,
                },
                {
                  name: "--branch-match-type",
                  description:
                    "Determines how the branch argument is used to apply a policy. If value is 'exact', the policy will be applied on a branch which has an exact match on the --branch argument. If value is 'prefix' the policy is applied across all branch folders that match the prefix provided by the --branch argument",
                  args: {
                    name: "branch-match-type",
                    suggestions: ["exact", "prefix"],
                  },
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
                  name: "--path-filter",
                  description:
                    "Filter path(s) on which the policy is applied. Supports absolute paths, wildcards and multiple paths separated by ';'. Example: /WebApp/Models/Data.cs, /WebApp/* or *.cs,/WebApp/Models/Data.cs;ClientApp/Models/Data.cs",
                  args: { name: "path-filter" },
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
              description: "Update build policy",
              options: [
                {
                  name: ["--policy-id", "--id"],
                  description: "ID of the policy",
                  args: { name: "policy-id" },
                  isRequired: true,
                },
                {
                  name: "--blocking",
                  description: "Whether the policy should be blocking or not",
                  args: { name: "blocking", suggestions: ["false", "true"] },
                },
                {
                  name: "--branch",
                  description:
                    "Branch on which this policy should be applied. For example: master",
                  args: { name: "branch" },
                },
                {
                  name: "--branch-match-type",
                  description:
                    "Determines how the branch argument is used to apply a policy. If value is 'exact', the policy will be applied on a branch which has an exact match on the --branch argument. If value is 'prefix' the policy is applied across all branch folders that match the prefix provided by the --branch argument",
                  args: {
                    name: "branch-match-type",
                    suggestions: ["exact", "prefix"],
                  },
                },
                {
                  name: "--build-definition-id",
                  description: "Build Definition Id",
                  args: { name: "build-definition-id" },
                },
                {
                  name: "--detect",
                  description: "Automatically detect organization",
                  args: { name: "detect", suggestions: ["false", "true"] },
                },
                {
                  name: "--display-name",
                  description:
                    "Display name for this build policy to identify the policy. For example: 'Manual queue policy'",
                  args: { name: "display-name" },
                },
                {
                  name: "--enabled",
                  description: "Whether the policy is enabled or not",
                  args: { name: "enabled", suggestions: ["false", "true"] },
                },
                {
                  name: "--manual-queue-only",
                  description: "Whether to allow only manual queue of builds",
                  args: {
                    name: "manual-queue-only",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--organization", "--org"],
                  description:
                    "Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: https://dev.azure.com/MyOrganizationName/",
                  args: { name: "organization" },
                },
                {
                  name: "--path-filter",
                  description:
                    "Filter path(s) on which the policy is applied. Supports absolute paths, wildcards and multiple paths separated by ';'. Example: /WebApp/Models/Data.cs, /WebApp/* or *.cs,/WebApp/Models/Data.cs;ClientApp/Models/Data.cs",
                  args: { name: "path-filter" },
                },
                {
                  name: ["--project", "-p"],
                  description:
                    "Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config",
                  args: { name: "project" },
                },
                {
                  name: "--queue-on-source-update-only",
                  description: "Queue Only on source update",
                  args: {
                    name: "queue-on-source-update-only",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--repository-id",
                  description:
                    "Id of the repository on which to apply the policy",
                  args: { name: "repository-id" },
                },
                {
                  name: "--valid-duration",
                  description: "Policy validity duration (in minutes)",
                  args: { name: "valid-duration" },
                },
              ],
            },
          ],
        },
        {
          name: "case-enforcement",
          description: "Manage case enforcement policy",
          subcommands: [
            {
              name: "create",
              description: "Create case enforcement policy",
              options: [
                {
                  name: "--blocking",
                  description: "Whether the policy should be blocking or not",
                  args: { name: "blocking", suggestions: ["false", "true"] },
                  isRequired: true,
                },
                {
                  name: "--enabled",
                  description: "Whether the policy is enabled or not",
                  args: { name: "enabled", suggestions: ["false", "true"] },
                  isRequired: true,
                },
                {
                  name: "--repository-id",
                  description:
                    "Id of the repository on which to apply the policy",
                  args: { name: "repository-id" },
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
              description: "Update case enforcement policy",
              options: [
                {
                  name: ["--policy-id", "--id"],
                  description: "ID of the policy",
                  args: { name: "policy-id" },
                  isRequired: true,
                },
                {
                  name: "--blocking",
                  description: "Whether the policy should be blocking or not",
                  args: { name: "blocking", suggestions: ["false", "true"] },
                },
                {
                  name: "--detect",
                  description: "Automatically detect organization",
                  args: { name: "detect", suggestions: ["false", "true"] },
                },
                {
                  name: "--enabled",
                  description: "Whether the policy is enabled or not",
                  args: { name: "enabled", suggestions: ["false", "true"] },
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
                  name: "--repository-id",
                  description:
                    "Id of the repository on which to apply the policy",
                  args: { name: "repository-id" },
                },
              ],
            },
          ],
        },
        {
          name: "comment-required",
          description: "Manage comment required policy",
          subcommands: [
            {
              name: "create",
              description: "Create comment resolution required policy",
              options: [
                {
                  name: "--blocking",
                  description: "Whether the policy should be blocking or not",
                  args: { name: "blocking", suggestions: ["false", "true"] },
                  isRequired: true,
                },
                {
                  name: "--branch",
                  description:
                    "Branch on which this policy should be applied. For example: master",
                  args: { name: "branch" },
                  isRequired: true,
                },
                {
                  name: "--enabled",
                  description: "Whether the policy is enabled or not",
                  args: { name: "enabled", suggestions: ["false", "true"] },
                  isRequired: true,
                },
                {
                  name: "--repository-id",
                  description:
                    "Id of the repository on which to apply the policy",
                  args: { name: "repository-id" },
                  isRequired: true,
                },
                {
                  name: "--branch-match-type",
                  description:
                    "Determines how the branch argument is used to apply a policy. If value is 'exact', the policy will be applied on a branch which has an exact match on the --branch argument. If value is 'prefix' the policy is applied across all branch folders that match the prefix provided by the --branch argument",
                  args: {
                    name: "branch-match-type",
                    suggestions: ["exact", "prefix"],
                  },
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
              description: "Update comment resolution required policy",
              options: [
                {
                  name: ["--policy-id", "--id"],
                  description: "ID of the policy",
                  args: { name: "policy-id" },
                  isRequired: true,
                },
                {
                  name: "--blocking",
                  description: "Whether the policy should be blocking or not",
                  args: { name: "blocking", suggestions: ["false", "true"] },
                },
                {
                  name: "--branch",
                  description:
                    "Branch on which this policy should be applied. For example: master",
                  args: { name: "branch" },
                },
                {
                  name: "--branch-match-type",
                  description:
                    "Determines how the branch argument is used to apply a policy. If value is 'exact', the policy will be applied on a branch which has an exact match on the --branch argument. If value is 'prefix' the policy is applied across all branch folders that match the prefix provided by the --branch argument",
                  args: {
                    name: "branch-match-type",
                    suggestions: ["exact", "prefix"],
                  },
                },
                {
                  name: "--detect",
                  description: "Automatically detect organization",
                  args: { name: "detect", suggestions: ["false", "true"] },
                },
                {
                  name: "--enabled",
                  description: "Whether the policy is enabled or not",
                  args: { name: "enabled", suggestions: ["false", "true"] },
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
                  name: "--repository-id",
                  description:
                    "Id of the repository on which to apply the policy",
                  args: { name: "repository-id" },
                },
              ],
            },
          ],
        },
        {
          name: "file-size",
          description: "Manage file size policy",
          subcommands: [
            {
              name: "create",
              description: "Create file size policy",
              options: [
                {
                  name: "--blocking",
                  description: "Whether the policy should be blocking or not",
                  args: { name: "blocking", suggestions: ["false", "true"] },
                  isRequired: true,
                },
                {
                  name: "--enabled",
                  description: "Whether the policy is enabled or not",
                  args: { name: "enabled", suggestions: ["false", "true"] },
                  isRequired: true,
                },
                {
                  name: "--maximum-git-blob-size",
                  description:
                    "Maximum git blob size in bytes. For example, to specify a 10byte limit, --maximum-git-blob-size 10",
                  args: { name: "maximum-git-blob-size" },
                  isRequired: true,
                },
                {
                  name: "--repository-id",
                  description:
                    "Id of the repository on which to apply the policy",
                  args: { name: "repository-id" },
                  isRequired: true,
                },
                {
                  name: "--use-uncompressed-size",
                  description: "Whether to use uncompressed size",
                  args: {
                    name: "use-uncompressed-size",
                    suggestions: ["false", "true"],
                  },
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
              description: "Update file size policy",
              options: [
                {
                  name: ["--policy-id", "--id"],
                  description: "ID of the policy",
                  args: { name: "policy-id" },
                  isRequired: true,
                },
                {
                  name: "--blocking",
                  description: "Whether the policy should be blocking or not",
                  args: { name: "blocking", suggestions: ["false", "true"] },
                },
                {
                  name: "--detect",
                  description: "Automatically detect organization",
                  args: { name: "detect", suggestions: ["false", "true"] },
                },
                {
                  name: "--enabled",
                  description: "Whether the policy is enabled or not",
                  args: { name: "enabled", suggestions: ["false", "true"] },
                },
                {
                  name: "--maximum-git-blob-size",
                  description:
                    "Maximum git blob size in bytes. For example, to specify a 10byte limit, --maximum-git-blob-size 10",
                  args: { name: "maximum-git-blob-size" },
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
                  name: "--repository-id",
                  description:
                    "Id of the repository on which to apply the policy",
                  args: { name: "repository-id" },
                },
                {
                  name: "--use-uncompressed-size",
                  description: "Whether to use uncompressed size",
                  args: {
                    name: "use-uncompressed-size",
                    suggestions: ["false", "true"],
                  },
                },
              ],
            },
          ],
        },
        {
          name: "merge-strategy",
          description: "Manage merge strategy policy",
          subcommands: [
            {
              name: "create",
              description: "Create merge strategy policy",
              options: [
                {
                  name: "--blocking",
                  description: "Whether the policy should be blocking or not",
                  args: { name: "blocking", suggestions: ["false", "true"] },
                  isRequired: true,
                },
                {
                  name: "--branch",
                  description:
                    "Branch on which this policy should be applied. For example: master",
                  args: { name: "branch" },
                  isRequired: true,
                },
                {
                  name: "--enabled",
                  description: "Whether the policy is enabled or not",
                  args: { name: "enabled", suggestions: ["false", "true"] },
                  isRequired: true,
                },
                {
                  name: "--repository-id",
                  description:
                    "Id of the repository on which to apply the policy",
                  args: { name: "repository-id" },
                  isRequired: true,
                },
                {
                  name: "--allow-no-fast-forward",
                  description:
                    "Basic merge (no fast-forward) - Preserves nonlinear history exactly as it happened during development",
                  args: {
                    name: "allow-no-fast-forward",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--allow-rebase",
                  description:
                    "Rebase and fast-forward - Creates a linear history by replaying the source branch commits onto the target without a merge commit",
                  args: {
                    name: "allow-rebase",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--allow-rebase-merge",
                  description:
                    "Rebase with merge commit - Creates a semi-linear history by replaying the source branch commits onto the target and then creating a merge commit",
                  args: {
                    name: "allow-rebase-merge",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--allow-squash",
                  description:
                    "Squash merge - Creates a linear history by condensing the source branch commits into a single new commit on the target branch",
                  args: {
                    name: "allow-squash",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--branch-match-type",
                  description:
                    "Determines how the branch argument is used to apply a policy. If value is 'exact', the policy will be applied on a branch which has an exact match on the --branch argument. If value is 'prefix' the policy is applied across all branch folders that match the prefix provided by the --branch argument",
                  args: {
                    name: "branch-match-type",
                    suggestions: ["exact", "prefix"],
                  },
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
              description: "Update merge strategy policy",
              options: [
                {
                  name: ["--policy-id", "--id"],
                  description: "ID of the policy",
                  args: { name: "policy-id" },
                  isRequired: true,
                },
                {
                  name: "--allow-no-fast-forward",
                  description:
                    "Basic merge (no fast-forward) - Preserves nonlinear history exactly as it happened during development",
                  args: {
                    name: "allow-no-fast-forward",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--allow-rebase",
                  description:
                    "Rebase and fast-forward - Creates a linear history by replaying the source branch commits onto the target without a merge commit",
                  args: {
                    name: "allow-rebase",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--allow-rebase-merge",
                  description:
                    "Rebase with merge commit - Creates a semi-linear history by replaying the source branch commits onto the target and then creating a merge commit",
                  args: {
                    name: "allow-rebase-merge",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--allow-squash",
                  description:
                    "Squash merge - Creates a linear history by condensing the source branch commits into a single new commit on the target branch",
                  args: {
                    name: "allow-squash",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--blocking",
                  description: "Whether the policy should be blocking or not",
                  args: { name: "blocking", suggestions: ["false", "true"] },
                },
                {
                  name: "--branch",
                  description:
                    "Branch on which this policy should be applied. For example: master",
                  args: { name: "branch" },
                },
                {
                  name: "--branch-match-type",
                  description:
                    "Determines how the branch argument is used to apply a policy. If value is 'exact', the policy will be applied on a branch which has an exact match on the --branch argument. If value is 'prefix' the policy is applied across all branch folders that match the prefix provided by the --branch argument",
                  args: {
                    name: "branch-match-type",
                    suggestions: ["exact", "prefix"],
                  },
                },
                {
                  name: "--detect",
                  description: "Automatically detect organization",
                  args: { name: "detect", suggestions: ["false", "true"] },
                },
                {
                  name: "--enabled",
                  description: "Whether the policy is enabled or not",
                  args: { name: "enabled", suggestions: ["false", "true"] },
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
                  name: "--repository-id",
                  description:
                    "Id of the repository on which to apply the policy",
                  args: { name: "repository-id" },
                },
              ],
            },
          ],
        },
        {
          name: "required-reviewer",
          description: "Manage required reviewer policy",
          subcommands: [
            {
              name: "create",
              description: "Create required reviewer policy",
              options: [
                {
                  name: "--blocking",
                  description: "Whether the policy should be blocking or not",
                  args: { name: "blocking", suggestions: ["false", "true"] },
                  isRequired: true,
                },
                {
                  name: "--branch",
                  description:
                    "Branch on which this policy should be applied. For example: master",
                  args: { name: "branch" },
                  isRequired: true,
                },
                {
                  name: "--enabled",
                  description: "Whether the policy is enabled or not",
                  args: { name: "enabled", suggestions: ["false", "true"] },
                  isRequired: true,
                },
                {
                  name: "--message",
                  description: "Message",
                  args: { name: "message" },
                  isRequired: true,
                },
                {
                  name: "--repository-id",
                  description:
                    "Id of the repository on which to apply the policy",
                  args: { name: "repository-id" },
                  isRequired: true,
                },
                {
                  name: "--required-reviewer-ids",
                  description:
                    "Required reviewers email addresses separated by ';'. For example: john@contoso.com;alice@contoso.com",
                  args: { name: "required-reviewer-ids" },
                  isRequired: true,
                },
                {
                  name: "--branch-match-type",
                  description:
                    "Determines how the branch argument is used to apply a policy. If value is 'exact', the policy will be applied on a branch which has an exact match on the --branch argument. If value is 'prefix' the policy is applied across all branch folders that match the prefix provided by the --branch argument",
                  args: {
                    name: "branch-match-type",
                    suggestions: ["exact", "prefix"],
                  },
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
                  name: "--path-filter",
                  description:
                    "Filter path(s) on which the policy is applied. Supports absolute paths, wildcards and multiple paths separated by ';'. Example: /WebApp/Models/Data.cs, /WebApp/* or *.cs,/WebApp/Models/Data.cs;ClientApp/Models/Data.cs",
                  args: { name: "path-filter" },
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
              description: "Update required reviewer policy",
              options: [
                {
                  name: ["--policy-id", "--id"],
                  description: "ID of the policy",
                  args: { name: "policy-id" },
                  isRequired: true,
                },
                {
                  name: "--blocking",
                  description: "Whether the policy should be blocking or not",
                  args: { name: "blocking", suggestions: ["false", "true"] },
                },
                {
                  name: "--branch",
                  description:
                    "Branch on which this policy should be applied. For example: master",
                  args: { name: "branch" },
                },
                {
                  name: "--branch-match-type",
                  description:
                    "Determines how the branch argument is used to apply a policy. If value is 'exact', the policy will be applied on a branch which has an exact match on the --branch argument. If value is 'prefix' the policy is applied across all branch folders that match the prefix provided by the --branch argument",
                  args: {
                    name: "branch-match-type",
                    suggestions: ["exact", "prefix"],
                  },
                },
                {
                  name: "--detect",
                  description: "Automatically detect organization",
                  args: { name: "detect", suggestions: ["false", "true"] },
                },
                {
                  name: "--enabled",
                  description: "Whether the policy is enabled or not",
                  args: { name: "enabled", suggestions: ["false", "true"] },
                },
                {
                  name: "--message",
                  description: "Message",
                  args: { name: "message" },
                },
                {
                  name: ["--organization", "--org"],
                  description:
                    "Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: https://dev.azure.com/MyOrganizationName/",
                  args: { name: "organization" },
                },
                {
                  name: "--path-filter",
                  description:
                    "Filter path(s) on which the policy is applied. Supports absolute paths, wildcards and multiple paths separated by ';'. Example: /WebApp/Models/Data.cs, /WebApp/* or *.cs,/WebApp/Models/Data.cs;ClientApp/Models/Data.cs",
                  args: { name: "path-filter" },
                },
                {
                  name: ["--project", "-p"],
                  description:
                    "Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config",
                  args: { name: "project" },
                },
                {
                  name: "--repository-id",
                  description:
                    "Id of the repository on which to apply the policy",
                  args: { name: "repository-id" },
                },
                {
                  name: "--required-reviewer-ids",
                  description:
                    "Required reviewers email addresses separated by ';'. For example: john@contoso.com;alice@contoso.com",
                  args: { name: "required-reviewer-ids" },
                },
              ],
            },
          ],
        },
        {
          name: "work-item-linking",
          description: "Manage work item linking policy",
          subcommands: [
            {
              name: "create",
              description: "Create work item linking policy",
              options: [
                {
                  name: "--blocking",
                  description: "Whether the policy should be blocking or not",
                  args: { name: "blocking", suggestions: ["false", "true"] },
                  isRequired: true,
                },
                {
                  name: "--branch",
                  description:
                    "Branch on which this policy should be applied. For example: master",
                  args: { name: "branch" },
                  isRequired: true,
                },
                {
                  name: "--enabled",
                  description: "Whether the policy is enabled or not",
                  args: { name: "enabled", suggestions: ["false", "true"] },
                  isRequired: true,
                },
                {
                  name: "--repository-id",
                  description:
                    "Id of the repository on which to apply the policy",
                  args: { name: "repository-id" },
                  isRequired: true,
                },
                {
                  name: "--branch-match-type",
                  description:
                    "Determines how the branch argument is used to apply a policy. If value is 'exact', the policy will be applied on a branch which has an exact match on the --branch argument. If value is 'prefix' the policy is applied across all branch folders that match the prefix provided by the --branch argument",
                  args: {
                    name: "branch-match-type",
                    suggestions: ["exact", "prefix"],
                  },
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
              description: "Update work item linking policy",
              options: [
                {
                  name: ["--policy-id", "--id"],
                  description: "ID of the policy",
                  args: { name: "policy-id" },
                  isRequired: true,
                },
                {
                  name: "--blocking",
                  description: "Whether the policy should be blocking or not",
                  args: { name: "blocking", suggestions: ["false", "true"] },
                },
                {
                  name: "--branch",
                  description:
                    "Branch on which this policy should be applied. For example: master",
                  args: { name: "branch" },
                },
                {
                  name: "--branch-match-type",
                  description:
                    "Determines how the branch argument is used to apply a policy. If value is 'exact', the policy will be applied on a branch which has an exact match on the --branch argument. If value is 'prefix' the policy is applied across all branch folders that match the prefix provided by the --branch argument",
                  args: {
                    name: "branch-match-type",
                    suggestions: ["exact", "prefix"],
                  },
                },
                {
                  name: "--detect",
                  description: "Automatically detect organization",
                  args: { name: "detect", suggestions: ["false", "true"] },
                },
                {
                  name: "--enabled",
                  description: "Whether the policy is enabled or not",
                  args: { name: "enabled", suggestions: ["false", "true"] },
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
                  name: "--repository-id",
                  description:
                    "Id of the repository on which to apply the policy",
                  args: { name: "repository-id" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "pr",
      description: "Manage pull requests",
      subcommands: [
        {
          name: "checkout",
          description:
            "Checkout the PR source branch locally, if no local changes are present",
          options: [
            {
              name: "--id",
              description: "ID of the pull request",
              args: { name: "id" },
              isRequired: true,
            },
            {
              name: "--remote-name",
              description: "Name of git remote against which PR is raised",
              args: { name: "remote-name" },
            },
          ],
        },
        {
          name: "create",
          description: "Create a pull request",
          options: [
            {
              name: "--auto-complete",
              description:
                "Set the pull request to complete automatically when all policies have passed and the source branch can be merged into the target branch",
            },
            {
              name: "--bypass-policy",
              description:
                "Bypass required policies (if any) and completes the pull request once it can be merged",
            },
            {
              name: "--bypass-policy-reason",
              description: "Reason for bypassing the required policies",
              args: { name: "bypass-policy-reason" },
            },
            {
              name: "--delete-source-branch",
              description:
                "Delete the source branch after the pull request has been completed and merged into the target branch",
            },
            {
              name: ["--description", "-d"],
              description:
                'Description for the new pull request. Can include markdown. Each value sent to this arg will be a new line. For example: --description "First Line" "Second Line"',
              args: { name: "description" },
            },
            {
              name: "--detect",
              description: "Automatically detect organization",
              args: { name: "detect", suggestions: ["false", "true"] },
            },
            {
              name: "--draft",
              description:
                "Use this flag to create the pull request in draft/work in progress mode",
              args: { name: "draft", suggestions: ["false", "true"] },
            },
            {
              name: "--merge-commit-message",
              description: "Message displayed when commits are merged",
              args: { name: "merge-commit-message" },
            },
            {
              name: "--open",
              description: "Open the pull request in your web browser",
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
              name: ["--repository", "-r"],
              description:
                "Name or ID of the repository to create the pull request in",
              args: { name: "repository" },
            },
            {
              name: "--reviewers",
              description:
                "Additional users or groups to include as reviewers on the new pull request. Space separated",
              args: { name: "reviewers" },
            },
            {
              name: ["--source-branch", "-s"],
              description: 'Name of the source branch. Example: "dev"',
              args: { name: "source-branch" },
            },
            {
              name: "--squash",
              description:
                "Squash the commits in the source branch when merging into the target branch",
            },
            {
              name: ["--target-branch", "-t"],
              description:
                "Name of the target branch. If not specified, defaults to the default branch of the target repository",
              args: { name: "target-branch" },
            },
            {
              name: "--title",
              description: "Title for the new pull request",
              args: { name: "title" },
            },
            {
              name: "--transition-work-items",
              description:
                "Transition any work items linked to the pull request into the next logical state. (e.g. Active -> Resolved)",
            },
            {
              name: "--work-items",
              description:
                "IDs of the work items to link to the new pull request. Space separated",
              args: { name: "work-items" },
            },
          ],
        },
        {
          name: "list",
          description: "List pull requests",
          options: [
            {
              name: "--creator",
              description:
                "Limit results to pull requests created by this user",
              args: { name: "creator" },
            },
            {
              name: "--detect",
              description: "Automatically detect organization",
              args: { name: "detect", suggestions: ["false", "true"] },
            },
            {
              name: "--include-links",
              description: "Include _links for each pull request",
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
              name: ["--repository", "-r"],
              description: "Name or ID of the repository",
              args: { name: "repository" },
            },
            {
              name: "--reviewer",
              description:
                "Limit results to pull requests where this user is a reviewer",
              args: { name: "reviewer" },
            },
            {
              name: "--skip",
              description: "Number of pull requests to skip",
              args: { name: "skip" },
            },
            {
              name: ["--source-branch", "-s"],
              description:
                "Limit results to pull requests that originate from this source branch",
              args: { name: "source-branch" },
            },
            {
              name: "--status",
              description: "Limit results to pull requests with this status",
              args: {
                name: "status",
                suggestions: ["abandoned", "active", "all", "completed"],
              },
            },
            {
              name: ["--target-branch", "-t"],
              description:
                "Limit results to pull requests that target this branch",
              args: { name: "target-branch" },
            },
            {
              name: "--top",
              description: "Maximum number of pull requests to list",
              args: { name: "top" },
            },
          ],
        },
        {
          name: "set-vote",
          description: "Vote on a pull request",
          options: [
            {
              name: "--id",
              description: "ID of the pull request",
              args: { name: "id" },
              isRequired: true,
            },
            {
              name: "--vote",
              description: "New vote value for the pull request",
              args: {
                name: "vote",
                suggestions: [
                  "approve",
                  "approve-with-suggestions",
                  "reject",
                  "reset",
                  "wait-for-author",
                ],
              },
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
          ],
        },
        {
          name: "show",
          description: "Get the details of a pull request",
          options: [
            {
              name: "--id",
              description: "ID of the pull request",
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
              description: "Open the pull request in your web browser",
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
          name: "update",
          description: "Update a pull request",
          options: [
            {
              name: "--id",
              description: "ID of the pull request",
              args: { name: "id" },
              isRequired: true,
            },
            {
              name: "--auto-complete",
              description:
                "Set the pull request to complete automatically when all policies have passed and the source branch can be merged into the target branch",
              args: { name: "auto-complete", suggestions: ["false", "true"] },
            },
            {
              name: "--bypass-policy",
              description:
                "Bypass required policies (if any) and completes the pull request once it can be merged",
              args: { name: "bypass-policy", suggestions: ["false", "true"] },
            },
            {
              name: "--bypass-policy-reason",
              description: "Reason for bypassing the required policies",
              args: { name: "bypass-policy-reason" },
            },
            {
              name: "--delete-source-branch",
              description:
                "Delete the source branch after the pull request has been completed and merged into the target branch",
              args: {
                name: "delete-source-branch",
                suggestions: ["false", "true"],
              },
            },
            {
              name: ["--description", "-d"],
              description:
                'New description for the pull request. Can include markdown. Each value sent to this arg will be a new line. For example: --description "First Line" "Second Line"',
              args: { name: "description" },
            },
            {
              name: "--detect",
              description: "Automatically detect organization",
              args: { name: "detect", suggestions: ["false", "true"] },
            },
            {
              name: "--draft",
              description: "Publish the PR or convert to draft mode",
              args: { name: "draft", suggestions: ["false", "true"] },
            },
            {
              name: "--merge-commit-message",
              description: "Message displayed when commits are merged",
              args: { name: "merge-commit-message" },
            },
            {
              name: ["--organization", "--org"],
              description:
                "Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: https://dev.azure.com/MyOrganizationName/",
              args: { name: "organization" },
            },
            {
              name: "--squash",
              description:
                "Squash the commits in the source branch when merging into the target branch",
              args: { name: "squash", suggestions: ["false", "true"] },
            },
            {
              name: "--status",
              description: "Set the new state of pull request",
              args: {
                name: "status",
                suggestions: ["abandoned", "active", "completed"],
              },
            },
            {
              name: "--title",
              description: "New title for the pull request",
              args: { name: "title" },
            },
            {
              name: "--transition-work-items",
              description:
                "Transition any work items linked to the pull request into the next logical state. (e.g. Active -> Resolved)",
              args: {
                name: "transition-work-items",
                suggestions: ["false", "true"],
              },
            },
          ],
        },
        {
          name: "policy",
          description: "Manage pull request policy",
          subcommands: [
            {
              name: "list",
              description: "List policies of a pull request",
              options: [
                {
                  name: "--id",
                  description: "ID of the pull request",
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
                  name: "--skip",
                  description: "Number of policies to skip",
                  args: { name: "skip" },
                },
                {
                  name: "--top",
                  description: "Maximum number of policies to list",
                  args: { name: "top" },
                },
              ],
            },
            {
              name: "queue",
              description: "Queue an evaluation of a policy for a pull request",
              options: [
                {
                  name: ["--evaluation-id", "-e"],
                  description: "ID of the policy evaluation to queue",
                  args: { name: "evaluation-id" },
                  isRequired: true,
                },
                {
                  name: "--id",
                  description: "ID of the pull request",
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
              ],
            },
          ],
        },
        {
          name: "reviewer",
          description: "Manage pull request reviewers",
          subcommands: [
            {
              name: "add",
              description: "Add one or more reviewers to a pull request",
              options: [
                {
                  name: "--id",
                  description: "ID of the pull request",
                  args: { name: "id" },
                  isRequired: true,
                },
                {
                  name: "--reviewers",
                  description:
                    "Users or groups to include as reviewers on a pull request. Space separated",
                  args: { name: "reviewers" },
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
              ],
            },
            {
              name: "list",
              description: "List reviewers of a pull request",
              options: [
                {
                  name: "--id",
                  description: "ID of the pull request",
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
              ],
            },
            {
              name: "remove",
              description: "Remove one or more reviewers from a pull request",
              options: [
                {
                  name: "--id",
                  description: "ID of the pull request",
                  args: { name: "id" },
                  isRequired: true,
                },
                {
                  name: "--reviewers",
                  description:
                    "Users or groups to remove as reviewers on a pull request. Space separated",
                  args: { name: "reviewers" },
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
              ],
            },
          ],
        },
        {
          name: "work-item",
          description: "Manage work items associated with pull requests",
          subcommands: [
            {
              name: "add",
              description: "Link one or more work items to a pull request",
              options: [
                {
                  name: "--id",
                  description: "ID of the pull request",
                  args: { name: "id" },
                  isRequired: true,
                },
                {
                  name: "--work-items",
                  description: "IDs of the work items to link. Space separated",
                  args: { name: "work-items" },
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
              ],
            },
            {
              name: "list",
              description: "List linked work items for a pull request",
              options: [
                {
                  name: "--id",
                  description: "ID of the pull request",
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
              ],
            },
            {
              name: "remove",
              description: "Unlink one or more work items from a pull request",
              options: [
                {
                  name: "--id",
                  description: "ID of the pull request",
                  args: { name: "id" },
                  isRequired: true,
                },
                {
                  name: "--work-items",
                  description:
                    "IDs of the work items to unlink. Space separated",
                  args: { name: "work-items" },
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
              ],
            },
          ],
        },
      ],
    },
    {
      name: "ref",
      description: "Manage Git references",
      subcommands: [
        {
          name: "create",
          description: "Create a reference",
          options: [
            {
              name: "--name",
              description:
                "Name of the reference to create (example: heads/my_branch or tags/my_tag)",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--object-id",
              description: "Id of the object to create the reference from",
              args: { name: "object-id" },
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
              name: ["--repository", "-r"],
              description: "Name or ID of the repository",
              args: { name: "repository" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a reference",
          options: [
            {
              name: "--name",
              description:
                "Name of the reference to delete (example: heads/my_branch)",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--detect",
              description: "Automatically detect organization",
              args: { name: "detect", suggestions: ["false", "true"] },
            },
            {
              name: "--object-id",
              description: "Id of the reference to delete",
              args: { name: "object-id" },
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
              name: ["--repository", "-r"],
              description: "Name or ID of the repository",
              args: { name: "repository" },
            },
          ],
        },
        {
          name: "list",
          description: "List the references",
          options: [
            {
              name: "--detect",
              description: "Automatically detect organization",
              args: { name: "detect", suggestions: ["false", "true"] },
            },
            {
              name: "--filter",
              description:
                "A filter to apply to the refs (starts with). Example: head or heads/ for the branches",
              args: { name: "filter" },
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
              name: ["--repository", "-r"],
              description: "Name or ID of the repository",
              args: { name: "repository" },
            },
          ],
        },
        {
          name: "lock",
          description: "Lock a reference",
          options: [
            {
              name: "--name",
              description:
                "Name of the reference to update (example: heads/my_branch)",
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
              name: ["--repository", "-r"],
              description: "Name or ID of the repository",
              args: { name: "repository" },
            },
          ],
        },
        {
          name: "unlock",
          description: "Unlock a reference",
          options: [
            {
              name: "--name",
              description:
                "Name of the reference to update (example: heads/my_branch)",
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
              name: ["--repository", "-r"],
              description: "Name or ID of the repository",
              args: { name: "repository" },
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
