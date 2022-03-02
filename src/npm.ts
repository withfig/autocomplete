function uninstallSubcommand(named: string | string[]): Fig.Subcommand {
  return {
    name: named,
    description: "Uninstall a package",
    args: {
      name: "package",
      generators: dependenciesGenerator,
      isVariadic: true,
    },
    options: npmInstallOptions,
  };
}

const atsInStr = (s: string) => (s.match(/@/g) || []).length;
// GENERATORS
export const npmSearchGenerator: Fig.Generator = {
  trigger: (newToken, oldToken) => {
    // If the package name starts with '@', we want to trigger when
    // the 2nd '@' is typed because we'll need to generate version
    // suggetsions
    // e.g. @typescript-eslint/types
    if (oldToken.startsWith("@")) {
      return !(atsInStr(oldToken) > 1 && atsInStr(newToken) > 1);
    }

    // If the package name doesn't start with '@', then trigger when
    // we see the first '@' so we can generate version suggestions
    return !(oldToken.includes("@") && newToken.includes("@"));
  },
  getQueryTerm: "@",
  cache: {
    ttl: 1000 * 60 * 60 * 24 * 2, // 2 days
  },
  custom: async (context, executeShellCommand) => {
    const searchTerm = context[context.length - 1];
    if (searchTerm === "") {
      return [];
    }

    // Query the API with the package name
    const queryPackages = `curl -s -H "Accept: application/json" "https://api.npms.io/v2/search?size=20&q=${searchTerm}"`;
    // We need to remove the '@' at the end of the searchTerm before querying versions
    const queryVersions = `curl -s -H "Accept: application/vnd.npm.install-v1+json" https://registry.npmjs.org/${searchTerm.slice(
      0,
      -1
    )}`;

    // If the end of our token is '@', then we want to generate version suggestions
    // Otherwise, we want packages
    const out = (query: string) =>
      query[query.length - 1] === "@"
        ? executeShellCommand(queryVersions)
        : executeShellCommand(queryPackages);

    // If our token starts with '@', then a 2nd '@' tells us we want
    // versions.
    // Otherwise, '@' anywhere else in the string will indicate the same.
    const shouldGetVersion = searchTerm.startsWith("@")
      ? atsInStr(searchTerm) > 1
      : searchTerm.includes("@");

    try {
      const data = JSON.parse(await out(searchTerm));
      if (shouldGetVersion) {
        // create dist tags suggestions
        const versions = Object.entries(data["dist-tags"] || {}).map(
          ([key, value]) => ({
            name: key,
            description: value,
          })
        ) as Fig.Suggestion[];
        // create versions
        versions.push(
          ...Object.keys(data.versions)
            .map((version) => ({ name: version } as Fig.Suggestion))
            .reverse()
        );
        return versions;
      }

      return data.results.map((item) => ({
        name: item.package.name,
        description: item.package.description,
      })) as Fig.Suggestion[];
    } catch (error) {
      console.error({ error });
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

/** Generator that lists package.json dependencies */
export const dependenciesGenerator: Fig.Generator = {
  trigger: (newToken) => newToken === "-g" || newToken === "--global",
  custom: async function (tokens, executeShellCommand) {
    if (!tokens.includes("-g") && !tokens.includes("--global")) {
      const out = await executeShellCommand(
        "until [[ -f package.json ]] || [[ $PWD = '/' ]]; do cd ..; done; cat package.json"
      );
      const packageContent = JSON.parse(out);
      const dependencies = packageContent["dependencies"] ?? {};
      const devDependencies = packageContent["devDependencies"];
      const optionalDependencies = packageContent["optionalDependencies"] ?? {};
      Object.assign(dependencies, devDependencies, optionalDependencies);

      return Object.keys(dependencies)
        .filter((pkgName) => {
          const isListed = tokens.some((current) => current === pkgName);
          return !isListed;
        })
        .map((pkgName) => ({
          name: pkgName,
          icon: "📦",
          description: dependencies[pkgName]
            ? "dependency"
            : optionalDependencies[pkgName]
            ? "optionalDependency"
            : "devDependency",
        }));
    } else {
      const out = await executeShellCommand("ls -1 `npm root -g`");
      return out.split("\n").map((name) => ({
        name,
        icon: "📦",
        description: "Global dependency",
      }));
    }
  },
};

/** Generator that lists package.json scripts (with the respect to the `fig` field) */
export const npmScriptsGenerator: Fig.Generator = {
  script:
    "until [[ -f package.json ]] || [[ $PWD = '/' ]]; do cd ..; done; cat package.json",
  postProcess: function (out, [npmClient]) {
    if (out.trim() == "") {
      return [];
    }

    try {
      const packageContent = JSON.parse(out);
      const scripts = packageContent["scripts"];
      const figCompletions = packageContent["fig"] || {};

      if (scripts) {
        return Object.entries(scripts).map(([scriptName, scriptContents]) => {
          const icon =
            npmClient === "yarn"
              ? "fig://icon?type=yarn"
              : "fig://icon?type=npm";
          const customScripts: Fig.Suggestion = figCompletions[scriptName];
          return {
            name: scriptName,
            icon,
            description: scriptContents as string,
            /**
             * If there are custom definitions for the scripts
             * we want to override the default values
             * */
            ...customScripts,
          };
        });
      }
    } catch (e) {
      console.error(e);
    }

    return [];
  },
};

export const npmParserDirectives: Fig.Arg["parserDirectives"] = {
  alias: async (token, executeShellCommand) => {
    const out = await executeShellCommand("cat $(npm prefix)/package.json");
    const script: string = JSON.parse(out).scripts?.[token];
    if (!script) {
      throw new Error(`Script not found: '${token}'`);
    }
    return script;
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

const registryOption: Fig.Option = {
  name: "--registry",
  description: "The base URL of the npm registry",
  args: { name: "registry" },
};

const ignoreScriptsOption: Fig.Option = {
  name: "--ignore-scripts",
  description:
    "If true, npm does not run scripts specified in package.json files",
};

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
        generators: npmSearchGenerator,
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
        ignoreScriptsOption,
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
        ignoreScriptsOption,
        {
          name: "--script-shell",
          args: { name: "shell" },
        },
      ],
      args: {
        name: "script",
        description: "Script to run from your package.json",
        generators: npmScriptsGenerator,
        parserDirectives: npmParserDirectives,
        isCommand: true,
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
      description: "Print the folder where npm will install executables",
      options: [
        {
          name: ["-g", "--global"],
          description:
            'Operates in "global" mode, so that packages are installed into the prefix folder instead of the current working directory',
        },
      ],
    },
    {
      name: ["bugs", "issues"],
      description: "Report bugs for a package in a web browser",
      args: {
        name: "pkgname",
        isOptional: true,
      },
      options: [
        {
          name: "--no-browser",
          description: "Display in command line instead of browser",
        },
        {
          name: "--browser",
          description:
            "The browser that is called by the npm bugs command to open websites",
          args: { name: "browser" },
        },
        registryOption,
      ],
    },
    {
      name: "cache",
      description: "Manipulates packages cache",
      subcommands: [
        {
          name: "add",
          description: "Add the specified packages to the local cache",
        },
        {
          name: "clean",
          description: "Delete all data out of the cache folder",
        },
        {
          name: "verify",
          description:
            "Verify the contents of the cache folder, garbage collecting any unneeded data, and verifying the integrity of the cache index and all cached data",
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
    {
      name: ["ci", "clean-install", "install-clean"],
      description: "Install a project with a clean slate",
      options: [
        {
          name: "--audit",
          description:
            'When "true" submit audit reports alongside the current npm command to the default registry and all registries configured for scopes',
          args: {
            name: "audit",
            suggestions: ["true", "false"],
          },
        },
        {
          name: "--no-audit",
          description:
            "Do not submit audit reports alongside the current npm command",
        },
        ignoreScriptsOption,
        {
          name: "--script-shell",
          description:
            "The shell to use for scripts run with the npm exec, npm run and npm init <pkg> commands",
        },
      ],
    },
    {
      name: "cit",
      description: "Install a project with a clean slate and run tests",
    },
    {
      name: "clean-install-test",
      description: "Install a project with a clean slate and run tests",
    },
    { name: "completion", description: "Tab completion for npm" },
    {
      name: ["config", "c"],
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
    {
      name: ["dedupe", "ddp"],
      description: "Reduce duplication in the package tree",
    },
    {
      name: "deprecate",
      description: "Deprecate a version of a package",
      options: [registryOption],
    },
    { name: "dist-tag", description: "Modify package distribution tags" },
    { name: "docs", description: "Docs for a package in a web browser maybe" },
    {
      name: "doctor",
      description: "Check your environment",
      options: [registryOption],
    },
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
    {
      name: "ping",
      description: "Ping npm registry",
      options: [registryOption],
    },
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
        generators: npmSearchGenerator,
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
        ignoreScriptsOption,
        {
          name: "--script-shell",
          args: { name: "shell" },
        },
      ],
    },
    { name: "stop", description: "Stop a package" },
    {
      name: "team",
      description: "Manage organization teams and team memberships",
    },
    {
      name: ["test", "tst", "t"],
      description: "Test a package",
      options: [
        ignoreScriptsOption,
        {
          name: "--script-shell",
          description:
            "The shell to use for scripts run with the npm exec, npm run and npm init <pkg> commands",
          args: { name: "shell" },
        },
      ],
    },
    { name: "token", description: "Manage your authentication tokens" },
    uninstallSubcommand("uninstall"),
    uninstallSubcommand("remove"),
    uninstallSubcommand(["r", "rm"]),
    uninstallSubcommand("un"),
    uninstallSubcommand("remove"),
    uninstallSubcommand("unlink"),
    { name: "unpublish", description: "Remove a package from the registry" },
    { name: "unstar", description: "Unmark your package" },
    {
      name: ["update", "upgrade", "up"],
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
        ignoreScriptsOption,
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
      name: "version",
      description: "Bump a package version",
      options: [
        ...workSpaceOptions,
        { name: "--json", description: "Show output in json format" },
        { name: "--json", description: "Show output in json format" },
      ],
    },
    {
      name: ["view", "v", "info", "show"],
      description: "View registry info",
      options: [
        ...workSpaceOptions,
        { name: "--json", description: "Show output in json format" },
      ],
    },
    {
      name: "whoami",
      description: "Display npm username",
      options: [registryOption],
    },
  ],
};

export default completionSpec;
