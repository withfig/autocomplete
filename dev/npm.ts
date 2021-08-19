const searchGenerator: Fig.Generator = {
  script: function (context) {
    if (context[context.length - 1] === "") return "";
    const searchTerm = context[context.length - 1];
    return `curl -s -H "Accept: application/json" "https://api.npms.io/v2/search?q=${searchTerm}&size=20"`;
  },
  postProcess: function (out) {
    try {
      var temp = JSON.parse(out).results.map(
        (item) =>
          ({
            name: item.package.name,
            description: item.package.description,
          } as Fig.Suggestion)
      ) as Fig.Suggestion[];
    } catch (e) {
      return [];
    }

    return temp;
  },
};

const workspaceGenerator: Fig.Generator = {
  script: "cat package.json",
  postProcess: function (out) {
    const suggestions = [];

    try {
      if (out.trim() == "") {
        return { name: "workspaces" };
      }

      const packageContent = JSON.parse(out);
      const workspaces = packageContent["workspaces"];

      if (workspaces) {
        for (const workspace of workspaces) {
          suggestions.push({
            name: workspace,
            description: "Workspaces",
          });
        }
      }
    } catch (e) {
      console.log(e);
    }
    return suggestions;
  },
};

const dependenciesGenerator: Fig.Generator = {
  script: "cat package.json",
  postProcess: function (out, context) {
    if (out.trim() === "") {
      return [];
    }
    try {
      const packageContent = JSON.parse(out);
      const dependencies = packageContent["dependencies"];
      if (dependencies) {
        return Object.keys(dependencies)
          .filter(function (pkg) {
            const isListed = context.some((current) => current === pkg);
            return !isListed;
          })
          .map((name) => {
            const scope = name.indexOf("/") + 1;
            const version = name.indexOf("@");
            const displayName =
              (scope !== -1 ? name.substring(scope) : name) ||
              (version !== -1 ? name.substring(version) : name);
            return {
              name,
              displayName,
              description: "dependency",
            };
          });
      }
    } catch (e) {}
    return [];
  },
};

const npmInstallOptions: Fig.Option[] = [
  {
    name: ["-S", "--save"],
    description: " Package will be removed from your dependencies",
  },
  {
    name: ["-D", "--save-dev"],
    description: "Package will appear in your `devDependencies`",
  },
  {
    name: ["-O", "--save-optional"],
    description: "Package will appear in your `optionalDependencies`",
  },
  {
    name: "--no-save",
    description: "Prevents saving to `dependencies`",
  },
  {
    name: "-g",
    description: "Uninstall global package",
  },
  {
    name: ["-wl--workspace"],
    description:
      "Enable running a command in the context of the configured workspaces of the current project",
    args: {
      name: "workspace",
      generators: workspaceGenerator,
      isVariadic: true,
    },
  },
  {
    name: ["-wsl--workspaces"],
    description:
      "Enable running a command in the context of all the configured workspaces.",
  },
];

const npmListOptions: Fig.Option[] = [
  {
    name: ["-a", "-all"],
    description: "show all outdated or installed packages",
  },
  { name: "--json", description: "show output in json format" },
  { name: ["-l", "--long"], description: "Show extended information" },
  {
    name: ["-p", "--parseable"],
    description:
      "Output parseable results from commands that write to standard output",
  },
  {
    name: "--depth",
    description: "The depth to go when recursing packages",
    args: { name: "depth" },
  },
  {
    name: "--link",
    description: "limits output to only those packages that are linked",
  },
  {
    name: "--package-lock-only",
    description:
      "current operation will only use the package-lock.json, ignoring node_modules",
  },
  {
    name: "--no-unicode",
    description: "uses unicode characters in the tree output",
  },
  {
    name: ["-g", "--global"],
    description:
      "Operates in 'global' mode, so that packages are installed into the prefix folder instead of the current working directory.",
  },
  {
    name: ["-wl--workspace"],
    description:
      "Enable running a command in the context of the configured workspaces of the current project",
    args: {
      name: "workspace",
      generators: workspaceGenerator,
      isVariadic: true,
    },
  },
  {
    name: ["-wsl--workspaces"],
    description:
      "Enable running a command in the context of all the configured workspaces.",
  },
  {
    name: ["--omit"],
    description: "Dependency types to omit from the installation tree on disk.",
    args: {
      name: "Package type",
      default: "dev",
      suggestions: ["dev", "optional", "peer"],
    },
  },
];

