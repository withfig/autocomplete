const completionSpec: Fig.Spec = {
  name: "attestation",
  description: "Manage Microsoft Azure Attestation (MAA)",
  subcommands: [
    {
      name: "create",
      description: "Creates a new Attestation Provider instance",
    },
    { name: "delete", description: "Delete Attestation Service" },
    {
      name: "get-default-by-location",
      description: "Get the default provider by location",
    },
    {
      name: "list",
      description: "Returns a list of attestation providers in a subscription",
    },
    { name: "list-default", description: "Get the default provider" },
    {
      name: "policy",
      description: "Manage policies",
      subcommands: [
        {
          name: "reset",
          description:
            "Resets the attestation policy for the specified tenant and reverts to the default policy",
        },
        {
          name: "set",
          description: "Sets the policy for a given kind of attestation type",
        },
        {
          name: "show",
          description:
            "Retrieves the current policy for a given kind of attestation type",
        },
      ],
    },
    { name: "show", description: "Get the status of Attestation Provider" },
    {
      name: "signer",
      description: "Manage signers",
      subcommands: [
        {
          name: "add",
          description:
            "Adds a new attestation policy certificate to the set of policy management certificates",
        },
        {
          name: "list",
          description:
            "Retrieves the set of certificates used to express policy for the current tenant",
        },
        {
          name: "remove",
          description: "Removes the specified policy management certificate",
        },
      ],
    },
    { name: "update", description: "Updates the Attestation Provider" },
  ],
};

export default completionSpec;
