const completion: Fig.Spec = {
  name: "blueprint",
  description: "Commands to manage blueprint",
  subcommands: [
    {
      name: "artifact",
      description: "Commands to manage blueprint artifact",
      subcommands: [
        {
          name: "delete",
          description: "Delete a blueprint artifact",
          options: [
            {
              name: "--blueprint-name",
              description: "Name of the blueprint definition",
              args: { name: "blueprint-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the blueprint artifact",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--management-group", "-m"],
              description:
                "Use management group for the scope of the blueprint",
              args: { name: "management-group" },
            },
            {
              name: ["--subscription", "-s"],
              description:
                "Use subscription for the scope of the blueprint. If --management-group is not specified, --subscription value or the default subscription will be used as the scope",
              args: { name: "subscription" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "List artifacts for a given blueprint definition",
          options: [
            {
              name: "--blueprint-name",
              description: "Name of the blueprint definition",
              args: { name: "blueprint-name" },
              isRequired: true,
            },
            {
              name: ["--management-group", "-m"],
              description:
                "Use management group for the scope of the blueprint",
              args: { name: "management-group" },
            },
            {
              name: "--max-items",
              description:
                "Total number of items to return in the command's output. If the total number of items available is more than the value specified, a token is provided in the command's output. To resume pagination, provide the token value in --next-token argument of a subsequent command",
              args: { name: "max-items" },
            },
            {
              name: "--next-token",
              description:
                "Token to specify where to start paginating. This is the token value from a previously truncated response",
              args: { name: "next-token" },
            },
            {
              name: ["--subscription", "-s"],
              description:
                "Use subscription for the scope of the blueprint. If --management-group is not specified, --subscription value or the default subscription will be used as the scope",
              args: { name: "subscription" },
            },
          ],
        },
        {
          name: "show",
          description: "Get a blueprint artifact",
          options: [
            {
              name: "--blueprint-name",
              description: "Name of the blueprint definition",
              args: { name: "blueprint-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the blueprint artifact",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--management-group", "-m"],
              description:
                "Use management group for the scope of the blueprint",
              args: { name: "management-group" },
            },
            {
              name: ["--subscription", "-s"],
              description:
                "Use subscription for the scope of the blueprint. If --management-group is not specified, --subscription value or the default subscription will be used as the scope",
              args: { name: "subscription" },
            },
          ],
        },
        {
          name: "policy",
          description:
            "Commands to manage blueprint policy assignment artifact",
          subcommands: [
            {
              name: "create",
              description: "Create blueprint policy artifact",
              options: [
                {
                  name: "--artifact-name",
                  description: "Name of the blueprint artifact",
                  args: { name: "artifact-name" },
                  isRequired: true,
                },
                {
                  name: "--blueprint-name",
                  description: "Name of the blueprint definition",
                  args: { name: "blueprint-name" },
                  isRequired: true,
                },
                {
                  name: "--policy-definition-id",
                  description: "The full policy definition id",
                  args: { name: "policy-definition-id" },
                  isRequired: true,
                },
                {
                  name: "--depends-on",
                  description:
                    "Artifacts which need to be deployed before the specified artifact",
                  args: { name: "depends-on" },
                },
                {
                  name: "--description",
                  description: "Description of the blueprint artifact",
                  args: { name: "description" },
                },
                {
                  name: "--display-name",
                  description: "DisplayName of this artifact",
                  args: { name: "display-name" },
                },
                {
                  name: ["--management-group", "-m"],
                  description:
                    "Use management group for the scope of the blueprint",
                  args: { name: "management-group" },
                },
                {
                  name: ["--parameters", "-p"],
                  description:
                    "Parameters for policy assignment artifact. It can be a JSON string or JSON file path",
                  args: { name: "parameters" },
                },
                {
                  name: "--resource-group-art",
                  description:
                    "Name of the resource group artifact to which the policy will be assigned",
                  args: { name: "resource-group-art" },
                },
                {
                  name: ["--subscription", "-s"],
                  description:
                    "Use subscription for the scope of the blueprint. If --management-group is not specified, --subscription value or the default subscription will be used as the scope",
                  args: { name: "subscription" },
                },
              ],
            },
            {
              name: "update",
              description: "Update blueprint policy artifact",
              options: [
                {
                  name: "--artifact-name",
                  description: "Name of the blueprint artifact",
                  args: { name: "artifact-name" },
                  isRequired: true,
                },
                {
                  name: "--blueprint-name",
                  description: "Name of the blueprint definition",
                  args: { name: "blueprint-name" },
                  isRequired: true,
                },
                {
                  name: "--depends-on",
                  description:
                    "Artifacts which need to be deployed before the specified artifact. Use '--depends-on' with no values to remove dependencies",
                  args: { name: "depends-on" },
                },
                {
                  name: "--description",
                  description: "Description of the blueprint artifact",
                  args: { name: "description" },
                },
                {
                  name: "--display-name",
                  description: "DisplayName of this artifact",
                  args: { name: "display-name" },
                },
                {
                  name: ["--management-group", "-m"],
                  description:
                    "Use management group for the scope of the blueprint",
                  args: { name: "management-group" },
                },
                {
                  name: ["--parameters", "-p"],
                  description:
                    "Parameters for policy assignment artifact. It can be a JSON string or JSON file path",
                  args: { name: "parameters" },
                },
                {
                  name: "--resource-group-art",
                  description:
                    "Name of the resource group artifact to which the policy will be assigned",
                  args: { name: "resource-group-art" },
                },
                {
                  name: ["--subscription", "-s"],
                  description:
                    "Use subscription for the scope of the blueprint. If --management-group is not specified, --subscription value or the default subscription will be used as the scope",
                  args: { name: "subscription" },
                },
              ],
            },
          ],
        },
        {
          name: "role",
          description: "Commands to manage blueprint role assignment artifact",
          subcommands: [
            {
              name: "create",
              description: "Create blueprint role artifact",
              options: [
                {
                  name: "--artifact-name",
                  description: "Name of the blueprint artifact",
                  args: { name: "artifact-name" },
                  isRequired: true,
                },
                {
                  name: "--blueprint-name",
                  description: "Name of the blueprint definition",
                  args: { name: "blueprint-name" },
                  isRequired: true,
                },
                {
                  name: "--principal-ids",
                  description:
                    "Array of user or group identities in Azure Active Directory or a reference to the corresponding parameter in blueprint definiton. The roleDefinition will apply to each identity",
                  args: { name: "principal-ids" },
                  isRequired: true,
                },
                {
                  name: "--role-definition-id",
                  description:
                    "The full role definition id. Only built-in roles are supported",
                  args: { name: "role-definition-id" },
                  isRequired: true,
                },
                {
                  name: "--depends-on",
                  description:
                    "Artifacts which need to be deployed before the specified artifact",
                  args: { name: "depends-on" },
                },
                {
                  name: "--description",
                  description: "Description of the blueprint artifact",
                  args: { name: "description" },
                },
                {
                  name: "--display-name",
                  description: "DisplayName of this artifact",
                  args: { name: "display-name" },
                },
                {
                  name: ["--management-group", "-m"],
                  description:
                    "Use management group for the scope of the blueprint",
                  args: { name: "management-group" },
                },
                {
                  name: "--resource-group-art",
                  description:
                    "Name of the resource group artifact to which the policy will be assigned",
                  args: { name: "resource-group-art" },
                },
                {
                  name: ["--subscription", "-s"],
                  description:
                    "Use subscription for the scope of the blueprint. If --management-group is not specified, --subscription value or the default subscription will be used as the scope",
                  args: { name: "subscription" },
                },
              ],
            },
            {
              name: "update",
              description: "Update blueprint role artifact",
              options: [
                {
                  name: "--artifact-name",
                  description: "Name of the blueprint artifact",
                  args: { name: "artifact-name" },
                  isRequired: true,
                },
                {
                  name: "--blueprint-name",
                  description: "Name of the blueprint definition",
                  args: { name: "blueprint-name" },
                  isRequired: true,
                },
                {
                  name: "--depends-on",
                  description:
                    "Artifacts which need to be deployed before the specified artifact. Use '--depends-on' with no values to remove dependencies",
                  args: { name: "depends-on" },
                },
                {
                  name: "--description",
                  description: "Description of the blueprint artifact",
                  args: { name: "description" },
                },
                {
                  name: "--display-name",
                  description: "DisplayName of this artifact",
                  args: { name: "display-name" },
                },
                {
                  name: ["--management-group", "-m"],
                  description:
                    "Use management group for the scope of the blueprint",
                  args: { name: "management-group" },
                },
                {
                  name: "--resource-group-art",
                  description:
                    "Name of the resource group artifact to which the policy will be assigned",
                  args: { name: "resource-group-art" },
                },
                {
                  name: ["--subscription", "-s"],
                  description:
                    "Use subscription for the scope of the blueprint. If --management-group is not specified, --subscription value or the default subscription will be used as the scope",
                  args: { name: "subscription" },
                },
              ],
            },
          ],
        },
        {
          name: "template",
          description: "Commands to manage blueprint ARM template artifact",
          subcommands: [
            {
              name: "create",
              description: "Create blueprint arm artifact",
              options: [
                {
                  name: "--artifact-name",
                  description: "Name of the blueprint artifact",
                  args: { name: "artifact-name" },
                  isRequired: true,
                },
                {
                  name: "--blueprint-name",
                  description: "Name of the blueprint definition",
                  args: { name: "blueprint-name" },
                  isRequired: true,
                },
                {
                  name: ["--template", "-t"],
                  description:
                    "ARM template in JSON string or path to JSON file",
                  args: { name: "template" },
                  isRequired: true,
                },
                {
                  name: "--depends-on",
                  description:
                    "Artifacts which need to be deployed before the specified artifact",
                  args: { name: "depends-on" },
                },
                {
                  name: "--description",
                  description: "Description of the blueprint artifact",
                  args: { name: "description" },
                },
                {
                  name: "--display-name",
                  description: "DisplayName of this artifact",
                  args: { name: "display-name" },
                },
                {
                  name: ["--management-group", "-m"],
                  description:
                    "Use management group for the scope of the blueprint",
                  args: { name: "management-group" },
                },
                {
                  name: ["--parameters", "-p"],
                  description:
                    "Parameters for ARM template artifact. It can be a JSON string or JSON file path",
                  args: { name: "parameters" },
                },
                {
                  name: "--resource-group-art",
                  description:
                    "Name of the resource group artifact to which the policy will be assigned",
                  args: { name: "resource-group-art" },
                },
                {
                  name: ["--subscription", "-s"],
                  description:
                    "Use subscription for the scope of the blueprint. If --management-group is not specified, --subscription value or the default subscription will be used as the scope",
                  args: { name: "subscription" },
                },
              ],
            },
            {
              name: "update",
              description: "Update blueprint arm artifact",
              options: [
                {
                  name: "--artifact-name",
                  description: "Name of the blueprint artifact",
                  args: { name: "artifact-name" },
                  isRequired: true,
                },
                {
                  name: "--blueprint-name",
                  description: "Name of the blueprint definition",
                  args: { name: "blueprint-name" },
                  isRequired: true,
                },
                {
                  name: "--depends-on",
                  description:
                    "Artifacts which need to be deployed before the specified artifact. Use '--depends-on' with no values to remove dependencies",
                  args: { name: "depends-on" },
                },
                {
                  name: "--description",
                  description: "Description of the blueprint artifact",
                  args: { name: "description" },
                },
                {
                  name: "--display-name",
                  description: "DisplayName of this artifact",
                  args: { name: "display-name" },
                },
                {
                  name: ["--management-group", "-m"],
                  description:
                    "Use management group for the scope of the blueprint",
                  args: { name: "management-group" },
                },
                {
                  name: ["--parameters", "-p"],
                  description:
                    "Parameters for ARM template artifact. It can be a JSON string or JSON file path",
                  args: { name: "parameters" },
                },
                {
                  name: "--resource-group-art",
                  description:
                    "Name of the resource group artifact to which the policy will be assigned",
                  args: { name: "resource-group-art" },
                },
                {
                  name: ["--subscription", "-s"],
                  description:
                    "Use subscription for the scope of the blueprint. If --management-group is not specified, --subscription value or the default subscription will be used as the scope",
                  args: { name: "subscription" },
                },
                {
                  name: ["--template", "-t"],
                  description:
                    "ARM template in JSON string or path to JSON file",
                  args: { name: "template" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "assignment",
      description: "Commands to manage blueprint assignment",
      subcommands: [
        {
          name: "create",
          description: "Create a blueprint assignment",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the blueprint assignment",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--blueprint-version",
              description:
                "Resource ID of the published version of a blueprint definition",
              args: { name: "blueprint-version" },
            },
            {
              name: "--description",
              description: "Multi-line explain this resource",
              args: { name: "description" },
            },
            {
              name: "--display-name",
              description: "One-liner string explain this resource",
              args: { name: "display-name" },
            },
            {
              name: "--identity-type",
              description: "Type of the managed identity",
              args: {
                name: "identity-type",
                suggestions: ["None", "SystemAssigned", "UserAssigned"],
              },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--locks-excluded-principals",
              description:
                "List of AAD principals excluded from blueprint locks. Up to 5 principals are permitted",
              args: { name: "locks-excluded-principals" },
            },
            {
              name: "--locks-mode",
              description: "Lock mode",
              args: {
                name: "locks-mode",
                suggestions: [
                  "AllResourcesDoNotDelete",
                  "AllResourcesReadOnly",
                  "None",
                ],
              },
            },
            {
              name: ["--management-group", "-m"],
              description:
                "Use management group for the target scope of the blueprint assignment. It is reserved for future use. Use --subscription instead",
              args: { name: "management-group" },
            },
            {
              name: ["--parameters", "-p"],
              description:
                "Blueprint assignment parameter values. It can be a JSON string or JSON file path",
              args: { name: "parameters" },
            },
            {
              name: "--resource-group-value",
              description:
                "Key=Value pairs for a resource group. Keys include 'artifact_name'(required), 'name', 'location'",
              args: { name: "resource-group-value" },
            },
            {
              name: ["--subscription", "-s"],
              description:
                "Use subscription for the target scope of the blueprint assignment. Default susbcription will be used if option not specified",
              args: { name: "subscription" },
            },
            {
              name: "--user-assigned-identity",
              description:
                "The user-assigned managed identity associated with the resource",
              args: { name: "user-assigned-identity" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a blueprint assignment",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the blueprint assignment",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--delete-behavior",
              description:
                "When deleteBehavior=all, the resources that were created by the blueprint assignment will be deleted",
              args: { name: "delete-behavior", suggestions: ["all", "none"] },
            },
            {
              name: ["--management-group", "-m"],
              description:
                "Use management group for the scope of the blueprint",
              args: { name: "management-group" },
            },
            {
              name: ["--subscription", "-s"],
              description:
                "Use subscription for the scope of the blueprint. If --management-group is not specified, --subscription value or the default subscription will be used as the scope",
              args: { name: "subscription" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "List blueprint assignments within a subscription",
          options: [
            {
              name: ["--management-group", "-m"],
              description:
                "Use management group for the scope of the blueprint",
              args: { name: "management-group" },
            },
            {
              name: "--max-items",
              description:
                "Total number of items to return in the command's output. If the total number of items available is more than the value specified, a token is provided in the command's output. To resume pagination, provide the token value in --next-token argument of a subsequent command",
              args: { name: "max-items" },
            },
            {
              name: "--next-token",
              description:
                "Token to specify where to start paginating. This is the token value from a previously truncated response",
              args: { name: "next-token" },
            },
            {
              name: ["--subscription", "-s"],
              description:
                "Use subscription for the scope of the blueprint. If --management-group is not specified, --subscription value or the default subscription will be used as the scope",
              args: { name: "subscription" },
            },
          ],
        },
        {
          name: "show",
          description: "Get a blueprint assignment",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the blueprint assignment",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--management-group", "-m"],
              description:
                "Use management group for the scope of the blueprint",
              args: { name: "management-group" },
            },
            {
              name: ["--subscription", "-s"],
              description:
                "Use subscription for the scope of the blueprint. If --management-group is not specified, --subscription value or the default subscription will be used as the scope",
              args: { name: "subscription" },
            },
          ],
        },
        {
          name: "update",
          description: "Update a blueprint assignment",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the blueprint assignment",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--blueprint-version",
              description:
                "Resource ID of the published version of a blueprint definition",
              args: { name: "blueprint-version" },
            },
            {
              name: "--description",
              description: "Multi-line explain this resource",
              args: { name: "description" },
            },
            {
              name: "--display-name",
              description: "One-liner string explain this resource",
              args: { name: "display-name" },
            },
            {
              name: "--identity-type",
              description: "Type of the managed identity",
              args: {
                name: "identity-type",
                suggestions: ["None", "SystemAssigned", "UserAssigned"],
              },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--locks-excluded-principals",
              description:
                "List of AAD principals excluded from blueprint locks. Up to 5 principals are permitted",
              args: { name: "locks-excluded-principals" },
            },
            {
              name: "--locks-mode",
              description: "Lock mode",
              args: {
                name: "locks-mode",
                suggestions: [
                  "AllResourcesDoNotDelete",
                  "AllResourcesReadOnly",
                  "None",
                ],
              },
            },
            {
              name: ["--management-group", "-m"],
              description:
                "Use management group for the target scope of the blueprint assignment. It is reserved for future use. Use --subscription instead",
              args: { name: "management-group" },
            },
            {
              name: ["--parameters", "-p"],
              description:
                "Blueprint assignment parameter values. It can be a JSON string or JSON file path",
              args: { name: "parameters" },
            },
            {
              name: "--resource-group-value",
              description:
                "Key=Value pairs for a resource group. Keys include 'artifact_name'(required), 'name', 'location'",
              args: { name: "resource-group-value" },
            },
            {
              name: ["--subscription", "-s"],
              description:
                "Use subscription for the target scope of the blueprint assignment. Default susbcription will be used if option not specified",
              args: { name: "subscription" },
            },
            {
              name: "--user-assigned-identity",
              description:
                "The user-assigned managed identity associated with the resource",
              args: { name: "user-assigned-identity" },
            },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the Blueprint Assignment is met",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the blueprint assignment",
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
              name: ["--management-group", "-m"],
              description:
                "Use management group for the target scope of the blueprint assignment. It is reserved for future use. Use --subscription instead",
              args: { name: "management-group" },
            },
            {
              name: ["--subscription", "-s"],
              description:
                "Use subscription for the target scope of the blueprint assignment. Default susbcription will be used if option not specified",
              args: { name: "subscription" },
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
        {
          name: "who",
          description: "Get Blueprint Servie Principal Name objectId",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the blueprint assignment",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--management-group", "-m"],
              description:
                "Use management group for the scope of the blueprint",
              args: { name: "management-group" },
            },
            {
              name: ["--subscription", "-s"],
              description:
                "Use subscription for the scope of the blueprint. If --management-group is not specified, --subscription value or the default subscription will be used as the scope",
              args: { name: "subscription" },
            },
          ],
        },
      ],
    },
    {
      name: "create",
      description: "Create a blueprint definition",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the blueprint definition",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: "--target-scope",
          description:
            "The scope where this blueprint definition can be assigned",
          args: {
            name: "target-scope",
            suggestions: ["managementGroup", "subscription"],
          },
          isRequired: true,
        },
        {
          name: "--description",
          description: "Multi-line explain this resource",
          args: { name: "description" },
        },
        {
          name: "--display-name",
          description: "One-liner string explain this resource",
          args: { name: "display-name" },
        },
        {
          name: ["--management-group", "-m"],
          description: "Use management group for the scope of the blueprint",
          args: { name: "management-group" },
        },
        {
          name: ["--parameters", "-p"],
          description:
            'Parameters required by this blueprint definition. It can be a JSON string or JSON file path. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
          args: { name: "parameters" },
        },
        {
          name: "--resource-groups",
          description:
            'Resource group placeholders defined by this blueprint definition. Expected value: json-string/@json-file. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
          args: { name: "resource-groups" },
        },
        {
          name: ["--subscription", "-s"],
          description:
            "Use subscription for the scope of the blueprint. If --management-group is not specified, --subscription value or the default subscription will be used as the scope",
          args: { name: "subscription" },
        },
      ],
    },
    {
      name: "delete",
      description: "Delete a blueprint definition",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the blueprint definition",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: ["--management-group", "-m"],
          description: "Use management group for the scope of the blueprint",
          args: { name: "management-group" },
        },
        {
          name: ["--subscription", "-s"],
          description:
            "Use subscription for the scope of the blueprint. If --management-group is not specified, --subscription value or the default subscription will be used as the scope",
          args: { name: "subscription" },
        },
        {
          name: ["--yes", "-y"],
          description: "Do not prompt for confirmation",
        },
      ],
    },
    {
      name: "export",
      description:
        "Export a blueprint definition and artifacts to json file(s)",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the blueprint definition to export",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: "--output-path",
          description:
            "The directory path for json definitions of the blueprint and artifacts. The blueprint definition file will be named blueprint.json. Artifacts json files will be in a subdirectory named artifacts",
          args: { name: "output-path" },
          isRequired: true,
        },
        {
          name: ["--management-group", "-m"],
          description: "Use management group for the scope of the blueprint",
          args: { name: "management-group" },
        },
        {
          name: ["--subscription", "-s"],
          description:
            "Use subscription for the scope of the blueprint. If --management-group is not specified, --subscription value or the default subscription will be used as the scope",
          args: { name: "subscription" },
        },
        {
          name: ["--yes", "-y"],
          description:
            "Skip user confirmation. When set, if directory does not exist, it will be created. If the directory exists and has contents, they will be overwritten. If not set, user will be prompted for permission to proceed",
        },
      ],
    },
    {
      name: "import",
      description:
        "Import a blueprint definition and artifacts from a directoy of json files",
      options: [
        {
          name: "--input-path",
          description:
            "The directory path for json definitions of the blueprint and artifacts. The blueprint definition file should be named blueprint.json. Artifacts json files should be in a subdirectory named artifacts",
          args: { name: "input-path" },
          isRequired: true,
        },
        {
          name: ["--name", "-n"],
          description: "Name of the blueprint definition",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: ["--management-group", "-m"],
          description: "Use management group for the scope of the blueprint",
          args: { name: "management-group" },
        },
        {
          name: ["--subscription", "-s"],
          description:
            "Use subscription for the scope of the blueprint. If --management-group is not specified, --subscription value or the default subscription will be used as the scope",
          args: { name: "subscription" },
        },
        {
          name: ["--yes", "-y"],
          description: "Do not prompt for confirmation",
        },
      ],
    },
    {
      name: "list",
      description: "List blueprint definitions",
      options: [
        {
          name: ["--management-group", "-m"],
          description: "Use management group for the scope of the blueprint",
          args: { name: "management-group" },
        },
        {
          name: "--max-items",
          description:
            "Total number of items to return in the command's output. If the total number of items available is more than the value specified, a token is provided in the command's output. To resume pagination, provide the token value in --next-token argument of a subsequent command",
          args: { name: "max-items" },
        },
        {
          name: "--next-token",
          description:
            "Token to specify where to start paginating. This is the token value from a previously truncated response",
          args: { name: "next-token" },
        },
        {
          name: ["--subscription", "-s"],
          description:
            "Use subscription for the scope of the blueprint. If --management-group is not specified, --subscription value or the default subscription will be used as the scope",
          args: { name: "subscription" },
        },
      ],
    },
    {
      name: "publish",
      description:
        "Publish a new version of the blueprint definition with the latest artifacts. Published blueprint definitions are immutable",
      options: [
        {
          name: "--blueprint-name",
          description: "Name of the blueprint definition",
          args: { name: "blueprint-name" },
          isRequired: true,
        },
        {
          name: "--version",
          description: "Version of the published blueprint definition",
          args: { name: "version" },
          isRequired: true,
        },
        {
          name: "--change-notes",
          description: "Version-specific change notes",
          args: { name: "change-notes" },
        },
        {
          name: ["--management-group", "-m"],
          description: "Use management group for the scope of the blueprint",
          args: { name: "management-group" },
        },
        {
          name: ["--subscription", "-s"],
          description:
            "Use subscription for the scope of the blueprint. If --management-group is not specified, --subscription value or the default subscription will be used as the scope",
          args: { name: "subscription" },
        },
      ],
    },
    {
      name: "show",
      description: "Get a blueprint definition",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the blueprint definition",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: ["--management-group", "-m"],
          description: "Use management group for the scope of the blueprint",
          args: { name: "management-group" },
        },
        {
          name: ["--subscription", "-s"],
          description:
            "Use subscription for the scope of the blueprint. If --management-group is not specified, --subscription value or the default subscription will be used as the scope",
          args: { name: "subscription" },
        },
      ],
    },
    {
      name: "update",
      description: "Update a blueprint definition",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the blueprint definition",
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
          name: "--description",
          description: "Multi-line explain this resource",
          args: { name: "description" },
        },
        {
          name: "--display-name",
          description: "One-liner string explain this resource",
          args: { name: "display-name" },
        },
        {
          name: "--force-string",
          description:
            "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
          args: {
            name: "force-string",
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
        {
          name: ["--management-group", "-m"],
          description: "Use management group for the scope of the blueprint",
          args: { name: "management-group" },
        },
        {
          name: ["--parameters", "-p"],
          description:
            'Parameters required by this blueprint definition. It can be a JSON string or JSON file path. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
          args: { name: "parameters" },
        },
        {
          name: "--remove",
          description:
            "Remove a property or an element from a list. Example: --remove property.list OR --remove propertyToRemove",
          args: { name: "remove" },
        },
        {
          name: "--resource-groups",
          description:
            'Resource group placeholders defined by this blueprint definition. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
          args: { name: "resource-groups" },
        },
        {
          name: "--set",
          description:
            "Update an object by specifying a property path and value to set. Example: --set property1.property2=",
          args: { name: "set" },
        },
        {
          name: ["--subscription", "-s"],
          description:
            "Use subscription for the scope of the blueprint. If --management-group is not specified, --subscription value or the default subscription will be used as the scope",
          args: { name: "subscription" },
        },
        {
          name: "--target-scope",
          description:
            "The scope where this blueprint definition can be assigned",
          args: {
            name: "target-scope",
            suggestions: ["managementGroup", "subscription"],
          },
        },
      ],
    },
    {
      name: "resource-group",
      description: "Commands to manage blueprint resource group artifact",
      subcommands: [
        {
          name: "add",
          description: "Add a resource group artifact to the blueprint",
          options: [
            {
              name: "--blueprint-name",
              description: "Name of the blueprint definition",
              args: { name: "blueprint-name" },
              isRequired: true,
            },
            {
              name: "--artifact-name",
              description: "A unique name of this resource group artifact",
              args: { name: "artifact-name" },
            },
            {
              name: "--depends-on",
              description:
                "Artifacts which need to be deployed before the specified artifact",
              args: { name: "depends-on" },
            },
            {
              name: "--description",
              description: "Description of the blueprint artifact",
              args: { name: "description" },
            },
            {
              name: "--display-name",
              description: "Display name of this resource group artifact",
              args: { name: "display-name" },
            },
            {
              name: ["--management-group", "-m"],
              description:
                "Use management group for the scope of the blueprint",
              args: { name: "management-group" },
            },
            {
              name: "--rg-location",
              description:
                "Location of this resource group. Leave empty if the resource group location will be specified during the blueprint assignment",
              args: { name: "rg-location" },
            },
            {
              name: "--rg-name",
              description:
                "Name of this resource group. Leave empty if the resource group name will be specified during the blueprint assignment",
              args: { name: "rg-name" },
            },
            {
              name: ["--subscription", "-s"],
              description:
                "Use subscription for the scope of the blueprint. If --management-group is not specified, --subscription value or the default subscription will be used as the scope",
              args: { name: "subscription" },
            },
            {
              name: "--tags",
              description: "Tags to be assigned to this resource group",
              args: { name: "tags" },
            },
          ],
        },
        {
          name: "list",
          description: "List blueprint resource group artifact",
          options: [
            {
              name: "--blueprint-name",
              description: "Name of the blueprint definition",
              args: { name: "blueprint-name" },
              isRequired: true,
            },
            {
              name: ["--management-group", "-m"],
              description:
                "Use management group for the scope of the blueprint",
              args: { name: "management-group" },
            },
            {
              name: ["--subscription", "-s"],
              description:
                "Use subscription for the scope of the blueprint. If --management-group is not specified, --subscription value or the default subscription will be used as the scope",
              args: { name: "subscription" },
            },
          ],
        },
        {
          name: "remove",
          description: "Remove a blueprint resource group artifact",
          options: [
            {
              name: "--artifact-name",
              description: "A unique name of this resource group artifact",
              args: { name: "artifact-name" },
              isRequired: true,
            },
            {
              name: "--blueprint-name",
              description: "Name of the blueprint definition",
              args: { name: "blueprint-name" },
              isRequired: true,
            },
            {
              name: ["--management-group", "-m"],
              description:
                "Use management group for the scope of the blueprint",
              args: { name: "management-group" },
            },
            {
              name: ["--subscription", "-s"],
              description:
                "Use subscription for the scope of the blueprint. If --management-group is not specified, --subscription value or the default subscription will be used as the scope",
              args: { name: "subscription" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "show",
          description: "Show blueprint resource group artifact",
          options: [
            {
              name: "--artifact-name",
              description: "A unique name of this resource group artifact",
              args: { name: "artifact-name" },
              isRequired: true,
            },
            {
              name: "--blueprint-name",
              description: "Name of the blueprint definition",
              args: { name: "blueprint-name" },
              isRequired: true,
            },
            {
              name: ["--management-group", "-m"],
              description:
                "Use management group for the scope of the blueprint",
              args: { name: "management-group" },
            },
            {
              name: ["--subscription", "-s"],
              description:
                "Use subscription for the scope of the blueprint. If --management-group is not specified, --subscription value or the default subscription will be used as the scope",
              args: { name: "subscription" },
            },
          ],
        },
        {
          name: "update",
          description: "Update blueprint resource group artifact",
          options: [
            {
              name: "--artifact-name",
              description: "A unique name of this resource group artifact",
              args: { name: "artifact-name" },
              isRequired: true,
            },
            {
              name: "--blueprint-name",
              description: "Name of the blueprint definition",
              args: { name: "blueprint-name" },
              isRequired: true,
            },
            {
              name: "--depends-on",
              description:
                "Artifacts which need to be deployed before the specified artifact. Use '--depends-on' with no values to remove dependencies",
              args: { name: "depends-on" },
            },
            {
              name: "--description",
              description: "Description of the blueprint artifact",
              args: { name: "description" },
            },
            {
              name: "--display-name",
              description: "Display name of this resource group artifact",
              args: { name: "display-name" },
            },
            {
              name: ["--management-group", "-m"],
              description:
                "Use management group for the scope of the blueprint",
              args: { name: "management-group" },
            },
            {
              name: "--rg-location",
              description:
                "Location of this resource group. Leave empty if the resource group location will be specified during the blueprint assignment",
              args: { name: "rg-location" },
            },
            {
              name: "--rg-name",
              description:
                "Name of this resource group. Leave empty if the resource group name will be specified during the blueprint assignment",
              args: { name: "rg-name" },
            },
            {
              name: ["--subscription", "-s"],
              description:
                "Use subscription for the scope of the blueprint. If --management-group is not specified, --subscription value or the default subscription will be used as the scope",
              args: { name: "subscription" },
            },
            {
              name: "--tags",
              description: "Tags to be assigned to this resource group",
              args: { name: "tags" },
            },
          ],
        },
      ],
    },
    {
      name: "version",
      description: "Commands to manage published blueprint versions",
      subcommands: [
        {
          name: "delete",
          description: "Delete a published version of a blueprint",
          options: [
            {
              name: "--blueprint-name",
              description: "Name of the blueprint definition",
              args: { name: "blueprint-name" },
              isRequired: true,
            },
            {
              name: "--version",
              description: "Version of the published blueprint definition",
              args: { name: "version" },
              isRequired: true,
            },
            {
              name: ["--management-group", "-m"],
              description:
                "Use management group for the scope of the blueprint",
              args: { name: "management-group" },
            },
            {
              name: ["--subscription", "-s"],
              description:
                "Use subscription for the scope of the blueprint. If --management-group is not specified, --subscription value or the default subscription will be used as the scope",
              args: { name: "subscription" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "List published versions of given blueprint definition",
          options: [
            {
              name: "--blueprint-name",
              description: "Name of the blueprint definition",
              args: { name: "blueprint-name" },
              isRequired: true,
            },
            {
              name: ["--management-group", "-m"],
              description:
                "Use management group for the scope of the blueprint",
              args: { name: "management-group" },
            },
            {
              name: "--max-items",
              description:
                "Total number of items to return in the command's output. If the total number of items available is more than the value specified, a token is provided in the command's output. To resume pagination, provide the token value in --next-token argument of a subsequent command",
              args: { name: "max-items" },
            },
            {
              name: "--next-token",
              description:
                "Token to specify where to start paginating. This is the token value from a previously truncated response",
              args: { name: "next-token" },
            },
            {
              name: ["--subscription", "-s"],
              description:
                "Use subscription for the scope of the blueprint. If --management-group is not specified, --subscription value or the default subscription will be used as the scope",
              args: { name: "subscription" },
            },
          ],
        },
        {
          name: "show",
          description: "Get a published version of a blueprint",
          options: [
            {
              name: "--blueprint-name",
              description: "Name of the blueprint definition",
              args: { name: "blueprint-name" },
              isRequired: true,
            },
            {
              name: "--version",
              description: "Version of the published blueprint definition",
              args: { name: "version" },
              isRequired: true,
            },
            {
              name: ["--management-group", "-m"],
              description:
                "Use management group for the scope of the blueprint",
              args: { name: "management-group" },
            },
            {
              name: ["--subscription", "-s"],
              description:
                "Use subscription for the scope of the blueprint. If --management-group is not specified, --subscription value or the default subscription will be used as the scope",
              args: { name: "subscription" },
            },
          ],
        },
        {
          name: "artifact",
          description: "Commands to manage published blueprint artifacts",
          subcommands: [
            {
              name: "list",
              description:
                "List artifacts for a version of a published blueprint",
              options: [
                {
                  name: "--blueprint-name",
                  description: "Name of the blueprint definition",
                  args: { name: "blueprint-name" },
                  isRequired: true,
                },
                {
                  name: "--version",
                  description: "Version of the published blueprint definition",
                  args: { name: "version" },
                  isRequired: true,
                },
                {
                  name: ["--management-group", "-m"],
                  description:
                    "Use management group for the scope of the blueprint",
                  args: { name: "management-group" },
                },
                {
                  name: "--max-items",
                  description:
                    "Total number of items to return in the command's output. If the total number of items available is more than the value specified, a token is provided in the command's output. To resume pagination, provide the token value in --next-token argument of a subsequent command",
                  args: { name: "max-items" },
                },
                {
                  name: "--next-token",
                  description:
                    "Token to specify where to start paginating. This is the token value from a previously truncated response",
                  args: { name: "next-token" },
                },
                {
                  name: ["--subscription", "-s"],
                  description:
                    "Use subscription for the scope of the blueprint. If --management-group is not specified, --subscription value or the default subscription will be used as the scope",
                  args: { name: "subscription" },
                },
              ],
            },
            {
              name: "show",
              description: "Show an artifact for a published blueprint",
              options: [
                {
                  name: "--artifact-name",
                  description: "Name of the blueprint artifact",
                  args: { name: "artifact-name" },
                  isRequired: true,
                },
                {
                  name: "--blueprint-name",
                  description: "Name of the blueprint definition",
                  args: { name: "blueprint-name" },
                  isRequired: true,
                },
                {
                  name: "--version",
                  description: "Version of the published blueprint definition",
                  args: { name: "version" },
                  isRequired: true,
                },
                {
                  name: ["--management-group", "-m"],
                  description:
                    "Use management group for the scope of the blueprint",
                  args: { name: "management-group" },
                },
                {
                  name: ["--subscription", "-s"],
                  description:
                    "Use subscription for the scope of the blueprint. If --management-group is not specified, --subscription value or the default subscription will be used as the scope",
                  args: { name: "subscription" },
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
