const dependenciesGenerator: Fig.Generator = {
  script: "cat import_map.json",
  postProcess: function (out) {
    if (out) {
      const deps = JSON.parse(out);

      if (deps.imports) {
        const imports = Object.entries(deps.imports);

        const suggestions = imports.map(([name, url]) => ({
          name: name as string,
          icon: "🦖",
          description: url as string,
        }));

        return suggestions;
      }
    }
    return [];
  },
};
const scriptsGenerator: Fig.Generator = {
  script: "cat run.json",
  postProcess: function (out) {
    if (out && out !== "") {
      const scriptsObj = JSON.parse(out);

      if (scriptsObj.scripts) {
        const scripts = Object.entries(scriptsObj.scripts);

        const suggestions = scripts.map(([name, command]) => ({
          name: name as string,
          icon: "🚀",
          description: "trex script" as string,
        }));

        return suggestions;
      }
    }
    return [];
  },
};

const trexOptions: Record<string, Fig.Option> = {
  help: { name: ["-h", "--help"], description: "Print help info" },
  version: { name: ["-v", "--version"], description: "Print version" },
  map: {
    name: ["-m", "--map"],
    description: "Install package from deno.land",
    args: {
      name: "package name",
      description: "Deno.land package name",
    },
  },
  nest: {
    name: ["-n", "--nest"],
    description: "Install package from nest.land",
    args: {
      name: "package name",
      description: "Nest.land package name",
    },
  },
  pkg: {
    name: ["-p", "--pkg"],
    description: "Install package from some repository",
    args: [
      {
        name: "repository",
        description: "[user]/[repo or repo@tag/branch]/[path/to/file]",
      },
      {
        name: "Package Name",
        description: "Prefered package alias",
      },
    ],
  },
  custom: {
    name: ["-c", "--custom"],
    description: "Install custom package",
    args: {
      name: "custom package",
      description:
        "Install a package from a custom URL source, eg: React=https://dev.jspm.io/react/index.js",
    },
  },
};

const completionSpec: Fig.Spec = {
  name: "trex",
  description: "Advanced package management for deno, based on import_map.json",
  subcommands: [
    {
      name: ["i", "install"],
      description: "Install a package",
      options: [
        trexOptions.help,
        trexOptions.map,
        trexOptions.nest,
        trexOptions.pkg,
      ],
    },
    {
      name: "delete",
      description: "Delete a package",
      options: [trexOptions.help],
      args: {
        name: "package name",
        generators: dependenciesGenerator,
      },
    },
    {
      name: "upgrade",
      description: "Upgrade trex",
      options: [
        trexOptions.help,
        {
          name: "--canary",
          description: "Install from dev branch",
        },
      ],
    },
    {
      name: "tree",
      description: "View dependency tree",
      options: [trexOptions.help],
    },
    {
      name: "run",
      description: "Run a script alias in a file run.json",
      options: [
        trexOptions.help,
        {
          name: ["-w", "--watch"],
          description: "Use reboot script alias protocol (rsap)",
        },
        {
          name: "-wv",
          description: "Verbose output in --watch mode (rsap)",
        },
      ],
      args: {
        name: "script alias",
        generators: scriptsGenerator,
      },
    },
    {
      name: "purge",
      description: "Remove a package or url from cache",
      options: [trexOptions.help],
      args: {
        name: "package | url",
        generators: dependenciesGenerator,
      },
    },
    {
      name: "ls",
      description: "Shows the list of installed packages",
      options: [trexOptions.help],
    },
    {
      name: "exec",
      description: "Execute a cli tool with out install then",
      options: [
        trexOptions.help,
        {
          name: "--perms",
          description: "Specify cli permisions",
        },
      ],
      args: {
        name: "cli tool",
      },
    },
    {
      name: "check",
      description: "Check deno.land [std/x] dependencies updates",
      options: [
        trexOptions.help,
        {
          name: ["-f", "--fix"],
          description: "Update outdate dependencies",
        },
      ],
    },
  ],
  options: [trexOptions.help, trexOptions.version, trexOptions.custom],
  // Only uncomment if trex takes an argument
  // args: {}
};
export default completionSpec;
