const completion: Fig.Spec = {
  name: "billing",
  description: "Manage Azure Billing",
  subcommands: [
    {
      name: "account",
      description: "Billing account",
      subcommands: [
        {
          name: "list",
          description: "List the billing accounts that a user has access to",
          options: [
            {
              name: "--expand",
              description:
                "May be used to expand the soldTo, invoice sections and billing profiles",
              args: { name: "expand" },
            },
          ],
        },
        {
          name: "show",
          description: "Get a billing account by its ID",
          options: [
            {
              name: ["--name", "-n"],
              description: "The ID that uniquely identifies a billing account",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--expand",
              description:
                "May be used to expand the soldTo, invoice sections and billing profiles",
              args: { name: "expand" },
            },
          ],
        },
        {
          name: "update",
          description:
            "Update the properties of a billing account. Currently, displayName and address can be updated. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement",
          options: [
            {
              name: ["--name", "-n"],
              description: "The ID that uniquely identifies a billing account",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--billing-profiles-value",
              description:
                "The billing profiles associated with the billing account. Expected value: json-string/@json-file",
              args: { name: "billing-profiles-value" },
            },
            {
              name: "--departments",
              description:
                "The departments associated to the enrollment. Expected value: json-string/@json-file",
              args: { name: "departments" },
            },
            {
              name: "--display-name",
              description: "The billing account name",
              args: { name: "display-name" },
            },
            {
              name: "--enrollment-accounts",
              description:
                "The accounts associated to the enrollment. Expected value: json-string/@json-file",
              args: { name: "enrollment-accounts" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--sold-to",
              description:
                "The address of the individual or organization that is responsible for the billing account",
              args: { name: "sold-to" },
            },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the billing account is met",
          options: [
            {
              name: ["--name", "-n"],
              description: "The ID that uniquely identifies a billing account",
              args: { name: "name" },
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
              name: "--expand",
              description:
                "May be used to expand the soldTo, invoice sections and billing profiles",
              args: { name: "expand" },
            },
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
      name: "agreement",
      description: "Display billing agreement",
      subcommands: [
        {
          name: "list",
          description: "List the agreements for a billing account",
          options: [
            {
              name: "--account-name",
              description: "The ID that uniquely identifies a billing account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: "--expand",
              description: "May be used to expand the participants",
              args: { name: "expand" },
            },
          ],
        },
        {
          name: "show",
          description: "Get an agreement by ID",
          options: [
            {
              name: "--account-name",
              description: "The ID that uniquely identifies a billing account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The ID that uniquely identifies an agreement",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--expand",
              description: "May be used to expand the participants",
              args: { name: "expand" },
            },
          ],
        },
      ],
    },
    {
      name: "balance",
      description: "Billing balance",
      subcommands: [
        {
          name: "show",
          description:
            "The available credit balance for a billing profile. This is the balance that can be used for pay now to settle due or past due invoices. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement",
          options: [
            {
              name: "--account-name",
              description: "The ID that uniquely identifies a billing account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: "--profile-name",
              description: "The ID that uniquely identifies a billing profile",
              args: { name: "profile-name" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "customer",
      description: "Billing customer",
      subcommands: [
        {
          name: "list",
          description:
            "List the customers that are billed to a billing account. The operation is supported only for billing accounts with agreement type Microsoft Partner Agreement",
          options: [
            {
              name: "--account-name",
              description: "The ID that uniquely identifies a billing account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: "--filter",
              description: "May be used to filter the list of customers",
              args: { name: "filter" },
            },
            {
              name: "--profile-name",
              description: "The ID that uniquely identifies a billing profile",
              args: { name: "profile-name" },
            },
            {
              name: "--search",
              description:
                "Used for searching customers by their name. Any customer with name containing the search text will be included in the response",
              args: { name: "search" },
            },
          ],
        },
        {
          name: "show",
          description:
            "Get a customer by its ID. The operation is supported only for billing accounts with agreement type Microsoft Partner Agreement",
          options: [
            {
              name: "--account-name",
              description: "The ID that uniquely identifies a billing account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--customer-name", "--name", "-n"],
              description: "The ID that uniquely identifies a customer",
              args: { name: "customer-name" },
              isRequired: true,
            },
            {
              name: "--expand",
              description:
                "May be used to expand enabledAzurePlans and resellers",
              args: { name: "expand" },
            },
          ],
        },
      ],
    },
    {
      name: "enrollment-account",
      description: "Get enrollment accounts",
      subcommands: [
        {
          name: "list",
          description: "Lists the enrollment accounts the caller has access to",
        },
        {
          name: "show",
          description: "Gets a enrollment account by name",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the enrollment account",
              args: { name: "name" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "instruction",
      description: "Manage billing instruction",
      subcommands: [
        {
          name: "create",
          description:
            "Create an instruction. These are custom billing instructions and are only applicable for certain customers",
          options: [
            {
              name: "--account-name",
              description: "The ID that uniquely identifies a billing account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Instruction Name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--profile-name",
              description: "The ID that uniquely identifies a billing profile",
              args: { name: "profile-name" },
              isRequired: true,
            },
            {
              name: "--amount",
              description: "The amount budgeted for this billing instruction",
              args: { name: "amount" },
            },
            {
              name: "--creation-date",
              description: "The date this billing instruction was created",
              args: { name: "creation-date" },
            },
            {
              name: "--end-date",
              description:
                "The date this billing instruction is no longer in effect",
              args: { name: "end-date" },
            },
            {
              name: "--start-date",
              description: "The date this billing instruction goes into effect",
              args: { name: "start-date" },
            },
          ],
        },
        {
          name: "list",
          description: "List the instructions by billing profile id",
          options: [
            {
              name: "--account-name",
              description: "The ID that uniquely identifies a billing account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: "--profile-name",
              description: "The ID that uniquely identifies a billing profile",
              args: { name: "profile-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description:
            "Show the instruction by name. These are custom billing instructions and are only applicable for certain customers",
          options: [
            {
              name: "--account-name",
              description: "The ID that uniquely identifies a billing account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Instruction Name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--profile-name",
              description: "The ID that uniquely identifies a billing profile",
              args: { name: "profile-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update",
          description:
            "Update an instruction. These are custom billing instructions and are only applicable for certain customers",
          options: [
            {
              name: "--account-name",
              description: "The ID that uniquely identifies a billing account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Instruction Name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--profile-name",
              description: "The ID that uniquely identifies a billing profile",
              args: { name: "profile-name" },
              isRequired: true,
            },
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: "--amount",
              description: "The amount budgeted for this billing instruction",
              args: { name: "amount" },
            },
            {
              name: "--creation-date",
              description: "The date this billing instruction was created",
              args: { name: "creation-date" },
            },
            {
              name: "--end-date",
              description:
                "The date this billing instruction is no longer in effect",
              args: { name: "end-date" },
            },
            {
              name: "--force-string",
              description:
                "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
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
              name: "--start-date",
              description: "The date this billing instruction goes into effect",
              args: { name: "start-date" },
            },
          ],
        },
      ],
    },
    {
      name: "invoice",
      description: "Get billing invoices for a subscription",
      subcommands: [
        {
          name: "download",
          description: "Get URL to download invoice",
          options: [
            {
              name: "--account-name",
              description: "The ID that uniquely identifies a billing account",
              args: { name: "account-name" },
            },
            {
              name: "--download-token",
              description:
                "The download token with document source and document ID",
              args: { name: "download-token" },
            },
            {
              name: "--download-urls",
              description:
                "Space-separated list of download urls for individual",
              args: { name: "download-urls" },
            },
            {
              name: "--invoice-name",
              description: "The ID that uniquely identifies an invoice",
              args: { name: "invoice-name" },
            },
          ],
        },
        {
          name: "list",
          description: "List the invoices for a subscription",
          options: [
            {
              name: "--period-end-date",
              description:
                "The end date to fetch the invoices. The date should be specified in MM-DD-YYYY format",
              args: { name: "period-end-date" },
              isRequired: true,
            },
            {
              name: "--period-start-date",
              description:
                "The start date to fetch the invoices. The date should be specified in MM-DD-YYYY format",
              args: { name: "period-start-date" },
              isRequired: true,
            },
            {
              name: "--account-name",
              description: "The ID that uniquely identifies a billing account",
              args: { name: "account-name" },
            },
            {
              name: "--profile-name",
              description: "The ID that uniquely identifies a billing profile",
              args: { name: "profile-name" },
            },
          ],
        },
        {
          name: "show",
          description:
            "Get an invoice. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement",
          options: [
            {
              name: ["--name", "-n"],
              description: "The ID that uniquely identifies an invoice",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--account-name",
              description: "The ID that uniquely identifies a billing account",
              args: { name: "account-name" },
            },
            {
              name: "--by-subscription",
              description:
                "When provided, it must work with --invoice-name to get an invoice by subscription ID and invoice ID",
              args: { name: "by-subscription" },
            },
          ],
        },
        {
          name: "section",
          description: "Billing invoice section",
          subcommands: [
            {
              name: "create",
              description:
                "Creates or updates an invoice section. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement",
              options: [
                {
                  name: "--account-name",
                  description:
                    "The ID that uniquely identifies a billing account",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--invoice-section-name", "--name", "-n"],
                  description:
                    "The ID that uniquely identifies an invoice section",
                  args: { name: "invoice-section-name" },
                  isRequired: true,
                },
                {
                  name: "--profile-name",
                  description:
                    "The ID that uniquely identifies a billing profile",
                  args: { name: "profile-name" },
                  isRequired: true,
                },
                {
                  name: "--display-name",
                  description: "The name of the invoice section",
                  args: { name: "display-name" },
                },
                {
                  name: "--labels",
                  description:
                    "Dictionary of metadata associated with the invoice section. Expect value: KEY1=VALUE1 KEY2=VALUE2",
                  args: { name: "labels" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
              ],
            },
            {
              name: "list",
              description:
                "List the invoice sections that a user has access to. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement",
              options: [
                {
                  name: "--account-name",
                  description:
                    "The ID that uniquely identifies a billing account",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: "--profile-name",
                  description:
                    "The ID that uniquely identifies a billing profile",
                  args: { name: "profile-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description:
                "Get an invoice section by its ID. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement",
              options: [
                {
                  name: "--account-name",
                  description:
                    "The ID that uniquely identifies a billing account",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--invoice-section-name", "--name", "-n"],
                  description:
                    "The ID that uniquely identifies an invoice section",
                  args: { name: "invoice-section-name" },
                  isRequired: true,
                },
                {
                  name: "--profile-name",
                  description:
                    "The ID that uniquely identifies a billing profile",
                  args: { name: "profile-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "update",
              description:
                "Creates or updates an invoice section. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement",
              options: [
                {
                  name: "--account-name",
                  description:
                    "The ID that uniquely identifies a billing account",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--invoice-section-name", "--name", "-n"],
                  description:
                    "The ID that uniquely identifies an invoice section",
                  args: { name: "invoice-section-name" },
                  isRequired: true,
                },
                {
                  name: "--profile-name",
                  description:
                    "The ID that uniquely identifies a billing profile",
                  args: { name: "profile-name" },
                  isRequired: true,
                },
                {
                  name: "--display-name",
                  description: "The name of the invoice section",
                  args: { name: "display-name" },
                },
                {
                  name: "--labels",
                  description:
                    "Dictionary of metadata associated with the invoice section. Expect value: KEY1=VALUE1 KEY2=VALUE2",
                  args: { name: "labels" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
              ],
            },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition of the billing invoice section is met",
              options: [
                {
                  name: "--account-name",
                  description:
                    "The ID that uniquely identifies a billing account",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--invoice-section-name", "--name", "-n"],
                  description:
                    "The ID that uniquely identifies an invoice section",
                  args: { name: "invoice-section-name" },
                  isRequired: true,
                },
                {
                  name: "--profile-name",
                  description:
                    "The ID that uniquely identifies a billing profile",
                  args: { name: "profile-name" },
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
                {
                  name: "--exists",
                  description: "Wait until the resource exists",
                },
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
      ],
    },
    {
      name: "period",
      description: "Get billing periods for a subscription",
      subcommands: [
        {
          name: "list",
          description:
            "Lists the available billing periods for a subscription in reverse chronological order",
          options: [
            {
              name: "--filter",
              description:
                "May be used to filter billing periods by billingPeriodEndDate. The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'",
              args: { name: "filter" },
            },
            {
              name: "--skiptoken",
              description:
                "Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls",
              args: { name: "skiptoken" },
            },
            {
              name: "--top",
              description:
                "May be used to limit the number of results to the most recent N billing periods",
              args: { name: "top" },
            },
          ],
        },
        {
          name: "show",
          description: "Gets a named billing period",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "Name of the billing period. Run the az billing period list command to list the name of billing period",
              args: { name: "name" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "permission",
      description: "List billing permissions",
      subcommands: [
        {
          name: "list",
          description:
            "List the billing permissions the caller has on a billing account",
          options: [
            {
              name: "--account-name",
              description: "The ID that uniquely identifies a billing account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: "--customer-name",
              description: "The ID that uniquely identifies a customer",
              args: { name: "customer-name" },
            },
            {
              name: "--invoice-section-name",
              description: "The ID that uniquely identifies an invoice section",
              args: { name: "invoice-section-name" },
            },
            {
              name: "--profile-name",
              description: "The ID that uniquely identifies a billing profile",
              args: { name: "profile-name" },
            },
          ],
        },
      ],
    },
    {
      name: "policy",
      description: "Billing policy",
      subcommands: [
        {
          name: "show",
          description:
            'Show the policies for a customer or for a billing profile. This operation is supported only for billing accounts with agreement type Microsoft Partner Agreement."',
          options: [
            {
              name: "--account-name",
              description: "The ID that uniquely identifies a billing account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: "--customer-name",
              description: "The ID that uniquely identifies a customer",
              args: { name: "customer-name" },
            },
            {
              name: "--profile-name",
              description: "The ID that uniquely identifies a billing profile",
              args: { name: "profile-name" },
            },
          ],
        },
        {
          name: "update",
          description:
            "Update the policies for a billing profile. This operation is supported only for billing accounts with agreement type Microsoft Customer Agreement",
          options: [
            {
              name: "--account-name",
              description: "The ID that uniquely identifies a billing account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: "--customer-name",
              description: "The ID that uniquely identifies a customer",
              args: { name: "customer-name" },
            },
            {
              name: "--marketplace-purchases",
              description:
                "The policy that controls whether Azure marketplace purchases are allowed for a billing profile",
              args: {
                name: "marketplace-purchases",
                suggestions: ["AllAllowed", "NotAllowed", "OnlyFreeAllowed"],
              },
            },
            {
              name: "--profile-name",
              description: "The ID that uniquely identifies a billing profile",
              args: { name: "profile-name" },
            },
            {
              name: "--reservation-purchases",
              description:
                "The policy that controls whether Azure reservation purchases are allowed for a billing profile",
              args: {
                name: "reservation-purchases",
                suggestions: ["Allowed", "NotAllowed"],
              },
            },
            {
              name: "--view-charges",
              description:
                "The policy that controls whether users with Azure RBAC access to a subscription can view its charges",
              args: {
                name: "view-charges",
                suggestions: ["Allowed", "NotAllowed"],
              },
            },
          ],
        },
      ],
    },
    {
      name: "product",
      description: "Billing product",
      subcommands: [
        {
          name: "list",
          description:
            "List the products for a billing account. These don't include products billed based on usage. The operation is supported for billing accounts with agreement type Microsoft Customer Agreement or Microsoft Partner Agreement",
          options: [
            {
              name: "--account-name",
              description: "The ID that uniquely identifies a billing account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: "--customer-name",
              description: "The ID that uniquely identifies a customer",
              args: { name: "customer-name" },
            },
            {
              name: "--filter",
              description:
                "May be used to filter by product type. The filter supports 'eq', 'lt', 'gt', 'le', 'ge', and 'and'. It does not currently support 'ne', 'or', or 'not'. Tag filter is a key value pair string where key and value are separated by a colon (:)",
              args: { name: "filter" },
            },
            {
              name: "--invoice-section-name",
              description: "The ID that uniquely identifies an invoice section",
              args: { name: "invoice-section-name" },
            },
            {
              name: "--profile-name",
              description: "The ID that uniquely identifies a billing profile",
              args: { name: "profile-name" },
            },
          ],
        },
        {
          name: "move",
          description:
            "Moves a product's charges to a new invoice section. The new invoice section must belong to the same billing profile as the existing invoice section. This operation is supported only for products that are purchased with a recurring charge and for billing accounts with agreement type Microsoft Customer Agreement",
          options: [
            {
              name: "--account-name",
              description: "The ID that uniquely identifies a billing account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--product-name", "--name", "-n"],
              description: "The ID that uniquely identifies a product",
              args: { name: "product-name" },
              isRequired: true,
            },
            {
              name: "--destination-invoice-section-id",
              description: "The destination invoice section id",
              args: { name: "destination-invoice-section-id" },
            },
          ],
        },
        {
          name: "show",
          description:
            "Get a product by ID. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement",
          options: [
            {
              name: "--account-name",
              description: "The ID that uniquely identifies a billing account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--product-name", "--name", "-n"],
              description: "The ID that uniquely identifies a product",
              args: { name: "product-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update",
          description:
            "Update the properties of a Product. Currently, auto renew can be updated. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement",
          options: [
            {
              name: "--account-name",
              description: "The ID that uniquely identifies a billing account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--product-name", "--name", "-n"],
              description: "The ID that uniquely identifies a product",
              args: { name: "product-name" },
              isRequired: true,
            },
            {
              name: "--auto-renew",
              description:
                "Indicates whether auto renewal is turned on or off for a product",
              args: { name: "auto-renew", suggestions: ["Off", "On"] },
            },
            {
              name: "--billing-frequency",
              description: "The frequency at which the product will be billed",
              args: {
                name: "billing-frequency",
                suggestions: ["Monthly", "OneTime", "UsageBased"],
              },
            },
            {
              name: "--status",
              description: "The current status of the product",
              args: {
                name: "status",
                suggestions: [
                  "Active",
                  "AutoRenew",
                  "Cancelled",
                  "Disabled",
                  "Expired",
                  "Expiring",
                  "Inactive",
                  "PastDue",
                ],
              },
            },
          ],
        },
        {
          name: "validate-move",
          description:
            "Validate if a product's charges can be moved to a new invoice section. This operation is supported only for products that are purchased with a recurring charge and for billing accounts with agreement type Microsoft Customer Agreement",
          options: [
            {
              name: "--account-name",
              description: "The ID that uniquely identifies a billing account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--product-name", "--name", "-n"],
              description: "The ID that uniquely identifies a product",
              args: { name: "product-name" },
              isRequired: true,
            },
            {
              name: "--destination-invoice-section-id",
              description: "The destination invoice section id",
              args: { name: "destination-invoice-section-id" },
            },
          ],
        },
      ],
    },
    {
      name: "profile",
      description: "Manage billing profile of billing account",
      subcommands: [
        {
          name: "create",
          description:
            "Creates or updates a billing profile. The operation is supported for billing accounts with agreement type Microsoft Customer Agreement or Microsoft Partner Agreement",
          options: [
            {
              name: "--account-name",
              description: "The ID that uniquely identifies a billing account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The ID that uniquely identifies a billing profile",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--bill-to",
              description: "Billing address",
              args: { name: "bill-to" },
            },
            {
              name: "--display-name",
              description: "The name of the billing profile",
              args: { name: "display-name" },
            },
            {
              name: "--enabled-azure-plans",
              description: "Information about the enabled azure plans",
              args: { name: "enabled-azure-plans" },
            },
            {
              name: "--invoice-email-opt-in",
              description:
                "Flag controlling whether the invoices for the billing profile are sent through email",
              args: {
                name: "invoice-email-opt-in",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--invoice-sections-value",
              description:
                "The invoice sections associated to the billing profile. Expected value: json-string/@json-file",
              args: { name: "invoice-sections-value" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--po-number",
              description:
                "The purchase order name that will appear on the invoices generated for the billing profile",
              args: { name: "po-number" },
            },
          ],
        },
        {
          name: "list",
          description:
            "List the billing profiles that a user has access to. The operation is supported for billing accounts with agreement type Microsoft Customer Agreement or Microsoft Partner Agreement",
          options: [
            {
              name: "--account-name",
              description: "The ID that uniquely identifies a billing account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: "--expand",
              description: "May be used to expand the invoice sections",
              args: { name: "expand" },
            },
          ],
        },
        {
          name: "show",
          description:
            "Get a billing profile by its ID. The operation is supported for billing accounts with agreement type Microsoft Customer Agreement or Microsoft Partner Agreement",
          options: [
            {
              name: "--account-name",
              description: "The ID that uniquely identifies a billing account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The ID that uniquely identifies a billing profile",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--expand",
              description: "May be used to expand the invoice sections",
              args: { name: "expand" },
            },
          ],
        },
        {
          name: "update",
          description:
            "Creates or updates a billing profile. The operation is supported for billing accounts with agreement type Microsoft Customer Agreement or Microsoft Partner Agreement",
          options: [
            {
              name: "--account-name",
              description: "The ID that uniquely identifies a billing account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The ID that uniquely identifies a billing profile",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--bill-to",
              description: "Billing address",
              args: { name: "bill-to" },
            },
            {
              name: "--display-name",
              description: "The name of the billing profile",
              args: { name: "display-name" },
            },
            {
              name: "--enabled-azure-plans",
              description: "Information about the enabled azure plans",
              args: { name: "enabled-azure-plans" },
            },
            {
              name: "--invoice-email-opt-in",
              description:
                "Flag controlling whether the invoices for the billing profile are sent through email",
              args: {
                name: "invoice-email-opt-in",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--invoice-sections-value",
              description:
                "The invoice sections associated to the billing profile. Expected value: json-string/@json-file",
              args: { name: "invoice-sections-value" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--po-number",
              description:
                "The purchase order name that will appear on the invoices generated for the billing profile",
              args: { name: "po-number" },
            },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the billing profile is met",
          options: [
            {
              name: "--account-name",
              description: "The ID that uniquely identifies a billing account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The ID that uniquely identifies a billing profile",
              args: { name: "name" },
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
              name: "--expand",
              description: "May be used to expand the invoice sections",
              args: { name: "expand" },
            },
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
      name: "property",
      description: "Billing property",
      subcommands: [
        {
          name: "show",
          description:
            "Get the billing properties for a subscription. This operation is not supported for billing accounts with agreement type Enterprise Agreement",
        },
        {
          name: "update",
          description:
            "Update the billing property of a subscription. Currently, cost center can be updated. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement",
          options: [
            {
              name: "--cost-center",
              description: "The cost center applied to the subscription",
              args: { name: "cost-center" },
            },
          ],
        },
      ],
    },
    {
      name: "role-assignment",
      description: "Billing role-assignment",
      subcommands: [
        {
          name: "delete",
          description:
            "Delete a role assignment for the caller on a billing account. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement",
          options: [
            {
              name: "--account-name",
              description: "The ID that uniquely identifies a billing account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The ID that uniquely identifies a role assignment",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--invoice-section-name",
              description: "The ID that uniquely identifies an invoice section",
              args: { name: "invoice-section-name" },
            },
            {
              name: "--profile-name",
              description: "The ID that uniquely identifies a billing profile",
              args: { name: "profile-name" },
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
            "List the role assignments for the caller on a billing account. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement",
          options: [
            {
              name: "--account-name",
              description: "The ID that uniquely identifies a billing account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: "--invoice-section-name",
              description: "The ID that uniquely identifies an invoice section",
              args: { name: "invoice-section-name" },
            },
            {
              name: "--profile-name",
              description: "The ID that uniquely identifies a billing profile",
              args: { name: "profile-name" },
            },
          ],
        },
        {
          name: "show",
          description:
            "Show the role assignment detail for the caller within different scopes. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement",
          options: [
            {
              name: "--account-name",
              description: "The ID that uniquely identifies a billing account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The ID that uniquely identifies a role assignment",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--invoice-section-name",
              description: "The ID that uniquely identifies an invoice section",
              args: { name: "invoice-section-name" },
            },
            {
              name: "--profile-name",
              description: "The ID that uniquely identifies a billing profile",
              args: { name: "profile-name" },
            },
          ],
        },
      ],
    },
    {
      name: "role-definition",
      description: "Display billing role-definition",
      subcommands: [
        {
          name: "list",
          description:
            "List the role definitions for a billing account. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement",
          options: [
            {
              name: "--account-name",
              description: "The ID that uniquely identifies a billing account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: "--invoice-section-name",
              description: "The ID that uniquely identifies an invoice section",
              args: { name: "invoice-section-name" },
            },
            {
              name: "--profile-name",
              description: "The ID that uniquely identifies a billing profile",
              args: { name: "profile-name" },
            },
          ],
        },
        {
          name: "show",
          description: "Show the role definition details",
          options: [
            {
              name: "--account-name",
              description: "The ID that uniquely identifies a billing account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description:
                "The name that uniquely identifies a role definition",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--invoice-section-name",
              description: "The ID that uniquely identifies an invoice section",
              args: { name: "invoice-section-name" },
            },
            {
              name: "--profile-name",
              description: "The ID that uniquely identifies a billing profile",
              args: { name: "profile-name" },
            },
          ],
        },
      ],
    },
    {
      name: "subscription",
      description: "Billing subscription",
      subcommands: [
        {
          name: "list",
          description:
            "List the subscriptions for a billing account. The operation is supported for billing accounts with agreement type Microsoft Customer Agreement or Microsoft Partner Agreement",
          options: [
            {
              name: "--account-name",
              description: "The ID that uniquely identifies a billing account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: "--customer-name",
              description: "The ID that uniquely identifies a customer",
              args: { name: "customer-name" },
            },
            {
              name: "--invoice-section-name",
              description: "The ID that uniquely identifies an invoice section",
              args: { name: "invoice-section-name" },
            },
            {
              name: "--profile-name",
              description: "The ID that uniquely identifies a billing profile",
              args: { name: "profile-name" },
            },
          ],
        },
        {
          name: "move",
          description:
            "Moves a subscription's charges to a new invoice section. The new invoice section must belong to the same billing profile as the existing invoice section. This operation is supported for billing accounts with agreement type Microsoft Customer Agreement",
          options: [
            {
              name: "--account-name",
              description: "The ID that uniquely identifies a billing account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: "--destination-invoice-section-id",
              description: "The destination invoice section id",
              args: { name: "destination-invoice-section-id" },
              isRequired: true,
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
          ],
        },
        {
          name: "show",
          description:
            "Get a subscription by its ID. The operation is supported for billing accounts with agreement type Microsoft Customer Agreement and Microsoft Partner Agreement",
          options: [
            {
              name: "--account-name",
              description: "The ID that uniquely identifies a billing account",
              args: { name: "account-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update",
          description:
            "Update the properties of a billing subscription. Currently, cost center can be updated. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement",
          options: [
            {
              name: "--account-name",
              description: "The ID that uniquely identifies a billing account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: "--cost-center",
              description: "The cost center applied to the subscription",
              args: { name: "cost-center" },
            },
            {
              name: "--sku-id",
              description: "The sku ID of the Azure plan for the subscription",
              args: { name: "sku-id" },
            },
            {
              name: "--subscription-billing-status",
              description: "The current billing status of the subscription",
              args: {
                name: "subscription-billing-status",
                suggestions: [
                  "Abandoned",
                  "Active",
                  "Deleted",
                  "Inactive",
                  "Warning",
                ],
              },
            },
          ],
        },
        {
          name: "validate-move",
          description:
            "Validate if a subscription's charges can be moved to a new invoice section. This operation is supported for billing accounts with agreement type Microsoft Customer Agreement",
          options: [
            {
              name: "--account-name",
              description: "The ID that uniquely identifies a billing account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: "--destination-invoice-section-id",
              description: "The destination invoice section id",
              args: { name: "destination-invoice-section-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the billing subscription is met",
          options: [
            {
              name: "--account-name",
              description: "The ID that uniquely identifies a billing account",
              args: { name: "account-name" },
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
      name: "transaction",
      description: "Billing transaction",
      subcommands: [
        {
          name: "list",
          description:
            "List the transactions for an invoice. Transactions include purchases, refunds and Azure usage charges",
          options: [
            {
              name: "--account-name",
              description: "The ID that uniquely identifies a billing account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: "--invoice-name",
              description: "The ID that uniquely identifies an invoice",
              args: { name: "invoice-name" },
              isRequired: true,
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
