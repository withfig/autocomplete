const completionSpec: Fig.Spec = {
  name: "maps",
  description: "Manage Azure Maps",
  subcommands: [
    {
      name: "account",
      description: "Manage Azure Maps accounts",
      subcommands: [
        {
          name: "create",
          description:
            "Create a Maps Account. A Maps Account holds the keys which allow access to the Maps REST APIs",
        },
        { name: "delete", description: "Delete a Maps Account" },
        {
          name: "keys",
          description: "Manage Azure Maps account keys",
          subcommands: [
            {
              name: "list",
              description:
                "Get the keys to use with the Maps APIs. A key is used to authenticate and authorize access to the Maps REST APIs. Only one key is needed at a time; two are given to provide seamless key regeneration",
            },
            {
              name: "renew",
              description:
                "Regenerate either the primary or secondary key for use with the Maps APIs. The old key will stop working immediately",
            },
          ],
        },
        {
          name: "list",
          description:
            "Show all maps accounts in a subscription or in a resource group",
        },
        { name: "show", description: "Show the details of a maps account" },
        {
          name: "update",
          description:
            "Updates a Maps Account. Only a subset of the parameters may be updated after creation, such as Sku, Tags, Properties",
        },
      ],
    },
    {
      name: "creator",
      description: "Manage creator with maps",
      subcommands: [
        {
          name: "create",
          description:
            "Create a Maps Creator resource. Creator resource will manage Azure resources required to populate a custom set of mapping data. It requires an account to exist before it can be created",
        },
        { name: "delete", description: "Delete a Maps Creator resource" },
        {
          name: "list",
          description: "Get all Creator instances for an Azure Maps Account",
        },
        { name: "show", description: "Get a Maps Creator resource" },
        {
          name: "update",
          description:
            "Updates the Maps Creator resource. Only a subset of the parameters may be updated after creation, such as Tags",
        },
      ],
    },
    {
      name: "map",
      description: "Manage map with maps",
      subcommands: [
        {
          name: "list-operation",
          description:
            "List operations available for the Maps Resource Provider",
        },
      ],
    },
  ],
};

export default completionSpec;
