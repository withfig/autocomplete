const completionSpec: Fig.Spec = {
  name: "lab",
  description: "Manage Azure DevTest Labs",
  subcommands: [
    {
      name: "arm-template",
      description:
        "Manage Azure Resource Manager (ARM) templates in an Azure DevTest Lab",
      subcommands: [
        {
          name: "list",
          description:
            "List azure resource manager templates in a given artifact source",
        },
        {
          name: "show",
          description: "Get the details of an ARM template in a lab",
        },
      ],
    },
    {
      name: "artifact",
      description: "Manage DevTest Labs artifacts",
      subcommands: [
        {
          name: "list",
          description: "List artifacts in a given artifact source",
        },
      ],
    },
    {
      name: "artifact-source",
      description: "Manage DevTest Lab artifact sources",
      subcommands: [
        { name: "list", description: "List artifact sources in a given lab" },
        { name: "show", description: "Get artifact source" },
      ],
    },
    {
      name: "custom-image",
      description: "Manage custom images of a DevTest Lab",
      subcommands: [
        {
          name: "create",
          description: "Create a custom image in a DevTest Lab",
        },
        { name: "delete", description: "Delete custom image" },
        { name: "list", description: "List custom images in a given lab" },
        { name: "show", description: "Get custom image" },
      ],
    },
    { name: "delete", description: "Delete lab" },
    {
      name: "environment",
      description: "Manage environments for an Azure DevTest Lab",
      subcommands: [
        { name: "create", description: "Create an environment in a lab" },
        { name: "delete", description: "Delete an environment from a lab" },
        { name: "list", description: "List environments in a lab" },
        {
          name: "show",
          description: "Get the details for an environment of a lab",
        },
      ],
    },
    {
      name: "formula",
      description: "Manage formulas for an Azure DevTest Lab",
      subcommands: [
        { name: "delete", description: "Delete formula" },
        {
          name: "export-artifacts",
          description: "Export artifacts from a formula",
        },
        { name: "list", description: "List formulas in a given lab" },
        {
          name: "show",
          description: "Show formulae from an Azure DevTest Lab",
        },
      ],
    },
    {
      name: "gallery-image",
      description: "List Azure Marketplace images allowed for a DevTest Lab",
      subcommands: [
        { name: "list", description: "List gallery images in a given lab" },
      ],
    },
    { name: "get", description: "Get lab" },
    {
      name: "secret",
      description: "Manage secrets of an Azure DevTest Lab",
      subcommands: [
        { name: "delete", description: "Delete secret" },
        { name: "list", description: "List secrets in a given user profile" },
        { name: "set", description: "Set a secret for a lab" },
        { name: "show", description: "Get secret" },
      ],
    },
    {
      name: "vm",
      description: "Manage VMs in an Azure DevTest Lab",
      subcommands: [
        {
          name: "apply-artifacts",
          description:
            "Apply artifacts to a virtual machine in Azure DevTest Lab",
        },
        { name: "claim", description: "Claim a virtual machine from the Lab" },
        { name: "create", description: "Create a VM in a lab" },
        { name: "delete", description: "Delete virtual machine" },
        { name: "list", description: "List the VMs in an Azure DevTest Lab" },
        { name: "show", description: "Get virtual machine" },
        { name: "start", description: "Start a virtual machine" },
        {
          name: "stop",
          description:
            "Stop a virtual machine This operation can take a while to complete",
        },
      ],
    },
    {
      name: "vnet",
      description: "Manage virtual networks of an Azure DevTest Lab",
      subcommands: [
        { name: "get", description: "Get virtual network" },
        { name: "list", description: "List virtual networks in a given lab" },
      ],
    },
  ],
};

export default completionSpec;
