const completionSpec: Fig.Spec = {
  name: "healthcareapis",
  description: "Manage Healthcare Apis",
  subcommands: [
    {
      name: "acr",
      description: "Healthcareapis acr",
      subcommands: [
        {
          name: "add",
          description:
            "Add a list of registries to the service, repeated ones will be ignored",
        },
        {
          name: "list",
          description:
            "Lists all container registries associated with the service",
        },
        {
          name: "remove",
          description:
            "Remove a list of registries from the service, non-existing ones will be ignored",
        },
        {
          name: "reset",
          description:
            "Reset the container registries associated with the service to a new list",
        },
      ],
    },
    {
      name: "operation-result",
      description: "Healthcareapis operation-result",
      subcommands: [
        {
          name: "show",
          description: "Get the operation result for a long running operation",
        },
      ],
    },
    {
      name: "private-endpoint-connection",
      description: "Healthcareapis private-endpoint-connection",
      subcommands: [
        {
          name: "create",
          description:
            "Update the state of the specified private endpoint connection associated with the service",
        },
        {
          name: "delete",
          description: "Deletes a private endpoint connection",
        },
        {
          name: "list",
          description: "Lists all private endpoint connections for a service",
        },
        {
          name: "show",
          description:
            "Gets the specified private endpoint connection associated with the service",
        },
        {
          name: "update",
          description:
            "Update the state of the specified private endpoint connection associated with the service",
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the healthcareapis private-endpoint-connection is met",
        },
      ],
    },
    {
      name: "private-link-resource",
      description: "Healthcareapis private-link-resource",
      subcommands: [
        {
          name: "list",
          description:
            "Gets the private link resources that need to be created for a service",
        },
        {
          name: "show",
          description:
            "Gets a private link resource that need to be created for a service",
        },
      ],
    },
    {
      name: "service",
      description: "Healthcareapis service",
      subcommands: [
        {
          name: "create",
          description: "Create the metadata of a service instance",
        },
        { name: "delete", description: "Delete a service instance" },
        {
          name: "list",
          description:
            "Get all the service instances in a resource group. And Get all the service instances in a subscription",
        },
        { name: "show", description: "Get the metadata of a service instance" },
        {
          name: "update",
          description: "Update the metadata of a service instance",
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the healthcareapis service is met",
        },
      ],
    },
  ],
};

export default completionSpec;
