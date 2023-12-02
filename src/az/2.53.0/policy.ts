const completion: Fig.Spec = {
  name: "policy",
  description: "Manage resource policies",
  subcommands: [
    {
      name: "assignment",
      description: "Manage resource policy assignments",
      subcommands: [
        {
          name: "create",
          description: "Create a resource policy assignment",
          options: [
            {
              name: "--description",
              description: "Description of the policy assignment",
              args: { name: "description" },
            },
            {
              name: "--display-name",
              description: "Display name of the policy assignment",
              args: { name: "display-name" },
            },
            {
              name: ["--enforcement-mode", "-e"],
              description:
                "Enforcement mode of the policy assignment, e.g. Default, DoNotEnforce. Please visit https://aka.ms/azure-policyAssignment-enforcement-mode for more information",
              args: {
                name: "enforcement-mode",
                suggestions: ["Default", "DoNotEnforce"],
              },
            },
            {
              name: "--identity-scope",
              description: "Scope that the system assigned identity can access",
              args: { name: "identity-scope" },
            },
            {
              name: ["--location", "-l"],
              description:
                "The location of the policy assignment. Only required when utilizing managed identity",
              args: { name: "location" },
            },
            {
              name: "--mi-system-assigned",
              description:
                "Provide this flag to use system assigned identity for policy assignment. Check out help for more examples",
              args: { name: "mi-system-assigned" },
            },
            {
              name: "--mi-user-assigned",
              description:
                "UserAssigned Identity Id to be used for policy assignment. Check out help for more examples",
              args: { name: "mi-user-assigned" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the new policy assignment",
              args: { name: "name" },
            },
            {
              name: "--not-scopes",
              description:
                "Space-separated scopes where the policy assignment does not apply",
              args: { name: "not-scopes" },
            },
            {
              name: ["--params", "-p"],
              description:
                "JSON formatted string or a path to a file or uri with parameter values of the policy rule",
              args: { name: "params" },
            },
            {
              name: "--policy",
              description:
                "Name or id of the policy definition. If not provided, a policy set definition parameter must be provided",
              args: { name: "policy" },
            },
            {
              name: ["--policy-set-definition", "-d"],
              description:
                "Name or id of the policy set definition. If not provided, a policy definition parameter must be provided",
              args: { name: "policy-set-definition" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "The resource group where the policy will be applied",
              args: { name: "resource-group" },
            },
            {
              name: "--role",
              description:
                "Role name or id that will be assigned to the managed identity",
              args: { name: "role" },
            },
            {
              name: "--scope",
              description: "Scope to which this policy assignment applies",
              args: { name: "scope" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a resource policy assignment",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the policy assignment",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "The resource group where the policy will be applied",
              args: { name: "resource-group" },
            },
            {
              name: "--scope",
              description:
                "Scope at which this policy assignment subcommand applies. Defaults to current context subscription",
              args: { name: "scope" },
            },
          ],
        },
        {
          name: "list",
          description: "List resource policy assignments",
          options: [
            {
              name: "--disable-scope-strict-match",
              description:
                "Include policy assignments either inherited from parent scope or at child scope",
              args: { name: "disable-scope-strict-match" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "The resource group where the policy will be applied",
              args: { name: "resource-group" },
            },
            {
              name: "--scope",
              description:
                "Scope at which this policy assignment subcommand applies. Defaults to current context subscription",
              args: { name: "scope" },
            },
          ],
        },
        {
          name: "show",
          description: "Show a resource policy assignment",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the policy assignment",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "The resource group where the policy will be applied",
              args: { name: "resource-group" },
            },
            {
              name: "--scope",
              description:
                "Scope at which this policy assignment subcommand applies. Defaults to current context subscription",
              args: { name: "scope" },
            },
          ],
        },
        {
          name: "update",
          description: "Update a resource policy assignment",
          options: [
            {
              name: "--description",
              description: "Description of the policy assignment",
              args: { name: "description" },
            },
            {
              name: "--display-name",
              description: "Display name of the policy assignment",
              args: { name: "display-name" },
            },
            {
              name: ["--enforcement-mode", "-e"],
              description:
                "Enforcement mode of the policy assignment, e.g. Default, DoNotEnforce. Please visit https://aka.ms/azure-policyAssignment-enforcement-mode for more information",
              args: {
                name: "enforcement-mode",
                suggestions: ["Default", "DoNotEnforce"],
              },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the policy assignment",
              args: { name: "name" },
            },
            {
              name: "--not-scopes",
              description:
                "Space-separated scopes where the policy assignment does not apply",
              args: { name: "not-scopes" },
            },
            {
              name: ["--params", "-p"],
              description:
                "JSON formatted string or a path to a file or uri with parameter values of the policy rule",
              args: { name: "params" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "The resource group where the policy will be applied",
              args: { name: "resource-group" },
            },
            {
              name: "--scope",
              description:
                "Scope at which this policy assignment subcommand applies. Defaults to current context subscription",
              args: { name: "scope" },
            },
          ],
        },
        {
          name: "identity",
          description: "Manage a policy assignment's managed identity",
          subcommands: [
            {
              name: "assign",
              description:
                "Add a system assigned identity or a user assigned identity to a policy assignment",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the policy assignment",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--identity-scope",
                  description:
                    "Scope that the system assigned identity can access",
                  args: { name: "identity-scope" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group where the policy will be applied",
                  args: { name: "resource-group" },
                },
                {
                  name: "--role",
                  description:
                    "Role name or id that will be assigned to the managed identity",
                  args: { name: "role" },
                },
                {
                  name: "--scope",
                  description:
                    "Scope at which this policy assignment subcommand applies. Defaults to current context subscription",
                  args: { name: "scope" },
                },
                {
                  name: "--system-assigned",
                  description:
                    "Provide this flag to use system assigned identity for policy assignment. Check out help for more examples",
                  args: { name: "system-assigned" },
                },
                {
                  name: "--user-assigned",
                  description:
                    "UserAssigned Identity Id to be used for policy assignment. Check out help for more examples",
                  args: { name: "user-assigned" },
                },
              ],
            },
            {
              name: "remove",
              description: "Remove a managed identity from a policy assignment",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the policy assignment",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group where the policy will be applied",
                  args: { name: "resource-group" },
                },
                {
                  name: "--scope",
                  description:
                    "Scope at which this policy assignment subcommand applies. Defaults to current context subscription",
                  args: { name: "scope" },
                },
              ],
            },
            {
              name: "show",
              description: "Show a policy assignment's managed identity",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the policy assignment",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group where the policy will be applied",
                  args: { name: "resource-group" },
                },
                {
                  name: "--scope",
                  description:
                    "Scope at which this policy assignment subcommand applies. Defaults to current context subscription",
                  args: { name: "scope" },
                },
              ],
            },
          ],
        },
        {
          name: "non-compliance-message",
          description: "Manage a policy assignment's non-compliance messages",
          subcommands: [
            {
              name: "create",
              description:
                "Add a non-compliance message to a policy assignment",
              options: [
                {
                  name: ["--message", "-m"],
                  description:
                    "Message that will be shown when a resource is denied by policy or evaluation details are inspected",
                  args: { name: "message" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the policy assignment",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--policy-definition-reference-id", "-r"],
                  description:
                    "Policy definition reference ID within the assigned initiative (policy set) that the message applies to",
                  args: { name: "policy-definition-reference-id" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group where the policy will be applied",
                  args: { name: "resource-group" },
                },
                {
                  name: "--scope",
                  description:
                    "Scope at which this policy assignment subcommand applies. Defaults to current context subscription",
                  args: { name: "scope" },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Remove one or more non-compliance messages from a policy assignment",
              options: [
                {
                  name: ["--message", "-m"],
                  description:
                    "Message that will be shown when a resource is denied by policy or evaluation details are inspected",
                  args: { name: "message" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the policy assignment",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--policy-definition-reference-id", "-r"],
                  description:
                    "Policy definition reference ID within the assigned initiative (policy set) that the message applies to",
                  args: { name: "policy-definition-reference-id" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group where the policy will be applied",
                  args: { name: "resource-group" },
                },
                {
                  name: "--scope",
                  description:
                    "Scope at which this policy assignment subcommand applies. Defaults to current context subscription",
                  args: { name: "scope" },
                },
              ],
            },
            {
              name: "list",
              description:
                "List the non-compliance messages for a policy assignment",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the policy assignment",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group where the policy will be applied",
                  args: { name: "resource-group" },
                },
                {
                  name: "--scope",
                  description:
                    "Scope at which this policy assignment subcommand applies. Defaults to current context subscription",
                  args: { name: "scope" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "attestation",
      description: "Manage resource policy attestations",
      subcommands: [
        {
          name: "create",
          description: "Create a policy attestation",
          options: [
            {
              name: ["--attestation-name", "--name", "-n"],
              description: "The name of the attestation",
              args: { name: "attestation-name" },
              isRequired: true,
            },
            {
              name: ["--policy-assignment-id", "--policy-assignment", "-a"],
              description:
                "The resource ID of the policy assignment that the attestation is setting the state for",
              args: { name: "policy-assignment-id" },
              isRequired: true,
            },
            {
              name: "--assessment-date",
              description: "The time the evidence was assessed",
              args: { name: "assessment-date" },
            },
            {
              name: "--comments",
              description:
                "Comments describing why this attestation was created",
              args: { name: "comments" },
            },
            {
              name: "--compliance-state",
              description:
                "The compliance state that should be set on the resource",
              args: {
                name: "compliance-state",
                suggestions: ["Compliant", "NonCompliant", "Unknown"],
              },
            },
            {
              name: "--definition-reference-id",
              description:
                "The policy definition reference ID from a policy set definition that the attestation is setting the state for. If the policy assignment assigns a policy set definition the attestation can choose a definition within the set definition with this property or omit this and set the state for the entire set definition",
              args: { name: "definition-reference-id" },
            },
            {
              name: "--evidence",
              description:
                "The evidence supporting the compliance state set in this attestation",
              args: { name: "evidence" },
            },
            {
              name: "--expires-on",
              description: "The time the compliance state should expire",
              args: { name: "expires-on" },
            },
            {
              name: "--metadata",
              description:
                "Additional metadata in space-separated key=value pairs for an attestation. This overwrites any existing metadata for the attestation",
              args: { name: "metadata" },
            },
            {
              name: "--namespace",
              description: "Provider namespace (Ex: Microsoft.Provider)",
              args: { name: "namespace" },
            },
            {
              name: "--owner",
              description:
                "The person responsible for setting the state of the resource. This value is typically an Azure Active Directory object ID",
              args: { name: "owner" },
            },
            {
              name: "--parent",
              description:
                "The parent path (Ex: resourceTypeA/nameA/resourceTypeB/nameB)",
              args: { name: "parent" },
            },
            {
              name: ["--resource-id", "--resource"],
              description:
                "Resource ID or resource name. If a name is given, please provide the resource group and other relevant resource id arguments",
              args: { name: "resource-id" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-type",
              description: "Resource type (Ex: resourceTypeC)",
              args: { name: "resource-type" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete an existing policy attestation",
          options: [
            {
              name: ["--attestation-name", "--name", "-n"],
              description: "The name of the attestation",
              args: { name: "attestation-name" },
              isRequired: true,
            },
            {
              name: "--namespace",
              description: "Provider namespace (Ex: Microsoft.Provider)",
              args: { name: "namespace" },
            },
            {
              name: "--parent",
              description:
                "The parent path (Ex: resourceTypeA/nameA/resourceTypeB/nameB)",
              args: { name: "parent" },
            },
            {
              name: ["--resource-id", "--resource"],
              description:
                "Resource ID or resource name. If a name is given, please provide the resource group and other relevant resource id arguments",
              args: { name: "resource-id" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-type",
              description: "Resource type (Ex: resourceTypeC)",
              args: { name: "resource-type" },
            },
          ],
        },
        {
          name: "list",
          description: "List all attestations for a resource",
          options: [
            {
              name: "--filter",
              description: "OData filter expression",
              args: { name: "filter" },
            },
            {
              name: ["--resource-id", "--resource"],
              description: "Resource ID",
              args: { name: "resource-id" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--top",
              description: "Maximum number of records to return",
              args: { name: "top" },
            },
          ],
        },
        {
          name: "show",
          description: "Get a policy attestation",
          options: [
            {
              name: ["--attestation-name", "--name", "-n"],
              description: "The name of the attestation",
              args: { name: "attestation-name" },
              isRequired: true,
            },
            {
              name: "--namespace",
              description: "Provider namespace (Ex: Microsoft.Provider)",
              args: { name: "namespace" },
            },
            {
              name: "--parent",
              description:
                "The parent path (Ex: resourceTypeA/nameA/resourceTypeB/nameB)",
              args: { name: "parent" },
            },
            {
              name: ["--resource-id", "--resource"],
              description:
                "Resource ID or resource name. If a name is given, please provide the resource group and other relevant resource id arguments",
              args: { name: "resource-id" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-type",
              description: "Resource type (Ex: resourceTypeC)",
              args: { name: "resource-type" },
            },
          ],
        },
        {
          name: "update",
          description: "Update an existing policy attestation",
          options: [
            {
              name: ["--attestation-name", "--name", "-n"],
              description: "The name of the attestation",
              args: { name: "attestation-name" },
              isRequired: true,
            },
            {
              name: "--assessment-date",
              description: "The time the evidence was assessed",
              args: { name: "assessment-date" },
            },
            {
              name: "--comments",
              description:
                "Comments describing why this attestation was created",
              args: { name: "comments" },
            },
            {
              name: "--compliance-state",
              description:
                "The compliance state that should be set on the resource",
              args: {
                name: "compliance-state",
                suggestions: ["Compliant", "NonCompliant", "Unknown"],
              },
            },
            {
              name: "--definition-reference-id",
              description:
                "The policy definition reference ID from a policy set definition that the attestation is setting the state for. If the policy assignment assigns a policy set definition the attestation can choose a definition within the set definition with this property or omit this and set the state for the entire set definition",
              args: { name: "definition-reference-id" },
            },
            {
              name: "--evidence",
              description:
                "The evidence supporting the compliance state set in this attestation",
              args: { name: "evidence" },
            },
            {
              name: "--expires-on",
              description: "The time the compliance state should expire",
              args: { name: "expires-on" },
            },
            {
              name: "--metadata",
              description:
                "Additional metadata in space-separated key=value pairs for an attestation. This overwrites any existing metadata for the attestation",
              args: { name: "metadata" },
            },
            {
              name: "--namespace",
              description: "Provider namespace (Ex: Microsoft.Provider)",
              args: { name: "namespace" },
            },
            {
              name: "--owner",
              description:
                "The person responsible for setting the state of the resource. This value is typically an Azure Active Directory object ID",
              args: { name: "owner" },
            },
            {
              name: "--parent",
              description:
                "The parent path (Ex: resourceTypeA/nameA/resourceTypeB/nameB)",
              args: { name: "parent" },
            },
            {
              name: ["--policy-assignment-id", "--policy-assignment", "-a"],
              description:
                "The resource ID of the policy assignment that the attestation is setting the state for",
              args: { name: "policy-assignment-id" },
            },
            {
              name: ["--resource-id", "--resource"],
              description:
                "Resource ID or resource name. If a name is given, please provide the resource group and other relevant resource id arguments",
              args: { name: "resource-id" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-type",
              description: "Resource type (Ex: resourceTypeC)",
              args: { name: "resource-type" },
            },
          ],
        },
      ],
    },
    {
      name: "definition",
      description: "Manage resource policy definitions",
      subcommands: [
        {
          name: "create",
          description: "Create a policy definition",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the new policy definition",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "Description of policy definition",
              args: { name: "description" },
            },
            {
              name: "--display-name",
              description: "Display name of policy definition",
              args: { name: "display-name" },
            },
            {
              name: "--management-group",
              description:
                "Name of the management group the new policy definition can be assigned in",
              args: { name: "management-group" },
            },
            {
              name: "--metadata",
              description: "Metadata in space-separated key=value pairs",
              args: { name: "metadata" },
            },
            {
              name: ["--mode", "-m"],
              description:
                "Mode of the policy definition, e.g. All, Indexed. Please visit https://aka.ms/azure-policy-mode for more information",
              args: { name: "mode" },
            },
            {
              name: "--params",
              description:
                "JSON formatted string or a path to a file or uri with parameter definitions",
              args: { name: "params" },
            },
            {
              name: "--rules",
              description:
                "Policy rules in JSON format, or a path to a file containing JSON rules",
              args: { name: "rules" },
            },
            {
              name: "--subscription",
              description:
                "Name or id of the subscription the new policy definition can be assigned in",
              args: { name: "subscription" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a policy definition",
          options: [
            {
              name: ["--name", "-n"],
              description: "The policy definition name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--management-group",
              description:
                "The name of the management group of the policy [set] definition. This parameter is required if your policy set is scoped to a management group",
              args: { name: "management-group" },
            },
            {
              name: "--subscription",
              description: "The subscription id of the policy [set] definition",
              args: { name: "subscription" },
            },
          ],
        },
        {
          name: "list",
          description: "List policy definitions",
          options: [
            {
              name: "--management-group",
              description:
                "The name of the management group of the policy [set] definition. This parameter is required if your policy set is scoped to a management group",
              args: { name: "management-group" },
            },
            {
              name: "--subscription",
              description: "The subscription id of the policy [set] definition",
              args: { name: "subscription" },
            },
          ],
        },
        {
          name: "show",
          description: "Show a policy definition",
          options: [
            {
              name: ["--name", "-n"],
              description: "The policy definition name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--management-group",
              description:
                "The name of the management group of the policy [set] definition. This parameter is required if your policy set is scoped to a management group",
              args: { name: "management-group" },
            },
            {
              name: "--subscription",
              description: "The subscription id of the policy [set] definition",
              args: { name: "subscription" },
            },
          ],
        },
        {
          name: "update",
          description: "Update a policy definition",
          options: [
            {
              name: ["--name", "-n"],
              description: "The policy definition name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "Description of policy definition",
              args: { name: "description" },
            },
            {
              name: "--display-name",
              description: "Display name of policy definition",
              args: { name: "display-name" },
            },
            {
              name: "--management-group",
              description:
                "The name of the management group of the policy [set] definition. This parameter is required if your policy set is scoped to a management group",
              args: { name: "management-group" },
            },
            {
              name: "--metadata",
              description: "Metadata in space-separated key=value pairs",
              args: { name: "metadata" },
            },
            {
              name: ["--mode", "-m"],
              description:
                "Mode of the policy definition, e.g. All, Indexed. Please visit https://aka.ms/azure-policy-mode for more information",
              args: { name: "mode" },
            },
            {
              name: "--params",
              description:
                "JSON formatted string or a path to a file or uri with parameter definitions",
              args: { name: "params" },
            },
            {
              name: "--rules",
              description:
                "JSON formatted string or a path to a file with such content",
              args: { name: "rules" },
            },
            {
              name: "--subscription",
              description: "The subscription id of the policy [set] definition",
              args: { name: "subscription" },
            },
          ],
        },
      ],
    },
    {
      name: "event",
      description: "Manage policy events",
      subcommands: [
        {
          name: "list",
          description: "List policy events",
          options: [
            {
              name: "--apply",
              description:
                "Apply expression for aggregations using OData notation",
              args: { name: "apply" },
            },
            {
              name: "--filter",
              description: "Filter expression using OData notation",
              args: { name: "filter" },
            },
            {
              name: "--from",
              description:
                "ISO 8601 formatted timestamp specifying the start time of the interval to query",
              args: { name: "from" },
            },
            {
              name: ["--management-group", "-m"],
              description: "Name of management group",
              args: { name: "management-group" },
            },
            {
              name: "--namespace",
              description: "Provider namespace (Ex: Microsoft.Provider)",
              args: { name: "namespace" },
            },
            {
              name: "--order-by",
              description: "Ordering expression using OData notation",
              args: { name: "order-by" },
            },
            {
              name: "--parent",
              description:
                "The parent path (Ex: resourceTypeA/nameA/resourceTypeB/nameB)",
              args: { name: "parent" },
            },
            {
              name: ["--policy-assignment", "-a"],
              description: "Name of policy assignment",
              args: { name: "policy-assignment" },
            },
            {
              name: ["--policy-definition", "-d"],
              description: "Name of policy definition",
              args: { name: "policy-definition" },
            },
            {
              name: ["--policy-set-definition", "-s"],
              description: "Name of policy set definition",
              args: { name: "policy-set-definition" },
            },
            {
              name: "--resource",
              description:
                "Resource ID or resource name. If a name is given, please provide the resource group and other relevant resource id arguments",
              args: { name: "resource" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-type",
              description: "Resource type (Ex: resourceTypeC)",
              args: { name: "resource-type" },
            },
            {
              name: "--select",
              description: "Select expression using OData notation",
              args: { name: "select" },
            },
            {
              name: "--to",
              description:
                "ISO 8601 formatted timestamp specifying the end time of the interval to query",
              args: { name: "to" },
            },
            {
              name: "--top",
              description: "Maximum number of records to return",
              args: { name: "top" },
            },
          ],
        },
      ],
    },
    {
      name: "exemption",
      description: "Manage resource policy exemptions",
      subcommands: [
        {
          name: "create",
          description: "Create a policy exemption",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the new policy exemption",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "Description of policy exemption",
              args: { name: "description" },
            },
            {
              name: "--display-name",
              description: "Display name of the policy exemption",
              args: { name: "display-name" },
            },
            {
              name: ["--exemption-category", "-e"],
              description:
                "The policy exemption category of the policy exemption",
              args: { name: "exemption-category" },
            },
            {
              name: "--expires-on",
              description:
                "The expiration date and time (in UTC ISO 8601 format yyyy-MM-ddTHH:mm:ssZ) of the policy exemption",
              args: { name: "expires-on" },
            },
            {
              name: "--metadata",
              description: "Metadata in space-separated key=value pairs",
              args: { name: "metadata" },
            },
            {
              name: ["--policy-assignment", "-a"],
              description:
                "The referenced policy assignment Id for the policy exemption",
              args: { name: "policy-assignment" },
            },
            {
              name: ["--policy-definition-reference-ids", "-r"],
              description:
                "The policy definition reference ids to exempt in the initiative (policy set)",
              args: { name: "policy-definition-reference-ids" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "The resource group where the policy will be applied",
              args: { name: "resource-group" },
            },
            {
              name: "--scope",
              description: "Scope to which this policy exemption applies",
              args: { name: "scope" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a policy exemption",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the policy exemption",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "The resource group where the policy will be applied",
              args: { name: "resource-group" },
            },
            {
              name: "--scope",
              description: "Scope to which this policy exemption applies",
              args: { name: "scope" },
            },
          ],
        },
        {
          name: "list",
          description: "List policy exemptions",
          options: [
            {
              name: ["--disable-scope-strict-match", "-i"],
              description:
                "Include policy exemptions either inherited from parent scope or at child scope",
              args: { name: "disable-scope-strict-match" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "The resource group where the policy will be applied",
              args: { name: "resource-group" },
            },
            {
              name: "--scope",
              description: "Scope to which this policy exemption applies",
              args: { name: "scope" },
            },
          ],
        },
        {
          name: "show",
          description: "Show a policy exemption",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the policy exemption",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "The resource group where the policy will be applied",
              args: { name: "resource-group" },
            },
            {
              name: "--scope",
              description: "Scope to which this policy exemption applies",
              args: { name: "scope" },
            },
          ],
        },
        {
          name: "update",
          description: "Update a policy exemption",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the policy exemption",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "Description of policy exemption",
              args: { name: "description" },
            },
            {
              name: "--display-name",
              description: "Display name of the policy exemption",
              args: { name: "display-name" },
            },
            {
              name: ["--exemption-category", "-e"],
              description:
                "The policy exemption category of the policy exemption",
              args: { name: "exemption-category" },
            },
            {
              name: "--expires-on",
              description:
                "The expiration date and time (in UTC ISO 8601 format yyyy-MM-ddTHH:mm:ssZ) of the policy exemption",
              args: { name: "expires-on" },
            },
            {
              name: "--metadata",
              description: "Metadata in space-separated key=value pairs",
              args: { name: "metadata" },
            },
            {
              name: ["--policy-definition-reference-ids", "-r"],
              description:
                "The policy definition reference ids to exempt in the initiative (policy set)",
              args: { name: "policy-definition-reference-ids" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "The resource group where the policy will be applied",
              args: { name: "resource-group" },
            },
            {
              name: "--scope",
              description: "Scope to which this policy exemption applies",
              args: { name: "scope" },
            },
          ],
        },
      ],
    },
    {
      name: "metadata",
      description: "Get policy metadata resources",
      subcommands: [
        {
          name: "list",
          description: "List policy metadata resources",
          options: [
            {
              name: "--top",
              description: "Maximum number of records to return",
              args: { name: "top" },
            },
          ],
        },
        {
          name: "show",
          description: "Get a single policy metadata resource",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the metadata resource",
              args: { name: "name" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "remediation",
      description: "Manage resource policy remediations",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel a resource policy remediation",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the remediation",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--management-group", "-m"],
              description: "Name of management group",
              args: { name: "management-group" },
            },
            {
              name: "--namespace",
              description: "Provider namespace (Ex: Microsoft.Provider)",
              args: { name: "namespace" },
            },
            {
              name: "--parent",
              description:
                "The parent path (Ex: resourceTypeA/nameA/resourceTypeB/nameB)",
              args: { name: "parent" },
            },
            {
              name: "--resource",
              description:
                "Resource ID or resource name. If a name is given, please provide the resource group and other relevant resource id arguments",
              args: { name: "resource" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-type",
              description: "Resource type (Ex: resourceTypeC)",
              args: { name: "resource-type" },
            },
          ],
        },
        {
          name: "create",
          description: "Create a resource policy remediation",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the remediation",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--policy-assignment", "-a"],
              description: "Name or resource ID of the policy assignment",
              args: { name: "policy-assignment" },
              isRequired: true,
            },
            {
              name: "--definition-reference-id",
              description:
                "Policy definition reference ID inside the policy set definition. Only required when the policy assignment is assigning a policy set definition",
              args: { name: "definition-reference-id" },
            },
            {
              name: "--location-filters",
              description:
                "Space separated list of resource locations that should be remediated (Ex: centralus westeurope)",
              args: { name: "location-filters" },
            },
            {
              name: ["--management-group", "-m"],
              description: "Name of management group",
              args: { name: "management-group" },
            },
            {
              name: "--namespace",
              description: "Provider namespace (Ex: Microsoft.Provider)",
              args: { name: "namespace" },
            },
            {
              name: "--parent",
              description:
                "The parent path (Ex: resourceTypeA/nameA/resourceTypeB/nameB)",
              args: { name: "parent" },
            },
            {
              name: "--resource",
              description:
                "Resource ID or resource name. If a name is given, please provide the resource group and other relevant resource id arguments",
              args: { name: "resource" },
            },
            {
              name: "--resource-discovery-mode",
              description:
                "The way resources to remediate are discovered. Defaults to ExistingNonCompliant if not specified",
              args: {
                name: "resource-discovery-mode",
                suggestions: ["ExistingNonCompliant", "ReEvaluateCompliance"],
              },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-type",
              description: "Resource type (Ex: resourceTypeC)",
              args: { name: "resource-type" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a resource policy remediation",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the remediation",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--management-group", "-m"],
              description: "Name of management group",
              args: { name: "management-group" },
            },
            {
              name: "--namespace",
              description: "Provider namespace (Ex: Microsoft.Provider)",
              args: { name: "namespace" },
            },
            {
              name: "--parent",
              description:
                "The parent path (Ex: resourceTypeA/nameA/resourceTypeB/nameB)",
              args: { name: "parent" },
            },
            {
              name: "--resource",
              description:
                "Resource ID or resource name. If a name is given, please provide the resource group and other relevant resource id arguments",
              args: { name: "resource" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-type",
              description: "Resource type (Ex: resourceTypeC)",
              args: { name: "resource-type" },
            },
          ],
        },
        {
          name: "list",
          description: "List resource policy remediations",
          options: [
            {
              name: ["--management-group", "-m"],
              description: "Name of management group",
              args: { name: "management-group" },
            },
            {
              name: "--namespace",
              description: "Provider namespace (Ex: Microsoft.Provider)",
              args: { name: "namespace" },
            },
            {
              name: "--parent",
              description:
                "The parent path (Ex: resourceTypeA/nameA/resourceTypeB/nameB)",
              args: { name: "parent" },
            },
            {
              name: "--resource",
              description:
                "Resource ID or resource name. If a name is given, please provide the resource group and other relevant resource id arguments",
              args: { name: "resource" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-type",
              description: "Resource type (Ex: resourceTypeC)",
              args: { name: "resource-type" },
            },
          ],
        },
        {
          name: "show",
          description: "Show a resource policy remediation",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the remediation",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--management-group", "-m"],
              description: "Name of management group",
              args: { name: "management-group" },
            },
            {
              name: "--namespace",
              description: "Provider namespace (Ex: Microsoft.Provider)",
              args: { name: "namespace" },
            },
            {
              name: "--parent",
              description:
                "The parent path (Ex: resourceTypeA/nameA/resourceTypeB/nameB)",
              args: { name: "parent" },
            },
            {
              name: "--resource",
              description:
                "Resource ID or resource name. If a name is given, please provide the resource group and other relevant resource id arguments",
              args: { name: "resource" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-type",
              description: "Resource type (Ex: resourceTypeC)",
              args: { name: "resource-type" },
            },
          ],
        },
        {
          name: "deployment",
          description: "Manage resource policy remediation deployments",
          subcommands: [
            {
              name: "list",
              description:
                "Lists deployments for a resource policy remediation",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the remediation",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--management-group", "-m"],
                  description: "Name of management group",
                  args: { name: "management-group" },
                },
                {
                  name: "--namespace",
                  description: "Provider namespace (Ex: Microsoft.Provider)",
                  args: { name: "namespace" },
                },
                {
                  name: "--parent",
                  description:
                    "The parent path (Ex: resourceTypeA/nameA/resourceTypeB/nameB)",
                  args: { name: "parent" },
                },
                {
                  name: "--resource",
                  description:
                    "Resource ID or resource name. If a name is given, please provide the resource group and other relevant resource id arguments",
                  args: { name: "resource" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--resource-type",
                  description: "Resource type (Ex: resourceTypeC)",
                  args: { name: "resource-type" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "set-definition",
      description: "Manage resource policy set definitions",
      subcommands: [
        {
          name: "create",
          description: "Create a policy set definition",
          options: [
            {
              name: "--definitions",
              description:
                "Policy definitions in JSON format, or a path to a file or URI containing JSON rules",
              args: { name: "definitions" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the new policy set definition",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--definition-groups",
              description:
                "JSON formatted string or a path to a file or uri containing policy definition groups. Groups are used to organize policy definitions within a policy set",
              args: { name: "definition-groups" },
            },
            {
              name: "--description",
              description: "Description of policy set definition",
              args: { name: "description" },
            },
            {
              name: "--display-name",
              description: "Display name of policy set definition",
              args: { name: "display-name" },
            },
            {
              name: "--management-group",
              description:
                "Name of management group the new policy set definition can be assigned in",
              args: { name: "management-group" },
            },
            {
              name: "--metadata",
              description: "Metadata in space-separated key=value pairs",
              args: { name: "metadata" },
            },
            {
              name: "--params",
              description:
                "JSON formatted string or a path to a file or uri with parameter definitions",
              args: { name: "params" },
            },
            {
              name: "--subscription",
              description:
                "Name or id of the subscription the new policy set definition can be assigned in",
              args: { name: "subscription" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a policy set definition",
          options: [
            {
              name: ["--name", "-n"],
              description: "The policy set definition name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--management-group",
              description:
                "The name of the management group of the policy [set] definition. This parameter is required if your policy set is scoped to a management group",
              args: { name: "management-group" },
            },
            {
              name: "--subscription",
              description: "The subscription id of the policy [set] definition",
              args: { name: "subscription" },
            },
          ],
        },
        {
          name: "list",
          description: "List policy set definitions",
          options: [
            {
              name: "--management-group",
              description:
                "The name of the management group of the policy [set] definition. This parameter is required if your policy set is scoped to a management group",
              args: { name: "management-group" },
            },
            {
              name: "--subscription",
              description: "The subscription id of the policy [set] definition",
              args: { name: "subscription" },
            },
          ],
        },
        {
          name: "show",
          description: "Show a policy set definition",
          options: [
            {
              name: ["--name", "-n"],
              description: "The policy set definition name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--management-group",
              description:
                "The name of the management group of the policy [set] definition. This parameter is required if your policy set is scoped to a management group",
              args: { name: "management-group" },
            },
            {
              name: "--subscription",
              description: "The subscription id of the policy [set] definition",
              args: { name: "subscription" },
            },
          ],
        },
        {
          name: "update",
          description: "Update a policy set definition",
          options: [
            {
              name: ["--name", "-n"],
              description: "The policy set definition name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--definition-groups",
              description:
                "JSON formatted string or a path to a file or uri containing policy definition groups. Groups are used to organize policy definitions within a policy set",
              args: { name: "definition-groups" },
            },
            {
              name: "--definitions",
              description:
                "JSON formatted string or a path to a file or uri containing definitions",
              args: { name: "definitions" },
            },
            {
              name: "--description",
              description: "Description of policy set definition",
              args: { name: "description" },
            },
            {
              name: "--display-name",
              description: "Display name of policy set definition",
              args: { name: "display-name" },
            },
            {
              name: "--management-group",
              description:
                "The name of the management group of the policy [set] definition. This parameter is required if your policy set is scoped to a management group",
              args: { name: "management-group" },
            },
            {
              name: "--metadata",
              description: "Metadata in space-separated key=value pairs",
              args: { name: "metadata" },
            },
            {
              name: "--params",
              description:
                "JSON formatted string or a path to a file or uri with parameter definitions",
              args: { name: "params" },
            },
            {
              name: "--subscription",
              description: "The subscription id of the policy [set] definition",
              args: { name: "subscription" },
            },
          ],
        },
      ],
    },
    {
      name: "state",
      description: "Manage policy compliance states",
      subcommands: [
        {
          name: "list",
          description: "List policy compliance states",
          options: [
            {
              name: "--all",
              description:
                "Within the specified time interval, get all policy states instead of the latest only",
            },
            {
              name: "--apply",
              description:
                "Apply expression for aggregations using OData notation",
              args: { name: "apply" },
            },
            {
              name: "--expand",
              description: "Expand expression using OData notation",
              args: { name: "expand" },
            },
            {
              name: "--filter",
              description: "Filter expression using OData notation",
              args: { name: "filter" },
            },
            {
              name: "--from",
              description:
                "ISO 8601 formatted timestamp specifying the start time of the interval to query",
              args: { name: "from" },
            },
            {
              name: ["--management-group", "-m"],
              description: "Name of management group",
              args: { name: "management-group" },
            },
            {
              name: "--namespace",
              description: "Provider namespace (Ex: Microsoft.Provider)",
              args: { name: "namespace" },
            },
            {
              name: "--order-by",
              description: "Ordering expression using OData notation",
              args: { name: "order-by" },
            },
            {
              name: "--parent",
              description:
                "The parent path (Ex: resourceTypeA/nameA/resourceTypeB/nameB)",
              args: { name: "parent" },
            },
            {
              name: ["--policy-assignment", "-a"],
              description: "Name of policy assignment",
              args: { name: "policy-assignment" },
            },
            {
              name: ["--policy-definition", "-d"],
              description: "Name of policy definition",
              args: { name: "policy-definition" },
            },
            {
              name: ["--policy-set-definition", "-s"],
              description: "Name of policy set definition",
              args: { name: "policy-set-definition" },
            },
            {
              name: "--resource",
              description:
                "Resource ID or resource name. If a name is given, please provide the resource group and other relevant resource id arguments",
              args: { name: "resource" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-type",
              description: "Resource type (Ex: resourceTypeC)",
              args: { name: "resource-type" },
            },
            {
              name: "--select",
              description: "Select expression using OData notation",
              args: { name: "select" },
            },
            {
              name: "--to",
              description:
                "ISO 8601 formatted timestamp specifying the end time of the interval to query",
              args: { name: "to" },
            },
            {
              name: "--top",
              description: "Maximum number of records to return",
              args: { name: "top" },
            },
          ],
        },
        {
          name: "summarize",
          description: "Summarize policy compliance states",
          options: [
            {
              name: "--filter",
              description: "Filter expression using OData notation",
              args: { name: "filter" },
            },
            {
              name: "--from",
              description:
                "ISO 8601 formatted timestamp specifying the start time of the interval to query",
              args: { name: "from" },
            },
            {
              name: ["--management-group", "-m"],
              description: "Name of management group",
              args: { name: "management-group" },
            },
            {
              name: "--namespace",
              description: "Provider namespace (Ex: Microsoft.Provider)",
              args: { name: "namespace" },
            },
            {
              name: "--parent",
              description:
                "The parent path (Ex: resourceTypeA/nameA/resourceTypeB/nameB)",
              args: { name: "parent" },
            },
            {
              name: ["--policy-assignment", "-a"],
              description: "Name of policy assignment",
              args: { name: "policy-assignment" },
            },
            {
              name: ["--policy-definition", "-d"],
              description: "Name of policy definition",
              args: { name: "policy-definition" },
            },
            {
              name: ["--policy-set-definition", "-s"],
              description: "Name of policy set definition",
              args: { name: "policy-set-definition" },
            },
            {
              name: "--resource",
              description:
                "Resource ID or resource name. If a name is given, please provide the resource group and other relevant resource id arguments",
              args: { name: "resource" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-type",
              description: "Resource type (Ex: resourceTypeC)",
              args: { name: "resource-type" },
            },
            {
              name: "--to",
              description:
                "ISO 8601 formatted timestamp specifying the end time of the interval to query",
              args: { name: "to" },
            },
            {
              name: "--top",
              description: "Maximum number of records to return",
              args: { name: "top" },
            },
          ],
        },
        {
          name: "trigger-scan",
          description: "Trigger a policy compliance evaluation for a scope",
          options: [
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
