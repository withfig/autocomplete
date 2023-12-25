const completion: Fig.Spec = {
  name: "alias",
  description: "Manage Azure CLI Aliases",
  subcommands: [
    {
      name: "create",
      description: "Create an alias",
      options: [
        {
          name: ["--command", "-c"],
          description: "The command that the alias points to",
          args: { name: "command" },
          isRequired: true,
        },
        {
          name: ["--name", "-n"],
          description: "The name of the alias",
          args: { name: "name" },
          isRequired: true,
        },
      ],
    },
    {
      name: "export",
      description:
        "Export all registered aliases to a given path, as an INI configuration file. If no export path is specified, the alias configuration file is exported to the current working directory",
      options: [
        {
          name: ["--exclude", "-e"],
          description: "Space-separated aliases excluded from export",
          args: { name: "exclude" },
        },
        {
          name: ["--path", "-p"],
          description: "The path of the alias configuration file to export to",
          args: { name: "path" },
        },
      ],
    },
    {
      name: "import",
      description: "Import aliases from an INI configuration file or an URL",
      options: [
        {
          name: ["--source", "-s"],
          description: "The source of the aliases to import from",
          args: { name: "source" },
          isRequired: true,
        },
      ],
    },
    { name: "list", description: "List the registered aliases" },
    {
      name: "remove",
      description:
        "Remove one or more aliases. Aliases to be removed are space-delimited",
      options: [
        {
          name: ["--name", "-n"],
          description: "Space-separated aliases",
          args: { name: "name" },
          isRequired: true,
        },
      ],
    },
    {
      name: "remove-all",
      description: "Remove all registered aliases",
      options: [
        {
          name: ["--yes", "-y"],
          description: "Do not prompt for confirmation",
        },
      ],
    },
  ],
};

export default completion;
