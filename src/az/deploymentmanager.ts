const completionSpec: Fig.Spec = {
  name: "deploymentmanager",
  description: "Create and manage rollouts for your service",
  subcommands: [
    {
      name: "artifact-source",
      description: "Manage artifact sources",
      subcommands: [
        { name: "create", description: "Creates an artifact source" },
        { name: "delete", description: "Deletes an artifact source" },
        {
          name: "list",
          description: "List all artifact sources in a resource group",
        },
        { name: "show", description: "Get the details of an artifact source" },
        { name: "update", description: "Updates an artifact source" },
      ],
    },
    {
      name: "rollout",
      description: "Manage the rollouts",
      subcommands: [
        { name: "delete", description: "Deletes a rollout resource" },
        { name: "list", description: "List all rollouts in a resource group" },
        { name: "restart", description: "Restarts the rollout" },
        { name: "show", description: "Gets the rollout" },
        { name: "stop", description: "Stop the rollout" },
      ],
    },
    {
      name: "service",
      description: "Manage the services in a service topology",
      subcommands: [
        {
          name: "create",
          description: "Creates a service under the specified service topology",
        },
        { name: "delete", description: "Deletes the service topology" },
        {
          name: "list",
          description: "List all services in a service topology",
        },
        { name: "show", description: "Get the details of a service" },
        { name: "update", description: "Updates the service" },
      ],
    },
    {
      name: "service-topology",
      description: "Manage service topologies",
      subcommands: [
        { name: "create", description: "Creates a service topology" },
        { name: "delete", description: "Deletes the service topology" },
        {
          name: "list",
          description: "List all service topologies in a resource group",
        },
        { name: "show", description: "Get the details of a service topology" },
        { name: "update", description: "Updates the service topology" },
      ],
    },
    {
      name: "service-unit",
      description: "Manage the service units",
      subcommands: [
        {
          name: "create",
          description:
            "Creates a service unit under the specified service and service topology",
        },
        { name: "delete", description: "Deletes the service unit" },
        { name: "list", description: "List all service units in a service" },
        { name: "show", description: "Get the details of a service unit" },
        { name: "update", description: "Updates the service unit" },
      ],
    },
    {
      name: "step",
      description: "Manage the steps",
      subcommands: [
        { name: "create", description: "Creates the step" },
        { name: "delete", description: "Deletes the step" },
        { name: "list", description: "List all steps in a resource group" },
        { name: "show", description: "Get the details of the step" },
        { name: "update", description: "Updates the step" },
      ],
    },
  ],
};

export default completionSpec;
