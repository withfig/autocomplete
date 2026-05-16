const completion: Fig.Spec = {
  name: "stack",
  description:
    "A deployment stack is a native Azure resource type that enables you to perform operations on a resource collection as an atomic unit",
  subcommands: [
    {
      name: "group",
      description: "Manage Deployment Stacks at resource group",
      subcommands: [
        {
          name: "create",
          description:
            "Create or update a deployment stack at resource group scope",
          options: [
            {
              name: ["--deny-settings-mode", "--dm"],
              description:
                "Define which operations are denied on resources managed by the stack",
              args: {
                name: "deny-settings-mode",
                suggestions: ["denyDelete", "denyWriteAndDelete", "none"],
              },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The name of the deployment stack",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "The resource group where the deployment stack will be created",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--deny-settings-apply-to-child-scopes", "--cs"],
              description: "DenySettings will be applied to child scopes",
            },
            {
              name: "--delete-all",
              description:
                "Flag to indicate delete rather than detach for the resources and resource groups",
            },
            {
              name: "--delete-resource-groups",
              description:
                "Flag to indicate delete rather than detach for the resource groups",
            },
            {
              name: "--delete-resources",
              description:
                "Flag to indicate delete rather than detach for the resources",
            },
            {
              name: ["--deny-settings-excluded-actions", "--ea"],
              description:
                "List of role-based management operations that are excluded from the denySettings. Up to 200 actions are permitted",
              args: { name: "deny-settings-excluded-actions" },
            },
            {
              name: ["--deny-settings-excluded-principals", "--ep"],
              description:
                "List of AAD principal IDs excluded from the lock. Up to 5 principals are permitted",
              args: { name: "deny-settings-excluded-principals" },
            },
            {
              name: "--description",
              description: "The description of deployment stack",
              args: { name: "description" },
            },
            {
              name: ["--parameters", "-p"],
              description:
                "Parameters may be supplied from a file using the @{path} syntax, a JSON string, or as <KEY=VALUE> pairs. Parameters are evaluated in order, so when a value is assigned twice, the latter value will be used. It is recommended that you supply your parameters file first, and then override selectively using KEY=VALUE syntax",
              args: { name: "parameters" },
            },
            {
              name: ["--query-string", "-q"],
              description:
                "The query string (a SAS token) to be used with the template-uri in the case of linked templates",
              args: { name: "query-string" },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
            {
              name: ["--template-file", "-f"],
              description:
                "A path to a template file or Bicep file in the file system",
              args: { name: "template-file" },
            },
            {
              name: ["--template-spec", "-s"],
              description: "The template spec resource id",
              args: { name: "template-spec" },
            },
            {
              name: ["--template-uri", "-u"],
              description: "A uri to a remote template file",
              args: { name: "template-uri" },
            },
            { name: "--yes", description: "Do not prompt for confirmation" },
          ],
        },
        {
          name: "delete",
          description:
            "Delete specified deployment stack from resource group scope",
          options: [
            {
              name: "--delete-all",
              description:
                "Flag to indicate delete rather than detach for the resources and resource groups",
            },
            {
              name: "--delete-resource-groups",
              description:
                "Flag to indicate delete rather than detach for the resource groups",
            },
            {
              name: "--delete-resources",
              description:
                "Flag to indicate delete rather than detach for the resources",
            },
            {
              name: "--id",
              description: "The deployment stack resource id",
              args: { name: "id" },
            },
            {
              name: ["--name", "-n"],
              description: "The deployment stack name",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "The resource group where the deployment stack exists",
              args: { name: "resource-group" },
            },
            { name: "--yes", description: "Do not prompt for confirmation" },
          ],
        },
        {
          name: "export",
          description:
            "Export the template used to create the deployment stack from resource group scope",
          options: [
            {
              name: "--id",
              description: "The deployment stack resource id",
              args: { name: "id" },
            },
            {
              name: ["--name", "-n"],
              description: "The deployment stack name",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "The resource group where the deployment stack exists",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "list",
          description: "List all deployment stacks in resource group",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "The resource group where the deployment stack exists",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description:
            "Get specified deployment stack from resource group scope",
          options: [
            {
              name: "--id",
              description: "The deployment stack resource id",
              args: { name: "id" },
            },
            {
              name: ["--name", "-n"],
              description: "The deployment stack name",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "The resource group where the deployment stack exists",
              args: { name: "resource-group" },
            },
          ],
        },
      ],
    },
    {
      name: "mg",
      description: "Manage Deployment Stacks at management group",
      subcommands: [
        {
          name: "create",
          description:
            "Create or update a deployment stack at management group scope",
          options: [
            {
              name: ["--deny-settings-mode", "--dm"],
              description:
                "Define which operations are denied on resources managed by the stack",
              args: {
                name: "deny-settings-mode",
                suggestions: ["denyDelete", "denyWriteAndDelete", "none"],
              },
              isRequired: true,
            },
            {
              name: ["--location", "-l"],
              description: "The location to store deployment stack",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: ["--management-group-id", "-m"],
              description: "The management group id to create stack at",
              args: { name: "management-group-id" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The name of the deployment stack",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--deny-settings-apply-to-child-scopes", "--cs"],
              description: "DenySettings will be applied to child scopes",
            },
            {
              name: "--delete-all",
              description:
                "Flag to indicate delete rather than detach for the resources and resource groups",
            },
            {
              name: "--delete-resource-groups",
              description:
                "Flag to indicate delete rather than detach for the resource groups",
            },
            {
              name: "--delete-resources",
              description:
                "Flag to indicate delete rather than detach for the resources",
            },
            {
              name: ["--deny-settings-excluded-actions", "--ea"],
              description:
                "List of role-based management operations that are excluded from the denySettings. Up to 200 actions are permitted",
              args: { name: "deny-settings-excluded-actions" },
            },
            {
              name: ["--deny-settings-excluded-principals", "--ep"],
              description:
                "List of AAD principal IDs excluded from the lock. Up to 5 principals are permitted",
              args: { name: "deny-settings-excluded-principals" },
            },
            {
              name: ["--deployment-subscription", "--ds"],
              description:
                "The scope at which the initial deployment should be created. If a scope is not specified, it will default to the scope of the deployment stack",
              args: { name: "deployment-subscription" },
            },
            {
              name: "--description",
              description: "The description of deployment stack",
              args: { name: "description" },
            },
            {
              name: ["--parameters", "-p"],
              description:
                "Parameters may be supplied from a file using the @{path} syntax, a JSON string, or as <KEY=VALUE> pairs. Parameters are evaluated in order, so when a value is assigned twice, the latter value will be used. It is recommended that you supply your parameters file first, and then override selectively using KEY=VALUE syntax",
              args: { name: "parameters" },
            },
            {
              name: ["--query-string", "-q"],
              description:
                "The query string (a SAS token) to be used with the template-uri in the case of linked templates",
              args: { name: "query-string" },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
            {
              name: ["--template-file", "-f"],
              description:
                "A path to a template file or Bicep file in the file system",
              args: { name: "template-file" },
            },
            {
              name: ["--template-spec", "-s"],
              description: "The template spec resource id",
              args: { name: "template-spec" },
            },
            {
              name: ["--template-uri", "-u"],
              description: "A uri to a remote template file",
              args: { name: "template-uri" },
            },
            { name: "--yes", description: "Do not prompt for confirmation" },
          ],
        },
        {
          name: "delete",
          description:
            "Delete specified deployment stack from management group scope",
          options: [
            {
              name: ["--management-group-id", "-m"],
              description: "The management group id to create stack at",
              args: { name: "management-group-id" },
              isRequired: true,
            },
            {
              name: "--delete-all",
              description:
                "Flag to indicate delete rather than detach for the resources and resource groups",
            },
            {
              name: "--delete-resource-groups",
              description:
                "Flag to indicate delete rather than detach for the resource groups",
            },
            {
              name: "--delete-resources",
              description:
                "Flag to indicate delete rather than detach for the resources",
            },
            {
              name: "--id",
              description: "The deployment stack resource id",
              args: { name: "id" },
            },
            {
              name: ["--name", "-n"],
              description: "The deployment stack name",
              args: { name: "name" },
            },
            { name: "--yes", description: "Do not prompt for confirmation" },
          ],
        },
        {
          name: "export",
          description:
            "Export the template used to create the deployment stack",
          options: [
            {
              name: ["--management-group-id", "-m"],
              description: "The management group id to create stack at",
              args: { name: "management-group-id" },
              isRequired: true,
            },
            {
              name: "--id",
              description: "The deployment stack resource id",
              args: { name: "id" },
            },
            {
              name: ["--name", "-n"],
              description: "The deployment stack name",
              args: { name: "name" },
            },
          ],
        },
        {
          name: "list",
          description: "List all deployment stacks in management group",
          options: [
            {
              name: ["--management-group-id", "-m"],
              description: "The management group id to create stack at",
              args: { name: "management-group-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description:
            "Get specified deployment stack from management group scope",
          options: [
            {
              name: ["--management-group-id", "-m"],
              description: "The management group id to create stack at",
              args: { name: "management-group-id" },
              isRequired: true,
            },
            {
              name: "--id",
              description: "The deployment stack resource id",
              args: { name: "id" },
            },
            {
              name: ["--name", "-n"],
              description: "The deployment stack name",
              args: { name: "name" },
            },
          ],
        },
      ],
    },
    {
      name: "sub",
      description: "Manage Deployment Stacks at subscription",
      subcommands: [
        {
          name: "create",
          description:
            "Create or update a deployment stack at subscription scope",
          options: [
            {
              name: ["--deny-settings-mode", "--dm"],
              description:
                "Define which operations are denied on resources managed by the stack",
              args: {
                name: "deny-settings-mode",
                suggestions: ["denyDelete", "denyWriteAndDelete", "none"],
              },
              isRequired: true,
            },
            {
              name: ["--location", "-l"],
              description: "The location to store deployment stack",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The name of the deployment stack",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--deny-settings-apply-to-child-scopes", "--cs"],
              description: "DenySettings will be applied to child scopes",
            },
            {
              name: "--delete-all",
              description:
                "Flag to indicate delete rather than detach for the resources and resource groups",
            },
            {
              name: "--delete-resource-groups",
              description:
                "Flag to indicate delete rather than detach for the resource groups",
            },
            {
              name: "--delete-resources",
              description:
                "Flag to indicate delete rather than detach for the resources",
            },
            {
              name: ["--deny-settings-excluded-actions", "--ea"],
              description:
                "List of role-based management operations that are excluded from the denySettings. Up to 200 actions are permitted",
              args: { name: "deny-settings-excluded-actions" },
            },
            {
              name: ["--deny-settings-excluded-principals", "--ep"],
              description:
                "List of AAD principal IDs excluded from the lock. Up to 5 principals are permitted",
              args: { name: "deny-settings-excluded-principals" },
            },
            {
              name: ["--deployment-resource-group", "--dr"],
              description:
                "The scope at which the initial deployment should be created. If a scope is not specified, it will default to the scope of the deployment stack",
              args: { name: "deployment-resource-group" },
            },
            {
              name: "--description",
              description: "The description of deployment stack",
              args: { name: "description" },
            },
            {
              name: ["--parameters", "-p"],
              description:
                "Parameters may be supplied from a file using the @{path} syntax, a JSON string, or as <KEY=VALUE> pairs. Parameters are evaluated in order, so when a value is assigned twice, the latter value will be used. It is recommended that you supply your parameters file first, and then override selectively using KEY=VALUE syntax",
              args: { name: "parameters" },
            },
            {
              name: ["--query-string", "-q"],
              description:
                "The query string (a SAS token) to be used with the template-uri in the case of linked templates",
              args: { name: "query-string" },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
            {
              name: ["--template-file", "-f"],
              description:
                "A path to a template file or Bicep file in the file system",
              args: { name: "template-file" },
            },
            {
              name: ["--template-spec", "-s"],
              description: "The template spec resource id",
              args: { name: "template-spec" },
            },
            {
              name: ["--template-uri", "-u"],
              description: "A uri to a remote template file",
              args: { name: "template-uri" },
            },
            { name: "--yes", description: "Do not prompt for confirmation" },
          ],
        },
        {
          name: "delete",
          description:
            "Delete specified deployment stack from subscription scope",
          options: [
            {
              name: "--delete-all",
              description:
                "Flag to indicate delete rather than detach for the resources and resource groups",
            },
            {
              name: "--delete-resource-groups",
              description:
                "Flag to indicate delete rather than detach for the resource groups",
            },
            {
              name: "--delete-resources",
              description:
                "Flag to indicate delete rather than detach for the resources",
            },
            {
              name: "--id",
              description: "The deployment stack resource id",
              args: { name: "id" },
            },
            {
              name: ["--name", "-n"],
              description: "The deployment stack name",
              args: { name: "name" },
            },
            { name: "--yes", description: "Do not prompt for confirmation" },
          ],
        },
        {
          name: "export",
          description:
            "Export the template used to create the deployment stack",
          options: [
            {
              name: "--id",
              description: "The deployment stack resource id",
              args: { name: "id" },
            },
            {
              name: ["--name", "-n"],
              description: "The deployment stack name",
              args: { name: "name" },
            },
          ],
        },
        {
          name: "list",
          description: "List all deployment stacks in subscription",
        },
        {
          name: "show",
          description: "Get specified deployment stack from subscription scope",
          options: [
            {
              name: "--id",
              description: "The deployment stack resource id",
              args: { name: "id" },
            },
            {
              name: ["--name", "-n"],
              description: "The deployment stack name",
              args: { name: "name" },
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
