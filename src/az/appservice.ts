const completionSpec: Fig.Spec = {
  name: "appservice",
  description: "Manage App Service plans",
  subcommands: [
    {
      name: "ase",
      description: "Manage App Service Environments",
      subcommands: [
        { name: "create", description: "Create app service environment" },
        {
          name: "create-inbound-services",
          description: "Private DNS Zone for Internal ASEv2",
        },
        { name: "delete", description: "Delete app service environment" },
        { name: "list", description: "List app service environments" },
        {
          name: "list-addresses",
          description:
            "List VIPs associated with an app service environment v2",
        },
        {
          name: "list-plans",
          description:
            "List app service plans associated with an app service environment",
        },
        {
          name: "show",
          description: "Show details of an app service environment",
        },
        { name: "update", description: "Update app service environment v2" },
      ],
    },
    {
      name: "domain",
      description: "Manage custom domains",
      subcommands: [
        { name: "create", description: "Create and purchase a custom domain" },
        {
          name: "show-terms",
          description:
            "Show the legal terms for purchasing and creating a custom domain",
        },
      ],
    },
    {
      name: "hybrid-connection",
      description: "A method that sets the key a hybrid-connection uses",
      subcommands: [
        {
          name: "set-key",
          description:
            "Set the key that all apps in an appservice plan use to connect to the hybrid-connections in that appservice plan",
        },
      ],
    },
    {
      name: "list-locations",
      description: "List regions where a plan sku is available",
    },
    {
      name: "plan",
      description: "Manage app service plans",
      subcommands: [
        { name: "create", description: "Create an app service plan" },
        { name: "delete", description: "Delete an app service plan" },
        { name: "list", description: "List app service plans" },
        {
          name: "show",
          description:
            "Get the app service plans for a resource group or a set of resource groups",
        },
        { name: "update", description: "Update an app service plan" },
      ],
    },
    {
      name: "vnet-integration",
      description:
        "A method that lists the virtual network integrations used in an appservice plan",
      subcommands: [
        {
          name: "list",
          description:
            "List the virtual network integrations used in an appservice plan",
        },
      ],
    },
  ],
};

export default completionSpec;
