const completionSpec: Fig.Spec = {
  name: "mesh",
  description: "(PREVIEW) Manage Azure Service Fabric Mesh Resources",
  subcommands: [
    {
      name: "app",
      description: "Manage Service Fabric Mesh applications",
      subcommands: [
        {
          name: "delete",
          description: "Delete a Service Fabric Mesh application",
        },
        { name: "list", description: "List Service Fabric Mesh applications" },
        {
          name: "show",
          description: "Get the details of a Service Fabric Mesh application",
        },
      ],
    },
    {
      name: "code-package-log",
      description: "Examine the logs for a codepackage",
      subcommands: [
        { name: "get", description: "Examine the logs for a codepackage" },
      ],
    },
    {
      name: "deployment",
      description: "Manage Service Fabric Mesh deployments",
      subcommands: [
        {
          name: "create",
          description: "Create a Service Fabric Mesh application",
        },
      ],
    },
    {
      name: "gateway",
      description: "Manage gateway resources",
      subcommands: [
        { name: "delete", description: "Delete a gateway resource" },
        { name: "list", description: "List gateway resources" },
        { name: "show", description: "Get the details of a gateway" },
      ],
    },
    {
      name: "generate",
      description: "Generate Service Fabric Mesh deployment template",
      subcommands: [
        {
          name: "armtemplate",
          description:
            "Generate a Service Fabric Mesh ARM deployment template from input yaml",
        },
      ],
    },
    {
      name: "network",
      description: "Manage networks",
      subcommands: [
        { name: "delete", description: "Delete a network" },
        { name: "list", description: "List networks" },
        { name: "show", description: "Get the details of a network" },
      ],
    },
    {
      name: "secret",
      description: "Manage secret resources",
      subcommands: [
        { name: "delete", description: "Delete a secret" },
        { name: "list", description: "List Secrets" },
        { name: "show", description: "Get the details of a secret" },
      ],
    },
    {
      name: "secretvalue",
      description: "Manage secret values",
      subcommands: [
        { name: "delete", description: "Delete a secret version" },
        { name: "list", description: "List Secrets versions" },
        { name: "show", description: "Get the details of a secret value" },
      ],
    },
    {
      name: "service",
      description: "Manage Service Fabric Mesh services",
      subcommands: [
        { name: "list", description: "Lists all the service resources" },
        { name: "show", description: "Get the details of a service" },
      ],
    },
    {
      name: "service-replica",
      description: "Manage Service Fabric Mesh service replicas",
      subcommands: [
        { name: "list", description: "List the details of service replicas" },
        {
          name: "show",
          description:
            "Gets the given replica of the service of an application",
        },
      ],
    },
    {
      name: "volume",
      description: "Manage volumes",
      subcommands: [
        { name: "create", description: "Create a volume" },
        { name: "delete", description: "Delete a volume" },
        { name: "list", description: "List volumes" },
        { name: "show", description: "Get the details of a volume" },
      ],
    },
  ],
};

export default completionSpec;
