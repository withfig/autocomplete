const completionSpec: Fig.Spec = {
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
        },
        { name: "show", description: "Get a billing account by its ID" },
        {
          name: "update",
          description:
            "Update the properties of a billing account. Currently, displayName and address can be updated. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement",
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the billing account is met",
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
        },
        { name: "show", description: "Get an agreement by ID" },
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
        },
        {
          name: "show",
          description:
            "Get a customer by its ID. The operation is supported only for billing accounts with agreement type Microsoft Partner Agreement",
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
        { name: "show", description: "Gets a enrollment account by name" },
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
        },
        {
          name: "list",
          description: "List the instructions by billing profile id",
        },
        {
          name: "show",
          description:
            "Show the instruction by name. These are custom billing instructions and are only applicable for certain customers",
        },
        {
          name: "update",
          description:
            "Update an instruction. These are custom billing instructions and are only applicable for certain customers",
        },
      ],
    },
    {
      name: "invoice",
      description: "Get billing invoices for a subscription",
      subcommands: [
        { name: "download", description: "Get URL to download invoice" },
        { name: "list", description: "List the invoices for a subscription" },
        {
          name: "section",
          description: "Billing invoice section",
          subcommands: [
            {
              name: "create",
              description:
                "Creates or updates an invoice section. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement",
            },
            {
              name: "list",
              description:
                "List the invoice sections that a user has access to. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement",
            },
            {
              name: "show",
              description:
                "Get an invoice section by its ID. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement",
            },
            {
              name: "update",
              description:
                "Creates or updates an invoice section. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement",
            },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition of the billing invoice section is met",
            },
          ],
        },
        {
          name: "show",
          description:
            "Get an invoice. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement",
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
        },
        { name: "show", description: "Gets a named billing period" },
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
        },
        {
          name: "update",
          description:
            "Update the policies for a billing profile. This operation is supported only for billing accounts with agreement type Microsoft Customer Agreement",
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
        },
        {
          name: "move",
          description:
            "Moves a product's charges to a new invoice section. The new invoice section must belong to the same billing profile as the existing invoice section. This operation is supported only for products that are purchased with a recurring charge and for billing accounts with agreement type Microsoft Customer Agreement",
        },
        {
          name: "show",
          description:
            "Get a product by ID. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement",
        },
        {
          name: "update",
          description:
            "Update the properties of a Product. Currently, auto renew can be updated. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement",
        },
        {
          name: "validate-move",
          description:
            "Validate if a product's charges can be moved to a new invoice section. This operation is supported only for products that are purchased with a recurring charge and for billing accounts with agreement type Microsoft Customer Agreement",
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
        },
        {
          name: "list",
          description:
            "List the billing profiles that a user has access to. The operation is supported for billing accounts with agreement type Microsoft Customer Agreement or Microsoft Partner Agreement",
        },
        {
          name: "show",
          description:
            "Get a billing profile by its ID. The operation is supported for billing accounts with agreement type Microsoft Customer Agreement or Microsoft Partner Agreement",
        },
        {
          name: "update",
          description:
            "Creates or updates a billing profile. The operation is supported for billing accounts with agreement type Microsoft Customer Agreement or Microsoft Partner Agreement",
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the billing profile is met",
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
        },
        {
          name: "list",
          description:
            "List the role assignments for the caller on a billing account. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement",
        },
        {
          name: "show",
          description:
            "Show the role assignment detail for the caller within different scopes. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement",
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
        },
        { name: "show", description: "Show the role definition details" },
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
        },
        {
          name: "move",
          description:
            "Moves a subscription's charges to a new invoice section. The new invoice section must belong to the same billing profile as the existing invoice section. This operation is supported for billing accounts with agreement type Microsoft Customer Agreement",
        },
        {
          name: "show",
          description:
            "Get a subscription by its ID. The operation is supported for billing accounts with agreement type Microsoft Customer Agreement and Microsoft Partner Agreement",
        },
        {
          name: "update",
          description:
            "Update the properties of a billing subscription. Currently, cost center can be updated. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement",
        },
        {
          name: "validate-move",
          description:
            "Validate if a subscription's charges can be moved to a new invoice section. This operation is supported for billing accounts with agreement type Microsoft Customer Agreement",
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the billing subscription is met",
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
        },
      ],
    },
  ],
};

export default completionSpec;
