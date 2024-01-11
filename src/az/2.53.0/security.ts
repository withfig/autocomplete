const completion: Fig.Spec = {
  name: "security",
  description: "Manage your security posture with Microsoft Defender for Cloud",
  subcommands: [
    {
      name: "adaptive-application-controls",
      description:
        "Enable control which applications can run on your Azure and non-Azure machines (Windows and Linux)",
      subcommands: [
        {
          name: "list",
          description: "Adaptive Application Controls - List",
        },
        {
          name: "show",
          description: "Adaptive Application Controls - Get",
          options: [
            {
              name: "--group-name",
              description: "Name of an application control VM/server group",
              args: { name: "group-name" },
              isRequired: true,
            },
            {
              name: ["--location", "-l"],
              description:
                'Location of the resource. Possible values are "centralsus", "westeurope". Please use "list" operation to get all resources and locations',
              args: { name: "location" },
            },
          ],
        },
      ],
    },
    {
      name: "adaptive_network_hardenings",
      description: "View all Adaptive Network Hardening resources",
      subcommands: [
        {
          name: "list",
          description:
            "Gets a list of Adaptive Network Hardenings resources in scope of an extended resource",
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
              description: "Name of the resource",
              args: { name: "resource-name" },
              isRequired: true,
            },
            {
              name: "--resource-namespace",
              description: "The Namespace of the resource",
              args: { name: "resource-namespace" },
              isRequired: true,
            },
            {
              name: "--resource-type",
              description: "The type of the resource",
              args: { name: "resource-type" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description: "Gets a single Adaptive Network Hardening resource",
          options: [
            {
              name: "--adaptive-network-hardenings-resource-name",
              description: "Adaptive Network Hardening resource name",
              args: { name: "adaptive-network-hardenings-resource-name" },
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
              description: "Name of the resource",
              args: { name: "resource-name" },
              isRequired: true,
            },
            {
              name: "--resource-namespace",
              description: "The Namespace of the resource",
              args: { name: "resource-namespace" },
              isRequired: true,
            },
            {
              name: "--resource-type",
              description: "The type of the resource",
              args: { name: "resource-type" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "alert",
      description: "View security alerts",
      subcommands: [
        {
          name: "list",
          description: "List security alerts",
          options: [
            {
              name: ["--location", "-l"],
              description: "Location of the resource",
              args: { name: "location" },
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
          description: "Shows a security alert",
          options: [
            {
              name: ["--location", "-l"],
              description: "Location of the resource",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the resource to be fetched",
              args: { name: "name" },
              isRequired: true,
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
          name: "update",
          description: "Updates a security alert status",
          options: [
            {
              name: ["--location", "-l"],
              description: "Location of the resource",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the resource to be fetched",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--status",
              description:
                'Target status of the alert. possible values are "dismiss", "activate", "resolve" and "inprogress"',
              args: { name: "status" },
              isRequired: true,
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
    {
      name: "alerts-suppression-rule",
      description: "View and manage alerts suppression rules",
      subcommands: [
        {
          name: "delete",
          description: "Delete an alerts suppression rule",
          options: [
            {
              name: "--rule-name",
              description: "The unique name of the alerts suppression rule",
              args: { name: "rule-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "delete_scope",
          description: "Delete an alerts suppression rule scope",
          options: [
            {
              name: "--field",
              description: "Entity name",
              args: { name: "field" },
              isRequired: true,
            },
            {
              name: "--rule-name",
              description: "The unique name of the alerts suppression rule",
              args: { name: "rule-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list",
          description:
            "List all alerts suppression rule on a subscription scope",
        },
        {
          name: "show",
          description: "Shows an alerts suppression rule",
          options: [
            {
              name: "--rule-name",
              description: "The unique name of the alerts suppression rule",
              args: { name: "rule-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update",
          description: "Updates or create an alerts suppression rule",
          options: [
            {
              name: "--alert-type",
              description:
                'Type of the alert to automatically suppress. For all alert types, use "*"',
              args: { name: "alert-type" },
              isRequired: true,
            },
            {
              name: "--reason",
              description: "The reason for dismissing the alert",
              args: { name: "reason" },
              isRequired: true,
            },
            {
              name: "--rule-name",
              description: "The unique name of the alerts suppression rule",
              args: { name: "rule-name" },
              isRequired: true,
            },
            {
              name: "--state",
              description:
                'Possible states of the rule. Possible values are "Enabled" and "Disabled"',
              args: { name: "state" },
              isRequired: true,
            },
            {
              name: "--comment",
              description: "Any comment regarding the rule",
              args: { name: "comment" },
            },
            {
              name: "--expiration-date-utc",
              description:
                "Expiration date of the rule, if value is not provided or provided as null this field will default to the maximum allowed expiration date",
              args: { name: "expiration-date-utc" },
            },
          ],
        },
        {
          name: "upsert_scope",
          description: "Update an alerts suppression rule with scope element",
          options: [
            {
              name: "--field",
              description: "Entity name",
              args: { name: "field" },
              isRequired: true,
            },
            {
              name: "--rule-name",
              description: "The unique name of the alerts suppression rule",
              args: { name: "rule-name" },
              isRequired: true,
            },
            {
              name: "--any-of",
              description: "A list of strings to scope the suppression rule by",
              args: { name: "any-of" },
            },
            {
              name: "--contains-substring",
              description: "The string to scope the suppression rule by",
              args: { name: "contains-substring" },
            },
          ],
        },
      ],
    },
    {
      name: "allowed_connections",
      description:
        "View all possible traffic between resources for the subscription and location, based on connection type",
      subcommands: [
        {
          name: "list",
          description:
            "List of all possible traffic between resources for the subscription",
        },
        {
          name: "show",
          description:
            "List all possible traffic between resources for the subscription and location, based on connection type",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the resource to be fetched",
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
      name: "assessment",
      description: "View your security assessment results",
      subcommands: [
        {
          name: "create",
          description: "Creates a customer managed security assessment",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the resource to be fetched",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--status-code",
              description:
                'Progremmatic code for the result of the assessment. can be "Healthy", "Unhealthy" or "NotApplicable"',
              args: { name: "status-code" },
              isRequired: true,
            },
            {
              name: "--additional-data",
              description:
                "Data that is attached to the assessment result for better investigations or status clarity",
              args: { name: "additional-data" },
            },
            {
              name: "--assessed-resource-id",
              description: "The target resource for this assessment",
              args: { name: "assessed-resource-id" },
            },
            {
              name: "--status-cause",
              description:
                "Progremmatic code for the cause of the assessment result",
              args: { name: "status-cause" },
            },
            {
              name: "--status-description",
              description:
                "Human readable description of the cause of the assessment result",
              args: { name: "status-description" },
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes a security assessment",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the resource to be fetched",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--assessed-resource-id",
              description: "The target resource for this assessment",
              args: { name: "assessed-resource-id" },
            },
          ],
        },
        {
          name: "list",
          description: "List all security assessment results",
        },
        {
          name: "show",
          description: "Shows a security assessment",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the resource to be fetched",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--assessed-resource-id",
              description: "The target resource for this assessment",
              args: { name: "assessed-resource-id" },
            },
          ],
        },
      ],
    },
    {
      name: "assessment-metadata",
      description: "View your security assessment metadata",
      subcommands: [
        {
          name: "create",
          description: "Creates a customer managed security assessment type",
          options: [
            {
              name: "--description",
              description:
                "Detailed string that will help users to understand the assessment and how it is calculated",
              args: { name: "description" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "Human readable title for this object",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the resource to be fetched",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--severity",
              description:
                "Indicates the importance of the security risk if the assessment is unhealthy",
              args: { name: "severity" },
              isRequired: true,
            },
            {
              name: "--remediation-description",
              description:
                "Detailed string that will help users to understand the different ways to mitigate or fix the security issue",
              args: { name: "remediation-description" },
            },
          ],
        },
        {
          name: "delete",
          description:
            "Deletes a security assessment type and all it's assessment results",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the resource to be fetched",
              args: { name: "name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list",
          description: "List all security assessment results",
        },
        {
          name: "show",
          description: "Shows a security assessment",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the resource to be fetched",
              args: { name: "name" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "atp",
      description: "View and manage Advanced Threat Protection settings",
      subcommands: [
        {
          name: "cosmosdb",
          description:
            "View and manage Advanced Threat Protection settings for Cosmos DB accounts",
          subcommands: [
            {
              name: "show",
              description:
                "Display Advanced Threat Protection settings for an Azure Cosmos DB account",
              options: [
                {
                  name: "--cosmosdb-account",
                  description: "Name of an existing Cosmos DB account",
                  args: { name: "cosmosdb-account" },
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
                "Toggle status of Advanced Threat Protection for an Azure Cosmos DB account",
              options: [
                {
                  name: "--cosmosdb-account",
                  description: "Name of an existing Cosmos DB account",
                  args: { name: "cosmosdb-account" },
                  isRequired: true,
                },
                {
                  name: "--is-enabled",
                  description:
                    "Enable or disable Advanced Threat Protection for a received storage or Cosmos DB account",
                  args: { name: "is-enabled", suggestions: ["false", "true"] },
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
          name: "storage",
          description:
            "View and manage Advanced Threat Protection settings for storage accounts",
          subcommands: [
            {
              name: "show",
              description:
                "Display Advanced Threat Protection settings for a storage account",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--storage-account",
                  description: "Name of an existing Storage account",
                  args: { name: "storage-account" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "update",
              description:
                "Toggle status of Advanced Threat Protection for a storage account",
              options: [
                {
                  name: "--is-enabled",
                  description:
                    "Enable or disable Advanced Threat Protection for a received storage or Cosmos DB account",
                  args: { name: "is-enabled", suggestions: ["false", "true"] },
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
                  name: "--storage-account",
                  description: "Name of an existing Storage account",
                  args: { name: "storage-account" },
                  isRequired: true,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "auto-provisioning-setting",
      description: "View your auto provisioning settings",
      subcommands: [
        {
          name: "list",
          description: "List the auto provisioning settings",
        },
        {
          name: "show",
          description: "Shows an auto provisioning setting",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the resource to be fetched",
              args: { name: "name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update",
          description:
            "Updates your automatic provisioning settings on the subscription",
          options: [
            {
              name: "--auto-provision",
              description:
                'Automatic provisioning toggle. possible values are "On" or "Off"',
              args: { name: "auto-provision" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the resource to be fetched",
              args: { name: "name" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "automation",
      description: "View your security automations",
      subcommands: [
        {
          name: "create_or_update",
          description: "Creates or update a security automation",
          options: [
            {
              name: "--actions",
              description:
                "A collection of the actions which are triggered if all the configured rules evaluations, within at least one rule set, are true",
              args: { name: "actions" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the resource to be fetched",
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
              name: "--scopes",
              description:
                "A collection of scopes on which the security automations logic is applied",
              args: { name: "scopes" },
              isRequired: true,
            },
            {
              name: "--sources",
              description:
                "A collection of the source event types which evaluate the security automation set of rules",
              args: { name: "sources" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "The security automation description",
              args: { name: "description" },
            },
            {
              name: "--etag",
              description:
                "Entity tag is used for comparing two or more entities from the same requested resource",
              args: { name: "etag" },
            },
            {
              name: "--isEnabled",
              description:
                "Indicates whether the security automation is enabled",
              args: { name: "isEnabled" },
            },
            {
              name: ["--location", "-l"],
              description: "Location of the resource",
              args: { name: "location" },
            },
            {
              name: "--tags",
              description:
                "A list of key value pairs that describe the resource",
              args: { name: "tags" },
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes a security automation",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the resource to be fetched",
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
          name: "list",
          description:
            "List all security automations under subscription/resource group",
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
          description: "Shows a security automation",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the resource to be fetched",
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
          name: "validate",
          description:
            "Validates a security automation model before create or update",
          options: [
            {
              name: "--actions",
              description:
                "A collection of the actions which are triggered if all the configured rules evaluations, within at least one rule set, are true",
              args: { name: "actions" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the resource to be fetched",
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
              name: "--scopes",
              description:
                "A collection of scopes on which the security automations logic is applied",
              args: { name: "scopes" },
              isRequired: true,
            },
            {
              name: "--sources",
              description:
                "A collection of the source event types which evaluate the security automation set of rules",
              args: { name: "sources" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "The security automation description",
              args: { name: "description" },
            },
            {
              name: "--etag",
              description:
                "Entity tag is used for comparing two or more entities from the same requested resource",
              args: { name: "etag" },
            },
            {
              name: "--isEnabled",
              description:
                "Indicates whether the security automation is enabled",
              args: { name: "isEnabled" },
            },
            {
              name: ["--location", "-l"],
              description: "Location of the resource",
              args: { name: "location" },
            },
            {
              name: "--tags",
              description:
                "A list of key value pairs that describe the resource",
              args: { name: "tags" },
            },
          ],
        },
      ],
    },
    {
      name: "automation-action-event-hub",
      description: "Creates security automation event hub action",
      subcommands: [
        {
          name: "create",
          description: "Creates security automation event hub action",
          options: [
            {
              name: "--connection-string",
              description:
                "The target Event Hub connection string (it will not be included in any response)",
              args: { name: "connection-string" },
              isRequired: true,
            },
            {
              name: "--event-hub-resource-id",
              description: "The target Event Hub Azure Resource ID",
              args: { name: "event-hub-resource-id" },
              isRequired: true,
            },
            {
              name: "--sas-policy-name",
              description: "The target Event Hub SAS policy name",
              args: { name: "sas-policy-name" },
            },
          ],
        },
      ],
    },
    {
      name: "automation-action-logic-app",
      description: "Creates security automation logic app action",
      subcommands: [
        {
          name: "create",
          description: "Creates security automation logic app action",
          options: [
            {
              name: "--logic-app-resource-id",
              description:
                "The triggered Logic App Azure Resource ID. This can also reside on other subscriptions, given that you have permissions to trigger the Logic App",
              args: { name: "logic-app-resource-id" },
              isRequired: true,
            },
            {
              name: "--uri",
              description:
                "The Logic App trigger URI endpoint (it will not be included in any response)",
              args: { name: "uri" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "automation-action-workspace",
      description: "Creates security automation workspace action",
      subcommands: [
        {
          name: "create",
          description: "Creates security automation workspace action",
          options: [
            {
              name: "--workspace-resource-id",
              description:
                "The fully qualified Log Analytics Workspace Azure Resource ID",
              args: { name: "workspace-resource-id" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "automation-rule",
      description: "Creates security automation rule",
      subcommands: [
        {
          name: "create",
          description: "Creates security automation rule",
          options: [
            {
              name: "--expected-value",
              description: "The expected value",
              args: { name: "expected-value" },
              isRequired: true,
            },
            {
              name: "--operator",
              description:
                "A valid comparer operator to use. A case-insensitive comparison will be applied for String PropertyType",
              args: { name: "operator" },
              isRequired: true,
            },
            {
              name: "--property-j-path",
              description:
                "The JPath of the entity model property that should be checked",
              args: { name: "property-j-path" },
              isRequired: true,
            },
            {
              name: "--property-type",
              description:
                "The data type of the compared operands (string, integer, floating point number or a boolean [true/false]]",
              args: { name: "property-type" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "automation-rule-set",
      description: "Creates security automation rule set",
      subcommands: [
        {
          name: "create",
          description: "Creates security automation rule set",
          options: [
            {
              name: "--rules",
              description:
                "A rule which is evaluated upon event interception. The rule is configured by comparing a specific value from the event model to an expected value. This comparison is done by using one of the supported operators set",
              args: { name: "rules" },
            },
          ],
        },
      ],
    },
    {
      name: "automation-scope",
      description: "Creates security automation scope",
      subcommands: [
        {
          name: "create",
          description: "Creates security automation scope",
          options: [
            {
              name: "--description",
              description: "The resources scope description",
              args: { name: "description" },
              isRequired: true,
            },
            {
              name: "--scope-path",
              description:
                "The resources scope path. Can be the subscription on which the automation is defined on or a resource group under that subscription (fully qualified Azure resource IDs)",
              args: { name: "scope-path" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "automation-source",
      description: "Creates security automation source",
      subcommands: [
        {
          name: "create",
          description: "Creates security automation source",
          options: [
            {
              name: "--event-source",
              description: "A valid event source type",
              args: { name: "event-source" },
              isRequired: true,
            },
            {
              name: "--rule-sets",
              description:
                'A set of rules which evaluate upon event interception. A logical disjunction is applied between defined rule sets (logical "or")',
              args: { name: "rule-sets" },
            },
          ],
        },
      ],
    },
    {
      name: "contact",
      description: "View your security contacts",
      subcommands: [
        {
          name: "create",
          description: "Creates a security contact",
          options: [
            {
              name: "--email",
              description: "E-mail of the security contact",
              args: { name: "email" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the resource to be fetched",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--alert-notifications",
              description:
                "Whether to send mail notifications to the security contacts",
              args: { name: "alert-notifications" },
            },
            {
              name: "--alerts-admins",
              description:
                "Whether to send mail notifications to the subscription administrators",
              args: { name: "alerts-admins" },
            },
            {
              name: "--phone",
              description: "Phone of the security contact",
              args: { name: "phone" },
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes a security contact",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the resource to be fetched",
              args: { name: "name" },
              isRequired: true,
            },
          ],
        },
        { name: "list", description: "List security contact" },
        {
          name: "show",
          description: "Shows a security contact",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the resource to be fetched",
              args: { name: "name" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "discovered-security-solution",
      description: "View your discovered security solutions",
      subcommands: [
        {
          name: "list",
          description: "List the discovered security solutions",
        },
        {
          name: "show",
          description: "Shows a discovered security solution",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the resource to be fetched",
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
      name: "external-security-solution",
      description: "View your external security solutions",
      subcommands: [
        {
          name: "list",
          description: "List the external security solutions",
        },
        {
          name: "show",
          description: "Shows an external security solution",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the resource to be fetched",
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
      name: "iot-alerts",
      description: "View IoT Security aggregated alerts",
      subcommands: [
        {
          name: "delete",
          description: "Dismiss an aggregated IoT Security Alert",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the resource to be fetched",
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
              name: "--solution-name",
              description: "Name of the IoT Security solution",
              args: { name: "solution-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list",
          description: "List all yours IoT Security solution aggregated alerts",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--solution-name",
              description: "Name of the IoT Security solution",
              args: { name: "solution-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description:
            "Shows a single aggregated alert of yours IoT Security solution",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the resource to be fetched",
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
              name: "--solution-name",
              description: "Name of the IoT Security solution",
              args: { name: "solution-name" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "iot-analytics",
      description: "View IoT Security Analytics metrics",
      subcommands: [
        {
          name: "list",
          description: "List all IoT security Analytics metrics",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--solution-name",
              description: "Name of the IoT Security solution",
              args: { name: "solution-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description: "Shows IoT Security Analytics metrics",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--solution-name",
              description: "Name of the IoT Security solution",
              args: { name: "solution-name" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "iot-recommendations",
      description: "View IoT Security aggregated recommendations",
      subcommands: [
        {
          name: "list",
          description:
            "List all yours IoT Security solution aggregated recommendations",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--solution-name",
              description: "Name of the IoT Security solution",
              args: { name: "solution-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description:
            "Shows a single aggregated recommendation of yours IoT Security solution",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the resource to be fetched",
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
              name: "--solution-name",
              description: "Name of the IoT Security solution",
              args: { name: "solution-name" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "iot-solution",
      description: "Manage your IoT Security solution",
      subcommands: [
        {
          name: "create",
          description: "Create your IoT Security solution",
          options: [
            {
              name: "--display-name",
              description: "Resource display name",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--iot-hubs",
              description: "IoT Hub resource IDs",
              args: { name: "iot-hubs" },
              isRequired: true,
            },
            {
              name: ["--location", "-l"],
              description: "Location of the resource",
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
              name: "--solution-name",
              description: "Name of the IoT Security solution",
              args: { name: "solution-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "delete",
          description: "Delete your IoT Security solution",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--solution-name",
              description: "Name of the IoT Security solution",
              args: { name: "solution-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list",
          description: "List all IoT Security solutions",
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
          description: "Shows a IoT Security solution",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--solution-name",
              description: "Name of the IoT Security solution",
              args: { name: "solution-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update",
          description: "Update your IoT Security solution",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--solution-name",
              description: "Name of the IoT Security solution",
              args: { name: "solution-name" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "Resource display name",
              args: { name: "display-name" },
            },
            {
              name: "--iot-hubs",
              description: "IoT Hub resource IDs",
              args: { name: "iot-hubs" },
            },
          ],
        },
      ],
    },
    {
      name: "jit-policy",
      description: "Manage your Just in Time network access policies",
      subcommands: [
        {
          name: "list",
          description: "List your Just in Time network access policies",
          options: [
            {
              name: ["--location", "-l"],
              description: "Location of the resource",
              args: { name: "location" },
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
          description: "Shows a Just in Time network access policy",
          options: [
            {
              name: ["--location", "-l"],
              description: "Location of the resource",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the resource to be fetched",
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
      name: "location",
      description:
        "Shows the Microsoft Defender for Cloud Home region location",
      subcommands: [
        {
          name: "list",
          description:
            "Shows the Microsoft Defender for Cloud Home region location",
        },
        {
          name: "show",
          description:
            "Shows the Microsoft Defender for Cloud Home region location",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the resource to be fetched",
              args: { name: "name" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "pricing",
      description:
        "Enables managing the Azure Defender plan for the subscription",
      subcommands: [
        {
          name: "create",
          description: "Updates the Azure defender plan for the subscription",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the resource to be fetched",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--tier",
              description: "Pricing tier type",
              args: { name: "tier" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list",
          description: "Shows the Azure Defender plans for the subscription",
        },
        {
          name: "show",
          description: "Shows the Azure Defender plan for the subscription",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the resource to be fetched",
              args: { name: "name" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "regulatory-compliance-assessments",
      description: "Regulatory compliance assessments",
      subcommands: [
        {
          name: "list",
          description:
            "Get details and state of assessments mapped to selected regulatory compliance control",
          options: [
            {
              name: "--control-name",
              description: "The compliance control name",
              args: { name: "control-name" },
              isRequired: true,
            },
            {
              name: "--standard-name",
              description: "The compliance standard name",
              args: { name: "standard-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description:
            "Shows supported regulatory compliance details and state for selected assessment",
          options: [
            {
              name: "--control-name",
              description: "The compliance control name",
              args: { name: "control-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the resource to be fetched",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--standard-name",
              description: "The compliance standard name",
              args: { name: "standard-name" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "regulatory-compliance-controls",
      description: "Regulatory compliance controls",
      subcommands: [
        {
          name: "list",
          description:
            "List supported of regulatory compliance controls details and state for selected standard",
          options: [
            {
              name: "--standard-name",
              description: "The compliance standard name",
              args: { name: "standard-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description:
            "Shows a regulatory compliance details state for selected standard",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the resource to be fetched",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--standard-name",
              description: "The compliance standard name",
              args: { name: "standard-name" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "regulatory-compliance-standards",
      description: "Regulatory compliance standards",
      subcommands: [
        {
          name: "list",
          description:
            "List supported regulatory compliance standards details and state results",
        },
        {
          name: "show",
          description:
            "Shows a regulatory compliance details state for selected standard",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the resource to be fetched",
              args: { name: "name" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "secure-score-control-definitions",
      description: "Secure score control definitions",
      subcommands: [
        {
          name: "list",
          description: "Get details of secure score control definitions",
        },
      ],
    },
    {
      name: "secure-score-controls",
      description: "Secure score controls",
      subcommands: [
        {
          name: "list",
          description:
            "List supported of secure score controls details and state for scope",
        },
        {
          name: "list_by_score",
          description:
            "List supported of secure score controls details and state for selected score",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the resource to be fetched",
              args: { name: "name" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "secure-scores",
      description: "Secure scores",
      subcommands: [
        {
          name: "list",
          description: "List of secure-scores details and state results",
        },
        {
          name: "show",
          description: "Shows a secure score details for selected initiative",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the resource to be fetched",
              args: { name: "name" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "security-solutions",
      description: "Display all security solutions at the subscription level",
      subcommands: [
        {
          name: "list",
          description:
            "Display all security solutions at the subscription level",
        },
      ],
    },
    {
      name: "security-solutions-reference-data",
      description:
        "Display all security solutions reference data at the subscription level",
      subcommands: [
        {
          name: "list",
          description:
            "Display all security solutions reference data at the subscription level",
        },
      ],
    },
    {
      name: "setting",
      description: "View your security settings",
      subcommands: [
        { name: "list", description: "List security settings" },
        {
          name: "show",
          description: "Shows a security setting",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the setting",
              args: {
                name: "name",
                suggestions: [
                  "MCAS",
                  "Sentinel",
                  "WDATP",
                  "WDATP_EXCLUDE_LINUX_PUBLIC_PREVIEW",
                  "WDATP_UNIFIED_SOLUTION",
                ],
              },
              isRequired: true,
            },
          ],
        },
        {
          name: "update",
          description: "Updates a security setting",
          options: [
            {
              name: "--enabled",
              description: "Enable or disable the setting status",
              args: { name: "enabled", suggestions: ["false", "true"] },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The name of the setting",
              args: {
                name: "name",
                suggestions: [
                  "MCAS",
                  "Sentinel",
                  "WDATP",
                  "WDATP_EXCLUDE_LINUX_PUBLIC_PREVIEW",
                  "WDATP_UNIFIED_SOLUTION",
                ],
              },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "sub-assessment",
      description: "View your security sub assessments",
      subcommands: [
        {
          name: "list",
          description: "List all security sub assessment results",
          options: [
            {
              name: "--assessed-resource-id",
              description: "The target resource for this assessment",
              args: { name: "assessed-resource-id" },
            },
            {
              name: "--assessment-name",
              description: "Name of the assessment resource",
              args: { name: "assessment-name" },
            },
          ],
        },
        {
          name: "show",
          description: "Shows a security sub assessment",
          options: [
            {
              name: "--assessment-name",
              description: "Name of the assessment resource",
              args: { name: "assessment-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the resource to be fetched",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--assessed-resource-id",
              description: "The target resource for this assessment",
              args: { name: "assessed-resource-id" },
            },
          ],
        },
      ],
    },
    {
      name: "task",
      description: "View security tasks (recommendations)",
      subcommands: [
        {
          name: "list",
          description: "List security tasks (recommendations)",
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
          description: "Shows a security task (recommendation)",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the resource to be fetched",
              args: { name: "name" },
              isRequired: true,
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
    {
      name: "topology",
      description: "Shows the network topology in your subscription",
      subcommands: [
        {
          name: "list",
          description: "Shows the network topology in your subscription",
        },
        {
          name: "show",
          description: "Shows the network topology in your subscription",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the resource to be fetched",
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
      name: "va",
      description: "View Vulnerability Assessment",
      subcommands: [
        {
          name: "sql",
          description:
            "View Sql Vulnerability Assessment scan results and manage baseline",
          subcommands: [
            {
              name: "baseline",
              description:
                "View and manage Sql Vulnerability Assessment baseline",
              subcommands: [
                {
                  name: "delete",
                  description:
                    "Delete Sql Vulnerability Assessment rule baseline",
                  options: [
                    {
                      name: "--database-name",
                      description: "The name of the scanned database",
                      args: { name: "database-name" },
                      isRequired: true,
                    },
                    {
                      name: "--rule-id",
                      description:
                        'The ID of the scanned rule. Format: "VAXXXX", where XXXX indicates the number of the rule',
                      args: { name: "rule-id" },
                      isRequired: true,
                    },
                    {
                      name: "--server-name",
                      description: "The name of the scanned server",
                      args: { name: "server-name" },
                      isRequired: true,
                    },
                    {
                      name: "--vm-resource-id",
                      description:
                        "Resource ID of the scanned machine. For On-Premise machines, please provide your workspace resource ID",
                      args: { name: "vm-resource-id" },
                      isRequired: true,
                    },
                    {
                      name: "--workspace-id",
                      description:
                        "The ID of the workspace connected to the scanned machine",
                      args: { name: "workspace-id" },
                      isRequired: true,
                    },
                    {
                      name: "--agent-id",
                      description:
                        "Provide the ID of the agent on the scanned machine, for On-Premise resources only",
                      args: { name: "agent-id" },
                    },
                    {
                      name: "--vm-name",
                      description:
                        "Provide the name of the machine, for On-Premise resources only",
                      args: { name: "vm-name" },
                    },
                    {
                      name: "--vm-uuid",
                      description:
                        "Provide the UUID of the scanned machine, for On-Premise resources only",
                      args: { name: "vm-uuid" },
                    },
                  ],
                },
                {
                  name: "list",
                  description:
                    "View Sql Vulnerability Assessment baseline for all rules",
                  options: [
                    {
                      name: "--database-name",
                      description: "The name of the scanned database",
                      args: { name: "database-name" },
                      isRequired: true,
                    },
                    {
                      name: "--server-name",
                      description: "The name of the scanned server",
                      args: { name: "server-name" },
                      isRequired: true,
                    },
                    {
                      name: "--vm-resource-id",
                      description:
                        "Resource ID of the scanned machine. For On-Premise machines, please provide your workspace resource ID",
                      args: { name: "vm-resource-id" },
                      isRequired: true,
                    },
                    {
                      name: "--workspace-id",
                      description:
                        "The ID of the workspace connected to the scanned machine",
                      args: { name: "workspace-id" },
                      isRequired: true,
                    },
                    {
                      name: "--agent-id",
                      description:
                        "Provide the ID of the agent on the scanned machine, for On-Premise resources only",
                      args: { name: "agent-id" },
                    },
                    {
                      name: "--vm-name",
                      description:
                        "Provide the name of the machine, for On-Premise resources only",
                      args: { name: "vm-name" },
                    },
                    {
                      name: "--vm-uuid",
                      description:
                        "Provide the UUID of the scanned machine, for On-Premise resources only",
                      args: { name: "vm-uuid" },
                    },
                  ],
                },
                {
                  name: "set",
                  description:
                    "Sets Sql Vulnerability Assessment baseline. Replaces the current baseline",
                  options: [
                    {
                      name: "--database-name",
                      description: "The name of the scanned database",
                      args: { name: "database-name" },
                      isRequired: true,
                    },
                    {
                      name: "--server-name",
                      description: "The name of the scanned server",
                      args: { name: "server-name" },
                      isRequired: true,
                    },
                    {
                      name: "--vm-resource-id",
                      description:
                        "Resource ID of the scanned machine. For On-Premise machines, please provide your workspace resource ID",
                      args: { name: "vm-resource-id" },
                      isRequired: true,
                    },
                    {
                      name: "--workspace-id",
                      description:
                        "The ID of the workspace connected to the scanned machine",
                      args: { name: "workspace-id" },
                      isRequired: true,
                    },
                    {
                      name: "--agent-id",
                      description:
                        "Provide the ID of the agent on the scanned machine, for On-Premise resources only",
                      args: { name: "agent-id" },
                    },
                    {
                      name: ["--baseline", "-b"],
                      description:
                        "Baseline records to be set. The following example will set a baseline for two rules: --baseline rule=VA1111 line1_w1 line1_w2 --baseline rule=VA2222 line1_w1 line1_w2 line1_w3 --baseline rule=VA1111 line2_w1 line2_w2",
                      args: { name: "baseline" },
                    },
                    {
                      name: "--latest",
                      description:
                        "Use this argument without parameters to set baseline upon latest scan results",
                    },
                    {
                      name: "--vm-name",
                      description:
                        "Provide the name of the machine, for On-Premise resources only",
                      args: { name: "vm-name" },
                    },
                    {
                      name: "--vm-uuid",
                      description:
                        "Provide the UUID of the scanned machine, for On-Premise resources only",
                      args: { name: "vm-uuid" },
                    },
                  ],
                },
                {
                  name: "show",
                  description:
                    "View Sql Vulnerability Assessment rule baseline",
                  options: [
                    {
                      name: "--database-name",
                      description: "The name of the scanned database",
                      args: { name: "database-name" },
                      isRequired: true,
                    },
                    {
                      name: "--rule-id",
                      description:
                        'The ID of the scanned rule. Format: "VAXXXX", where XXXX indicates the number of the rule',
                      args: { name: "rule-id" },
                      isRequired: true,
                    },
                    {
                      name: "--server-name",
                      description: "The name of the scanned server",
                      args: { name: "server-name" },
                      isRequired: true,
                    },
                    {
                      name: "--vm-resource-id",
                      description:
                        "Resource ID of the scanned machine. For On-Premise machines, please provide your workspace resource ID",
                      args: { name: "vm-resource-id" },
                      isRequired: true,
                    },
                    {
                      name: "--workspace-id",
                      description:
                        "The ID of the workspace connected to the scanned machine",
                      args: { name: "workspace-id" },
                      isRequired: true,
                    },
                    {
                      name: "--agent-id",
                      description:
                        "Provide the ID of the agent on the scanned machine, for On-Premise resources only",
                      args: { name: "agent-id" },
                    },
                    {
                      name: "--vm-name",
                      description:
                        "Provide the name of the machine, for On-Premise resources only",
                      args: { name: "vm-name" },
                    },
                    {
                      name: "--vm-uuid",
                      description:
                        "Provide the UUID of the scanned machine, for On-Premise resources only",
                      args: { name: "vm-uuid" },
                    },
                  ],
                },
                {
                  name: "update",
                  description:
                    "Update Sql Vulnerability Assessment rule baseline. Replaces the current rule baseline",
                  options: [
                    {
                      name: "--database-name",
                      description: "The name of the scanned database",
                      args: { name: "database-name" },
                      isRequired: true,
                    },
                    {
                      name: "--rule-id",
                      description:
                        'The ID of the scanned rule. Format: "VAXXXX", where XXXX indicates the number of the rule',
                      args: { name: "rule-id" },
                      isRequired: true,
                    },
                    {
                      name: "--server-name",
                      description: "The name of the scanned server",
                      args: { name: "server-name" },
                      isRequired: true,
                    },
                    {
                      name: "--vm-resource-id",
                      description:
                        "Resource ID of the scanned machine. For On-Premise machines, please provide your workspace resource ID",
                      args: { name: "vm-resource-id" },
                      isRequired: true,
                    },
                    {
                      name: "--workspace-id",
                      description:
                        "The ID of the workspace connected to the scanned machine",
                      args: { name: "workspace-id" },
                      isRequired: true,
                    },
                    {
                      name: "--agent-id",
                      description:
                        "Provide the ID of the agent on the scanned machine, for On-Premise resources only",
                      args: { name: "agent-id" },
                    },
                    {
                      name: ["--baseline", "-b"],
                      description:
                        "Baseline records to be set. The following example will set a baseline with two records: --baseline line1_w1 line1_w2 line1_w3 --baseline line2_w1 line2_w2 line2_w3",
                      args: { name: "baseline" },
                    },
                    {
                      name: "--latest",
                      description:
                        "Use this argument without parameters to set baseline upon latest scan results",
                    },
                    {
                      name: "--vm-name",
                      description:
                        "Provide the name of the machine, for On-Premise resources only",
                      args: { name: "vm-name" },
                    },
                    {
                      name: "--vm-uuid",
                      description:
                        "Provide the UUID of the scanned machine, for On-Premise resources only",
                      args: { name: "vm-uuid" },
                    },
                  ],
                },
              ],
            },
            {
              name: "results",
              description: "View Sql Vulnerability Assessment scan results",
              subcommands: [
                {
                  name: "list",
                  description:
                    "View all Sql Vulnerability Assessment scan results",
                  options: [
                    {
                      name: "--database-name",
                      description: "The name of the scanned database",
                      args: { name: "database-name" },
                      isRequired: true,
                    },
                    {
                      name: "--scan-id",
                      description: "The ID of the scan",
                      args: { name: "scan-id" },
                      isRequired: true,
                    },
                    {
                      name: "--server-name",
                      description: "The name of the scanned server",
                      args: { name: "server-name" },
                      isRequired: true,
                    },
                    {
                      name: "--vm-resource-id",
                      description:
                        "Resource ID of the scanned machine. For On-Premise machines, please provide your workspace resource ID",
                      args: { name: "vm-resource-id" },
                      isRequired: true,
                    },
                    {
                      name: "--workspace-id",
                      description:
                        "The ID of the workspace connected to the scanned machine",
                      args: { name: "workspace-id" },
                      isRequired: true,
                    },
                    {
                      name: "--agent-id",
                      description:
                        "Provide the ID of the agent on the scanned machine, for On-Premise resources only",
                      args: { name: "agent-id" },
                    },
                    {
                      name: "--vm-name",
                      description:
                        "Provide the name of the machine, for On-Premise resources only",
                      args: { name: "vm-name" },
                    },
                    {
                      name: "--vm-uuid",
                      description:
                        "Provide the UUID of the scanned machine, for On-Premise resources only",
                      args: { name: "vm-uuid" },
                    },
                  ],
                },
                {
                  name: "show",
                  description: "View Sql Vulnerability Assessment scan results",
                  options: [
                    {
                      name: "--database-name",
                      description: "The name of the scanned database",
                      args: { name: "database-name" },
                      isRequired: true,
                    },
                    {
                      name: "--rule-id",
                      description:
                        'The ID of the scanned rule. Format: "VAXXXX", where XXXX indicates the number of the rule',
                      args: { name: "rule-id" },
                      isRequired: true,
                    },
                    {
                      name: "--scan-id",
                      description: "The ID of the scan",
                      args: { name: "scan-id" },
                      isRequired: true,
                    },
                    {
                      name: "--server-name",
                      description: "The name of the scanned server",
                      args: { name: "server-name" },
                      isRequired: true,
                    },
                    {
                      name: "--vm-resource-id",
                      description:
                        "Resource ID of the scanned machine. For On-Premise machines, please provide your workspace resource ID",
                      args: { name: "vm-resource-id" },
                      isRequired: true,
                    },
                    {
                      name: "--workspace-id",
                      description:
                        "The ID of the workspace connected to the scanned machine",
                      args: { name: "workspace-id" },
                      isRequired: true,
                    },
                    {
                      name: "--agent-id",
                      description:
                        "Provide the ID of the agent on the scanned machine, for On-Premise resources only",
                      args: { name: "agent-id" },
                    },
                    {
                      name: "--vm-name",
                      description:
                        "Provide the name of the machine, for On-Premise resources only",
                      args: { name: "vm-name" },
                    },
                    {
                      name: "--vm-uuid",
                      description:
                        "Provide the UUID of the scanned machine, for On-Premise resources only",
                      args: { name: "vm-uuid" },
                    },
                  ],
                },
              ],
            },
            {
              name: "scans",
              description: "View Sql Vulnerability Assessment scan summaries",
              subcommands: [
                {
                  name: "list",
                  description:
                    "List all Sql Vulnerability Assessment scan summaries",
                  options: [
                    {
                      name: "--database-name",
                      description: "The name of the scanned database",
                      args: { name: "database-name" },
                      isRequired: true,
                    },
                    {
                      name: "--server-name",
                      description: "The name of the scanned server",
                      args: { name: "server-name" },
                      isRequired: true,
                    },
                    {
                      name: "--vm-resource-id",
                      description:
                        "Resource ID of the scanned machine. For On-Premise machines, please provide your workspace resource ID",
                      args: { name: "vm-resource-id" },
                      isRequired: true,
                    },
                    {
                      name: "--workspace-id",
                      description:
                        "The ID of the workspace connected to the scanned machine",
                      args: { name: "workspace-id" },
                      isRequired: true,
                    },
                    {
                      name: "--agent-id",
                      description:
                        "Provide the ID of the agent on the scanned machine, for On-Premise resources only",
                      args: { name: "agent-id" },
                    },
                    {
                      name: "--vm-name",
                      description:
                        "Provide the name of the machine, for On-Premise resources only",
                      args: { name: "vm-name" },
                    },
                    {
                      name: "--vm-uuid",
                      description:
                        "Provide the UUID of the scanned machine, for On-Premise resources only",
                      args: { name: "vm-uuid" },
                    },
                  ],
                },
                {
                  name: "show",
                  description:
                    "View Sql Vulnerability Assessment scan summaries",
                  options: [
                    {
                      name: "--database-name",
                      description: "The name of the scanned database",
                      args: { name: "database-name" },
                      isRequired: true,
                    },
                    {
                      name: "--scan-id",
                      description: "The ID of the scan",
                      args: { name: "scan-id" },
                      isRequired: true,
                    },
                    {
                      name: "--server-name",
                      description: "The name of the scanned server",
                      args: { name: "server-name" },
                      isRequired: true,
                    },
                    {
                      name: "--vm-resource-id",
                      description:
                        "Resource ID of the scanned machine. For On-Premise machines, please provide your workspace resource ID",
                      args: { name: "vm-resource-id" },
                      isRequired: true,
                    },
                    {
                      name: "--workspace-id",
                      description:
                        "The ID of the workspace connected to the scanned machine",
                      args: { name: "workspace-id" },
                      isRequired: true,
                    },
                    {
                      name: "--agent-id",
                      description:
                        "Provide the ID of the agent on the scanned machine, for On-Premise resources only",
                      args: { name: "agent-id" },
                    },
                    {
                      name: "--vm-name",
                      description:
                        "Provide the name of the machine, for On-Premise resources only",
                      args: { name: "vm-name" },
                    },
                    {
                      name: "--vm-uuid",
                      description:
                        "Provide the UUID of the scanned machine, for On-Premise resources only",
                      args: { name: "vm-uuid" },
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
      name: "workspace-setting",
      description:
        "Shows the workspace settings in your subscription - these settings let you control which workspace will hold your security data",
      subcommands: [
        {
          name: "create",
          description:
            "Creates a workspace settings in your subscription - these settings let you control which workspace will hold your security data",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the resource to be fetched",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--target-workspace",
              description:
                "An ID of the workspace resource that will hold the security data",
              args: { name: "target-workspace" },
              isRequired: true,
            },
          ],
        },
        {
          name: "delete",
          description:
            "Deletes the workspace settings in your subscription - this will make the security events on the subscription be reported to the default workspace",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the resource to be fetched",
              args: { name: "name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list",
          description:
            "Shows the workspace settings in your subscription - these settings let you control which workspace will hold your security data",
        },
        {
          name: "show",
          description:
            "Shows the workspace settings in your subscription - these settings let you control which workspace will hold your security data",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the resource to be fetched",
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
