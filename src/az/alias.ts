const completionSpec: Fig.Spec = {
  name: "alias",
  description: "Manage Azure CLI Aliases",
  subcommands: [
    { name: "create", description: "Create an alias" },
    {
      name: "export",
      description:
        "Export all registered aliases to a given path, as an INI configuration file. If no export path is specified, the alias configuration file is exported to the current working directory",
    },
    {
      name: "import",
      description: "Import aliases from an INI configuration file or an URL",
    },
    { name: "list", description: "List the registered aliases" },
    {
      name: "remove",
      description:
        "Remove one or more aliases. Aliases to be removed are space-delimited",
    },
    { name: "remove-all", description: "Remove all registered aliases" },
  ],
};

export default completionSpec;
