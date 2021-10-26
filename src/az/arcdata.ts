const completionSpec: Fig.Spec = {
  name: "arcdata",
  description: "Commands for using Azure Arc-enabled data services",
  subcommands: [
    {
      name: "dc",
      description: "Create, delete, and manage data controllers",
      subcommands: [
        {
          name: "config",
          description: "Configuration commands",
          subcommands: [
            {
              name: "add",
              description: "Add a value for a json path in a config file",
            },
            {
              name: "init",
              description:
                "Initialize a data controller configuration profile that can be used with az arcdata dc create",
            },
            {
              name: "list",
              description: "List available configuration profile choices",
            },
            {
              name: "patch",
              description: "Patch a config file based on a json patch file",
            },
            {
              name: "remove",
              description: "Remove a value for a json path in a config file",
            },
            {
              name: "replace",
              description: "Replace a value for a json path in a config file",
            },
            {
              name: "show",
              description:
                "Return the config of the data controller custom resource",
            },
          ],
        },
        { name: "create", description: "Create data controller" },
        {
          name: "debug",
          description: "Debug data controller",
          subcommands: [{ name: "copy-logs", description: "Copy logs" }],
        },
        { name: "delete", description: "Delete data controller" },
        {
          name: "endpoint",
          description: "Endpoint commands",
          subcommands: [
            { name: "list", description: "List the data controller endpoint" },
          ],
        },
        { name: "export", description: "Export metrics, logs or usage" },
        {
          name: "status",
          description: "Status commands",
          subcommands: [
            {
              name: "show",
              description: "Show the status of the data controller",
            },
          ],
        },
        { name: "upload", description: "Upload exported data file" },
      ],
    },
    {
      name: "resource-kind",
      description:
        "Resource-kind commands to define and template custom resources on your cluster",
      subcommands: [
        {
          name: "get",
          description: "Get the Arc resource-kind's template file",
        },
        {
          name: "list",
          description:
            "List the available custom resource kinds for Arc that can be defined and created",
        },
      ],
    },
  ],
};

export default completionSpec;
