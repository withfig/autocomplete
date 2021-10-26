const completionSpec: Fig.Spec = {
  name: "dnc",
  description: "Manage Delegated Network",
  subcommands: [
    {
      name: "controller",
      description: "Manage controller with dnc",
      subcommands: [
        { name: "create", description: "Create a dnc controller" },
        { name: "delete", description: "Deletes the DNC controller" },
        {
          name: "show",
          description: "Gets details about the specified dnc controller",
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the dnc controller is met",
        },
      ],
    },
    {
      name: "delegated-subnet-service",
      description: "Manage delegated subnet service with dnc",
      subcommands: [
        { name: "create", description: "Put delegated subnet resource" },
        { name: "delete", description: "Delete dnc DelegatedSubnet" },
        {
          name: "show",
          description:
            "Gets details about the specified dnc DelegatedSubnet Link",
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the dnc delegated-subnet-service is met",
        },
      ],
    },
    {
      name: "orchestrator-instance-service",
      description: "Manage orchestrator instance service with dnc",
      subcommands: [
        { name: "create", description: "Create a orchestrator instance" },
        { name: "delete", description: "Deletes the Orchestrator Instance" },
        {
          name: "show",
          description: "Gets details about the orchestrator instance",
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the dnc orchestrator-instance-service is met",
        },
      ],
    },
  ],
};

export default completionSpec;
