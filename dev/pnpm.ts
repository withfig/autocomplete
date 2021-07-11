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

const searchPackageGenerator: Fig.Generator = {
  script: () => `cat package.json`,
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

const FILTER_SUBCOMMAND = {
  name: ["--filter"],
  args: [
    {
      template: "filepaths",
      name: ["Filepath", "Package"],
      description:
        "To only select packages under the specified directory, you may specify any absolute path, typically in POSIX format.",
    },
  ],
  description: `Filtering allows you to restrict commands to specific subsets of packages.
    \n pnpm supports a rich selector syntax for picking packages by name or by relation.
    \n More details: https://pnpm.io/filtering`,
} as Fig.Option;

const SUBCOMMAND_INSTALL = {
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
      description: `Allows you to choose the reporter that will log debug info to the terminal about the installation progress.
      \n silent - no output is logged to the console, except fatal errors
      \n default - the default reporter when the stdout is TTY
      \n append-only (Added in v1.29.1) - the output is always appended to the end. No cursor manipulations are performed
      \n ndjson - the most verbose reporter. Prints all logs in ndjson format`,
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
    FILTER_SUBCOMMAND,
  ],
};

export const completionSpec: Fig.Spec = {
  name: "pnpm",
  description: "Fast, disk space efficient package manager",
  subcommands: [
    {
      name: "add",
      description: `Installs a package and any packages that it depends on. 
        \n By default, any new package is installed as a production dependency.`,
      args: {
        name: "Package",
        isOptional: true,
        generators: searchGenerator,
        debounce: true,
        variadic: true,
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
          name: ["--global"],
          description: `Install a package globally`,
        },
        {
          name: ["--workspace"],
          description: `Only adds the new dependency if it is found in the workspace.`,
        },
        FILTER_SUBCOMMAND,
      ],
    },
    SUBCOMMAND_INSTALL,
    {
      name: ["update", "up"],
      description: `pnpm update updates packages to their latest version based on the specified range.
        \nWhen used without arguments, updates all dependencies. You can use patterns to update specific dependencies.`,
      args: {
        name: "Package",
        isOptional: true,
        generators: searchPackageGenerator,
        debounce: true,
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
        FILTER_SUBCOMMAND,
      ],
    },
    {
      name: ["remove", "rm", "uninstall", "un"],
      description: `Removes packages from node_modules and from the project's package.json.`,
      args: {
        name: "Package",
        isOptional: true,
        generators: searchPackageGenerator,
        debounce: true,
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
        FILTER_SUBCOMMAND,
      ],
    },
    {
      name: ["link", "ln"],
      description: `Makes the current local package accessible system-wide, or in another location.`,
      args: [
        {
          name: "Package",
          isOptional: true,
          generators: searchPackageGenerator,
          debounce: true,
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
          isOptional: true,
          generators: searchPackageGenerator,
          debounce: true,
          variadic: true,
        },
        { template: "filepaths" },
      ],
      options: [
        {
          name: ["--recursive", "-r"],
          description: `Unlink in every package found in subdirectories or in every workspace package, when executed inside a workspace.`,
        },
        FILTER_SUBCOMMAND,
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
          isOptional: true,
          generators: searchPackageGenerator,
          debounce: true,
          variadic: true,
        },
        { template: "filepaths" },
      ],
      options: [
        {
          name: ["--recursive", "-r"],
          description: `This command runs the pnpm rebuild command in every package of the monorepo.`,
        },
        FILTER_SUBCOMMAND,
      ],
    },
    {
      name: "prune",
      description: `Removes unnecessary packages.`,
      args: [
        {
          name: "Package",
          isOptional: true,
          generators: searchPackageGenerator,
          debounce: true,
          variadic: true,
        },
        { template: "filepaths" },
      ],
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
    {
      ...SUBCOMMAND_INSTALL,
      name: ["install-test", "it"],
      description:
        "Runs pnpm install followed immediately by pnpm test. It takes exactly the same arguments as pnpm install",
    },
  ],
};
