const FILTER_OPTION: Fig.Option = {
  name: ["--filter"],
  args: [
    {
      template: "filepaths",
      name: "Filepath / Package",
      description:
        "To only select packages under the specified directory, you may specify any absolute path, typically in POSIX format.",
    },
  ],
  description: `Filtering allows you to restrict commands to specific subsets of packages.
    \n pnpm supports a rich selector syntax for picking packages by name or by relation.
    \n More details: https://pnpm.io/filtering`,
};

// GENERATORS
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

const searchDependenciesGenerator: Fig.Generator = {
  script: () =>
    `until [[ -f package.json ]] || [[ $PWD = '/' ]]; do cd ..; done; cat package.json`,
  postProcess: function (out) {
    if (out.trim() === "") {
      return [];
    }
    try {
      const packageContent = JSON.parse(out);
      const dependencies = packageContent["dependencies"];
      const devDependencies = packageContent["devDependencies"];
      const allDependencies = { ...dependencies, ...devDependencies };
      if (allDependencies) {
        const dps = Object.keys(allDependencies);
        return dps.map((pkg) => {
          const scope = pkg.indexOf("/") + 1;
          if (scope !== -1) {
            pkg = pkg.substring(scope);
          }
          const version = pkg.indexOf("@");
          if (version !== -1) {
            pkg = pkg.substring(version);
          }
          return {
            name: pkg,
            icon: `fig://icon?type=npm`,
            description: "dependency file",
          };
        });
      }
    } catch (e) {}
    return [];
  },
};

const searchScriptsGenerator: Fig.Generator = {
  script: () => `cat package.json`,
  postProcess: function (out) {
    if (out.trim() === "") {
      return [];
    }
    try {
      const packageContent = JSON.parse(out);
      const scripts = packageContent["scripts"];
      if (scripts) {
        const scs = Object.keys(scripts);
        return scs.map((script) => {
          return {
            name: script,
            icon: `fig://icon?type=npm`,
            description: scripts[script],
          };
        });
      }
    } catch (e) {}
    return [];
  },
};

