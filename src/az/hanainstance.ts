const completionSpec: Fig.Spec = {
  name: "hanainstance",
  description: "(PREVIEW) Manage Azure SAP HANA Instance",
  subcommands: [
    { name: "create", description: "Create a new SAP HANA Instance" },
    { name: "delete", description: "Delete a SAP HANA Instance" },
    { name: "list", description: "List SAP HANA Instances" },
    { name: "restart", description: "Restart a SAP HANA Instance" },
    { name: "show", description: "Get the details of a SAP HANA Instance" },
    { name: "shutdown", description: "Shutdown a SAP HANA Instance" },
    { name: "start", description: "Start a SAP HANA Instance" },
    {
      name: "update",
      description: "Update the Tags field of a SAP HANA Instance",
    },
  ],
};

export default completionSpec;
