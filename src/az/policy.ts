const completionSpec: Fig.Spec = {
  name: "policy",
  description: "Manage resource policies",
  subcommands: [
    {
      name: "assignment",
      description: "Manage resource policy assignments",
      subcommands: [
        { name: "create", description: "Create a resource policy assignment" },
        { name: "delete", description: "Delete a resource policy assignment" },
        {
          name: "identity",
          description: "Manage a policy assignment's managed identity",
          subcommands: [
            {
              name: "assign",
              description:
                "Add a system assigned identity to a policy assignment",
            },
            {
              name: "remove",
              description: "Remove a managed identity from a policy assignment",
            },
            {
              name: "show",
              description: "Show a policy assignment's managed identity",
            },
          ],
        },
        { name: "list", description: "List resource policy assignments" },
        {
          name: "non-compliance-message",
          description: "Manage a policy assignment's non-compliance messages",
          subcommands: [
            {
              name: "create",
              description:
                "Add a non-compliance message to a policy assignment",
            },
            {
              name: "delete",
              description:
                "Remove one or more non-compliance messages from a policy assignment",
            },
            {
              name: "list",
              description:
                "List the non-compliance messages for a policy assignment",
            },
          ],
        },
        { name: "show", description: "Show a resource policy assignment" },
        { name: "update", description: "Update a resource policy assignment" },
      ],
    },
    {
      name: "definition",
      description: "Manage resource policy definitions",
      subcommands: [
        { name: "create", description: "Create a policy definition" },
        { name: "delete", description: "Delete a policy definition" },
        { name: "list", description: "List policy definitions" },
        { name: "show", description: "Show a policy definition" },
        { name: "update", description: "Update a policy definition" },
      ],
    },
    {
      name: "event",
      description: "Manage policy events",
      subcommands: [{ name: "list", description: "List policy events" }],
    },
    {
      name: "exemption",
      description: "Manage resource policy exemptions",
      subcommands: [
        { name: "create", description: "Create a policy exemption" },
        { name: "delete", description: "Delete a policy exemption" },
        { name: "list", description: "List policy exemptions" },
        { name: "show", description: "Show a policy exemption" },
        { name: "update", description: "Update a policy exemption" },
      ],
    },
    {
      name: "metadata",
      description: "Get policy metadata resources",
      subcommands: [
        { name: "list", description: "List policy metadata resources" },
        { name: "show", description: "Get a single policy metadata resource" },
      ],
    },
    {
      name: "remediation",
      description: "Manage resource policy remediations",
      subcommands: [
        { name: "cancel", description: "Cancel a resource policy remediation" },
        { name: "create", description: "Create a resource policy remediation" },
        { name: "delete", description: "Delete a resource policy remediation" },
        {
          name: "deployment",
          description: "Manage resource policy remediation deployments",
          subcommands: [
            {
              name: "list",
              description:
                "Lists deployments for a resource policy remediation",
            },
          ],
        },
        { name: "list", description: "List resource policy remediations" },
        { name: "show", description: "Show a resource policy remediation" },
      ],
    },
    {
      name: "set-definition",
      description: "Manage resource policy set definitions",
      subcommands: [
        { name: "create", description: "Create a policy set definition" },
        { name: "delete", description: "Delete a policy set definition" },
        { name: "list", description: "List policy set definitions" },
        { name: "show", description: "Show a policy set definition" },
        { name: "update", description: "Update a policy set definition" },
      ],
    },
    {
      name: "state",
      description: "Manage policy compliance states",
      subcommands: [
        { name: "list", description: "List policy compliance states" },
        {
          name: "summarize",
          description: "Summarize policy compliance states",
        },
        {
          name: "trigger-scan",
          description: "Trigger a policy compliance evaluation for a scope",
        },
      ],
    },
  ],
};

export default completionSpec;
