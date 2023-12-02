const completion: Fig.Spec = {
  name: "dla",
  description: "Manage Data Lake Analytics accounts, jobs, and catalogs",
  subcommands: [
    {
      name: "account",
      description: "Manage Data Lake Analytics accounts",
      subcommands: [
        {
          name: "create",
          description: "Create a Data Lake Analytics account",
          options: [
            {
              name: ["--account", "-n"],
              description: "Name of the Data Lake Analytics account",
              args: { name: "account" },
              isRequired: true,
            },
            {
              name: "--default-data-lake-store",
              description:
                "The default Data Lake Store account to associate with the created account",
              args: { name: "default-data-lake-store" },
              isRequired: true,
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--max-degree-of-parallelism",
              description: "The maximum degree of parallelism for this account",
              args: { name: "max-degree-of-parallelism" },
            },
            {
              name: "--max-job-count",
              description:
                "The maximum number of concurrent jobs for this account",
              args: { name: "max-job-count" },
            },
            {
              name: "--query-store-retention",
              description: "The number of days to retain job metadata",
              args: { name: "query-store-retention" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
            {
              name: "--tier",
              description:
                "The desired commitment tier for this account to use",
              args: {
                name: "tier",
                suggestions: [
                  "Commitment_100000AUHours",
                  "Commitment_10000AUHours",
                  "Commitment_1000AUHours",
                  "Commitment_100AUHours",
                  "Commitment_500000AUHours",
                  "Commitment_50000AUHours",
                  "Commitment_5000AUHours",
                  "Commitment_500AUHours",
                  "Consumption",
                ],
              },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a Data Lake Analytics account",
          options: [
            {
              name: ["--account", "-n"],
              description: "Name of the Data Lake Analytics account",
              args: { name: "account" },
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
                "If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account",
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
          description: "List available Data Lake Analytics accounts",
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
          description: "Get the details of a Data Lake Analytics account",
          options: [
            {
              name: ["--account", "-n"],
              description: "Name of the Data Lake Analytics account",
              args: { name: "account" },
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
                "If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account",
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
          description: "Update a Data Lake Analytics account",
          options: [
            {
              name: ["--account", "-n"],
              description: "Name of the Data Lake Analytics account",
              args: { name: "account" },
            },
            {
              name: "--allow-azure-ips",
              description:
                "Allow or block IPs originating from Azure through the firewall",
              args: {
                name: "allow-azure-ips",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--firewall-state",
              description: "Enable or disable existing firewall rules",
              args: {
                name: "firewall-state",
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
              name: "--max-degree-of-parallelism",
              description: "The maximum degree of parallelism for this account",
              args: { name: "max-degree-of-parallelism" },
            },
            {
              name: "--max-job-count",
              description:
                "The maximum number of concurrent jobs for this account",
              args: { name: "max-job-count" },
            },
            {
              name: "--query-store-retention",
              description: "The number of days to retain job metadata",
              args: { name: "query-store-retention" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account",
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
              name: "--tier",
              description:
                "The desired commitment tier for this account to use",
              args: {
                name: "tier",
                suggestions: [
                  "Commitment_100000AUHours",
                  "Commitment_10000AUHours",
                  "Commitment_1000AUHours",
                  "Commitment_100AUHours",
                  "Commitment_500000AUHours",
                  "Commitment_50000AUHours",
                  "Commitment_5000AUHours",
                  "Commitment_500AUHours",
                  "Consumption",
                ],
              },
            },
          ],
        },
        {
          name: "blob-storage",
          description:
            "Manage links between Data Lake Analytics accounts and Azure Storage",
          subcommands: [
            {
              name: "add",
              description:
                "Links an Azure Storage account to the specified Data Lake Analytics account",
              options: [
                {
                  name: "--access-key",
                  description:
                    "The access key associated with this Azure Storage account that will be used to connect to it",
                  args: { name: "access-key" },
                  isRequired: true,
                },
                {
                  name: "--storage-account-name",
                  description: "Name of an existing storage account to link to",
                  args: { name: "storage-account-name" },
                  isRequired: true,
                },
                {
                  name: ["--account", "-n"],
                  description: "Name of the Data Lake Analytics account",
                  args: { name: "account" },
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
                    "If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--suffix",
                  description: "The optional suffix for the storage account",
                  args: { name: "suffix" },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Updates the specified Data Lake Analytics account to remove an Azure Storage account",
              options: [
                {
                  name: "--storage-account-name",
                  description: "Name of an existing storage account to link to",
                  args: { name: "storage-account-name" },
                  isRequired: true,
                },
                {
                  name: ["--account", "-n"],
                  description: "Name of the Data Lake Analytics account",
                  args: { name: "account" },
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
                    "If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account",
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
                "Gets the first page of Azure Storage accounts, if any, linked to the specified Data Lake Analytics account",
              options: [
                {
                  name: ["--account", "-n"],
                  description: "Name of the Data Lake Analytics account",
                  args: { name: "account" },
                },
                {
                  name: "--count",
                  description:
                    "The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true",
                  args: { name: "count" },
                },
                {
                  name: "--filter",
                  description: "The OData filter. Optional",
                  args: { name: "filter" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--orderby",
                  description:
                    'OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you\'d like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional',
                  args: { name: "orderby" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account",
                  args: { name: "resource-group" },
                },
                {
                  name: "--select",
                  description:
                    "OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional",
                  args: { name: "select" },
                },
                {
                  name: "--skip",
                  description:
                    "The number of items to skip over before returning elements",
                  args: { name: "skip" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--top",
                  description: "Maximum number of items to return",
                  args: { name: "top" },
                },
              ],
            },
            {
              name: "show",
              description:
                "Gets the specified Azure Storage account linked to the given Data Lake Analytics account",
              options: [
                {
                  name: "--storage-account-name",
                  description: "Name of an existing storage account to link to",
                  args: { name: "storage-account-name" },
                  isRequired: true,
                },
                {
                  name: ["--account", "-n"],
                  description: "Name of the Data Lake Analytics account",
                  args: { name: "account" },
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
                    "If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account",
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
                "Updates an Azure Storage account linked to the specified Data Lake Analytics account",
              options: [
                {
                  name: "--access-key",
                  description:
                    "The access key associated with this Azure Storage account that will be used to connect to it",
                  args: { name: "access-key" },
                  isRequired: true,
                },
                {
                  name: "--storage-account-name",
                  description: "Name of an existing storage account to link to",
                  args: { name: "storage-account-name" },
                  isRequired: true,
                },
                {
                  name: ["--account", "-n"],
                  description: "Name of the Data Lake Analytics account",
                  args: { name: "account" },
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
                    "If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--suffix",
                  description: "The optional suffix for the storage account",
                  args: { name: "suffix" },
                },
              ],
            },
          ],
        },
        {
          name: "compute-policy",
          description: "Manage Data Lake Analytics account compute policies",
          subcommands: [
            {
              name: "create",
              description:
                "Create a compute policy in the Data Lake Analytics account",
              options: [
                {
                  name: ["--account", "-n"],
                  description: "Name of the Data Lake Analytics account",
                  args: { name: "account" },
                  isRequired: true,
                },
                {
                  name: "--compute-policy-name",
                  description: "The name of the compute policy to create",
                  args: { name: "compute-policy-name" },
                  isRequired: true,
                },
                {
                  name: "--object-id",
                  description:
                    "The Azure Active Directory object ID of the user, group, or service principal to apply the policy to",
                  args: { name: "object-id" },
                  isRequired: true,
                },
                {
                  name: "--object-type",
                  description:
                    "The Azure Active Directory object type associated with the supplied object ID",
                  args: { name: "object-type" },
                  isRequired: true,
                },
                {
                  name: "--max-dop-per-job",
                  description:
                    "The maximum degree of parallelism allowed per job for this policy. At least one of --min-priority-per-job and --max-dop-per-job must be specified",
                  args: { name: "max-dop-per-job" },
                },
                {
                  name: "--min-priority-per-job",
                  description:
                    "The minimum priority allowed per job for this policy. At least one of --min-priority-per-job and --max-dop-per-job must be specified",
                  args: { name: "min-priority-per-job" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account",
                  args: { name: "resource-group" },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete a compute policy in a Data Lake Analytics account",
              options: [
                {
                  name: "--compute-policy-name",
                  description: "The name of the compute policy to delete",
                  args: { name: "compute-policy-name" },
                  isRequired: true,
                },
                {
                  name: ["--account", "-n"],
                  description: "Name of the Data Lake Analytics account",
                  args: { name: "account" },
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
                    "If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account",
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
                "List compute policies in the a Lake Analytics account",
              options: [
                {
                  name: ["--account", "-n"],
                  description: "Name of the Data Lake Analytics account",
                  args: { name: "account" },
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
                    "If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account",
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
                "Retrieve a compute policy in a Data Lake Analytics account",
              options: [
                {
                  name: "--compute-policy-name",
                  description: "The name of the compute policy to retrieve",
                  args: { name: "compute-policy-name" },
                  isRequired: true,
                },
                {
                  name: ["--account", "-n"],
                  description: "Name of the Data Lake Analytics account",
                  args: { name: "account" },
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
                    "If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account",
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
                "Update a compute policy in the Data Lake Analytics account",
              options: [
                {
                  name: "--compute-policy-name",
                  description: "The name of the compute policy to update",
                  args: { name: "compute-policy-name" },
                  isRequired: true,
                },
                {
                  name: ["--account", "-n"],
                  description: "Name of the Data Lake Analytics account",
                  args: { name: "account" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--max-dop-per-job",
                  description:
                    "The maximum degree of parallelism allowed per job for this policy. At least one of --min-priority-per-job and --max-dop-per-job must be specified",
                  args: { name: "max-dop-per-job" },
                },
                {
                  name: "--min-priority-per-job",
                  description:
                    "The minimum priority allowed per job for this policy. At least one of --min-priority-per-job and --max-dop-per-job must be specified",
                  args: { name: "min-priority-per-job" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account",
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
          name: "data-lake-store",
          description:
            "Manage links between Data Lake Analytics and Data Lake Store accounts",
          subcommands: [
            {
              name: "add",
              description:
                "Updates the specified Data Lake Analytics account to include the additional Data Lake Store account",
              options: [
                {
                  name: "--data-lake-store-account-name",
                  description: "The name of the Data Lake Store account to add",
                  args: { name: "data-lake-store-account-name" },
                  isRequired: true,
                },
                {
                  name: ["--account", "-n"],
                  description: "Name of the Data Lake Analytics account",
                  args: { name: "account" },
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
                    "If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--suffix",
                  description:
                    "The optional suffix for the Data Lake Store account",
                  args: { name: "suffix" },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Updates the Data Lake Analytics account specified to remove the specified Data Lake Store account",
              options: [
                {
                  name: "--data-lake-store-account-name",
                  description:
                    "The name of the Data Lake Store account to remove",
                  args: { name: "data-lake-store-account-name" },
                  isRequired: true,
                },
                {
                  name: ["--account", "-n"],
                  description: "Name of the Data Lake Analytics account",
                  args: { name: "account" },
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
                    "If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account",
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
                "Gets the first page of Data Lake Store accounts linked to the specified Data Lake Analytics account",
              options: [
                {
                  name: ["--account", "-n"],
                  description: "Name of the Data Lake Analytics account",
                  args: { name: "account" },
                },
                {
                  name: "--count",
                  description:
                    "The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true",
                  args: { name: "count" },
                },
                {
                  name: "--filter",
                  description: "OData filter. Optional",
                  args: { name: "filter" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--orderby",
                  description:
                    'OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you\'d like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional',
                  args: { name: "orderby" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account",
                  args: { name: "resource-group" },
                },
                {
                  name: "--select",
                  description:
                    "OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional",
                  args: { name: "select" },
                },
                {
                  name: "--skip",
                  description:
                    "The number of items to skip over before returning elements",
                  args: { name: "skip" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--top",
                  description: "Maximum number of items to return",
                  args: { name: "top" },
                },
              ],
            },
            {
              name: "show",
              description:
                "Gets the specified Data Lake Store account details in the specified Data Lake Analytics account",
              options: [
                {
                  name: "--data-lake-store-account-name",
                  description:
                    "The name of the Data Lake Store account to retrieve",
                  args: { name: "data-lake-store-account-name" },
                  isRequired: true,
                },
                {
                  name: ["--account", "-n"],
                  description: "Name of the Data Lake Analytics account",
                  args: { name: "account" },
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
                    "If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account",
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
          name: "firewall",
          description: "Manage Data Lake Analytics account firewall rules",
          subcommands: [
            {
              name: "create",
              description:
                "Create a firewall rule in a Data Lake Analytics account",
              options: [
                {
                  name: ["--account", "-n"],
                  description: "Name of the Data Lake Analytics account",
                  args: { name: "account" },
                  isRequired: true,
                },
                {
                  name: "--end-ip-address",
                  description:
                    "The end of the valid IP range for the firewall rule",
                  args: { name: "end-ip-address" },
                  isRequired: true,
                },
                {
                  name: "--firewall-rule-name",
                  description: "The name of the firewall rule",
                  args: { name: "firewall-rule-name" },
                  isRequired: true,
                },
                {
                  name: "--start-ip-address",
                  description:
                    "The start of the valid IP range for the firewall rule",
                  args: { name: "start-ip-address" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account",
                  args: { name: "resource-group" },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete a firewall rule in a Data Lake Analytics account",
              options: [
                {
                  name: "--firewall-rule-name",
                  description: "The name of the firewall rule to delete",
                  args: { name: "firewall-rule-name" },
                  isRequired: true,
                },
                {
                  name: ["--account", "-n"],
                  description: "Name of the Data Lake Analytics account",
                  args: { name: "account" },
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
                    "If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account",
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
                "List firewall rules in a Data Lake Analytics account",
              options: [
                {
                  name: ["--account", "-n"],
                  description: "Name of the Data Lake Analytics account",
                  args: { name: "account" },
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
                    "If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account",
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
                "Retrieve a firewall rule in a Data Lake Analytics account",
              options: [
                {
                  name: "--firewall-rule-name",
                  description: "The name of the firewall rule to retrieve",
                  args: { name: "firewall-rule-name" },
                  isRequired: true,
                },
                {
                  name: ["--account", "-n"],
                  description: "Name of the Data Lake Analytics account",
                  args: { name: "account" },
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
                    "If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account",
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
                "Update a firewall rule in a Data Lake Analytics account",
              options: [
                {
                  name: "--firewall-rule-name",
                  description: "The name of the firewall rule to update",
                  args: { name: "firewall-rule-name" },
                  isRequired: true,
                },
                {
                  name: ["--account", "-n"],
                  description: "Name of the Data Lake Analytics account",
                  args: { name: "account" },
                },
                {
                  name: "--end-ip-address",
                  description:
                    "The end IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol",
                  args: { name: "end-ip-address" },
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
                    "If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account",
                  args: { name: "resource-group" },
                },
                {
                  name: "--start-ip-address",
                  description:
                    "The start IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol",
                  args: { name: "start-ip-address" },
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
      name: "catalog",
      description: "Manage Data Lake Analytics catalogs",
      subcommands: [
        {
          name: "assembly",
          description: "Manage Data Lake Analytics catalog assemblies",
          subcommands: [
            {
              name: "list",
              description:
                "Retrieves the list of assemblies from the Data Lake Analytics catalog",
              options: [
                {
                  name: "--database-name",
                  description:
                    "The name of the database containing the assembly",
                  args: { name: "database-name" },
                  isRequired: true,
                },
                {
                  name: ["--account", "-n"],
                  description: "Name of the Data Lake Analytics account",
                  args: { name: "account" },
                },
                {
                  name: "--count",
                  description:
                    "The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true",
                  args: { name: "count" },
                },
                {
                  name: "--filter",
                  description: "OData filter. Optional",
                  args: { name: "filter" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--orderby",
                  description:
                    'OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you\'d like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional',
                  args: { name: "orderby" },
                },
                {
                  name: "--select",
                  description:
                    "OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional",
                  args: { name: "select" },
                },
                {
                  name: "--skip",
                  description:
                    "The number of items to skip over before returning elements",
                  args: { name: "skip" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--top",
                  description: "Maximum number of items to return",
                  args: { name: "top" },
                },
              ],
            },
            {
              name: "show",
              description:
                "Retrieves the specified assembly from the Data Lake Analytics catalog",
              options: [
                {
                  name: "--assembly-name",
                  description: "The name of the assembly",
                  args: { name: "assembly-name" },
                  isRequired: true,
                },
                {
                  name: "--database-name",
                  description:
                    "The name of the database containing the assembly",
                  args: { name: "database-name" },
                  isRequired: true,
                },
                {
                  name: ["--account", "-n"],
                  description: "Name of the Data Lake Analytics account",
                  args: { name: "account" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
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
          name: "credential",
          description: "Manage Data Lake Analytics catalog credentials",
          subcommands: [
            {
              name: "create",
              description:
                "Create a new catalog credential for use with an external data source",
              options: [
                {
                  name: ["--account", "-n"],
                  description: "Name of the Data Lake Analytics account",
                  args: { name: "account" },
                  isRequired: true,
                },
                {
                  name: "--credential-name",
                  description: "The name of the credential",
                  args: { name: "credential-name" },
                  isRequired: true,
                },
                {
                  name: "--database-name",
                  description:
                    "The name of the database in which to create the credential",
                  args: { name: "database-name" },
                  isRequired: true,
                },
                {
                  name: "--uri",
                  description: "URI of the external data source",
                  args: { name: "uri" },
                  isRequired: true,
                },
                {
                  name: "--user-name",
                  description:
                    "The user name that will be used when authenticating with this credential",
                  args: { name: "user-name" },
                  isRequired: true,
                },
                {
                  name: ["--password", "-p"],
                  description:
                    "Password for the credential user. Will prompt if not given",
                  args: { name: "password" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a catalog credential",
              options: [
                {
                  name: "--credential-name",
                  description: "The name of the credential to delete",
                  args: { name: "credential-name" },
                  isRequired: true,
                },
                {
                  name: "--database-name",
                  description:
                    "The name of the database containing the credential",
                  args: { name: "database-name" },
                  isRequired: true,
                },
                {
                  name: ["--account", "-n"],
                  description: "Name of the Data Lake Analytics account",
                  args: { name: "account" },
                },
                {
                  name: "--cascade",
                  description:
                    "Indicates if the delete should be a cascading delete (which deletes all resources dependent on the credential as well as the credential) or not. If false will fail if there are any resources relying on the credential",
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--password",
                  description:
                    "The current password for the credential and user with access to the data source. This is required if the requester is not the account owner",
                  args: { name: "password" },
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
              description: "List catalog credentials",
              options: [
                {
                  name: "--database-name",
                  description: "The name of the database containing the schema",
                  args: { name: "database-name" },
                  isRequired: true,
                },
                {
                  name: ["--account", "-n"],
                  description: "Name of the Data Lake Analytics account",
                  args: { name: "account" },
                },
                {
                  name: "--count",
                  description:
                    "The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true",
                  args: { name: "count" },
                },
                {
                  name: "--filter",
                  description: "OData filter. Optional",
                  args: { name: "filter" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--orderby",
                  description:
                    'OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you\'d like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional',
                  args: { name: "orderby" },
                },
                {
                  name: "--select",
                  description:
                    "OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional",
                  args: { name: "select" },
                },
                {
                  name: "--skip",
                  description:
                    "The number of items to skip over before returning elements",
                  args: { name: "skip" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--top",
                  description: "Maximum number of items to return",
                  args: { name: "top" },
                },
              ],
            },
            {
              name: "show",
              description: "Retrieve a catalog credential",
              options: [
                {
                  name: "--credential-name",
                  description: "The name of the credential",
                  args: { name: "credential-name" },
                  isRequired: true,
                },
                {
                  name: "--database-name",
                  description: "The name of the database containing the schema",
                  args: { name: "database-name" },
                  isRequired: true,
                },
                {
                  name: ["--account", "-n"],
                  description: "Name of the Data Lake Analytics account",
                  args: { name: "account" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
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
                "Update a catalog credential for use with an external data source",
              options: [
                {
                  name: "--credential-name",
                  description: "The name of the credential to update",
                  args: { name: "credential-name" },
                  isRequired: true,
                },
                {
                  name: "--database-name",
                  description:
                    "The name of the database in which the credential exists",
                  args: { name: "database-name" },
                  isRequired: true,
                },
                {
                  name: "--uri",
                  description: "URI of the external data source",
                  args: { name: "uri" },
                  isRequired: true,
                },
                {
                  name: "--user-name",
                  description:
                    "The user name associated with the credential that will have its password updated",
                  args: { name: "user-name" },
                  isRequired: true,
                },
                {
                  name: ["--account", "-n"],
                  description: "Name of the Data Lake Analytics account",
                  args: { name: "account" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--new-password",
                  description:
                    "New password for the credential user. Will prompt if not given",
                  args: { name: "new-password" },
                },
                {
                  name: ["--password", "-p"],
                  description:
                    "Current password for the credential user. Will prompt if not given",
                  args: { name: "password" },
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
          name: "database",
          description: "Manage Data Lake Analytics catalog databases",
          subcommands: [
            {
              name: "list",
              description:
                "Retrieves the list of databases from the Data Lake Analytics catalog",
              options: [
                {
                  name: ["--account", "-n"],
                  description: "Name of the Data Lake Analytics account",
                  args: { name: "account" },
                },
                {
                  name: "--count",
                  description:
                    "The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true",
                  args: { name: "count" },
                },
                {
                  name: "--filter",
                  description: "OData filter. Optional",
                  args: { name: "filter" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--orderby",
                  description:
                    'OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you\'d like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional',
                  args: { name: "orderby" },
                },
                {
                  name: "--select",
                  description:
                    "OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional",
                  args: { name: "select" },
                },
                {
                  name: "--skip",
                  description:
                    "The number of items to skip over before returning elements",
                  args: { name: "skip" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--top",
                  description: "Maximum number of items to return",
                  args: { name: "top" },
                },
              ],
            },
            {
              name: "show",
              description:
                "Retrieves the specified database from the Data Lake Analytics catalog",
              options: [
                {
                  name: "--database-name",
                  description: "The name of the database",
                  args: { name: "database-name" },
                  isRequired: true,
                },
                {
                  name: ["--account", "-n"],
                  description: "Name of the Data Lake Analytics account",
                  args: { name: "account" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
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
          name: "external-data-source",
          description:
            "Manage Data Lake Analytics catalog external data sources",
          subcommands: [
            {
              name: "list",
              description:
                "Retrieves the list of external data sources from the Data Lake Analytics catalog",
              options: [
                {
                  name: "--database-name",
                  description:
                    "The name of the database containing the external data sources",
                  args: { name: "database-name" },
                  isRequired: true,
                },
                {
                  name: ["--account", "-n"],
                  description: "Name of the Data Lake Analytics account",
                  args: { name: "account" },
                },
                {
                  name: "--count",
                  description:
                    "The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true",
                  args: { name: "count" },
                },
                {
                  name: "--filter",
                  description: "OData filter. Optional",
                  args: { name: "filter" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--orderby",
                  description:
                    'OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you\'d like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional',
                  args: { name: "orderby" },
                },
                {
                  name: "--select",
                  description:
                    "OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional",
                  args: { name: "select" },
                },
                {
                  name: "--skip",
                  description:
                    "The number of items to skip over before returning elements",
                  args: { name: "skip" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--top",
                  description: "Maximum number of items to return",
                  args: { name: "top" },
                },
              ],
            },
            {
              name: "show",
              description:
                "Retrieves the specified external data source from the Data Lake Analytics catalog",
              options: [
                {
                  name: "--database-name",
                  description:
                    "The name of the database containing the external data source",
                  args: { name: "database-name" },
                  isRequired: true,
                },
                {
                  name: "--external-data-source-name",
                  description: "The name of the external data source",
                  args: { name: "external-data-source-name" },
                  isRequired: true,
                },
                {
                  name: ["--account", "-n"],
                  description: "Name of the Data Lake Analytics account",
                  args: { name: "account" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
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
          name: "package",
          description: "Manage Data Lake Analytics catalog packages",
          subcommands: [
            {
              name: "list",
              description:
                "Retrieves the list of packages from the Data Lake Analytics catalog",
              options: [
                {
                  name: "--database-name",
                  description:
                    "The name of the database containing the packages",
                  args: { name: "database-name" },
                  isRequired: true,
                },
                {
                  name: "--schema-name",
                  description: "The name of the schema containing the packages",
                  args: { name: "schema-name" },
                  isRequired: true,
                },
                {
                  name: ["--account", "-n"],
                  description: "Name of the Data Lake Analytics account",
                  args: { name: "account" },
                },
                {
                  name: "--count",
                  description:
                    "The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true",
                  args: { name: "count" },
                },
                {
                  name: "--filter",
                  description: "OData filter. Optional",
                  args: { name: "filter" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--orderby",
                  description:
                    'OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you\'d like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional',
                  args: { name: "orderby" },
                },
                {
                  name: "--select",
                  description:
                    "OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional",
                  args: { name: "select" },
                },
                {
                  name: "--skip",
                  description:
                    "The number of items to skip over before returning elements",
                  args: { name: "skip" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--top",
                  description: "Maximum number of items to return",
                  args: { name: "top" },
                },
              ],
            },
            {
              name: "show",
              description:
                "Retrieves the specified package from the Data Lake Analytics catalog",
              options: [
                {
                  name: "--database-name",
                  description:
                    "The name of the database containing the package",
                  args: { name: "database-name" },
                  isRequired: true,
                },
                {
                  name: "--package-name",
                  description: "The name of the package",
                  args: { name: "package-name" },
                  isRequired: true,
                },
                {
                  name: "--schema-name",
                  description: "The name of the schema containing the package",
                  args: { name: "schema-name" },
                  isRequired: true,
                },
                {
                  name: ["--account", "-n"],
                  description: "Name of the Data Lake Analytics account",
                  args: { name: "account" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
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
          name: "procedure",
          description: "Manage Data Lake Analytics catalog stored procedures",
          subcommands: [
            {
              name: "list",
              description:
                "Retrieves the list of procedures from the Data Lake Analytics catalog",
              options: [
                {
                  name: "--database-name",
                  description:
                    "The name of the database containing the procedures",
                  args: { name: "database-name" },
                  isRequired: true,
                },
                {
                  name: "--schema-name",
                  description:
                    "The name of the schema containing the procedures",
                  args: { name: "schema-name" },
                  isRequired: true,
                },
                {
                  name: ["--account", "-n"],
                  description: "Name of the Data Lake Analytics account",
                  args: { name: "account" },
                },
                {
                  name: "--count",
                  description:
                    "The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true",
                  args: { name: "count" },
                },
                {
                  name: "--filter",
                  description: "OData filter. Optional",
                  args: { name: "filter" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--orderby",
                  description:
                    'OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you\'d like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional',
                  args: { name: "orderby" },
                },
                {
                  name: "--select",
                  description:
                    "OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional",
                  args: { name: "select" },
                },
                {
                  name: "--skip",
                  description:
                    "The number of items to skip over before returning elements",
                  args: { name: "skip" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--top",
                  description: "Maximum number of items to return",
                  args: { name: "top" },
                },
              ],
            },
            {
              name: "show",
              description:
                "Retrieves the specified procedure from the Data Lake Analytics catalog",
              options: [
                {
                  name: "--database-name",
                  description:
                    "The name of the database containing the procedure",
                  args: { name: "database-name" },
                  isRequired: true,
                },
                {
                  name: "--procedure-name",
                  description: "The name of the procedure",
                  args: { name: "procedure-name" },
                  isRequired: true,
                },
                {
                  name: "--schema-name",
                  description:
                    "The name of the schema containing the procedure",
                  args: { name: "schema-name" },
                  isRequired: true,
                },
                {
                  name: ["--account", "-n"],
                  description: "Name of the Data Lake Analytics account",
                  args: { name: "account" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
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
          name: "schema",
          description: "Manage Data Lake Analytics catalog schemas",
          subcommands: [
            {
              name: "list",
              description:
                "Retrieves the list of schemas from the Data Lake Analytics catalog",
              options: [
                {
                  name: "--database-name",
                  description: "The name of the database containing the schema",
                  args: { name: "database-name" },
                  isRequired: true,
                },
                {
                  name: ["--account", "-n"],
                  description: "Name of the Data Lake Analytics account",
                  args: { name: "account" },
                },
                {
                  name: "--count",
                  description:
                    "The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true",
                  args: { name: "count" },
                },
                {
                  name: "--filter",
                  description: "OData filter. Optional",
                  args: { name: "filter" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--orderby",
                  description:
                    'OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you\'d like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional',
                  args: { name: "orderby" },
                },
                {
                  name: "--select",
                  description:
                    "OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional",
                  args: { name: "select" },
                },
                {
                  name: "--skip",
                  description:
                    "The number of items to skip over before returning elements",
                  args: { name: "skip" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--top",
                  description: "Maximum number of items to return",
                  args: { name: "top" },
                },
              ],
            },
            {
              name: "show",
              description:
                "Retrieves the specified schema from the Data Lake Analytics catalog",
              options: [
                {
                  name: "--database-name",
                  description: "The name of the database containing the schema",
                  args: { name: "database-name" },
                  isRequired: true,
                },
                {
                  name: "--schema-name",
                  description: "The name of the schema",
                  args: { name: "schema-name" },
                  isRequired: true,
                },
                {
                  name: ["--account", "-n"],
                  description: "Name of the Data Lake Analytics account",
                  args: { name: "account" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
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
          name: "table",
          description: "Manage Data Lake Analytics catalog tables",
          subcommands: [
            {
              name: "list",
              description: "List tables in a database or schema",
              options: [
                {
                  name: "--database-name",
                  description: "The name of the database",
                  args: { name: "database-name" },
                  isRequired: true,
                },
                {
                  name: ["--account", "-n"],
                  description: "Name of the Data Lake Analytics account",
                  args: { name: "account" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--schema-name",
                  description: "The schema assocated with the tables to list",
                  args: { name: "schema-name" },
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
                "Retrieves the specified table from the Data Lake Analytics catalog",
              options: [
                {
                  name: "--database-name",
                  description: "The name of the database containing the table",
                  args: { name: "database-name" },
                  isRequired: true,
                },
                {
                  name: "--schema-name",
                  description: "The name of the schema containing the table",
                  args: { name: "schema-name" },
                  isRequired: true,
                },
                {
                  name: "--table-name",
                  description: "The name of the table",
                  args: { name: "table-name" },
                  isRequired: true,
                },
                {
                  name: ["--account", "-n"],
                  description: "Name of the Data Lake Analytics account",
                  args: { name: "account" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
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
          name: "table-partition",
          description: "Manage Data Lake Analytics catalog table partitions",
          subcommands: [
            {
              name: "list",
              description:
                "Retrieves the list of table partitions from the Data Lake Analytics catalog",
              options: [
                {
                  name: "--database-name",
                  description:
                    "The name of the database containing the partitions",
                  args: { name: "database-name" },
                  isRequired: true,
                },
                {
                  name: "--schema-name",
                  description:
                    "The name of the schema containing the partitions",
                  args: { name: "schema-name" },
                  isRequired: true,
                },
                {
                  name: "--table-name",
                  description:
                    "The name of the table containing the partitions",
                  args: { name: "table-name" },
                  isRequired: true,
                },
                {
                  name: ["--account", "-n"],
                  description: "Name of the Data Lake Analytics account",
                  args: { name: "account" },
                },
                {
                  name: "--count",
                  description:
                    "The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true",
                  args: { name: "count" },
                },
                {
                  name: "--filter",
                  description: "OData filter. Optional",
                  args: { name: "filter" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--orderby",
                  description:
                    'OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you\'d like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional',
                  args: { name: "orderby" },
                },
                {
                  name: "--select",
                  description:
                    "OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional",
                  args: { name: "select" },
                },
                {
                  name: "--skip",
                  description:
                    "The number of items to skip over before returning elements",
                  args: { name: "skip" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--top",
                  description: "Maximum number of items to return",
                  args: { name: "top" },
                },
              ],
            },
            {
              name: "show",
              description:
                "Retrieves the specified table partition from the Data Lake Analytics catalog",
              options: [
                {
                  name: "--database-name",
                  description:
                    "The name of the database containing the partition",
                  args: { name: "database-name" },
                  isRequired: true,
                },
                {
                  name: "--partition-name",
                  description: "The name of the table partition",
                  args: { name: "partition-name" },
                  isRequired: true,
                },
                {
                  name: "--schema-name",
                  description:
                    "The name of the schema containing the partition",
                  args: { name: "schema-name" },
                  isRequired: true,
                },
                {
                  name: "--table-name",
                  description: "The name of the table containing the partition",
                  args: { name: "table-name" },
                  isRequired: true,
                },
                {
                  name: ["--account", "-n"],
                  description: "Name of the Data Lake Analytics account",
                  args: { name: "account" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
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
          name: "table-stats",
          description: "Manage Data Lake Analytics catalog table statistics",
          subcommands: [
            {
              name: "list",
              description:
                "List table statistics in a database, table, or schema",
              options: [
                {
                  name: "--database-name",
                  description: "The name of the database",
                  args: { name: "database-name" },
                  isRequired: true,
                },
                {
                  name: ["--account", "-n"],
                  description: "Name of the Data Lake Analytics account",
                  args: { name: "account" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--schema-name",
                  description: "The schema associated with the tables to list",
                  args: { name: "schema-name" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--table-name",
                  description:
                    "The table to list statistics for. --schema-name must also be specified",
                  args: { name: "table-name" },
                },
              ],
            },
            {
              name: "show",
              description:
                "Retrieves the specified table statistics from the Data Lake Analytics catalog",
              options: [
                {
                  name: "--database-name",
                  description:
                    "The name of the database containing the statistics",
                  args: { name: "database-name" },
                  isRequired: true,
                },
                {
                  name: "--schema-name",
                  description:
                    "The name of the schema containing the statistics",
                  args: { name: "schema-name" },
                  isRequired: true,
                },
                {
                  name: "--statistics-name",
                  description: "The name of the table statistics",
                  args: { name: "statistics-name" },
                  isRequired: true,
                },
                {
                  name: "--table-name",
                  description:
                    "The name of the table containing the statistics",
                  args: { name: "table-name" },
                  isRequired: true,
                },
                {
                  name: ["--account", "-n"],
                  description: "Name of the Data Lake Analytics account",
                  args: { name: "account" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
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
          name: "table-type",
          description: "Manage Data Lake Analytics catalog table types",
          subcommands: [
            {
              name: "list",
              description:
                "Retrieves the list of table types from the Data Lake Analytics catalog",
              options: [
                {
                  name: "--database-name",
                  description:
                    "The name of the database containing the table types",
                  args: { name: "database-name" },
                  isRequired: true,
                },
                {
                  name: "--schema-name",
                  description:
                    "The name of the schema containing the table types",
                  args: { name: "schema-name" },
                  isRequired: true,
                },
                {
                  name: ["--account", "-n"],
                  description: "Name of the Data Lake Analytics account",
                  args: { name: "account" },
                },
                {
                  name: "--count",
                  description:
                    "The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true",
                  args: { name: "count" },
                },
                {
                  name: "--filter",
                  description: "OData filter. Optional",
                  args: { name: "filter" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--orderby",
                  description:
                    'OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you\'d like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional',
                  args: { name: "orderby" },
                },
                {
                  name: "--select",
                  description:
                    "OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional",
                  args: { name: "select" },
                },
                {
                  name: "--skip",
                  description:
                    "The number of items to skip over before returning elements",
                  args: { name: "skip" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--top",
                  description: "Maximum number of items to return",
                  args: { name: "top" },
                },
              ],
            },
            {
              name: "show",
              description:
                "Retrieves the specified table type from the Data Lake Analytics catalog",
              options: [
                {
                  name: "--database-name",
                  description:
                    "The name of the database containing the table type",
                  args: { name: "database-name" },
                  isRequired: true,
                },
                {
                  name: "--schema-name",
                  description:
                    "The name of the schema containing the table type",
                  args: { name: "schema-name" },
                  isRequired: true,
                },
                {
                  name: "--table-type-name",
                  description: "The name of the table type to retrieve",
                  args: { name: "table-type-name" },
                  isRequired: true,
                },
                {
                  name: ["--account", "-n"],
                  description: "Name of the Data Lake Analytics account",
                  args: { name: "account" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
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
          name: "tvf",
          description:
            "Manage Data Lake Analytics catalog table valued functions",
          subcommands: [
            {
              name: "list",
              description:
                "List table valued functions in a database or schema",
              options: [
                {
                  name: "--database-name",
                  description: "The name of the database",
                  args: { name: "database-name" },
                  isRequired: true,
                },
                {
                  name: ["--account", "-n"],
                  description: "Name of the Data Lake Analytics account",
                  args: { name: "account" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--schema-name",
                  description:
                    "The name of the schema assocated with table valued functions to list",
                  args: { name: "schema-name" },
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
                "Retrieves the specified table valued function from the Data Lake Analytics catalog",
              options: [
                {
                  name: "--database-name",
                  description:
                    "The name of the database containing the table valued function",
                  args: { name: "database-name" },
                  isRequired: true,
                },
                {
                  name: "--schema-name",
                  description:
                    "The name of the schema containing the table valued function",
                  args: { name: "schema-name" },
                  isRequired: true,
                },
                {
                  name: "--table-valued-function-name",
                  description: "The name of the tableValuedFunction",
                  args: { name: "table-valued-function-name" },
                  isRequired: true,
                },
                {
                  name: ["--account", "-n"],
                  description: "Name of the Data Lake Analytics account",
                  args: { name: "account" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
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
          name: "view",
          description: "Manage Data Lake Analytics catalog views",
          subcommands: [
            {
              name: "list",
              description: "List views in a database or schema",
              options: [
                {
                  name: "--database-name",
                  description: "The name of the database",
                  args: { name: "database-name" },
                  isRequired: true,
                },
                {
                  name: ["--account", "-n"],
                  description: "Name of the Data Lake Analytics account",
                  args: { name: "account" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--schema-name",
                  description:
                    "The name of the schema associated with the views to list",
                  args: { name: "schema-name" },
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
                "Retrieves the specified view from the Data Lake Analytics catalog",
              options: [
                {
                  name: "--database-name",
                  description: "The name of the database containing the view",
                  args: { name: "database-name" },
                  isRequired: true,
                },
                {
                  name: "--schema-name",
                  description: "The name of the schema containing the view",
                  args: { name: "schema-name" },
                  isRequired: true,
                },
                {
                  name: "--view-name",
                  description: "The name of the view",
                  args: { name: "view-name" },
                  isRequired: true,
                },
                {
                  name: ["--account", "-n"],
                  description: "Name of the Data Lake Analytics account",
                  args: { name: "account" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
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
      name: "job",
      description: "Manage Data Lake Analytics jobs",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel a Data Lake Analytics job",
          options: [
            {
              name: "--job-identity",
              description: "JobInfo ID to cancel",
              args: { name: "job-identity" },
              isRequired: true,
            },
            {
              name: ["--account", "-n"],
              description: "Name of the Data Lake Analytics account",
              args: { name: "account" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
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
          description: "List Data Lake Analytics jobs",
          options: [
            {
              name: ["--account", "-n"],
              description: "Name of the Data Lake Analytics account",
              args: { name: "account" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--name",
              description:
                "A filter which returns jobs only by the specified friendly name",
              args: { name: "name" },
            },
            {
              name: "--pipeline-id",
              description:
                "A filter which returns jobs only containing the specified pipeline_id",
              args: { name: "pipeline-id" },
            },
            {
              name: "--recurrence-id",
              description:
                "A filter which returns jobs only containing the specified recurrence_id",
              args: { name: "recurrence-id" },
            },
            {
              name: "--result",
              description:
                "A filter which returns jobs with only the specified result(s)",
              args: {
                name: "result",
                suggestions: ["Cancelled", "Failed", "None", "Succeeded"],
              },
            },
            {
              name: "--state",
              description:
                "A filter which returns jobs with only the specified state(s)",
              args: {
                name: "state",
                suggestions: [
                  "Accepted",
                  "Compiling",
                  "Ended",
                  "New",
                  "Paused",
                  "Queued",
                  "Running",
                  "Scheduling",
                  "Starting",
                  "WaitingForCapacity",
                ],
              },
            },
            {
              name: "--submitted-after",
              description:
                "A filter which returns jobs only submitted after the specified time, in ISO-8601 format",
              args: { name: "submitted-after" },
            },
            {
              name: "--submitted-before",
              description:
                "A filter which returns jobs only submitted before the specified time, in ISO-8601 format",
              args: { name: "submitted-before" },
            },
            {
              name: "--submitter",
              description:
                "A filter which returns jobs only by the specified submitter",
              args: { name: "submitter" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--top",
              description: "Maximum number of items to return",
              args: { name: "top" },
            },
          ],
        },
        {
          name: "show",
          description: "Get information for a Data Lake Analytics job",
          options: [
            {
              name: "--job-identity",
              description: "JobInfo ID",
              args: { name: "job-identity" },
              isRequired: true,
            },
            {
              name: ["--account", "-n"],
              description: "Name of the Data Lake Analytics account",
              args: { name: "account" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
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
          name: "submit",
          description: "Submit a job to a Data Lake Analytics account",
          options: [
            {
              name: "--job-name",
              description: "Name for the submitted job",
              args: { name: "job-name" },
              isRequired: true,
            },
            {
              name: "--script",
              description:
                "Script to submit. This may be '@{file}' to load from a file",
              args: { name: "script" },
              isRequired: true,
            },
            {
              name: ["--account", "-n"],
              description: "Name of the Data Lake Analytics account",
              args: { name: "account" },
            },
            {
              name: "--compile-mode",
              description:
                "Indicates the type of compilation to be done on this job. Valid values are: 'Semantic' (Only performs semantic checks and necessary sanity checks), 'Full' (full compilation) and 'SingleBox' (Full compilation performed locally)",
              args: {
                name: "compile-mode",
                suggestions: ["Full", "Semantic", "SingleBox"],
              },
            },
            {
              name: "--compile-only",
              description:
                "Indicates that the submission should only build the job and not execute if set to true",
            },
            {
              name: "--degree-of-parallelism",
              description: "The degree of parallelism for the job",
              args: { name: "degree-of-parallelism" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--pipeline-id",
              description: "Job relationship pipeline GUID",
              args: { name: "pipeline-id" },
            },
            {
              name: "--pipeline-name",
              description: "Friendly name of the job relationship pipeline",
              args: { name: "pipeline-name" },
            },
            {
              name: "--pipeline-uri",
              description:
                "Unique pipeline URI which links to the originating service for this pipeline",
              args: { name: "pipeline-uri" },
            },
            {
              name: "--priority",
              description: "The priority of the job",
              args: { name: "priority" },
            },
            {
              name: "--recurrence-id",
              description:
                "Recurrence GUID, unique per activity/script, regardless of iteration. Links different occurrences of the same job together",
              args: { name: "recurrence-id" },
            },
            {
              name: "--recurrence-name",
              description:
                "Friendly recurrence nae for the correlation between jobs",
              args: { name: "recurrence-name" },
            },
            {
              name: "--run-id",
              description: "GUID of the iteration of this pipeline",
              args: { name: "run-id" },
            },
            {
              name: "--runtime-version",
              description: "The runtime version to use",
              args: { name: "runtime-version" },
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
          description: "Wait for a Data Lake Analytics job to finish",
          options: [
            {
              name: "--job-id",
              description: "Job ID to poll for completion",
              args: { name: "job-id" },
              isRequired: true,
            },
            {
              name: ["--account", "-n"],
              description: "Name of the Data Lake Analytics account",
              args: { name: "account" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--max-wait-time-sec",
              description:
                "The maximum amount of time to wait before erroring out. Default value is to never timeout. Any value <= 0 means never timeout",
              args: { name: "max-wait-time-sec" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--wait-interval-sec",
              description:
                "The polling interval between checks for the job status, in seconds",
              args: { name: "wait-interval-sec" },
            },
          ],
        },
        {
          name: "pipeline",
          description: "Manage Data Lake Analytics job pipelines",
          subcommands: [
            {
              name: "list",
              description:
                "List job pipelines in a Data Lake Analytics account",
              options: [
                {
                  name: ["--account", "-n"],
                  description: "Name of the Data Lake Analytics account",
                  args: { name: "account" },
                },
                {
                  name: "--end-date-time",
                  description:
                    "The end date for when to get the list of pipelines. The startDateTime and endDateTime can be no more than 30 days apart",
                  args: { name: "end-date-time" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--start-date-time",
                  description:
                    "The start date for when to get the list of pipelines. The startDateTime and endDateTime can be no more than 30 days apart",
                  args: { name: "start-date-time" },
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
                "Retrieve a job pipeline in a Data Lake Analytics account",
              options: [
                {
                  name: "--pipeline-identity",
                  description: "Pipeline ID",
                  args: { name: "pipeline-identity" },
                  isRequired: true,
                },
                {
                  name: ["--account", "-n"],
                  description: "Name of the Data Lake Analytics account",
                  args: { name: "account" },
                },
                {
                  name: "--end-date-time",
                  description:
                    "The end date for when to get the pipeline and aggregate its data. The startDateTime and endDateTime can be no more than 30 days apart",
                  args: { name: "end-date-time" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--start-date-time",
                  description:
                    "The start date for when to get the pipeline and aggregate its data. The startDateTime and endDateTime can be no more than 30 days apart",
                  args: { name: "start-date-time" },
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
          name: "recurrence",
          description: "Manage Data Lake Analytics job recurrences",
          subcommands: [
            {
              name: "list",
              description:
                "List job recurrences in a Data Lake Analytics account",
              options: [
                {
                  name: ["--account", "-n"],
                  description: "Name of the Data Lake Analytics account",
                  args: { name: "account" },
                },
                {
                  name: "--end-date-time",
                  description:
                    "The end date for when to get the list of recurrences. The startDateTime and endDateTime can be no more than 30 days apart",
                  args: { name: "end-date-time" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--start-date-time",
                  description:
                    "The start date for when to get the list of recurrences. The startDateTime and endDateTime can be no more than 30 days apart",
                  args: { name: "start-date-time" },
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
                "Retrieve a job recurrence in a Data Lake Analytics account",
              options: [
                {
                  name: "--recurrence-identity",
                  description: "Recurrence ID",
                  args: { name: "recurrence-identity" },
                  isRequired: true,
                },
                {
                  name: ["--account", "-n"],
                  description: "Name of the Data Lake Analytics account",
                  args: { name: "account" },
                },
                {
                  name: "--end-date-time",
                  description:
                    "The end date for when to get recurrence and aggregate its data. The startDateTime and endDateTime can be no more than 30 days apart",
                  args: { name: "end-date-time" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--start-date-time",
                  description:
                    "The start date for when to get the recurrence and aggregate its data. The startDateTime and endDateTime can be no more than 30 days apart",
                  args: { name: "start-date-time" },
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
  ],
};

export default completion;
