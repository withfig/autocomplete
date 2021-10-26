const completionSpec: Fig.Spec = {
  name: "maintenance",
  description: "Manage Maintenance",
  subcommands: [
    {
      name: "applyupdate",
      description: "Manage apply update with maintenance",
      subcommands: [
        {
          name: "create",
          description: "Apply maintenance updates to resource",
        },
        {
          name: "create-or-update-parent",
          description: "Apply maintenance updates to resource with parent",
        },
        {
          name: "get-parent",
          description: "Track maintenance updates to resource with parent",
        },
        {
          name: "list",
          description: "Get Configuration records within a subscription",
        },
        { name: "show", description: "Track maintenance updates to resource" },
        {
          name: "show-parent",
          description: "Track maintenance updates to resource with parent",
        },
        {
          name: "update",
          description: "Apply maintenance updates to resource",
        },
      ],
    },
    {
      name: "assignment",
      description: "Manage configuration assignment with maintenance",
      subcommands: [
        { name: "create", description: "Register configuration for resource" },
        {
          name: "create-or-update-parent",
          description: "Register configuration for resource",
        },
        {
          name: "delete",
          description: "Unregister configuration for resource",
        },
        {
          name: "delete-parent",
          description: "Unregister configuration for resource",
        },
        {
          name: "list",
          description: "List configurationAssignments for resource",
        },
        {
          name: "list-parent",
          description: "List configurationAssignments for resource",
        },
        { name: "show", description: "Get configuration for resource" },
        { name: "show-parent", description: "Get configuration for resource" },
        { name: "update", description: "Register configuration for resource" },
      ],
    },
    {
      name: "configuration",
      description: "Manage maintenance configuration with maintenance",
      subcommands: [
        { name: "create", description: "Create configuration record" },
        { name: "delete", description: "Delete Configuration record" },
        {
          name: "list",
          description: "Get Configuration records within a subscription",
        },
        { name: "show", description: "Get Configuration record" },
        { name: "update", description: "Patch configuration record" },
      ],
    },
    {
      name: "public-configuration",
      description: "Manage public maintenance configuration with maintenance",
      subcommands: [
        {
          name: "list",
          description: "Get Public Maintenance Configuration records",
        },
        {
          name: "show",
          description: "Get Public Maintenance Configuration record",
        },
      ],
    },
    {
      name: "update",
      description: "Manage update with maintenance",
      subcommands: [
        { name: "list", description: "Get updates to resources" },
        { name: "list-parent", description: "Get updates to resources" },
      ],
    },
  ],
};

export default completionSpec;
