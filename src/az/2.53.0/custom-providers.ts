const completion: Fig.Spec = {
  name: "custom-providers",
  description: "Commands to manage custom providers",
  subcommands: [
    {
      name: "resource-provider",
      description: "Commands to manage custom resource provider",
      subcommands: [
        {
          name: "create",
          description: "Create or update the custom resource provider",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the resource provider",
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
              name: ["--action", "-a"],
              description: "Add an action to the custom resource provider",
              args: { name: "action" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--resource-type", "-r"],
              description:
                "Add a custom resource type to the custom resource provider",
              args: { name: "resource-type" },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
            {
              name: ["--validation", "-v"],
              description: "Add a validation to the custom resource provider",
              args: { name: "validation" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete the custom resource provider",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the resource provider",
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
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
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
            "Get all the custom resource providers within a resource group or in the current subscription",
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
          description: "Get the properties for the custom resource provider",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the resource provider",
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
          description:
            "Update the custom resource provider. Only tags can be updated",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the resource provider",
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
      ],
    },
  ],
};

export default completion;
