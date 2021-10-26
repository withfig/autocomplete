const completionSpec: Fig.Spec = {
  name: "dedicated-hsm",
  description: "Dedicated-hsm to create, update, list, show, and delete HSMs",
  subcommands: [
    {
      name: "create",
      description: "Create a dedicated HSM in the specified subscription",
    },
    {
      name: "delete",
      description: "Deletes the specified Azure Dedicated HSM",
    },
    {
      name: "list",
      description:
        "The List operation gets information about the dedicated HSMs associated with the subscription",
    },
    { name: "show", description: "Gets the specified Azure dedicated HSM" },
    {
      name: "update",
      description: "Update a dedicated HSM in the specified subscription",
    },
    { name: "wait", description: "Waits for operation to complete" },
  ],
};

export default completionSpec;