// SUBCOMMANDS
const SUBCOMMANDS_MANAGE_DEPENDENCIES: Fig.Subcommand[] = [
  {
    name: "add",
    description: `Installs a package and any packages that it depends on. 
      \n By default, any new package is installed as a production dependency.`,
    args: {
      name: "Package",
      debounce: true,
      generators: searchGenerator,
    },
    options: [
      {
        name: ["-P", "--save-prod"],
        description: "Install the specified packages as regular dependencies",
      },
      {
        name: ["-D", "--save-dev"],
        description: "Install the specified packages as devDependencies",
      },
      {
        name: ["-O", "--save-optional"],
        description: "Install the specified packages as optionalDependencies",
      },
      {
        name: "--no-save",
        description: "Prevents saving to `dependencies`",
      },
      {
        name: ["-E", "--save-exact"],
        description:
          "Saved dependencies will be configured with an exact version rather than using pnpm's default semver range operator",
      },
      {
        name: ["--save-peer"],
        description:
          "Using --save-peer will add one or more packages to peerDependencies and install them as dev dependencies",
      },
      {
        name: ["--ignore-workspace-root-check", "-W#"],
        description: `Adding a new dependency to the root workspace package fails, unless the --ignore-workspace-root-check or -W flag is used. 
        For instance, pnpm add debug -W.`,
      },
      {
        name: ["--global", "-g"],
        description: `Install a package globally`,
      },
      {
        name: ["--workspace"],
        description: `Only adds the new dependency if it is found in the workspace.`,
      },
      FILTER_OPTION,
    ],
  },
  {
    name: ["install", "i"],
    description: `pnpm install is used to install all dependencies for a project.
    \n In a CI environment, installation fails if a lockfile is present but needs an update.
    \n Inside a workspace, pnpm install installs all dependencies in all the projects. If you want to disable this behavior, set the recursive-install setting to false.`,
    options: [
      {
        name: ["--offline"],
        description:
          "If true, pnpm will use only packages already available in the store. If a package won't be found locally, the installation will fail.",
      },
      {
        name: ["--prefer-offline"],
        description:
          "If true, staleness checks for cached data will be bypassed, but missing data will be requested from the server. To force full offline mode, use --offline",
      },
      {
        name: ["--ignore-scripts"],
        description:
          "Do not execute any scripts defined in the project package.json and its dependencies.",
      },
      {
        name: ["-P", "--save-prod"],
        description: `pnpm will not install any package listed in devDependencies if the NODE_ENV environment variable is set to production. 
          \n Use this flag to instruct pnpm to ignore NODE_ENV and take its production status from this flag instead.`,
      },
      {
        name: ["-D", "--save-dev"],
        description:
          "Only devDependencies are installed regardless of the NODE_ENV.",
      },
      {
        name: ["--no-optional"],
        description: "optionalDependencies are not installed",
      },
      {
        name: ["--lockfile-only"],
        description:
          "When used, only updates pnpm-lock.yaml and package.json instead of checking node_modules and downloading dependencies.",
      },
      {
        name: ["--frozen-lockfile"],
        description:
          "If true, pnpm doesn't generate a lockfile and fails to install if the lockfile is out of sync with the manifest / an update is needed or no lockfile is present.",
      },
      {
        name: "--reporter",
        description: `Allows you to choose the reporter that will log debug info to the terminal about the installation progress.`,
        args: {
          name: "Reporter Type",
          suggestions: ["silent", "default", "append-only", "ndjson"],
        },
      },
      {
        name: ["--use-store-server"],
        description:
          "Starts a store server in the background. The store server will keep running after installation is done. To stop the store server, run pnpm server stop",
      },
      {
        name: ["--shamefully-hoist"],
        description:
          "Creates a flat node_modules structure, similar to that of npm or yarn. WARNING: This is highly discouraged.",
      },
      {
        name: ["--filter"],
        args: [
          {
            template: "filepaths",
            name: "Filepath / Package",
            description:
              "To only select packages under the specified directory, you may specify any absolute path, typically in POSIX format.",
          },
        ],
        description: `Filtering allows you to restrict commands to specific subsets of packages.
          \n pnpm supports a rich selector syntax for picking packages by name or by relation.
          \n More details: https://pnpm.io/filtering`,
      },
    ],
  },
  {
    name: ["install-test", "it"],
    description:
      "Runs pnpm install followed immediately by pnpm test. It takes exactly the same arguments as pnpm install",
    options: [
      {
        name: ["--offline"],
        description:
          "If true, pnpm will use only packages already available in the store. If a package won't be found locally, the installation will fail.",
      },
      {
        name: ["--prefer-offline"],
        description:
          "If true, staleness checks for cached data will be bypassed, but missing data will be requested from the server. To force full offline mode, use --offline",
      },
      {
        name: ["--ignore-scripts"],
        description:
          "Do not execute any scripts defined in the project package.json and its dependencies.",
      },
      {
        name: ["-P", "--save-prod"],
        description: `pnpm will not install any package listed in devDependencies if the NODE_ENV environment variable is set to production. 
            \n Use this flag to instruct pnpm to ignore NODE_ENV and take its production status from this flag instead.`,
      },
      {
        name: ["-D", "--save-dev"],
        description:
          "Only devDependencies are installed regardless of the NODE_ENV.",
      },
      {
        name: ["--no-optional"],
        description: "optionalDependencies are not installed",
      },
      {
        name: ["--lockfile-only"],
        description:
          "When used, only updates pnpm-lock.yaml and package.json instead of checking node_modules and downloading dependencies.",
      },
      {
        name: ["--frozen-lockfile"],
        description:
          "If true, pnpm doesn't generate a lockfile and fails to install if the lockfile is out of sync with the manifest / an update is needed or no lockfile is present.",
      },
      {
        name: "--reporter",
        description: `Allows you to choose the reporter that will log debug info to the terminal about the installation progress.`,
        args: {
          name: "Reporter Type",
          suggestions: ["silent", "default", "append-only", "ndjson"],
        },
      },
      {
        name: ["--use-store-server"],
        description:
          "Starts a store server in the background. The store server will keep running after installation is done. To stop the store server, run pnpm server stop",
      },
      {
        name: ["--shamefully-hoist"],
        description:
          "Creates a flat node_modules structure, similar to that of npm or yarn. WARNING: This is highly discouraged.",
      },
      FILTER_OPTION,
    ],
  },
  {
    name: ["update", "up"],
    description: `pnpm update updates packages to their latest version based on the specified range.
      \nWhen used without arguments, updates all dependencies. You can use patterns to update specific dependencies.`,
    args: {
      name: "Package",
      isOptional: true,
      generators: searchDependenciesGenerator,
      variadic: true,
    },
    options: [
      {
        name: ["--recursive", "-r"],
        description:
          "Concurrently runs update in all subdirectories with a package.json (excluding node_modules)",
      },
      {
        name: ["--latest", "-L"],
        description:
          "Ignores the version range specified in package.json. Instead, the version specified by the latest tag will be used (potentially upgrading the packages across major versions).",
      },
      {
        name: "--global",
        description: "Update global packages.",
      },
      {
        name: ["-P", "--save-prod"],
        description: `Only update packages in dependencies and optionalDependencies`,
      },
      {
        name: ["-D", "--save-dev"],
        description: "Only update packages in devDependencies",
      },
      {
        name: "--no-optional",
        description: "Don't update packages in optionalDependencies",
      },
      {
        name: ["--interactive", "-i"],
        description:
          "Show outdated dependencies and select which ones to update.",
      },
      {
        name: "--workspace",
        description: `Tries to link all packages from the workspace. Versions are updated to match the versions of packages inside the workspace.
          \nIf specific packages are updated, the command will fail if any of the updated dependencies are not found inside the workspace. For instance, the following command fails if express is not a workspace package: pnpm up -r --workspace express`,
      },
      {
        name: ["--filter"],
        args: [
          {
            template: "filepaths",
            name: "Filepath / Package",
            description:
              "To only select packages under the specified directory, you may specify any absolute path, typically in POSIX format.",
          },
        ],
        description: `Filtering allows you to restrict commands to specific subsets of packages.
            \n pnpm supports a rich selector syntax for picking packages by name or by relation.
            \n More details: https://pnpm.io/filtering`,
      },
    ],
  },
  {
    name: ["remove", "rm", "uninstall", "un"],
    description: `Removes packages from node_modules and from the project's package.json.`,
    args: {
      name: "Package",
      generators: searchDependenciesGenerator,
      variadic: true,
    },
    options: [
      {
        name: ["--recursive", "-r"],
        description: `When used inside a workspace, removes a dependency (or dependencies) from every workspace package.
          \nWhen used not inside a workspace, removes a dependency (or dependencies) from every package found in subdirectories.`,
      },
      {
        name: "--global",
        description: "Remove a global package.",
      },
      {
        name: ["-P", "--save-prod"],
        description: `Only remove the dependency from dependencies`,
      },
      {
        name: ["-D", "--save-dev"],
        description: "Only remove the dependency from devDependencies",
      },
      {
        name: ["--save-optional", "-O"],
        description: "Only remove the dependency from optionalDependencies",
      },
      FILTER_OPTION,
    ],
  },
  {
    name: ["link", "ln"],
    description: `Makes the current local package accessible system-wide, or in another location.`,
    args: [
      {
        name: "Package",
        generators: searchDependenciesGenerator,
        variadic: true,
      },
      { template: "filepaths" },
    ],
    options: [
      {
        name: ["--dir", "-C"],
        description: `Changes the link location to <dir>.`,
      },
      {
        name: "--global",
        description:
          "Links the specified package (<pkg>) from global node_modules to the node_nodules of package from where this command was executed or specified via --dir option.",
      },
    ],
  },
  {
    name: "unlink",
    description: `Unlinks a system-wide package (inverse of pnpm link).
      \nIf called without arguments, all linked dependencies will be unlinked.
      \nThis is similar to yarn unlink, except pnpm re-installs the dependency after removing the external link.`,
    args: [
      {
        name: "Package",
        generators: searchDependenciesGenerator,
        variadic: true,
      },
      { template: "filepaths" },
    ],
    options: [
      {
        name: ["--recursive", "-r"],
        description: `Unlink in every package found in subdirectories or in every workspace package, when executed inside a workspace.`,
      },
      FILTER_OPTION,
    ],
  },
  {
    name: "import",
    description:
      "pnpm import generates a pnpm-lock.yaml from an npm package-lock.json (or npm-shrinkwrap.json) file.",
  },
  {
    name: ["rebuild", "rb"],
    description: `Rebuild a package.`,
    args: [
      {
        name: "Package",
        generators: searchDependenciesGenerator,
        variadic: true,
      },
      { template: "filepaths" },
    ],
    options: [
      {
        name: ["--recursive", "-r"],
        description: `This command runs the pnpm rebuild command in every package of the monorepo.`,
      },
      FILTER_OPTION,
    ],
  },
  {
    name: "prune",
    description: `Removes unnecessary packages.`,
    options: [
      {
        name: "--prod",
        description: `Remove the packages specified in devDependencies`,
      },
      {
        name: "--no-optional",
        description: `Remove the packages specified in optionalDependencies`,
      },
    ],
  },
  {
    name: "fetch",
    description: `EXPERIMENTAL FEATURE: Fetch packages from a lockfile into virtual store, package manifest is ignored: https://pnpm.io/cli/fetch`,
    options: [
      {
        name: "--prod",
        description: `Development packages will not be fetched`,
      },
      {
        name: "--dev",
        description: `Only development packages will be fetched`,
      },
    ],
  },
];

