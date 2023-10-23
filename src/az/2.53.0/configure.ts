const completion: Fig.Spec = {
  name: "configure",
  description: "Manage Azure CLI configuration. This command is interactive",
  options: [
    {
      name: ["--defaults", "-d"],
      description:
        "Space-separated 'name=value' pairs for common argument defaults",
      args: { name: "defaults" },
    },
    {
      name: ["--list-defaults", "-l"],
      description: "List all applicable defaults",
      args: { name: "list-defaults", suggestions: ["false", "true"] },
    },
    {
      name: "--scope",
      description:
        'Scope of defaults. Using "local" for settings only effective under current folder',
      args: { name: "scope", suggestions: ["global", "local"] },
    },
  ],
};

export default completion;
