const completion: Fig.Spec = {
  name: "afd",
  description:
    "Manage Azure Front Door Standard/Premium. For classical Azure Front Door, please refer https://docs.microsoft.com/en-us/cli/azure/network/front-door?view=azure-cli-latest",
  subcommands: [
    {
      name: "custom-domain",
      description: "Manage custom domains within the specified profile",
      subcommands: [
        {
          name: "create",
          description: "Create a custom domain within the specified profile",
          options: [
            {
              name: "--certificate-type",
              description: "Defines the source of the SSL certificate",
              args: {
                name: "certificate-type",
                suggestions: [
                  "AzureFirstPartyManagedCertificate",
                  "CustomerCertificate",
                  "ManagedCertificate",
                ],
              },
              isRequired: true,
            },
            {
              name: "--custom-domain-name",
              description: "Name of the custom domain",
              args: { name: "custom-domain-name" },
              isRequired: true,
            },
            {
              name: "--host-name",
              description: "The host name of the domain. Must be a domain name",
              args: { name: "host-name" },
              isRequired: true,
            },
            {
              name: "--minimum-tls-version",
              description: "TLS protocol version that will be used for Https",
              args: {
                name: "minimum-tls-version",
                suggestions: ["TLS10", "TLS12"],
              },
              isRequired: true,
            },
            {
              name: "--profile-name",
              description:
                "Name of the CDN profile which is unique within the resource group",
              args: { name: "profile-name" },
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
              name: "--azure-dns-zone",
              description: "ID of the Azure DNS zone",
              args: { name: "azure-dns-zone" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--secret",
              description: "Name of the azure front door secret",
              args: { name: "secret" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a custom domain",
          options: [
            {
              name: "--custom-domain-name",
              description: "Name of the custom domain",
              args: { name: "custom-domain-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--profile-name",
              description:
                "Name of the CDN profile which is unique within the resource group",
              args: { name: "profile-name" },
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
            "List all the custom domains within the specified profile",
          options: [
            {
              name: "--profile-name",
              description:
                "Name of the CDN profile which is unique within the resource group",
              args: { name: "profile-name" },
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
          name: "regenerate-validation-token",
          description:
            "Regenerate the domain validation token to restart the validation process",
          options: [
            {
              name: "--custom-domain-name",
              description: "Name of the custom domain",
              args: { name: "custom-domain-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--profile-name",
              description:
                "Name of the CDN profile which is unique within the resource group",
              args: { name: "profile-name" },
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
          name: "show",
          description: "Show the custom domain details",
          options: [
            {
              name: "--custom-domain-name",
              description: "Name of the custom domain",
              args: { name: "custom-domain-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--profile-name",
              description:
                "Name of the CDN profile which is unique within the resource group",
              args: { name: "profile-name" },
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
          description: "Update a custom domain within the specified profile",
          options: [
            {
              name: "--azure-dns-zone",
              description: "ID of the Azure DNS zone",
              args: { name: "azure-dns-zone" },
            },
            {
              name: "--certificate-type",
              description: "Defines the source of the SSL certificate",
              args: {
                name: "certificate-type",
                suggestions: [
                  "AzureFirstPartyManagedCertificate",
                  "CustomerCertificate",
                  "ManagedCertificate",
                ],
              },
            },
            {
              name: "--custom-domain-name",
              description: "Name of the custom domain",
              args: { name: "custom-domain-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--minimum-tls-version",
              description: "TLS protocol version that will be used for Https",
              args: {
                name: "minimum-tls-version",
                suggestions: ["TLS10", "TLS12"],
              },
            },
            {
              name: "--profile-name",
              description:
                "Name of the CDN profile which is unique within the resource group",
              args: { name: "profile-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--secret",
              description: "Name of the azure front door secret",
              args: { name: "secret" },
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
            "Place the CLI in a waiting state until a condition of the custom domain is met",
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
            {
              name: "--custom-domain-name",
              description: "Name of the custom domain",
              args: { name: "custom-domain-name" },
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
              name: "--profile-name",
              description:
                "Name of the CDN profile which is unique within the resource group",
              args: { name: "profile-name" },
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
      ],
    },
    {
      name: "endpoint",
      description:
        "Manage AFD endpoints within the specified profile.\n\n\t\tAn endpoint is a logical grouping of domains and their associated configurations",
      subcommands: [
        {
          name: "create",
          description: "Creates an endpoint within the specified profile",
          options: [
            {
              name: "--endpoint-name",
              description:
                "Name of the endpoint under the profile which is unique globally",
              args: { name: "endpoint-name" },
              isRequired: true,
            },
            {
              name: "--profile-name",
              description:
                "Name of the CDN profile which is unique within the resource group",
              args: { name: "profile-name" },
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
              name: "--enabled-state",
              description: "Whether to enable this endpoint",
              args: {
                name: "enabled-state",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--name-reuse-scope",
              description:
                "Indicates the endpoint name reuse scope. The default value is TenantReuse",
              args: {
                name: "name-reuse-scope",
                suggestions: [
                  "NoReuse",
                  "ResourceGroupReuse",
                  "SubscriptionReuse",
                  "TenantReuse",
                ],
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
          description: "Delete an endpoint within the specified profile",
          options: [
            {
              name: "--endpoint-name",
              description:
                "Name of the endpoint under the profile which is unique globally",
              args: { name: "endpoint-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--profile-name",
              description:
                "Name of the CDN profile which is unique within the resource group",
              args: { name: "profile-name" },
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
          description: "List all the endpoints within the specified profile",
          options: [
            {
              name: "--profile-name",
              description:
                "Name of the CDN profile which is unique within the resource group",
              args: { name: "profile-name" },
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
          name: "purge",
          description: "Removes cached contents from Azure Front Door",
          options: [
            {
              name: "--content-paths",
              description:
                "The path to the content to be purged. Can describe a file path or a wildcard directory",
              args: { name: "content-paths" },
              isRequired: true,
            },
            {
              name: "--domains",
              description: "List of domains",
              args: { name: "domains" },
            },
            {
              name: "--endpoint-name",
              description:
                "Name of the endpoint under the profile which is unique globally",
              args: { name: "endpoint-name" },
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
              name: "--profile-name",
              description:
                "Name of the CDN profile which is unique within the resource group",
              args: { name: "profile-name" },
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
          name: "show",
          description:
            "Show details of an endpoint within the specified profile",
          options: [
            {
              name: "--endpoint-name",
              description:
                "Name of the endpoint under the profile which is unique globally",
              args: { name: "endpoint-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--profile-name",
              description:
                "Name of the CDN profile which is unique within the resource group",
              args: { name: "profile-name" },
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
          description: "Update an endpoint within the specified profile",
          options: [
            {
              name: "--enabled-state",
              description: "Whether to enable this endpoint",
              args: {
                name: "enabled-state",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--endpoint-name",
              description:
                "Name of the endpoint under the profile which is unique globally",
              args: { name: "endpoint-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--profile-name",
              description:
                "Name of the CDN profile which is unique within the resource group",
              args: { name: "profile-name" },
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
      ],
    },
    {
      name: "log-analytic",
      description: "Manage afd log analytic results",
      subcommands: [
        {
          name: "location",
          description: "Manage available location names for AFD log analysis",
          subcommands: [
            {
              name: "list",
              description:
                "Get all available location names for AFD log analytics report",
              options: [
                {
                  name: "--profile-name",
                  description:
                    "Name of the Azure Front Door Standard or Azure Front Door Premium profile which is unique within the resource group. which is unique within the resource group",
                  args: { name: "profile-name" },
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
          ],
        },
        {
          name: "metric",
          description: "Manage metric statistics for AFD profile",
          subcommands: [
            {
              name: "list",
              description: "Get log report for AFD profile",
              options: [
                {
                  name: "--custom-domains",
                  description: "The domains to be included",
                  args: { name: "custom-domains" },
                  isRequired: true,
                },
                {
                  name: "--date-time-begin",
                  description: "The start datetime",
                  args: { name: "date-time-begin" },
                  isRequired: true,
                },
                {
                  name: "--date-time-end",
                  description: "The end datetime",
                  args: { name: "date-time-end" },
                  isRequired: true,
                },
                {
                  name: "--granularity",
                  description: "The interval granularity",
                  args: {
                    name: "granularity",
                    suggestions: ["P1D", "PT1H", "PT5M"],
                  },
                  isRequired: true,
                },
                {
                  name: "--metrics",
                  description: "Metric types to include",
                  args: {
                    name: "metrics",
                    suggestions: [
                      "clientRequestBandwidth",
                      "clientRequestCount",
                      "clientRequestTraffic",
                      "originRequestBandwidth",
                      "originRequestTraffic",
                      "totalLatency",
                    ],
                  },
                  isRequired: true,
                },
                {
                  name: "--profile-name",
                  description:
                    "Name of the Azure Front Door Standard or Azure Front Door Premium profile which is unique within the resource group. which is unique within the resource group",
                  args: { name: "profile-name" },
                  isRequired: true,
                },
                {
                  name: "--protocols",
                  description: "The protocols to be included",
                  args: { name: "protocols" },
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
                  name: "--continents",
                  description: "ISO 3316-1 alpha-2 continent code",
                  args: { name: "continents" },
                },
                {
                  name: "--country-or-regions",
                  description: "ISO 3316-1 alpha-2 region code",
                  args: { name: "country-or-regions" },
                },
                {
                  name: "--group-by",
                  description: "Aggregate demensions",
                  args: {
                    name: "group-by",
                    suggestions: [
                      "cacheStatus",
                      "country",
                      "customDomain",
                      "httpStatusCode",
                      "protocol",
                    ],
                  },
                },
              ],
            },
          ],
        },
        {
          name: "ranking",
          description: "Manage ranking statistics for AFD profile",
          subcommands: [
            {
              name: "list",
              description: "Get log analytics ranking report for AFD profile",
              options: [
                {
                  name: "--date-time-begin",
                  description: "The start datetime",
                  args: { name: "date-time-begin" },
                  isRequired: true,
                },
                {
                  name: "--date-time-end",
                  description: "The end datetime",
                  args: { name: "date-time-end" },
                  isRequired: true,
                },
                {
                  name: "--max-ranking",
                  description:
                    "The maximum number of rows to return based on the ranking",
                  args: { name: "max-ranking" },
                  isRequired: true,
                },
                {
                  name: "--metrics",
                  description: "Metric types to include",
                  args: {
                    name: "metrics",
                    suggestions: [
                      "clientRequestCount",
                      "clientRequestTraffic",
                      "errorCount",
                      "hitCount",
                      "missCount",
                      "userErrorCount",
                    ],
                  },
                  isRequired: true,
                },
                {
                  name: "--profile-name",
                  description:
                    "Name of the Azure Front Door Standard or Azure Front Door Premium profile which is unique within the resource group. which is unique within the resource group",
                  args: { name: "profile-name" },
                  isRequired: true,
                },
                {
                  name: "--rankings",
                  description: "The dimemsions to be included for ranking",
                  args: {
                    name: "rankings",
                    suggestions: [
                      "browser",
                      "countryOrRegion",
                      "referrer",
                      "url",
                      "userAgent",
                    ],
                  },
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
                  name: "--custom-domains",
                  description: "The domains to be included",
                  args: { name: "custom-domains" },
                },
              ],
            },
          ],
        },
        {
          name: "resource",
          description:
            "Manage endpoints and custom domains available for AFD log analysis",
          subcommands: [
            {
              name: "list",
              description:
                "Get all endpoints and custom domains available for AFD log report",
              options: [
                {
                  name: "--profile-name",
                  description:
                    "Name of the Azure Front Door Standard or Azure Front Door Premium profile which is unique within the resource group. which is unique within the resource group",
                  args: { name: "profile-name" },
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
          ],
        },
      ],
    },
    {
      name: "origin",
      description:
        "Manage origins within the specified origin group.\n\n\t\tOrigins are the application servers where Front Door will route your client requests. Utilize any publicly accessible application server, including App Service, Traffic Manager, Private Link, and many others",
      subcommands: [
        {
          name: "create",
          description: "Create an AFD origin",
          options: [
            {
              name: "--enabled-state",
              description: "Whether to enable this origin",
              args: {
                name: "enabled-state",
                suggestions: ["Disabled", "Enabled"],
              },
              isRequired: true,
            },
            {
              name: "--host-name",
              description:
                "The address of the origin. Domain names, IPv4 addresses, and IPv6 addresses are supported.This should be unique across all origins in a origin group",
              args: { name: "host-name" },
              isRequired: true,
            },
            {
              name: "--origin-group-name",
              description:
                "Name of the origin group which is unique within the endpoint",
              args: { name: "origin-group-name" },
              isRequired: true,
            },
            {
              name: "--origin-name",
              description: "Name of the origin",
              args: { name: "origin-name" },
              isRequired: true,
            },
            {
              name: "--profile-name",
              description:
                "Name of the CDN profile which is unique within the resource group",
              args: { name: "profile-name" },
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
              name: "--enable-private-link",
              description:
                "Indicates whether private link is enanbled on that origin",
              args: {
                name: "enable-private-link",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--enforce-certificate-name-check",
              description:
                '"Whether to enable certificate name check at origin level',
              args: {
                name: "enforce-certificate-name-check",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--http-port",
              description: "The port used for http requests to the origin",
              args: { name: "http-port" },
            },
            {
              name: "--https-port",
              description: "The port used for https requests to the origin",
              args: { name: "https-port" },
            },
            {
              name: "--origin-host-header",
              description:
                "The Host header to send for requests to this origin. If you leave this blank, the request hostname determines this value. Azure CDN origins, such as Web Apps, Blob Storage, and Cloud Services require this host header value to match the origin hostname by default",
              args: { name: "origin-host-header" },
            },
            {
              name: "--priority",
              description:
                "Priority of origin in given origin group for load balancing. Higher priorities will not be used for load balancing if any lower priority origin is healthy. Must be between 1 and 5",
              args: { name: "priority" },
            },
            {
              name: "--private-link-location",
              description:
                "The location of origin that will be connected to using the private link",
              args: { name: "private-link-location" },
            },
            {
              name: "--private-link-request-message",
              description:
                "The message that is shown to the approver of the private link request",
              args: { name: "private-link-request-message" },
            },
            {
              name: "--private-link-resource",
              description:
                "The resource ID of the origin that will be connected to using the private link",
              args: { name: "private-link-resource" },
            },
            {
              name: "--private-link-sub-resource-type",
              description:
                'The sub-resource type of the origin that will be connected to using the private link.You can use "az network private-link-resource list" to obtain the supported sub-resource types',
              args: { name: "private-link-sub-resource-type" },
            },
            {
              name: "--weight",
              description:
                "Weight of the origin in given origin group for load balancing. Must be between 1 and 1000",
              args: { name: "weight" },
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes an existing origin within an origin group",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--origin-group-name",
              description:
                "Name of the origin group which is unique within the endpoint",
              args: { name: "origin-group-name" },
            },
            {
              name: "--origin-name",
              description: "Name of the origin",
              args: { name: "origin-name" },
            },
            {
              name: "--profile-name",
              description:
                "Name of the CDN profile which is unique within the resource group",
              args: { name: "profile-name" },
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
            "Lists all of the existing origins within an origin group",
          options: [
            {
              name: "--origin-group-name",
              description:
                "Name of the origin group which is unique within the endpoint",
              args: { name: "origin-group-name" },
              isRequired: true,
            },
            {
              name: "--profile-name",
              description:
                "Name of the CDN profile which is unique within the resource group",
              args: { name: "profile-name" },
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
          name: "show",
          description: "Gets an existing origin within an origin group",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--origin-group-name",
              description:
                "Name of the origin group which is unique within the endpoint",
              args: { name: "origin-group-name" },
            },
            {
              name: "--origin-name",
              description: "Name of the origin",
              args: { name: "origin-name" },
            },
            {
              name: "--profile-name",
              description:
                "Name of the CDN profile which is unique within the resource group",
              args: { name: "profile-name" },
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
          description: "Update the settings of the specified AFD origin",
          options: [
            {
              name: "--enable-private-link",
              description:
                "Indicates whether private link is enanbled on that origin",
              args: {
                name: "enable-private-link",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--enabled-state",
              description: "Whether to enable this origin",
              args: {
                name: "enabled-state",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--enforce-certificate-name-check",
              description:
                '"Whether to enable certificate name check at origin level',
              args: {
                name: "enforce-certificate-name-check",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--host-name",
              description:
                "The address of the origin. Domain names, IPv4 addresses, and IPv6 addresses are supported.This should be unique across all origins in a origin group",
              args: { name: "host-name" },
            },
            {
              name: "--http-port",
              description: "The port used for http requests to the origin",
              args: { name: "http-port" },
            },
            {
              name: "--https-port",
              description: "The port used for https requests to the origin",
              args: { name: "https-port" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--origin-group-name",
              description:
                "Name of the origin group which is unique within the endpoint",
              args: { name: "origin-group-name" },
            },
            {
              name: "--origin-host-header",
              description:
                "The Host header to send for requests to this origin. If you leave this blank, the request hostname determines this value. Azure CDN origins, such as Web Apps, Blob Storage, and Cloud Services require this host header value to match the origin hostname by default",
              args: { name: "origin-host-header" },
            },
            {
              name: "--origin-name",
              description: "Name of the origin",
              args: { name: "origin-name" },
            },
            {
              name: "--priority",
              description:
                "Priority of origin in given origin group for load balancing. Higher priorities will not be used for load balancing if any lower priority origin is healthy. Must be between 1 and 5",
              args: { name: "priority" },
            },
            {
              name: "--private-link-location",
              description:
                "The location of origin that will be connected to using the private link",
              args: { name: "private-link-location" },
            },
            {
              name: "--private-link-request-message",
              description:
                "The message that is shown to the approver of the private link request",
              args: { name: "private-link-request-message" },
            },
            {
              name: "--private-link-resource",
              description:
                "The resource ID of the origin that will be connected to using the private link",
              args: { name: "private-link-resource" },
            },
            {
              name: "--private-link-sub-resource-type",
              description:
                'The sub-resource type of the origin that will be connected to using the private link.You can use "az network private-link-resource list" to obtain the supported sub-resource types',
              args: { name: "private-link-sub-resource-type" },
            },
            {
              name: "--profile-name",
              description:
                "Name of the CDN profile which is unique within the resource group",
              args: { name: "profile-name" },
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
              name: "--weight",
              description:
                "Weight of the origin in given origin group for load balancing. Must be between 1 and 1000",
              args: { name: "weight" },
            },
          ],
        },
      ],
    },
    {
      name: "origin-group",
      description:
        "Manage origin groups under the specified profile.\n\n\t\tAn origin group is a set of origins to which Front Door load balances your client requests",
      subcommands: [
        {
          name: "create",
          description:
            "Creates a new origin group within the specified profile",
          options: [
            {
              name: "--additional-latency-in-milliseconds",
              description:
                "The additional latency in milliseconds for probes to fall into the lowest latency bucket",
              args: { name: "additional-latency-in-milliseconds" },
              isRequired: true,
            },
            {
              name: "--origin-group-name",
              description: "Name of the origin group",
              args: { name: "origin-group-name" },
              isRequired: true,
            },
            {
              name: "--probe-path",
              description:
                "The path relative to the origin that is used to determine the health of the origin",
              args: { name: "probe-path" },
              isRequired: true,
            },
            {
              name: "--probe-protocol",
              description: "Protocol to use for health probe",
              args: {
                name: "probe-protocol",
                suggestions: ["Http", "Https", "NotSet"],
              },
              isRequired: true,
            },
            {
              name: "--probe-request-type",
              description: "The type of health probe request that is made",
              args: {
                name: "probe-request-type",
                suggestions: ["GET", "HEAD", "NotSet"],
              },
              isRequired: true,
            },
            {
              name: "--profile-name",
              description:
                "Name of the CDN profile which is unique within the resource group",
              args: { name: "profile-name" },
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
              name: "--sample-size",
              description:
                "The number of samples to consider for load balancing decisions",
              args: { name: "sample-size" },
              isRequired: true,
            },
            {
              name: "--successful-samples-required",
              description:
                "The number of samples within the sample period that must succeed",
              args: { name: "successful-samples-required" },
              isRequired: true,
            },
            {
              name: "--probe-interval-in-seconds",
              description: "The number of seconds between health probes",
              args: { name: "probe-interval-in-seconds" },
            },
          ],
        },
        {
          name: "delete",
          description:
            "Deletes an existing origin group within the specified profile",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--origin-group-name",
              description: "Name of the origin group",
              args: { name: "origin-group-name" },
            },
            {
              name: "--profile-name",
              description:
                "Name of the CDN profile which is unique within the resource group",
              args: { name: "profile-name" },
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
            "Lists all of the existing origin groups within a profile",
          options: [
            {
              name: "--profile-name",
              description:
                "Name of the CDN profile which is unique within the resource group",
              args: { name: "profile-name" },
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
          name: "show",
          description: "Gets an existing origin group within a profile",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--origin-group-name",
              description: "Name of the origin group",
              args: { name: "origin-group-name" },
            },
            {
              name: "--profile-name",
              description:
                "Name of the CDN profile which is unique within the resource group",
              args: { name: "profile-name" },
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
          description:
            "Updates an existing origin group within the specified profile",
          options: [
            {
              name: "--additional-latency-in-milliseconds",
              description:
                "The additional latency in milliseconds for probes to fall into the lowest latency bucket",
              args: { name: "additional-latency-in-milliseconds" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--origin-group-name",
              description: "Name of the origin group",
              args: { name: "origin-group-name" },
            },
            {
              name: "--probe-interval-in-seconds",
              description: "The number of seconds between health probes",
              args: { name: "probe-interval-in-seconds" },
            },
            {
              name: "--probe-path",
              description:
                "The path relative to the origin that is used to determine the health of the origin",
              args: { name: "probe-path" },
            },
            {
              name: "--probe-protocol",
              description: "Protocol to use for health probe",
              args: {
                name: "probe-protocol",
                suggestions: ["Http", "Https", "NotSet"],
              },
            },
            {
              name: "--probe-request-type",
              description: "The type of health probe request that is made",
              args: {
                name: "probe-request-type",
                suggestions: ["GET", "HEAD", "NotSet"],
              },
            },
            {
              name: "--profile-name",
              description:
                "Name of the CDN profile which is unique within the resource group",
              args: { name: "profile-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--sample-size",
              description:
                "The number of samples to consider for load balancing decisions",
              args: { name: "sample-size" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--successful-samples-required",
              description:
                "The number of samples within the sample period that must succeed",
              args: { name: "successful-samples-required" },
            },
          ],
        },
      ],
    },
    {
      name: "profile",
      description: "Manage AFD profiles",
      subcommands: [
        {
          name: "create",
          description: "Create a new AFD profile",
          options: [
            {
              name: "--profile-name",
              description:
                "Name of the CDN profile which is unique within the resource group",
              args: { name: "profile-name" },
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
              description: "The pricing tier of the AFD profile",
              args: {
                name: "sku",
                suggestions: [
                  "Premium_AzureFrontDoor",
                  "Standard_AzureFrontDoor",
                ],
              },
              isRequired: true,
            },
            {
              name: "--origin-response-timeout-seconds",
              description:
                "Send and receive timeout on forwarding request to the origin. When timeout is reached, the request fails and returns",
              args: { name: "origin-response-timeout-seconds" },
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
          description: "Delete an AFD profile",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--profile-name",
              description:
                "Name of the CDN profile which is unique within the resource group",
              args: { name: "profile-name" },
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
          name: "list",
          description: "List AFD profiles",
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
          description: "Show details of an AFD profile",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--profile-name",
              description:
                "Name of the CDN profile which is unique within the resource group",
              args: { name: "profile-name" },
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
          description: "Update an AFD profile",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--origin-response-timeout-seconds",
              description:
                "Send and receive timeout on forwarding request to the origin. When timeout is reached, the request fails and returns",
              args: { name: "origin-response-timeout-seconds" },
            },
            {
              name: "--profile-name",
              description:
                "Name of the CDN profile which is unique within the resource group",
              args: { name: "profile-name" },
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
          name: "usage",
          description: "List resource usage within the specific AFD profile",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--profile-name",
              description:
                "Name of the CDN profile which is unique within the resource group",
              args: { name: "profile-name" },
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
      ],
    },
    {
      name: "route",
      description:
        "Manage routes under an AFD endpoint.\n\n\t\tA route maps your domains and matching URL path patterns to a specific origin group",
      subcommands: [
        {
          name: "create",
          description: "Creates a new route within the specified endpoint",
          options: [
            {
              name: "--endpoint-name",
              description: "Name of the endpoint",
              args: { name: "endpoint-name" },
              isRequired: true,
            },
            {
              name: "--forwarding-protocol",
              description:
                "Protocol this rule will use when forwarding traffic to backends",
              args: {
                name: "forwarding-protocol",
                suggestions: ["HttpOnly", "HttpsOnly", "MatchRequest"],
              },
              isRequired: true,
            },
            {
              name: "--https-redirect",
              description:
                "Whether to automatically redirect HTTP traffic to HTTPS traffic",
              args: {
                name: "https-redirect",
                suggestions: ["Disabled", "Enabled"],
              },
              isRequired: true,
            },
            {
              name: "--origin-group",
              description:
                "Name or ID of the origin group to be associated with",
              args: { name: "origin-group" },
              isRequired: true,
            },
            {
              name: "--profile-name",
              description:
                "Name of the CDN profile which is unique within the resource group",
              args: { name: "profile-name" },
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
              name: "--route-name",
              description: "Name of the route",
              args: { name: "route-name" },
              isRequired: true,
            },
            {
              name: "--supported-protocols",
              description: "List of supported protocols for this route",
              args: {
                name: "supported-protocols",
                suggestions: ["Http", "Https"],
              },
              isRequired: true,
            },
            {
              name: "--content-types-to-compress",
              description:
                "List of content types on which compression applies. The value should be a valid MIME type",
              args: { name: "content-types-to-compress" },
            },
            {
              name: "--custom-domains",
              description: "Custom domains referenced by this endpoint",
              args: { name: "custom-domains" },
            },
            {
              name: "--enable-caching",
              description:
                "Indicates whether caching is enanbled on that route",
            },
            {
              name: "--enable-compression",
              description:
                "Indicates whether content compression is enabled on AzureFrontDoor. Default value is false. If compression is enabled, content will be served as compressed if user requests for a compressed version. Content won't be compressed on AzureFrontDoor when requested content is smaller than 1 byte or larger than 1 MB",
            },
            {
              name: "--enabled-state",
              description: "Whether to enable this route",
              args: {
                name: "enabled-state",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--link-to-default-domain",
              description:
                "Whether this route will be linked to the default endpoint domain",
              args: {
                name: "link-to-default-domain",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--origin-path",
              description:
                "A directory path on the origin that Azure Front Door can use to retrieve content from",
              args: { name: "origin-path" },
            },
            {
              name: "--patterns-to-match",
              description: "The route patterns of the rule",
              args: { name: "patterns-to-match" },
            },
            {
              name: "--query-parameters",
              description: "Query parameters to include or exclude",
              args: { name: "query-parameters" },
            },
            {
              name: "--query-string-caching-behavior",
              description:
                "Defines how CDN caches requests that include query strings. You can ignore any query strings when caching, bypass caching to prevent requests that contain query strings from being cached, or cache every request with a unique URL",
              args: {
                name: "query-string-caching-behavior",
                suggestions: [
                  "IgnoreQueryString",
                  "IgnoreSpecifiedQueryStrings",
                  "IncludeSpecifiedQueryStrings",
                  "UseQueryString",
                ],
              },
            },
            {
              name: "--rule-sets",
              description:
                "Collection of ID or name of rule set referenced by the route",
              args: { name: "rule-sets" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete an existing route within the specified endpoint",
          options: [
            {
              name: "--endpoint-name",
              description: "Name of the endpoint",
              args: { name: "endpoint-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--profile-name",
              description:
                "Name of the CDN profile which is unique within the resource group",
              args: { name: "profile-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--route-name",
              description: "Name of the route",
              args: { name: "route-name" },
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
          description: "List all the routes within the specified endpoint",
          options: [
            {
              name: "--endpoint-name",
              description: "Name of the endpoint",
              args: { name: "endpoint-name" },
              isRequired: true,
            },
            {
              name: "--profile-name",
              description:
                "Name of the CDN profile which is unique within the resource group",
              args: { name: "profile-name" },
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
          name: "show",
          description: "Show route details",
          options: [
            {
              name: "--endpoint-name",
              description: "Name of the endpoint",
              args: { name: "endpoint-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--profile-name",
              description:
                "Name of the CDN profile which is unique within the resource group",
              args: { name: "profile-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--route-name",
              description: "Name of the route",
              args: { name: "route-name" },
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
          description: "Update an existing route within the specified endpoint",
          options: [
            {
              name: "--content-types-to-compress",
              description:
                "List of content types on which compression applies. The value should be a valid MIME type",
              args: { name: "content-types-to-compress" },
            },
            {
              name: "--custom-domains",
              description: "Custom domains referenced by this endpoint",
              args: { name: "custom-domains" },
            },
            {
              name: "--enable-caching",
              description:
                "Indicates whether caching is enanbled on that route",
              args: { name: "enable-caching", suggestions: ["false", "true"] },
            },
            {
              name: "--enable-compression",
              description:
                "Indicates whether content compression is enabled on AzureFrontDoor. Default value is false. If compression is enabled, content will be served as compressed if user requests for a compressed version. Content won't be compressed on AzureFrontDoor when requested content is smaller than 1 byte or larger than 1 MB",
              args: {
                name: "enable-compression",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--enabled-state",
              description: "Whether to enable this route",
              args: {
                name: "enabled-state",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--endpoint-name",
              description: "Name of the endpoint",
              args: { name: "endpoint-name" },
            },
            {
              name: "--forwarding-protocol",
              description:
                "Protocol this rule will use when forwarding traffic to backends",
              args: {
                name: "forwarding-protocol",
                suggestions: ["HttpOnly", "HttpsOnly", "MatchRequest"],
              },
            },
            {
              name: "--https-redirect",
              description:
                "Whether to automatically redirect HTTP traffic to HTTPS traffic",
              args: {
                name: "https-redirect",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--link-to-default-domain",
              description:
                "Whether this route will be linked to the default endpoint domain",
              args: {
                name: "link-to-default-domain",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--origin-group",
              description:
                "Name or ID of the origin group to be associated with",
              args: { name: "origin-group" },
            },
            {
              name: "--origin-path",
              description:
                "A directory path on the origin that Azure Front Door can use to retrieve content from",
              args: { name: "origin-path" },
            },
            {
              name: "--patterns-to-match",
              description: "The route patterns of the rule",
              args: { name: "patterns-to-match" },
            },
            {
              name: "--profile-name",
              description:
                "Name of the CDN profile which is unique within the resource group",
              args: { name: "profile-name" },
            },
            {
              name: "--query-parameters",
              description: "Query parameters to include or exclude",
              args: { name: "query-parameters" },
            },
            {
              name: "--query-string-caching-behavior",
              description:
                "Defines how CDN caches requests that include query strings. You can ignore any query strings when caching, bypass caching to prevent requests that contain query strings from being cached, or cache every request with a unique URL",
              args: {
                name: "query-string-caching-behavior",
                suggestions: [
                  "IgnoreQueryString",
                  "IgnoreSpecifiedQueryStrings",
                  "IncludeSpecifiedQueryStrings",
                  "UseQueryString",
                ],
              },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--route-name",
              description: "Name of the route",
              args: { name: "route-name" },
            },
            {
              name: "--rule-sets",
              description:
                "Collection of ID or name of rule set referenced by the route",
              args: { name: "rule-sets" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--supported-protocols",
              description: "List of supported protocols for this route",
              args: {
                name: "supported-protocols",
                suggestions: ["Http", "Https"],
              },
            },
          ],
        },
      ],
    },
    {
      name: "rule",
      description: "Manage delivery rules within the specified rule set",
      subcommands: [
        {
          name: "create",
          description:
            "Creates a new delivery rule within the specified rule set",
          options: [
            {
              name: "--action-name",
              description:
                "The name of the action for the delivery rule: https://docs.microsoft.com/en-us/azure/frontdoor/front-door-rules-engine-actions",
              args: {
                name: "action-name",
                suggestions: [
                  "ModifyRequestHeader",
                  "ModifyResponseHeader",
                  "RouteConfigurationOverride",
                  "UrlRedirect",
                  "UrlRewrite",
                ],
              },
              isRequired: true,
            },
            {
              name: "--order",
              description:
                "The order in which the rules are applied for the endpoint. Possible values {0,1,2,3,………}. A rule with a lower order will be applied before one with a higher order. Rule with order 0 is a special rule. It does not require any condition and actions listed in it will always be applied",
              args: { name: "order" },
              isRequired: true,
            },
            {
              name: "--profile-name",
              description:
                "Name of the CDN profile which is unique within the resource group",
              args: { name: "profile-name" },
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
              name: "--rule-name",
              description: "Name of the rule",
              args: { name: "rule-name" },
              isRequired: true,
            },
            {
              name: "--rule-set-name",
              description: "Name of the rule set",
              args: { name: "rule-set-name" },
              isRequired: true,
            },
            {
              name: "--cache-behavior",
              description: "Caching behavior for the requests",
              args: {
                name: "cache-behavior",
                suggestions: [
                  "HonorOrigin",
                  "OverrideAlways",
                  "OverrideIfOriginMissing",
                ],
              },
            },
            {
              name: "--cache-duration",
              description:
                "The duration for which the content needs to be cached. Allowed format is [d.]hh:mm:ss",
              args: { name: "cache-duration" },
            },
            {
              name: "--custom-fragment",
              description: "Fragment to add to the redirect URL",
              args: { name: "custom-fragment" },
            },
            {
              name: "--custom-hostname",
              description:
                "Host to redirect. Leave empty to use the incoming host as the destination host",
              args: { name: "custom-hostname" },
            },
            {
              name: "--custom-path",
              description:
                "The full path to redirect. Path cannot be empty and must start with /. Leave empty to use the incoming path as destination path",
              args: { name: "custom-path" },
            },
            {
              name: "--custom-querystring",
              description:
                "The set of query strings to be placed in the redirect URL. leave empty to preserve the incoming query string",
              args: { name: "custom-querystring" },
            },
            {
              name: "--destination",
              description: "The destination path to be used in the rewrite",
              args: { name: "destination" },
            },
            {
              name: "--enable-caching",
              description: "Indicates whether to enable caching on the route",
              args: { name: "enable-caching", suggestions: ["false", "true"] },
            },
            {
              name: "--enable-compression",
              description:
                "Indicates whether content compression is enabled on AzureFrontDoor. Default value is false. If compression is enabled, content will be served as compressed if user requests for a compressed version. Content won't be compressed on AzureFrontDoor when requested content is smaller than 1 byte or larger than 1 MB",
              args: {
                name: "enable-compression",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--forwarding-protocol",
              description:
                "Protocol this rule will use when forwarding traffic to backends",
              args: {
                name: "forwarding-protocol",
                suggestions: ["HttpOnly", "HttpsOnly", "MatchRequest"],
              },
            },
            {
              name: "--header-action",
              description: "Header action for the requests",
              args: {
                name: "header-action",
                suggestions: ["Append", "Delete", "Overwrite"],
              },
            },
            {
              name: "--header-name",
              description: "Name of the header to modify",
              args: { name: "header-name" },
            },
            {
              name: "--header-value",
              description: "Value of the header",
              args: { name: "header-value" },
            },
            {
              name: "--match-processing-behavior",
              description:
                "Indicate whether rules engine should continue to run the remaining rules or stop if matched. Defaults to Continue",
              args: {
                name: "match-processing-behavior",
                suggestions: ["Continue", "Stop"],
              },
            },
            {
              name: "--match-values",
              description:
                'Match values of the match condition. e.g, space separated values "GET" "HTTP"',
              args: { name: "match-values" },
            },
            {
              name: "--match-variable",
              description:
                "Name of the match condition: https://docs.microsoft.com/en-us/azure/frontdoor/rules-match-conditions",
              args: {
                name: "match-variable",
                suggestions: [
                  "ClientPort",
                  "Cookies",
                  "HostName",
                  "HttpVersion",
                  "IsDevice",
                  "PostArgs",
                  "QueryString",
                  "RemoteAddress",
                  "RequestBody",
                  "RequestHeader",
                  "RequestMethod",
                  "RequestScheme",
                  "RequestUri",
                  "ServerPort",
                  "SocketAddr",
                  "SslProtocol",
                  "UrlFileExtension",
                  "UrlFileName",
                  "UrlPath",
                ],
              },
            },
            {
              name: "--negate-condition",
              description: "If true, negates the condition",
              args: {
                name: "negate-condition",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--operator",
              description: "Operator of the match condition",
              args: { name: "operator" },
            },
            {
              name: "--origin-group",
              description:
                "Name or ID of the OriginGroup that would override the default OriginGroup",
              args: { name: "origin-group" },
            },
            {
              name: "--preserve-unmatched-path",
              description:
                "If True, the remaining path after the source pattern will be appended to the new destination path",
              args: {
                name: "preserve-unmatched-path",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--query-parameters",
              description: "Query parameters to include or exclude",
              args: { name: "query-parameters" },
            },
            {
              name: "--query-string-caching-behavior",
              description:
                "Defines how CDN caches requests that include query strings. You can ignore any query strings when caching, bypass caching to prevent requests that contain query strings from being cached, or cache every request with a unique URL",
              args: {
                name: "query-string-caching-behavior",
                suggestions: [
                  "IgnoreQueryString",
                  "IgnoreSpecifiedQueryStrings",
                  "IncludeSpecifiedQueryStrings",
                  "UseQueryString",
                ],
              },
            },
            {
              name: "--redirect-protocol",
              description: "Protocol to use for the redirect",
              args: {
                name: "redirect-protocol",
                suggestions: ["Http", "Https", "MatchRequest"],
              },
            },
            {
              name: "--redirect-type",
              description:
                "The redirect type the rule will use when redirecting traffic",
              args: {
                name: "redirect-type",
                suggestions: [
                  "Found",
                  "Moved",
                  "PermanentRedirect",
                  "TemporaryRedirect",
                ],
              },
            },
            {
              name: "--selector",
              description: "Selector of the match condition",
              args: { name: "selector" },
            },
            {
              name: "--source-pattern",
              description:
                "A request URI pattern that identifies the type of requests that may be rewritten",
              args: { name: "source-pattern" },
            },
            {
              name: "--transforms",
              description: "Transform to apply before matching",
              args: {
                name: "transforms",
                suggestions: [
                  "Lowercase",
                  "RemoveNulls",
                  "Trim",
                  "Uppercase",
                  "UrlDecode",
                  "UrlEncode",
                ],
              },
            },
          ],
        },
        {
          name: "delete",
          description: "Remove a delivery rule from rule set",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--profile-name",
              description:
                "Name of the CDN profile which is unique within the resource group",
              args: { name: "profile-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--rule-name",
              description: "Name of the rule",
              args: { name: "rule-name" },
            },
            {
              name: "--rule-set-name",
              description: "Name of the rule set",
              args: { name: "rule-set-name" },
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
            "Lists all of the existing delivery rules within a rule set",
          options: [
            {
              name: "--profile-name",
              description:
                "Name of the CDN profile which is unique within the resource group",
              args: { name: "profile-name" },
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
              name: "--rule-set-name",
              description: "Name of the rule set",
              args: { name: "rule-set-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description: "Show delivery rule details",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--profile-name",
              description:
                "Name of the CDN profile which is unique within the resource group",
              args: { name: "profile-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--rule-name",
              description: "Name of the rule",
              args: { name: "rule-name" },
            },
            {
              name: "--rule-set-name",
              description: "Name of the rule set",
              args: { name: "rule-set-name" },
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
          name: "action",
          description: "Manage delivery rule actions for a rule",
          subcommands: [
            {
              name: "add",
              description: "Add an action to a delivery rule",
              options: [
                {
                  name: "--action-name",
                  description:
                    "The name of the action for the delivery rule: https://docs.microsoft.com/en-us/azure/frontdoor/front-door-rules-engine-actions",
                  args: {
                    name: "action-name",
                    suggestions: [
                      "ModifyRequestHeader",
                      "ModifyResponseHeader",
                      "RouteConfigurationOverride",
                      "UrlRedirect",
                      "UrlRewrite",
                    ],
                  },
                  isRequired: true,
                },
                {
                  name: "--cache-behavior",
                  description: "Caching behavior for the requests",
                  args: {
                    name: "cache-behavior",
                    suggestions: [
                      "HonorOrigin",
                      "OverrideAlways",
                      "OverrideIfOriginMissing",
                    ],
                  },
                },
                {
                  name: "--cache-duration",
                  description:
                    "The duration for which the content needs to be cached. Allowed format is [d.]hh:mm:ss",
                  args: { name: "cache-duration" },
                },
                {
                  name: "--custom-fragment",
                  description: "Fragment to add to the redirect URL",
                  args: { name: "custom-fragment" },
                },
                {
                  name: "--custom-hostname",
                  description:
                    "Host to redirect. Leave empty to use the incoming host as the destination host",
                  args: { name: "custom-hostname" },
                },
                {
                  name: "--custom-path",
                  description:
                    "The full path to redirect. Path cannot be empty and must start with /. Leave empty to use the incoming path as destination path",
                  args: { name: "custom-path" },
                },
                {
                  name: "--custom-querystring",
                  description:
                    "The set of query strings to be placed in the redirect URL. leave empty to preserve the incoming query string",
                  args: { name: "custom-querystring" },
                },
                {
                  name: "--destination",
                  description: "The destination path to be used in the rewrite",
                  args: { name: "destination" },
                },
                {
                  name: "--enable-caching",
                  description:
                    "Indicates whether to enable caching on the route",
                  args: {
                    name: "enable-caching",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--enable-compression",
                  description:
                    "Indicates whether content compression is enabled on AzureFrontDoor. Default value is false. If compression is enabled, content will be served as compressed if user requests for a compressed version. Content won't be compressed on AzureFrontDoor when requested content is smaller than 1 byte or larger than 1 MB",
                  args: {
                    name: "enable-compression",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--forwarding-protocol",
                  description:
                    "Protocol this rule will use when forwarding traffic to backends",
                  args: {
                    name: "forwarding-protocol",
                    suggestions: ["HttpOnly", "HttpsOnly", "MatchRequest"],
                  },
                },
                {
                  name: "--header-action",
                  description: "Header action for the requests",
                  args: {
                    name: "header-action",
                    suggestions: ["Append", "Delete", "Overwrite"],
                  },
                },
                {
                  name: "--header-name",
                  description: "Name of the header to modify",
                  args: { name: "header-name" },
                },
                {
                  name: "--header-value",
                  description: "Value of the header",
                  args: { name: "header-value" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--origin-group",
                  description:
                    "Name or ID of the OriginGroup that would override the default OriginGroup",
                  args: { name: "origin-group" },
                },
                {
                  name: "--preserve-unmatched-path",
                  description:
                    "If True, the remaining path after the source pattern will be appended to the new destination path",
                  args: {
                    name: "preserve-unmatched-path",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--profile-name",
                  description:
                    "Name of the CDN profile which is unique within the resource group",
                  args: { name: "profile-name" },
                },
                {
                  name: "--query-parameters",
                  description: "Query parameters to include or exclude",
                  args: { name: "query-parameters" },
                },
                {
                  name: "--query-string-caching-behavior",
                  description:
                    "Defines how CDN caches requests that include query strings. You can ignore any query strings when caching, bypass caching to prevent requests that contain query strings from being cached, or cache every request with a unique URL",
                  args: {
                    name: "query-string-caching-behavior",
                    suggestions: [
                      "IgnoreQueryString",
                      "IgnoreSpecifiedQueryStrings",
                      "IncludeSpecifiedQueryStrings",
                      "UseQueryString",
                    ],
                  },
                },
                {
                  name: "--redirect-protocol",
                  description: "Protocol to use for the redirect",
                  args: {
                    name: "redirect-protocol",
                    suggestions: ["Http", "Https", "MatchRequest"],
                  },
                },
                {
                  name: "--redirect-type",
                  description:
                    "The redirect type the rule will use when redirecting traffic",
                  args: {
                    name: "redirect-type",
                    suggestions: [
                      "Found",
                      "Moved",
                      "PermanentRedirect",
                      "TemporaryRedirect",
                    ],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--rule-name",
                  description: "Name of the rule",
                  args: { name: "rule-name" },
                },
                {
                  name: "--rule-set-name",
                  description: "Name of the rule set",
                  args: { name: "rule-set-name" },
                },
                {
                  name: "--source-pattern",
                  description:
                    "A request URI pattern that identifies the type of requests that may be rewritten",
                  args: { name: "source-pattern" },
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
              description: "Show actions associated with the rule",
              options: [
                {
                  name: "--profile-name",
                  description:
                    "Name of the CDN profile which is unique within the resource group",
                  args: { name: "profile-name" },
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
                  name: "--rule-name",
                  description: "Name of the rule",
                  args: { name: "rule-name" },
                  isRequired: true,
                },
                {
                  name: "--rule-set-name",
                  description: "Name of the rule set",
                  args: { name: "rule-set-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "remove",
              description: "Remove an action from a delivery rule",
              options: [
                {
                  name: "--index",
                  description: "The index of the condition/action",
                  args: { name: "index" },
                  isRequired: true,
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--profile-name",
                  description:
                    "Name of the CDN profile which is unique within the resource group",
                  args: { name: "profile-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--rule-name",
                  description: "Name of the rule",
                  args: { name: "rule-name" },
                },
                {
                  name: "--rule-set-name",
                  description: "Name of the rule set",
                  args: { name: "rule-set-name" },
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
          name: "condition",
          description: "Manage delivery rule conditions for a rule",
          subcommands: [
            {
              name: "add",
              description: "Add a condition to a delivery rule",
              options: [
                {
                  name: "--match-variable",
                  description:
                    "Name of the match condition: https://docs.microsoft.com/en-us/azure/frontdoor/rules-match-conditions",
                  args: {
                    name: "match-variable",
                    suggestions: [
                      "ClientPort",
                      "Cookies",
                      "HostName",
                      "HttpVersion",
                      "IsDevice",
                      "PostArgs",
                      "QueryString",
                      "RemoteAddress",
                      "RequestBody",
                      "RequestHeader",
                      "RequestMethod",
                      "RequestScheme",
                      "RequestUri",
                      "ServerPort",
                      "SocketAddr",
                      "SslProtocol",
                      "UrlFileExtension",
                      "UrlFileName",
                      "UrlPath",
                    ],
                  },
                  isRequired: true,
                },
                {
                  name: "--operator",
                  description: "Operator of the match condition",
                  args: { name: "operator" },
                  isRequired: true,
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--match-values",
                  description:
                    'Match values of the match condition. e.g, space separated values "GET" "HTTP"',
                  args: { name: "match-values" },
                },
                {
                  name: "--negate-condition",
                  description: "If true, negates the condition",
                  args: {
                    name: "negate-condition",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--profile-name",
                  description:
                    "Name of the CDN profile which is unique within the resource group",
                  args: { name: "profile-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--rule-name",
                  description: "Name of the rule",
                  args: { name: "rule-name" },
                },
                {
                  name: "--rule-set-name",
                  description: "Name of the rule set",
                  args: { name: "rule-set-name" },
                },
                {
                  name: "--selector",
                  description: "Selector of the match condition",
                  args: { name: "selector" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--transforms",
                  description: "Transform to apply before matching",
                  args: {
                    name: "transforms",
                    suggestions: [
                      "Lowercase",
                      "RemoveNulls",
                      "Trim",
                      "Uppercase",
                      "UrlDecode",
                      "UrlEncode",
                    ],
                  },
                },
              ],
            },
            {
              name: "list",
              description: "Show condtions associated with the rule",
              options: [
                {
                  name: "--profile-name",
                  description:
                    "Name of the CDN profile which is unique within the resource group",
                  args: { name: "profile-name" },
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
                  name: "--rule-name",
                  description: "Name of the rule",
                  args: { name: "rule-name" },
                  isRequired: true,
                },
                {
                  name: "--rule-set-name",
                  description: "Name of the rule set",
                  args: { name: "rule-set-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "remove",
              description: "Remove a condition from a delivery rule",
              options: [
                {
                  name: "--index",
                  description: "The index of the condition/action",
                  args: { name: "index" },
                  isRequired: true,
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--profile-name",
                  description:
                    "Name of the CDN profile which is unique within the resource group",
                  args: { name: "profile-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--rule-name",
                  description: "Name of the rule",
                  args: { name: "rule-name" },
                },
                {
                  name: "--rule-set-name",
                  description: "Name of the rule set",
                  args: { name: "rule-set-name" },
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
      ],
    },
    {
      name: "rule-set",
      description:
        "Manage rule set for the specified profile.\n\n\t\tRules Set allows you to customize how HTTP requests are handled at the edge and provides more controls of the behaviors of your web application",
      subcommands: [
        {
          name: "create",
          description: "Creates a new rule set under the specified profile",
          options: [
            {
              name: "--profile-name",
              description:
                "Name of the CDN profile which is unique within the resource group",
              args: { name: "profile-name" },
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
              name: "--rule-set-name",
              description: "Name of the rule set",
              args: { name: "rule-set-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "delete",
          description: "Delete the rule set",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--profile-name",
              description:
                "Name of the CDN profile which is unique within the resource group",
              args: { name: "profile-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--rule-set-name",
              description: "Name of the rule set",
              args: { name: "rule-set-name" },
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
            "Lists existing AzureFrontDoor rule sets within a profile",
          options: [
            {
              name: "--profile-name",
              description:
                "Name of the CDN profile which is unique within the resource group",
              args: { name: "profile-name" },
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
          name: "show",
          description:
            "Gets an existing AzureFrontDoor rule set with the specified rule set name under the specified subscription, resource group and profile",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--profile-name",
              description:
                "Name of the CDN profile which is unique within the resource group",
              args: { name: "profile-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--rule-set-name",
              description: "Name of the rule set",
              args: { name: "rule-set-name" },
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
      name: "secret",
      description:
        "Manage secrets within the specified profile.\n\n\t\tSecrets are used to reference your own certificate stored in Azure Key Vault. You must specifiy the secret name when creating custom domain if you want to use your own certificate for TLS encryption",
      subcommands: [
        {
          name: "create",
          description: "Creates a new secret within the specified profile",
          options: [
            {
              name: "--profile-name",
              description:
                "Name of the CDN profile which is unique within the resource group",
              args: { name: "profile-name" },
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
              name: "--secret-name",
              description: "Name of the secret",
              args: { name: "secret-name" },
              isRequired: true,
            },
            {
              name: "--secret-source",
              description:
                "Resource ID of the Azure Key Vault certificate, expected format is like /subscriptions/sub1/resourceGroups/rg1/providers/Microsoft.KeyVault/vaults/vault1/secrets/cert1",
              args: { name: "secret-source" },
              isRequired: true,
            },
            {
              name: "--secret-version",
              description: "Version of the certificate to be used",
              args: { name: "secret-version" },
            },
            {
              name: "--use-latest-version",
              description:
                "Whether to use the latest version for the certificate",
              args: {
                name: "use-latest-version",
                suggestions: ["false", "true"],
              },
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes an existing Secret within profile",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--profile-name",
              description:
                "Name of the CDN profile which is unique within the resource group",
              args: { name: "profile-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--secret-name",
              description: "Name of the secret",
              args: { name: "secret-name" },
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
          description: "Lists existing AzureFrontDoor secrets",
          options: [
            {
              name: "--profile-name",
              description:
                "Name of the CDN profile which is unique within the resource group",
              args: { name: "profile-name" },
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
          name: "show",
          description: "Gets an existing Secret within a profile",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--profile-name",
              description:
                "Name of the CDN profile which is unique within the resource group",
              args: { name: "profile-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--secret-name",
              description: "Name of the secret",
              args: { name: "secret-name" },
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
          description: "Update an existing secret within the specified profile",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--profile-name",
              description:
                "Name of the CDN profile which is unique within the resource group",
              args: { name: "profile-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--secret-name",
              description: "Name of the secret",
              args: { name: "secret-name" },
            },
            {
              name: "--secret-source",
              description:
                "Resource ID of the Azure Key Vault certificate, expected format is like /subscriptions/sub1/resourceGroups/rg1/providers/Microsoft.KeyVault/vaults/vault1/secrets/cert1",
              args: { name: "secret-source" },
            },
            {
              name: "--secret-version",
              description: "Version of the certificate to be used",
              args: { name: "secret-version" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--use-latest-version",
              description:
                "Whether to use the latest version for the certificate",
              args: {
                name: "use-latest-version",
                suggestions: ["false", "true"],
              },
            },
          ],
        },
      ],
    },
    {
      name: "security-policy",
      description:
        "Manage security policies within the specified profile.\n\n\t\tSecurity policies could be used to apply a web application firewall policy to protect your web applications against OWASP top-10 vulnerabilities and block malicious bots",
      subcommands: [
        {
          name: "create",
          description:
            "Creates a new security policy within the specified profile",
          options: [
            {
              name: "--domains",
              description:
                "The domains to associate with the WAF policy. Could either be the ID of an endpoint (default domain will be used in that case) or ID of a custom domain",
              args: { name: "domains" },
              isRequired: true,
            },
            {
              name: "--profile-name",
              description:
                "Name of the CDN profile which is unique within the resource group",
              args: { name: "profile-name" },
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
              name: "--security-policy-name",
              description: "Name of the security policy",
              args: { name: "security-policy-name" },
              isRequired: true,
            },
            {
              name: "--waf-policy",
              description: "The ID of Front Door WAF policy",
              args: { name: "waf-policy" },
              isRequired: true,
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes an existing security policy within profile",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--profile-name",
              description:
                "Name of the CDN profile which is unique within the resource group",
              args: { name: "profile-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--security-policy-name",
              description: "Name of the security policy",
              args: { name: "security-policy-name" },
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
          description: "Lists security policies associated with the profile",
          options: [
            {
              name: "--profile-name",
              description:
                "Name of the CDN profile which is unique within the resource group",
              args: { name: "profile-name" },
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
          name: "show",
          description: "Gets an existing security policy within a profile",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--profile-name",
              description:
                "Name of the CDN profile which is unique within the resource group",
              args: { name: "profile-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--security-policy-name",
              description: "Name of the security policy",
              args: { name: "security-policy-name" },
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
            "Update an existing security policy within the specified profile",
          options: [
            {
              name: "--domains",
              description:
                "The domains to associate with the WAF policy. Could either be the ID of an endpoint (default domain will be used in that case) or ID of a custom domain",
              args: { name: "domains" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--profile-name",
              description:
                "Name of the CDN profile which is unique within the resource group",
              args: { name: "profile-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--security-policy-name",
              description: "Name of the security policy",
              args: { name: "security-policy-name" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--waf-policy",
              description: "The ID of Front Door WAF policy",
              args: { name: "waf-policy" },
            },
          ],
        },
      ],
    },
    {
      name: "waf-log-analytic",
      description: "Manage afd WAF related log analytic results",
      subcommands: [
        {
          name: "metric",
          description: "Manage WAF related metric statistics for AFD profile",
          subcommands: [
            {
              name: "list",
              description:
                "Get Waf related log analytics report for AFD profile",
              options: [
                {
                  name: "--date-time-begin",
                  description: "The start datetime",
                  args: { name: "date-time-begin" },
                  isRequired: true,
                },
                {
                  name: "--date-time-end",
                  description: "The end datetime",
                  args: { name: "date-time-end" },
                  isRequired: true,
                },
                {
                  name: "--granularity",
                  description: "The interval granularity",
                  args: {
                    name: "granularity",
                    suggestions: ["P1D", "PT1H", "PT5M"],
                  },
                  isRequired: true,
                },
                {
                  name: "--metrics",
                  description: "Metric types to be included",
                  args: {
                    name: "metrics",
                    suggestions: ["clientRequestCount"],
                  },
                  isRequired: true,
                },
                {
                  name: "--profile-name",
                  description:
                    "Name of the Azure Front Door Standard or Azure Front Door Premium profile which is unique within the resource group. which is unique within the resource group",
                  args: { name: "profile-name" },
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
                  name: "--actions",
                  description: "The WAF actions to be included",
                  args: {
                    name: "actions",
                    suggestions: ["allow", "block", "log", "redirect"],
                  },
                },
                {
                  name: "--group-by",
                  description: "Aggregate demensions",
                  args: {
                    name: "group-by",
                    suggestions: ["customDomain", "httpStatusCode"],
                  },
                },
                {
                  name: "--rule-types",
                  description: "The WAF rule types to be included",
                  args: {
                    name: "rule-types",
                    suggestions: ["bot", "custom", "managed"],
                  },
                },
              ],
            },
          ],
        },
        {
          name: "ranking",
          description: "Manage WAF related ranking statistics for AFD profile",
          subcommands: [
            {
              name: "list",
              description: "Get WAF log analytics charts for AFD profile",
              options: [
                {
                  name: "--date-time-begin",
                  description: "The start datetime",
                  args: { name: "date-time-begin" },
                  isRequired: true,
                },
                {
                  name: "--date-time-end",
                  description: "The end datetime",
                  args: { name: "date-time-end" },
                  isRequired: true,
                },
                {
                  name: "--max-ranking",
                  description:
                    "The maximum number of rows to return based on the ranking",
                  args: { name: "max-ranking" },
                  isRequired: true,
                },
                {
                  name: "--metrics",
                  description: "Metric types to be included",
                  args: {
                    name: "metrics",
                    suggestions: ["clientRequestCount"],
                  },
                  isRequired: true,
                },
                {
                  name: "--profile-name",
                  description:
                    "Name of the Azure Front Door Standard or Azure Front Door Premium profile which is unique within the resource group. which is unique within the resource group",
                  args: { name: "profile-name" },
                  isRequired: true,
                },
                {
                  name: "--rankings",
                  description: "The dimemsions to be included for ranking",
                  args: {
                    name: "rankings",
                    suggestions: [
                      "action",
                      "clientIp",
                      "country",
                      "ruleGroup",
                      "ruleId",
                      "ruleType",
                      "url",
                      "userAgent",
                    ],
                  },
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
                  name: "--actions",
                  description: "The WAF actions to be included",
                  args: {
                    name: "actions",
                    suggestions: ["allow", "block", "log", "redirect"],
                  },
                },
                {
                  name: "--rule-types",
                  description: "The WAF rule types to be included",
                  args: {
                    name: "rule-types",
                    suggestions: ["bot", "custom", "managed"],
                  },
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
