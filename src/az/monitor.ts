const completionSpec: Fig.Spec = {
  name: "monitor",
  description: "Manage the Azure Monitor Service",
  subcommands: [
    {
      name: "action-group",
      description: "Manage action groups",
      subcommands: [
        { name: "create", description: "Create a new action group" },
        { name: "delete", description: "Delete an action group" },
        {
          name: "enable-receiver",
          description: "Enable a receiver in an action group",
        },
        {
          name: "list",
          description:
            "List action groups under a resource group or the current subscription",
        },
        { name: "show", description: "Show the details of an action group" },
        { name: "update", description: "Update an action group" },
      ],
    },
    {
      name: "action-rule",
      description: "Commands to manage action rule",
      subcommands: [
        { name: "create", description: "Create an action rule" },
        { name: "delete", description: "Delete an action rule" },
        {
          name: "list",
          description:
            "List all action rules of the subscription, created in given resource group and given input filters",
        },
        { name: "show", description: "Get an action rule" },
        { name: "update", description: "Update an action rule" },
      ],
    },
    {
      name: "activity-log",
      description: "Manage activity logs",
      subcommands: [
        {
          name: "alert",
          description: "Manage activity log alerts",
          subcommands: [
            {
              name: "action-group",
              description: "Manage action groups for activity log alerts",
              subcommands: [
                {
                  name: "add",
                  description:
                    "Add action groups to this activity log alert. It can also be used to overwrite existing webhook properties of particular action groups",
                },
                {
                  name: "remove",
                  description:
                    "Remove action groups from this activity log alert",
                },
              ],
            },
            {
              name: "create",
              description: "Create a default activity log alert",
            },
            { name: "delete", description: "Delete an activity log alert" },
            {
              name: "list",
              description:
                "List activity log alerts under a resource group or the current subscription",
            },
            {
              name: "scope",
              description: "Manage scopes for activity log alerts",
              subcommands: [
                {
                  name: "add",
                  description: "Add scopes to this activity log alert",
                },
                {
                  name: "remove",
                  description: "Removes scopes from this activity log alert",
                },
              ],
            },
            { name: "show", description: "Get an activity log alert" },
            {
              name: "update",
              description: "Update the details of this activity log alert",
            },
          ],
        },
        { name: "list", description: "List and query activity log events" },
        {
          name: "list-categories",
          description: "List the event categories of activity logs",
        },
      ],
    },
    {
      name: "alert",
      description: "Manage classic metric-based alert rules",
      subcommands: [
        {
          name: "create",
          description: "Create a classic metric-based alert rule",
        },
        { name: "delete", description: "Delete an alert rule" },
        { name: "list", description: "List alert rules in a resource group" },
        {
          name: "list-incidents",
          description: "List all incidents for an alert rule",
        },
        { name: "show", description: "Show an alert rule" },
        {
          name: "show-incident",
          description: "Get the details of an alert rule incident",
        },
        {
          name: "update",
          description: "Update a classic metric-based alert rule",
        },
      ],
    },
    {
      name: "app-insights",
      description:
        "Commands for querying data in Application Insights applications",
      subcommands: [
        {
          name: "api-key",
          description:
            "Operations on API keys associated with an Application Insights component",
          subcommands: [
            {
              name: "create",
              description:
                "Create a new API key for use with an Application Insights resource",
            },
            {
              name: "delete",
              description:
                "Delete an API key from an Application Insights resource",
            },
            {
              name: "show",
              description:
                "Get all keys or a specific API key associated with an Application Insights resource",
            },
          ],
        },
        {
          name: "component",
          description:
            "Manage an Application Insights component or its subcomponents",
          subcommands: [
            {
              name: "billing",
              description:
                "Manage an Application Insights component billing features",
              subcommands: [
                {
                  name: "show",
                  description:
                    "Show the billing features of an Application Insights resource",
                },
                {
                  name: "update",
                  description:
                    "Update the billing features of an Application Insights resource",
                },
              ],
            },
            {
              name: "connect-function",
              description: "Connect AI to an Azure function",
            },
            { name: "connect-webapp", description: "Connect AI to a web app" },
            {
              name: "continues-export",
              description:
                "Manage Continuous Export configurations for an Application Insights component",
              subcommands: [
                {
                  name: "create",
                  description:
                    "Create a Continuous Export configuration for an Application Insights component",
                },
                {
                  name: "delete",
                  description:
                    "Delete a specific Continuous Export configuration of an Application Insights component",
                },
                {
                  name: "list",
                  description:
                    "List Continuous Export configurations for an Application Insights component",
                },
                {
                  name: "show",
                  description:
                    "Get a specific Continuous Export configuration of an Application Insights component",
                },
                {
                  name: "update",
                  description:
                    "Update a Continuous Export configuration for an Application Insights component",
                },
              ],
            },
            {
              name: "create",
              description: "Create a new Application Insights resource",
            },
            {
              name: "delete",
              description: "Delete a new Application Insights resource",
            },
            {
              name: "linked-storage",
              description:
                "Manage linked storage account for an Application Insights component",
              subcommands: [
                {
                  name: "link",
                  description:
                    "Link a storage account with an Application Insights component",
                },
                {
                  name: "show",
                  description:
                    "Show the details of linked storage account for an Application Insights component",
                },
                {
                  name: "unlink",
                  description:
                    "Unlink a storage account with an Application Insights component",
                },
                {
                  name: "update",
                  description:
                    "Update the linked storage account for an Application Insights component",
                },
              ],
            },
            {
              name: "show",
              description: "Get an Application Insights resource",
            },
            {
              name: "update",
              description:
                "Update properties on an existing Application Insights resource. The primary value which can be updated is kind, which customizes the UI experience",
            },
            {
              name: "update-tags",
              description:
                "Update tags on an existing Application Insights resource",
            },
          ],
        },
        {
          name: "events",
          description: "Retrieve events from an application",
          subcommands: [
            {
              name: "show",
              description:
                "List events by type or view a single event from an application, specified by type and ID",
            },
          ],
        },
        {
          name: "metrics",
          description: "Retrieve metrics from an application",
          subcommands: [
            {
              name: "get-metadata",
              description:
                "Get the metadata for metrics on a particular application",
            },
            { name: "show", description: "View the value of a single metric" },
          ],
        },
        {
          name: "query",
          description: "Execute a query over data in your application",
        },
      ],
    },
    {
      name: "autoscale",
      description: "Manage autoscale settings",
      subcommands: [
        { name: "create", description: "Create new autoscale settings" },
        { name: "delete", description: "Deletes and autoscale setting" },
        {
          name: "list",
          description: "Lists the autoscale settings for a resource group",
        },
        {
          name: "profile",
          description: "Manage autoscaling profiles",
          subcommands: [
            {
              name: "create",
              description: "Create a fixed or recurring autoscale profile",
            },
            { name: "delete", description: "Delete an autoscale profile" },
            { name: "list", description: "List autoscale profiles" },
            {
              name: "list-timezones",
              description: "Look up time zone information",
            },
            {
              name: "show",
              description: "Show details of an autoscale profile",
            },
          ],
        },
        {
          name: "rule",
          description: "Manage autoscale scaling rules",
          subcommands: [
            {
              name: "copy",
              description: "Copy autoscale rules from one profile to another",
            },
            { name: "create", description: "Add a new autoscale rule" },
            {
              name: "delete",
              description: "Remove autoscale rules from a profile",
            },
            { name: "list", description: "List autoscale rules for a profile" },
          ],
        },
        { name: "show", description: "Show autoscale setting details" },
        { name: "update", description: "Update autoscale settings" },
      ],
    },
    {
      name: "autoscale-settings",
      description: "Manage autoscale settings",
      subcommands: [
        {
          name: "create",
          description: "Creates or updates an autoscale setting",
        },
        { name: "delete", description: "Deletes and autoscale setting" },
        {
          name: "get-parameters-template",
          description:
            "Scaffold fully formed autoscale-settings' parameters as json template",
        },
        {
          name: "list",
          description: "Lists the autoscale settings for a resource group",
        },
        { name: "show", description: "Gets an autoscale setting" },
        { name: "update", description: "Updates an autoscale setting" },
      ],
    },
    {
      name: "clone",
      description:
        "Clone metrics alert rules from one resource to another resource",
    },
    {
      name: "data-collection",
      description: "Manage data collection for monitor control service",
      subcommands: [
        {
          name: "endpoint",
          description:
            "Manage data collection endpoint for monitor control service",
          subcommands: [
            {
              name: "create",
              description: "Create a data collection endpoint",
            },
            {
              name: "delete",
              description: "Delete a data collection endpoint",
            },
            { name: "list", description: "List all data collection endpoints" },
            {
              name: "show",
              description: "Show the specified data collection endpoint",
            },
            {
              name: "update",
              description: "Update a data collection endpoint",
            },
          ],
        },
        {
          name: "rule",
          description:
            "Manage data collection rule for monitor control service",
          subcommands: [
            {
              name: "association",
              description:
                "Manage data collection rule association for monitor control service",
              subcommands: [
                { name: "create", description: "Create an association" },
                { name: "delete", description: "Delete an association" },
                {
                  name: "list",
                  description:
                    "List associations for the specified data collection rule. And Lists associations for the specified resource",
                },
                {
                  name: "show",
                  description: "Return the specified association",
                },
                { name: "update", description: "Update an association" },
              ],
            },
            { name: "create", description: "Create a data collection rule" },
            {
              name: "data-flow",
              description: "Manage data flows",
              subcommands: [
                { name: "add", description: "Add a data flow" },
                { name: "list", description: "List data flows" },
              ],
            },
            { name: "delete", description: "Deletes a data collection rule" },
            {
              name: "list",
              description:
                "List all data collection rules in the specified resource group. And Lists all data collection rules in the specified subscription",
            },
            {
              name: "log-analytics",
              description: "Manage Log Analytics destinations",
              subcommands: [
                {
                  name: "add",
                  description:
                    "Add Log Analytics destinations of a data collection rule",
                },
                {
                  name: "delete",
                  description:
                    "Delete a Log Analytics destinations of a data collection rule",
                },
                {
                  name: "list",
                  description:
                    "List Log Analytics destinations of a data collection rule",
                },
                {
                  name: "show",
                  description:
                    "Show a Log Analytics destination of a data collection rule",
                },
                {
                  name: "update",
                  description:
                    "Update a Log Analytics destination of a data collection rule",
                },
              ],
            },
            {
              name: "performance-counter",
              description: "Manage Log performance counter data source",
              subcommands: [
                {
                  name: "add",
                  description: "Add a Log performance counter data source",
                },
                {
                  name: "delete",
                  description: "Delete a Log performance counter data source",
                },
                {
                  name: "list",
                  description: "List Log performance counter data sources",
                },
                {
                  name: "show",
                  description: "Show a Log performance counter data source",
                },
                {
                  name: "update",
                  description: "Update a Log performance counter data source",
                },
              ],
            },
            {
              name: "show",
              description: "Return the specified data collection rule",
            },
            {
              name: "syslog",
              description: "Manage Syslog data source",
              subcommands: [
                { name: "add", description: "Add a Syslog data source" },
                { name: "delete", description: "Delete a Syslog data source" },
                { name: "list", description: "List Syslog data sources" },
                { name: "show", description: "Show a Syslog data source" },
                { name: "update", description: "Update a Syslog data source" },
              ],
            },
            { name: "update", description: "Update a data collection rule" },
            {
              name: "windows-event-log",
              description: "Manage Windows Event Log data source",
              subcommands: [
                {
                  name: "add",
                  description: "Add a Windows Event Log data source",
                },
                {
                  name: "delete",
                  description: "Delete a Windows Event Log data source",
                },
                {
                  name: "list",
                  description: "List Windows Event Log data sources",
                },
                {
                  name: "show",
                  description: "Show a Windows Event Log data source",
                },
                {
                  name: "update",
                  description: "Update a Windows Event Log data source",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "diagnostic-settings",
      description: "Manage service diagnostic settings",
      subcommands: [
        {
          name: "categories",
          description: "Retrieve service diagnostic settings categories",
          subcommands: [
            {
              name: "list",
              description:
                "List the diagnostic settings categories for the specified resource",
            },
            {
              name: "show",
              description:
                "Gets the diagnostic settings category for the specified resource",
            },
          ],
        },
        {
          name: "create",
          description: "Create diagnostic settings for the specified resource",
        },
        {
          name: "delete",
          description:
            "Deletes existing diagnostic settings for the specified resource",
        },
        {
          name: "list",
          description:
            "Gets the active diagnostic settings list for the specified resource",
        },
        {
          name: "show",
          description:
            "Gets the active diagnostic settings for the specified resource",
        },
        {
          name: "subscription",
          description: "Manage diagnostic settings for subscription",
          subcommands: [
            {
              name: "create",
              description: "Create diagnostic settings for a subscription",
            },
            {
              name: "delete",
              description:
                "Deletes existing subscription diagnostic settings for the specified resource",
            },
            {
              name: "list",
              description:
                "Gets the active subscription diagnostic settings list for the specified subscriptionId",
            },
            {
              name: "show",
              description:
                "Gets the active subscription diagnostic settings for the specified resource",
            },
            {
              name: "update",
              description: "Update diagnostic settings for a subscription",
            },
          ],
        },
        { name: "update", description: "Update diagnostic settings" },
      ],
    },
    {
      name: "log-analytics",
      description: "Manage Azure log analytics",
      subcommands: [
        {
          name: "cluster",
          description: "Manage Azure log analytics cluster",
          subcommands: [
            { name: "create", description: "Create a cluster instance" },
            { name: "delete", description: "Delete a cluster instance" },
            {
              name: "list",
              description:
                "Gets all cluster instances in a resource group or in current subscription",
            },
            {
              name: "show",
              description: "Show the properties of a cluster instance",
            },
            { name: "update", description: "Update a cluster instance" },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition of the cluster is met",
            },
          ],
        },
        { name: "query", description: "Query a Log Analytics workspace" },
        {
          name: "solution",
          description: "Commands to manage monitor log-analytics solution",
          subcommands: [
            { name: "create", description: "Create a log-analytics solution" },
            { name: "delete", description: "Delete a log-analytics solution" },
            {
              name: "list",
              description:
                "List all of the log-analytics solutions in the specified subscription or resource group",
            },
            {
              name: "show",
              description:
                "Get details about the specified log-analytics solution",
            },
            {
              name: "update",
              description: "Update an existing log-analytics solution",
            },
          ],
        },
        {
          name: "workspace",
          description: "Manage Azure log analytics workspace",
          subcommands: [
            { name: "create", description: "Create a workspace instance" },
            {
              name: "data-export",
              description:
                "Manage data export ruls for log analytics workspace",
              subcommands: [
                {
                  name: "create",
                  description:
                    "Create a data export rule for a given workspace",
                },
                {
                  name: "delete",
                  description:
                    "Delete a data export rule for a given workspace",
                },
                {
                  name: "list",
                  description:
                    "List all data export ruleses for a given workspace",
                },
                {
                  name: "show",
                  description: "Show a data export rule for a given workspace",
                },
                {
                  name: "update",
                  description:
                    "Update a data export rule for a given workspace",
                },
              ],
            },
            { name: "delete", description: "Delete a workspace instance" },
            {
              name: "get-schema",
              description: "Get the schema for a given workspace",
            },
            {
              name: "get-shared-keys",
              description: "Get the shared keys for a workspace",
            },
            {
              name: "linked-service",
              description: "Manage linked service for log analytics workspace",
              subcommands: [
                { name: "create", description: "Create a linked service" },
                { name: "delete", description: "Delete a linked service" },
                {
                  name: "list",
                  description: "Gets all the linked services in a workspace",
                },
                {
                  name: "show",
                  description: "Show the properties of a linked service",
                },
                { name: "update", description: "Update a linked service" },
                {
                  name: "wait",
                  description:
                    "Place the CLI in a waiting state until a condition of the linked service is met",
                },
              ],
            },
            {
              name: "linked-storage",
              description:
                "Manage linked storage account for log analytics workspace",
              subcommands: [
                {
                  name: "add",
                  description:
                    "Add some linked storage accounts with specific data source type for log analytics workspace",
                },
                {
                  name: "create",
                  description:
                    "Create some linked storage accounts for log analytics workspace",
                },
                {
                  name: "delete",
                  description:
                    "Delete all linked storage accounts with specific data source type for log analytics workspace",
                },
                {
                  name: "list",
                  description:
                    "List all linked storage accounts for a log analytics workspace",
                },
                {
                  name: "remove",
                  description:
                    "Remove some linked storage accounts with specific data source type for log analytics workspace",
                },
                {
                  name: "show",
                  description:
                    "List all linked storage accounts with specific data source type for a log analytics workspace",
                },
              ],
            },
            {
              name: "list",
              description:
                "Get a list of workspaces under a resource group or a subscription",
            },
            {
              name: "list-deleted-workspaces",
              description:
                "Get a list of deleted workspaces that can be recovered in a subscription or a resource group",
            },
            {
              name: "list-management-groups",
              description:
                "Get a list of management groups connected to a workspace",
            },
            {
              name: "list-usages",
              description: "Get a list of usage metrics for a workspace",
            },
            {
              name: "pack",
              description:
                "Manage intelligent packs for log analytics workspace",
              subcommands: [
                {
                  name: "disable",
                  description:
                    "Disable an intelligence pack for a given workspace",
                },
                {
                  name: "enable",
                  description:
                    "Enable an intelligence pack for a given workspace",
                },
                {
                  name: "list",
                  description:
                    "List all the intelligence packs possible and whether they are enabled or disabled for a given workspace",
                },
              ],
            },
            {
              name: "recover",
              description:
                "Recover a workspace in a soft-delete state within 14 days",
            },
            {
              name: "saved-search",
              description: "Manage saved search for log analytics workspace",
              subcommands: [
                {
                  name: "create",
                  description: "Create a saved search for a given workspace",
                },
                {
                  name: "delete",
                  description: "Delete a saved search for a given workspace",
                },
                {
                  name: "list",
                  description: "List all saved searches for a given workspace",
                },
                {
                  name: "show",
                  description: "Show a saved search for a given workspace",
                },
                {
                  name: "update",
                  description: "Update a saved search for a given workspace",
                },
              ],
            },
            { name: "show", description: "Show a workspace instance" },
            {
              name: "table",
              description: "Manage tables for log analytics workspace",
              subcommands: [
                {
                  name: "list",
                  description:
                    "List all the tables for the given Log Analytics workspace",
                },
                {
                  name: "show",
                  description: "Get a Log Analytics workspace table",
                },
                {
                  name: "update",
                  description:
                    "Update the properties of a Log Analytics workspace table, currently only support updating retention time",
                },
              ],
            },
            { name: "update", description: "Update a workspace instance" },
          ],
        },
      ],
    },
    {
      name: "log-profiles",
      description: "Manage log profiles",
      subcommands: [
        { name: "create", description: "Create a log profile" },
        { name: "delete", description: "Deletes the log profile" },
        { name: "list", description: "List the log profiles" },
        { name: "show", description: "Gets the log profile" },
        { name: "update", description: "Update a log profile" },
      ],
    },
    {
      name: "metrics",
      description: "View Azure resource metrics",
      subcommands: [
        {
          name: "alert",
          description: "Manage near-realtime metric alert rules",
          subcommands: [
            {
              name: "condition",
              description: "Manage near-realtime metric alert rule conditions",
              subcommands: [
                {
                  name: "create",
                  description: "Build a metric alert rule condition",
                },
              ],
            },
            { name: "create", description: "Create a metric-based alert rule" },
            {
              name: "delete",
              description: "Delete a metrics-based alert rule",
            },
            {
              name: "dimension",
              description: "Manage near-realtime metric alert rule dimensions",
              subcommands: [
                {
                  name: "create",
                  description: "Build a metric alert rule dimension",
                },
              ],
            },
            { name: "list", description: "List metric-based alert rules" },
            { name: "show", description: "Show a metrics-based alert rule" },
            { name: "update", description: "Update a metric-based alert rule" },
          ],
        },
        { name: "list", description: "List the metric values for a resource" },
        {
          name: "list-definitions",
          description: "List the metric definitions for the resource",
        },
        {
          name: "list-namespaces",
          description: "List the metric namespaces for the resource",
        },
      ],
    },
    {
      name: "private-link-scope",
      description: "Manage monitor private link scope resource",
      subcommands: [
        { name: "create", description: "Create a private link scope resource" },
        {
          name: "delete",
          description: "Delete a monitor private link scope resource",
        },
        {
          name: "list",
          description: "List all monitor private link scope resource",
        },
        {
          name: "private-endpoint-connection",
          description:
            "Manage private endpoint connection of a private link scope resource",
          subcommands: [
            {
              name: "approve",
              description:
                "Approve a private endpoint connection of a private link scope resource",
            },
            {
              name: "delete",
              description:
                "Delete a private endpoint connection of a private link scope resource",
            },
            {
              name: "list",
              description:
                "List all private endpoint connections of a private link scope resource",
            },
            {
              name: "reject",
              description:
                "Reject a private endpoint connection of a private link scope resource",
            },
            {
              name: "show",
              description:
                "Show a private endpoint connection of a private link scope resource",
            },
          ],
        },
        {
          name: "private-link-resource",
          description:
            "Manage private link resource of a private link scope resource",
          subcommands: [
            {
              name: "list",
              description:
                "List all private link resources of a private link scope resource",
            },
            {
              name: "show",
              description:
                "Show a private link resource of a private link scope resource",
            },
          ],
        },
        {
          name: "scoped-resource",
          description:
            "Manage scoped resource of a private link scope resource",
          subcommands: [
            {
              name: "create",
              description:
                "Create a scoped resource for a private link scope resource",
            },
            {
              name: "delete",
              description:
                "Delete a scoped resource of a private link scope resource",
            },
            {
              name: "list",
              description:
                "List all scoped resource of a private link scope resource",
            },
            {
              name: "show",
              description:
                "Show a scoped resource of a private link scope resource",
            },
          ],
        },
        {
          name: "show",
          description: "Show a monitor private link scope resource",
        },
        {
          name: "update",
          description: "Update a monitor private link scope resource",
        },
      ],
    },
    {
      name: "scheduled-query",
      description: "Commands to manage scheduled queries",
      subcommands: [
        { name: "create", description: "Create a scheduled query" },
        { name: "delete", description: "Delete a scheduled query" },
        { name: "list", description: "List all scheduled queries" },
        { name: "show", description: "Show detail of a scheduled query" },
        { name: "update", description: "Update a scheduled query" },
      ],
    },
  ],
};

export default completionSpec;