const SUBCOMMANDS_RUN_SCRIPTS: Fig.Subcommand[] = [
  {
    name: ["run", "run-script"],
    description: "Runs a script defined in the package's manifest file.",
    args: {
      name: "Scripts",
      generators: searchScriptsGenerator,
      variadic: true,
    },
    options: [
      {
        name: ["-r", "--recursive"],
        description: `This runs an arbitrary command from each package's "scripts" object. If a package doesn't have the command, it is skipped. If none of the packages have the command, the command fails.`,
      },
      {
        name: "--if-present",
        description:
          "You can use the --if-present flag to avoid exiting with a non-zero exit code when the script is undefined. This lets you run potentially undefined scripts without breaking the execution chain.",
      },
      {
        name: "--parallel",
        description:
          "Completely disregard concurrency and topological sorting, running a given script immediately in all matching packages with prefixed streaming output. This is the preferred flag for long-running processes over many packages, for instance, a lengthy build process.",
      },
      {
        name: "--stream",
        description:
          "Stream output from child processes immediately, prefixed with the originating package directory. This allows output from different packages to be interleaved.",
      },
      FILTER_OPTION,
    ],
  },
  {
    name: "exec",
    description: `Execute a shell command in scope of a project.
      \nnode_modules/.bin is added to the PATH, so pnpm exec allows executing commands of dependencies.`,
    args: {
      name: "Scripts",
      generators: searchDependenciesGenerator,
      variadic: true,
    },
    options: [
      {
        name: ["-r", "--recursive"],
        description: `Execute the shell command in every project of the workspace.
          \nThe name of the current package is available through the environment variable PNPM_PACKAGE_NAME (supported from pnpm v2.22.0 onwards).`,
      },
      {
        name: "--parallel",
        description:
          "Completely disregard concurrency and topological sorting, running a given script immediately in all matching packages with prefixed streaming output. This is the preferred flag for long-running processes over many packages, for instance, a lengthy build process.",
      },
      FILTER_OPTION,
    ],
  },
  {
    name: ["test", "t", "tst"],
    description: `Runs an arbitrary command specified in the package's test property of its scripts object.
      \nThe intended usage of the property is to specify a command that runs unit or integration testing for your program.`,
  },
  {
    name: ["start"],
    description: `Runs an arbitrary command specified in the package's start property of its scripts object. If no start property is specified on the scripts object, it will attempt to run node server.js as a default, failing if neither are present.
      \nThe intended usage of the property is to specify a command that starts your program.`,
  },
];

