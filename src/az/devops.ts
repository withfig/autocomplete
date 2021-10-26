const completionSpec: Fig.Spec = {
  name: "devops",
  description: "Manage Azure DevOps organization level operations",
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
            },
            { name: "list", description: "List banners" },
            { name: "remove", description: "Remove a banner" },
            { name: "show", description: "Show details for a banner" },
            {
              name: "update",
              description:
                "Update the message, level, or expiration date for a banner",
            },
          ],
        },
      ],
    },
    {
      name: "configure",
      description: "Configure the Azure DevOps CLI or view your configuration",
    },
    {
      name: "extension",
      description: "Manage extensions",
      subcommands: [
        { name: "disable", description: "Disable an extension" },
        { name: "enable", description: "Enable an extension" },
        { name: "install", description: "Install an extension" },
        {
          name: "list",
          description: "List extensions installed in an organization",
        },
        { name: "search", description: "Search extensions from marketplace" },
        { name: "show", description: "Get detail of single extension" },
        { name: "uninstall", description: "Uninstall an extension" },
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
    },
    {
      name: "login",
      description:
        "Set the credential (PAT) to use for a particular organization",
    },
    {
      name: "logout",
      description: "Clear the credential for all or a particular organization",
    },
    {
      name: "project",
      description: "Manage team projects",
      subcommands: [
        { name: "create", description: "Create a team project" },
        { name: "delete", description: "Delete team project" },
        { name: "list", description: "List team projects" },
        { name: "show", description: "Show team project" },
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
            { name: "create", description: "Create a new Azure DevOps group" },
            { name: "delete", description: "Delete an Azure DevOps group" },
            {
              name: "list",
              description: "List all the groups in a project or organization",
            },
            {
              name: "membership",
              description: "Manage memberships for security groups",
              subcommands: [
                { name: "add", description: "Add membership" },
                {
                  name: "list",
                  description: "List memberships for a group or user",
                },
                { name: "remove", description: "Remove membership" },
              ],
            },
            { name: "show", description: "Show group details" },
            {
              name: "update",
              description:
                "Update name AND/OR description for an Azure DevOps group",
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
            },
            {
              name: "namespace",
              description: "Manage security namespaces",
              subcommands: [
                {
                  name: "list",
                  description:
                    "List all available namespaces for an organization",
                },
                {
                  name: "show",
                  description:
                    "Show details of permissions available in each namespace",
                },
              ],
            },
            {
              name: "reset",
              description: "Reset permission for given permission bit(s)",
            },
            {
              name: "reset-all",
              description:
                "Clear all permissions of this token for a user/group",
            },
            {
              name: "show",
              description:
                "Show permissions for given token, namespace and user/group",
            },
            {
              name: "update",
              description:
                "Assign allow or deny permission to given user/group",
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
          name: "azurerm",
          description: "Manage Azure RM service endpoints/connections",
          subcommands: [
            {
              name: "create",
              description: "Create an Azure RM type service endpoint",
            },
          ],
        },
        {
          name: "create",
          description: "Create a service endpoint using configuration file",
        },
        { name: "delete", description: "Deletes service endpoint" },
        {
          name: "github",
          description: "Manage GitHub service endpoints/connections",
          subcommands: [
            { name: "create", description: "Create a GitHub service endpoint" },
          ],
        },
        { name: "list", description: "List service endpoints in a project" },
        { name: "show", description: "Get the details of a service endpoint" },
        { name: "update", description: "Update a service endpoint" },
      ],
    },
    {
      name: "team",
      description: "Manage teams",
      subcommands: [
        { name: "create", description: "Create a team" },
        { name: "delete", description: "Delete a team" },
        { name: "list", description: "List all teams in a project" },
        { name: "list-member", description: "List members of a team" },
        { name: "show", description: "Show team details" },
        {
          name: "update",
          description: "Update a team's name and/or description",
        },
      ],
    },
    {
      name: "user",
      description: "Manage users",
      subcommands: [
        { name: "add", description: "Add user" },
        {
          name: "list",
          description:
            "List users in an organization [except for users which are added via AAD groups]",
        },
        { name: "remove", description: "Remove user from an organization" },
        { name: "show", description: "Show user details" },
        { name: "update", description: "Update license type for a user" },
      ],
    },
    {
      name: "wiki",
      description: "Manage wikis",
      subcommands: [
        { name: "create", description: "Create a wiki" },
        { name: "delete", description: "Delete a wiki" },
        {
          name: "list",
          description: "List all the wikis in a project or organization",
        },
        {
          name: "page",
          description: "Manage wiki pages",
          subcommands: [
            { name: "create", description: "Add a new page" },
            { name: "delete", description: "Delete a page" },
            {
              name: "show",
              description: "Get the content of a page or open a page",
            },
            { name: "update", description: "Edit a page" },
          ],
        },
        { name: "show", description: "Show details of a wiki" },
      ],
    },
  ],
};

export default completionSpec;
