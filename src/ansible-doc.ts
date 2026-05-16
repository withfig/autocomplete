const allPluginsGenerator: Fig.Generator = {
  script: ["ansible-doc", "--list", "--json"],
  postProcess: function (output) {
    const plugins = JSON.parse(output);
    return Object.keys(plugins).map((key) => ({
      name: key,
      description: plugins[key],
    }));
  },
};

const completionSpec: Fig.Spec = {
  name: "ansible-doc",
  description: "Displays information on modules installed in Ansible libraries",
  options: [
    {
      name: "--metadata-dump",
      description:
        "For internal testing only Dump json metadata for all plugins",
      args: {
        isOptional: true,
      },
    },
    {
      name: "--playbook-dir",
      description:
        "Sets the relative path for many features including roles/ group_vars/ etc",
      args: {
        name: "BASEDIR",
        description: "Base directory",
        template: ["filepaths"],
      },
    },
    {
      name: "--version",
      description:
        "Shows version number, config file location, module search path, module location, executable location and exit",
      args: {
        isOptional: true,
      },
    },
    {
      name: ["--list_files", "-F"],
      description:
        "Show plugin names and their source files without summaries (implies --list)",
      args: {
        isOptional: true,
      },
    },
    {
      name: ["--module-path", "-M"],
      description: "Prepend colon-separated path(s) to module library",
      args: {
        isOptional: true,
      },
    },
    {
      name: ["--entry-point", "-E"],
      description: "Select the entry point for role(s)",
      args: {
        name: "ENTRY_POINT",
      },
    },
    {
      name: ["--help", "-h"],
      description: "Show help and exit",
      args: {
        isOptional: true,
      },
    },
    {
      name: ["--json", "-j"],
      description: "Change output into json format",
      args: {
        isOptional: true,
      },
    },
    {
      name: ["--list", "-l"],
      description:
        "List available plugins; a supplied argument will be used for filtering (can be a namespace or full collection name)",
      args: {
        name: "NAMESPACE|COLLECTION",
        isOptional: true,
        isDangerous: true,
      },
    },
    {
      name: ["--roles-path", "-r"],
      description: "The path to the directory containing your roles",
      args: {
        name: "PATH",
        template: ["filepaths"],
      },
    },
    {
      name: ["--snippet", "-s"],
      description:
        "Show playbook snippet for these plugin types: inventory, lookup, module",
      args: {
        name: "PLUGIN_TYPE",
        suggestions: ["inventory", "lookup", "module"],
      },
    },
    {
      name: ["--type", "-t"],
      description: 'Choose which plugin type (defaults to "module")',
      args: {
        name: "PLUGIN_TYPE",
        suggestions: [
          "become",
          "cache",
          "callback",
          "cliconf",
          "connection",
          "httpapi",
          "inventory",
          "lookup",
          "netconf",
          "shell",
          "vars",
          "module",
          "strategy",
          "role",
          "keyword",
        ],
        default: "module",
      },
    },
    {
      name: "--verbose",
      description:
        "Verbose mode (-vvv for more, -vvvv to enable connection debugging)",
      exclusiveOn: ["-v"],
      args: {
        isOptional: true,
      },
    },
    {
      name: "-v",
      description:
        "Verbose mode (-vvv for more, -vvvv to enable connection debugging)",
      isRepeatable: 5,
      exclusiveOn: ["--verbose"],
      args: {
        isOptional: true,
      },
    },
  ],
  args: {
    name: "plugin",
    isDangerous: true,
    isVariadic: true,
    generators: allPluginsGenerator,
  },
};

export default completionSpec;
