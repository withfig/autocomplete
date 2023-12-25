const completion: Fig.Spec = {
  name: "change-analysis",
  description: "List changes for resources",
  subcommands: [
    {
      name: "list",
      description:
        "List the changes of resources in the subscription within the specified time range. Customer data will always be masked",
      options: [
        {
          name: "--end-time",
          description: "Specifies the end time of the changes request",
          args: { name: "end-time" },
          isRequired: true,
        },
        {
          name: "--start-time",
          description: "Specifies the start time of the changes request",
          args: { name: "start-time" },
          isRequired: true,
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: "--skip-token",
          description:
            "A skip token is used to continue retrieving items after an operation returns a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skipToken parameter that specifies a starting point to use for subsequent calls",
          args: { name: "skip-token" },
        },
      ],
    },
    {
      name: "list-by-resource",
      description:
        "List the changes of a resource within the specified time range. Customer data will be masked if the user doesn't have access",
      options: [
        {
          name: "--end-time",
          description: "Specifies the end time of the changes request",
          args: { name: "end-time" },
          isRequired: true,
        },
        {
          name: ["--resource", "-r"],
          description: "The identifier of the resource",
          args: { name: "resource" },
          isRequired: true,
        },
        {
          name: "--start-time",
          description: "Specifies the start time of the changes request",
          args: { name: "start-time" },
          isRequired: true,
        },
        {
          name: "--skip-token",
          description:
            "A skip token is used to continue retrieving items after an operation returns a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skipToken parameter that specifies a starting point to use for subsequent calls",
          args: { name: "skip-token" },
        },
      ],
    },
  ],
};

export default completion;
