const completion: Fig.Spec = {
  name: "databox",
  description: "Manage data box",
  subcommands: [
    {
      name: "job",
      description: "Manage data box job",
      subcommands: [
        {
          name: "cancel",
          description: "CancelJob",
          options: [
            {
              name: "--reason",
              description: "Reason for cancellation",
              args: { name: "reason" },
              isRequired: true,
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--job-name", "--name", "-n"],
              description:
                "The name of the job Resource within the specified resource group. job names must be between 3 and 24 characters in length and use any alphanumeric and underscore only",
              args: { name: "job-name" },
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
          name: "create",
          description: "Create a new job with the specified parameters",
          options: [
            {
              name: ["--job-name", "--name", "-n"],
              description:
                "The name of the job Resource within the specified resource group. job names must be between 3 and 24 characters in length and use any alphanumeric and underscore only",
              args: { name: "job-name" },
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
              description: "The sku name",
              args: {
                name: "sku",
                suggestions: [
                  "DataBox",
                  "DataBoxCustomerDisk",
                  "DataBoxDisk",
                  "DataBoxHeavy",
                ],
              },
              isRequired: true,
            },
            {
              name: "--transfer-type",
              description: "Type of the data transfer",
              args: {
                name: "transfer-type",
                suggestions: ["ExportFromAzure", "ImportToAzure"],
              },
              isRequired: true,
            },
            {
              name: "--city",
              description: "Name of the city",
              args: { name: "city" },
            },
            {
              name: "--company-name",
              description: "Name of the company",
              args: { name: "company-name" },
            },
            {
              name: "--contact-name",
              description: "Contact name of the person",
              args: { name: "contact-name" },
            },
            {
              name: "--country",
              description: "Name of the Country",
              args: { name: "country" },
            },
            {
              name: "--data-box-customer-disk",
              description:
                'Customer disk job details. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "data-box-customer-disk" },
            },
            {
              name: "--email-list",
              description:
                'List of Email-ids to be notified about job progress. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "email-list" },
            },
            {
              name: "--expected-data-size",
              description:
                "The expected size of the data, which needs to be transferred in this job, in terabytes",
              args: { name: "expected-data-size" },
            },
            {
              name: "--identity",
              description:
                'Msi identity of the resource Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "identity" },
            },
            {
              name: "--kek-identity",
              description:
                'Managed identity properties used for key encryption. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "kek-identity" },
            },
            {
              name: "--kek-type",
              description: "Type of encryption key used for key encryption",
              args: {
                name: "kek-type",
                suggestions: ["CustomerManaged", "MicrosoftManaged"],
              },
            },
            {
              name: "--kek-url",
              description:
                "Key encryption key. It is required in case of Customer managed KekType",
              args: { name: "kek-url" },
            },
            {
              name: "--kek-vault-resource-id",
              description:
                "Kek vault resource id. It is required in case of Customer managed KekType",
              args: { name: "kek-vault-resource-id" },
            },
            {
              name: ["--location", "-l"],
              description:
                "The location of the resource. This will be one of the supported and registered Azure Regions (e.g. West US, East US, Southeast Asia, etc.). The region of a resource cannot be changed once it is created, but if an identical region is specified on update the request will succeed. When not specified, the location of the resource group will be used",
              args: { name: "location" },
            },
            {
              name: "--mobile",
              description: "Mobile number of the contact person",
              args: { name: "mobile" },
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
              name: "--phone",
              description: "Phone number of the contact person",
              args: { name: "phone" },
            },
            {
              name: "--postal-code",
              description: "Postal code",
              args: { name: "postal-code" },
            },
            {
              name: "--resource-group-for-managed-disk",
              description: "Resource Group Id of the compute disks",
              args: { name: "resource-group-for-managed-disk" },
            },
            {
              name: "--staging-storage-account",
              description:
                "Resource Id of the storage account that can be used to copy the vhd for staging",
              args: { name: "staging-storage-account" },
            },
            {
              name: "--state-or-province",
              description: "Name of the State or Province",
              args: { name: "state-or-province" },
            },
            {
              name: "--storage-account",
              description:
                'Space-separated list of the destination storage account. It can be the name or resource ID of storage account. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "storage-account" },
            },
            {
              name: "--street-address1",
              description: "Street Address line 1",
              args: { name: "street-address1" },
            },
            {
              name: "--street-address2",
              description: "Street Address line 2",
              args: { name: "street-address2" },
            },
            {
              name: "--street-address3",
              description: "Street Address line 3",
              args: { name: "street-address3" },
            },
            {
              name: "--tags",
              description:
                'The list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tags" },
            },
            {
              name: "--transfer-all-blobs",
              description:
                "To indicate if all Azure blobs have to be transferred",
            },
            {
              name: "--transfer-all-files",
              description:
                "To indicate if all Azure files have to be transferred",
            },
            {
              name: "--transfer-configuration-type",
              description: "Type of the configuration for transfer",
              args: {
                name: "transfer-configuration-type",
                suggestions: ["TransferAll", "TransferUsingFilter"],
              },
            },
            {
              name: "--transfer-filter-details",
              description:
                "Path to the map of filter type and the details to filter. Support json-file and yaml-file",
              args: { name: "transfer-filter-details" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a job",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--job-name", "--name", "-n"],
              description:
                "The name of the job Resource within the specified resource group. job names must be between 3 and 24 characters in length and use any alphanumeric and underscore only",
              args: { name: "job-name" },
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
          description: "List all the jobs available under the subscription",
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
          name: "list-credential",
          description:
            "This method gets the unencrypted secrets related to the job",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--job-name", "--name", "-n"],
              description:
                "The name of the job Resource within the specified resource group. job names must be between 3 and 24 characters in length and use any alphanumeric and underscore only",
              args: { name: "job-name" },
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
          name: "mark-devices-shipped",
          description: "Request to mark devices for a given job as shipped",
          options: [
            {
              name: "--deliver-package-details",
              description:
                'Delivery package details Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "deliver-package-details" },
              isRequired: true,
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--job-name", "--name", "-n"],
              description:
                "The name of the job Resource within the specified resource group. job names must be between 3 and 24 characters in length and use any alphanumeric and underscore only",
              args: { name: "job-name" },
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
          description: "Get information about the specified job",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--job-name", "--name", "-n"],
              description:
                "The name of the job Resource within the specified resource group. job names must be between 3 and 24 characters in length and use any alphanumeric and underscore only",
              args: { name: "job-name" },
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
          description: "Update the properties of an existing job",
          options: [
            {
              name: "--city",
              description: "Name of the city",
              args: { name: "city" },
            },
            {
              name: "--company-name",
              description: "Name of the company",
              args: { name: "company-name" },
            },
            {
              name: "--contact-name",
              description: "Contact name of the person",
              args: { name: "contact-name" },
            },
            {
              name: "--country",
              description: "Name of the Country",
              args: { name: "country" },
            },
            {
              name: "--email-list",
              description:
                'List of Email-ids to be notified about job progress. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "email-list" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--job-name", "--name", "-n"],
              description:
                "The name of the job Resource within the specified resource group. job names must be between 3 and 24 characters in length and use any alphanumeric and underscore only",
              args: { name: "job-name" },
            },
            {
              name: "--kek-identity",
              description:
                'Managed identity properties used for key encryption. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "kek-identity" },
            },
            {
              name: "--kek-type",
              description: "Type of encryption key used for key encryption",
              args: {
                name: "kek-type",
                suggestions: ["CustomerManaged", "MicrosoftManaged"],
              },
            },
            {
              name: "--kek-url",
              description:
                "Key encryption key. It is required in case of Customer managed KekType",
              args: { name: "kek-url" },
            },
            {
              name: "--kek-vault-resource-id",
              description:
                "Kek vault resource id. It is required in case of Customer managed KekType",
              args: { name: "kek-vault-resource-id" },
            },
            {
              name: "--mobile",
              description: "Mobile number of the contact person",
              args: { name: "mobile" },
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
              name: "--phone",
              description: "Phone number of the contact person",
              args: { name: "phone" },
            },
            {
              name: "--postal-code",
              description: "Postal code",
              args: { name: "postal-code" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--state-or-province",
              description: "Name of the State or Province",
              args: { name: "state-or-province" },
            },
            {
              name: "--street-address1",
              description: "Street Address line 1",
              args: { name: "street-address1" },
            },
            {
              name: "--street-address2",
              description: "Street Address line 2",
              args: { name: "street-address2" },
            },
            {
              name: "--street-address3",
              description: "Street Address line 3",
              args: { name: "street-address3" },
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
};

export default completion;
