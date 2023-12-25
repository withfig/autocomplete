const completion: Fig.Spec = {
  name: "graph",
  description:
    "Query the resources managed by Azure Resource Manager.\n\n\t\tRun 'az graph query --help' for detailed help",
  subcommands: [
    {
      name: "query",
      description: "Query the resources managed by Azure Resource Manager",
      options: [
        {
          name: ["--graph-query", "--q", "-q"],
          description: "Resource Graph query to execute",
          args: { name: "graph-query" },
          isRequired: true,
        },
        {
          name: ["--allow-partial-scopes", "-a"],
          description:
            "Indicates if query should succeed when only partial number of subscription underneath can be processed by server",
        },
        {
          name: "--first",
          description:
            "The maximum number of objects to return. Accepted range: 1-1000",
          args: { name: "first" },
        },
        {
          name: ["--management-groups", "-m"],
          description: "List of management groups to run query against",
          args: { name: "management-groups" },
        },
        {
          name: "--skip",
          description:
            "Ignores the first N objects and then gets the remaining objects",
          args: { name: "skip" },
        },
        {
          name: "--skip-token",
          description:
            "Skip token to get the next page of the query if applicable",
          args: { name: "skip-token" },
        },
        {
          name: ["--subscriptions", "-s"],
          description:
            "List of subscriptions to run query against. By default all accessible subscriptions are queried",
          args: { name: "subscriptions" },
        },
      ],
    },
    {
      name: "shared-query",
      description: "Manage shared query of Azure resource graph",
      subcommands: [
        {
          name: "create",
          description: "Create a shared query",
          options: [
            {
              name: ["--description", "-d"],
              description: "Description of the graph shared query",
              args: { name: "description" },
              isRequired: true,
            },
            {
              name: ["--graph-query", "--q", "-q"],
              description: "Resource Graph query to execute",
              args: { name: "graph-query" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Name of the graph shared query",
              args: { name: "name" },
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
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a shared query",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the graph shared query",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list",
          description: "List all shared query in a resource group",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description: "Show the properties of a shared query",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the graph shared query",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
