const searchGenerator: Fig.Generator = {
  script: function (context) {
    if (context[context.length - 1] === "") return "";
    const searchTerm = context[context.length - 1];
    return `curl -s -H "Accept: application/json" "https://api.npms.io/v2/search?q=${searchTerm}&size=20"`;
  },
  postProcess: function (out) {
    try {
      return JSON.parse(out).results.map(
        (item) =>
          ({
            name: item.package.name,
            description: item.package.description,
          } as Fig.Suggestion)
      ) as Fig.Suggestion[];
    } catch (e) {
      return [];
    }
  },
};

const workspaceGenerator: Fig.Generator = {
  script: "cat package.json",
  postProcess: function (out: string) {
    const suggestions = [];

    try {
      if (out.trim() == "") {
        return suggestions;
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
  script:
    "until [[ -f package.json ]] || [[ $PWD = '/' ]]; do cd ..; done; cat package.json",
  postProcess: function (out, context) {
    if (out.trim() === "") {
      return [];
    }
    try {
      const packageContent = JSON.parse(out);
      const dependencies = packageContent["dependencies"] ?? {};
      const devDependencies = packageContent["devDependencies"];
      const optionalDependencies = packageContent["optionalDependencies"] ?? {};
      Object.assign(dependencies, devDependencies, optionalDependencies);

      return Object.keys(dependencies)
        .filter((pkgName) => {
          const isListed = context.some((current) => current === pkgName);
          return !isListed;
        })
        .map((pkgName) => ({
          name: pkgName,
          description: dependencies[pkgName]
            ? "dependency"
            : optionalDependencies[pkgName]
            ? "optionalDependency"
            : "devDependency",
        }));
    } catch {
      return [];
    }
  },
};

const workSpaceOptions: Fig.Option[] = [
  {
    name: "-wl--workspace",
    description:
      "Enable running a command in the context of the configured workspaces of the current project",
    args: {
      name: "workspace",
      generators: workspaceGenerator,
      isVariadic: true,
    },
  },
  {
    name: "-wsl--workspaces",
    description:
      "Enable running a command in the context of all the configured workspaces",
  },
];

const npmInstallOptions: Fig.Option[] = [
  {
    name: ["-S", "--save"],
    description: "Package will be removed from your dependencies",
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
  ...workSpaceOptions,
];

const npmListOptions: Fig.Option[] = [
  {
    name: ["-a", "-all"],
    description: "Show all outdated or installed packages",
  },
  { name: "--json", description: "Show output in json format" },
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
    description: "Limits output to only those packages that are linked",
  },
  {
    name: "--package-lock-only",
    description:
      "Current operation will only use the package-lock.json, ignoring node_modules",
  },
  {
    name: "--no-unicode",
    description: "Uses unicode characters in the tree output",
  },
  {
    name: ["-g", "--global"],
    description:
      "Operates in 'global' mode, so that packages are installed into the prefix folder instead of the current working directory",
  },
  {
    name: "--omit",
    description: "Dependency types to omit from the installation tree on disk",
    args: {
      name: "Package type",
      default: "dev",
      suggestions: ["dev", "optional", "peer"],
    },
  },
  ...workSpaceOptions,
];

const completionSpec: Fig.Spec = {
  name: "npm",
  parserDirectives: {
    flagsArePosixNoncompliant: true,
  },
  description: "Node package manager",
  subcommands: [
    {
      name: ["install", "i", "add"],
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
            "Package will appear in your `dependencies`. This is the default unless `-D` or `-O` are present",
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
            "Saved dependencies will also be added to your bundleDependencies list",
        },
        {
          name: ["-g", "--global"],
          description:
            "Operates in 'global' mode, so that packages are installed into the prefix folder instead of the current working directory",
        },
        {
          name: "--global-style",
          description:
            "Causes npm to install the package into your local node_modules folder with the same layout it uses with the global node_modules folder",
        },
        {
          name: "--legacy-bundling",
          description:
            "Causes npm to install the package such that versions of npm prior to 1.4, such as the one included with node 0.8, can install the package",
        },
        {
          name: "--legacy-peer-deps",
          description:
            "Bypass peerDependency auto-installation. Emulate install behavior of NPM v4 through v6",
        },
        {
          name: "--strict-peer-deps",
          description:
            "If set to true, and --legacy-peer-deps is not set, then any conflicting peerDependencies will be treated as an install failure",
        },
        {
          name: "--no-package-lock",
          description: "Ignores package-lock.json files when installing",
        },
        {
          name: "--omit",
          description:
            "Dependency types to omit from the installation tree on disk",
          args: {
            name: "Package type",
            default: "dev",
            suggestions: ["dev", "optional", "peer"],
          },
        },
        {
          name: "--ignore-scripts",
          description:
            "If true, npm does not run scripts specified in package.json files",
        },
        {
          name: "--no-audit",
          description:
            "Submit audit reports alongside the current npm command to the default registry and all registries configured for scopes",
        },
        {
          name: "--no-bin-links",
          description:
            "Tells npm to not create symlinks (or .cmd shims on Windows) for package executables",
        },
        {
          name: "--no-fund",
          description:
            "Hides the message at the end of each npm install acknowledging the number of dependencies looking for funding",
        },
        {
          name: "--dry-run",
          description:
            "Indicates that you don't want npm to make any changes and that it should only report what it would have done",
        },
        ...workSpaceOptions,
      ],
    },
    {
      name: "run",
      description: "Run arbitrary package scripts",
      options: [
        ...workSpaceOptions,
        {
          name: "--if-present",
          description:
            "Npm will not exit with an error code when run-script is invoked for a script that isn't defined in the scripts section of package.json",
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
      args: {
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
    },
    {
      name: "init",
      description: "Trigger the initialization",
      options: [
        {
          name: ["-y", "--yes"],
          description:
            "Automatically answer 'yes' to any prompts that npm might print on the command line",
        },
        {
          name: "-w",
          description:
            "Create the folders and boilerplate expected while also adding a reference to your project workspaces property",
          args: { name: "dir" },
        },
      ],
    },
    { name: "access", description: "Set access controls on private packages" },
    { name: "adduser", description: "Add a registry user account" },
    {
      name: "audit",
      description: "Run a security audit",
      options: [
        ...workSpaceOptions,
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
            "Current operation will only use the package-lock.json, ignoring node_modules",
        },
        { name: "--json", description: "Shows settings in json format" },
        {
          name: "--omit",
          description:
            "Dependency types to omit from the installation tree on disk",
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
      description: "Display npm bin folder",
      options: [
        {
          name: "-g",
          description:
            "Print the global folder where npm will install executables",
        },
      ],
    },
    {
      name: "bugs",
      description: "Show the bugs that might exist for a package",
    },
    { name: "c", description: "Manage the npm configuration files" },
    {
      name: "cache",
      description: "Manipulates packages cache",
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
          description: "The location of npm's cache directory",
        },
      ],
    },
    { name: "ci", description: "Install a project with a clean slate" },
    {
      name: "cit",
      description: "Install a project with a clean slate and run tests",
    },
    {
      name: "clean-install",
      description: "Install a project with a clean slate",
    },
    {
      name: "clean-install-test",
      description: "Install a project with a clean slate and run tests",
    },
    { name: "completion", description: "Tab completion for npm" },
    {
      name: "config",
      description: "Manage the npm configuration files",
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
            { name: "-g", description: "Lists globally installed packages" },
            { name: "-l", description: "Also shows defaults" },
            { name: "--json", description: "Shows settings in json format" },
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
            { name: "--global", description: "Edits the global config" },
          ],
          args: {
            name: "package",
            generators: dependenciesGenerator,
          },
        },
      ],
    },
    { name: "create", description: "Create a package.json file" },
    { name: "ddp", description: "Reduce duplication" },
    { name: "dedupe", description: "Reduce duplication" },
    {
      name: "deprecate",
      description: "Deprecate a version of a package",
      options: [
        {
          name: "--registry",
          description: "The base URL of the npm registry",
          args: { name: "registry" },
        },
      ],
    },
    { name: "dist-tag", description: "Modify package distribution tags" },
    { name: "docs", description: "Docs for a package in a web browser maybe" },
    { name: "doctor", description: "Check your environments" },
    { name: "edit", description: "Edit an installed package" },
    {
      name: "explore",
      description: "Browse an installed package",
      args: {
        name: "package",
        generators: dependenciesGenerator,
      },
    },
    { name: "fund", description: "Retrieve funding information" },
    { name: "get", description: "Echo the config value to stdout" },
    { name: "help", description: "Search npm help documentation" },
    { name: "help-search", description: "Get help on npm" },
    { name: "hook", description: "Manage registry hooks" },
    {
      name: "install-ci-test",
      description: "Install a project with a clean slate and run tests",
    },
    { name: "install-test", description: "Install package(s) and run tests" },
    { name: "it", description: "Install package(s) and run tests" },
    {
      name: "link",
      description: "Symlink a package folder",
      args: { name: "path", template: "filepaths" },
    },
    {
      name: "list",
      description: "List installed packages",
      options: npmListOptions,
    },
    { name: "ln", description: "Symlink a package folder" },
    { name: "login", description: "Log in of the registry" },
    { name: "logout", description: "Log out of the registry" },
    {
      name: "ls",
      description: "List installed packages",
      options: npmListOptions,
    },
    { name: "org", description: "Manage orgs" },
    {
      name: "outdated",
      description: "Check for outdated packages",
      options: [
        {
          name: ["-a", "-all"],
          description: "Show all outdated or installed packages",
        },
        { name: "--json", description: "Show output in json format" },
        { name: ["-l", "--long"], description: "Show extended information" },
        {
          name: ["-p", "--parseable"],
          description:
            "Output parseable results from commands that write to standard output",
        },
        {
          name: "-g",
          description: "Checks globally",
        },
        ...workSpaceOptions,
      ],
    },
    { name: "owner", description: "Manage package owners" },
    { name: "pack", description: "Create a tarball from a package" },
    { name: "ping", description: "Ping npm registry" },
    {
      name: "prefix",
      description: "Display prefix",
      options: [
        {
          name: "-g",
          description: "Print the global prefix to standard out",
        },
      ],
    },
    {
      name: "profile",
      description: "Change settings on your registry profile",
    },
    {
      name: "prune",
      description: "Remove extraneous packages",
      options: [
        {
          name: "--dry-run",
          description:
            "Indicates that you don't want npm to make any changes and that it should only report what it would have done",
        },
        { name: "--json", description: "Show output in json format" },
        {
          name: "--production",
          description: "Remove the packages specified in your devDependencies",
        },
      ],
    },
    {
      name: "publish",
      description: "Publish a package",
      options: [
        {
          name: "--tag",
          description: "Registers the published package with the given tag",
          args: { name: "tag" },
        },
        ...workSpaceOptions,
        {
          name: "--access",
          description:
            "Sets scoped package to be publicly viewable if set to 'public'",
          args: {
            default: "restricted",
            suggestions: ["restricted", "public"],
          },
        },
        {
          name: "--dry-run",
          description:
            "Indicates that you don't want npm to make any changes and that it should only report what it would have done",
        },
        {
          name: "--otp",
          description: "One-time password from a two-factor authenticator",
          args: { name: "otp" },
        },
      ],
    },
    { name: "rb", description: "Rebuild a package" },
    { name: "rebuild", description: "Rebuild a package" },
    {
      name: "repo",
      description: "Open package repository page in the browser",
      args: {
        name: "package",
        isOptional: true,
        generators: searchGenerator,
        debounce: true,
      },
    },
    { name: "restart", description: "Restart a package" },
    {
      name: "root",
      description: "Display npm root",
      options: [
        {
          name: "-g",
          description:
            "Print the effective global node_modules folder to standard out",
        },
      ],
    },
    { name: "run-script", description: "Run arbitrary package scripts" },
    { name: "s", description: "Search for packages" },
    { name: "se", description: "Search for packages" },
    { name: "search", description: "Search for packages" },
    { name: "set", description: "Sets the config key to the value" },
    {
      name: "shrinkwrap",
      description: "Lock down dependency versions for publication",
    },
    { name: "star", description: "Mark your favorite packages" },
    { name: "stars", description: "View packages marked as favorites" },
    {
      name: "start",
      description: "Start a package",
      options: [
        {
          name: "--ignore-scripts",
          description:
            "If true, npm does not run scripts specified in package.json files",
        },
        {
          name: "--script-shell",
          args: { name: "shell" },
        },
      ],
    },
    { name: "stop", description: "Stop a package" },
    {
      name: "t",
      description: "Test a package",
      options: [
        {
          name: "--ignore-scripts",
          description:
            "If true, npm does not run scripts specified in package.json files",
        },
        {
          name: "--script-shell",
          args: { name: "shell" },
        },
      ],
    },
    {
      name: "team",
      description: "Manage organization teams and team memberships",
    },
    {
      name: "test",
      description: "Test a package",
      options: [
        {
          name: "--ignore-scripts",
          description:
            "If true, npm does not run scripts specified in package.json files",
        },
        {
          name: "--script-shell",
          args: { name: "shell" },
        },
      ],
    },
    { name: "token", description: "Manage your authentication tokens" },
    { name: "tst", description: "Test a package" },
    {
      name: "uninstall",
      description: "Uninstall a package",
      args: {
        name: "package",
        generators: dependenciesGenerator,
        isVariadic: true,
      },
      options: npmInstallOptions,
    },
    {
      name: "remove",
      description: "Uninstall a package",
      args: {
        name: "package",
        generators: dependenciesGenerator,
        isVariadic: true,
      },
      options: npmInstallOptions,
    },
    {
      name: ["r", "rm"],
      description: "Uninstall a package",
      args: {
        name: "package",
        generators: dependenciesGenerator,
        isVariadic: true,
      },
      options: npmInstallOptions,
    },
    {
      name: "un",
      description: "Uninstall a package",
      args: {
        name: "package",
        generators: dependenciesGenerator,
        isVariadic: true,
      },
      options: npmInstallOptions,
    },
    {
      name: "unlink",
      description: "Uninstall a package",
      args: {
        name: "package",
        generators: dependenciesGenerator,
        isVariadic: true,
      },
      options: npmInstallOptions,
    },
    { name: "unpublish", description: "Remove a package from the registry" },
    { name: "unstar", description: "Unmark your package" },
    { name: "up", description: "Check the latest version of dependencies" },
    {
      name: "update",
      description: "Update a package",
      options: [
        { name: "-g", description: "Update global package" },
        {
          name: "--global-style",
          description:
            "Causes npm to install the package into your local node_modules folder with the same layout it uses with the global node_modules folder",
        },
        {
          name: "--legacy-bundling",
          description:
            "Causes npm to install the package such that versions of npm prior to 1.4, such as the one included with node 0.8, can install the package",
        },
        {
          name: "--strict-peer-deps",
          description:
            "If set to true, and --legacy-peer-deps is not set, then any conflicting peerDependencies will be treated as an install failure",
        },
        {
          name: "--no-package-lock",
          description: "Ignores package-lock.json files when installing",
        },
        {
          name: "--omit",
          description:
            "Dependency types to omit from the installation tree on disk",
          args: {
            name: "Package type",
            default: "dev",
            suggestions: ["dev", "optional", "peer"],
          },
        },
        {
          name: "--ignore-scripts",
          description:
            "If true, npm does not run scripts specified in package.json files",
        },
        {
          name: "--no-audit",
          description:
            "Submit audit reports alongside the current npm command to the default registry and all registries configured for scopes",
        },
        {
          name: "--no-bin-links",
          description:
            "Tells npm to not create symlinks (or .cmd shims on Windows) for package executables",
        },
        {
          name: "--no-fund",
          description:
            "Hides the message at the end of each npm install acknowledging the number of dependencies looking for funding",
        },
        {
          name: "--dry-run",
          description:
            "Indicates that you don't want npm to make any changes and that it should only report what it would have done",
        },
        ...workSpaceOptions,
      ],
    },
    { name: "v", description: "Check that you have node and npm installed" },
    {
      name: "version",
      description: "Bump a package version",
      options: [
        ...workSpaceOptions,
        { name: "--json", description: "Show output in json format" },
      ],
    },
    {
      name: "view",
      description: "View registry info",
      options: [
        ...workSpaceOptions,
        { name: "--json", description: "Show output in json format" },
      ],
    },
    { name: "whoami", description: "Display npm username" },
  ],
};

export default completionSpec;
