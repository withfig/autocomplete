const completion: Fig.Spec = {
  name: "devops",
  description:
    "Manage Azure DevOps organization level operations.\n\n\t\tRelated Groups\naz pipelines: Manage Azure Pipelines\naz boards: Manage Azure Boards\naz repos: Manage Azure Repos\naz artifacts: Manage Azure Artifacts",
  subcommands: [
    {
      name: "admin",
      description: "Manage administration operations",
      subcommands: [
        {
          name: "banner",
          description: "Manage organization banner",
          subcommands: [
            {
              name: "add",
              description: "Add a new banner and immediately show it",
              options: [
                {
                  name: ["--message", "-m"],
                  description: "Message (string) to show in the banner",
                  args: { name: "message" },
                  isRequired: true,
                },
                {
                  name: "--detect",
                  description: "Automatically detect organization",
                  args: { name: "detect", suggestions: ["false", "true"] },
                },
                {
                  name: "--expiration",
                  description:
                    'Date/time when the banner should no longer be presented to users. If not set, the banner does not automatically expire and must be removed with the remove command. Example : "2019-06-10 17:21:00 UTC", "2019-06-10"',
                  args: { name: "expiration" },
                },
                {
                  name: "--id",
                  description:
                    "Identifier for the new banner. This identifier is needed to change or remove the message later. A unique identifier is automatically created if one is not specified",
                  args: { name: "id" },
                },
                {
                  name: ["--organization", "--org"],
                  description:
                    "Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: https://dev.azure.com/MyOrganizationName/",
                  args: { name: "organization" },
                },
                {
                  name: ["--type", "-t"],
                  description: 'Type of banner to present. Defaults is "info"',
                  args: {
                    name: "type",
                    suggestions: ["error", "info", "warning"],
                  },
                },
              ],
            },
            {
              name: "list",
              description: "List banners",
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
              description: "Remove a banner",
              options: [
                {
                  name: "--id",
                  description: "ID of the banner to remove",
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
              name: "show",
              description: "Show details for a banner",
              options: [
                {
                  name: "--id",
                  description: "Identifier for the banner",
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
              name: "update",
              description:
                "Update the message, level, or expiration date for a banner",
              options: [
                {
                  name: "--id",
                  description: "ID of the banner to update",
                  args: { name: "id" },
                  isRequired: true,
                },
                {
                  name: "--detect",
                  description: "Automatically detect organization",
                  args: { name: "detect", suggestions: ["false", "true"] },
                },
                {
                  name: "--expiration",
                  description:
                    'Date/time when the banner should no longer be presented to users. To unset the expiration for the banner, supply an empty value to this argument. Example : "2019-06-10 17:21:00 UTC", "2019-06-10"',
                  args: { name: "expiration" },
                },
                {
                  name: ["--message", "-m"],
                  description: "Message (string) to show in the banner",
                  args: { name: "message" },
                },
                {
                  name: ["--organization", "--org"],
                  description:
                    "Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: https://dev.azure.com/MyOrganizationName/",
                  args: { name: "organization" },
                },
                {
                  name: ["--type", "-t"],
                  description: 'Type of banner to present. Defaults is "info"',
                  args: {
                    name: "type",
                    suggestions: ["error", "info", "warning"],
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "configure",
      description: "Configure the Azure DevOps CLI or view your configuration",
      options: [
        {
          name: ["--defaults", "-d"],
          description:
            "Space separated 'name=value' pairs for common arguments defaults, e.g. '--defaults project=my-project-name organization=https://dev.azure.com/organizationName arg=value'. Use '' to clear the defaults, e.g. --defaults project=''",
          args: { name: "defaults" },
        },
        {
          name: ["--list", "-l"],
          description: "Lists the contents of the config file",
        },
        {
          name: "--use-git-aliases",
          description:
            "Set to 'true' to configure Git aliases global git config file (to enable commands like \"git pr list\"). Set to 'false' to remove any aliases set by the tool",
          args: { name: "use-git-aliases", suggestions: ["false", "true"] },
        },
      ],
    },
    {
      name: "feedback",
      description:
        "Displays information on how to provide feedback to the Azure DevOps CLI team",
    },
    {
      name: "invoke",
      description:
        "This command will invoke request for any DevOps area and resource. Please use only json output as the response of this command is not fixed. Helpful docs - https://docs.microsoft.com/en-us/rest/api/azure/devops/",
      options: [
        {
          name: "--accept-media-type",
          description: "Specifies the content type of the response",
          args: { name: "accept-media-type" },
        },
        {
          name: "--api-version",
          description: "The version of the API to target",
          args: { name: "api-version" },
        },
        {
          name: "--area",
          description: "The area to find the resource",
          args: { name: "area" },
        },
        {
          name: "--detect",
          description: "Automatically detect organization",
          args: { name: "detect", suggestions: ["false", "true"] },
        },
        {
          name: "--encoding",
          description:
            "Encoding of the input file. Used in conjunction with --in-file",
          args: {
            name: "encoding",
            suggestions: ["ascii", "utf-16be", "utf-16le", "utf-8"],
          },
        },
        {
          name: "--http-method",
          description: "Specifies the method used for the request",
          args: {
            name: "http-method",
            suggestions: [
              "DELETE",
              "GET",
              "HEAD",
              "OPTIONS",
              "PATCH",
              "POST",
              "PUT",
            ],
          },
        },
        {
          name: "--in-file",
          description:
            "Path and file name to the file that contains the contents of the request",
          args: { name: "in-file" },
        },
        {
          name: "--media-type",
          description: "Specifies the content type of the request",
          args: { name: "media-type" },
        },
        {
          name: ["--organization", "--org"],
          description:
            "Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: https://dev.azure.com/MyOrganizationName/",
          args: { name: "organization" },
        },
        {
          name: "--out-file",
          description:
            "Path and file name to the file for which this function saves the response body",
          args: { name: "out-file" },
        },
        {
          name: "--query-parameters",
          description: "Specifies the list of query parameters",
          args: { name: "query-parameters" },
        },
        {
          name: "--resource",
          description: "The name of the resource to operate on",
          args: { name: "resource" },
        },
        {
          name: "--route-parameters",
          description: "Specifies the list of route parameters",
          args: { name: "route-parameters" },
        },
      ],
    },
    {
      name: "login",
      description:
        "Set the credential (PAT) to use for a particular organization",
      options: [
        {
          name: ["--organization", "--org"],
          description:
            "Azure DevOps organization URL. Example: https://dev.azure.com/MyOrganizationName",
          args: { name: "organization" },
        },
      ],
    },
    {
      name: "logout",
      description: "Clear the credential for all or a particular organization",
      options: [
        {
          name: ["--organization", "--org"],
          description:
            "Azure DevOps organization URL. Example: https://dev.azure.com/MyOrganizationName/. If no organization is specified, all organizations will be logged out",
          args: { name: "organization" },
        },
      ],
    },
    {
      name: "extension",
      description: "Manage extensions",
      subcommands: [
        {
          name: "disable",
          description: "Disable an extension",
          options: [
            {
              name: "--extension-id",
              description:
                "Extension Id. This will map to extension-name in the az devops extension search output",
              args: { name: "extension-id" },
              isRequired: true,
            },
            {
              name: "--publisher-id",
              description:
                "Publisher Id. This will map to publisher-name in the az devops extension search output",
              args: { name: "publisher-id" },
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
          name: "enable",
          description: "Enable an extension",
          options: [
            {
              name: "--extension-id",
              description:
                "Extension Id. This will map to extension-name in the az devops extension search output",
              args: { name: "extension-id" },
              isRequired: true,
            },
            {
              name: "--publisher-id",
              description:
                "Publisher Id. This will map to publisher-name in the az devops extension search output",
              args: { name: "publisher-id" },
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
          name: "install",
          description: "Install an extension",
          options: [
            {
              name: "--extension-id",
              description:
                "Extension Id. This will map to extension-name in the az devops extension search output",
              args: { name: "extension-id" },
              isRequired: true,
            },
            {
              name: "--publisher-id",
              description:
                "Publisher Id. This will map to publisher-name in the az devops extension search output",
              args: { name: "publisher-id" },
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
          description: "List extensions installed in an organization",
          options: [
            {
              name: "--detect",
              description: "Automatically detect organization",
              args: { name: "detect", suggestions: ["false", "true"] },
            },
            {
              name: "--include-built-in",
              description: "Include built in extensions",
              args: {
                name: "include-built-in",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--include-disabled",
              description: "Include disabled extensions",
              args: {
                name: "include-disabled",
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
          name: "search",
          description: "Search extensions from marketplace",
          options: [
            {
              name: ["--search-query", "-q"],
              description: "Search term",
              args: { name: "search-query" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description: "Get detail of single extension",
          options: [
            {
              name: "--extension-id",
              description:
                "Extension Id. This will map to extension-name in the az devops extension search output",
              args: { name: "extension-id" },
              isRequired: true,
            },
            {
              name: "--publisher-id",
              description:
                "Publisher Id. This will map to publisher-name in the az devops extension search output",
              args: { name: "publisher-id" },
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
          name: "uninstall",
          description: "Uninstall an extension",
          options: [
            {
              name: "--extension-id",
              description:
                "Extension Id. This will map to extension-name in the az devops extension search output",
              args: { name: "extension-id" },
              isRequired: true,
            },
            {
              name: "--publisher-id",
              description:
                "Publisher Id. This will map to publisher-name in the az devops extension search output",
              args: { name: "publisher-id" },
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
      ],
    },
    {
      name: "project",
      description: "Manage team projects",
      subcommands: [
        {
          name: "create",
          description: "Create a team project",
          options: [
            {
              name: "--name",
              description: "Name of the new project",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--description", "-d"],
              description: "Description for the new project",
              args: { name: "description" },
            },
            {
              name: "--detect",
              description: "Automatically detect organization",
              args: { name: "detect", suggestions: ["false", "true"] },
            },
            {
              name: "--open",
              description: "Open the team project in the default web browser",
            },
            {
              name: ["--organization", "--org"],
              description:
                "Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: https://dev.azure.com/MyOrganizationName/",
              args: { name: "organization" },
            },
            {
              name: ["--process", "-p"],
              description: "Process to use. Default if not specified",
              args: { name: "process" },
            },
            {
              name: ["--source-control", "-s"],
              description:
                "Source control type of the initial code repository created",
              args: { name: "source-control", suggestions: ["git", "tfvc"] },
            },
            {
              name: "--visibility",
              description: "Project visibility",
              args: { name: "visibility", suggestions: ["private", "public"] },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete team project",
          options: [
            {
              name: "--id",
              description: "The id of the project to delete",
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
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "List team projects",
          options: [
            {
              name: "--continuation-token",
              description:
                "Continuation token. This can be retrived from previous run of this command if more results are present",
              args: { name: "continuation-token" },
            },
            {
              name: "--detect",
              description: "Automatically detect organization",
              args: { name: "detect", suggestions: ["false", "true"] },
            },
            {
              name: "--get-default-team-image-url",
              description: "Whether to get default team image url or not",
              args: {
                name: "get-default-team-image-url",
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
              name: "--skip",
              description: "Number of results to skip",
              args: { name: "skip" },
            },
            {
              name: "--state-filter",
              description: "State filter",
              args: {
                name: "state-filter",
                suggestions: [
                  "all",
                  "createPending",
                  "deleted",
                  "deleting",
                  "new",
                  "unchanged",
                  "wellFormed",
                ],
              },
            },
            {
              name: "--top",
              description: "Maximum number of results to list",
              args: { name: "top" },
            },
          ],
        },
        {
          name: "show",
          description: "Show team project",
          options: [
            {
              name: ["--project", "-p"],
              description:
                "Name or ID of the project. You can configure the default project using az devops configure -d project=NAME_OR_ID. Required if not configured as default or picked up via git config",
              args: { name: "project" },
              isRequired: true,
            },
            {
              name: "--detect",
              description: "Automatically detect organization",
              args: { name: "detect", suggestions: ["false", "true"] },
            },
            {
              name: "--open",
              description: "Open the team project in the default web browser",
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
      name: "security",
      description: "Manage security related operations",
      subcommands: [
        {
          name: "group",
          description: "Manage security groups",
          subcommands: [
            {
              name: "create",
              description: "Create a new Azure DevOps group",
              options: [
                {
                  name: "--description",
                  description: "Description of Azure DevOps group",
                  args: { name: "description" },
                },
                {
                  name: "--detect",
                  description: "Automatically detect organization",
                  args: { name: "detect", suggestions: ["false", "true"] },
                },
                {
                  name: "--email-id",
                  description:
                    "Create new group using the mail address as a reference to an existing group from an external AD or AAD backed provider. Required if name or origin-id is missing",
                  args: { name: "email-id" },
                },
                {
                  name: "--groups",
                  description:
                    "A comma separated list of descriptors referencing groups you want the newly created group to join",
                  args: { name: "groups" },
                },
                {
                  name: "--name",
                  description: "Name of Azure DevOps group",
                  args: { name: "name" },
                },
                {
                  name: ["--organization", "--org"],
                  description:
                    "Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: https://dev.azure.com/MyOrganizationName/",
                  args: { name: "organization" },
                },
                {
                  name: "--origin-id",
                  description:
                    "Create new group using the OriginID as a reference to an existing group from an external AD or AAD backed provider. Required if name or email-id is missing",
                  args: { name: "origin-id" },
                },
                {
                  name: ["--project", "-p"],
                  description:
                    "Name or ID of the project in which Azure DevOps group should be created",
                  args: { name: "project" },
                },
                {
                  name: "--scope",
                  description: "Create group at project or organization level",
                  args: {
                    name: "scope",
                    suggestions: ["organization", "project"],
                  },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete an Azure DevOps group",
              options: [
                {
                  name: "--id",
                  description: "Descriptor of the group",
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
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "list",
              description: "List all the groups in a project or organization",
              options: [
                {
                  name: "--continuation-token",
                  description:
                    "If there are more results that can't be returned in a single page, the result set will contain a continuation token for retrieval of the next set of results",
                  args: { name: "continuation-token" },
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
                  description: "List groups for a particular project",
                  args: { name: "project" },
                },
                {
                  name: "--scope",
                  description: "List groups at project or organization level",
                  args: {
                    name: "scope",
                    suggestions: ["organization", "project"],
                  },
                },
                {
                  name: "--subject-types",
                  description:
                    "A comma separated list of user subject subtypes to reduce the retrieved results. You can give initial part of descriptor [before the dot] as a filter e.g. vssgp,aadgp",
                  args: { name: "subject-types" },
                },
              ],
            },
            {
              name: "show",
              description: "Show group details",
              options: [
                {
                  name: "--id",
                  description: "Descriptor of the group",
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
              name: "update",
              description:
                "Update name AND/OR description for an Azure DevOps group",
              options: [
                {
                  name: "--id",
                  description: "Descriptor of the group",
                  args: { name: "id" },
                  isRequired: true,
                },
                {
                  name: "--description",
                  description: "New description for Azure DevOps group",
                  args: { name: "description" },
                },
                {
                  name: "--detect",
                  description: "Automatically detect organization",
                  args: { name: "detect", suggestions: ["false", "true"] },
                },
                {
                  name: "--name",
                  description: "New name for Azure DevOps group",
                  args: { name: "name" },
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
              name: "membership",
              description: "Manage memberships for security groups",
              subcommands: [
                {
                  name: "add",
                  description: "Add membership",
                  options: [
                    {
                      name: "--group-id",
                      description:
                        "Descriptor of the group to which member needs to be added",
                      args: { name: "group-id" },
                      isRequired: true,
                    },
                    {
                      name: "--member-id",
                      description:
                        "Descriptor of the group or Email Id of the user to be added. User should already be a part of the organization. Use az devops user add command to add an user to organization",
                      args: { name: "member-id" },
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
                  description: "List memberships for a group or user",
                  options: [
                    {
                      name: "--id",
                      description:
                        "Group descriptor or User Email whose membership details are required",
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
                      name: "--relationship",
                      description: "Get member of/members for this group",
                      args: {
                        name: "relationship",
                        suggestions: ["memberof", "members"],
                      },
                    },
                  ],
                },
                {
                  name: "remove",
                  description: "Remove membership",
                  options: [
                    {
                      name: "--group-id",
                      description:
                        "Descriptor of the group from which member needs to be removed",
                      args: { name: "group-id" },
                      isRequired: true,
                    },
                    {
                      name: "--member-id",
                      description:
                        "Descriptor of the group or Email Id of the user to be removed",
                      args: { name: "member-id" },
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
              ],
            },
          ],
        },
        {
          name: "permission",
          description: "Manage security permissions",
          subcommands: [
            {
              name: "list",
              description: "List tokens for given user/group and namespace",
              options: [
                {
                  name: ["--namespace-id", "--id"],
                  description: "ID of security namespace",
                  args: { name: "namespace-id" },
                  isRequired: true,
                },
                {
                  name: "--subject",
                  description: "User Email ID or Group descriptor",
                  args: { name: "subject" },
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
                  name: "--recurse",
                  description:
                    "If true and this is a hierarchical namespace, return child ACLs of the specified token",
                },
                {
                  name: "--token",
                  description: "Security token",
                  args: { name: "token" },
                },
              ],
            },
            {
              name: "reset",
              description: "Reset permission for given permission bit(s)",
              options: [
                {
                  name: ["--namespace-id", "--id"],
                  description: "ID of security namespace",
                  args: { name: "namespace-id" },
                  isRequired: true,
                },
                {
                  name: "--permission-bit",
                  description:
                    "Permission bit or addition of permission bits which needs to be reset for given user/group and token",
                  args: { name: "permission-bit" },
                  isRequired: true,
                },
                {
                  name: "--subject",
                  description: "User Email ID or Group descriptor",
                  args: { name: "subject" },
                  isRequired: true,
                },
                {
                  name: "--token",
                  description: "Security token",
                  args: { name: "token" },
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
              name: "reset-all",
              description:
                "Clear all permissions of this token for a user/group",
              options: [
                {
                  name: ["--namespace-id", "--id"],
                  description: "ID of security namespace",
                  args: { name: "namespace-id" },
                  isRequired: true,
                },
                {
                  name: "--subject",
                  description: "User Email ID or Group descriptor",
                  args: { name: "subject" },
                  isRequired: true,
                },
                {
                  name: "--token",
                  description: "Security token",
                  args: { name: "token" },
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
              description:
                "Show permissions for given token, namespace and user/group",
              options: [
                {
                  name: ["--namespace-id", "--id"],
                  description: "ID of security namespace",
                  args: { name: "namespace-id" },
                  isRequired: true,
                },
                {
                  name: "--subject",
                  description: "User Email ID or Group descriptor",
                  args: { name: "subject" },
                  isRequired: true,
                },
                {
                  name: "--token",
                  description: "Security token",
                  args: { name: "token" },
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
              name: "update",
              description:
                "Assign allow or deny permission to given user/group",
              options: [
                {
                  name: ["--namespace-id", "--id"],
                  description: "ID of security namespace",
                  args: { name: "namespace-id" },
                  isRequired: true,
                },
                {
                  name: "--subject",
                  description: "User Email ID or Group descriptor",
                  args: { name: "subject" },
                  isRequired: true,
                },
                {
                  name: "--token",
                  description: "Security token",
                  args: { name: "token" },
                  isRequired: true,
                },
                {
                  name: "--allow-bit",
                  description:
                    "Allow bit or addition of bits. Required if --deny-bit is missing",
                  args: { name: "allow-bit" },
                },
                {
                  name: "--deny-bit",
                  description:
                    "Deny bit or addition of bits. Required if --allow-bit is missing",
                  args: { name: "deny-bit" },
                },
                {
                  name: "--detect",
                  description: "Automatically detect organization",
                  args: { name: "detect", suggestions: ["false", "true"] },
                },
                {
                  name: "--merge",
                  description:
                    "If set, the existing ACE has its allow and deny merged with the incoming ACE's allow and deny. If unset, the existing ACE is displaced",
                  args: { name: "merge", suggestions: ["false", "true"] },
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
              name: "namespace",
              description: "Manage security namespaces",
              subcommands: [
                {
                  name: "list",
                  description:
                    "List all available namespaces for an organization",
                  options: [
                    {
                      name: "--detect",
                      description: "Automatically detect organization",
                      args: { name: "detect", suggestions: ["false", "true"] },
                    },
                    {
                      name: "--local-only",
                      description:
                        "If true, retrieve only local security namespaces",
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
                  description:
                    "Show details of permissions available in each namespace",
                  options: [
                    {
                      name: ["--namespace-id", "--id"],
                      description: "ID of security namespace",
                      args: { name: "namespace-id" },
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
    },
    {
      name: "service-endpoint",
      description: "Manage service endpoints/connections",
      subcommands: [
        {
          name: "create",
          description: "Create a service endpoint using configuration file",
          options: [
            {
              name: "--service-endpoint-configuration",
              description: "Configuration file with service endpoint request",
              args: { name: "service-endpoint-configuration" },
              isRequired: true,
            },
            {
              name: "--detect",
              description: "Automatically detect organization",
              args: { name: "detect", suggestions: ["false", "true"] },
            },
            {
              name: "--encoding",
              description: "Encoding of the input file",
              args: {
                name: "encoding",
                suggestions: ["ascii", "utf-16be", "utf-16le", "utf-8"],
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
          ],
        },
        {
          name: "delete",
          description: "Deletes service endpoint",
          options: [
            {
              name: "--id",
              description: "Id of the service endpoint to delete",
              args: { name: "id" },
              isRequired: true,
            },
            {
              name: "--deep",
              description:
                "Specific to AzureRM endpoint created in Automatic flow. When it is specified, this will also delete corresponding AAD application in Azure",
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
          description: "List service endpoints in a project",
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
          description: "Get the details of a service endpoint",
          options: [
            {
              name: "--id",
              description: "ID of the service endpoint",
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
          description: "Update a service endpoint",
          options: [
            {
              name: "--id",
              description: "ID of the service endpoint",
              args: { name: "id" },
              isRequired: true,
            },
            {
              name: "--detect",
              description: "Automatically detect organization",
              args: { name: "detect", suggestions: ["false", "true"] },
            },
            {
              name: "--enable-for-all",
              description:
                "Allow all pipelines to access this service endpoint",
              args: { name: "enable-for-all", suggestions: ["false", "true"] },
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
          name: "azurerm",
          description: "Manage Azure RM service endpoints/connections",
          subcommands: [
            {
              name: "create",
              description: "Create an Azure RM type service endpoint",
              options: [
                {
                  name: "--azure-rm-service-principal-id",
                  description:
                    "Service principal id for creating azure rm service endpoint",
                  args: { name: "azure-rm-service-principal-id" },
                  isRequired: true,
                },
                {
                  name: "--azure-rm-subscription-id",
                  description: "Subscription id for azure rm service endpoint",
                  args: { name: "azure-rm-subscription-id" },
                  isRequired: true,
                },
                {
                  name: "--azure-rm-subscription-name",
                  description:
                    "Name of azure subscription for azure rm service endpoint",
                  args: { name: "azure-rm-subscription-name" },
                  isRequired: true,
                },
                {
                  name: "--azure-rm-tenant-id",
                  description:
                    "Tenant id for creating azure rm service endpoint",
                  args: { name: "azure-rm-tenant-id" },
                  isRequired: true,
                },
                {
                  name: "--name",
                  description: "Name of service endpoint to create",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--azure-rm-service-principal-certificate-path",
                  description:
                    'Path to (.pem) which is certificate. Create using command "openssl pkcs12 -in file.pfx -out file.pem -nodes -password pass:<password_here>". More details : https://aka.ms/azure-devops-cli-azurerm-service-endpoint',
                  args: { name: "azure-rm-service-principal-certificate-path" },
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
          name: "github",
          description: "Manage GitHub service endpoints/connections",
          subcommands: [
            {
              name: "create",
              description: "Create a GitHub service endpoint",
              options: [
                {
                  name: "--github-url",
                  description: "Url for github for creating service endpoint",
                  args: { name: "github-url" },
                  isRequired: true,
                },
                {
                  name: "--name",
                  description: "Name of service endpoint to create",
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
              ],
            },
          ],
        },
      ],
    },
    {
      name: "team",
      description: "Manage teams",
      subcommands: [
        {
          name: "create",
          description: "Create a team",
          options: [
            {
              name: "--name",
              description: "Name of the new team",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "Description of the new team",
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
          description: "Delete a team",
          options: [
            {
              name: "--id",
              description: "The id of the team to delete",
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
          description: "List all teams in a project",
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
            {
              name: "--skip",
              description: "Number of teams to skip",
              args: { name: "skip" },
            },
            {
              name: "--top",
              description: "Maximum number of teams to return",
              args: { name: "top" },
            },
          ],
        },
        {
          name: "list-member",
          description: "List members of a team",
          options: [
            {
              name: "--team",
              description: "The name or id of the team to show members of",
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
              name: "--skip",
              description: "Number of members to skip",
              args: { name: "skip" },
            },
            {
              name: "--top",
              description: "Maximum number of members to return",
              args: { name: "top" },
            },
          ],
        },
        {
          name: "show",
          description: "Show team details",
          options: [
            {
              name: "--team",
              description: "The name or id of the team to show",
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
          description: "Update a team's name and/or description",
          options: [
            {
              name: "--team",
              description: "The name or id of the team to be updated",
              args: { name: "team" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "New description of the team",
              args: { name: "description" },
            },
            {
              name: "--detect",
              description: "Automatically detect organization",
              args: { name: "detect", suggestions: ["false", "true"] },
            },
            {
              name: "--name",
              description: "New name of the team",
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
      name: "user",
      description: "Manage users",
      subcommands: [
        {
          name: "add",
          description: "Add user",
          options: [
            {
              name: "--email-id",
              description: "Email ID of the user",
              args: { name: "email-id" },
              isRequired: true,
            },
            {
              name: "--license-type",
              description: "License type for the user",
              args: {
                name: "license-type",
                suggestions: [
                  "advanced",
                  "earlyAdopter",
                  "express",
                  "professional",
                  "stakeholder",
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
            {
              name: "--send-email-invite",
              description: "Whether to send email invite for new user or not",
              args: {
                name: "send-email-invite",
                suggestions: ["false", "true"],
              },
            },
          ],
        },
        {
          name: "list",
          description:
            "List users in an organization [except for users which are added via AAD groups]",
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
              name: "--skip",
              description: "Offset: Number of records to skip",
              args: { name: "skip" },
            },
            {
              name: "--top",
              description:
                "Maximum number of users to return. Max value is 10000",
              args: { name: "top" },
            },
          ],
        },
        {
          name: "remove",
          description: "Remove user from an organization",
          options: [
            {
              name: "--user",
              description: "Email ID or ID of the user",
              args: { name: "user" },
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
          description: "Show user details",
          options: [
            {
              name: "--user",
              description: "Email ID or ID of the user",
              args: { name: "user" },
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
          name: "update",
          description: "Update license type for a user",
          options: [
            {
              name: "--license-type",
              description: "License type for the user",
              args: {
                name: "license-type",
                suggestions: [
                  "advanced",
                  "earlyAdopter",
                  "express",
                  "professional",
                  "stakeholder",
                ],
              },
              isRequired: true,
            },
            {
              name: "--user",
              description: "Email ID or ID of the user",
              args: { name: "user" },
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
      name: "wiki",
      description: "Manage wikis",
      subcommands: [
        {
          name: "create",
          description: "Create a wiki",
          options: [
            {
              name: "--detect",
              description: "Automatically detect organization",
              args: { name: "detect", suggestions: ["false", "true"] },
            },
            {
              name: "--mapped-path",
              description:
                "[Required for codewiki type] Mapped path of the new wiki e.g. '/' to publish from root of repository",
              args: { name: "mapped-path" },
            },
            {
              name: "--name",
              description: "Name of the new wiki",
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
              name: ["--repository", "-r"],
              description:
                "[Required for codewiki type] Name or ID of the repository to publish the wiki from",
              args: { name: "repository" },
            },
            {
              name: ["--wiki-type", "--type"],
              description: "Type of wiki to create",
              args: {
                name: "wiki-type",
                suggestions: ["codewiki", "projectwiki"],
              },
            },
            {
              name: ["--version", "-v"],
              description:
                "[Required for codewiki type] Repository branch name to publish the code wiki from",
              args: { name: "version" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a wiki",
          options: [
            {
              name: "--wiki",
              description: "Name or Id of the wiki to delete",
              args: { name: "wiki" },
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
          description: "List all the wikis in a project or organization",
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
            {
              name: "--scope",
              description: "List the wikis at project or organization level",
              args: { name: "scope", suggestions: ["organization", "project"] },
            },
          ],
        },
        {
          name: "show",
          description: "Show details of a wiki",
          options: [
            {
              name: "--wiki",
              description: "Name or Id of the wiki",
              args: { name: "wiki" },
              isRequired: true,
            },
            {
              name: "--detect",
              description: "Automatically detect organization",
              args: { name: "detect", suggestions: ["false", "true"] },
            },
            {
              name: "--open",
              description: "Open the wiki in your web browser",
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
          name: "page",
          description: "Manage wiki pages",
          subcommands: [
            {
              name: "create",
              description: "Add a new page",
              options: [
                {
                  name: "--path",
                  description: "Path of the wiki page",
                  args: { name: "path" },
                  isRequired: true,
                },
                {
                  name: "--wiki",
                  description: "Name or Id of the wiki",
                  args: { name: "wiki" },
                  isRequired: true,
                },
                {
                  name: "--comment",
                  description:
                    "Comment in the commit message of file add operation",
                  args: { name: "comment" },
                },
                {
                  name: "--content",
                  description:
                    "Content of the wiki page. Ignored if --file-path is specified",
                  args: { name: "content" },
                },
                {
                  name: "--detect",
                  description: "Automatically detect organization",
                  args: { name: "detect", suggestions: ["false", "true"] },
                },
                {
                  name: "--encoding",
                  description:
                    "Encoding of the file. Used in conjunction with --file-path parameter",
                  args: {
                    name: "encoding",
                    suggestions: ["ascii", "utf-16be", "utf-16le", "utf-8"],
                  },
                },
                {
                  name: "--file-path",
                  description:
                    "Path of the file input if content is specified in the file",
                  args: { name: "file-path" },
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
              description: "Delete a page",
              options: [
                {
                  name: "--path",
                  description: "Path of the wiki page",
                  args: { name: "path" },
                  isRequired: true,
                },
                {
                  name: "--wiki",
                  description: "Name or Id of the wiki",
                  args: { name: "wiki" },
                  isRequired: true,
                },
                {
                  name: "--comment",
                  description:
                    "Comment in the commit message of delete operation",
                  args: { name: "comment" },
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
              description: "Get the content of a page or open a page",
              options: [
                {
                  name: "--path",
                  description: "Path of the wiki page",
                  args: { name: "path" },
                  isRequired: true,
                },
                {
                  name: "--wiki",
                  description: "Name or Id of the wiki",
                  args: { name: "wiki" },
                  isRequired: true,
                },
                {
                  name: "--detect",
                  description: "Automatically detect organization",
                  args: { name: "detect", suggestions: ["false", "true"] },
                },
                {
                  name: "--include-content",
                  description: "Include content of the page",
                },
                {
                  name: "--open",
                  description: "Open the wiki page in your web browser",
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
                  name: ["--version", "-v"],
                  description: "Version (ETag) of the wiki page",
                  args: { name: "version" },
                },
              ],
            },
            {
              name: "update",
              description: "Edit a page",
              options: [
                {
                  name: "--path",
                  description: "Path of the wiki page",
                  args: { name: "path" },
                  isRequired: true,
                },
                {
                  name: ["--version", "-v"],
                  description: "Version (ETag) of file to edit",
                  args: { name: "version" },
                  isRequired: true,
                },
                {
                  name: "--wiki",
                  description: "Name or Id of the wiki",
                  args: { name: "wiki" },
                  isRequired: true,
                },
                {
                  name: "--comment",
                  description:
                    "Comment in the commit message of file edit operation",
                  args: { name: "comment" },
                },
                {
                  name: "--content",
                  description:
                    "Content of the wiki page. Ignored if --file-path is specified",
                  args: { name: "content" },
                },
                {
                  name: "--detect",
                  description: "Automatically detect organization",
                  args: { name: "detect", suggestions: ["false", "true"] },
                },
                {
                  name: "--encoding",
                  description:
                    "Encoding of the file. Used in conjunction with --file-path parameter",
                  args: {
                    name: "encoding",
                    suggestions: ["ascii", "utf-16be", "utf-16le", "utf-8"],
                  },
                },
                {
                  name: "--file-path",
                  description:
                    "Path of the file input if content is specified in the file",
                  args: { name: "file-path" },
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
  ],
};

export default completion;
