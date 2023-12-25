const completion: Fig.Spec = {
  name: "consumption",
  description: "Manage consumption of Azure resources",
  subcommands: [
    {
      name: "budget",
      description: "Manage budgets for an Azure subscription",
      subcommands: [
        {
          name: "create",
          description: "Create a budget for an Azure subscription",
          options: [
            {
              name: "--amount",
              description: "Amount of a budget",
              args: { name: "amount" },
              isRequired: true,
            },
            {
              name: "--budget-name",
              description: "Name of a budget",
              args: { name: "budget-name" },
              isRequired: true,
            },
            {
              name: "--category",
              description: "Category of the budget can be cost or usage",
              args: { name: "category", suggestions: ["cost", "usage"] },
              isRequired: true,
            },
            {
              name: ["--end-date", "-e"],
              description:
                "End date (YYYY-MM-DD in UTC) of time period of a budget",
              args: { name: "end-date" },
              isRequired: true,
            },
            {
              name: ["--start-date", "-s"],
              description:
                "Start date (YYYY-MM-DD in UTC) of time period of a budget",
              args: { name: "start-date" },
              isRequired: true,
            },
            {
              name: "--time-grain",
              description:
                "Time grain of the budget can be monthly, quarterly, or annually",
              args: {
                name: "time-grain",
                suggestions: ["annually", "monthly", "quarterly"],
              },
              isRequired: true,
            },
            {
              name: "--meter-filter",
              description:
                "Space-separated list of meters to filter on. Required if category is usage",
              args: { name: "meter-filter" },
            },
            {
              name: "--resource-filter",
              description:
                "Space-separated list of resource instances to filter on",
              args: { name: "resource-filter" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--resource-group-filter",
              description:
                "Space-separated list of resource groups to filter on",
              args: { name: "resource-group-filter" },
            },
          ],
        },
        {
          name: "create-with-rg",
          description:
            "Create operation to create or update a budget. Update operation requires latest eTag to be set in the request mandatorily. You may obtain the latest eTag by performing a get operation. Create operation does not require eTag",
          options: [
            {
              name: "--amount",
              description: "The total amount of cost to track with the budget",
              args: { name: "amount" },
            },
            {
              name: ["--budget-name", "--name", "-n"],
              description: "Budget Name",
              args: { name: "budget-name" },
            },
            {
              name: "--category",
              description:
                "The category of the budget, whether the budget tracks cost or usage",
              args: { name: "category", suggestions: ["Cost", "Usage"] },
            },
            {
              name: "--e-tag",
              description:
                "ETag of the resource. To handle concurrent update scenario, this field will be used to determine whether the user is updating the latest version or not",
              args: { name: "e-tag" },
            },
            {
              name: "--filters",
              description:
                'May be used to filter budgets by resource group, resource, or meter. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "filters" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--notifications",
              description:
                'Dictionary of notifications associated with the budget. Budget can have up to five notifications. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "notifications" },
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
              name: "--time-grain",
              description:
                "The time covered by a budget. Tracking of the amount will be reset based on the time grain",
              args: {
                name: "time-grain",
                suggestions: ["Annually", "Monthly", "Quarterly"],
              },
            },
            {
              name: "--time-period",
              description:
                'Has start and end date of the budget. The start date must be first of the month and should be less than the end date. Budget start date must be on or after June 1, 2017. Future start date should not be more than three months. Past start date should be selected within the timegrain period. There are no restrictions on the end date. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "time-period" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a budget for an Azure subscription",
          options: [
            {
              name: "--budget-name",
              description: "Name of a budget",
              args: { name: "budget-name" },
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
          name: "delete-with-rg",
          description: "Delete operation to delete a budget",
          options: [
            {
              name: ["--budget-name", "--name", "-n"],
              description: "Budget Name",
              args: { name: "budget-name" },
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
          ],
        },
        {
          name: "list",
          description: "List budgets for an Azure subscription",
          options: [
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
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "show",
          description: "Show budget for an Azure subscription",
          options: [
            {
              name: "--budget-name",
              description: "Name of a budget",
              args: { name: "budget-name" },
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
          name: "show-with-rg",
          description:
            "Get the budget for a resource group under a subscription by budget name",
          options: [
            {
              name: ["--budget-name", "--name", "-n"],
              description: "Budget Name",
              args: { name: "budget-name" },
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
          ],
        },
        {
          name: "update",
          description:
            "Update operation to create or update a budget. Update operation requires latest eTag to be set in the request mandatorily. You may obtain the latest eTag by performing a get operation. Create operation does not require eTag",
          options: [
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: "--amount",
              description: "The total amount of cost to track with the budget",
              args: { name: "amount" },
            },
            {
              name: ["--budget-name", "--name", "-n"],
              description: "Budget Name",
              args: { name: "budget-name" },
            },
            {
              name: "--category",
              description:
                "The category of the budget, whether the budget tracks cost or usage",
              args: { name: "category", suggestions: ["Cost", "Usage"] },
            },
            {
              name: "--e-tag",
              description:
                "ETag of the resource. To handle concurrent update scenario, this field will be used to determine whether the user is updating the latest version or not",
              args: { name: "e-tag" },
            },
            {
              name: "--filters",
              description:
                'May be used to filter budgets by resource group, resource, or meter. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "filters" },
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
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--notifications",
              description:
                'Dictionary of notifications associated with the budget. Budget can have up to five notifications. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "notifications" },
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
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--time-grain",
              description:
                "The time covered by a budget. Tracking of the amount will be reset based on the time grain",
              args: {
                name: "time-grain",
                suggestions: ["Annually", "Monthly", "Quarterly"],
              },
            },
            {
              name: "--time-period",
              description:
                'Has start and end date of the budget. The start date must be first of the month and should be less than the end date. Budget start date must be on or after June 1, 2017. Future start date should not be more than three months. Past start date should be selected within the timegrain period. There are no restrictions on the end date. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "time-period" },
            },
          ],
        },
        {
          name: "update-with-rg",
          description:
            "Update operation to create or update a budget. Update operation requires latest eTag to be set in the request mandatorily. You may obtain the latest eTag by performing a get operation. Create operation does not require eTag",
          options: [
            {
              name: "--amount",
              description: "The total amount of cost to track with the budget",
              args: { name: "amount" },
            },
            {
              name: ["--budget-name", "--name", "-n"],
              description: "Budget Name",
              args: { name: "budget-name" },
            },
            {
              name: "--category",
              description:
                "The category of the budget, whether the budget tracks cost or usage",
              args: { name: "category", suggestions: ["Cost", "Usage"] },
            },
            {
              name: "--e-tag",
              description:
                "ETag of the resource. To handle concurrent update scenario, this field will be used to determine whether the user is updating the latest version or not",
              args: { name: "e-tag" },
            },
            {
              name: "--filters",
              description:
                'May be used to filter budgets by resource group, resource, or meter. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "filters" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--notifications",
              description:
                'Dictionary of notifications associated with the budget. Budget can have up to five notifications. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "notifications" },
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
              name: "--time-grain",
              description:
                "The time covered by a budget. Tracking of the amount will be reset based on the time grain",
              args: {
                name: "time-grain",
                suggestions: ["Annually", "Monthly", "Quarterly"],
              },
            },
            {
              name: "--time-period",
              description:
                'Has start and end date of the budget. The start date must be first of the month and should be less than the end date. Budget start date must be on or after June 1, 2017. Future start date should not be more than three months. Past start date should be selected within the timegrain period. There are no restrictions on the end date. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "time-period" },
            },
          ],
        },
      ],
    },
    {
      name: "marketplace",
      description:
        "Inspect the marketplace usage data of an Azure subscription within a billing period",
      subcommands: [
        {
          name: "list",
          description:
            "List the marketplace for an Azure subscription within a billing period",
          options: [
            {
              name: ["--billing-period-name", "-p"],
              description: "Name of the billing period to get the marketplace",
              args: { name: "billing-period-name" },
            },
            {
              name: ["--end-date", "-e"],
              description:
                "End date (YYYY-MM-DD in UTC). If specified, also requires --start-date",
              args: { name: "end-date" },
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
              name: ["--start-date", "-s"],
              description:
                "Start date (YYYY-MM-DD in UTC). If specified, also requires --end-date",
              args: { name: "start-date" },
            },
            {
              name: ["--top", "-t"],
              description:
                "Maximum number of items to return. Value range: 1-1000",
              args: { name: "top" },
            },
          ],
        },
      ],
    },
    {
      name: "pricesheet",
      description:
        "Inspect the price sheet of an Azure subscription within a billing period",
      subcommands: [
        {
          name: "show",
          description:
            "Show the price sheet for an Azure subscription within a billing period",
          options: [
            {
              name: ["--billing-period-name", "-p"],
              description: "Name of the billing period to get the price sheet",
              args: { name: "billing-period-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--include-meter-details",
              description: "Include meter details in the price sheet",
              args: { name: "include-meter-details" },
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
      name: "reservation",
      description: "Manage reservations for Azure resources",
      subcommands: [
        {
          name: "detail",
          description: "List reservation details",
          subcommands: [
            {
              name: "list",
              description:
                "List the details of a reservation by order id or reservation id",
              options: [
                {
                  name: ["--end-date", "-e"],
                  description:
                    "End date (YYYY-MM-DD in UTC). Only needed for daily grain and if specified, also requires --start-date",
                  args: { name: "end-date" },
                  isRequired: true,
                },
                {
                  name: "--reservation-order-id",
                  description: "Reservation order id",
                  args: { name: "reservation-order-id" },
                  isRequired: true,
                },
                {
                  name: ["--start-date", "-s"],
                  description:
                    "Start date (YYYY-MM-DD in UTC). Only needed for daily grain and if specified, also requires --end-date",
                  args: { name: "start-date" },
                  isRequired: true,
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
                  name: "--reservation-id",
                  description: "Reservation id",
                  args: { name: "reservation-id" },
                },
              ],
            },
          ],
        },
        {
          name: "summary",
          description: "List reservation summaries",
          subcommands: [
            {
              name: "list",
              description:
                "List reservation summaries for daily or monthly by order Id or reservation id",
              options: [
                {
                  name: "--grain",
                  description:
                    "Reservation summary grain. Possible values are daily or monthly",
                  args: { name: "grain", suggestions: ["daily", "monthly"] },
                  isRequired: true,
                },
                {
                  name: "--reservation-order-id",
                  description: "Reservation order id",
                  args: { name: "reservation-order-id" },
                  isRequired: true,
                },
                {
                  name: ["--end-date", "-e"],
                  description:
                    "End date (YYYY-MM-DD in UTC). Only needed for daily grain and if specified, also requires --start-date",
                  args: { name: "end-date" },
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
                  name: "--reservation-id",
                  description: "Id of the reservation",
                  args: { name: "reservation-id" },
                },
                {
                  name: ["--start-date", "-s"],
                  description:
                    "Start date (YYYY-MM-DD in UTC). Only needed for daily grain and if specified, also requires --end-date",
                  args: { name: "start-date" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "usage",
      description: "Inspect the usage of Azure resources",
      subcommands: [
        {
          name: "list",
          description:
            "List the details of Azure resource consumption, either as an invoice or within a billing period",
          options: [
            {
              name: ["--billing-period-name", "-p"],
              description:
                "Name of the billing period to get the usage details that associate with",
              args: { name: "billing-period-name" },
            },
            {
              name: ["--end-date", "-e"],
              description:
                "End date (YYYY-MM-DD in UTC). If specified, also requires --start-date",
              args: { name: "end-date" },
            },
            {
              name: ["--include-additional-properties", "-a"],
              description: "Include additional properties in the usages",
              args: { name: "include-additional-properties" },
            },
            {
              name: ["--include-meter-details", "-m"],
              description: "Include meter details in the usages",
              args: { name: "include-meter-details" },
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
              name: ["--start-date", "-s"],
              description:
                "Start date (YYYY-MM-DD in UTC). If specified, also requires --end-date",
              args: { name: "start-date" },
            },
            {
              name: ["--top", "-t"],
              description:
                "Maximum number of items to return. Value range: 1-1000",
              args: { name: "top" },
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
