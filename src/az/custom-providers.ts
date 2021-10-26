const completionSpec: Fig.Spec = {
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
        },
        { name: "delete", description: "Delete the custom resource provider" },
        {
          name: "list",
          description:
            "Get all the custom resource providers within a resource group or in the current subscription",
        },
        {
          name: "show",
          description: "Get the properties for the custom resource provider",
        },
        {
          name: "update",
          description:
            "Update the custom resource provider. Only tags can be updated",
        },
      ],
    },
  ],
};

export default completionSpec;
