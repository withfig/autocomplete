const completionSpec: Fig.Spec = {
  name: "desktopvirtualization",
  description: "Manage desktop virtualization",
  subcommands: [
    {
      name: "applicationgroup",
      description: "Desktopvirtualization applicationgroup",
      subcommands: [
        { name: "create", description: "Create or update an applicationGroup" },
        { name: "delete", description: "Remove an applicationGroup" },
        { name: "list", description: "List applicationGroups in subscription" },
        { name: "show", description: "Get an application group" },
        { name: "update", description: "Update an applicationGroup" },
      ],
    },
    {
      name: "hostpool",
      description: "Desktopvirtualization hostpool",
      subcommands: [
        { name: "create", description: "Create or update a host pool" },
        { name: "delete", description: "Remove a host pool" },
        { name: "list", description: "List hostPools in subscription" },
        { name: "show", description: "Get a host pool" },
        { name: "update", description: "Update a host pool" },
      ],
    },
    {
      name: "workspace",
      description: "Desktopvirtualization workspace",
      subcommands: [
        { name: "create", description: "Create or update a workspace" },
        { name: "delete", description: "Remove a workspace" },
        { name: "list", description: "List workspaces in subscription" },
        { name: "show", description: "Get a workspace" },
        { name: "update", description: "Update a workspace" },
      ],
    },
  ],
};

export default completionSpec;