const SUBCOMMANDS_REVIEW_DEPS: Fig.Subcommand[] = [
  {
    name: "audit",
    description: `Checks for known security issues with the installed packages.
      \nIf security issues are found, try to update your dependencies via pnpm update. 
      \nIf a simple update does not fix all the issues, use overrides to force versions that are not vulnerable. 
      \nFor instance, if lodash@<2.1.0 is vulnerable, use overrides to force lodash@^2.1.0. 
      \nDetails at: https://pnpm.io/cli/audit`,
    options: [
      {
        name: "--audit-level",
        description: `Only print advisories with severity greater than or equal to <severity>.`,
        args: [
          {
            name: "Audit Level",
            suggestions: ["low", "moderate", "high", "critical"],
          },
        ],
      },
      {
        name: "--json",
        description: `Output audit report in JSON format.`,
      },
      {
        name: ["--dev", "-D"],
        description: `Only audit dev dependencies.`,
      },
      {
        name: ["--prod", "-P"],
        description: `Only audit production dependencies.`,
      },
      {
        name: "--no-optional",
        description: `Don't audit optionalDependencies.`,
      },
      {
        name: "--ignore-registry-errors",
        description: `If the registry responds with a non-200 status code, the process should exit with 0. So the process will fail only if the registry actually successfully responds with found vulnerabilities.`,
      },
    ],
  },
  {
    name: ["list", "ls"],
    description: `This command will output all the versions of packages that are installed, as well as their dependencies, in a tree-structure.
      \nPositional arguments are name-pattern@version-range identifiers, which will limit the results to only the packages named. For example, pnpm list "babel-*" "eslint-*" semver@5.`,
    options: [
      {
        name: ["--recursive", "-r"],
        description: `Perform command on every package in subdirectories or on every workspace package, when executed inside a workspace.`,
      },
      {
        name: "--json",
        description: `Log output in JSON format.`,
      },
      {
        name: "--long",
        description: `Show extended information.`,
      },
      {
        name: "--parseable",
        description: `Outputs package directories in a parseable format instead of their tree view.`,
      },
      {
        name: "--global",
        description: `List packages in the global install directory instead of in the current project.`,
      },
      {
        name: "--depth",
        description: `Max display depth of the dependency tree.
          \npnpm ls --depth 0 will list direct dependencies only. pnpm ls --depth -1 will list projects only. Useful inside a workspace when used with the -r option.`,
        args: { name: "number" },
      },
      {
        name: ["--dev", "-D"],
        description: `Only list dev dependencies.`,
      },
      {
        name: ["--prod", "-P"],
        description: `Only list production dependencies.`,
      },
      {
        name: "--no-optional",
        description: `Don't list optionalDependencies.`,
      },
      FILTER_OPTION,
    ],
  },
  {
    name: "outdated",
    description: `Checks for outdated packages. The check can be limited to a subset of the installed packages by providing arguments (patterns are supported).`,
    options: [
      {
        name: ["--recursive", "-r"],
        description: `Check for outdated dependencies in every package found in subdirectories, or in every workspace package when executed inside a workspace.`,
      },
      {
        name: "--long",
        description: `Print details.`,
      },
      {
        name: "--global",
        description: `List outdated global packages.`,
      },
      {
        name: "--no-table",
        description: `Prints the outdated dependencies in a list format instead of the default table. Good for small consoles.`,
      },
      {
        name: "--compatible",
        description: `Prints only versions that satisfy specifications in package.json.`,
      },
      {
        name: ["--dev", "-D"],
        description: `Only list dev dependencies.`,
      },
      {
        name: ["--prod", "-P"],
        description: `Only list production dependencies.`,
      },
      {
        name: "--no-optional",
        description: `Doesn't check optionalDependencies.`,
      },
    ],
  },
  {
    name: "why",
    description: `Shows all packages that depend on the specified package.`,
    args: {
      name: "Scripts",
      generators: searchDependenciesGenerator,
      variadic: true,
    },
    options: [
      {
        name: ["--recursive", "-r"],
        description: `Show the dependency tree for the specified package on every package in subdirectories or on every workspace package when executed inside a workspace.`,
      },
      {
        name: "--json",
        description: `Log output in JSON format.`,
      },
      {
        name: "--long",
        description: `Show verbose output.`,
      },
      {
        name: "--parseable",
        description: `Show parseable output instead of tree view`,
      },
      {
        name: "--global",
        description: `List packages in the global install directory instead of in the current project.`,
      },
      {
        name: ["--dev", "-D"],
        description: `Only display the dependency tree for packages in devDependencies.`,
      },
      {
        name: ["--prod", "-P"],
        description: `Only display the dependency tree for packages in dependencies.`,
      },
      FILTER_OPTION,
    ],
  },
];

