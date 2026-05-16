const completion: Fig.Spec = {
  name: "healthcareapis",
  description: "Manage Healthcare Apis",
  subcommands: [
    {
      name: "acr",
      description: "Healthcareapis acr",
      subcommands: [
        {
          name: "add",
          description:
            "Add a list of registries to the service, repeated ones will be ignored",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--login-servers",
              description:
                "The list of login servers that shallbe added to the service instance",
              args: { name: "login-servers" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "The name of the service instance",
              args: { name: "resource-name" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
          ],
        },
        {
          name: "list",
          description:
            "Lists all container registries associated with the service",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--resource-name",
              description: "The name of the service instance",
              args: { name: "resource-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "remove",
          description:
            "Remove a list of registries from the service, non-existing ones will be ignored",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--login-servers",
              description:
                "The list of login servers that shallbe removed from the service instance",
              args: { name: "login-servers" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "The name of the service instance",
              args: { name: "resource-name" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
          ],
        },
        {
          name: "reset",
          description:
            "Reset the container registries associated with the service to a new list",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--login-servers",
              description:
                "The list of login servers to substitute for the existing one",
              args: { name: "login-servers" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "The name of the service instance",
              args: { name: "resource-name" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
          ],
        },
      ],
    },
    {
      name: "operation-result",
      description: "Healthcareapis operation-result",
      subcommands: [
        {
          name: "show",
          description: "Get the operation result for a long running operation",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--location-name",
              description: "The location of the operation",
              args: { name: "location-name" },
            },
            {
              name: "--operation-result-id",
              description: "The ID of the operation result to get",
              args: { name: "operation-result-id" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
          ],
        },
      ],
    },
    {
      name: "private-endpoint-connection",
      description: "Healthcareapis private-endpoint-connection",
      subcommands: [
        {
          name: "create",
          description:
            "Update the state of the specified private endpoint connection associated with the service",
          options: [
            {
              name: ["--private-endpoint-connection-name", "--name", "-n"],
              description:
                "The name of the private endpoint connection associated with the Azure resource",
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
              name: "--resource-name",
              description: "The name of the service instance",
              args: { name: "resource-name" },
              isRequired: true,
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--private-link-service-connection-state", "-s"],
              description:
                "A collection of information about the state of the connection between service consumer and provider",
              args: { name: "private-link-service-connection-state" },
            },
            {
              name: "--private-link-service-connection-state-actions-required",
              description:
                "Argument 'private_link_service_connection_state_actions_required' has been deprecated and will be removed in a future release. Use '--private-link-service-connection-state' instead. A message indicating if changes on the service provider require any updates on the consumer",
              args: {
                name: "private-link-service-connection-state-actions-required",
              },
            },
            {
              name: "--private-link-service-connection-state-description",
              description:
                "Argument 'private_link_service_connection_state_description' has been deprecated and will be removed in a future release. Use '--private-link-service-connection-state' instead. The reason for approval/rejection of the connection",
              args: {
                name: "private-link-service-connection-state-description",
              },
            },
            {
              name: "--private-link-service-connection-state-status",
              description:
                "Argument 'private_link_service_connection_state_status' has been deprecated and will be removed in a future release. Use '--private-link-service-connection-state' instead. Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service",
              args: {
                name: "private-link-service-connection-state-status",
                suggestions: ["Approved", "Pending", "Rejected"],
              },
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes a private endpoint connection",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--private-endpoint-connection-name", "--name", "-n"],
              description:
                "The name of the private endpoint connection associated with the Azure resource",
              args: { name: "private-endpoint-connection-name" },
            },
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
            {
              name: "--resource-name",
              description: "The name of the service instance",
              args: { name: "resource-name" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
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
          description: "Lists all private endpoint connections for a service",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--resource-name",
              description: "The name of the service instance",
              args: { name: "resource-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description:
            "Gets the specified private endpoint connection associated with the service",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--private-endpoint-connection-name", "--name", "-n"],
              description:
                "The name of the private endpoint connection associated with the Azure resource",
              args: { name: "private-endpoint-connection-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "The name of the service instance",
              args: { name: "resource-name" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
          ],
        },
        {
          name: "update",
          description:
            "Update the state of the specified private endpoint connection associated with the service",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--private-endpoint-connection-name", "--name", "-n"],
              description:
                "The name of the private endpoint connection associated with the Azure resource",
              args: { name: "private-endpoint-connection-name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--private-link-service-connection-state", "-s"],
              description:
                "A collection of information about the state of the connection between service consumer and provider",
              args: { name: "private-link-service-connection-state" },
            },
            {
              name: "--private-link-service-connection-state-actions-required",
              description:
                "Argument 'private_link_service_connection_state_actions_required' has been deprecated and will be removed in a future release. Use '--private-link-service-connection-state' instead. A message indicating if changes on the service provider require any updates on the consumer",
              args: {
                name: "private-link-service-connection-state-actions-required",
              },
            },
            {
              name: "--private-link-service-connection-state-description",
              description:
                "Argument 'private_link_service_connection_state_description' has been deprecated and will be removed in a future release. Use '--private-link-service-connection-state' instead. The reason for approval/rejection of the connection",
              args: {
                name: "private-link-service-connection-state-description",
              },
            },
            {
              name: "--private-link-service-connection-state-status",
              description:
                "Argument 'private_link_service_connection_state_status' has been deprecated and will be removed in a future release. Use '--private-link-service-connection-state' instead. Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service",
              args: {
                name: "private-link-service-connection-state-status",
                suggestions: ["Approved", "Pending", "Rejected"],
              },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "The name of the service instance",
              args: { name: "resource-name" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the healthcareapis private-endpoint-connection is met",
          options: [
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
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--interval",
              description: "Polling interval in seconds",
              args: { name: "interval" },
            },
            {
              name: ["--private-endpoint-connection-name", "--name", "-n"],
              description:
                "The name of the private endpoint connection associated with the Azure resource",
              args: { name: "private-endpoint-connection-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "The name of the service instance",
              args: { name: "resource-name" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
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
      ],
    },
    {
      name: "private-link-resource",
      description: "Healthcareapis private-link-resource",
      subcommands: [
        {
          name: "list",
          description:
            "Gets the private link resources that need to be created for a service",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--resource-name",
              description: "The name of the service instance",
              args: { name: "resource-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description:
            "Gets a private link resource that need to be created for a service",
          options: [
            {
              name: "--group-name",
              description: "The name of the private link resource group",
              args: { name: "group-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "The name of the service instance",
              args: { name: "resource-name" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
          ],
        },
      ],
    },
    {
      name: "service",
      description: "Healthcareapis service",
      subcommands: [
        {
          name: "create",
          description: "Create the metadata of a service instance",
          options: [
            {
              name: "--kind",
              description: "The kind of the service",
              args: {
                name: "kind",
                suggestions: ["fhir", "fhir-R4", "fhir-Stu3"],
              },
              isRequired: true,
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
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
              name: "--resource-name",
              description: "The name of the service instance",
              args: { name: "resource-name" },
              isRequired: true,
            },
            {
              name: "--access-policies",
              description: "The access policies of the service instance",
              args: { name: "access-policies" },
            },
            {
              name: ["--authentication-configuration", "-c"],
              description:
                "The authentication configuration for the service instance",
              args: { name: "authentication-configuration" },
            },
            {
              name: "--cors-configuration",
              description:
                "The settings for the CORS configuration of the service instance",
              args: { name: "cors-configuration" },
            },
            {
              name: "--cosmos-db-configuration",
              description:
                "The settings for the Cosmos DB database backing the service",
              args: { name: "cosmos-db-configuration" },
            },
            {
              name: "--etag",
              description:
                "An etag associated with the resource, used for optimistic concurrency when editing it",
              args: { name: "etag" },
            },
            {
              name: ["--export-configuration-storage-account-name", "-s"],
              description: "The name of the default export storage account",
              args: { name: "export-configuration-storage-account-name" },
            },
            {
              name: "--identity-type",
              description:
                "Type of identity being specified, currently SystemAssigned and None are allowed",
              args: {
                name: "identity-type",
                suggestions: ["None", "SystemAssigned"],
              },
            },
            {
              name: "--login-servers",
              description:
                "The list of login servers that shallbe added to the service instance",
              args: { name: "login-servers" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--oci-artifacts",
              description:
                "The list of Open Container Initiative (OCI) artifacts",
              args: { name: "oci-artifacts" },
            },
            {
              name: "--private-endpoint-connections",
              description:
                "The list of private endpoint connections that are set up for this resource",
              args: { name: "private-endpoint-connections" },
            },
            {
              name: "--public-network-access",
              description:
                "Control permission for data plane traffic coming from public networks while private endpoint is enabled",
              args: {
                name: "public-network-access",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a service instance",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
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
            {
              name: "--resource-name",
              description: "The name of the service instance",
              args: { name: "resource-name" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
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
          description:
            "Get all the service instances in a resource group. And Get all the service instances in a subscription",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "show",
          description: "Get the metadata of a service instance",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "The name of the service instance",
              args: { name: "resource-name" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
          ],
        },
        {
          name: "update",
          description: "Update the metadata of a service instance",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--public-network-access",
              description:
                "Control permission for data plane traffic coming from public networks while private endpoint is enabled",
              args: {
                name: "public-network-access",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "The name of the service instance",
              args: { name: "resource-name" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the healthcareapis service is met",
          options: [
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
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--interval",
              description: "Polling interval in seconds",
              args: { name: "interval" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-name",
              description: "The name of the service instance",
              args: { name: "resource-name" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
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
      ],
    },
    {
      name: "workspace",
      description: "Manage workspace with healthcareapis",
      subcommands: [
        {
          name: "create",
          description:
            "Create a workspace resource with the specified parameters",
          options: [
            {
              name: ["--workspace-name", "--name", "-n"],
              description: "The name of workspace resource",
              args: { name: "workspace-name" },
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
              name: "--etag",
              description:
                "An etag associated with the resource, used for optimistic concurrency when editing it",
              args: { name: "etag" },
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
              name: "--public-network-access",
              description:
                "Control permission for data plane traffic coming from public networks while private endpoint is enabled",
              args: {
                name: "public-network-access",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes a specified workspace",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--workspace-name", "--name", "-n"],
              description: "The name of workspace resource",
              args: { name: "workspace-name" },
            },
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
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
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
          description:
            "Lists all the available workspaces under the specified resource group. And Lists all the available workspaces under the specified subscription",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "show",
          description: "Gets the properties of the specified workspace",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--workspace-name", "--name", "-n"],
              description: "The name of workspace resource",
              args: { name: "workspace-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
          ],
        },
        {
          name: "update",
          description: "Patch workspace details",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--workspace-name", "--name", "-n"],
              description: "The name of workspace resource",
              args: { name: "workspace-name" },
            },
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
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the healthcareapis workspace is met",
          options: [
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
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--interval",
              description: "Polling interval in seconds",
              args: { name: "interval" },
            },
            {
              name: ["--workspace-name", "--name", "-n"],
              description: "The name of workspace resource",
              args: { name: "workspace-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
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
          name: "dicom-service",
          description: "Manage dicom service with healthcareapis",
          subcommands: [
            {
              name: "create",
              description:
                "Create a DICOM Service resource with the specified parameters",
              options: [
                {
                  name: ["--dicom-service-name", "--name", "-n"],
                  description: "The name of DICOM Service resource",
                  args: { name: "dicom-service-name" },
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
                  name: "--workspace-name",
                  description: "The name of workspace resource",
                  args: { name: "workspace-name" },
                  isRequired: true,
                },
                {
                  name: "--etag",
                  description:
                    "An etag associated with the resource, used for optimistic concurrency when editing it",
                  args: { name: "etag" },
                },
                {
                  name: "--identity-type",
                  description:
                    "Type of identity being specified, currently SystemAssigned and None are allowed",
                  args: {
                    name: "identity-type",
                    suggestions: [
                      "None",
                      "SystemAssigned",
                      "SystemAssigned",
                      "UserAssigned",
                      "UserAssigned",
                    ],
                  },
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
                  name: "--public-network-access",
                  description:
                    "Control permission for data plane traffic coming from public networks while private endpoint is enabled",
                  args: {
                    name: "public-network-access",
                    suggestions: ["Disabled", "Enabled"],
                  },
                },
                {
                  name: "--tags",
                  description:
                    'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
                  args: { name: "tags" },
                },
                {
                  name: ["--user-assigned-identities", "-i"],
                  description:
                    "The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests. Expected value: json-string/json-file/@json-file",
                  args: { name: "user-assigned-identities" },
                },
              ],
            },
            {
              name: "delete",
              description: "Deletes a DICOM Service",
              options: [
                {
                  name: ["--dicom-service-name", "--name", "-n"],
                  description: "The name of DICOM Service resource",
                  args: { name: "dicom-service-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
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
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--workspace-name",
                  description: "The name of workspace resource",
                  args: { name: "workspace-name" },
                },
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "list",
              description: "Lists all DICOM Services for the given workspace",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--workspace-name",
                  description: "The name of workspace resource",
                  args: { name: "workspace-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description: "Gets the properties of the specified DICOM Service",
              options: [
                {
                  name: ["--dicom-service-name", "--name", "-n"],
                  description: "The name of DICOM Service resource",
                  args: { name: "dicom-service-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--workspace-name",
                  description: "The name of workspace resource",
                  args: { name: "workspace-name" },
                },
              ],
            },
            {
              name: "update",
              description: "Patch DICOM Service details",
              options: [
                {
                  name: ["--dicom-service-name", "--name", "-n"],
                  description: "The name of DICOM Service resource",
                  args: { name: "dicom-service-name" },
                },
                {
                  name: "--identity-type",
                  description:
                    "Type of identity being specified, currently SystemAssigned and None are allowed",
                  args: {
                    name: "identity-type",
                    suggestions: [
                      "None",
                      "SystemAssigned",
                      "SystemAssigned",
                      "UserAssigned",
                      "UserAssigned",
                    ],
                  },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
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
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--tags",
                  description:
                    'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
                  args: { name: "tags" },
                },
                {
                  name: ["--user-assigned-identities", "-i"],
                  description:
                    "The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests. Expected value: json-string/json-file/@json-file",
                  args: { name: "user-assigned-identities" },
                },
                {
                  name: "--workspace-name",
                  description: "The name of workspace resource",
                  args: { name: "workspace-name" },
                },
              ],
            },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition of the healthcareapis workspace dicom-service is met",
              options: [
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
                {
                  name: ["--dicom-service-name", "--name", "-n"],
                  description: "The name of DICOM Service resource",
                  args: { name: "dicom-service-name" },
                },
                {
                  name: "--exists",
                  description: "Wait until the resource exists",
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--interval",
                  description: "Polling interval in seconds",
                  args: { name: "interval" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
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
                {
                  name: "--workspace-name",
                  description: "The name of workspace resource",
                  args: { name: "workspace-name" },
                },
              ],
            },
          ],
        },
        {
          name: "fhir-service",
          description: "Manage fhir service with healthcareapis",
          subcommands: [
            {
              name: "create",
              description:
                "Create a FHIR Service resource with the specified parameters",
              options: [
                {
                  name: ["--fhir-service-name", "--name", "-n"],
                  description: "The name of FHIR Service resource",
                  args: { name: "fhir-service-name" },
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
                  name: "--workspace-name",
                  description: "The name of workspace resource",
                  args: { name: "workspace-name" },
                  isRequired: true,
                },
                {
                  name: "--access-policies",
                  description: "Fhir Service access policies",
                  args: { name: "access-policies" },
                },
                {
                  name: ["--authentication-configuration", "-c"],
                  description: "Fhir Service authentication configuration",
                  args: { name: "authentication-configuration" },
                },
                {
                  name: "--cors-configuration",
                  description: "Fhir Service Cors configuration",
                  args: { name: "cors-configuration" },
                },
                {
                  name: "--default",
                  description:
                    "The default value for tracking history across all resources",
                  args: {
                    name: "default",
                    suggestions: [
                      "no-version",
                      "versioned",
                      "versioned-update",
                    ],
                  },
                },
                {
                  name: "--etag",
                  description:
                    "An etag associated with the resource, used for optimistic concurrency when editing it",
                  args: { name: "etag" },
                },
                {
                  name: ["--export-configuration-storage-account-name", "-s"],
                  description: "The name of the default export storage account",
                  args: { name: "export-configuration-storage-account-name" },
                },
                {
                  name: "--identity-type",
                  description:
                    "Type of identity being specified, currently SystemAssigned and None are allowed",
                  args: {
                    name: "identity-type",
                    suggestions: [
                      "None",
                      "SystemAssigned",
                      "SystemAssigned",
                      "UserAssigned",
                      "UserAssigned",
                    ],
                  },
                },
                {
                  name: "--kind",
                  description: "The kind of the service",
                  args: { name: "kind", suggestions: ["fhir-R4", "fhir-Stu3"] },
                },
                {
                  name: ["--location", "-l"],
                  description:
                    "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
                  args: { name: "location" },
                },
                {
                  name: "--login-servers",
                  description:
                    "The list of the Azure container registry login servers",
                  args: { name: "login-servers" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--oci-artifacts",
                  description:
                    "The list of Open Container Initiative (OCI) artifacts",
                  args: { name: "oci-artifacts" },
                },
                {
                  name: "--public-network-access",
                  description:
                    "Control permission for data plane traffic coming from public networks while private endpoint is enabled",
                  args: {
                    name: "public-network-access",
                    suggestions: ["Disabled", "Enabled"],
                  },
                },
                {
                  name: ["--resource-type-overrides", "-r"],
                  description:
                    "A list of FHIR Resources and their version policy overrides. Expect value: KEY1=VALUE1 KEY2=VALUE2",
                  args: { name: "resource-type-overrides" },
                },
                {
                  name: "--tags",
                  description:
                    'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
                  args: { name: "tags" },
                },
                {
                  name: ["--user-assigned-identities", "-i"],
                  description:
                    "The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests. Expected value: json-string/json-file/@json-file",
                  args: { name: "user-assigned-identities" },
                },
              ],
            },
            {
              name: "delete",
              description: "Deletes a FHIR Service",
              options: [
                {
                  name: ["--fhir-service-name", "--name", "-n"],
                  description: "The name of FHIR Service resource",
                  args: { name: "fhir-service-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
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
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--workspace-name",
                  description: "The name of workspace resource",
                  args: { name: "workspace-name" },
                },
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "list",
              description: "Lists all FHIR Services for the given workspace",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--workspace-name",
                  description: "The name of workspace resource",
                  args: { name: "workspace-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description: "Gets the properties of the specified FHIR Service",
              options: [
                {
                  name: ["--fhir-service-name", "--name", "-n"],
                  description: "The name of FHIR Service resource",
                  args: { name: "fhir-service-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--workspace-name",
                  description: "The name of workspace resource",
                  args: { name: "workspace-name" },
                },
              ],
            },
            {
              name: "update",
              description: "Patch FHIR Service details",
              options: [
                {
                  name: ["--fhir-service-name", "--name", "-n"],
                  description: "The name of FHIR Service resource",
                  args: { name: "fhir-service-name" },
                },
                {
                  name: "--identity-type",
                  description:
                    "Type of identity being specified, currently SystemAssigned and None are allowed",
                  args: {
                    name: "identity-type",
                    suggestions: [
                      "None",
                      "SystemAssigned",
                      "SystemAssigned",
                      "UserAssigned",
                      "UserAssigned",
                    ],
                  },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
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
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--tags",
                  description:
                    'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
                  args: { name: "tags" },
                },
                {
                  name: ["--user-assigned-identities", "-i"],
                  description:
                    "The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests. Expected value: json-string/json-file/@json-file",
                  args: { name: "user-assigned-identities" },
                },
                {
                  name: "--workspace-name",
                  description: "The name of workspace resource",
                  args: { name: "workspace-name" },
                },
              ],
            },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition of the healthcareapis workspace fhir-service is met",
              options: [
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
                {
                  name: "--exists",
                  description: "Wait until the resource exists",
                },
                {
                  name: ["--fhir-service-name", "--name", "-n"],
                  description: "The name of FHIR Service resource",
                  args: { name: "fhir-service-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--interval",
                  description: "Polling interval in seconds",
                  args: { name: "interval" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
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
                {
                  name: "--workspace-name",
                  description: "The name of workspace resource",
                  args: { name: "workspace-name" },
                },
              ],
            },
          ],
        },
        {
          name: "iot-connector",
          description: "Manage iot connector with healthcareapis",
          subcommands: [
            {
              name: "create",
              description:
                "Create an IoT Connector resource with the specified parameters",
              options: [
                {
                  name: ["--iot-connector-name", "--name", "-n"],
                  description: "The name of IoT Connector resource",
                  args: { name: "iot-connector-name" },
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
                  name: "--workspace-name",
                  description: "The name of workspace resource",
                  args: { name: "workspace-name" },
                  isRequired: true,
                },
                {
                  name: "--content",
                  description:
                    "The mapping. Expected value: json-string/json-file/@json-file",
                  args: { name: "content" },
                },
                {
                  name: "--etag",
                  description:
                    "An etag associated with the resource, used for optimistic concurrency when editing it",
                  args: { name: "etag" },
                },
                {
                  name: "--identity-type",
                  description:
                    "Type of identity being specified, currently SystemAssigned and None are allowed",
                  args: {
                    name: "identity-type",
                    suggestions: [
                      "None",
                      "SystemAssigned",
                      "SystemAssigned",
                      "UserAssigned",
                      "UserAssigned",
                    ],
                  },
                },
                {
                  name: ["--ingestion-endpoint-configuration", "-c"],
                  description: "Source configuration",
                  args: { name: "ingestion-endpoint-configuration" },
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
                  name: "--tags",
                  description:
                    'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
                  args: { name: "tags" },
                },
                {
                  name: ["--user-assigned-identities", "-i"],
                  description:
                    "The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests. Expected value: json-string/json-file/@json-file",
                  args: { name: "user-assigned-identities" },
                },
              ],
            },
            {
              name: "delete",
              description: "Deletes an IoT Connector",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--iot-connector-name", "--name", "-n"],
                  description: "The name of IoT Connector resource",
                  args: { name: "iot-connector-name" },
                },
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
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--workspace-name",
                  description: "The name of workspace resource",
                  args: { name: "workspace-name" },
                },
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "list",
              description: "Lists all IoT Connectors for the given workspace",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--workspace-name",
                  description: "The name of workspace resource",
                  args: { name: "workspace-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description: "Gets the properties of the specified IoT Connector",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--iot-connector-name", "--name", "-n"],
                  description: "The name of IoT Connector resource",
                  args: { name: "iot-connector-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--workspace-name",
                  description: "The name of workspace resource",
                  args: { name: "workspace-name" },
                },
              ],
            },
            {
              name: "update",
              description: "Patch an IoT Connector",
              options: [
                {
                  name: "--identity-type",
                  description:
                    "Type of identity being specified, currently SystemAssigned and None are allowed",
                  args: {
                    name: "identity-type",
                    suggestions: [
                      "None",
                      "SystemAssigned",
                      "SystemAssigned",
                      "UserAssigned",
                      "UserAssigned",
                    ],
                  },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--iot-connector-name", "--name", "-n"],
                  description: "The name of IoT Connector resource",
                  args: { name: "iot-connector-name" },
                },
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
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--tags",
                  description:
                    'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
                  args: { name: "tags" },
                },
                {
                  name: ["--user-assigned-identities", "-i"],
                  description:
                    "The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests. Expected value: json-string/json-file/@json-file",
                  args: { name: "user-assigned-identities" },
                },
                {
                  name: "--workspace-name",
                  description: "The name of workspace resource",
                  args: { name: "workspace-name" },
                },
              ],
            },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition of the healthcareapis workspace iot-connector is met",
              options: [
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
                {
                  name: "--exists",
                  description: "Wait until the resource exists",
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--interval",
                  description: "Polling interval in seconds",
                  args: { name: "interval" },
                },
                {
                  name: ["--iot-connector-name", "--name", "-n"],
                  description: "The name of IoT Connector resource",
                  args: { name: "iot-connector-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
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
                {
                  name: "--workspace-name",
                  description: "The name of workspace resource",
                  args: { name: "workspace-name" },
                },
              ],
            },
            {
              name: "fhir-destination",
              description:
                "Manage iot connector fhir destination with healthcareapis",
              subcommands: [
                {
                  name: "create",
                  description:
                    "Create an IoT Connector FHIR destination resource with the specified parameters",
                  options: [
                    {
                      name: "--fhir-destination-name",
                      description:
                        "The name of IoT Connector FHIR destination resource",
                      args: { name: "fhir-destination-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--fhir-service-resource-id", "-r"],
                      description:
                        "Fully qualified resource id of the FHIR service to connect to",
                      args: { name: "fhir-service-resource-id" },
                      isRequired: true,
                    },
                    {
                      name: "--iot-connector-name",
                      description: "The name of IoT Connector resource",
                      args: { name: "iot-connector-name" },
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
                      name: ["--resource-identity-resolution-type", "-t"],
                      description:
                        "Determines how resource identity is resolved on the destination",
                      args: {
                        name: "resource-identity-resolution-type",
                        suggestions: ["Create", "Lookup"],
                      },
                      isRequired: true,
                    },
                    {
                      name: "--workspace-name",
                      description: "The name of workspace resource",
                      args: { name: "workspace-name" },
                      isRequired: true,
                    },
                    {
                      name: "--content",
                      description:
                        "The mapping. Expected value: json-string/json-file/@json-file",
                      args: { name: "content" },
                    },
                    {
                      name: "--etag",
                      description:
                        "An etag associated with the resource, used for optimistic concurrency when editing it",
                      args: { name: "etag" },
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
                  ],
                },
                {
                  name: "delete",
                  description: "Deletes an IoT Connector FHIR destination",
                  options: [
                    {
                      name: "--fhir-destination-name",
                      description:
                        "The name of IoT Connector FHIR destination resource",
                      args: { name: "fhir-destination-name" },
                    },
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids" },
                    },
                    {
                      name: "--iot-connector-name",
                      description: "The name of IoT Connector resource",
                      args: { name: "iot-connector-name" },
                    },
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
                    {
                      name: "--subscription",
                      description:
                        "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                      args: { name: "subscription" },
                    },
                    {
                      name: "--workspace-name",
                      description: "The name of workspace resource",
                      args: { name: "workspace-name" },
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
                    "Lists all FHIR destinations for the given IoT Connector",
                  options: [
                    {
                      name: "--iot-connector-name",
                      description: "The name of IoT Connector resource",
                      args: { name: "iot-connector-name" },
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
                      name: "--workspace-name",
                      description: "The name of workspace resource",
                      args: { name: "workspace-name" },
                      isRequired: true,
                    },
                  ],
                },
                {
                  name: "show",
                  description:
                    "Gets the properties of the specified Iot Connector FHIR destination",
                  options: [
                    {
                      name: "--fhir-destination-name",
                      description:
                        "The name of IoT Connector FHIR destination resource",
                      args: { name: "fhir-destination-name" },
                    },
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids" },
                    },
                    {
                      name: "--iot-connector-name",
                      description: "The name of IoT Connector resource",
                      args: { name: "iot-connector-name" },
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                    },
                    {
                      name: "--subscription",
                      description:
                        "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                      args: { name: "subscription" },
                    },
                    {
                      name: "--workspace-name",
                      description: "The name of workspace resource",
                      args: { name: "workspace-name" },
                    },
                  ],
                },
                {
                  name: "update",
                  description:
                    "Update an IoT Connector FHIR destination resource with the specified parameters",
                  options: [
                    {
                      name: ["--fhir-service-resource-id", "-r"],
                      description:
                        "Fully qualified resource id of the FHIR service to connect to",
                      args: { name: "fhir-service-resource-id" },
                      isRequired: true,
                    },
                    {
                      name: ["--resource-identity-resolution-type", "-t"],
                      description:
                        "Determines how resource identity is resolved on the destination",
                      args: {
                        name: "resource-identity-resolution-type",
                        suggestions: ["Create", "Lookup"],
                      },
                      isRequired: true,
                    },
                    {
                      name: "--add",
                      description:
                        "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                      args: { name: "add" },
                    },
                    {
                      name: "--content",
                      description:
                        "The mapping. Expected value: json-string/json-file/@json-file",
                      args: { name: "content" },
                    },
                    {
                      name: "--etag",
                      description:
                        "An etag associated with the resource, used for optimistic concurrency when editing it",
                      args: { name: "etag" },
                    },
                    {
                      name: "--fhir-destination-name",
                      description:
                        "The name of IoT Connector FHIR destination resource",
                      args: { name: "fhir-destination-name" },
                    },
                    {
                      name: "--force-string",
                      description:
                        "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
                    },
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids" },
                    },
                    {
                      name: "--iot-connector-name",
                      description: "The name of IoT Connector resource",
                      args: { name: "iot-connector-name" },
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
                      name: "--remove",
                      description:
                        "Remove a property or an element from a list. Example: --remove property.list OR --remove propertyToRemove",
                      args: { name: "remove" },
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                    },
                    {
                      name: "--set",
                      description:
                        "Update an object by specifying a property path and value to set. Example: --set property1.property2=",
                      args: { name: "set" },
                    },
                    {
                      name: "--subscription",
                      description:
                        "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                      args: { name: "subscription" },
                    },
                    {
                      name: "--workspace-name",
                      description: "The name of workspace resource",
                      args: { name: "workspace-name" },
                    },
                  ],
                },
                {
                  name: "wait",
                  description:
                    "Place the CLI in a waiting state until a condition of the healthcareapis workspace iot-connector fhir-destination is met",
                  options: [
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
                    {
                      name: "--exists",
                      description: "Wait until the resource exists",
                    },
                    {
                      name: "--fhir-destination-name",
                      description:
                        "The name of IoT Connector FHIR destination resource",
                      args: { name: "fhir-destination-name" },
                    },
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids" },
                    },
                    {
                      name: "--interval",
                      description: "Polling interval in seconds",
                      args: { name: "interval" },
                    },
                    {
                      name: "--iot-connector-name",
                      description: "The name of IoT Connector resource",
                      args: { name: "iot-connector-name" },
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                    },
                    {
                      name: "--subscription",
                      description:
                        "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
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
                    {
                      name: "--workspace-name",
                      description: "The name of workspace resource",
                      args: { name: "workspace-name" },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "private-endpoint-connection",
          description:
            "Manage workspace private endpoint connection with healthcareapis",
          subcommands: [
            {
              name: "create",
              description:
                "Update the state of the specified private endpoint connection associated with the workspace",
              options: [
                {
                  name: ["--private-endpoint-connection-name", "--name", "-n"],
                  description:
                    "The name of the private endpoint connection associated with the Azure resource",
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
                  name: "--workspace-name",
                  description: "The name of workspace resource",
                  args: { name: "workspace-name" },
                  isRequired: true,
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: ["--private-link-service-connection-state", "-s"],
                  description:
                    "A collection of information about the state of the connection between service consumer and provider",
                  args: { name: "private-link-service-connection-state" },
                },
              ],
            },
            {
              name: "delete",
              description: "Deletes a private endpoint connection",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--private-endpoint-connection-name", "--name", "-n"],
                  description:
                    "The name of the private endpoint connection associated with the Azure resource",
                  args: { name: "private-endpoint-connection-name" },
                },
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
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--workspace-name",
                  description: "The name of workspace resource",
                  args: { name: "workspace-name" },
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
                "Lists all private endpoint connections for a workspace",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--workspace-name",
                  description: "The name of workspace resource",
                  args: { name: "workspace-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description:
                "Gets the specified private endpoint connection associated with the workspace",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--private-endpoint-connection-name", "--name", "-n"],
                  description:
                    "The name of the private endpoint connection associated with the Azure resource",
                  args: { name: "private-endpoint-connection-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--workspace-name",
                  description: "The name of workspace resource",
                  args: { name: "workspace-name" },
                },
              ],
            },
            {
              name: "update",
              description:
                "Update the state of the specified private endpoint connection associated with the workspace",
              options: [
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add" },
                },
                {
                  name: "--force-string",
                  description:
                    "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--private-endpoint-connection-name", "--name", "-n"],
                  description:
                    "The name of the private endpoint connection associated with the Azure resource",
                  args: { name: "private-endpoint-connection-name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: ["--private-link-service-connection-state", "-s"],
                  description:
                    "A collection of information about the state of the connection between service consumer and provider",
                  args: { name: "private-link-service-connection-state" },
                },
                {
                  name: "--remove",
                  description:
                    "Remove a property or an element from a list. Example: --remove property.list OR --remove propertyToRemove",
                  args: { name: "remove" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--set",
                  description:
                    "Update an object by specifying a property path and value to set. Example: --set property1.property2=",
                  args: { name: "set" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--workspace-name",
                  description: "The name of workspace resource",
                  args: { name: "workspace-name" },
                },
              ],
            },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition of the healthcareapis workspace private-endpoint-connection is met",
              options: [
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
                {
                  name: "--exists",
                  description: "Wait until the resource exists",
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--interval",
                  description: "Polling interval in seconds",
                  args: { name: "interval" },
                },
                {
                  name: ["--private-endpoint-connection-name", "--name", "-n"],
                  description:
                    "The name of the private endpoint connection associated with the Azure resource",
                  args: { name: "private-endpoint-connection-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
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
                {
                  name: "--workspace-name",
                  description: "The name of workspace resource",
                  args: { name: "workspace-name" },
                },
              ],
            },
          ],
        },
        {
          name: "private-link-resource",
          description:
            "Manage workspace private link resource with healthcareapis",
          subcommands: [
            {
              name: "list",
              description:
                "Gets the private link resources that need to be created for a workspace",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--workspace-name",
                  description: "The name of workspace resource",
                  args: { name: "workspace-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description:
                "Gets a private link resource that need to be created for a workspace",
              options: [
                {
                  name: "--group-name",
                  description: "The name of the private link resource group",
                  args: { name: "group-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--workspace-name",
                  description: "The name of workspace resource",
                  args: { name: "workspace-name" },
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
