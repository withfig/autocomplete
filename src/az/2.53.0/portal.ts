const completion: Fig.Spec = {
  name: "portal",
  description: "Manage Portal",
  subcommands: [
    {
      name: "dashboard",
      description: "Manage portal dashboards",
      subcommands: [
        {
          name: "create",
          description: "Creates or updates a dashboard",
          options: [
            {
              name: "--input-path",
              description: "The path to the dashboard properties JSON file",
              args: { name: "input-path" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The name of the dashboard",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description: "The name of the resource group",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
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
          description: "Deletes a dashboard",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the dashboard",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description: "The name of the resource group",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "import",
          description: "Imports a dashboard from a JSON file",
          options: [
            {
              name: "--input-path",
              description: "The path to the dashboard json file",
              args: { name: "input-path" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description: "The name of the resource group",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The name of the dashboard",
              args: { name: "name" },
            },
          ],
        },
        {
          name: "list",
          description:
            "Lists the dashboards within a subscription or resource group",
          options: [
            {
              name: ["--resource-group", "-g"],
              description: "The name of the resource group",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "show",
          description: "Gets details for a single dashboard",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the dashboard",
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
          name: "update",
          description: "Updates an existing dashboard",
          options: [
            {
              name: "--input-path",
              description: "The path to the dashboard properties JSON file",
              args: { name: "input-path" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The name of the dashboard",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description: "The name of the resource group",
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
