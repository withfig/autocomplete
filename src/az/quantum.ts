const completionSpec: Fig.Spec = {
  name: "quantum",
  description:
    "Manage Azure Quantum Workspaces and submit jobs to Azure Quantum Providers",
  subcommands: [
    {
      name: "execute",
      description:
        "Submit a job to run on Azure Quantum, and waits for the result",
    },
    {
      name: "job",
      description: "Manage jobs for Azure Quantum",
      subcommands: [
        {
          name: "cancel",
          description:
            "Request to cancel a job on Azure Quantum if it hasn't completed",
        },
        {
          name: "list",
          description: "Get the list of jobs in a Quantum Workspace",
        },
        { name: "output", description: "Get the results of running a Q# job" },
        { name: "show", description: "Get the job's status and details" },
        {
          name: "submit",
          description: "Submit a Q# project to run on Azure Quantum",
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until the job finishes running",
        },
      ],
    },
    {
      name: "offerings",
      description: "Manage provider offerings for Azure Quantum",
      subcommands: [
        {
          name: "accept-terms",
          description:
            "Accept the terms of a provider and SKU combination to enable it for workspace creation",
        },
        {
          name: "list",
          description:
            "Get the list of all provider offerings available on the given location",
        },
        {
          name: "show-terms",
          description:
            "Show the terms of a provider and SKU combination including license URL and acceptance status",
        },
      ],
    },
    { name: "run", description: "Equivalent to az quantum execute" },
    {
      name: "target",
      description: "Manage targets for Azure Quantum workspaces",
      subcommands: [
        { name: "clear", description: "Clear the default target-id" },
        {
          name: "list",
          description:
            "Get the list of providers and their targets in an Azure Quantum workspace",
        },
        {
          name: "set",
          description:
            "Select the default target to use when submitting jobs to Azure Quantum",
        },
        {
          name: "show",
          description:
            "Get the details of the given (or current) target to use when submitting jobs to Azure Quantum",
        },
      ],
    },
    {
      name: "workspace",
      description: "Manage Azure Quantum workspaces",
      subcommands: [
        {
          name: "clear",
          description: "Clear the default Azure Quantum workspace",
        },
        { name: "create", description: "Create a new Azure Quantum workspace" },
        {
          name: "delete",
          description: "Delete the given (or current) Azure Quantum workspace",
        },
        {
          name: "list",
          description: "Get the list of Azure Quantum workspaces available",
        },
        {
          name: "quotas",
          description:
            "List the quotas for the given (or current) Azure Quantum workspace",
        },
        {
          name: "set",
          description:
            "Select a default Azure Quantum workspace for future commands",
        },
        {
          name: "show",
          description:
            "Get the details of the given (or current) Azure Quantum workspace",
        },
      ],
    },
  ],
};

export default completionSpec;
