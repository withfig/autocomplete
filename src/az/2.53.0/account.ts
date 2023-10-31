const completion: Fig.Spec = {
  name: "account",
  description: "Manage Azure subscription information",
  subcommands: [
    {
      name: "accept-ownership-status",
      description: "Accept subscription ownership status",
      options: [
        {
          name: "--subscription-id",
          description: "Subscription Id. Required",
          args: { name: "subscription-id" },
          isRequired: true,
        },
      ],
    },
    {
      name: "clear",
      description: "Clear all subscriptions from the CLI's local cache",
    },
    {
      name: "create",
      description: "Create a subscription",
      options: [
        {
          name: ["--enrollment-account-object-id", "--enrollment-account-name"],
          description:
            "The name of the enrollment account which should be used to create a subscription",
          args: { name: "enrollment-account-object-id" },
          isRequired: true,
        },
        {
          name: "--offer-type",
          description:
            "The offer type of the subscription. For example, MS-AZR-0017P (EnterpriseAgreement) and MS-AZR-0148P (EnterpriseAgreement devTest) are available",
          args: {
            name: "offer-type",
            suggestions: [
              "MS-AZR-0017P",
              "MS-AZR-0148P",
              "MS-AZR-USGOV-0015P",
              "MS-AZR-USGOV-0017P",
              "MS-AZR-USGOV-0148P",
            ],
          },
          isRequired: true,
        },
        {
          name: "--display-name",
          description: "The display name of the subscription",
          args: { name: "display-name" },
        },
        {
          name: "--owner-object-id",
          description:
            "The object id(s) of the owner(s) which should be granted access to the new subscription",
          args: { name: "owner-object-id" },
        },
        {
          name: "--owner-spn",
          description:
            "The service principal name(s) of the owner(s) which should be granted access to the new subscription",
          args: { name: "owner-spn" },
        },
        {
          name: "--owner-upn",
          description:
            "The user principal name(s) of owner(s) who should be granted access to the new subscription",
          args: { name: "owner-upn" },
        },
      ],
    },
    {
      name: "get-access-token",
      description: "Get a token for utilities to access Azure",
      options: [
        {
          name: ["--subscription", "--name", "-n", "-s"],
          description: "Name or ID of subscription",
          args: { name: "subscription" },
        },
        {
          name: "--resource",
          description: "Azure resource endpoints in AAD v1.0",
          args: { name: "resource" },
        },
        {
          name: "--resource-type",
          description: "Type of well-known resource",
          args: {
            name: "resource-type",
            suggestions: [
              "aad-graph",
              "arm",
              "batch",
              "data-lake",
              "media",
              "ms-graph",
              "oss-rdbms",
            ],
          },
        },
        {
          name: "--scope",
          description:
            "Space-separated AAD scopes in AAD v2.0. Default to Azure Resource Manager",
          args: { name: "scope" },
        },
        {
          name: ["--tenant", "-t"],
          description:
            "Tenant ID for which the token is acquired. Only available for user and service principal account, not for MSI or Cloud Shell account",
          args: { name: "tenant" },
        },
      ],
    },
    {
      name: "list",
      description:
        "Get a list of subscriptions for the logged in account. By default, only 'Enabled' subscriptions from the current cloud is shown",
      options: [
        {
          name: "--all",
          description:
            "List all subscriptions from all clouds, rather than just 'Enabled' ones",
        },
        {
          name: "--refresh",
          description: "Retrieve up-to-date subscriptions from server",
        },
      ],
    },
    {
      name: "list-locations",
      description: "List supported regions for the current subscription",
      options: [
        {
          name: "--include-extended-locations",
          description: "Whether to include extended locations",
          args: {
            name: "include-extended-locations",
            suggestions: [
              "0",
              "1",
              "f",
              "false",
              "n",
              "no",
              "t",
              "true",
              "y",
              "yes",
            ],
          },
        },
      ],
    },
    {
      name: "set",
      description: "Set a subscription to be the current active subscription",
      options: [
        {
          name: ["--subscription", "--name", "-n", "-s"],
          description: "Name or ID of subscription",
          args: { name: "subscription" },
          isRequired: true,
        },
      ],
    },
    {
      name: "show",
      description: "Get the details of a subscription",
      options: [
        {
          name: ["--subscription", "--name", "-n", "-s"],
          description: "Name or ID of subscription",
          args: { name: "subscription" },
        },
      ],
    },
    {
      name: "alias",
      description: "Manage subscription alias",
      subcommands: [
        {
          name: "create",
          description: "Create Alias Subscription",
          options: [
            {
              name: ["--name", "-n"],
              description: "Alias Name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--billing-scope",
              description:
                "Billing scope. It determines whether the subscription is Field-Led, Partner-Led or LegacyEA",
              args: { name: "billing-scope" },
            },
            {
              name: "--display-name",
              description: "The friendly name of the subscription",
              args: { name: "display-name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--reseller-id",
              description: "Reseller ID, basically MPN Id",
              args: { name: "reseller-id" },
            },
            {
              name: "--subscription-id",
              description:
                "This parameter can be used to create alias for existing subscription ID",
              args: { name: "subscription-id" },
            },
            {
              name: "--workload",
              description:
                "The workload type of the subscription. It can be either Production or DevTest",
              args: {
                name: "workload",
                suggestions: ["DevTest", "Production"],
              },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete Alias",
          options: [
            {
              name: ["--name", "-n"],
              description: "Alias Name",
              args: { name: "name" },
              isRequired: true,
            },
          ],
        },
        { name: "list", description: "List Alias Subscriptions" },
        {
          name: "show",
          description: "Get Alias Subscription",
          options: [
            {
              name: ["--name", "-n"],
              description: "Alias Name",
              args: { name: "name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the account alias is met",
          options: [
            {
              name: ["--name", "-n"],
              description: "Alias Name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--created",
              description:
                "Wait until created with 'provisioningState' at 'Succeeded'",
            },
            {
              name: "--custom",
              description:
                "Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']",
              args: { name: "custom" },
            },
            { name: "--deleted", description: "Wait until deleted" },
            { name: "--exists", description: "Wait until the resource exists" },
            {
              name: "--interval",
              description: "Polling interval in seconds",
              args: { name: "interval" },
            },
            {
              name: "--timeout",
              description: "Maximum wait in seconds",
              args: { name: "timeout" },
            },
            {
              name: "--updated",
              description:
                "Wait until updated with provisioningState at 'Succeeded'",
            },
          ],
        },
      ],
    },
    {
      name: "lock",
      description: "Manage Azure subscription level locks",
      subcommands: [
        {
          name: "create",
          description: "Create a subscription lock",
          options: [
            {
              name: ["--lock-type", "-t"],
              description: "The type of lock restriction",
              args: {
                name: "lock-type",
                suggestions: ["CanNotDelete", "ReadOnly"],
              },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the lock",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--notes",
              description: "Notes about this lock",
              args: { name: "notes" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a subscription lock",
          options: [
            {
              name: "--ids",
              description:
                'One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified',
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the lock",
              args: { name: "name" },
            },
          ],
        },
        {
          name: "list",
          description: "List lock information in the subscription",
          options: [
            {
              name: "--filter-string",
              description: "A query filter to use to restrict the results",
              args: { name: "filter-string" },
            },
          ],
        },
        {
          name: "show",
          description: "Show the details of a subscription lock",
          options: [
            {
              name: "--ids",
              description:
                'One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified',
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the lock",
              args: { name: "name" },
            },
          ],
        },
        {
          name: "update",
          description: "Update a subscription lock",
          options: [
            {
              name: "--ids",
              description:
                'One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified',
              args: { name: "ids" },
            },
            {
              name: ["--lock-type", "-t"],
              description: "The type of lock restriction",
              args: {
                name: "lock-type",
                suggestions: ["CanNotDelete", "ReadOnly"],
              },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the lock",
              args: { name: "name" },
            },
            {
              name: "--notes",
              description: "Notes about this lock",
              args: { name: "notes" },
            },
          ],
        },
      ],
    },
    {
      name: "management-group",
      description: "Manage Azure Management Groups",
      subcommands: [
        {
          name: "check-name-availability",
          description: "Check if a Management Group Name is Valid",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the management group",
              args: { name: "name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "create",
          description: "Create a new management group",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the management group",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--display-name", "-d"],
              description:
                "Sets the display name of the management group. If null, the group name is set as the display name",
              args: { name: "display-name" },
            },
            {
              name: "--no-register",
              description:
                "Skip registration for resource provider Microsoft.Management",
            },
            {
              name: ["--parent", "-p"],
              description:
                "Sets the parent of the management group. Can be the fully qualified id or the name of the management group. If null, the root tenant group is set as the parent",
              args: { name: "parent" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete an existing management group",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the management group",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--no-register",
              description:
                "Skip registration for resource provider Microsoft.Management",
            },
          ],
        },
        {
          name: "list",
          description: "List all management groups",
          options: [
            {
              name: "--no-register",
              description:
                "Skip registration for resource provider Microsoft.Management",
            },
          ],
        },
        {
          name: "show",
          description: "Get a specific management group",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "Name of the management group (the last segment of the resource ID). Do not use display name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--expand", "-e"],
              description:
                "If given, lists the children in the first level of hierarchy",
            },
            {
              name: "--no-register",
              description:
                "Skip registration for resource provider Microsoft.Management",
            },
            {
              name: ["--recurse", "-r"],
              description:
                "If given, lists the children in all levels of hierarchy",
            },
          ],
        },
        {
          name: "update",
          description: "Update an existing management group",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the management group",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: ["--display-name", "-d"],
              description:
                "Updates the display name of the management group. If null, no change is made",
              args: { name: "display-name" },
            },
            {
              name: "--force-string",
              description:
                "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
            },
            {
              name: ["--parent", "-p"],
              description:
                "Update the parent of the management group. Can be the fully qualified id or the name of the management group. If null, no change is made",
              args: { name: "parent" },
            },
            {
              name: "--remove",
              description:
                "Remove a property or an element from a list. Example: --remove property.list OR --remove propertyToRemove",
              args: { name: "remove" },
            },
            {
              name: "--set",
              description:
                "Update an object by specifying a property path and value to set. Example: --set property1.property2=",
              args: { name: "set" },
            },
          ],
        },
        {
          name: "entities",
          description:
            "Entity operations (Management Group and Subscriptions) for Management Groups",
          subcommands: [
            {
              name: "list",
              description: "List all entities for the authenticated user",
            },
          ],
        },
        {
          name: "hierarchy-settings",
          description:
            "Provide operations for hierarchy settings defined at the management group level. Settings can only be set on the root Management Group of the hierarchy",
          subcommands: [
            {
              name: "create",
              description:
                "Create hierarchy settings defined at the Management Group level",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the management group",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--default-management-group", "-m"],
                  description:
                    "Set the default Management Group under which new subscriptions get added in this tenant. Default setting is the Root Management Group",
                  args: { name: "default-management-group" },
                },
                {
                  name: ["--require-authorization-for-group-creation", "-r"],
                  description:
                    "Indicate whether RBAC access is required upon group creation under the root Management Group. True means user will require Microsoft.Management/managementGroups/write action on the root Management Group. Default setting is false",
                  args: { name: "require-authorization-for-group-creation" },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete the hierarchy settings defined at the Management Group level",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the management group",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "list",
              description:
                "Get all the hierarchy settings defined at the Management Group level",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the management group",
                  args: { name: "name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "update",
              description:
                "Update the hierarchy settings defined at the Management Group level",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the management group",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add" },
                },
                {
                  name: ["--default-management-group", "-m"],
                  description:
                    "Set the default Management Group under which new subscriptions get added in this tenant. Default setting is the Root Management Group",
                  args: { name: "default-management-group" },
                },
                {
                  name: "--force-string",
                  description:
                    "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
                },
                {
                  name: "--remove",
                  description:
                    "Remove a property or an element from a list. Example: --remove property.list OR --remove propertyToRemove",
                  args: { name: "remove" },
                },
                {
                  name: ["--require-authorization-for-group-creation", "-r"],
                  description:
                    "Indicate whether RBAC access is required upon group creation under the root Management Group. True means user will require Microsoft.Management/managementGroups/write action on the root Management Group. Default setting is false",
                  args: { name: "require-authorization-for-group-creation" },
                },
                {
                  name: "--set",
                  description:
                    "Update an object by specifying a property path and value to set. Example: --set property1.property2=",
                  args: { name: "set" },
                },
              ],
            },
          ],
        },
        {
          name: "subscription",
          description: "Subscription operations for Management Groups",
          subcommands: [
            {
              name: "add",
              description: "Add a subscription to a management group",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the management group",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--subscription", "-s"],
                  description: "Subscription Id or Name",
                  args: { name: "subscription" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "remove",
              description:
                "Remove an existing subscription from a management group",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the management group",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--subscription", "-s"],
                  description: "Subscription Id or Name",
                  args: { name: "subscription" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description:
                "Show the details of a subscription under a known management group",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the management group",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--subscription", "-s"],
                  description: "Subscription Id or Name",
                  args: { name: "subscription" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show-sub-under-mg",
              description: "Get the subscription under a management group",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the management group",
                  args: { name: "name" },
                  isRequired: true,
                },
              ],
            },
          ],
        },
        {
          name: "tenant-backfill",
          description:
            "Backfill Tenant Subscription Operations for Management Groups",
          subcommands: [
            {
              name: "get",
              description: "Get the backfill status for a tenant",
            },
            {
              name: "start",
              description: "Start backfilling subscriptions for a tenant",
            },
          ],
        },
      ],
    },
    {
      name: "subscription",
      description: "Manage subscriptions",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel subscription",
          options: [
            {
              name: ["--subscription-id", "--id"],
              description: "Subscription Id",
              args: { name: "subscription-id" },
              isRequired: true,
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "enable",
          description: "Enable subscription",
          options: [
            {
              name: ["--subscription-id", "--id"],
              description: "Subscription Id",
              args: { name: "subscription-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list",
          description: "Get all subscriptions for a tenant",
        },
        {
          name: "list-location",
          description:
            "This operation provides all the locations that are available for resource providers; however, each resource provider may support a subset of this list",
          options: [
            {
              name: ["--subscription-id", "--id"],
              description: "The ID of the target subscription",
              args: { name: "subscription-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "rename",
          description: "Rename subscription",
          options: [
            {
              name: ["--subscription-id", "--id"],
              description: "Subscription Id",
              args: { name: "subscription-id" },
              isRequired: true,
            },
            {
              name: ["--subscription-name", "--name", "-n"],
              description: "New subscription name",
              args: { name: "subscription-name" },
            },
          ],
        },
        {
          name: "show",
          description: "Get details about a specified subscription",
          options: [
            {
              name: ["--subscription-id", "--id"],
              description: "The ID of the target subscription",
              args: { name: "subscription-id" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "tenant",
      description: "Manage tenant",
      subcommands: [
        {
          name: "list",
          description: "Get the tenants for your account",
        },
      ],
    },
  ],
};

export default completion;
