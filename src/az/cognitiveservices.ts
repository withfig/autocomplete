const completionSpec: Fig.Spec = {
  name: "cognitiveservices",
  description: "Manage Azure Cognitive Services accounts",
  subcommands: [
    {
      name: "account",
      description: "Manage Azure Cognitive Services accounts",
      subcommands: [
        {
          name: "create",
          description: "Manage Azure Cognitive Services accounts",
        },
        {
          name: "delete",
          description: "Manage Azure Cognitive Services accounts",
        },
        {
          name: "identity",
          description: "Manage identity of Cognitive Services accounts",
          subcommands: [
            {
              name: "assign",
              description: "Assign an identity of a Cognitive Services account",
            },
            {
              name: "remove",
              description:
                "Remove the identity from a Cognitive Services account",
            },
            {
              name: "show",
              description: "Show the identity of a Cognitive Services account",
            },
          ],
        },
        {
          name: "keys",
          description: "Manage Azure Cognitive Services accounts",
          subcommands: [
            {
              name: "list",
              description: "Manage Azure Cognitive Services accounts",
            },
            {
              name: "regenerate",
              description: "Manage Azure Cognitive Services accounts",
            },
          ],
        },
        {
          name: "list",
          description: "Manage Azure Cognitive Services accounts",
        },
        {
          name: "list-deleted",
          description: "List soft-deleted Azure Cognitive Services accounts",
        },
        {
          name: "list-kinds",
          description:
            "List all valid kinds for Azure Cognitive Services account",
        },
        {
          name: "list-skus",
          description: "Manage Azure Cognitive Services accounts",
        },
        {
          name: "list-usage",
          description: "List usages for Azure Cognitive Services account",
        },
        {
          name: "network-rule",
          description: "Manage network rules",
          subcommands: [
            { name: "add", description: "Add a network rule" },
            { name: "list", description: "List network rules" },
            { name: "remove", description: "Remove a network rule" },
          ],
        },
        {
          name: "purge",
          description: "Purge a soft-deleted Azure Cognitive Services account",
        },
        {
          name: "recover",
          description:
            "Recover a soft-deleted Azure Cognitive Services account",
        },
        {
          name: "show",
          description: "Manage Azure Cognitive Services accounts",
        },
        {
          name: "show-deleted",
          description: "Show a soft-deleted Azure Cognitive Services account",
        },
        {
          name: "update",
          description: "Manage Azure Cognitive Services accounts",
        },
      ],
    },
    { name: "list", description: "Manage Azure Cognitive Services accounts" },
  ],
};

export default completionSpec;
