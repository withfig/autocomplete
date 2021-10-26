const completionSpec: Fig.Spec = {
  name: "sapmonitor",
  description: "(PREVIEW) Manage Azure SAP Monitor",
  subcommands: [
    { name: "create", description: "Create a SAP Monitor" },
    { name: "delete", description: "Delete a SAP Monitor" },
    { name: "list", description: "List SAP Monitors" },
    {
      name: "provider-instance",
      description: "Manage the provider instance for the SAP Monitor",
      subcommands: [
        {
          name: "create",
          description: "Create a new provider instance for the SAP Monitor",
        },
        {
          name: "delete",
          description: "Delete a provider instance from the SAP Monitor",
        },
        {
          name: "list",
          description: "List provider instances for the SAP Monitor",
        },
        {
          name: "show",
          description:
            "Get the details of a provider instance for the SAP Monitor",
        },
      ],
    },
    { name: "show", description: "Get the details of a SAP Monitor" },
    { name: "update", description: "Updates the tags field of a SAP Monitor" },
  ],
};

export default completionSpec;
