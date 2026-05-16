const completion: Fig.Spec = {
  name: "managedservices",
  description: "Manage the registration assignments and definitions in Azure",
  subcommands: [
    {
      name: "assignment",
      description: "Manage the registration assignments in Azure",
      subcommands: [
        {
          name: "create",
          description: "Creates a new registration assignment",
          options: [
            {
              name: "--definition",
              description:
                "The fully qualified resource id of the registration definition",
              args: { name: "definition" },
              isRequired: true,
            },
            {
              name: "--assignment-id",
              description:
                "Can be used to override the generated registration assignment id",
              args: { name: "assignment-id" },
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
          name: "delete",
          description: "Deletes the registration assignment",
          options: [
            {
              name: "--assignment",
              description:
                "The identifier (guid) or the fully qualified resource id of the registration assignment. When resource id is used, subscription id and resource group parameters are ignored",
              args: { name: "assignment" },
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
          name: "list",
          description: "List all the registration assignments",
          options: [
            {
              name: "--include-definition",
              description:
                "When provided, gets the associated registration definition details",
              args: {
                name: "include-definition",
                suggestions: ["false", "true"],
              },
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
          description: "Gets a registration assignment",
          options: [
            {
              name: "--assignment",
              description:
                "The identifier (guid) or the fully qualified resource id of the registration assignment. When resource id is used, subscription id and resource group parameters are ignored",
              args: { name: "assignment" },
              isRequired: true,
            },
            {
              name: "--include-definition",
              description:
                "When provided, gets the associated registration definition details",
              args: {
                name: "include-definition",
                suggestions: ["false", "true"],
              },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
          ],
        },
      ],
    },
    {
      name: "definition",
      description: "Manage the registration definitions in Azure",
      subcommands: [
        {
          name: "create",
          description: "Creates a new registration definition",
          options: [
            {
              name: "--name",
              description: "The name of the registration definition",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--principal-id",
              description: "The principal id",
              args: { name: "principal-id" },
              isRequired: true,
            },
            {
              name: "--role-definition-id",
              description: "The role definition id",
              args: { name: "role-definition-id" },
              isRequired: true,
            },
            {
              name: "--tenant-id",
              description: "The managed by tenant id",
              args: { name: "tenant-id" },
              isRequired: true,
            },
            {
              name: "--definition-id",
              description:
                "Can be used to override the generated registration definition id",
              args: { name: "definition-id" },
            },
            {
              name: "--description",
              description: "The friendly description",
              args: { name: "description" },
            },
            {
              name: "--plan-name",
              description: "The plan name",
              args: { name: "plan-name" },
            },
            {
              name: "--plan-product",
              description: "The plan product",
              args: { name: "plan-product" },
            },
            {
              name: "--plan-publisher",
              description: "The plan publisher",
              args: { name: "plan-publisher" },
            },
            {
              name: "--plan-version",
              description: "The plan version",
              args: { name: "plan-version" },
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes a registration",
          options: [
            {
              name: "--definition",
              description:
                "The identifier (guid) or the fully qualified resource id of the registration definition. When resource id is used, subscription id and resource group parameters are ignored",
              args: { name: "definition" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list",
          description:
            "List all the registration definitions under the default scope or under the subscription provided",
        },
        {
          name: "show",
          description: "Gets a registration definition",
          options: [
            {
              name: "--definition",
              description:
                "The identifier (guid) or the fully qualified resource id of the registration definition. When resource id is used, subscription id and resource group parameters are ignored",
              args: { name: "definition" },
              isRequired: true,
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
