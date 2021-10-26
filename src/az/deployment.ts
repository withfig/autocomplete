const completionSpec: Fig.Spec = {
  name: "deployment",
  description:
    "Manage Azure Resource Manager template deployment at subscription scope",
  subcommands: [
    {
      name: "cancel",
      description: "Cancel a deployment at subscription scope",
    },
    { name: "create", description: "Start a deployment at subscription scope" },
    {
      name: "delete",
      description: "Delete a deployment at subscription scope",
    },
    {
      name: "export",
      description: "Export the template used for a deployment",
    },
    {
      name: "group",
      description:
        "Manage Azure Resource Manager template deployment at resource group",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel a deployment at resource group",
        },
        { name: "create", description: "Start a deployment at resource group" },
        {
          name: "delete",
          description: "Delete a deployment at resource group",
        },
        {
          name: "export",
          description: "Export the template used for a deployment",
        },
        { name: "list", description: "List deployments at resource group" },
        { name: "show", description: "Show a deployment at resource group" },
        {
          name: "validate",
          description: "Validate whether a template is valid at resource group",
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a deployment condition is met",
        },
        {
          name: "what-if",
          description:
            "Execute a deployment What-If operation at resource group scope",
        },
      ],
    },
    { name: "list", description: "List deployments at subscription scope" },
    {
      name: "mg",
      description:
        "Manage Azure Resource Manager template deployment at management group",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel a deployment at management group",
        },
        {
          name: "create",
          description: "Start a deployment at management group",
        },
        {
          name: "delete",
          description: "Delete a deployment at management group",
        },
        {
          name: "export",
          description: "Export the template used for a deployment",
        },
        { name: "list", description: "List deployments at management group" },
        { name: "show", description: "Show a deployment at management group" },
        {
          name: "validate",
          description:
            "Validate whether a template is valid at management group",
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a deployment condition is met",
        },
        {
          name: "what-if",
          description:
            "Execute a deployment What-If operation at management group scope",
        },
      ],
    },
    {
      name: "operation",
      description: "Manage deployment operations at subscription scope",
      subcommands: [
        {
          name: "group",
          description: "Manage deployment operations at resource group",
          subcommands: [
            {
              name: "list",
              description: "List deployment operations at resource group",
            },
            {
              name: "show",
              description: "Show a deployment operation at resource group",
            },
          ],
        },
        {
          name: "list",
          description: "List deployment operations at subscription scope",
        },
        {
          name: "mg",
          description: "Manage deployment operations at management group",
          subcommands: [
            {
              name: "list",
              description: "List deployment operations at management group",
            },
            {
              name: "show",
              description: "Show a deployment operation at management group",
            },
          ],
        },
        {
          name: "show",
          description: "Show a deployment operation at subscription scope",
        },
        {
          name: "sub",
          description: "Manage deployment operations at subscription scope",
          subcommands: [
            {
              name: "list",
              description: "List deployment operations at subscription scope",
            },
            {
              name: "show",
              description: "Show a deployment operation at subscription scope",
            },
          ],
        },
        {
          name: "tenant",
          description: "Manage deployment operations at tenant scope",
          subcommands: [
            {
              name: "list",
              description: "List deployment operations at tenant scope",
            },
            {
              name: "show",
              description: "Show a deployment operation at tenant scope",
            },
          ],
        },
      ],
    },
    { name: "show", description: "Show a deployment at subscription scope" },
    {
      name: "sub",
      description:
        "Manage Azure Resource Manager template deployment at subscription scope",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel a deployment at subscription scope",
        },
        {
          name: "create",
          description: "Start a deployment at subscription scope",
        },
        {
          name: "delete",
          description: "Delete a deployment at subscription scope",
        },
        {
          name: "export",
          description: "Export the template used for a deployment",
        },
        { name: "list", description: "List deployments at subscription scope" },
        {
          name: "show",
          description: "Show a deployment at subscription scope",
        },
        {
          name: "validate",
          description:
            "Validate whether a template is valid at subscription scope",
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a deployment condition is met",
        },
        {
          name: "what-if",
          description:
            "Execute a deployment What-If operation at subscription scope",
        },
      ],
    },
    {
      name: "tenant",
      description:
        "Manage Azure Resource Manager template deployment at tenant scope",
      subcommands: [
        { name: "cancel", description: "Cancel a deployment at tenant scope" },
        { name: "create", description: "Start a deployment at tenant scope" },
        { name: "delete", description: "Delete a deployment at tenant scope" },
        {
          name: "export",
          description: "Export the template used for a deployment",
        },
        { name: "list", description: "List deployments at tenant scope" },
        { name: "show", description: "Show a deployment at tenant scope" },
        {
          name: "validate",
          description: "Validate whether a template is valid at tenant scope",
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a deployment condition is met",
        },
        {
          name: "what-if",
          description: "Execute a deployment What-If operation at tenant scope",
        },
      ],
    },
    {
      name: "validate",
      description: "Validate whether a template is valid at subscription scope",
    },
    {
      name: "wait",
      description:
        "Place the CLI in a waiting state until a deployment condition is met",
    },
  ],
};

export default completionSpec;
