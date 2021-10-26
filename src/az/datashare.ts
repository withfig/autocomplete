const completionSpec: Fig.Spec = {
  name: "datashare",
  description: "Commands to manage datashare",
  subcommands: [
    {
      name: "account",
      description: "Commands to manage datashare accounts",
      subcommands: [
        { name: "create", description: "Create an account" },
        { name: "delete", description: "Delete an account" },
        { name: "list", description: "List datashare accounts" },
        { name: "show", description: "Show an account" },
        { name: "update", description: "Patch an account" },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the datashare account is met",
        },
      ],
    },
    {
      name: "consumer",
      description: "Commands for consumers to manage datashare",
      subcommands: [
        {
          name: "dataset-mapping",
          description:
            "Commands for consumers to manage datashare dataset mappings",
          subcommands: [
            { name: "create", description: "Create a dataSet mapping" },
            {
              name: "delete",
              description: "Delete a dataset mapping in a share subscription",
            },
            {
              name: "list",
              description: "List dataset mappings in a share subscription",
            },
            {
              name: "show",
              description: "Show a dataset mapping in a share subscription",
            },
          ],
        },
        {
          name: "invitation",
          description: "Commands for consumers to manage datashare invitations",
          subcommands: [
            { name: "list", description: "List received invitations" },
            { name: "reject", description: "Reject an invitation" },
            { name: "show", description: "Show a received invitation" },
          ],
        },
        {
          name: "share-subscription",
          description:
            "Commands for consumers to manage datashare share subscriptions",
          subcommands: [
            {
              name: "create",
              description: "Create a share subscription in an account",
            },
            {
              name: "delete",
              description: "Delete a share subscription in an account",
            },
            {
              name: "list",
              description: "List share subscriptions in an account",
            },
            {
              name: "list-source-dataset",
              description: "List source datasets of a share subscription",
            },
            {
              name: "list-source-share-synchronization-setting",
              description: "List synchronization settings set on a share",
            },
            {
              name: "show",
              description: "Show a share subscription in an account",
            },
            {
              name: "synchronization",
              description:
                "Commands for consumers to manage datashare share subscription synchronizations",
              subcommands: [
                {
                  name: "cancel",
                  description: "Request to cancel a synchronization",
                },
                {
                  name: "list",
                  description: "List synchronizations of a share subscription",
                },
                {
                  name: "list-detail",
                  description: "List synchronization details",
                },
                {
                  name: "start",
                  description: "Initiate a dataset synchronization",
                },
                {
                  name: "wait",
                  description:
                    "Place the CLI in a waiting state until a condition of the datashare share subscription synchronization is met",
                },
              ],
            },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition of the datashare share subscription is met",
            },
          ],
        },
        {
          name: "trigger",
          description:
            "Commands for consumers to manage datashare consumer triggers",
          subcommands: [
            { name: "create", description: "Create a trigger" },
            {
              name: "delete",
              description: "Delete a trigger in a share subscription",
            },
            {
              name: "list",
              description: "List triggers in a share subscription",
            },
            {
              name: "show",
              description: "Show a trigger in a share subscription",
            },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition of the datashare trigger is met",
            },
          ],
        },
      ],
    },
    { name: "create", description: "Create a datashare" },
    {
      name: "dataset",
      description: "Commands for providers to manage datashare datasets",
      subcommands: [
        { name: "create", description: "Create a dataset" },
        { name: "delete", description: "Delete a dataset in a share" },
        { name: "list", description: "List datasets in a share" },
        { name: "show", description: "Show a dataset" },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the datashare dataset is met",
        },
      ],
    },
    { name: "delete", description: "Delete a datashare" },
    {
      name: "invitation",
      description: "Commands for providers to manage datashare invitations",
      subcommands: [
        { name: "create", description: "Create an invitation" },
        { name: "delete", description: "Delete an invitation in a share" },
        { name: "list", description: "List invitations in a share" },
        { name: "show", description: "Show an invitation in a share" },
      ],
    },
    { name: "list", description: "List datashares in an account" },
    {
      name: "provider-share-subscription",
      description:
        "Commands for providers to manage datashare share subscriptions",
      subcommands: [
        {
          name: "list",
          description: "List share subscriptions in a provider share",
        },
        {
          name: "reinstate",
          description: "Reinstate a share subscription in a provider share",
        },
        {
          name: "revoke",
          description: "Revoke a share subscription in a provider share",
        },
        {
          name: "show",
          description: "Show a share subscription in a provider share",
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the datashare provider share subscription is met",
        },
      ],
    },
    { name: "show", description: "Show a datashare" },
    {
      name: "synchronization",
      description: "Commands to manage datashare synchronization",
      subcommands: [
        { name: "list", description: "List synchronizations of a datashare" },
        { name: "list-detail", description: "List synchronization details" },
      ],
    },
    {
      name: "synchronization-setting",
      description:
        "Commands for providers to manage datashare synchronization settings",
      subcommands: [
        { name: "create", description: "Create a synchronization setting" },
        {
          name: "delete",
          description: "Delete a synchronization setting in a share",
        },
        {
          name: "list",
          description: "List synchronization settings in a share",
        },
        {
          name: "show",
          description: "Show a synchronization setting in a share",
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the datashare synchronization setting is met",
        },
      ],
    },
    {
      name: "wait",
      description:
        "Place the CLI in a waiting state until a condition of the datashare is met",
    },
  ],
};

export default completionSpec;
