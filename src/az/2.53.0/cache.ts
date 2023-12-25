const completion: Fig.Spec = {
  name: "cache",
  description:
    "Commands to manage CLI objects cached using the --defer argument",
  subcommands: [
    {
      name: "delete",
      description: "Delete an object from the cache",
      options: [
        {
          name: ["--name", "-n"],
          description: "The resource name",
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
          name: ["--resource-type", "-t"],
          description: "The resource type",
          args: { name: "resource-type" },
          isRequired: true,
        },
      ],
    },
    {
      name: "list",
      description: "List the contents of the object cache",
    },
    {
      name: "purge",
      description: "Clear the entire CLI object cache",
    },
    {
      name: "show",
      description: "Show the contents of a specific object in the cache",
      options: [
        {
          name: ["--name", "-n"],
          description: "The resource name",
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
          name: ["--resource-type", "-t"],
          description: "The resource type",
          args: { name: "resource-type" },
          isRequired: true,
        },
      ],
    },
  ],
};

export default completion;
