const completionSpec: Fig.Spec = {
  name: "codespace",
  description: "Manage Visual Studio Codespaces",
  subcommands: [
    { name: "create", description: "Create a Codespace" },
    { name: "delete", description: "Delete a Codespace" },
    { name: "list", description: "List Codespaces" },
    {
      name: "location",
      description: "Information on available regions",
      subcommands: [
        { name: "list", description: "List available regions" },
        { name: "show", description: "Show details of a region" },
      ],
    },
    { name: "open", description: "Open a Codespace in the web browser" },
    {
      name: "plan",
      description: "Manage Codespace plans",
      subcommands: [
        { name: "create", description: "Create a Codespace plan" },
        { name: "delete", description: "Delete a Codespace plan" },
        { name: "list", description: "List Codespace plans" },
        { name: "show", description: "Show details of a Codespace plan" },
      ],
    },
    { name: "resume", description: "Resume a Codespace" },
    {
      name: "secret",
      description: "Manage plan secrets",
      subcommands: [
        { name: "create", description: "Create a plan secret" },
        { name: "delete", description: "Delete a plan secret" },
        { name: "list", description: "List plan secrets" },
        { name: "update", description: "Update a plan secret" },
      ],
    },
    {
      name: "set-config",
      description: "Set configuration for codespace commands",
    },
    { name: "show", description: "Show details of a Codespace" },
    {
      name: "show-config",
      description: "Show current configuration for codespace commands",
    },
    { name: "suspend", description: "Suspend a Codespace" },
    { name: "update", description: "Update a Codespace" },
  ],
};

export default completionSpec;
