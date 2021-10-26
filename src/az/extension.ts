const completionSpec: Fig.Spec = {
  name: "extension",
  description: "Manage and update CLI extensions",
  subcommands: [
    { name: "add", description: "Add an extension" },
    { name: "list", description: "List the installed extensions" },
    {
      name: "list-available",
      description: "List publicly available extensions",
    },
    {
      name: "list-versions",
      description: "List available versions for an extension",
    },
    { name: "remove", description: "Remove an extension" },
    { name: "show", description: "Show an extension" },
    { name: "update", description: "Update an extension" },
  ],
};

export default completionSpec;
