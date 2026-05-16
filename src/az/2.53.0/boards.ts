const completion: Fig.Spec = {
  name: "boards",
  description:
    "Manage Azure Boards.\n\n\t\tThis command group is a part of the azure-devops extension",
  subcommands: [
    {
      name: "area",
      description: "Manage area paths",
      subcommands: [
        {
          name: "project",
          description: "Manage areas for a project",
          subcommands: [
            {
              name: "create",
              description: "Create area",
              options: [
                {
                  name: "--name",
                  description: "Name of the area",
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
                  name: "--path",
                  description:
                    "Absolute path of an area. Creates an area at root level if --path is not specified. Example:\\ProjectName\\Area\\AreaName",
                  args: { name: "path" },
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
              description: "Delete area",
              options: [
                {
                  name: "--path",
                  description:
                    "Absolute path of an area. Example:\\ProjectName\\Area\\AreaName",
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
              description: "List areas for a project",
              options: [
                {
                  name: "--depth",
                  description:
                    "Depth of child nodes to be fetched. Example: --depth 3",
                  args: { name: "depth" },
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
                  name: "--path",
                  description:
                    "Absolute path of an area. Example:\\ProjectName\\Area\\AreaName",
                  args: { name: "path" },
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
              description: "Show area details for a project",
              options: [
                {
                  name: "--id",
                  description: "Area ID",
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
              ],
            },
            {
              name: "update",
              description: "Update area",
              options: [
                {
                  name: "--path",
                  description:
                    "Absolute path of an area. Example:\\ProjectName\\Area\\AreaName",
                  args: { name: "path" },
                  isRequired: true,
                },
                {
                  name: "--child-id",
                  description:
                    "Move an existing area and add as child node for this area",
                  args: { name: "child-id" },
                },
                {
                  name: "--detect",
                  description: "Automatically detect organization",
                  args: { name: "detect", suggestions: ["false", "true"] },
                },
                {
                  name: "--name",
                  description: "New name of the area",
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
          ],
        },
        {
          name: "team",
          description: "Manage areas for a team",
          subcommands: [
            {
              name: "add",
              description: "Add area to a team",
              options: [
                {
                  name: "--path",
                  description: "Area path. Example:\\ProjectName\\AreaName",
                  args: { name: "path" },
                  isRequired: true,
                },
                {
                  name: "--team",
                  description: "The name or id of the team",
                  args: { name: "team" },
                  isRequired: true,
                },
                {
                  name: "--detect",
                  description: "Automatically detect organization",
                  args: { name: "detect", suggestions: ["false", "true"] },
                },
                {
                  name: "--include-sub-areas",
                  description: "Include child nodes of this area",
                  args: {
                    name: "include-sub-areas",
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
                  name: ["--project", "-p"],
                  description:
                    "Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config",
                  args: { name: "project" },
                },
                {
                  name: "--set-as-default",
                  description:
                    "Set this area path as default area for this team. Default: False",
                },
              ],
            },
            {
              name: "list",
              description: "List areas for a team",
              options: [
                {
                  name: "--team",
                  description: "The name or id of the team",
                  args: { name: "team" },
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
              name: "remove",
              description: "Remove area from a team",
              options: [
                {
                  name: "--path",
                  description: "Area path. Example:\\ProjectName\\AreaName",
                  args: { name: "path" },
                  isRequired: true,
                },
                {
                  name: "--team",
                  description: "The name or id of the team",
                  args: { name: "team" },
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
              description: "Update team area",
              options: [
                {
                  name: "--path",
                  description: "Area path. Example:\\ProjectName\\AreaName",
                  args: { name: "path" },
                  isRequired: true,
                },
                {
                  name: "--team",
                  description: "The name or id of the team",
                  args: { name: "team" },
                  isRequired: true,
                },
                {
                  name: "--detect",
                  description: "Automatically detect organization",
                  args: { name: "detect", suggestions: ["false", "true"] },
                },
                {
                  name: "--include-sub-areas",
                  description: "Include child nodes of this area",
                  args: {
                    name: "include-sub-areas",
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
                  name: ["--project", "-p"],
                  description:
                    "Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config",
                  args: { name: "project" },
                },
                {
                  name: "--set-as-default",
                  description: "Set as default team area path. Default: False",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "iteration",
      description: "Manage iterations",
      subcommands: [
        {
          name: "project",
          description: "Manage iterations for a project",
          subcommands: [
            {
              name: "create",
              description: "Create iteration",
              options: [
                {
                  name: "--name",
                  description: "Name of the iteration",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--detect",
                  description: "Automatically detect organization",
                  args: { name: "detect", suggestions: ["false", "true"] },
                },
                {
                  name: "--finish-date",
                  description:
                    'Finish date of the iteration. Example : "2019-06-21"',
                  args: { name: "finish-date" },
                },
                {
                  name: ["--organization", "--org"],
                  description:
                    "Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: https://dev.azure.com/MyOrganizationName/",
                  args: { name: "organization" },
                },
                {
                  name: "--path",
                  description:
                    "Absolute path of an iteration. Creates an iteration at root level if --path is not specified. Example:\\ProjectName\\Iteration\\IterationName",
                  args: { name: "path" },
                },
                {
                  name: ["--project", "-p"],
                  description:
                    "Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config",
                  args: { name: "project" },
                },
                {
                  name: "--start-date",
                  description:
                    'Start date of the iteration. Example : "2019-06-03"',
                  args: { name: "start-date" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete iteration",
              options: [
                {
                  name: "--path",
                  description:
                    "Absolute path of an iteration. Example:\\ProjectName\\Iteration\\IterationName",
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
              description: "List iterations for a project",
              options: [
                {
                  name: "--depth",
                  description:
                    "Depth of child nodes to be fetched. Example: --depth 3",
                  args: { name: "depth" },
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
                  name: "--path",
                  description:
                    "Absolute path of an iteration. Example:\\ProjectName\\Iteration\\IterationName",
                  args: { name: "path" },
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
              description: "Show iteration details for a project",
              options: [
                {
                  name: "--id",
                  description: "Iteration ID",
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
              ],
            },
            {
              name: "update",
              description: "Update project iteration",
              options: [
                {
                  name: "--path",
                  description:
                    "Absolute path of an iteration. Example:\\ProjectName\\Iteration\\IterationName",
                  args: { name: "path" },
                  isRequired: true,
                },
                {
                  name: "--child-id",
                  description:
                    "Move an existing iteration and add as child node for this iteration",
                  args: { name: "child-id" },
                },
                {
                  name: "--detect",
                  description: "Automatically detect organization",
                  args: { name: "detect", suggestions: ["false", "true"] },
                },
                {
                  name: "--finish-date",
                  description:
                    'Finish date of the iteration. Example : "2019-06-21"',
                  args: { name: "finish-date" },
                },
                {
                  name: "--name",
                  description: "New name of the iteration",
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
                  name: "--start-date",
                  description:
                    'Start date of the iteration. Example : "2019-06-03"',
                  args: { name: "start-date" },
                },
              ],
            },
          ],
        },
        {
          name: "team",
          description: "Manage iterations for a team",
          subcommands: [
            {
              name: "add",
              description: "Add iteration to a team",
              options: [
                {
                  name: "--id",
                  description: "Identifier of the iteration",
                  args: { name: "id" },
                  isRequired: true,
                },
                {
                  name: "--team",
                  description: "Name or ID of the team",
                  args: { name: "team" },
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
              description: "List iterations for a team",
              options: [
                {
                  name: "--team",
                  description: "The name or id of the team",
                  args: { name: "team" },
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
                  name: "--timeframe",
                  description:
                    "A filter for which iterations are returned based on relative time. Only Current is supported currently",
                  args: { name: "timeframe" },
                },
              ],
            },
            {
              name: "list-work-items",
              description: "List work-items for an iteration",
              options: [
                {
                  name: "--id",
                  description: "Identifier of the iteration",
                  args: { name: "id" },
                  isRequired: true,
                },
                {
                  name: "--team",
                  description: "Name or ID of the team",
                  args: { name: "team" },
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
              name: "remove",
              description: "Remove iteration from a team",
              options: [
                {
                  name: "--id",
                  description: "Identifier of the iteration",
                  args: { name: "id" },
                  isRequired: true,
                },
                {
                  name: "--team",
                  description: "Name or ID of the team",
                  args: { name: "team" },
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
              name: "set-backlog-iteration",
              description: "Set backlog iteration for a team",
              options: [
                {
                  name: "--id",
                  description:
                    "Identifier of the iteration which needs to be set as backlog iteration",
                  args: { name: "id" },
                  isRequired: true,
                },
                {
                  name: "--team",
                  description: "Name or ID of the team",
                  args: { name: "team" },
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
              name: "set-default-iteration",
              description: "Set default iteration for a team",
              options: [
                {
                  name: "--team",
                  description: "Name or ID of the team",
                  args: { name: "team" },
                  isRequired: true,
                },
                {
                  name: "--default-iteration-macro",
                  description:
                    "Default iteration macro. Example: @CurrentIteration",
                  args: { name: "default-iteration-macro" },
                },
                {
                  name: "--detect",
                  description: "Automatically detect organization",
                  args: { name: "detect", suggestions: ["false", "true"] },
                },
                {
                  name: "--id",
                  description:
                    "Identifier of the iteration which needs to be set as default",
                  args: { name: "id" },
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
              name: "show-backlog-iteration",
              description: "Show backlog iteration for a team",
              options: [
                {
                  name: "--team",
                  description: "Name or ID of the team",
                  args: { name: "team" },
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
              name: "show-default-iteration",
              description: "Show default iteration for a team",
              options: [
                {
                  name: "--team",
                  description: "Name or ID of the team",
                  args: { name: "team" },
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
      name: "query",
      description: "Query for a list of work items",
      options: [
        {
          name: "--detect",
          description: "Automatically detect organization",
          args: { name: "detect", suggestions: ["false", "true"] },
        },
        {
          name: "--id",
          description:
            "The ID of an existing query. Required unless --path or --wiql are specified",
          args: { name: "id" },
        },
        {
          name: ["--organization", "--org"],
          description:
            "Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: https://dev.azure.com/MyOrganizationName/",
          args: { name: "organization" },
        },
        {
          name: "--path",
          description:
            "The path of an existing query. Ignored if --id is specified",
          args: { name: "path" },
        },
        {
          name: ["--project", "-p"],
          description:
            "Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config",
          args: { name: "project" },
        },
        {
          name: "--wiql",
          description:
            "The query in Work Item Query Language format. Ignored if --id or --path is specified",
          args: { name: "wiql" },
        },
      ],
    },
    {
      name: "work-item",
      description: "Manage work items",
      subcommands: [
        {
          name: "create",
          description: "Create a work item",
          options: [
            {
              name: "--title",
              description: "Title of the work item",
              args: { name: "title" },
              isRequired: true,
            },
            {
              name: "--type",
              description: "Name of the work item type (e.g. Bug)",
              args: { name: "type" },
              isRequired: true,
            },
            {
              name: "--area",
              description: "Area the work item is assigned to (e.g. Demos)",
              args: { name: "area" },
            },
            {
              name: "--assigned-to",
              description:
                "Name of the person the work item is assigned-to (e.g. fabrikam)",
              args: { name: "assigned-to" },
            },
            {
              name: ["--description", "-d"],
              description: "Description of the work item",
              args: { name: "description" },
            },
            {
              name: "--detect",
              description: "Automatically detect organization",
              args: { name: "detect", suggestions: ["false", "true"] },
            },
            {
              name: "--discussion",
              description: "Comment to add to a discussion in a work item",
              args: { name: "discussion" },
            },
            {
              name: ["--fields", "-f"],
              description:
                'Space separated "field=value" pairs for custom fields you would like to set. In case of multiple fields : "field1=value1" "field2=value2". Refer https://aka.ms/azure-devops-cli-field-api for more details on fields',
              args: { name: "fields" },
            },
            {
              name: "--iteration",
              description:
                "Iteration path of the work item (e.g. Demos\\Iteration 1)",
              args: { name: "iteration" },
            },
            {
              name: "--open",
              description: "Open the work item in the default web browser",
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
              description: "Reason for the state of the work item",
              args: { name: "reason" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a work item",
          options: [
            {
              name: "--id",
              description: "Unique id of the work item",
              args: { name: "id" },
              isRequired: true,
            },
            {
              name: "--destroy",
              description: "Permanently delete this work item",
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
          name: "show",
          description: "Show details for a work item",
          options: [
            {
              name: "--id",
              description: "The ID of the work item",
              args: { name: "id" },
              isRequired: true,
            },
            {
              name: "--as-of",
              description:
                "Work item details as of a particular date and time. Provide a date or date time string. Assumes local time zone. Example: '2019-01-20', '2019-01-20 00:20:00'. For UTC, append 'UTC' to the date time string, '2019-01-20 00:20:00 UTC'",
              args: { name: "as-of" },
            },
            {
              name: "--detect",
              description: "Automatically detect organization",
              args: { name: "detect", suggestions: ["false", "true"] },
            },
            {
              name: "--expand",
              description: "The expand parameters for work item attributes",
              args: {
                name: "expand",
                suggestions: ["all", "fields", "links", "none", "relations"],
              },
            },
            {
              name: ["--fields", "-f"],
              description:
                "Comma-separated list of requested fields. Example:System.Id,System.AreaPath. Refer https://aka.ms/azure-devops-cli-field-api for more details on fields",
              args: { name: "fields" },
            },
            {
              name: "--open",
              description: "Open the work item in the default web browser",
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
          description: "Update work items",
          options: [
            {
              name: "--id",
              description: "The id of the work item to update",
              args: { name: "id" },
              isRequired: true,
            },
            {
              name: "--area",
              description: "Area the work item is assigned to (e.g. Demos)",
              args: { name: "area" },
            },
            {
              name: "--assigned-to",
              description:
                "Name of the person the work item is assigned-to (e.g. fabrikam)",
              args: { name: "assigned-to" },
            },
            {
              name: ["--description", "-d"],
              description: "Description of the work item",
              args: { name: "description" },
            },
            {
              name: "--detect",
              description: "Automatically detect organization",
              args: { name: "detect", suggestions: ["false", "true"] },
            },
            {
              name: "--discussion",
              description: "Comment to add to a discussion in a work item",
              args: { name: "discussion" },
            },
            {
              name: ["--fields", "-f"],
              description:
                'Space separated "field=value" pairs for custom fields you would like to set. Refer https://aka.ms/azure-devops-cli-field-api for more details on fields',
              args: { name: "fields" },
            },
            {
              name: "--iteration",
              description:
                "Iteration path of the work item (e.g. Demos\\Iteration 1)",
              args: { name: "iteration" },
            },
            {
              name: "--open",
              description: "Open the work item in the default web browser",
            },
            {
              name: ["--organization", "--org"],
              description:
                "Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: https://dev.azure.com/MyOrganizationName/",
              args: { name: "organization" },
            },
            {
              name: "--reason",
              description: "Reason for the state of the work item",
              args: { name: "reason" },
            },
            {
              name: "--state",
              description: "State of the work item (e.g. active)",
              args: { name: "state" },
            },
            {
              name: "--title",
              description: "Title of the work item",
              args: { name: "title" },
            },
          ],
        },
        {
          name: "relation",
          description: "Manage work item relations",
          subcommands: [
            {
              name: "add",
              description: "Add relation(s) to work item",
              options: [
                {
                  name: "--id",
                  description: "The ID of the work item",
                  args: { name: "id" },
                  isRequired: true,
                },
                {
                  name: "--relation-type",
                  description:
                    "Relation type to create. Example: parent, child",
                  args: { name: "relation-type" },
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
                  name: "--target-id",
                  description:
                    "ID(s) of work-items to create relation with. Multiple values can be passed comma separated. Example: 1,2",
                  args: { name: "target-id" },
                },
                {
                  name: "--target-url",
                  description:
                    "URL(s) of work-items to create relation with. Multiple values can be passed comma separated",
                  args: { name: "target-url" },
                },
              ],
            },
            {
              name: "list-type",
              description:
                "List work item relations supported in the organization",
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
              ],
            },
            {
              name: "remove",
              description: "Remove relation(s) from work item",
              options: [
                {
                  name: "--id",
                  description: "The ID of the work item",
                  args: { name: "id" },
                  isRequired: true,
                },
                {
                  name: "--relation-type",
                  description:
                    "Relation type to remove. Example: parent, child",
                  args: { name: "relation-type" },
                  isRequired: true,
                },
                {
                  name: "--target-id",
                  description:
                    "ID(s) of work-items to remove relation from. Multiple values can be passed comma separated. Example: 1,2",
                  args: { name: "target-id" },
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
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "show",
              description: "Get work item, fill relations with friendly name",
              options: [
                {
                  name: "--id",
                  description: "The ID of the work item",
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
      ],
    },
  ],
};

export default completion;