const SUBCOMMANDS_MISC: Fig.Subcommand[] = [
  {
    name: "publish",
    description: `Publishes a package to the registry.
    \nWhen publishing a package inside a workspace, the LICENSE file from the root of the workspace is packed with the package (unless the package has a license of its own).
    \nYou may override some fields before publish, using the publishConfig field in package.json. You also can use the publishConfig.directory to customize the published subdirectory (usually using third party build tools).
    \nWhen running this command recursively (pnpm -r publish), pnpm will publish all the packages that have versions not yet published to the registry.`,
    options: [
      {
        name: "--tag",
        description: `Publishes the package with the given tag. By default, pnpm publish updates the latest tag.`,
        args: [
          {
            name: "<tag>",
          },
        ],
      },
      {
        name: "--access",
        description: `Tells the registry whether the published package should be public or restricted.`,
        args: [
          {
            name: "Type",
            suggestions: ["public", "private"],
          },
        ],
      },
      {
        name: "--force",
        description: `Try to publish packages even if their current version is already found in the registry`,
      },
      {
        name: "--report-summary",
        description: `Save the list of published packages to pnpm-publish-summary.json. Useful when some other tooling is used to report the list of published packages.`,
      },
      FILTER_OPTION,
    ],
  },
  {
    name: ["recursive", "m", "multi", "-r"],
    description: `Runs a pnpm command recursively on all subdirectories in the package or every available workspace.`,
    options: [
      {
        name: "--link-workspace-packages",
        description: `Link locally available packages in workspaces of a monorepo into node_modules instead of re-downloading them from the registry. This emulates functionality similar to yarn workspaces.
        \nWhen this is set to deep, local packages can also be linked to subdependencies.
        \nBe advised that it is encouraged instead to use npmrc for this setting, to enforce the same behaviour in all environments. This option exists solely so you may override that if necessary.`,
        args: [
          {
            name: "bool or `deep`",
            suggestions: ["dee["],
          },
        ],
      },
      {
        name: "--workspace-concurrency",
        description: `Set the maximum number of tasks to run simultaneously. For unlimited concurrency use Infinity`,
        args: [{ name: "<number>" }],
      },
      {
        name: "--bail",
        description: `Stops when a task throws an error.`,
      },
      {
        name: "--no-bail",
        description: `Don't stop when a task throws an error.`,
      },
      {
        name: "--sort",
        description: `Packages are sorted topologically (dependencies before dependents).`,
      },
      {
        name: "--no-sort",
        description: `Disable packages sorting`,
      },
      {
        name: "--reverse",
        description: `The order of packages is reversed.`,
      },
      FILTER_OPTION,
    ],
  },
  {
    name: "server",
    description: `Manage a store server.`,
    subcommands: [
      {
        name: "start",
        description:
          "Starts a server that performs all interactions with the store. Other commands will delegate any store-related tasks to this server.",
        options: [
          {
            name: "--background",
            description: `Runs the server in the background, similar to daemonizing on UNIX systems.`,
          },
          {
            name: "--network-concurrency",
            description: `The maximum number of network requests to process simultaneously.`,
            args: [{ name: "number" }],
          },
          {
            name: "--protocol",
            description: `The communication protocol used by the server. When this is set to auto, IPC is used on all systems except for Windows, which uses TCP.`,
            args: [
              {
                name: "Type",
                suggestions: ["auto", "tcp", "ipc"],
              },
            ],
          },
          {
            name: "--port",
            description: `The port number to use when TCP is used for communication. If a port is specified and the protocol is set to auto, regardless of system type, the protocol is automatically set to use TCP.`,
            args: [{ name: "port number" }],
          },
          {
            name: "--store-dir",
            description: `The directory to use for the content addressable store.`,
            args: [{ name: "Path", template: "filepaths" }],
          },
          {
            name: "--lock",
            description: `Set to make the package store immutable to external processes while the server is running or not.`,
          },
          {
            name: "--no-lock",
            description: `Set to make the package store mutable to external processes while the server is running or not.`,
          },
          {
            name: "--ignore-stop-requests",
            description: `Prevents you from stopping the server using pnpm server stop.`,
          },
          {
            name: "--ignore-upload-requests",
            description: `Prevents creating a new side effect cache during install.`,
          },
        ],
      },
      {
        name: "stop",
        description: "Stops the store server.",
      },
      {
        name: "status",
        description: "Prints information about the running server.",
      },
    ],
  },
  {
    name: "store",
    description: "Managing the package store.",
    subcommands: [
      {
        name: "status",
        description: `Checks for modified packages in the store.
          \nReturns exit code 0 if the content of the package is the same as it was at the time of unpacking.`,
      },
      {
        name: "add",
        description: `Functionally equivalent to pnpm add, 
          \nexcept this adds new packages to the store directly without modifying any projects or files outside of the store.`,
      },
      {
        name: "prune",
        description: `Removes orphan packages from the store.
          \nPruning the store will save disk space, however may slow down future installations involving pruned packages. 
          \nUltimately, it is a safe operation, however not recommended if you have orphaned packages from a package you intend to reinstall.
          \nPlease read the FAQ for more information on unreferenced packages and best practices.
          \nPlease note that this is prohibited when a store server is running.`,
      },
      {
        name: "path",
        description: `Returns the path to the active store directory`,
      },
    ],
  },
];

const subcommands = [
  ...SUBCOMMANDS_MANAGE_DEPENDENCIES,
  ...SUBCOMMANDS_REVIEW_DEPS,
  ...SUBCOMMANDS_RUN_SCRIPTS,
  ...SUBCOMMANDS_MISC,
];

const recursiveSubcommandsNames = [
  "add",
  "exec",
  "install",
  "list",
  "outdated",
  "publish",
  "rebuild",
  "remove",
  "run",
  "test",
  "unlink",
  "update",
  "why",
];

const recursiveSubcommands = subcommands.filter((subcommand) => {
  if (Array.isArray(subcommand.name)) {
    return subcommand.name.some((name) =>
      recursiveSubcommandsNames.includes(name)
    );
  }
  return recursiveSubcommandsNames.includes(subcommand.name);
});

// RECURSIVE SUBCOMMAND INDEX
SUBCOMMANDS_MISC[1].subcommands = recursiveSubcommands;

// SPEC
export const completionSpec: Fig.Spec = {
  name: "pnpm",
  description: "Fast, disk space efficient package manager",
  args: {
    name: "Scripts",
    generators: searchScriptsGenerator,
    variadic: true,
  },
  subcommands,
};
