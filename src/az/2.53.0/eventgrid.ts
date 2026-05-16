const completion: Fig.Spec = {
  name: "eventgrid",
  description:
    "Manage Azure Event Grid topics, domains, domain topics, system topics partner topics, event subscriptions, system topic event subscriptions and partner topic event subscriptions",
  subcommands: [
    {
      name: "domain",
      description: "Manage event domains",
      subcommands: [
        {
          name: "create",
          description: "Create a domain",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the domain",
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
              name: "--identity",
              description:
                "Argument 'identity' has been deprecated and will be removed in a future release. The managed identity type for the resource. Will be deprecated and replaced by --mi-system-assigned-identity in future",
              args: {
                name: "identity",
                suggestions: ["noidentity", "systemassigned"],
              },
            },
            {
              name: "--inbound-ip-rules",
              description: "List of inbound IP rules",
              args: { name: "inbound-ip-rules" },
            },
            {
              name: "--input-mapping-default-values",
              description:
                "When input-schema is specified as customeventschema, this parameter can be used to specify input mappings based on default values. You can use this parameter when your custom schema does not include a field that corresponds to one of the three fields supported by this parameter. Specify space separated mappings in 'key=value' format. Allowed key names are 'subject', 'eventtype', 'dataversion'. The corresponding value names should specify the default values to be used for the mapping and they will be used only when the published event doesn't have a valid mapping for a particular field",
              args: { name: "input-mapping-default-values" },
            },
            {
              name: "--input-mapping-fields",
              description:
                "When input-schema is specified as customeventschema, this parameter is used to specify input mappings based on field names. Specify space separated mappings in 'key=value' format. Allowed key names are 'id', 'topic', 'eventtime', 'subject', 'eventtype', 'dataversion'. The corresponding value names should specify the names of the fields in the custom input schema. If a mapping for either 'id' or 'eventtime' is not provided, Event Grid will auto-generate a default value for these two fields",
              args: { name: "input-mapping-fields" },
            },
            {
              name: "--input-schema",
              description:
                "Schema in which incoming events will be published to this topic/domain. If you specify customeventschema as the value for this parameter, you must also provide values for at least one of --input_mapping_default_values / --input_mapping_fields",
              args: {
                name: "input-schema",
                suggestions: [
                  "cloudeventschemav1_0",
                  "customeventschema",
                  "eventgridschema",
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
              name: "--mi-system-assigned",
              description:
                "Presence of this param indicates that SystemAssigned managed identity will be used",
              args: { name: "mi-system-assigned" },
            },
            {
              name: "--mi-user-assigned",
              description:
                "Add user assigned identities when identityType is user or mixed. This attribute is valid for all destination types except StorageQueue. Multiple attributes can be specified by using more than one --mi-user-assigned argument",
              args: { name: "mi-user-assigned" },
            },
            {
              name: "--public-network-access",
              description:
                "This determines if traffic is allowed over public network. By default it is enabled. You can further restrict to specific IPs by configuring",
              args: {
                name: "public-network-access",
                suggestions: ["disabled", "enabled"],
              },
            },
            {
              name: "--sku",
              description: "The Sku name of the resource",
              args: { name: "sku", suggestions: ["basic", "premium"] },
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
          description: "Delete a domain",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the domain",
              args: { name: "name" },
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
          description: "List available domains",
          options: [
            {
              name: "--odata-query",
              description:
                "The OData query used for filtering the list results. Filtering is currently allowed on the Name property only. The supported operations include: CONTAINS, eq (for equal), ne (for not equal), AND, OR and NOT",
              args: { name: "odata-query" },
            },
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
          description: "Get the details of a domain",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the domain",
              args: { name: "name" },
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
          description: "Update a domain",
          options: [
            {
              name: "--identity",
              description:
                "Argument 'identity' has been deprecated and will be removed in a future release. The managed identity type for the resource. Will be deprecated and replaced by --mi-system-assigned-identity in future",
              args: {
                name: "identity",
                suggestions: ["noidentity", "systemassigned"],
              },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--inbound-ip-rules",
              description: "List of inbound IP rules",
              args: { name: "inbound-ip-rules" },
            },
            {
              name: "--mi-system-assigned",
              description:
                "Presence of this param indicates that SystemAssigned managed identity will be used",
              args: { name: "mi-system-assigned" },
            },
            {
              name: "--mi-user-assigned",
              description:
                "Add user assigned identities when identityType is user or mixed. This attribute is valid for all destination types except StorageQueue. Multiple attributes can be specified by using more than one --mi-user-assigned argument",
              args: { name: "mi-user-assigned" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the domain",
              args: { name: "name" },
            },
            {
              name: "--public-network-access",
              description:
                "This determines if traffic is allowed over public network. By default it is enabled. You can further restrict to specific IPs by configuring",
              args: {
                name: "public-network-access",
                suggestions: ["disabled", "enabled"],
              },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--sku",
              description: "The Sku name of the resource",
              args: { name: "sku", suggestions: ["basic", "premium"] },
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
          name: "event-subscription",
          description: "Manage event subscriptions of domain",
          subcommands: [
            {
              name: "create",
              description: "Create a new event subscription for a domain",
              options: [
                {
                  name: "--domain-name",
                  description: "Name of the domain",
                  args: { name: "domain-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the event subscription",
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
                  name: [
                    "--azure-active-directory-application-id-or-uri",
                    "--aad-app-id",
                  ],
                  description:
                    "The Azure Active Directory Application Id or Uri to get the access token that will be included as the bearer token in delivery requests. Applicable only for webhook as a destination",
                  args: {
                    name: "azure-active-directory-application-id-or-uri",
                  },
                },
                {
                  name: [
                    "--azure-active-directory-tenant-id",
                    "--aad-tenant-id",
                  ],
                  description:
                    "The Azure Active Directory Tenant Id to get the access token that will be included as the bearer token in delivery requests. Applicable only for webhook as a destination",
                  args: { name: "azure-active-directory-tenant-id" },
                },
                {
                  name: "--advanced-filter",
                  description:
                    "An advanced filter enables filtering of events based on a specific event property",
                  args: { name: "advanced-filter" },
                },
                {
                  name: "--deadletter-endpoint",
                  description:
                    "The Azure resource ID of an Azure Storage blob container destination where EventGrid should deadletter undeliverable events for this event subscription",
                  args: { name: "deadletter-endpoint" },
                },
                {
                  name: ["--delivery-attribute-mapping", "-d"],
                  description:
                    "Add delivery attribute mapping to send additional information via HTTP headers when delivering events. This attribute is valid for all destination types except StorageQueue. Multiple attributes can be specified by using more than one --delivery-attribute-mapping argument",
                  args: { name: "delivery-attribute-mapping" },
                },
                {
                  name: [
                    "--enable-advanced-filtering-on-arrays",
                    "--enable-af-arr",
                  ],
                  description:
                    "Allows advanced filters to be evaluated against an array of values instead of expecting a singular value",
                  args: {
                    name: "enable-advanced-filtering-on-arrays",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--endpoint",
                  description:
                    "Endpoint where EventGrid should deliver events matching this event subscription. For webhook endpoint type, this should be the corresponding webhook URL. For other endpoint types, this should be the Azure resource identifier of the endpoint. It is expected that the destination endpoint to be already created and available for use before executing any Event Grid command",
                  args: { name: "endpoint" },
                },
                {
                  name: "--endpoint-type",
                  description: "The type of the destination endpoint",
                  args: {
                    name: "endpoint-type",
                    suggestions: [
                      "azurefunction",
                      "eventhub",
                      "hybridconnection",
                      "servicebusqueue",
                      "servicebustopic",
                      "storagequeue",
                      "webhook",
                    ],
                  },
                },
                {
                  name: "--event-delivery-schema",
                  description:
                    "The schema in which events should be delivered for this event subscription. By default, events will be delivered in the same schema in which they are published (based on the corresponding topic's input schema)",
                  args: {
                    name: "event-delivery-schema",
                    suggestions: [
                      "cloudeventschemav1_0",
                      "custominputschema",
                      "eventgridschema",
                    ],
                  },
                },
                {
                  name: "--event-ttl",
                  description:
                    "Event time to live (in minutes). Must be a number between 1 and 1440",
                  args: { name: "event-ttl" },
                },
                {
                  name: "--expiration-date",
                  description:
                    "Date or datetime (in UTC, e.g. '2018-11-30T11:59:59+00:00' or '2018-11-30') after which the event subscription would expire. By default, there is no expiration for the event subscription",
                  args: { name: "expiration-date" },
                },
                {
                  name: "--included-event-types",
                  description:
                    "A space-separated list of event types (e.g., Microsoft.Storage.BlobCreated and Microsoft.Storage.BlobDeleted). In order to subscribe to all default event types, do not specify any value for this argument. For event grid topics, event types are customer defined. For Azure events, e.g., Storage Accounts, IoT Hub, etc., you can query their event types using this CLI command 'az eventgrid topic-type list-event-types'",
                  args: { name: "included-event-types" },
                },
                {
                  name: "--labels",
                  description:
                    "A space-separated list of labels to associate with this event subscription",
                  args: { name: "labels" },
                },
                {
                  name: "--max-delivery-attempts",
                  description:
                    "Maximum number of delivery attempts. Must be a number between 1 and 30",
                  args: { name: "max-delivery-attempts" },
                },
                {
                  name: "--max-events-per-batch",
                  description:
                    "Maximum number of events in a batch. Must be a number between 1 and 5000",
                  args: { name: "max-events-per-batch" },
                },
                {
                  name: [
                    "--preferred-batch-size-in-kilobytes",
                    "--pref-batch-size-kb",
                  ],
                  description:
                    "Preferred batch size in kilobytes. Must be a number between 1 and 1024",
                  args: { name: "preferred-batch-size-in-kilobytes" },
                },
                {
                  name: ["--storage-queue-msg-ttl", "--qttl"],
                  description: "Storage queue message time to live in seconds",
                  args: { name: "storage-queue-msg-ttl" },
                },
                {
                  name: "--subject-begins-with",
                  description:
                    "An optional string to filter events for an event subscription based on a prefix. Wildcard characters are not supported",
                  args: { name: "subject-begins-with" },
                },
                {
                  name: "--subject-case-sensitive",
                  description:
                    "Specify to indicate whether the subject fields should be compared in a case sensitive manner. True if flag present",
                },
                {
                  name: "--subject-ends-with",
                  description:
                    "An optional string to filter events for an event subscription based on a suffix. Wildcard characters are not supported",
                  args: { name: "subject-ends-with" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete an event subscription of a domain",
              options: [
                {
                  name: "--domain-name",
                  description: "Name of the domain",
                  args: { name: "domain-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the event subscription",
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
              description: "List event subscriptions of a specific domain",
              options: [
                {
                  name: "--domain-name",
                  description: "Name of the domain",
                  args: { name: "domain-name" },
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
                  name: "--odata-query",
                  description:
                    "The OData query used for filtering the list results. Filtering is currently allowed on the Name property only. The supported operations include: CONTAINS, eq (for equal), ne (for not equal), AND, OR and NOT",
                  args: { name: "odata-query" },
                },
              ],
            },
            {
              name: "show",
              description:
                "Get the details of an event subscription of a domain",
              options: [
                {
                  name: "--domain-name",
                  description: "Name of the domain",
                  args: { name: "domain-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the event subscription",
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
                  name: ["--include-full-endpoint-url", "--full-ed-url"],
                  description:
                    "Specify to indicate whether the full endpoint URL should be returned. True if flag present",
                },
                {
                  name: [
                    "--include-static-delivery-attribute-secret",
                    "--include-attrib-secret",
                  ],
                  description:
                    "Indicate whether any static delivery attribute secrets should be returned. True if flag present",
                },
              ],
            },
            {
              name: "update",
              description: "Update an event subscription of a domain",
              options: [
                {
                  name: "--domain-name",
                  description: "Name of the domain",
                  args: { name: "domain-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the event subscription",
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
                  name: "--advanced-filter",
                  description:
                    "An advanced filter enables filtering of events based on a specific event property",
                  args: { name: "advanced-filter" },
                },
                {
                  name: "--deadletter-endpoint",
                  description:
                    "The Azure resource ID of an Azure Storage blob container destination where EventGrid should deadletter undeliverable events for this event subscription",
                  args: { name: "deadletter-endpoint" },
                },
                {
                  name: ["--delivery-attribute-mapping", "-d"],
                  description:
                    "Add delivery attribute mapping to send additional information via HTTP headers when delivering events. This attribute is valid for all destination types except StorageQueue. Multiple attributes can be specified by using more than one --delivery-attribute-mapping argument",
                  args: { name: "delivery-attribute-mapping" },
                },
                {
                  name: [
                    "--enable-advanced-filtering-on-arrays",
                    "--enable-af-arr",
                  ],
                  description:
                    "Allows advanced filters to be evaluated against an array of values instead of expecting a singular value",
                  args: {
                    name: "enable-advanced-filtering-on-arrays",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--endpoint",
                  description:
                    "Endpoint where EventGrid should deliver events matching this event subscription. For webhook endpoint type, this should be the corresponding webhook URL. For other endpoint types, this should be the Azure resource identifier of the endpoint. It is expected that the destination endpoint to be already created and available for use before executing any Event Grid command",
                  args: { name: "endpoint" },
                },
                {
                  name: "--included-event-types",
                  description:
                    "A space-separated list of event types (e.g., Microsoft.Storage.BlobCreated and Microsoft.Storage.BlobDeleted). In order to subscribe to all default event types, do not specify any value for this argument. For event grid topics, event types are customer defined. For Azure events, e.g., Storage Accounts, IoT Hub, etc., you can query their event types using this CLI command 'az eventgrid topic-type list-event-types'",
                  args: { name: "included-event-types" },
                },
                {
                  name: "--labels",
                  description:
                    "A space-separated list of labels to associate with this event subscription",
                  args: { name: "labels" },
                },
                {
                  name: ["--storage-queue-msg-ttl", "--qttl"],
                  description: "Storage queue message time to live in seconds",
                  args: { name: "storage-queue-msg-ttl" },
                },
                {
                  name: "--subject-begins-with",
                  description:
                    "An optional string to filter events for an event subscription based on a prefix. Wildcard characters are not supported",
                  args: { name: "subject-begins-with" },
                },
                {
                  name: "--subject-ends-with",
                  description:
                    "An optional string to filter events for an event subscription based on a suffix. Wildcard characters are not supported",
                  args: { name: "subject-ends-with" },
                },
                {
                  name: "--update-endpoint-type",
                  description: "The type of the destination endpoint",
                  args: {
                    name: "update-endpoint-type",
                    suggestions: [
                      "azurefunction",
                      "eventhub",
                      "hybridconnection",
                      "servicebusqueue",
                      "servicebustopic",
                      "storagequeue",
                      "webhook",
                    ],
                  },
                },
              ],
            },
          ],
        },
        {
          name: "key",
          description: "Manage shared access keys of a domain",
          subcommands: [
            {
              name: "list",
              description: "List shared access keys of a domain",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the domain",
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
              name: "regenerate",
              description: "Regenerate a shared access key of a domain",
              options: [
                {
                  name: "--key-name",
                  description: "Key name to regenerate key1 or key2",
                  args: { name: "key-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the domain",
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
          ],
        },
        {
          name: "private-endpoint-connection",
          description:
            "Manage private endpoint connection resources of a domain",
          subcommands: [
            {
              name: "approve",
              description:
                "Approve a private endpoint connection request for a domain",
              options: [
                {
                  name: "--domain-name",
                  description: "Name of the domain",
                  args: { name: "domain-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the private endpoint connection",
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
                  name: "--description",
                  description: "Comments for the approval",
                  args: { name: "description" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a private endpoint connection for a domain",
              options: [
                {
                  name: "--domain-name",
                  description: "Name of the domain",
                  args: { name: "domain-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the private endpoint connection",
                  args: { name: "name" },
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
              description:
                "List the properties of all the private endpoint connections for a domain",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the domain",
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
              name: "reject",
              description:
                "Reject a private endpoint connection request for a domain",
              options: [
                {
                  name: "--domain-name",
                  description: "Name of the domain",
                  args: { name: "domain-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the private endpoint connection",
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
                  name: "--description",
                  description: "Comments for the rejection",
                  args: { name: "description" },
                },
              ],
            },
            {
              name: "show",
              description:
                "Display the properties of a private endpoint connection for a domain",
              options: [
                {
                  name: "--domain-name",
                  description: "Name of the domain",
                  args: { name: "domain-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the private endpoint connection",
                  args: { name: "name" },
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
          name: "private-link-resource",
          description: "Manage private link resource of a domain",
          subcommands: [
            {
              name: "list",
              description:
                "List the properties of all the private link resources for a domain",
              options: [
                {
                  name: "--domain-name",
                  description: "Name of the domain",
                  args: { name: "domain-name" },
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
                "Display the properties of a private link resource for a domain",
              options: [
                {
                  name: "--domain-name",
                  description: "Name of the domain",
                  args: { name: "domain-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the private link resource",
                  args: { name: "name" },
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
          name: "topic",
          description: "Manage event domain topics",
          subcommands: [
            {
              name: "create",
              description: "Create a domain topic under a domain",
              options: [
                {
                  name: "--domain-name",
                  description: "Name of the domain",
                  args: { name: "domain-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the domain topic",
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
              name: "delete",
              description: "Delete a domain topic under a domain",
              options: [
                {
                  name: "--domain-name",
                  description: "Name of the domain",
                  args: { name: "domain-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the domain topic",
                  args: { name: "name" },
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
              description: "List available topics in a domain",
              options: [
                {
                  name: "--domain-name",
                  description: "Name of the domain",
                  args: { name: "domain-name" },
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
                  name: "--odata-query",
                  description:
                    "The OData query used for filtering the list results. Filtering is currently allowed on the Name property only. The supported operations include: CONTAINS, eq (for equal), ne (for not equal), AND, OR and NOT",
                  args: { name: "odata-query" },
                },
              ],
            },
            {
              name: "show",
              description: "Get the details of a domain topic",
              options: [
                {
                  name: "--domain-name",
                  description: "Name of the domain",
                  args: { name: "domain-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the domain topic",
                  args: { name: "name" },
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
              name: "event-subscription",
              description: "Manage event subscriptions of a domain topic",
              subcommands: [
                {
                  name: "create",
                  description:
                    "Create a new event subscription for a domain topic",
                  options: [
                    {
                      name: "--domain-name",
                      description: "Name of the domain",
                      args: { name: "domain-name" },
                      isRequired: true,
                    },
                    {
                      name: "--domain-topic-name",
                      description: "Name of the domain topic",
                      args: { name: "domain-topic-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--name", "-n"],
                      description: "Name of the event subscription",
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
                      name: [
                        "--azure-active-directory-application-id-or-uri",
                        "--aad-app-id",
                      ],
                      description:
                        "The Azure Active Directory Application Id or Uri to get the access token that will be included as the bearer token in delivery requests. Applicable only for webhook as a destination",
                      args: {
                        name: "azure-active-directory-application-id-or-uri",
                      },
                    },
                    {
                      name: [
                        "--azure-active-directory-tenant-id",
                        "--aad-tenant-id",
                      ],
                      description:
                        "The Azure Active Directory Tenant Id to get the access token that will be included as the bearer token in delivery requests. Applicable only for webhook as a destination",
                      args: { name: "azure-active-directory-tenant-id" },
                    },
                    {
                      name: "--advanced-filter",
                      description:
                        "An advanced filter enables filtering of events based on a specific event property",
                      args: { name: "advanced-filter" },
                    },
                    {
                      name: "--deadletter-endpoint",
                      description:
                        "The Azure resource ID of an Azure Storage blob container destination where EventGrid should deadletter undeliverable events for this event subscription",
                      args: { name: "deadletter-endpoint" },
                    },
                    {
                      name: ["--delivery-attribute-mapping", "-d"],
                      description:
                        "Add delivery attribute mapping to send additional information via HTTP headers when delivering events. This attribute is valid for all destination types except StorageQueue. Multiple attributes can be specified by using more than one --delivery-attribute-mapping argument",
                      args: { name: "delivery-attribute-mapping" },
                    },
                    {
                      name: [
                        "--enable-advanced-filtering-on-arrays",
                        "--enable-af-arr",
                      ],
                      description:
                        "Allows advanced filters to be evaluated against an array of values instead of expecting a singular value",
                      args: {
                        name: "enable-advanced-filtering-on-arrays",
                        suggestions: ["false", "true"],
                      },
                    },
                    {
                      name: "--endpoint",
                      description:
                        "Endpoint where EventGrid should deliver events matching this event subscription. For webhook endpoint type, this should be the corresponding webhook URL. For other endpoint types, this should be the Azure resource identifier of the endpoint. It is expected that the destination endpoint to be already created and available for use before executing any Event Grid command",
                      args: { name: "endpoint" },
                    },
                    {
                      name: "--endpoint-type",
                      description: "The type of the destination endpoint",
                      args: {
                        name: "endpoint-type",
                        suggestions: [
                          "azurefunction",
                          "eventhub",
                          "hybridconnection",
                          "servicebusqueue",
                          "servicebustopic",
                          "storagequeue",
                          "webhook",
                        ],
                      },
                    },
                    {
                      name: "--event-delivery-schema",
                      description:
                        "The schema in which events should be delivered for this event subscription. By default, events will be delivered in the same schema in which they are published (based on the corresponding topic's input schema)",
                      args: {
                        name: "event-delivery-schema",
                        suggestions: [
                          "cloudeventschemav1_0",
                          "custominputschema",
                          "eventgridschema",
                        ],
                      },
                    },
                    {
                      name: "--event-ttl",
                      description:
                        "Event time to live (in minutes). Must be a number between 1 and 1440",
                      args: { name: "event-ttl" },
                    },
                    {
                      name: "--expiration-date",
                      description:
                        "Date or datetime (in UTC, e.g. '2018-11-30T11:59:59+00:00' or '2018-11-30') after which the event subscription would expire. By default, there is no expiration for the event subscription",
                      args: { name: "expiration-date" },
                    },
                    {
                      name: "--included-event-types",
                      description:
                        "A space-separated list of event types (e.g., Microsoft.Storage.BlobCreated and Microsoft.Storage.BlobDeleted). In order to subscribe to all default event types, do not specify any value for this argument. For event grid topics, event types are customer defined. For Azure events, e.g., Storage Accounts, IoT Hub, etc., you can query their event types using this CLI command 'az eventgrid topic-type list-event-types'",
                      args: { name: "included-event-types" },
                    },
                    {
                      name: "--labels",
                      description:
                        "A space-separated list of labels to associate with this event subscription",
                      args: { name: "labels" },
                    },
                    {
                      name: "--max-delivery-attempts",
                      description:
                        "Maximum number of delivery attempts. Must be a number between 1 and 30",
                      args: { name: "max-delivery-attempts" },
                    },
                    {
                      name: "--max-events-per-batch",
                      description:
                        "Maximum number of events in a batch. Must be a number between 1 and 5000",
                      args: { name: "max-events-per-batch" },
                    },
                    {
                      name: [
                        "--preferred-batch-size-in-kilobytes",
                        "--pref-batch-size-kb",
                      ],
                      description:
                        "Preferred batch size in kilobytes. Must be a number between 1 and 1024",
                      args: { name: "preferred-batch-size-in-kilobytes" },
                    },
                    {
                      name: ["--storage-queue-msg-ttl", "--qttl"],
                      description:
                        "Storage queue message time to live in seconds",
                      args: { name: "storage-queue-msg-ttl" },
                    },
                    {
                      name: "--subject-begins-with",
                      description:
                        "An optional string to filter events for an event subscription based on a prefix. Wildcard characters are not supported",
                      args: { name: "subject-begins-with" },
                    },
                    {
                      name: "--subject-case-sensitive",
                      description:
                        "Specify to indicate whether the subject fields should be compared in a case sensitive manner. True if flag present",
                    },
                    {
                      name: "--subject-ends-with",
                      description:
                        "An optional string to filter events for an event subscription based on a suffix. Wildcard characters are not supported",
                      args: { name: "subject-ends-with" },
                    },
                  ],
                },
                {
                  name: "delete",
                  description: "Delete an event subscription of a domain topic",
                  options: [
                    {
                      name: "--domain-name",
                      description: "Name of the domain",
                      args: { name: "domain-name" },
                      isRequired: true,
                    },
                    {
                      name: "--domain-topic-name",
                      description: "Name of the domain topic",
                      args: { name: "domain-topic-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--name", "-n"],
                      description: "Name of the event subscription",
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
                    "List event subscriptions of a specific domain topic",
                  options: [
                    {
                      name: "--domain-name",
                      description: "Name of the domain",
                      args: { name: "domain-name" },
                      isRequired: true,
                    },
                    {
                      name: "--domain-topic-name",
                      description: "Name of the domain topic",
                      args: { name: "domain-topic-name" },
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
                      name: "--odata-query",
                      description:
                        "The OData query used for filtering the list results. Filtering is currently allowed on the Name property only. The supported operations include: CONTAINS, eq (for equal), ne (for not equal), AND, OR and NOT",
                      args: { name: "odata-query" },
                    },
                  ],
                },
                {
                  name: "show",
                  description:
                    "Get the details of an event subscription of a domain topic",
                  options: [
                    {
                      name: "--domain-name",
                      description: "Name of the domain",
                      args: { name: "domain-name" },
                      isRequired: true,
                    },
                    {
                      name: "--domain-topic-name",
                      description: "Name of the domain topic",
                      args: { name: "domain-topic-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--name", "-n"],
                      description: "Name of the event subscription",
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
                      name: ["--include-full-endpoint-url", "--full-ed-url"],
                      description:
                        "Specify to indicate whether the full endpoint URL should be returned. True if flag present",
                    },
                    {
                      name: [
                        "--include-static-delivery-attribute-secret",
                        "--include-attrib-secret",
                      ],
                      description:
                        "Indicate whether any static delivery attribute secrets should be returned. True if flag present",
                    },
                  ],
                },
                {
                  name: "update",
                  description: "Update an event subscription of a domain topic",
                  options: [
                    {
                      name: "--domain-name",
                      description: "Name of the domain",
                      args: { name: "domain-name" },
                      isRequired: true,
                    },
                    {
                      name: "--domain-topic-name",
                      description: "Name of the domain topic",
                      args: { name: "domain-topic-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--name", "-n"],
                      description: "Name of the event subscription",
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
                      name: "--advanced-filter",
                      description:
                        "An advanced filter enables filtering of events based on a specific event property",
                      args: { name: "advanced-filter" },
                    },
                    {
                      name: "--deadletter-endpoint",
                      description:
                        "The Azure resource ID of an Azure Storage blob container destination where EventGrid should deadletter undeliverable events for this event subscription",
                      args: { name: "deadletter-endpoint" },
                    },
                    {
                      name: ["--delivery-attribute-mapping", "-d"],
                      description:
                        "Add delivery attribute mapping to send additional information via HTTP headers when delivering events. This attribute is valid for all destination types except StorageQueue. Multiple attributes can be specified by using more than one --delivery-attribute-mapping argument",
                      args: { name: "delivery-attribute-mapping" },
                    },
                    {
                      name: [
                        "--enable-advanced-filtering-on-arrays",
                        "--enable-af-arr",
                      ],
                      description:
                        "Allows advanced filters to be evaluated against an array of values instead of expecting a singular value",
                      args: {
                        name: "enable-advanced-filtering-on-arrays",
                        suggestions: ["false", "true"],
                      },
                    },
                    {
                      name: "--endpoint",
                      description:
                        "Endpoint where EventGrid should deliver events matching this event subscription. For webhook endpoint type, this should be the corresponding webhook URL. For other endpoint types, this should be the Azure resource identifier of the endpoint. It is expected that the destination endpoint to be already created and available for use before executing any Event Grid command",
                      args: { name: "endpoint" },
                    },
                    {
                      name: "--included-event-types",
                      description:
                        "A space-separated list of event types (e.g., Microsoft.Storage.BlobCreated and Microsoft.Storage.BlobDeleted). In order to subscribe to all default event types, do not specify any value for this argument. For event grid topics, event types are customer defined. For Azure events, e.g., Storage Accounts, IoT Hub, etc., you can query their event types using this CLI command 'az eventgrid topic-type list-event-types'",
                      args: { name: "included-event-types" },
                    },
                    {
                      name: "--labels",
                      description:
                        "A space-separated list of labels to associate with this event subscription",
                      args: { name: "labels" },
                    },
                    {
                      name: ["--storage-queue-msg-ttl", "--qttl"],
                      description:
                        "Storage queue message time to live in seconds",
                      args: { name: "storage-queue-msg-ttl" },
                    },
                    {
                      name: "--subject-begins-with",
                      description:
                        "An optional string to filter events for an event subscription based on a prefix. Wildcard characters are not supported",
                      args: { name: "subject-begins-with" },
                    },
                    {
                      name: "--subject-ends-with",
                      description:
                        "An optional string to filter events for an event subscription based on a suffix. Wildcard characters are not supported",
                      args: { name: "subject-ends-with" },
                    },
                    {
                      name: "--update-endpoint-type",
                      description: "The type of the destination endpoint",
                      args: {
                        name: "update-endpoint-type",
                        suggestions: [
                          "azurefunction",
                          "eventhub",
                          "hybridconnection",
                          "servicebusqueue",
                          "servicebustopic",
                          "storagequeue",
                          "webhook",
                        ],
                      },
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
      name: "event-subscription",
      description:
        "Manage event subscriptions.\n\n\t\tManage event subscriptions for an Event Grid topic, domain, domain topic, Azure subscription, resource group or for any other Azure resource that supports event notifications",
      subcommands: [
        {
          name: "create",
          description: "Create a new event subscription",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the event subscription",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--azure-active-directory-tenant-id", "--aad-tenant-id"],
              description:
                "The Azure Active Directory Tenant Id to get the access token that will be included as the bearer token in delivery requests. Applicable only for webhook as a destination",
              args: { name: "azure-active-directory-tenant-id" },
            },
            {
              name: "--advanced-filter",
              description:
                "An advanced filter enables filtering of events based on a specific event property",
              args: { name: "advanced-filter" },
            },
            {
              name: "--azure-active-directory-application-id-or-uri",
              description:
                "The Azure Active Directory Application Id or Uri to get the access token that will be included as the bearer token in delivery requests. Applicable only for webhook as a destination",
              args: { name: "azure-active-directory-application-id-or-uri" },
            },
            {
              name: "--deadletter-endpoint",
              description:
                "The Azure resource ID of an Azure Storage blob container destination where EventGrid should deadletter undeliverable events for this event subscription",
              args: { name: "deadletter-endpoint" },
            },
            {
              name: "--deadletter-identity",
              description:
                "The identity type of the deadletter destination resource",
              args: {
                name: "deadletter-identity",
                suggestions: ["systemassigned"],
              },
            },
            {
              name: "--deadletter-identity-endpoint",
              description:
                "The Azure resource ID of an Azure Storage blob container destination with identity where EventGrid should deadletter undeliverable events for this event subscription",
              args: { name: "deadletter-identity-endpoint" },
            },
            {
              name: "--delivery-attribute-mapping",
              description:
                "Add delivery attribute mapping to send additional information via HTTP headers when delivering events. This attribute is valid for all destination types except StorageQueue. Multiple attributes can be specified by using more than one --delivery-attribute-mapping argument",
              args: { name: "delivery-attribute-mapping" },
            },
            {
              name: "--delivery-identity",
              description:
                "The identity type of the delivery destination resource (e.g., storage queue, or eventhub)",
              args: {
                name: "delivery-identity",
                suggestions: ["systemassigned"],
              },
            },
            {
              name: "--delivery-identity-endpoint",
              description:
                "Endpoint with identity where EventGrid should deliver events matching this event subscription. For webhook endpoint type, this should be the corresponding webhook URL. For other endpoint types, this should be the Azure resource identifier of the endpoint",
              args: { name: "delivery-identity-endpoint" },
            },
            {
              name: "--delivery-identity-endpoint-type",
              description:
                "The type of the destination endpoint with resource identity",
              args: {
                name: "delivery-identity-endpoint-type",
                suggestions: [
                  "azurefunction",
                  "eventhub",
                  "hybridconnection",
                  "servicebusqueue",
                  "servicebustopic",
                  "storagequeue",
                  "webhook",
                ],
              },
            },
            {
              name: [
                "--enable-advanced-filtering-on-arrays",
                "--enable-af-arr",
              ],
              description:
                "Allows advanced filters to be evaluated against an array of values instead of expecting a singular value",
              args: {
                name: "enable-advanced-filtering-on-arrays",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--endpoint",
              description:
                "Endpoint where EventGrid should deliver events matching this event subscription. For webhook endpoint type, this should be the corresponding webhook URL. For other endpoint types, this should be the Azure resource identifier of the endpoint. It is expected that the destination endpoint to be already created and available for use before executing any Event Grid command",
              args: { name: "endpoint" },
            },
            {
              name: "--endpoint-type",
              description: "The type of the destination endpoint",
              args: { name: "endpoint-type" },
            },
            {
              name: "--event-delivery-schema",
              description:
                "The schema in which events should be delivered for this event subscription. By default, events will be delivered in the same schema in which they are published (based on the corresponding topic's input schema)",
              args: {
                name: "event-delivery-schema",
                suggestions: [
                  "cloudeventschemav1_0",
                  "custominputschema",
                  "eventgridschema",
                ],
              },
            },
            {
              name: "--event-ttl",
              description:
                "Event time to live (in minutes). Must be a number between 1 and 1440",
              args: { name: "event-ttl" },
            },
            {
              name: "--expiration-date",
              description:
                "Date or datetime (in UTC, e.g. '2018-11-30T11:59:59+00:00' or '2018-11-30') after which the event subscription would expire. By default, there is no expiration for the event subscription",
              args: { name: "expiration-date" },
            },
            {
              name: "--included-event-types",
              description:
                "A space-separated list of event types (e.g., Microsoft.Storage.BlobCreated and Microsoft.Storage.BlobDeleted). In order to subscribe to all default event types, do not specify any value for this argument. For event grid topics, event types are customer defined. For Azure events, e.g., Storage Accounts, IoT Hub, etc., you can query their event types using this CLI command 'az eventgrid topic-type list-event-types'",
              args: { name: "included-event-types" },
            },
            {
              name: "--labels",
              description:
                "A space-separated list of labels to associate with this event subscription",
              args: { name: "labels" },
            },
            {
              name: "--max-delivery-attempts",
              description:
                "Maximum number of delivery attempts. Must be a number between 1 and 30",
              args: { name: "max-delivery-attempts" },
            },
            {
              name: "--max-events-per-batch",
              description:
                "Maximum number of events in a batch. Must be a number between 1 and 5000",
              args: { name: "max-events-per-batch" },
            },
            {
              name: "--preferred-batch-size-in-kilobytes",
              description:
                "Preferred batch size in kilobytes. Must be a number between 1 and 1024",
              args: { name: "preferred-batch-size-in-kilobytes" },
            },
            {
              name: ["--storage-queue-msg-ttl", "--qttl"],
              description: "Storage queue message time to live in seconds",
              args: { name: "storage-queue-msg-ttl" },
            },
            {
              name: "--source-resource-id",
              description:
                "Fully qualified identifier of the Azure resource to which the event subscription needs to be created",
              args: { name: "source-resource-id" },
            },
            {
              name: "--subject-begins-with",
              description:
                "An optional string to filter events for an event subscription based on a prefix. Wildcard characters are not supported",
              args: { name: "subject-begins-with" },
            },
            {
              name: "--subject-case-sensitive",
              description:
                "Specify to indicate whether the subject fields should be compared in a case sensitive manner. True if flag present",
            },
            {
              name: "--subject-ends-with",
              description:
                "An optional string to filter events for an event subscription based on a suffix. Wildcard characters are not supported",
              args: { name: "subject-ends-with" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete an event subscription",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the event subscription",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--source-resource-id",
              description:
                "Fully qualified identifier of the Azure resource whose event subscription needs to be deleted",
              args: { name: "source-resource-id" },
            },
          ],
        },
        {
          name: "list",
          description: "List event subscriptions",
          options: [
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--odata-query",
              description:
                "The OData query used for filtering the list results. Filtering is currently allowed on the Name property only. The supported operations include: CONTAINS, eq (for equal), ne (for not equal), AND, OR and NOT",
              args: { name: "odata-query" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--source-resource-id",
              description:
                "Fully qualified identifier of the Azure resource whose event subscription needs to be listed",
              args: { name: "source-resource-id" },
            },
            {
              name: "--topic-type-name",
              description:
                "Name of the topic-type whose event subscriptions need to be listed. When this is specified, you must also specify --location",
              args: { name: "topic-type-name" },
            },
          ],
        },
        {
          name: "show",
          description: "Get the details of an event subscription",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the event subscription",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: [
                "--include-static-delivery-attribute-secret",
                "--include-attrib-secret",
              ],
              description:
                "Indicate whether any static delivery attribute secrets should be returned. True if flag present",
            },
            {
              name: "--include-full-endpoint-url",
              description:
                "Specify to indicate whether the full endpoint URL should be returned. True if flag present",
            },
            {
              name: "--source-resource-id",
              description:
                "Fully qualified identifier of the Azure resource whose event subscription needs to be shown",
              args: { name: "source-resource-id" },
            },
          ],
        },
        {
          name: "update",
          description: "Update an event subscription",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the event subscription",
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
              name: "--advanced-filter",
              description:
                "An advanced filter enables filtering of events based on a specific event property",
              args: { name: "advanced-filter" },
            },
            {
              name: "--deadletter-endpoint",
              description:
                "The Azure resource ID of an Azure Storage blob container destination where EventGrid should deadletter undeliverable events for this event subscription",
              args: { name: "deadletter-endpoint" },
            },
            {
              name: "--deadletter-identity",
              description:
                "The identity type of the deadletter destination resource",
              args: {
                name: "deadletter-identity",
                suggestions: ["systemassigned"],
              },
            },
            {
              name: "--deadletter-identity-endpoint",
              description:
                "The Azure resource ID of an Azure Storage blob container destination with identity where EventGrid should deadletter undeliverable events for this event subscription",
              args: { name: "deadletter-identity-endpoint" },
            },
            {
              name: "--delivery-attribute-mapping",
              description:
                "Add delivery attribute mapping to send additional information via HTTP headers when delivering events. This attribute is valid for all destination types except StorageQueue. Multiple attributes can be specified by using more than one --delivery-attribute-mapping argument",
              args: { name: "delivery-attribute-mapping" },
            },
            {
              name: "--delivery-identity",
              description:
                "The identity type of the delivery destination resource (e.g., storage queue, or eventhub)",
              args: {
                name: "delivery-identity",
                suggestions: ["systemassigned"],
              },
            },
            {
              name: "--delivery-identity-endpoint",
              description:
                "Endpoint with identity where EventGrid should deliver events matching this event subscription. For webhook endpoint type, this should be the corresponding webhook URL. For other endpoint types, this should be the Azure resource identifier of the endpoint",
              args: { name: "delivery-identity-endpoint" },
            },
            {
              name: "--delivery-identity-endpoint-type",
              description:
                "The type of the destination endpoint with resource identity",
              args: {
                name: "delivery-identity-endpoint-type",
                suggestions: [
                  "azurefunction",
                  "eventhub",
                  "hybridconnection",
                  "servicebusqueue",
                  "servicebustopic",
                  "storagequeue",
                  "webhook",
                ],
              },
            },
            {
              name: [
                "--enable-advanced-filtering-on-arrays",
                "--enable-af-arr",
              ],
              description:
                "Allows advanced filters to be evaluated against an array of values instead of expecting a singular value",
              args: {
                name: "enable-advanced-filtering-on-arrays",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--endpoint",
              description:
                "Endpoint where EventGrid should deliver events matching this event subscription. For webhook endpoint type, this should be the corresponding webhook URL. For other endpoint types, this should be the Azure resource identifier of the endpoint. It is expected that the destination endpoint to be already created and available for use before executing any Event Grid command",
              args: { name: "endpoint" },
            },
            {
              name: "--endpoint-type",
              description: "The type of the destination endpoint",
              args: { name: "endpoint-type" },
            },
            {
              name: "--force-string",
              description:
                "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
            },
            {
              name: "--included-event-types",
              description:
                "A space-separated list of event types (e.g., Microsoft.Storage.BlobCreated and Microsoft.Storage.BlobDeleted). In order to subscribe to all default event types, do not specify any value for this argument. For event grid topics, event types are customer defined. For Azure events, e.g., Storage Accounts, IoT Hub, etc., you can query their event types using this CLI command 'az eventgrid topic-type list-event-types'",
              args: { name: "included-event-types" },
            },
            {
              name: "--labels",
              description:
                "A space-separated list of labels to associate with this event subscription",
              args: { name: "labels" },
            },
            {
              name: ["--storage-queue-msg-ttl", "--qttl"],
              description: "Storage queue message time to live in seconds",
              args: { name: "storage-queue-msg-ttl" },
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
            {
              name: "--source-resource-id",
              description:
                "Fully qualified identifier of the Azure resource whose event subscription needs to be updated",
              args: { name: "source-resource-id" },
            },
            {
              name: "--subject-begins-with",
              description:
                "An optional string to filter events for an event subscription based on a prefix. Wildcard characters are not supported",
              args: { name: "subject-begins-with" },
            },
            {
              name: "--subject-ends-with",
              description:
                "An optional string to filter events for an event subscription based on a suffix. Wildcard characters are not supported",
              args: { name: "subject-ends-with" },
            },
          ],
        },
      ],
    },
    {
      name: "extension-topic",
      description: "Manage Azure Event Grid extension topics",
      subcommands: [
        {
          name: "show",
          description: "Get the details of an extension topic",
          options: [
            {
              name: "--scope",
              description:
                "The identifier of the resource to which extension topic is queried. The scope can be a subscription, or a resource group, or a top level resource belonging to a resource provider namespace. For example, use '/subscriptions/{subscriptionId}/' for a subscription, '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for a resource group, and '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}' for Azure resource",
              args: { name: "scope" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "partner",
      description: "Manage partner resources",
      subcommands: [
        {
          name: "configuration",
          description: "Manage partner configurations",
          subcommands: [
            {
              name: "authorize",
              description: "Authorize a partner configuration",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: ["--authorization-expiration-date", "--auth-exp-date"],
                  description:
                    "Date or datetime in UTC ISO 8601 format (e.g., '2022-02-17T01:59:59+00:00' or '2022-02-17') which is the expiration time of the partner authorization. If this timer expires, any request from this partner to create, update or delete resources in subscriber's context will fail. If specified, the allowed values are between 1 to the value of defaultMaximumExpirationTimeInDays specified in PartnerConfiguration. If not specified, the default value will be the value of defaultMaximumExpirationTimeInDays specified in PartnerConfiguration or 7 if this value is not specified",
                  args: { name: "authorization-expiration-date" },
                },
                {
                  name: "--partner-name",
                  description: "Official name of the partner",
                  args: { name: "partner-name" },
                },
                {
                  name: ["--partner-registration-immutable-id", "--pr-id"],
                  description:
                    "The immutable ID of the corresponding partner registration",
                  args: { name: "partner-registration-immutable-id" },
                },
              ],
            },
            {
              name: "create",
              description: "Create a partner configuration",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--authorized-partner",
                  description:
                    "Add authorized partner information. Multiple authorized partners can be specified by using more than one --authorized-partner argument",
                  args: { name: "authorized-partner" },
                },
                {
                  name: [
                    "--default-maximum-expiration-time-in-days",
                    "--max-exp-days",
                  ],
                  description:
                    "Time used to validate the authorization expiration time for each authorized partner. If DefaultMaximumExpirationTimeInDays is not specified, the default is 7 days. Otherwise, allowed values are between 1 and 365 days",
                  args: { name: "default-maximum-expiration-time-in-days" },
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
              description: "Delete a partner configuration",
              options: [
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
              description: "List available partner configurations",
              options: [
                {
                  name: "--odata-query",
                  description:
                    "The OData query used for filtering the list results. Filtering is currently allowed on the Name property only. The supported operations include: CONTAINS, eq (for equal), ne (for not equal), AND, OR and NOT",
                  args: { name: "odata-query" },
                },
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
              description: "Get the details of a partner configuration",
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
              name: "unauthorize",
              description: "Unauthorize a partner configuration",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: ["--authorization-expiration-date", "--auth-exp-date"],
                  description:
                    "Date or datetime in UTC ISO 8601 format (e.g., '2022-02-17T01:59:59+00:00' or '2022-02-17') which is the expiration time of the partner authorization. If this timer expires, any request from this partner to create, update or delete resources in subscriber's context will fail. If specified, the allowed values are between 1 to the value of defaultMaximumExpirationTimeInDays specified in PartnerConfiguration. If not specified, the default value will be the value of defaultMaximumExpirationTimeInDays specified in PartnerConfiguration or 7 if this value is not specified",
                  args: { name: "authorization-expiration-date" },
                },
                {
                  name: "--partner-name",
                  description: "Official name of the partner",
                  args: { name: "partner-name" },
                },
                {
                  name: ["--partner-registration-immutable-id", "--pr-id"],
                  description:
                    "The immutable ID of the corresponding partner registration",
                  args: { name: "partner-registration-immutable-id" },
                },
              ],
            },
            {
              name: "update",
              description: "Update a partner configuration",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: [
                    "--default-maximum-expiration-time-in-days",
                    "--max-exp-days",
                  ],
                  description:
                    "Time used to validate the authorization expiration time for each authorized partner. If DefaultMaximumExpirationTimeInDays is not specified, the default is 7 days. Otherwise, allowed values are between 1 and 365 days",
                  args: { name: "default-maximum-expiration-time-in-days" },
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
          name: "destination",
          description: "Manage partner destinations",
          subcommands: [
            {
              name: "activate",
              description: "Activate a partner destination",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the partner destination",
                  args: { name: "name" },
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
              name: "create",
              description: "Create a partner destination",
              options: [
                {
                  name: ["--location", "-l"],
                  description:
                    "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
                  args: { name: "location" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the partner destination",
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
                  name: ["--activation-expiration-date", "--act-exp-date"],
                  description:
                    "Date or datetime in UTC ISO 8601 format (e.g., '2022-02-17T01:59:59+00:00' or '2022-02-17') which is the expiration time of the partner destination. If this timer expires and the partner destination was never activated, the partner destination and corresponding channel are deleted",
                  args: { name: "activation-expiration-date" },
                },
                {
                  name: ["--endpoint-service-context", "--ed-serv-cont"],
                  description:
                    "Endpoint context associated with this partner destination",
                  args: { name: "endpoint-service-context" },
                },
                {
                  name: "--endpoint-base-url",
                  description: "Endpoint Base URL of the partner destination",
                  args: { name: "endpoint-base-url" },
                },
                {
                  name: "--message-for-activation",
                  description:
                    "Context or helpful message that can be used during the approval process",
                  args: { name: "message-for-activation" },
                },
                {
                  name: ["--partner-registration-immutable-id", "--pr-id"],
                  description:
                    "The immutable ID of the corresponding partner registration",
                  args: { name: "partner-registration-immutable-id" },
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
              description: "Delete a partner destination",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the partner destination",
                  args: { name: "name" },
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
              description: "List available partner destinations",
              options: [
                {
                  name: "--odata-query",
                  description:
                    "The OData query used for filtering the list results. Filtering is currently allowed on the Name property only. The supported operations include: CONTAINS, eq (for equal), ne (for not equal), AND, OR and NOT",
                  args: { name: "odata-query" },
                },
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
              description: "Get the details of a partner destination",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the partner destination",
                  args: { name: "name" },
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
              description: "Update the details of a partner destination",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the partner destination",
                  args: { name: "name" },
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
          name: "namespace",
          description: "Manage partner namespaces",
          subcommands: [
            {
              name: "create",
              description: "Create a partner namespace",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the partner namespace",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--partner-registration-id",
                  description:
                    "The fully qualified ARM Id of the partner registration that should be associated with this partner namespace. This takes the following format: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/partnerRegistrations/{partnerRegistrationName}",
                  args: { name: "partner-registration-id" },
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
                  name: ["--location", "-l"],
                  description:
                    "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
                  args: { name: "location" },
                },
                {
                  name: ["--partner-topic-routing-mode", "--route-mode"],
                  description:
                    "This determines if events published to this partner namespace should use the source attribute in the event payload or use the channel name in the header when matching to the partner topic. If none is specified, source attribute routing will be used to match the partner topic",
                  args: {
                    name: "partner-topic-routing-mode",
                    suggestions: ["ChannelNameHeader", "SourceEventAttribute"],
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
              description: "Delete a partner namespace",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the partner namespace",
                  args: { name: "name" },
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
              description: "List available partner namespaces",
              options: [
                {
                  name: "--odata-query",
                  description:
                    "The OData query used for filtering the list results. Filtering is currently allowed on the Name property only. The supported operations include: CONTAINS, eq (for equal), ne (for not equal), AND, OR and NOT",
                  args: { name: "odata-query" },
                },
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
              description: "Get the details of a partner namespace",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the partner namespace",
                  args: { name: "name" },
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
              name: "channel",
              description: "Manage partner channels",
              subcommands: [
                {
                  name: "create",
                  description: "Create a new channel for a partner namespace",
                  options: [
                    {
                      name: "--channel-type",
                      description:
                        "The type of the event channel which represents the direction flow of events",
                      args: {
                        name: "channel-type",
                        suggestions: ["PartnerDestination", "PartnerTopic"],
                      },
                      isRequired: true,
                    },
                    {
                      name: "--destination-rg",
                      description:
                        "Azure Resource Group of the subscriber requesting the creation of the channel resource by the publisher. The corresponding partner resource (either partner topic or partner destination) associated with the channel resource will be created under this resource group",
                      args: { name: "destination-rg" },
                      isRequired: true,
                    },
                    {
                      name: "--destination-sub-id",
                      description:
                        "Azure subscription Id of the subscriber requesting the creation of the channel resource by the publisher. The corresponding partner resource (either partner topic or partner destination) associated with the channel resource will be created under this Azure subscription",
                      args: { name: "destination-sub-id" },
                      isRequired: true,
                    },
                    {
                      name: ["--name", "-n"],
                      description: "Name of the channel",
                      args: { name: "name" },
                      isRequired: true,
                    },
                    {
                      name: "--partner-namespace-name",
                      description: "Name of the partner namespace",
                      args: { name: "partner-namespace-name" },
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
                      name: [
                        "--azure-active-directory-application-id-or-uri",
                        "--aad-app-id",
                      ],
                      description:
                        "The Azure Active Directory Application ID or URI to get the access token that will be included as the bearer token in delivery requests",
                      args: {
                        name: "azure-active-directory-application-id-or-uri",
                      },
                    },
                    {
                      name: [
                        "--azure-active-directory-tenant-id",
                        "--aad-tenant-id",
                      ],
                      description:
                        "The Azure Active Directory Tenant ID to get the access token that will be included as the bearer token in delivery requests",
                      args: { name: "azure-active-directory-tenant-id" },
                    },
                    {
                      name: ["--activation-expiration-date", "--act-exp-date"],
                      description:
                        "Date or datetime in UTC ISO 8601 format (e.g., '2022-02-17T01:59:59+00:00' or '2022-02-17') after which the channel and corresponding partner topic would expire and get auto deleted. If this time is not specified, the expiration date is set to seven days by default",
                      args: { name: "activation-expiration-date" },
                    },
                    {
                      name: ["--endpoint-service-context", "--ed-serv-cont"],
                      description:
                        "Endpoint context associated with this partner destination",
                      args: { name: "endpoint-service-context" },
                    },
                    {
                      name: "--endpoint-url",
                      description:
                        "The URL that represents the endpoint of the partner destination",
                      args: { name: "endpoint-url" },
                    },
                    {
                      name: "--event-type-kind",
                      description: "The kind of event type used",
                      args: {
                        name: "event-type-kind",
                        suggestions: ["inline"],
                      },
                    },
                    {
                      name: "--inline-event-type",
                      description:
                        "Create a channel for an existing partner namespace, either of type partner topic or partner destination. You can also add inline event type info if channel type is partner topic. Multiple attributes can be specified by using more than one --inline-event-type argument",
                      args: { name: "inline-event-type" },
                    },
                    {
                      name: "--message-for-activation",
                      description:
                        "Context or helpful message that can be used during the approval process",
                      args: { name: "message-for-activation" },
                    },
                    {
                      name: ["--partner-destination-name", "--pr-dest-n"],
                      description: "Name of the partner destination",
                      args: { name: "partner-destination-name" },
                    },
                    {
                      name: "--partner-topic-name",
                      description: "Name of the partner topic",
                      args: { name: "partner-topic-name" },
                    },
                    {
                      name: "--partner-topic-source",
                      description:
                        "The identifier of the resource that forms the partner source of the events. This represents a unique resource in the partner's resource model",
                      args: { name: "partner-topic-source" },
                    },
                  ],
                },
                {
                  name: "delete",
                  description: "Delete a partner namespace",
                  options: [
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids" },
                    },
                    {
                      name: ["--name", "-n"],
                      description: "Name of the channel",
                      args: { name: "name" },
                    },
                    {
                      name: "--partner-namespace-name",
                      description: "Name of the partner namespace",
                      args: { name: "partner-namespace-name" },
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
                  description: "List available partner channels",
                  options: [
                    {
                      name: "--partner-namespace-name",
                      description: "Name of the partner namespace",
                      args: { name: "partner-namespace-name" },
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
                      name: "--odata-query",
                      description:
                        "The OData query used for filtering the list results. Filtering is currently allowed on the Name property only. The supported operations include: CONTAINS, eq (for equal), ne (for not equal), AND, OR and NOT",
                      args: { name: "odata-query" },
                    },
                  ],
                },
                {
                  name: "show",
                  description:
                    "Get the details of a channel under a partner namespace",
                  options: [
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids" },
                    },
                    {
                      name: ["--name", "-n"],
                      description: "Name of the channel",
                      args: { name: "name" },
                    },
                    {
                      name: "--partner-namespace-name",
                      description: "Name of the partner namespace",
                      args: { name: "partner-namespace-name" },
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
                    "Update the details of a channel under a partner namespace",
                  options: [
                    {
                      name: [
                        "--azure-active-directory-application-id-or-uri",
                        "--aad-app-id",
                      ],
                      description:
                        "The Azure Active Directory Application ID or URI to get the access token that will be included as the bearer token in delivery requests",
                      args: {
                        name: "azure-active-directory-application-id-or-uri",
                      },
                    },
                    {
                      name: [
                        "--azure-active-directory-tenant-id",
                        "--aad-tenant-id",
                      ],
                      description:
                        "The Azure Active Directory Tenant ID to get the access token that will be included as the bearer token in delivery requests",
                      args: { name: "azure-active-directory-tenant-id" },
                    },
                    {
                      name: ["--activation-expiration-date", "--act-exp-date"],
                      description:
                        "Date or datetime in UTC ISO 8601 format (e.g., '2022-02-17T01:59:59+00:00' or '2022-02-17') after which the channel and corresponding partner topic would expire and get auto deleted. If this time is not specified, the expiration date is set to seven days by default",
                      args: { name: "activation-expiration-date" },
                    },
                    {
                      name: "--endpoint-base-url",
                      description:
                        "Endpoint Base URL of the partner destination",
                      args: { name: "endpoint-base-url" },
                    },
                    {
                      name: "--endpoint-url",
                      description:
                        "The URL that represents the endpoint of the partner destination",
                      args: { name: "endpoint-url" },
                    },
                    {
                      name: "--event-type-kind",
                      description: "The kind of event type used",
                      args: {
                        name: "event-type-kind",
                        suggestions: ["inline"],
                      },
                    },
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids" },
                    },
                    {
                      name: "--inline-event-type",
                      description:
                        "Add inline event type info. Multiple attributes can be specified by using more than one --inline-event-type argument",
                      args: { name: "inline-event-type" },
                    },
                    {
                      name: ["--name", "-n"],
                      description: "Name of the channel",
                      args: { name: "name" },
                    },
                    {
                      name: "--partner-namespace-name",
                      description: "Name of the partner namespace",
                      args: { name: "partner-namespace-name" },
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
              name: "event-channel",
              description: "Manage partner event channels",
              subcommands: [
                {
                  name: "create",
                  description:
                    "Create an event channel under a partner namespace",
                  options: [
                    {
                      name: "--destination-rg",
                      description:
                        "Azure Resource Group of the subscriber requesting the creation of the channel resource by the publisher. The corresponding partner resource (either partner topic or partner destination) associated with the channel resource will be created under this resource group",
                      args: { name: "destination-rg" },
                      isRequired: true,
                    },
                    {
                      name: "--destination-sub-id",
                      description:
                        "Azure subscription Id of the subscriber requesting the creation of the channel resource by the publisher. The corresponding partner resource (either partner topic or partner destination) associated with the channel resource will be created under this Azure subscription",
                      args: { name: "destination-sub-id" },
                      isRequired: true,
                    },
                    {
                      name: "--destination-topic-name",
                      description:
                        "Name of the partner topic associated with the event channel",
                      args: { name: "destination-topic-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--name", "-n"],
                      description: "Name of the event channel",
                      args: { name: "name" },
                      isRequired: true,
                    },
                    {
                      name: "--partner-namespace-name",
                      description: "Name of the partner namespace",
                      args: { name: "partner-namespace-name" },
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
                      name: "--source",
                      description:
                        "The identifier of the resource that forms the partner source of the events. This represents a unique resource in the partner's resource model",
                      args: { name: "source" },
                      isRequired: true,
                    },
                    {
                      name: "--activation-expiration-date",
                      description:
                        "Date or datetime in UTC ISO 8601 format (e.g., '2022-02-17T01:59:59+00:00' or '2022-02-17') after which the event channel and corresponding partner topic would expire and get auto deleted. If this time is not specified, the expiration date is set to seven days by default",
                      args: { name: "activation-expiration-date" },
                    },
                    {
                      name: "--partner-topic-description",
                      description:
                        "Friendly description of the corresponding partner topic. This will be helpful to remove any ambiguity of the origin of creation of the partner topic for the customer",
                      args: { name: "partner-topic-description" },
                    },
                    {
                      name: "--publisher-filter",
                      description:
                        "Argument 'publisher_filter' has been deprecated and will be removed in a future release. A publisher filter that is used to enable filtering of events based on a specific event property. This set of filters that are specified by the publisher in order to determine which events to be received by the subscriber",
                      args: { name: "publisher-filter" },
                    },
                  ],
                },
                {
                  name: "delete",
                  description: "Delete a partner namespace",
                  options: [
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids" },
                    },
                    {
                      name: ["--name", "-n"],
                      description: "Name of the event channel",
                      args: { name: "name" },
                    },
                    {
                      name: "--partner-namespace-name",
                      description: "Name of the partner namespace",
                      args: { name: "partner-namespace-name" },
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
                  description: "List available partner event-channels",
                  options: [
                    {
                      name: "--partner-namespace-name",
                      description: "Name of the partner namespace",
                      args: { name: "partner-namespace-name" },
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
                      name: "--odata-query",
                      description:
                        "The OData query used for filtering the list results. Filtering is currently allowed on the Name property only. The supported operations include: CONTAINS, eq (for equal), ne (for not equal), AND, OR and NOT",
                      args: { name: "odata-query" },
                    },
                  ],
                },
                {
                  name: "show",
                  description:
                    "Get the details of an event channel under a partner namespace",
                  options: [
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids" },
                    },
                    {
                      name: ["--name", "-n"],
                      description: "Name of the event channel",
                      args: { name: "name" },
                    },
                    {
                      name: "--partner-namespace-name",
                      description: "Name of the partner namespace",
                      args: { name: "partner-namespace-name" },
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
              name: "key",
              description: "Manage shared access keys of a partner namespace",
              subcommands: [
                {
                  name: "list",
                  description: "List shared access keys of a partner namespace",
                  options: [
                    {
                      name: "--partner-namespace-name",
                      description: "Name of the partner namespace",
                      args: { name: "partner-namespace-name" },
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
                  name: "regenerate",
                  description:
                    "Regenerate a shared access key of a partner namespace",
                  options: [
                    {
                      name: "--key-name",
                      description: "Key name to regenerate key1 or key2",
                      args: { name: "key-name" },
                      isRequired: true,
                    },
                    {
                      name: "--partner-namespace-name",
                      description: "Name of the partner namespace",
                      args: { name: "partner-namespace-name" },
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
          name: "registration",
          description: "Manage partner registrations",
          subcommands: [
            {
              name: "create",
              description: "Create a new partner registration",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the partner registration",
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
                  name: "--authorized-subscription-ids",
                  description:
                    "A space-separated list of Azure subscription Ids that are authorized to create a partner namespace associated with this partner registration. This is an optional property. Creating partner namespaces is always permitted under the same Azure subscription as the one used for creating the partner registration",
                  args: { name: "authorized-subscription-ids" },
                },
                {
                  name: "--customer-service-extension",
                  description:
                    "Argument 'customer_service_extension' has been deprecated and will be removed in a future release. The extension of the customer service number of the publisher. Only digits are allowed and number of digits should not exceed 10",
                  args: { name: "customer-service-extension" },
                },
                {
                  name: "--customer-service-number",
                  description:
                    "Argument 'customer_service_number' has been deprecated and will be removed in a future release. The customer service number of the publisher. The expected phone format should start with a '+' sign followed by the country code. The remaining digits are then followed. Only digits and spaces are allowed and its length cannot exceed 16 digits including country code. Examples of valid phone numbers are: +1 515 123 4567 and +966 7 5115 2471. Examples of invalid phone numbers are: +1 (515) 123-4567, 1 515 123 4567 and +966 121 5115 24 7 551 1234 43",
                  args: { name: "customer-service-number" },
                },
                {
                  name: "--customer-service-uri",
                  description:
                    "Argument 'customer_service_uri' has been deprecated and will be removed in a future release. The customer service URI of the publisher",
                  args: { name: "customer-service-uri" },
                },
                {
                  name: "--description",
                  description:
                    "Argument 'description' has been deprecated and will be removed in a future release. Description of the partner topic type",
                  args: { name: "description" },
                },
                {
                  name: "--display-name",
                  description:
                    "Argument 'display_name' has been deprecated and will be removed in a future release. Display name for the partner topic type",
                  args: { name: "display-name" },
                },
                {
                  name: "--logo-uri",
                  description:
                    "Argument 'logo_uri' has been deprecated and will be removed in a future release. URI of the partner logo",
                  args: { name: "logo-uri" },
                },
                {
                  name: "--long-description",
                  description:
                    "Argument 'long_description' has been deprecated and will be removed in a future release. Description of the custom scenarios and integration. Length of this description should not exceed 2048 characters",
                  args: { name: "long-description" },
                },
                {
                  name: "--partner-name",
                  description:
                    "Argument 'partner_name' has been deprecated and will be removed in a future release. Official name of the partner",
                  args: { name: "partner-name" },
                },
                {
                  name: "--resource-type-name",
                  description:
                    "Argument 'resource_type_name' has been deprecated and will be removed in a future release. Name of the partner topic resource type. This name should be unique among all partner topic types names",
                  args: { name: "resource-type-name" },
                },
                {
                  name: "--setup-uri",
                  description:
                    "Argument 'setup_uri' has been deprecated and will be removed in a future release. URI of the partner website that can be used by Azure customers to setup Event Grid integration on an event source",
                  args: { name: "setup-uri" },
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
              description: "Delete a partner registration",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the partner registration",
                  args: { name: "name" },
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
                "List all partner registrations in specific resource group or all under the specified azure subscription",
              options: [
                {
                  name: "--odata-query",
                  description:
                    "The OData query used for filtering the list results. Filtering is currently allowed on the Name property only. The supported operations include: CONTAINS, eq (for equal), ne (for not equal), AND, OR and NOT",
                  args: { name: "odata-query" },
                },
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
              description: "Get a partner registration",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the partner registration",
                  args: { name: "name" },
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
          name: "topic",
          description: "Manage partner topics",
          subcommands: [
            {
              name: "activate",
              description: "Activate a partner topic",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the partner topic",
                  args: { name: "name" },
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
              name: "deactivate",
              description: "Deactivate a partner topic",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the partner topic",
                  args: { name: "name" },
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
              name: "delete",
              description: "Delete a partner topic",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the partner topic",
                  args: { name: "name" },
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
              description: "List available partner topics",
              options: [
                {
                  name: "--odata-query",
                  description:
                    "The OData query used for filtering the list results. Filtering is currently allowed on the Name property only. The supported operations include: CONTAINS, eq (for equal), ne (for not equal), AND, OR and NOT",
                  args: { name: "odata-query" },
                },
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
              description: "Get the details of a partner topic",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the partner topic",
                  args: { name: "name" },
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
              name: "event-subscription",
              description: "Manage event subscriptions of partner topic",
              subcommands: [
                {
                  name: "create",
                  description:
                    "Create a new event subscription for a partner topic",
                  options: [
                    {
                      name: ["--name", "-n"],
                      description: "Name of the event subscription",
                      args: { name: "name" },
                      isRequired: true,
                    },
                    {
                      name: "--partner-topic-name",
                      description: "Name of the partner topic",
                      args: { name: "partner-topic-name" },
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
                      name: [
                        "--azure-active-directory-tenant-id",
                        "--aad-tenant-id",
                      ],
                      description:
                        "The Azure Active Directory Tenant Id to get the access token that will be included as the bearer token in delivery requests. Applicable only for webhook as a destination",
                      args: { name: "azure-active-directory-tenant-id" },
                    },
                    {
                      name: "--advanced-filter",
                      description:
                        "An advanced filter enables filtering of events based on a specific event property",
                      args: { name: "advanced-filter" },
                    },
                    {
                      name: "--azure-active-directory-application-id-or-uri",
                      description:
                        "The Azure Active Directory Application Id or Uri to get the access token that will be included as the bearer token in delivery requests. Applicable only for webhook as a destination",
                      args: {
                        name: "azure-active-directory-application-id-or-uri",
                      },
                    },
                    {
                      name: "--deadletter-endpoint",
                      description:
                        "The Azure resource ID of an Azure Storage blob container destination where EventGrid should deadletter undeliverable events for this event subscription",
                      args: { name: "deadletter-endpoint" },
                    },
                    {
                      name: "--delivery-attribute-mapping",
                      description:
                        "Add delivery attribute mapping to send additional information via HTTP headers when delivering events. This attribute is valid for all destination types except StorageQueue. Multiple attributes can be specified by using more than one --delivery-attribute-mapping argument",
                      args: { name: "delivery-attribute-mapping" },
                    },
                    {
                      name: [
                        "--enable-advanced-filtering-on-arrays",
                        "--enable-af-arr",
                      ],
                      description:
                        "Allows advanced filters to be evaluated against an array of values instead of expecting a singular value",
                      args: {
                        name: "enable-advanced-filtering-on-arrays",
                        suggestions: ["false", "true"],
                      },
                    },
                    {
                      name: "--endpoint",
                      description:
                        "Endpoint where EventGrid should deliver events matching this event subscription. For webhook endpoint type, this should be the corresponding webhook URL. For other endpoint types, this should be the Azure resource identifier of the endpoint. It is expected that the destination endpoint to be already created and available for use before executing any Event Grid command",
                      args: { name: "endpoint" },
                    },
                    {
                      name: "--endpoint-type",
                      description: "The type of the destination endpoint",
                      args: {
                        name: "endpoint-type",
                        suggestions: [
                          "azurefunction",
                          "eventhub",
                          "hybridconnection",
                          "servicebusqueue",
                          "servicebustopic",
                          "storagequeue",
                          "webhook",
                        ],
                      },
                    },
                    {
                      name: "--event-delivery-schema",
                      description:
                        "The schema in which events should be delivered for this event subscription. By default, events will be delivered in the same schema in which they are published (based on the corresponding topic's input schema)",
                      args: {
                        name: "event-delivery-schema",
                        suggestions: [
                          "cloudeventschemav1_0",
                          "custominputschema",
                          "eventgridschema",
                        ],
                      },
                    },
                    {
                      name: "--event-ttl",
                      description:
                        "Event time to live (in minutes). Must be a number between 1 and 1440",
                      args: { name: "event-ttl" },
                    },
                    {
                      name: "--expiration-date",
                      description:
                        "Date or datetime (in UTC, e.g. '2018-11-30T11:59:59+00:00' or '2018-11-30') after which the event subscription would expire. By default, there is no expiration for the event subscription",
                      args: { name: "expiration-date" },
                    },
                    {
                      name: "--included-event-types",
                      description:
                        "A space-separated list of event types (e.g., Microsoft.Storage.BlobCreated and Microsoft.Storage.BlobDeleted). In order to subscribe to all default event types, do not specify any value for this argument. For event grid topics, event types are customer defined. For Azure events, e.g., Storage Accounts, IoT Hub, etc., you can query their event types using this CLI command 'az eventgrid topic-type list-event-types'",
                      args: { name: "included-event-types" },
                    },
                    {
                      name: "--labels",
                      description:
                        "A space-separated list of labels to associate with this event subscription",
                      args: { name: "labels" },
                    },
                    {
                      name: "--max-delivery-attempts",
                      description:
                        "Maximum number of delivery attempts. Must be a number between 1 and 30",
                      args: { name: "max-delivery-attempts" },
                    },
                    {
                      name: "--max-events-per-batch",
                      description:
                        "Maximum number of events in a batch. Must be a number between 1 and 5000",
                      args: { name: "max-events-per-batch" },
                    },
                    {
                      name: "--preferred-batch-size-in-kilobytes",
                      description:
                        "Preferred batch size in kilobytes. Must be a number between 1 and 1024",
                      args: { name: "preferred-batch-size-in-kilobytes" },
                    },
                    {
                      name: ["--storage-queue-msg-ttl", "--qttl"],
                      description:
                        "Storage queue message time to live in seconds",
                      args: { name: "storage-queue-msg-ttl" },
                    },
                    {
                      name: "--subject-begins-with",
                      description:
                        "An optional string to filter events for an event subscription based on a prefix. Wildcard characters are not supported",
                      args: { name: "subject-begins-with" },
                    },
                    {
                      name: "--subject-case-sensitive",
                      description:
                        "Specify to indicate whether the subject fields should be compared in a case sensitive manner. True if flag present",
                    },
                    {
                      name: "--subject-ends-with",
                      description:
                        "An optional string to filter events for an event subscription based on a suffix. Wildcard characters are not supported",
                      args: { name: "subject-ends-with" },
                    },
                  ],
                },
                {
                  name: "delete",
                  description:
                    "Delete an event subscription of a partner topic",
                  options: [
                    {
                      name: ["--name", "-n"],
                      description: "Name of the event subscription",
                      args: { name: "name" },
                      isRequired: true,
                    },
                    {
                      name: "--partner-topic-name",
                      description: "Name of the partner topic",
                      args: { name: "partner-topic-name" },
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
                    "List event subscriptions of a specific partner topic",
                  options: [
                    {
                      name: "--partner-topic-name",
                      description: "Name of the partner topic",
                      args: { name: "partner-topic-name" },
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
                      name: "--odata-query",
                      description:
                        "The OData query used for filtering the list results. Filtering is currently allowed on the Name property only. The supported operations include: CONTAINS, eq (for equal), ne (for not equal), AND, OR and NOT",
                      args: { name: "odata-query" },
                    },
                  ],
                },
                {
                  name: "show",
                  description:
                    "Get the details of an event subscription of a partner topic",
                  options: [
                    {
                      name: ["--name", "-n"],
                      description: "Name of the event subscription",
                      args: { name: "name" },
                      isRequired: true,
                    },
                    {
                      name: "--partner-topic-name",
                      description: "Name of the partner topic",
                      args: { name: "partner-topic-name" },
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
                      name: [
                        "--include-static-delivery-attribute-secret",
                        "--include-attrib-secret",
                      ],
                      description:
                        "Indicate whether any static delivery attribute secrets should be returned. True if flag present",
                    },
                    {
                      name: "--include-full-endpoint-url",
                      description:
                        "Specify to indicate whether the full endpoint URL should be returned. True if flag present",
                    },
                  ],
                },
                {
                  name: "update",
                  description:
                    "Update an event subscription of a partner topic",
                  options: [
                    {
                      name: ["--name", "-n"],
                      description: "Name of the event subscription",
                      args: { name: "name" },
                      isRequired: true,
                    },
                    {
                      name: "--partner-topic-name",
                      description: "Name of the partner topic",
                      args: { name: "partner-topic-name" },
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
                      name: "--advanced-filter",
                      description:
                        "An advanced filter enables filtering of events based on a specific event property",
                      args: { name: "advanced-filter" },
                    },
                    {
                      name: "--deadletter-endpoint",
                      description:
                        "The Azure resource ID of an Azure Storage blob container destination where EventGrid should deadletter undeliverable events for this event subscription",
                      args: { name: "deadletter-endpoint" },
                    },
                    {
                      name: "--delivery-attribute-mapping",
                      description:
                        "Add delivery attribute mapping to send additional information via HTTP headers when delivering events. This attribute is valid for all destination types except StorageQueue. Multiple attributes can be specified by using more than one --delivery-attribute-mapping argument",
                      args: { name: "delivery-attribute-mapping" },
                    },
                    {
                      name: [
                        "--enable-advanced-filtering-on-arrays",
                        "--enable-af-arr",
                      ],
                      description:
                        "Allows advanced filters to be evaluated against an array of values instead of expecting a singular value",
                      args: {
                        name: "enable-advanced-filtering-on-arrays",
                        suggestions: ["false", "true"],
                      },
                    },
                    {
                      name: "--endpoint",
                      description:
                        "Endpoint where EventGrid should deliver events matching this event subscription. For webhook endpoint type, this should be the corresponding webhook URL. For other endpoint types, this should be the Azure resource identifier of the endpoint. It is expected that the destination endpoint to be already created and available for use before executing any Event Grid command",
                      args: { name: "endpoint" },
                    },
                    {
                      name: "--endpoint-type",
                      description: "The type of the destination endpoint",
                      args: {
                        name: "endpoint-type",
                        suggestions: [
                          "azurefunction",
                          "eventhub",
                          "hybridconnection",
                          "servicebusqueue",
                          "servicebustopic",
                          "storagequeue",
                          "webhook",
                        ],
                      },
                    },
                    {
                      name: "--included-event-types",
                      description:
                        "A space-separated list of event types (e.g., Microsoft.Storage.BlobCreated and Microsoft.Storage.BlobDeleted). In order to subscribe to all default event types, do not specify any value for this argument. For event grid topics, event types are customer defined. For Azure events, e.g., Storage Accounts, IoT Hub, etc., you can query their event types using this CLI command 'az eventgrid topic-type list-event-types'",
                      args: { name: "included-event-types" },
                    },
                    {
                      name: "--labels",
                      description:
                        "A space-separated list of labels to associate with this event subscription",
                      args: { name: "labels" },
                    },
                    {
                      name: ["--storage-queue-msg-ttl", "--qttl"],
                      description:
                        "Storage queue message time to live in seconds",
                      args: { name: "storage-queue-msg-ttl" },
                    },
                    {
                      name: "--subject-begins-with",
                      description:
                        "An optional string to filter events for an event subscription based on a prefix. Wildcard characters are not supported",
                      args: { name: "subject-begins-with" },
                    },
                    {
                      name: "--subject-ends-with",
                      description:
                        "An optional string to filter events for an event subscription based on a suffix. Wildcard characters are not supported",
                      args: { name: "subject-ends-with" },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "verified-partner",
          description: "Manage verified partners",
          subcommands: [
            {
              name: "list",
              description: "List available verified partners",
              options: [
                {
                  name: "--odata-query",
                  description:
                    "The OData query used for filtering the list results. Filtering is currently allowed on the Name property only. The supported operations include: CONTAINS, eq (for equal), ne (for not equal), AND, OR and NOT",
                  args: { name: "odata-query" },
                },
              ],
            },
            {
              name: "show",
              description: "Get the details of a verified partner",
              options: [
                {
                  name: "--verified-partner-name",
                  description: "Name of the verified partner",
                  args: { name: "verified-partner-name" },
                  isRequired: true,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "system-topic",
      description: "Manage system topics",
      subcommands: [
        {
          name: "create",
          description: "Create a system topic",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the system topic",
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
              name: "--source",
              description:
                "The ARM Id for the topic, e.g., /subscriptions/{SubId}/resourceGroups/{RgName}/providers/Microsoft.Storage/storageAccounts/{AccountName}",
              args: { name: "source" },
              isRequired: true,
            },
            {
              name: "--topic-type",
              description: "Name of the topic type",
              args: { name: "topic-type" },
              isRequired: true,
            },
            {
              name: "--identity",
              description:
                "Argument 'identity' has been deprecated and will be removed in a future release. The managed identity type for the resource. Will be deprecated and replaced by --mi-system-assigned-identity in future",
              args: {
                name: "identity",
                suggestions: ["noidentity", "systemassigned"],
              },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--mi-system-assigned",
              description:
                "Presence of this param indicates that SystemAssigned managed identity will be used",
              args: { name: "mi-system-assigned" },
            },
            {
              name: "--mi-user-assigned",
              description:
                "Add user assigned identities when identityType is user or mixed. This attribute is valid for all destination types except StorageQueue. Multiple attributes can be specified by using more than one --mi-user-assigned argument",
              args: { name: "mi-user-assigned" },
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
          description: "Delete a system topic",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the system topic",
              args: { name: "name" },
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
          description: "List available system topics",
          options: [
            {
              name: "--odata-query",
              description:
                "The OData query used for filtering the list results. Filtering is currently allowed on the Name property only. The supported operations include: CONTAINS, eq (for equal), ne (for not equal), AND, OR and NOT",
              args: { name: "odata-query" },
            },
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
          description: "Get the details of a system topic",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the system topic",
              args: { name: "name" },
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
          description: "Update a system topic",
          options: [
            {
              name: "--identity",
              description:
                "Argument 'identity' has been deprecated and will be removed in a future release. The managed identity type for the resource. Will be deprecated and replaced by --mi-system-assigned-identity in future",
              args: {
                name: "identity",
                suggestions: ["noidentity", "systemassigned"],
              },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--mi-system-assigned",
              description:
                "Presence of this param indicates that SystemAssigned managed identity will be used",
              args: { name: "mi-system-assigned" },
            },
            {
              name: "--mi-user-assigned",
              description:
                "Add user assigned identities when identityType is user or mixed. This attribute is valid for all destination types except StorageQueue. Multiple attributes can be specified by using more than one --mi-user-assigned argument",
              args: { name: "mi-user-assigned" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the system topic",
              args: { name: "name" },
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
          name: "event-subscription",
          description: "Manage event subscriptions of system topic",
          subcommands: [
            {
              name: "create",
              description: "Create a new event subscription for a system topic",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the event subscription",
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
                  name: "--system-topic-name",
                  description: "Name of the system topic",
                  args: { name: "system-topic-name" },
                  isRequired: true,
                },
                {
                  name: [
                    "--azure-active-directory-tenant-id",
                    "--aad-tenant-id",
                  ],
                  description:
                    "The Azure Active Directory Tenant Id to get the access token that will be included as the bearer token in delivery requests. Applicable only for webhook as a destination",
                  args: { name: "azure-active-directory-tenant-id" },
                },
                {
                  name: "--advanced-filter",
                  description:
                    "An advanced filter enables filtering of events based on a specific event property",
                  args: { name: "advanced-filter" },
                },
                {
                  name: "--azure-active-directory-application-id-or-uri",
                  description:
                    "The Azure Active Directory Application Id or Uri to get the access token that will be included as the bearer token in delivery requests. Applicable only for webhook as a destination",
                  args: {
                    name: "azure-active-directory-application-id-or-uri",
                  },
                },
                {
                  name: "--deadletter-endpoint",
                  description:
                    "The Azure resource ID of an Azure Storage blob container destination where EventGrid should deadletter undeliverable events for this event subscription",
                  args: { name: "deadletter-endpoint" },
                },
                {
                  name: "--delivery-attribute-mapping",
                  description:
                    "Add delivery attribute mapping to send additional information via HTTP headers when delivering events. This attribute is valid for all destination types except StorageQueue. Multiple attributes can be specified by using more than one --delivery-attribute-mapping argument",
                  args: { name: "delivery-attribute-mapping" },
                },
                {
                  name: [
                    "--enable-advanced-filtering-on-arrays",
                    "--enable-af-arr",
                  ],
                  description:
                    "Allows advanced filters to be evaluated against an array of values instead of expecting a singular value",
                  args: {
                    name: "enable-advanced-filtering-on-arrays",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--endpoint",
                  description:
                    "Endpoint where EventGrid should deliver events matching this event subscription. For webhook endpoint type, this should be the corresponding webhook URL. For other endpoint types, this should be the Azure resource identifier of the endpoint. It is expected that the destination endpoint to be already created and available for use before executing any Event Grid command",
                  args: { name: "endpoint" },
                },
                {
                  name: "--endpoint-type",
                  description: "The type of the destination endpoint",
                  args: {
                    name: "endpoint-type",
                    suggestions: [
                      "azurefunction",
                      "eventhub",
                      "hybridconnection",
                      "servicebusqueue",
                      "servicebustopic",
                      "storagequeue",
                      "webhook",
                    ],
                  },
                },
                {
                  name: "--event-delivery-schema",
                  description:
                    "The schema in which events should be delivered for this event subscription. By default, events will be delivered in the same schema in which they are published (based on the corresponding topic's input schema)",
                  args: {
                    name: "event-delivery-schema",
                    suggestions: [
                      "cloudeventschemav1_0",
                      "custominputschema",
                      "eventgridschema",
                    ],
                  },
                },
                {
                  name: "--event-ttl",
                  description:
                    "Event time to live (in minutes). Must be a number between 1 and 1440",
                  args: { name: "event-ttl" },
                },
                {
                  name: "--expiration-date",
                  description:
                    "Date or datetime (in UTC, e.g. '2018-11-30T11:59:59+00:00' or '2018-11-30') after which the event subscription would expire. By default, there is no expiration for the event subscription",
                  args: { name: "expiration-date" },
                },
                {
                  name: "--included-event-types",
                  description:
                    "A space-separated list of event types (e.g., Microsoft.Storage.BlobCreated and Microsoft.Storage.BlobDeleted). In order to subscribe to all default event types, do not specify any value for this argument. For event grid topics, event types are customer defined. For Azure events, e.g., Storage Accounts, IoT Hub, etc., you can query their event types using this CLI command 'az eventgrid topic-type list-event-types'",
                  args: { name: "included-event-types" },
                },
                {
                  name: "--labels",
                  description:
                    "A space-separated list of labels to associate with this event subscription",
                  args: { name: "labels" },
                },
                {
                  name: "--max-delivery-attempts",
                  description:
                    "Maximum number of delivery attempts. Must be a number between 1 and 30",
                  args: { name: "max-delivery-attempts" },
                },
                {
                  name: "--max-events-per-batch",
                  description:
                    "Maximum number of events in a batch. Must be a number between 1 and 5000",
                  args: { name: "max-events-per-batch" },
                },
                {
                  name: "--preferred-batch-size-in-kilobytes",
                  description:
                    "Preferred batch size in kilobytes. Must be a number between 1 and 1024",
                  args: { name: "preferred-batch-size-in-kilobytes" },
                },
                {
                  name: ["--storage-queue-msg-ttl", "--qttl"],
                  description: "Storage queue message time to live in seconds",
                  args: { name: "storage-queue-msg-ttl" },
                },
                {
                  name: "--subject-begins-with",
                  description:
                    "An optional string to filter events for an event subscription based on a prefix. Wildcard characters are not supported",
                  args: { name: "subject-begins-with" },
                },
                {
                  name: "--subject-case-sensitive",
                  description:
                    "Specify to indicate whether the subject fields should be compared in a case sensitive manner. True if flag present",
                },
                {
                  name: "--subject-ends-with",
                  description:
                    "An optional string to filter events for an event subscription based on a suffix. Wildcard characters are not supported",
                  args: { name: "subject-ends-with" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete an event subscription of a system topic",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the event subscription",
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
                  name: "--system-topic-name",
                  description: "Name of the system topic",
                  args: { name: "system-topic-name" },
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
                "List event subscriptions of a specific system topic",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--system-topic-name",
                  description: "Name of the system topic",
                  args: { name: "system-topic-name" },
                  isRequired: true,
                },
                {
                  name: "--odata-query",
                  description:
                    "The OData query used for filtering the list results. Filtering is currently allowed on the Name property only. The supported operations include: CONTAINS, eq (for equal), ne (for not equal), AND, OR and NOT",
                  args: { name: "odata-query" },
                },
              ],
            },
            {
              name: "show",
              description:
                "Get the details of an event subscription of a system topic",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the event subscription",
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
                  name: "--system-topic-name",
                  description: "Name of the system topic",
                  args: { name: "system-topic-name" },
                  isRequired: true,
                },
                {
                  name: [
                    "--include-static-delivery-attribute-secret",
                    "--include-attrib-secret",
                  ],
                  description:
                    "Indicate whether any static delivery attribute secrets should be returned. True if flag present",
                },
                {
                  name: "--include-full-endpoint-url",
                  description:
                    "Specify to indicate whether the full endpoint URL should be returned. True if flag present",
                },
              ],
            },
            {
              name: "update",
              description: "Update an event subscription of a system topic",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the event subscription",
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
                  name: "--system-topic-name",
                  description: "Name of the system topic",
                  args: { name: "system-topic-name" },
                  isRequired: true,
                },
                {
                  name: "--advanced-filter",
                  description:
                    "An advanced filter enables filtering of events based on a specific event property",
                  args: { name: "advanced-filter" },
                },
                {
                  name: "--deadletter-endpoint",
                  description:
                    "The Azure resource ID of an Azure Storage blob container destination where EventGrid should deadletter undeliverable events for this event subscription",
                  args: { name: "deadletter-endpoint" },
                },
                {
                  name: "--delivery-attribute-mapping",
                  description:
                    "Add delivery attribute mapping to send additional information via HTTP headers when delivering events. This attribute is valid for all destination types except StorageQueue. Multiple attributes can be specified by using more than one --delivery-attribute-mapping argument",
                  args: { name: "delivery-attribute-mapping" },
                },
                {
                  name: [
                    "--enable-advanced-filtering-on-arrays",
                    "--enable-af-arr",
                  ],
                  description:
                    "Allows advanced filters to be evaluated against an array of values instead of expecting a singular value",
                  args: {
                    name: "enable-advanced-filtering-on-arrays",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--endpoint",
                  description:
                    "Endpoint where EventGrid should deliver events matching this event subscription. For webhook endpoint type, this should be the corresponding webhook URL. For other endpoint types, this should be the Azure resource identifier of the endpoint. It is expected that the destination endpoint to be already created and available for use before executing any Event Grid command",
                  args: { name: "endpoint" },
                },
                {
                  name: "--endpoint-type",
                  description: "The type of the destination endpoint",
                  args: {
                    name: "endpoint-type",
                    suggestions: [
                      "azurefunction",
                      "eventhub",
                      "hybridconnection",
                      "servicebusqueue",
                      "servicebustopic",
                      "storagequeue",
                      "webhook",
                    ],
                  },
                },
                {
                  name: "--included-event-types",
                  description:
                    "A space-separated list of event types (e.g., Microsoft.Storage.BlobCreated and Microsoft.Storage.BlobDeleted). In order to subscribe to all default event types, do not specify any value for this argument. For event grid topics, event types are customer defined. For Azure events, e.g., Storage Accounts, IoT Hub, etc., you can query their event types using this CLI command 'az eventgrid topic-type list-event-types'",
                  args: { name: "included-event-types" },
                },
                {
                  name: "--labels",
                  description:
                    "A space-separated list of labels to associate with this event subscription",
                  args: { name: "labels" },
                },
                {
                  name: ["--storage-queue-msg-ttl", "--qttl"],
                  description: "Storage queue message time to live in seconds",
                  args: { name: "storage-queue-msg-ttl" },
                },
                {
                  name: "--subject-begins-with",
                  description:
                    "An optional string to filter events for an event subscription based on a prefix. Wildcard characters are not supported",
                  args: { name: "subject-begins-with" },
                },
                {
                  name: "--subject-ends-with",
                  description:
                    "An optional string to filter events for an event subscription based on a suffix. Wildcard characters are not supported",
                  args: { name: "subject-ends-with" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "topic",
      description: "Manage Azure Event Grid topics",
      subcommands: [
        {
          name: "create",
          description: "Create a topic",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the topic",
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
              name: "--extended-location-name",
              description: "The extended location name if kind==azurearc",
              args: { name: "extended-location-name" },
            },
            {
              name: "--extended-location-type",
              description: "The extended location type if kind==azurearc",
              args: {
                name: "extended-location-type",
                suggestions: ["customlocation"],
              },
            },
            {
              name: "--identity",
              description:
                "Argument 'identity' has been deprecated and will be removed in a future release. The managed identity type for the resource. Will be deprecated and replaced by --mi-system-assigned-identity in future",
              args: {
                name: "identity",
                suggestions: ["noidentity", "systemassigned"],
              },
            },
            {
              name: "--inbound-ip-rules",
              description: "List of inbound IP rules",
              args: { name: "inbound-ip-rules" },
            },
            {
              name: "--input-mapping-default-values",
              description:
                "When input-schema is specified as customeventschema, this parameter can be used to specify input mappings based on default values. You can use this parameter when your custom schema does not include a field that corresponds to one of the three fields supported by this parameter. Specify space separated mappings in 'key=value' format. Allowed key names are 'subject', 'eventtype', 'dataversion'. The corresponding value names should specify the default values to be used for the mapping and they will be used only when the published event doesn't have a valid mapping for a particular field",
              args: { name: "input-mapping-default-values" },
            },
            {
              name: "--input-mapping-fields",
              description:
                "When input-schema is specified as customeventschema, this parameter is used to specify input mappings based on field names. Specify space separated mappings in 'key=value' format. Allowed key names are 'id', 'topic', 'eventtime', 'subject', 'eventtype', 'dataversion'. The corresponding value names should specify the names of the fields in the custom input schema. If a mapping for either 'id' or 'eventtime' is not provided, Event Grid will auto-generate a default value for these two fields",
              args: { name: "input-mapping-fields" },
            },
            {
              name: "--input-schema",
              description:
                "Schema in which incoming events will be published to this topic/domain. If you specify customeventschema as the value for this parameter, you must also provide values for at least one of --input_mapping_default_values / --input_mapping_fields",
              args: {
                name: "input-schema",
                suggestions: [
                  "cloudeventschemav1_0",
                  "customeventschema",
                  "eventgridschema",
                ],
              },
            },
            {
              name: "--kind",
              description: "The kind of topic resource",
              args: { name: "kind", suggestions: ["azure", "azurearc"] },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--mi-system-assigned",
              description:
                "Presence of this param indicates that SystemAssigned managed identity will be used",
              args: { name: "mi-system-assigned" },
            },
            {
              name: "--mi-user-assigned",
              description:
                "Add user assigned identities when identityType is user or mixed. This attribute is valid for all destination types except StorageQueue. Multiple attributes can be specified by using more than one --mi-user-assigned argument",
              args: { name: "mi-user-assigned" },
            },
            {
              name: "--public-network-access",
              description:
                "This determines if traffic is allowed over public network. By default it is enabled. You can further restrict to specific IPs by configuring",
              args: {
                name: "public-network-access",
                suggestions: ["disabled", "enabled"],
              },
            },
            {
              name: "--sku",
              description: "The Sku name of the resource",
              args: { name: "sku", suggestions: ["basic", "premium"] },
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
          description: "Delete a topic",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the topic",
              args: { name: "name" },
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
          description: "List available topics",
          options: [
            {
              name: "--odata-query",
              description:
                "The OData query used for filtering the list results. Filtering is currently allowed on the Name property only. The supported operations include: CONTAINS, eq (for equal), ne (for not equal), AND, OR and NOT",
              args: { name: "odata-query" },
            },
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
          description: "Get the details of a topic",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the topic",
              args: { name: "name" },
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
          description: "Update a topic",
          options: [
            {
              name: "--identity",
              description:
                "Argument 'identity' has been deprecated and will be removed in a future release. The managed identity type for the resource. Will be deprecated and replaced by --mi-system-assigned-identity in future",
              args: {
                name: "identity",
                suggestions: ["noidentity", "systemassigned"],
              },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--inbound-ip-rules",
              description:
                "List of inbound IP rules specifying IP Address in CIDR notation e.g., 10.0.0.0/8 along with corresponding Action to perform based on the match or no match of the IpMask. Possible values include - Allow",
              args: { name: "inbound-ip-rules" },
            },
            {
              name: "--mi-system-assigned",
              description:
                "Presence of this param indicates that SystemAssigned managed identity will be used",
              args: { name: "mi-system-assigned" },
            },
            {
              name: "--mi-user-assigned",
              description:
                "Add user assigned identities when identityType is user or mixed. This attribute is valid for all destination types except StorageQueue. Multiple attributes can be specified by using more than one --mi-user-assigned argument",
              args: { name: "mi-user-assigned" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the topic",
              args: { name: "name" },
            },
            {
              name: "--public-network-access",
              description:
                "This determines if traffic is allowed over public network. By default it is enabled. You can further restrict to specific IPs by configuring",
              args: {
                name: "public-network-access",
                suggestions: ["disabled", "enabled"],
              },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--sku",
              description: "The Sku name of the resource",
              args: { name: "sku", suggestions: ["basic", "premium"] },
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
          name: "event-subscription",
          description: "Manage event subscriptions of topic",
          subcommands: [
            {
              name: "create",
              description: "Create a new event subscription for a topic",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the event subscription",
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
                  name: "--topic-name",
                  description: "Name of the topic",
                  args: { name: "topic-name" },
                  isRequired: true,
                },
                {
                  name: [
                    "--azure-active-directory-application-id-or-uri",
                    "--aad-app-id",
                  ],
                  description:
                    "The Azure Active Directory Application Id or Uri to get the access token that will be included as the bearer token in delivery requests. Applicable only for webhook as a destination",
                  args: {
                    name: "azure-active-directory-application-id-or-uri",
                  },
                },
                {
                  name: [
                    "--azure-active-directory-tenant-id",
                    "--aad-tenant-id",
                  ],
                  description:
                    "The Azure Active Directory Tenant Id to get the access token that will be included as the bearer token in delivery requests. Applicable only for webhook as a destination",
                  args: { name: "azure-active-directory-tenant-id" },
                },
                {
                  name: "--advanced-filter",
                  description:
                    "An advanced filter enables filtering of events based on a specific event property",
                  args: { name: "advanced-filter" },
                },
                {
                  name: "--deadletter-endpoint",
                  description:
                    "The Azure resource ID of an Azure Storage blob container destination where EventGrid should deadletter undeliverable events for this event subscription",
                  args: { name: "deadletter-endpoint" },
                },
                {
                  name: ["--delivery-attribute-mapping", "-d"],
                  description:
                    "Add delivery attribute mapping to send additional information via HTTP headers when delivering events. This attribute is valid for all destination types except StorageQueue. Multiple attributes can be specified by using more than one --delivery-attribute-mapping argument",
                  args: { name: "delivery-attribute-mapping" },
                },
                {
                  name: [
                    "--enable-advanced-filtering-on-arrays",
                    "--enable-af-arr",
                  ],
                  description:
                    "Allows advanced filters to be evaluated against an array of values instead of expecting a singular value",
                  args: {
                    name: "enable-advanced-filtering-on-arrays",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--endpoint",
                  description:
                    "Endpoint where EventGrid should deliver events matching this event subscription. For webhook endpoint type, this should be the corresponding webhook URL. For other endpoint types, this should be the Azure resource identifier of the endpoint. It is expected that the destination endpoint to be already created and available for use before executing any Event Grid command",
                  args: { name: "endpoint" },
                },
                {
                  name: "--endpoint-type",
                  description: "The type of the destination endpoint",
                  args: {
                    name: "endpoint-type",
                    suggestions: [
                      "azurefunction",
                      "eventhub",
                      "hybridconnection",
                      "servicebusqueue",
                      "servicebustopic",
                      "storagequeue",
                      "webhook",
                    ],
                  },
                },
                {
                  name: "--event-delivery-schema",
                  description:
                    "The schema in which events should be delivered for this event subscription. By default, events will be delivered in the same schema in which they are published (based on the corresponding topic's input schema)",
                  args: {
                    name: "event-delivery-schema",
                    suggestions: [
                      "cloudeventschemav1_0",
                      "custominputschema",
                      "eventgridschema",
                    ],
                  },
                },
                {
                  name: "--event-ttl",
                  description:
                    "Event time to live (in minutes). Must be a number between 1 and 1440",
                  args: { name: "event-ttl" },
                },
                {
                  name: "--expiration-date",
                  description:
                    "Date or datetime (in UTC, e.g. '2018-11-30T11:59:59+00:00' or '2018-11-30') after which the event subscription would expire. By default, there is no expiration for the event subscription",
                  args: { name: "expiration-date" },
                },
                {
                  name: "--included-event-types",
                  description:
                    "A space-separated list of event types (e.g., Microsoft.Storage.BlobCreated and Microsoft.Storage.BlobDeleted). In order to subscribe to all default event types, do not specify any value for this argument. For event grid topics, event types are customer defined. For Azure events, e.g., Storage Accounts, IoT Hub, etc., you can query their event types using this CLI command 'az eventgrid topic-type list-event-types'",
                  args: { name: "included-event-types" },
                },
                {
                  name: "--labels",
                  description:
                    "A space-separated list of labels to associate with this event subscription",
                  args: { name: "labels" },
                },
                {
                  name: "--max-delivery-attempts",
                  description:
                    "Maximum number of delivery attempts. Must be a number between 1 and 30",
                  args: { name: "max-delivery-attempts" },
                },
                {
                  name: "--max-events-per-batch",
                  description:
                    "Maximum number of events in a batch. Must be a number between 1 and 5000",
                  args: { name: "max-events-per-batch" },
                },
                {
                  name: [
                    "--preferred-batch-size-in-kilobytes",
                    "--pref-batch-size-kb",
                  ],
                  description:
                    "Preferred batch size in kilobytes. Must be a number between 1 and 1024",
                  args: { name: "preferred-batch-size-in-kilobytes" },
                },
                {
                  name: ["--storage-queue-msg-ttl", "--qttl"],
                  description: "Storage queue message time to live in seconds",
                  args: { name: "storage-queue-msg-ttl" },
                },
                {
                  name: "--subject-begins-with",
                  description:
                    "An optional string to filter events for an event subscription based on a prefix. Wildcard characters are not supported",
                  args: { name: "subject-begins-with" },
                },
                {
                  name: "--subject-case-sensitive",
                  description:
                    "Specify to indicate whether the subject fields should be compared in a case sensitive manner. True if flag present",
                },
                {
                  name: "--subject-ends-with",
                  description:
                    "An optional string to filter events for an event subscription based on a suffix. Wildcard characters are not supported",
                  args: { name: "subject-ends-with" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete an event subscription of a topic",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the event subscription",
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
                  name: "--topic-name",
                  description: "Name of the topic",
                  args: { name: "topic-name" },
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
              description: "List event subscriptions of a specific topic",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--topic-name",
                  description: "Name of the topic",
                  args: { name: "topic-name" },
                  isRequired: true,
                },
                {
                  name: "--odata-query",
                  description:
                    "The OData query used for filtering the list results. Filtering is currently allowed on the Name property only. The supported operations include: CONTAINS, eq (for equal), ne (for not equal), AND, OR and NOT",
                  args: { name: "odata-query" },
                },
              ],
            },
            {
              name: "show",
              description:
                "Get the details of an event subscription of a topic",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the event subscription",
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
                  name: "--topic-name",
                  description: "Name of the topic",
                  args: { name: "topic-name" },
                  isRequired: true,
                },
                {
                  name: ["--include-full-endpoint-url", "--full-ed-url"],
                  description:
                    "Specify to indicate whether the full endpoint URL should be returned. True if flag present",
                },
                {
                  name: [
                    "--include-static-delivery-attribute-secret",
                    "--include-attrib-secret",
                  ],
                  description:
                    "Indicate whether any static delivery attribute secrets should be returned. True if flag present",
                },
              ],
            },
            {
              name: "update",
              description: "Update an event subscription of a topic",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the event subscription",
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
                  name: "--topic-name",
                  description: "Name of the topic",
                  args: { name: "topic-name" },
                  isRequired: true,
                },
                {
                  name: "--advanced-filter",
                  description:
                    "An advanced filter enables filtering of events based on a specific event property",
                  args: { name: "advanced-filter" },
                },
                {
                  name: "--deadletter-endpoint",
                  description:
                    "The Azure resource ID of an Azure Storage blob container destination where EventGrid should deadletter undeliverable events for this event subscription",
                  args: { name: "deadletter-endpoint" },
                },
                {
                  name: ["--delivery-attribute-mapping", "-d"],
                  description:
                    "Add delivery attribute mapping to send additional information via HTTP headers when delivering events. This attribute is valid for all destination types except StorageQueue. Multiple attributes can be specified by using more than one --delivery-attribute-mapping argument",
                  args: { name: "delivery-attribute-mapping" },
                },
                {
                  name: [
                    "--enable-advanced-filtering-on-arrays",
                    "--enable-af-arr",
                  ],
                  description:
                    "Allows advanced filters to be evaluated against an array of values instead of expecting a singular value",
                  args: {
                    name: "enable-advanced-filtering-on-arrays",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--endpoint",
                  description:
                    "Endpoint where EventGrid should deliver events matching this event subscription. For webhook endpoint type, this should be the corresponding webhook URL. For other endpoint types, this should be the Azure resource identifier of the endpoint. It is expected that the destination endpoint to be already created and available for use before executing any Event Grid command",
                  args: { name: "endpoint" },
                },
                {
                  name: "--included-event-types",
                  description:
                    "A space-separated list of event types (e.g., Microsoft.Storage.BlobCreated and Microsoft.Storage.BlobDeleted). In order to subscribe to all default event types, do not specify any value for this argument. For event grid topics, event types are customer defined. For Azure events, e.g., Storage Accounts, IoT Hub, etc., you can query their event types using this CLI command 'az eventgrid topic-type list-event-types'",
                  args: { name: "included-event-types" },
                },
                {
                  name: "--labels",
                  description:
                    "A space-separated list of labels to associate with this event subscription",
                  args: { name: "labels" },
                },
                {
                  name: ["--storage-queue-msg-ttl", "--qttl"],
                  description: "Storage queue message time to live in seconds",
                  args: { name: "storage-queue-msg-ttl" },
                },
                {
                  name: "--subject-begins-with",
                  description:
                    "An optional string to filter events for an event subscription based on a prefix. Wildcard characters are not supported",
                  args: { name: "subject-begins-with" },
                },
                {
                  name: "--subject-ends-with",
                  description:
                    "An optional string to filter events for an event subscription based on a suffix. Wildcard characters are not supported",
                  args: { name: "subject-ends-with" },
                },
                {
                  name: "--update-endpoint-type",
                  description: "The type of the destination endpoint",
                  args: {
                    name: "update-endpoint-type",
                    suggestions: [
                      "azurefunction",
                      "eventhub",
                      "hybridconnection",
                      "servicebusqueue",
                      "servicebustopic",
                      "storagequeue",
                      "webhook",
                    ],
                  },
                },
              ],
            },
          ],
        },
        {
          name: "key",
          description: "Manage shared access keys of a topic",
          subcommands: [
            {
              name: "list",
              description: "List shared access keys of a topic",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the topic",
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
              name: "regenerate",
              description: "Regenerate a shared access key of a topic",
              options: [
                {
                  name: "--key-name",
                  description: "Key name to regenerate key1 or key2",
                  args: { name: "key-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the topic",
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
          ],
        },
        {
          name: "private-endpoint-connection",
          description: "Manage private endpoint connections of a topic",
          subcommands: [
            {
              name: "approve",
              description:
                "Approve a private endpoint connection request for a topic",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the private endpoint connection",
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
                  name: "--topic-name",
                  description: "Name of the topic",
                  args: { name: "topic-name" },
                  isRequired: true,
                },
                {
                  name: "--description",
                  description: "Comments for the approval",
                  args: { name: "description" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a private endpoint connection for a topic",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the private endpoint connection",
                  args: { name: "name" },
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
                  name: "--topic-name",
                  description: "Name of the topic",
                  args: { name: "topic-name" },
                },
              ],
            },
            {
              name: "list",
              description:
                "List the properties of all the private endpoint connections for a topic",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--topic-name",
                  description: "Name of the topic",
                  args: { name: "topic-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "reject",
              description:
                "Reject a private endpoint connection request for a topic",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the private endpoint connection",
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
                  name: "--topic-name",
                  description: "Name of the topic",
                  args: { name: "topic-name" },
                  isRequired: true,
                },
                {
                  name: "--description",
                  description: "Comments for the rejection",
                  args: { name: "description" },
                },
              ],
            },
            {
              name: "show",
              description:
                "Display the properties of a private endpoint connection for a topic",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the private endpoint connection",
                  args: { name: "name" },
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
                  name: "--topic-name",
                  description: "Name of the topic",
                  args: { name: "topic-name" },
                },
              ],
            },
          ],
        },
        {
          name: "private-link-resource",
          description: "Manage private link resource of a topic",
          subcommands: [
            {
              name: "list",
              description:
                "List the properties of all the private link resources for a topic",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--topic-name",
                  description: "Name of the topic",
                  args: { name: "topic-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description:
                "Display the properties of a private link resource for a topic",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the private link resource",
                  args: { name: "name" },
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
                  name: "--topic-name",
                  description: "Name of the topic",
                  args: { name: "topic-name" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "topic-type",
      description: "Get details for topic types",
      subcommands: [
        {
          name: "list",
          description: "List registered topic types",
        },
        {
          name: "list-event-types",
          description: "List the event types supported by a topic type",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the topic type",
              args: { name: "name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description: "Get the details for a topic type",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the topic type",
              args: { name: "name" },
              isRequired: true,
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
