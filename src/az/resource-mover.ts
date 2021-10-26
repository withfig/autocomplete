const completionSpec: Fig.Spec = {
  name: "resource-mover",
  description: "Move resources in Azure",
  subcommands: [
    {
      name: "move-collection",
      description: "Manage move-collection",
      subcommands: [
        {
          name: "bulk-remove",
          description: "Remove the set of move-resources from move-collection",
        },
        {
          name: "commit",
          description:
            "Commit the set of resources. The commit operation is triggered on the move-resources in the move-state 'CommitPending' or 'CommitFailed', on a successful completion the move-resource's move-state do a transition to Committed",
        },
        { name: "create", description: "Create a move-collection" },
        { name: "delete", description: "Delete a move-collection" },
        {
          name: "discard",
          description:
            "Discard the set of resources. The discard operation is triggered on the move-resources in the move-state 'CommitPending' or 'DiscardFailed', on a successful completion the move-resource's move-state do a transition to MovePending",
        },
        {
          name: "initiate-move",
          description:
            "Move the set of resources. The move operation is triggered after the move-resources are in the move-state 'MovePending' or 'MoveFailed', on a successful completion the move-resource's move-state do a transition to CommitPending",
        },
        { name: "list", description: "List details of the move-collections" },
        {
          name: "list-required-for",
          description:
            "List the move-resources for which an arm resource is required for",
        },
        {
          name: "list-unresolved-dependency",
          description:
            "List the details of the unresolved dependencies in a move-collection",
        },
        {
          name: "prepare",
          description:
            "Prepare the set of resources. The prepare operation is on the move-resources that are in the move-state 'PreparePending' or 'PrepareFailed', on a successful completion the move-resource's move-state do a transition to MovePending",
        },
        {
          name: "resolve-dependency",
          description:
            "Compute, resolve and validate the dependencies of the move-resources in the move-collection",
        },
        { name: "show", description: "Get the details of a move-collection" },
        { name: "update", description: "Update a move-collection" },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the move-collection is met",
        },
      ],
    },
    {
      name: "move-resource",
      description: "Manage move-resource",
      subcommands: [
        {
          name: "add",
          description:
            "Create or update a move-resource to the move-collection",
        },
        {
          name: "delete",
          description: "Delete a move-resource from the move-collection",
        },
        {
          name: "list",
          description: "List the move-resources in a move-collection",
        },
        { name: "show", description: "Get the details of a move-resource" },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the move-resource is met",
        },
      ],
    },
  ],
};

export default completionSpec;
