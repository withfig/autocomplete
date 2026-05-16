const completion: Fig.Spec = {
  name: "search",
  description: "Manage Azure Search services, admin keys and query keys",
  subcommands: [
    {
      name: "admin-key",
      description: "Manage Azure Search admin keys",
      subcommands: [
        {
          name: "renew",
          description:
            "Regenerates either the primary or secondary admin API key",
          options: [
            {
              name: "--key-kind",
              description: "The type (primary or secondary) of the admin key",
              args: { name: "key-kind" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--service-name",
              description: "The name of the search service",
              args: { name: "service-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description:
            "Gets the primary and secondary admin API keys for the specified Azure Cognitive Search service",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--service-name",
              description: "The name of the search service",
              args: { name: "service-name" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "private-endpoint-connection",
      description: "Manage Azure Search private endpoint connections",
      subcommands: [
        {
          name: "delete",
          description:
            "Disconnects the private endpoint connection and deletes it from the search service",
          options: [
            {
              name: ["--private-endpoint-connection-name", "--name", "-n"],
              description:
                "The name of the private endpoint connection to the Azure Cognitive Search service with the specified resource group. Required",
              args: { name: "private-endpoint-connection-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--service-name",
              description: "The name of the search service",
              args: { name: "service-name" },
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
            "Gets a list of all private endpoint connections in the given service",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--service-name",
              description: "The name of the search service",
              args: { name: "service-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description:
            "Gets the details of the private endpoint connection to the search service in the given resource group",
          options: [
            {
              name: ["--private-endpoint-connection-name", "--name", "-n"],
              description:
                "The name of the private endpoint connection to the Azure Cognitive Search service with the specified resource group. Required",
              args: { name: "private-endpoint-connection-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--service-name",
              description: "The name of the search service",
              args: { name: "service-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update",
          description:
            "Update an existing private endpoint connection in a Search service in the given resource group",
          options: [
            {
              name: "--actions-required",
              description:
                "Custom 'actions required' message when updating the private endpoint connection resource",
              args: { name: "actions-required" },
              isRequired: true,
            },
            {
              name: "--description",
              description:
                "Custom description when updating the private endpoint connection resource",
              args: { name: "description" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the private endpoint connection resource; for example: {the name of the private endpoint resource}.{guid}",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--service-name",
              description: "The name of the search service",
              args: { name: "service-name" },
              isRequired: true,
            },
            {
              name: "--status",
              description:
                'The updated status of the private endpoint connection resource. Possible values include: "Pending", "Approved", "Rejected", "Disconnected"',
              args: { name: "status" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "private-link-resource",
      description: "Manage Azure Search private link resources",
      subcommands: [
        {
          name: "list",
          description:
            "Gets a list of all supported private link resource types for the given service",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--service-name",
              description: "The name of the search service",
              args: { name: "service-name" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "query-key",
      description: "Manage Azure Search query keys",
      subcommands: [
        {
          name: "create",
          description:
            "Generates a new query key for the specified search service",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the query key",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--service-name",
              description: "The name of the search service",
              args: { name: "service-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes the specified query key",
          options: [
            {
              name: "--key-value",
              description: "The value of the query key",
              args: { name: "key-value" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--service-name",
              description: "The name of the search service",
              args: { name: "service-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list",
          description:
            "Returns the list of query API keys for the given Azure Cognitive Search service",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--service-name",
              description: "The name of the search service",
              args: { name: "service-name" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "service",
      description: "Manage Azure Search services",
      subcommands: [
        {
          name: "create",
          description: "Creates a Search service in the given resource group",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the search service",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--sku",
              description:
                "The SKU of the search service, which determines price tier and capacity limits. Accepted Values: Free, Basic, Standard, Standard2, Standard3",
              args: {
                name: "sku",
                suggestions: [
                  "Basic",
                  "Free",
                  "Standard",
                  "Standard2",
                  "Standard3",
                ],
              },
              isRequired: true,
            },
            {
              name: "--aad-auth-failure-mode",
              description:
                'Describes response code from calls to the search service that failed authentication; possible values include "http401WithBearerChallenge", "http403"; This cannot be combined with disable_local_auth',
              args: { name: "aad-auth-failure-mode" },
            },
            {
              name: "--auth-options",
              description:
                'Options for authenticating calls to the search service; possible values include"aadOrApiKey", "apiKeyOnly"; This cannot be combined with disable_local_auth',
              args: { name: "auth-options" },
            },
            {
              name: "--disable-local-auth",
              description:
                "If calls to the search service will not be permitted to utilize API keys for authentication; This cannot be combined with auth_options",
              args: {
                name: "disable-local-auth",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--hosting-mode",
              description:
                'The hosting mode; possible values include: "default", "highDensity"; Note that "highDensity" is only applicable to the standard3 SKU',
              args: { name: "hosting-mode" },
            },
            {
              name: "--identity-type",
              description:
                'The identity type; possible values include: "None", "SystemAssigned"',
              args: { name: "identity-type" },
            },
            {
              name: "--ip-rules",
              description:
                'Public IP(v4) addresses or CIDR ranges to the search service, seperated by comma or semicolon; these IP rules are applicable only when --public-network-access is "enabled"',
              args: { name: "ip-rules" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--partition-count",
              description: "Number of partitions in the search service",
              args: { name: "partition-count" },
            },
            {
              name: ["--public-network-access", "--public-access"],
              description:
                'Public accessibility to the search service; allowed values are "enabled" or "disabled"',
              args: { name: "public-network-access" },
            },
            {
              name: "--replica-count",
              description: "Number of replicas in the search service",
              args: { name: "replica-count" },
            },
          ],
        },
        {
          name: "delete",
          description:
            "Deletes a search service in the given resource group, along with its associated resources",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the search service",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
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
            "Gets a list of all Search services in the given resource group",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description:
            "Gets the search service with the given name in the given resource group",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the search service",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update",
          description:
            "Update partition and replica of the given search service",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the search service",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--aad-auth-failure-mode",
              description:
                'Describes response code from calls to the search service that failed authentication; possible values include "http401WithBearerChallenge", "http403"; This cannot be combined with disable_local_auth',
              args: { name: "aad-auth-failure-mode" },
            },
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: "--auth-options",
              description:
                'Options for authenticating calls to the search service; possible values include "aadOrApiKey", "apiKeyOnly"; This cannot be combined with disable_local_auth',
              args: { name: "auth-options" },
            },
            {
              name: "--disable-local-auth",
              description:
                "If calls to the search service will not be permitted to utilize API keys for authentication. This cannot be combined with auth_options",
              args: {
                name: "disable-local-auth",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--force-string",
              description:
                "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
            },
            {
              name: "--identity-type",
              description:
                'The identity type; possible values include: "None", "SystemAssigned"',
              args: { name: "identity-type" },
            },
            {
              name: "--ip-rules",
              description:
                "Public IP(v4) addresses or CIDR ranges to the search service, seperated by comma(',') or semicolon(';'); If spaces (' '), ',' or ';' is provided, any existing IP rule will be nullified and no public IP rule is applied. These IP rules are applicable only when public_network_access is \"enabled\"",
              args: { name: "ip-rules" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--partition-count",
              description: "Number of partitions in the search service",
              args: { name: "partition-count" },
            },
            {
              name: ["--public-network-access", "--public-access"],
              description:
                'Public accessibility to the search service; allowed values are "enabled" or "disabled"',
              args: { name: "public-network-access" },
            },
            {
              name: "--remove",
              description:
                "Remove a property or an element from a list. Example: --remove property.list OR --remove propertyToRemove",
              args: { name: "remove" },
            },
            {
              name: "--replica-count",
              description: "Number of replicas in the search service",
              args: { name: "replica-count" },
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
          name: "wait",
          description: "Wait for async service operations",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the search service",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
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
      name: "shared-private-link-resource",
      description: "Manage Azure Search shared private link resources",
      subcommands: [
        {
          name: "create",
          description:
            "Create shared privatelink resources in a Search service in the given resource group",
          options: [
            {
              name: "--group-id",
              description:
                "The group id of the resource; for example: blob, sql or vault",
              args: { name: "group-id" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the shared private link resource",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--resource-id",
              description:
                "Fully qualified resource ID for the resource. for example: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/ {resourceProviderNamespace}/{resourceType}/{resourceName}",
              args: { name: "resource-id" },
              isRequired: true,
            },
            {
              name: "--service-name",
              description: "The name of the search service",
              args: { name: "service-name" },
              isRequired: true,
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--request-message",
              description:
                "Custom request message when creating or updating the shared privatelink resources",
              args: { name: "request-message" },
            },
          ],
        },
        {
          name: "delete",
          description:
            "Initiates the deletion of the shared private link resource from the search service",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "The name of the shared private link resource managed by the Azure Cognitive Search service within the specified resource group. Required",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--service-name",
              description: "The name of the search service",
              args: { name: "service-name" },
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
            "Gets a list of all shared private link resources managed by the given service",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--service-name",
              description: "The name of the search service",
              args: { name: "service-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description:
            "Gets the details of the shared private link resource managed by the search service in the given resource group",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "The name of the shared private link resource managed by the Azure Cognitive Search service within the specified resource group. Required",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--service-name",
              description: "The name of the search service",
              args: { name: "service-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update",
          description:
            "Update shared privatelink resources in a Search service in the given resource group",
          options: [
            {
              name: "--group-id",
              description:
                "The group id of the resource; for example: blob, sql or vault",
              args: { name: "group-id" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the shared private link resource",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--request-message",
              description:
                "Custom request message when creating or updating the shared privatelink resources",
              args: { name: "request-message" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--resource-id",
              description:
                "Fully qualified resource ID for the resource; for example: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/ {resourceProviderNamespace}/{resourceType}/{resourceName}",
              args: { name: "resource-id" },
              isRequired: true,
            },
            {
              name: "--service-name",
              description: "The name of the search service",
              args: { name: "service-name" },
              isRequired: true,
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
          ],
        },
        {
          name: "wait",
          description: "Wait for async shared private link resource operations",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "The name of the shared private link resource managed by the Azure Cognitive Search service within the specified resource group. Required",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--service-name",
              description: "The name of the search service",
              args: { name: "service-name" },
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
  ],
};

export default completion;