const completionSpec: Fig.Spec = {
  name: "npm",
  parserDirectives: {
    flagsArePosixNoncompliant: true,
  },
  description: "Node package manager",
  subcommands: [
    {
      name: "install",
      description: "Install a package and its dependencies",
      args: {
        name: "package",
        isOptional: true,
        generators: searchGenerator,
        debounce: true,
        isVariadic: true,
      },
      options: [
        {
          name: ["-P", "--save-prod"],
          description:
            "Package will appear in your `dependencies`. This is the default unless `-D` or `-O` are present.",
        },
        {
          name: ["-D", "--save-dev"],
          description: "Package will appear in your `devDependencies`",
        },
        {
          name: ["-O", "--save-optional"],
          description: "Package will appear in your `optionalDependencies`",
        },
        {
          name: "--no-save",
          description: "Prevents saving to `dependencies`",
        },
        {
          name: ["-E", "--save-exact"],
          description:
            "Saved dependencies will be configured with an exact version rather than using npm's default semver range operator",
        },
        {
          name: ["-B", "--save-bundle"],
          description:
            "Saved dependencies will also be added to your bundleDependencies list.",
        },
        {
          name: ["-g", "--global"],
          description:
            "Operates in 'global' mode, so that packages are installed into the prefix folder instead of the current working directory.",
        },
        {
          name: ["--global-style"],
          description:
            "Causes npm to install the package into your local node_modules folder with the same layout it uses with the global node_modules folder.",
        },
        {
          name: ["--legacy-bundling"],
          description:
            "Causes npm to install the package such that versions of npm prior to 1.4, such as the one included with node 0.8, can install the package.",
        },
        {
          name: ["--strict-peer-deps"],
          description:
            "If set to true, and --legacy-peer-deps is not set, then any conflicting peerDependencies will be treated as an install failure.",
        },
        {
          name: ["--no-package-lock"],
          description: "Ignores package-lock.json files when installing.",
        },
        {
          name: ["--omit"],
          description:
            "Dependency types to omit from the installation tree on disk.",
          args: {
            name: "Package type",
            default: "dev",
            suggestions: ["dev", "optional", "peer"],
          },
        },
        {
          name: ["--ignore-scripts"],
          description:
            "If true, npm does not run scripts specified in package.json files.",
        },
        {
          name: ["--no-audit"],
          description:
            "Submit audit reports alongside the current npm command to the default registry and all registries configured for scopes.",
        },
        {
          name: ["--no-bin-links"],
          description:
            "Tells npm to not create symlinks (or .cmd shims on Windows) for package executables.",
        },
        {
          name: ["--no-fund"],
          description:
            "Hides the message at the end of each npm install acknowledging the number of dependencies looking for funding.",
        },
        {
          name: ["--dry-run"],
          description:
            "Indicates that you don't want npm to make any changes and that it should only report what it would have done.",
        },
        {
          name: ["-wl--workspace"],
          description:
            "Enable running a command in the context of the configured workspaces of the current project",
          args: {
            name: "workspace",
            generators: workspaceGenerator,
            isVariadic: true,
          },
        },
        {
          name: ["-wsl--workspaces"],
          description:
            "Enable running a command in the context of all the configured workspaces.",
        },
      ],
    },
    {
      name: "run",
      description: "run arbitrary package scripts",
      options: [
        {
          name: ["-wl--workspace"],
          description:
            "Enable running a command in the context of the configured workspaces of the current project",
          args: {
            name: "workspace",
            generators: workspaceGenerator,
            isVariadic: true,
          },
        },
        {
          name: ["-wsl--workspaces"],
          description:
            "Enable running a command in the context of all the configured workspaces.",
        },
        {
          name: "--if-present",
          description:
            "npm will not exit with an error code when run-script is invoked for a script that isn't defined in the scripts section of package.json",
        },
        {
          name: "--silent",
          description: "",
        },
        {
          name: "--ignore-scripts",
          description: "",
        },
        {
          name: "--script-shell",
          args: { name: "shell" },
        },
      ],
      args: [
        {
          generators: {
            script:
              "until [[ -f package.json ]] || [[ $PWD = '/' ]]; do cd ..; done; cat package.json",
            // splitOn: "\n",
            postProcess: function (out) {
              if (out.trim() == "") {
                return [];
              }

              try {
                var packageContent = JSON.parse(out);
                var scripts = packageContent["scripts"];
                var figCompletions = packageContent["fig"];

                if (scripts) {
                  const keys = Object.keys(scripts).map((key) => {
                    var val = scripts[key] || "";
                    return Object.assign(
                      {},
                      { icon: "fig://icon?type=npm" },
                      { description: typeof val === "string" ? val : "" },
                      (figCompletions || {})[key], // need the || {} otherwise it errors
                      { name: key, insertValue: key }
                    ); // ensure that name and insertValue are defined by "scripts" dict
                  });
                  return keys;
                }
              } catch (e) {
                console.error(e);
              }

              return [];
            },
          },
        },
      ],
    },
    {
      name: "init",
      description: "trigger the initialization",
      options: [
        {
          name: ["-y", "--yes"],
          description:
            "Automatically answer 'yes' to any prompts that npm might print on the command line",
        },
        {
          name: "-w",
          description:
            "create the folders and boilerplate expected while also adding a reference to your project workspaces property",
          args: { name: "dir" },
        },
      ],
    },
    { name: "access", description: "set access controls on private packages" },
    { name: "adduser", description: "add a registry user account" },
    {
      name: "audit",
      description: "run a security audit",
      options: [
        {
          name: ["-wl--workspace"],
          description:
            "Enable running a command in the context of the configured workspaces of the current project",
          args: {
            name: "workspace",
            generators: workspaceGenerator,
            isVariadic: true,
          },
        },
        {
          name: ["-wsl--workspaces"],
          description:
            "Enable running a command in the context of all the configured workspaces.",
        },
        {
          name: "--audit-level",
          description:
            "The minimum level of vulnerability for npm audit to exit with a non-zero exit code",
          args: {
            name: "audit",
            suggestions: [
              "info",
              "low",
              "moderate",
              "high",
              "critical",
              "none",
            ],
          },
        },
        {
          name: "--package-lock-only",
          description:
            "current operation will only use the package-lock.json, ignoring node_modules",
        },
        { name: ["--json"], description: "Shows settings in json format" },
        {
          name: ["--omit"],
          description:
            "Dependency types to omit from the installation tree on disk.",
          args: {
            name: "Package type",
            default: "dev",
            suggestions: ["dev", "optional", "peer"],
          },
        },
      ],
    },
    {
      name: "bin",
      description: "display npm bin folder",
      options: [
        {
          name: ["-g"],
          description:
            "Print the global folder where npm will install executables",
        },
      ],
    },
    {
      name: "bugs",
      description: "show the bugs that might exist for a package",
    },
    { name: "c", description: "manage the npm configuration files" },
    {
      name: "cache",
      description: "manipulates packages cache",
      subcommands: [
        {
          name: "add",
          args: { name: "Add the specified packages to the local cache" },
        },
      ],
      options: [
        {
          name: "--cache",
          args: { name: "cache" },
          description: "the location of npm's cache directory",
        },
      ],
    },
    { name: "ci", description: "install a project with a clean slate" },
    {
      name: "cit",
      description: "install a project with a clean slate and run tests",
    },
    {
      name: "clean-install",
      description: "install a project with a clean slate",
    },
    {
      name: "clean-install-test",
      description: "install a project with a clean slate and run tests",
    },
    { name: "completion", description: "tab completion for npm" },
    {
      name: "config",
      description: "manage the npm configuration files",
      subcommands: [
        {
          name: "set",
          description: "Sets the config key to the value",
          args: [{ name: "key" }, { name: "value" }],
          options: [
            { name: ["-g", "--global"], description: "Sets it globally" },
          ],
        },
        {
          name: "get",
          description: "Echo the config value to stdout",
          args: { name: "key" },
        },
        {
          name: "list",
          description: "Show all the config settings",
          options: [
            { name: ["-g"], description: "Lists globally installed packages" },
            { name: ["-l"], description: "Also shows defaults" },
            { name: ["--json"], description: "Shows settings in json format" },
          ],
        },
        {
          name: "delete",
          description: "Deletes the key from all configuration files",
          args: { name: "key" },
        },
        {
          name: "edit",
          description: "Opens the config file in an editor",
          options: [
            { name: ["--global"], description: "Edits the global config" },
          ],
          args: {
            name: "package",
            generators: dependenciesGenerator,
          },
        },
      ],
    },
    { name: "create", description: "create a package.json file" },
    { name: "ddp", description: "reduce duplication" },
    { name: "dedupe", description: "reduce duplication" },
    {
      name: "deprecate",
      description: "deprecate a version of a package",
      options: [
        {
          name: "--registry",
          description: "The base URL of the npm registry",
          args: { name: "registry" },
        },
      ],
    },
    { name: "dist-tag", description: "modify package distribution tags" },
    { name: "docs", description: "docs for a package in a web browser maybe" },
    { name: "doctor", description: "check your environments" },
    { name: "edit", description: "edit an installed package" },
    {
      name: "explore",
      description: "browse an installed package",
      args: {
        name: "package",
        generators: dependenciesGenerator,
      },
    },
    { name: "fund", description: "retrieve funding information" },
    { name: "get", description: "echo the config value to stdout" },
    { name: "help", description: "search npm help documentation" },
    { name: "help-search", description: "get help on npm" },
    { name: "hook", description: "manage registry hooks" },
    {
      name: "i",
      description: "Install a package and its dependencies",
      args: {
        name: "package",
        isOptional: true,
        generators: searchGenerator,
        debounce: true,
        isVariadic: true,
      },
    },
    {
      name: "install-ci-test",
      description: "install a project with a clean slate and run tests",
    },
    { name: "install-test", description: "install package(s) and run tests" },
    { name: "it", description: "install package(s) and run tests" },
    { name: "link", description: "symlink a package folder" },
    {
      name: "list",
      description: "list installed packages",
      options: npmListOptions,
    },
    { name: "ln", description: "symlink a package folder" },
    { name: "login", description: "log in of the registry" },
    { name: "logout", description: "log out of the registry" },
    {
      name: "ls",
      description: "list installed packages",
      options: npmListOptions,
    },
    { name: "org", description: "manage orgs" },
    {
      name: "outdated",
      description: "check for outdated packages",
      options: [
        {
          name: ["-a", "-all"],
          description: "show all outdated or installed packages",
        },
        { name: "--json", description: "show output in json format" },
        { name: ["-l", "--long"], description: "Show extended information" },
        {
          name: ["-p", "--parseable"],
          description:
            "Output parseable results from commands that write to standard output",
        },
        {
          name: "-g",
          description: "checks globally",
        },
        {
          name: ["-wl--workspace"],
          description:
            "Enable running a command in the context of the configured workspaces of the current project",
          args: {
            name: "workspace",
            generators: workspaceGenerator,
            isVariadic: true,
          },
        },
        {
          name: ["-wsl--workspaces"],
          description:
            "Enable running a command in the context of all the configured workspaces.",
        },
      ],
    },
    { name: "owner", description: "manage package owners" },
    { name: "pack", description: "create a tarball from a package" },
    { name: "ping", description: "ping npm registry" },
    {
      name: "prefix",
      description: "display prefix",
      options: [
        {
          name: ["-g"],
          description: "Print the global prefix to standard out",
        },
      ],
    },
    {
      name: "profile",
      description: "change settings on your registry profile",
    },
    {
      name: "prune",
      description: "remove extraneous packages",
      options: [
        {
          name: ["--dry-run"],
          description:
            "Indicates that you don't want npm to make any changes and that it should only report what it would have done.",
        },
        { name: "--json", description: "show output in json format" },
        {
          name: "--production",
          description: "remove the packages specified in your devDependencies",
        },
      ],
    },
    { name: "publish", description: "publish a package" },
    { name: "rb", description: "rebuild a package" },
    { name: "rebuild", description: "rebuild a package" },
    {
      name: "repo",
      description: "open package repository page in the browser",
      args: {
        name: "package",
        isOptional: true,
        generators: searchGenerator,
        debounce: true,
      },
    },
    { name: "restart", description: "restart a package" },
    {
      name: "root",
      description: "display npm root",
      options: [
        {
          name: ["-g"],
          description:
            "Print the effective global node_modules folder to standard out.",
        },
      ],
    },
    { name: "run-script", description: "run arbitrary package scripts" },
    { name: "s", description: "search for packages" },
    { name: "se", description: "search for packages" },
    { name: "search", description: "search for packages" },
    { name: "set", description: "sets the config key to the value" },
    {
      name: "shrinkwrap",
      description: "lock down dependency versions for publication",
    },
    { name: "star", description: "mark your favorite packages" },
    { name: "stars", description: "view packages marked as favorites" },
    {
      name: "start",
      description: "start a package",
      options: [
        {
          name: ["--ignore-scripts"],
          description:
            "If true, npm does not run scripts specified in package.json files.",
        },
        {
          name: "--script-shell",
          args: { name: "shell" },
        },
      ],
    },
    { name: "stop", description: "stop a package" },
    { name: "t", description: "test a package" },
    {
      name: "team",
      description: "manage organization teams and team memberships",
    },
    { name: "test", description: "test a package" },
    { name: "token", description: "manage your authentication tokens" },
    { name: "tst", description: "test a package" },
    {
      name: "un",
      description: "uninstall a package",
      args: [
        {
          name: "package",
          generators: dependenciesGenerator,
          isVariadic: true,
        },
      ],
      options: npmInstallOptions,
    },
    {
      name: "r",
      description: "uninstall a package",
      args: [
        {
          name: "package",
          generators: dependenciesGenerator,
          isVariadic: true,
        },
      ],
      options: npmInstallOptions,
    },
    {
      name: "rm",
      description: "uninstall a package",
      args: [
        {
          name: "package",
          generators: dependenciesGenerator,
          isVariadic: true,
        },
      ],
      options: npmInstallOptions,
    },
    {
      name: "remove",
      description: "uninstall a package",
      args: [
        {
          name: "package",
          generators: dependenciesGenerator,
          isVariadic: true,
        },
      ],
      options: npmInstallOptions,
    },
    {
      name: "uninstall",
      description: "remove a package",
      args: [
        {
          name: "package",
          generators: dependenciesGenerator,
          isVariadic: true,
        },
      ],
      options: npmInstallOptions,
    },
    { name: "unpublish", description: "remove a package from the registry" },
    { name: "unstar", description: "unmark your package" },
    { name: "up", description: "check the latest version of dependencies" },
    {
      name: "update",
      description: "update a package",
      options: [
        { name: "-g", description: "update global package" },
        {
          name: ["--global-style"],
          description:
            "Causes npm to install the package into your local node_modules folder with the same layout it uses with the global node_modules folder.",
        },
        {
          name: ["--legacy-bundling"],
          description:
            "Causes npm to install the package such that versions of npm prior to 1.4, such as the one included with node 0.8, can install the package.",
        },
        {
          name: ["--strict-peer-deps"],
          description:
            "If set to true, and --legacy-peer-deps is not set, then any conflicting peerDependencies will be treated as an install failure.",
        },
        {
          name: ["--no-package-lock"],
          description: "Ignores package-lock.json files when installing.",
        },
        {
          name: ["--omit"],
          description:
            "Dependency types to omit from the installation tree on disk.",
          args: {
            name: "Package type",
            default: "dev",
            suggestions: ["dev", "optional", "peer"],
          },
        },
        {
          name: ["--ignore-scripts"],
          description:
            "If true, npm does not run scripts specified in package.json files.",
        },
        {
          name: ["--no-audit"],
          description:
            "Submit audit reports alongside the current npm command to the default registry and all registries configured for scopes.",
        },
        {
          name: ["--no-bin-links"],
          description:
            "Tells npm to not create symlinks (or .cmd shims on Windows) for package executables.",
        },
        {
          name: ["--no-fund"],
          description:
            "Hides the message at the end of each npm install acknowledging the number of dependencies looking for funding.",
        },
        {
          name: ["--dry-run"],
          description:
            "Indicates that you don't want npm to make any changes and that it should only report what it would have done.",
        },
        {
          name: ["-wl--workspace"],
          description:
            "Enable running a command in the context of the configured workspaces of the current project",
          args: {
            name: "workspace",
            generators: workspaceGenerator,
            isVariadic: true,
          },
        },
        {
          name: ["-wsl--workspaces"],
          description:
            "Enable running a command in the context of all the configured workspaces.",
        },
      ],
    },
    { name: "v", description: "check that you have node and npm installed" },
    { name: "version", description: "bump a package version" },
    {
      name: "view",
      description: "view registry info",
      options: [
        {
          name: ["-wl--workspace"],
          description:
            "Enable running a command in the context of the configured workspaces of the current project",
          args: {
            name: "workspace",
            generators: workspaceGenerator,
            isVariadic: true,
          },
        },
        {
          name: ["-wsl--workspaces"],
          description:
            "Enable running a command in the context of all the configured workspaces.",
        },
        { name: "--json", description: "show output in json format" },
      ],
    },
    { name: "whoami", description: "display npm username" },
  ],
};

export default completionSpec;
