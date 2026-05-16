const completion: Fig.Spec = {
  name: "costmanagement",
  description: "Manage cost and billing in Azure",
  subcommands: [
    {
      name: "export",
      description: "Costmanagement export",
      subcommands: [
        {
          name: "create",
          description: "The operation to create an export",
          options: [
            {
              name: "--name",
              description: "Export Name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--scope",
              description:
                "The scope associated with query and export operations. This includes '/subscriptions/{subscriptionId}/' for subscription scope, '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope, '/providers/Microsoft.Management/managementGroups/{managementGroupId} for Management Group scope",
              args: { name: "scope" },
              isRequired: true,
            },
            {
              name: "--storage-account-id",
              description: "The ID of the storage account to store exports",
              args: { name: "storage-account-id" },
              isRequired: true,
            },
            {
              name: "--storage-container",
              description: "The storage container to deliver exports",
              args: { name: "storage-container" },
              isRequired: true,
            },
            {
              name: "--timeframe",
              description:
                "The time frame for pulling data for the query. If custom, then a specific time period must be provided",
              args: {
                name: "timeframe",
                suggestions: [
                  "BillingMonthToDate",
                  "Custom",
                  "MonthToDate",
                  "TheLastBillingMonth",
                  "TheLastMonth",
                  "WeekToDate",
                ],
              },
              isRequired: true,
            },
            {
              name: "--dataset-configuration",
              description:
                "Has configuration information for the data in the export. The configuration will be ignored if aggregation and grouping are provided. Expect value: columns=xx",
              args: { name: "dataset-configuration" },
            },
            {
              name: "--recurrence",
              description: "The schedule recurrence",
              args: {
                name: "recurrence",
                suggestions: ["Annually", "Daily", "Monthly", "Weekly"],
              },
            },
            {
              name: "--recurrence-period",
              description:
                "Has start and end date of the recurrence. The start date must be in future. If present, the end date must be greater than start date. Expect value: KEY1=VALUE1 KEY2=VALUE2 ... , available KEYs are: from, to. The time format is like 2020-05-01T00:00:00",
              args: { name: "recurrence-period" },
            },
            {
              name: "--schedule-status",
              description:
                "The status of the export's schedule. If inactive, the export's scheduled execution is paused",
              args: {
                name: "schedule-status",
                suggestions: ["Active", "Inactive"],
              },
            },
            {
              name: "--storage-directory",
              description:
                "The root directory in the storage container to store exports",
              args: { name: "storage-directory" },
            },
            {
              name: "--time-period",
              description:
                "Has time period for pulling data for the query. Expect value: from=TIMESTAMP1 to=TIMESTAMP2. The timestamp format is like 2020-05-01T00:00:00.The TIMESTAMP1 must in the future and TIMESTAMP2 must be greater than TIMESTAMP1",
              args: { name: "time-period" },
            },
            {
              name: "--type",
              description: "The type of the query",
              args: {
                name: "type",
                suggestions: ["ActualCost", "AmortizedCost", "Usage"],
              },
            },
          ],
        },
        {
          name: "delete",
          description: "The operation to delete an export",
          options: [
            {
              name: "--name",
              description: "Export Name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--scope",
              description:
                "The scope associated with query and export operations. This includes '/subscriptions/{subscriptionId}/' for subscription scope, '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope, '/providers/Microsoft.Management/managementGroups/{managementGroupId} for Management Group scope",
              args: { name: "scope" },
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
          description: "The operation to list all exports at the given scope",
          options: [
            {
              name: "--scope",
              description:
                "The scope associated with query and export operations. This includes '/subscriptions/{subscriptionId}/' for subscription scope, '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope, '/providers/Microsoft.Management/managementGroups/{managementGroupId} for Management Group scope",
              args: { name: "scope" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description:
            "The operation to get the execution history of an export for the defined scope by export name",
          options: [
            {
              name: "--name",
              description: "Export Name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--scope",
              description:
                "The scope associated with query and export operations. This includes '/subscriptions/{subscriptionId}/' for subscription scope, '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope, '/providers/Microsoft.Management/managementGroups/{managementGroupId} for Management Group scope",
              args: { name: "scope" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update",
          description: "The operation to update an export",
          options: [
            {
              name: "--name",
              description: "Export Name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--scope",
              description:
                "The scope associated with query and export operations. This includes '/subscriptions/{subscriptionId}/' for subscription scope, '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope, '/providers/Microsoft.Management/managementGroups/{managementGroupId} for Management Group scope",
              args: { name: "scope" },
              isRequired: true,
            },
            {
              name: "--dataset-configuration",
              description:
                "Has configuration information for the data in the export. The configuration will be ignored if aggregation and grouping are provided. Expect value: columns=xx",
              args: { name: "dataset-configuration" },
            },
            {
              name: "--recurrence",
              description: "The schedule recurrence",
              args: {
                name: "recurrence",
                suggestions: ["Annually", "Daily", "Monthly", "Weekly"],
              },
            },
            {
              name: "--recurrence-period",
              description:
                "Has start and end date of the recurrence. The start date must be in future. If present, the end date must be greater than start date. Expect value: KEY1=VALUE1 KEY2=VALUE2 ... , available KEYs are: from, to. The time format is like 2020-05-01T00:00:00",
              args: { name: "recurrence-period" },
            },
            {
              name: "--schedule-status",
              description:
                "The status of the export's schedule. If inactive, the export's scheduled execution is paused",
              args: {
                name: "schedule-status",
                suggestions: ["Active", "Inactive"],
              },
            },
            {
              name: "--storage-account-id",
              description: "The ID of the storage account to store exports",
              args: { name: "storage-account-id" },
            },
            {
              name: "--storage-container",
              description: "The storage container to deliver exports",
              args: { name: "storage-container" },
            },
            {
              name: "--storage-directory",
              description:
                "The root directory in the storage container to store exports",
              args: { name: "storage-directory" },
            },
            {
              name: "--time-period",
              description:
                "Has time period for pulling data for the query. Expect value: from=TIMESTAMP1 to=TIMESTAMP2. The timestamp format is like 2020-05-01T00:00:00.The TIMESTAMP1 must in the future and TIMESTAMP2 must be greater than TIMESTAMP1",
              args: { name: "time-period" },
            },
            {
              name: "--timeframe",
              description:
                "The time frame for pulling data for the query. If custom, then a specific time period must be provided",
              args: {
                name: "timeframe",
                suggestions: [
                  "BillingMonthToDate",
                  "Custom",
                  "MonthToDate",
                  "TheLastBillingMonth",
                  "TheLastMonth",
                  "WeekToDate",
                ],
              },
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
