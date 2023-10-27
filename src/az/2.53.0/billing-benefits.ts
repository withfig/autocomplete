const completion: Fig.Spec = {
  name: "billing-benefits",
  description: "Azure billing benefits commands",
  subcommands: [
    {
      name: "reservation-order-aliases",
      description: "Azure billing benefits reservation order aliases commands",
      subcommands: [
        {
          name: "create",
          description: "Create a reservation order alias",
          options: [
            {
              name: "--order-alias-name",
              description: "Name of the reservation order alias",
              args: { name: "order-alias-name" },
              isRequired: true,
            },
            {
              name: "--applied-scope-prop",
              description:
                'Properties specific to applied scope type. Not required if not applicable. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "applied-scope-prop" },
            },
            {
              name: "--applied-scope-type",
              description: "Type of the Applied Scope",
              args: {
                name: "applied-scope-type",
                suggestions: ["ManagementGroup", "Shared", "Single"],
              },
            },
            {
              name: "--billing-plan",
              description:
                "Represents the billing plan in ISO 8601 format. Required only for monthly billing plans",
              args: { name: "billing-plan", suggestions: ["P1M"] },
            },
            {
              name: "--billing-scope-id",
              description:
                "Subscription that will be charged for purchasing the benefit",
              args: { name: "billing-scope-id" },
            },
            {
              name: "--display-name",
              description: "Display name",
              args: { name: "display-name" },
            },
            {
              name: "--instance-flexibility",
              description:
                "Turning this on will apply the reservation discount to other VMs in the same VM size group",
              args: {
                name: "instance-flexibility",
                suggestions: ["Off", "On"],
              },
            },
            {
              name: ["--location", "-l"],
              description:
                "The Azure Region where the reservation benefits are applied to",
              args: { name: "location" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
              args: {
                name: "no-wait",
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
              name: "--quantity",
              description:
                "Total Quantity of the SKUs purchased in the Reservation",
              args: { name: "quantity" },
            },
            {
              name: "--renew",
              description:
                "Setting this to true will automatically purchase a new benefit on the expiration date time",
            },
            {
              name: "--reserved-resource-type",
              description: "The type of the resource that is being reserved",
              args: {
                name: "reserved-resource-type",
                suggestions: [
                  "AVS",
                  "AppService",
                  "AzureDataExplorer",
                  "AzureFiles",
                  "BlockBlob",
                  "CosmosDb",
                  "DataFactory",
                  "Databricks",
                  "DedicatedHost",
                  "ManagedDisk",
                  "MariaDb",
                  "MySql",
                  "NetAppStorage",
                  "PostgreSql",
                  "RedHat",
                  "RedHatOsa",
                  "RedisCache",
                  "SapHana",
                  "SqlAzureHybridBenefit",
                  "SqlDataWarehouse",
                  "SqlDatabases",
                  "SqlEdge",
                  "SuseLinux",
                  "VMwareCloudSimple",
                  "VirtualMachineSoftware",
                  "VirtualMachines",
                ],
              },
            },
            {
              name: "--review-date-time",
              description:
                "This is the date-time when the Azure Hybrid Benefit needs to be reviewed",
              args: { name: "review-date-time" },
            },
            {
              name: "--sku",
              description: "Name of the SKU to be applied",
              args: { name: "sku" },
            },
            {
              name: "--term",
              description: "Represent benefit term in ISO 8601 format",
              args: { name: "term", suggestions: ["P1Y", "P3Y", "P5Y"] },
            },
          ],
        },
        {
          name: "show",
          description: "Get a reservation order alias",
          options: [
            {
              name: "--order-alias-name",
              description: "Name of the reservation order alias",
              args: { name: "order-alias-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition is met",
          options: [
            {
              name: "--order-alias-name",
              description: "Name of the reservation order alias",
              args: { name: "order-alias-name" },
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
      name: "savings-plan",
      description: "Azure billing benefits savings plan commands",
      subcommands: [
        {
          name: "list",
          description: "List savings plans",
          options: [
            {
              name: "--filter",
              description:
                "May be used to filter by reservation properties. The filter supports 'eq', 'or', and 'and'. It does not currently support 'ne', 'gt', 'le', 'ge', or 'not'. Reservation properties include sku/name, properties/{appliedScopeType, archived, displayName, displayProvisioningState, effectiveDateTime, expiryDate, provisioningState, quantity, renew, reservedResourceType, term, userFriendlyAppliedScopeType, userFriendlyRenewState}",
              args: { name: "filter" },
            },
            {
              name: "--orderby",
              description:
                "May be used to sort order by reservation properties",
              args: { name: "orderby" },
            },
            {
              name: "--selected-state",
              description: "The selected provisioning state",
              args: { name: "selected-state" },
            },
            {
              name: "--skiptoken",
              description:
                "The number of savings plans to skip from the list before returning results",
              args: { name: "skiptoken" },
            },
            {
              name: "--take",
              description: "To number of savings plans to return",
              args: { name: "take" },
            },
          ],
        },
      ],
    },
    {
      name: "savings-plan-order",
      description: "Azure billing benefits savings plan order commands",
      subcommands: [
        {
          name: "elevate",
          description:
            "Elevate as owner on savings plan order based on billing permissions",
          options: [
            {
              name: "--savings-plan-order-id",
              description: "Order ID of the savings plan",
              args: { name: "savings-plan-order-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list",
          description: "List all Savings plan orders",
        },
        {
          name: "show",
          description: "Get a savings plan order",
          options: [
            {
              name: "--savings-plan-order-id",
              description: "Order ID of the savings plan",
              args: { name: "savings-plan-order-id" },
              isRequired: true,
            },
            {
              name: "--expand",
              description:
                "May be used to expand the detail information of some properties",
              args: { name: "expand" },
            },
          ],
        },
        {
          name: "savings-plan",
          description:
            "Azure billing benefits savings plan in savings plan order commands",
          subcommands: [
            {
              name: "list",
              description: "List savings plans in an order",
              options: [
                {
                  name: "--savings-plan-order-id",
                  description: "Order ID of the savings plan",
                  args: { name: "savings-plan-order-id" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description: "Get savings plan",
              options: [
                {
                  name: "--savings-plan-id",
                  description: "ID of the savings plan",
                  args: { name: "savings-plan-id" },
                  isRequired: true,
                },
                {
                  name: "--savings-plan-order-id",
                  description: "Order ID of the savings plan",
                  args: { name: "savings-plan-order-id" },
                  isRequired: true,
                },
                {
                  name: "--expand",
                  description:
                    "May be used to expand the detail information of some properties",
                  args: { name: "expand" },
                },
              ],
            },
            {
              name: "update",
              description: "Update savings plan",
              options: [
                {
                  name: "--savings-plan-id",
                  description: "ID of the savings plan",
                  args: { name: "savings-plan-id" },
                  isRequired: true,
                },
                {
                  name: "--savings-plan-order-id",
                  description: "Order ID of the savings plan",
                  args: { name: "savings-plan-order-id" },
                  isRequired: true,
                },
                {
                  name: "--applied-scope-prop",
                  description:
                    'Properties specific to applied scope type. Not required if not applicable. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "applied-scope-prop" },
                },
                {
                  name: "--applied-scope-type",
                  description: "Type of the Applied Scope",
                  args: {
                    name: "applied-scope-type",
                    suggestions: ["ManagementGroup", "Shared", "Single"],
                  },
                },
                {
                  name: "--display-name",
                  description: "Display name",
                  args: { name: "display-name" },
                },
                {
                  name: "--renew",
                  description:
                    "Setting this to true will automatically purchase a new benefit on the expiration date time",
                },
                {
                  name: "--renew-properties",
                  description:
                    'Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "renew-properties" },
                },
              ],
            },
            {
              name: "validate-update",
              description: "Validate savings plan patch",
              options: [
                {
                  name: "--savings-plan-id",
                  description: "ID of the savings plan",
                  args: { name: "savings-plan-id" },
                  isRequired: true,
                },
                {
                  name: "--savings-plan-order-id",
                  description: "Order ID of the savings plan",
                  args: { name: "savings-plan-order-id" },
                  isRequired: true,
                },
                {
                  name: "--benefits",
                  description:
                    'Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "benefits" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "savings-plan-order-aliases",
      description: "Azure billing benefits savings plan order aliases commands",
      subcommands: [
        {
          name: "create",
          description:
            "Create a savings plan. Learn more about permissions needed at https://go.microsoft.com/fwlink/?linkid=2215851",
          options: [
            {
              name: "--order-alias-name",
              description: "Name of the savings plan order alias",
              args: { name: "order-alias-name" },
              isRequired: true,
            },
            {
              name: "--applied-scope-prop",
              description:
                'Properties specific to applied scope type. Not required if not applicable. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "applied-scope-prop" },
            },
            {
              name: "--applied-scope-type",
              description: "Type of the Applied Scope",
              args: {
                name: "applied-scope-type",
                suggestions: ["ManagementGroup", "Shared", "Single"],
              },
            },
            {
              name: "--billing-plan",
              description:
                "Represents the billing plan in ISO 8601 format. Required only for monthly billing plans",
              args: { name: "billing-plan", suggestions: ["P1M"] },
            },
            {
              name: "--billing-scope-id",
              description:
                "Subscription that will be charged for purchasing the benefit",
              args: { name: "billing-scope-id" },
            },
            {
              name: "--commitment",
              description:
                'Commitment towards the benefit. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "commitment" },
            },
            {
              name: "--display-name",
              description: "Display name",
              args: { name: "display-name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
              args: {
                name: "no-wait",
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
              name: "--sku",
              description: "Name of the SKU to be applied",
              args: { name: "sku" },
            },
            {
              name: "--term",
              description: "Represent benefit term in ISO 8601 format",
              args: { name: "term", suggestions: ["P1Y", "P3Y", "P5Y"] },
            },
          ],
        },
        {
          name: "show",
          description: "Get a savings plan order alias",
          options: [
            {
              name: "--order-alias-name",
              description: "Name of the savings plan order alias",
              args: { name: "order-alias-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition is met",
          options: [
            {
              name: "--order-alias-name",
              description: "Name of the savings plan order alias",
              args: { name: "order-alias-name" },
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
      name: "validate-purchase",
      description: "Validate savings plan purchase",
      options: [
        {
          name: "--benefits",
          description:
            'Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
          args: { name: "benefits" },
        },
      ],
    },
  ],
};

export default completion;
