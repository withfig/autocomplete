const completionSpec: Fig.Spec = {
  name: "connectedmachine",
  description: "Manage Connected Machine",
  subcommands: [
    {
      name: "delete",
      description: "The operation to remove a hybrid machine identity in Azure",
    },
    {
      name: "extension",
      description: "Manage machine extension with connectedmachine",
      subcommands: [
        {
          name: "create",
          description: "The operation to Create the extension",
        },
        {
          name: "delete",
          description: "The operation to delete the extension",
        },
        {
          name: "list",
          description:
            "The operation to get all extensions of a non-Azure machine",
        },
        { name: "show", description: "The operation to get the extension" },
        {
          name: "update",
          description: "The operation to create or update the extension",
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the connectedmachine extension is met",
        },
      ],
    },
    {
      name: "list",
      description:
        "List all the hybrid machines in the specified resource group. Use the nextLink property in the response to get the next page of hybrid machines. And Lists all the hybrid machines in the specified subscription. Use the nextLink property in the response to get the next page of hybrid machines",
    },
    {
      name: "private-endpoint-connection",
      description: "Manage private endpoint connection with connectedmachine",
      subcommands: [
        {
          name: "delete",
          description: "Delete a private endpoint connection with a given name",
        },
        {
          name: "list",
          description:
            "Get all private endpoint connections on a private link scope",
        },
        { name: "show", description: "Get a private endpoint connection" },
        {
          name: "update",
          description:
            "Approve or reject a private endpoint connection with a given name",
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the connectedmachine private-endpoint-connection is met",
        },
      ],
    },
    {
      name: "private-link-resource",
      description: "Manage private link resource with connectedmachine",
      subcommands: [
        {
          name: "list",
          description:
            "Get the private link resources that need to be created for a Azure Monitor PrivateLinkScope",
        },
        {
          name: "show",
          description:
            "Get the private link resources that need to be created for a Azure Monitor PrivateLinkScope",
        },
      ],
    },
    {
      name: "private-link-scope",
      description: "Manage private link scope with connectedmachine",
      subcommands: [
        {
          name: "create",
          description:
            "Create (or update) a Azure Arc PrivateLinkScope. Note: You cannot specify a different value for InstrumentationKey nor AppId in the Put operation",
        },
        { name: "delete", description: "Delete a Azure Arc PrivateLinkScope" },
        {
          name: "list",
          description:
            "Get a list of Azure Arc PrivateLinkScopes within a resource group. And Gets a list of all Azure Arc PrivateLinkScopes within a subscription",
        },
        { name: "show", description: "Return a Azure Arc PrivateLinkScope" },
        {
          name: "show-validation-detail",
          description:
            "Return a Azure Arc PrivateLinkScope's validation details",
        },
        {
          name: "show-validation-detail-for-machine",
          description:
            "Return a Azure Arc PrivateLinkScope's validation details for a given machine",
        },
        {
          name: "update",
          description:
            "Update a Azure Arc PrivateLinkScope. Note: You cannot specify a different value for InstrumentationKey nor AppId in the Put operation",
        },
        {
          name: "update-tag",
          description:
            "Update an existing PrivateLinkScope's tags. To update other fields use the CreateOrUpdate method",
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the connectedmachine private-link-scope is met",
        },
      ],
    },
    {
      name: "show",
      description:
        "Retrieve information about the model view or the instance view of a hybrid machine",
    },
    {
      name: "upgrade-extension",
      description: "The operation to upgrade Machine Extensions",
    },
  ],
};

export default completionSpec;
