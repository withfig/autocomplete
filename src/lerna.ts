const getPackages: Fig.Generator = {
  script: ["lerna", "ls"],
  postProcess: (output) =>
    output.split("\n").map((packageName) => ({
      name: packageName,
      icon: "fig://icon?type=string",
    })),
};

const getBranches: Fig.Generator = {
  script: ["git", "branch", "--no-color"],
  postProcess: function (out) {
    if (out.startsWith("fatal:")) {
      return [];
    }
    return out.split("\n").map((output) => {
      return {
        name: output.replace("*", "").trim(),
        description: "Branch",
        icon: "fig://icon?type=git",
      };
    });
  },
};

const getAllScriptsFromPackages: Fig.Generator = {
  // Get all lerna packages, loop over them and get content of package.json
  script: [
    "bash",
    "-c",
    "lerna list -p | while read p; do\n \\cat $p/package.json && echo END\ndone",
  ],
  postProcess: (output) => {
    // Split output by the divider and remove empty entry
    const packages = output.split("END").filter((e) => e.trim() !== "");

    let scripts: string[] = [];
    packages.forEach((packageContent) => {
      const parsed = JSON.parse(packageContent);
      scripts = scripts.concat(Object.keys(parsed["scripts"]));
    });

    return Array.from(new Set(scripts)).map((scriptName) => ({
      name: scriptName,
      icon: "fig://icon?type=npm",
    }));
  },
};

const LOG_LEVELS = [
  "silent",
  "error",
  "warn",
  "success",
  "info",
  "verbose",
  "silly",
];

const SEMVER_NOUNS = [
  "major",
  "minor",
  "patch",
  "premajor",
  "preminor",
  "prepatch",
  "prerelease",
];

const packageScopes = ["public", "restricted"];

const npmClientOption: Fig.Option = {
  name: "--npm-client",
  description: "The exececutable to run the script with",
  args: {
    name: "client",
    suggestions: [
      {
        name: "npm",
        icon: "fig://icon?type=npm",
      },
      {
        name: "yarn",
        icon: "https://yarnpkg.com/favicon-32x32.png",
      },
      {
        name: "pnpm",
        icon: "https://pnpm.js.org/img/favicon.png",
      },
    ],
  },
};

const globalOptions: Fig.Option[] = [
  {
    name: "--concurrency",
    description:
      "How many threads to use when Lerna parallelizes the tasks (defaults to count of logical CPU cores)",
  },
  {
    name: "--loglevel",
    description:
      "What level of logs to report. On failure, all logs are written to lerna-debug.log in the current working directory",
    args: {
      name: "loglevel",
      suggestions: LOG_LEVELS.map((level) => ({
        name: level,
        icon: "fig://icon?type=string",
      })),
    },
  },
  {
    name: "--max-buffer",
    description: "Set a max buffer length for each underlying process call",
    args: {
      name: "bytes",
    },
  },
  {
    name: "--no-progress",
    description:
      "Disable progress bars. This is always the case in a CI environment",
  },
  {
    name: "--no-sort",
    description:
      "The --no-sort option disables sorting, instead executing tasks in an arbitrary order with maximum concurrency",
  },
  {
    name: "--reject-cycles",
    description:
      "Fail immediately if a cycle is found (in bootstrap, exec, publish or run)",
  },
  {
    name: ["-h", "--help"],
    description: "Show help",
  },
  {
    name: ["-v", "--version"],
    description: "Show version number",
  },
];

const runOptions: Fig.Option[] = [
  {
    name: "--stream",
    description:
      "Stream output from child processes immediately, prefixed with the originating package name. This allows output from different packages to be interleaved",
  },
  {
    name: "--parallel",
    description:
      "Similar to --stream, but completely disregards concurrency and topological sorting, running a given command or script immediately in all matching packages with prefixed streaming output",
  },
  {
    name: "--no-bail",
    description:
      "By default, lerna run will exit with an error if any script run returns a non-zero exit code. Pass --no-bail to disable this behavior, running the script in all packages that contain it regardless of exit code",
  },
  {
    name: "--no-prefix",
    description:
      "Disable package name prefixing when output is streaming (--stream or --parallel). This option can be useful when piping results to other processes, such as editor plugins",
  },
  {
    name: "--profile",
    description:
      "Profiles the script executions and produces a performance profile which can be analyzed using DevTools",
  },
  {
    name: "--profile-location",
    description:
      "You can provide a custom location for the performance profile output. The path provided will be resolved relative to the current working directory",
    args: {
      name: "location",
      template: "folders",
    },
  },
];

const filterOptions: Fig.Option[] = [
  {
    name: "--scope",
    description: "Include only packages with names matching the given glob",
    args: { name: "glob", generators: getPackages },
  },
  {
    name: "--ignore",
    description: "Exclude packages with names matching the given glob",
    args: { name: "glob", generators: getPackages },
  },
  {
    name: "--no-private",
    description: "Exclude private packages. They are included by default",
  },
  {
    name: "--since",
    description:
      "Only include packages that have been changed since the specified ref. If no ref is passed, it defaults to the most-recent tag",
    args: {
      name: "ref",
      isOptional: true,
    },
  },
  {
    name: "--exclude-dependents",
    description:
      "Exclude all transitive dependents when running a command with --since, overriding the default 'changed' algorithm",
  },
  {
    name: "--include-dependents",
    description:
      "Exclude all transitive dependents when running a command with --since, overriding the default 'changed' algorithm",
  },
  {
    name: "--include-dependencies",
    description:
      "Include all transitive dependencies when running a command regardless of --scope, --ignore, or --since",
  },
  {
    name: "--include-merged-tags",
    description:
      "Include tags from merged branches when running a command with --since. This is only useful if you do a lot of publishing from feature branches, which is not generally recommended",
  },
];

const listSubCommand: Fig.Subcommand = {
  name: "",
  description: "List local packages",
  options: [
    {
      name: "--json",
      description: "Show information as a JSON array",
    },
    {
      name: "--ndjson",
      description: "Show information as newline-delimited JSON",
    },
    {
      name: ["-a", "-all"],
      description: "Show all packages (including private)",
    },
    {
      name: ["-l", "--long"],
      description: "Show extended information",
    },
    {
      name: ["-p", "--parseable"],
      description: "Show parseable output instead of columnified view",
    },
    {
      name: "--toposort",
      description:
        "Sort packages in topological order (dependencies before dependents) instead of lexical by directory",
    },
    {
      name: "--graph",
      description: "Show dependency graph as a JSON-formatted adjacency list",
    },
  ],
};

const completionSpec: Fig.Spec = {
  name: "lerna",
  description: "A tool for managing JavaScript projects with multiple packages",
  subcommands: [
    /** Init Subcommand */
    {
      name: "init",
      description:
        "Create a new lerna repo or upgrade an existing repo to the current version of Lerna",
      options: [
        ...globalOptions,
        npmClientOption,
        {
          name: ["-i", "--independent"],
          description: "Use independent versioning mode",
        },
        {
          name: "--exact",
          description:
            "Set the exact version of lerna in the package.json file",
        },
      ],
    },
    /** Bootstrap Subcommand */
    {
      name: "bootstrap",
      description:
        "Bootstrap the packages in the current Lerna repo. Installing all their dependencies and linking any cross-dependencies",
      options: [
        ...filterOptions,
        npmClientOption,
        {
          name: "--hoist",
          description:
            "Install external dependencies matching glob at the repo root so they're available to all packages",
          args: {
            name: "glob",
          },
        },
        {
          name: "--nohoist",
          description:
            "Do not install external dependencies matching glob at the repo root. This can be used to opt out of hoisting for certain dependencies",
          args: {
            name: "glob",
          },
        },
        {
          name: "--strict",
          description:
            "When used in conjunction with hoist will throw an error and stop bootstrapping after emitting the version warnings. Has no effect if you aren't hoisting, or if there are no version warnings",
        },
        {
          name: "--ignore-prepublish",
          description:
            "Skip prepublish lifecycle scripts run by default in bootstrapped packages",
        },
        {
          name: "--ignore-scripts",
          description:
            "Skip any lifecycle scripts normally run (prepare, etc) in bootstrapped packages",
        },
        {
          name: "--registry",
          description:
            "Forwarded npm commands will use the specified registry for your package(s)",
          args: {
            name: "url",
          },
        },
        {
          name: "--use-workspaces",
          description: "Enables integration with Yarn Workspaces",
        },
        {
          name: "--no-ci",
          description: "Disable usage of `npm ci` in CI environments",
        },
        {
          name: "--force-local",
          description:
            "When passed, this flag causes the bootstrap command to always symlink local dependencies regardless of matching version range",
        },
      ],
    },
    /** Import Subcommand */
    {
      name: "import",
      description:
        "Import the package in the local path <pathToRepo> into packages/<directory-name> with commit history",
      args: { name: "pathToRepo", template: "folders" },
      options: [
        ...globalOptions,
        {
          name: "--flatten",
          description: "Flatten the git history of the repository to import",
        },
        {
          name: "--dest",
          description:
            "Specify the destination directory by the directory listed in lerna.json",
        },
        {
          name: "--preserve-commit",
          description: "Preserve the original committer and commit date",
        },
      ],
    },
    /** Publish Subcommand */
    {
      name: "publish",
      description:
        "Create a new release of the packages that have been updated. Prompts for a new version and updates all the packages on git and npm",
      options: [
        ...globalOptions,
        {
          name: "--npm-tag",
          description:
            "Publish to npm with the given npm dist-tag (Defaults to latest)",
          args: { name: "tagname" },
        },
        {
          name: ["--canary", "-c"],
          description: "Create a canary release",
        },
        {
          name: "--skip-git",
          description: "Don't run any git commands",
        },
        {
          name: "--force-publish",
          description:
            "Force publish for the specified packages (comma-separated)",
          args: {
            name: "packages",
            generators: getPackages,
            suggestions: [
              {
                name: "*",
                description: "Select all packages",
              },
            ],
          },
        },
      ],
    },
    /** LS Subcommand */
    { ...listSubCommand, name: "ls" },
    /** LL Subcommand */
    { ...listSubCommand, name: "ll" },
    /** LA Subcommand */
    { ...listSubCommand, name: "la" },
    /** List Subcommand */
    { ...listSubCommand, name: "list" },
    /** Changed Subcommand */
    {
      name: "changed",
      description: "Check which packages have changed since the last release",
      args: {
        name: "package",
        isOptional: true,
        generators: getPackages,
      },
      options: [...globalOptions],
    },
    /** Run Subcommand */
    {
      name: "run",
      description:
        "Run an npm script in each package that contains that script",
      options: [...globalOptions, ...filterOptions, ...runOptions],
      args: {
        name: "script",
        description: "Name of the npm script to run",
        generators: getAllScriptsFromPackages,
      },
    },
    /** Link Subcommand */
    {
      name: "link",
      description:
        "Symlink together all Lerna packages that are dependencies of each other in the current Lerna repo",
      options: [
        ...globalOptions,
        {
          name: "--force-local",
          description:
            "When passed, this flag causes the link command to always symlink local dependencies regardless of matching version range",
        },
      ],
    },
    /** Info Subcommand */
    {
      name: "info",
      description:
        "Prints local environment information that proves to be useful especially while submitting bug reports",
    },
    /** Version Subcommand */
    {
      name: "version",
      description: "Bump version of packages changed since the last release",
      args: {
        name: "version",
        isOptional: true,
        suggestions: SEMVER_NOUNS.map((versionName) => ({
          name: versionName,
          icon: "fig://icon?type=npm",
        })),
      },
      options: [
        {
          name: "--allow-branch",
          description:
            "An allowlist of globs that match git branches where lerna version is enabled",
          args: {
            name: "glob",
            generators: getBranches,
          },
        },
        {
          name: "--amend",
          description:
            "Perform all changes on the current commit, instead of adding a new one",
        },
        {
          name: "--changelog-preset",
          description: "Change the changelog preset type",
        },
        {
          name: "--conventional-commits",
          description:
            "Use the Conventional Commits Specification to determine the version bump and generate CHANGELOG.md files",
        },
        {
          name: "--conventional-graduate",
          description:
            "Graduate the specified packages (comma-separated) or all packages using *",
        },
        {
          name: "--conventional-prerelease",
          description:
            "Release with prerelease versions the specified packages (comma-separated) or all packages using *",
        },
        {
          name: "--create-release",
          description:
            "Create an official release based on the changes packages",
          args: {
            name: "type",
            suggestions: [
              {
                name: "github",
                icon: "https://github.com/fluidicon.png",
              },
              {
                name: "gitlab",
                icon: "https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/a0178a3dfdb9c4e34857bad3d2d788036baa0c76/icons/gitlab.svg",
              },
            ],
          },
        },
        {
          name: "--exact",
          description:
            "Specify updated dependencies in updated packages exactly",
        },
        {
          name: "--force-publish",
          description:
            "Force publish the specified packages (comma-separated) or all packages using *",
        },
        {
          name: "--git-remote",
          description:
            "Push the git changes to the specified remote instead of origin",
          args: {
            name: "remote",
            generators: {
              script: ["git", "remote"],
              postProcess: (output) => {
                return output.split("\n").map((remoteName) => ({
                  name: remoteName,
                  description: "Remote",
                  icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1024px-Git_icon.svg.png",
                }));
              },
            },
          },
        },
        {
          name: "--ignore-changes",
          description:
            "Ignore changes in files matched by glob(s) when detecting changed packages",
          args: {
            name: "glob",
            isOptional: true,
            template: "folders",
          },
        },
        {
          name: "--ignore-scripts",
          description: "Disable running lifecycle scripts during lerna version",
        },
        {
          name: "--include-merged-tags",
          description:
            "Include tags from merged branches when detecting changed packages",
        },
        {
          name: ["-m", "--message"],
          description:
            "Use the provided message when committing the version updates for publication",
          args: {
            name: "msg",
          },
        },
        {
          name: "--no-changelog",
          description:
            "When using conventional-commits, do not generate any CHANGELOG.md files",
        },
        {
          name: "--no-commit-hooks",
          description: "Disable running git commit hooks",
        },
        {
          name: "--no-git-tag-version",
          description:
            "Don't commit changes to package.json files and don't tag the release",
        },
        {
          name: "--no-granular-pathspec",
        },
        {
          name: "--no-private",
          description: "Don't include private packages",
        },
        {
          name: "--preid",
          description: "Bump semver using the specified prerelease identifier",
          args: {
            name: "identifier",
          },
        },
        {
          name: "--sign-git-commit",
        },
        {
          name: "--sign-git-tag",
        },
        {
          name: "--force-git-tag",
        },
        {
          name: "--tag-version-prefix",
          description: "Change the custom version prefix",
          args: {
            name: "prefix",
          },
        },
        {
          name: "--yes",
          description: "Skip all confirmation prompts",
        },
      ],
    },
    /** Diff Subcommand */
    {
      name: "diff",
      description:
        "Diff all packages or a single package since the last release",
      args: {
        name: "package",
        generators: getPackages,
        isOptional: true,
      },
    },
    /** Exec Subcommand */
    {
      name: "exec",
      description: "Execute an arbitrary command in each package",
      options: [...globalOptions, ...filterOptions, ...runOptions],
      args: {
        name: "command",
        generators: getAllScriptsFromPackages,
      },
    },
    /** Add Subcommand */
    {
      name: "add",
      description: "Add a dependency to matched packages",
      options: [
        ...globalOptions,
        ...filterOptions,
        {
          name: "--dev",
          description:
            "Add the new package to devDependencies instead of dependencies",
        },
        {
          name: "--exact",
          description: "Add the new package with an exact version",
        },
        {
          name: "--peer",
          description:
            "Add the new package to peerDependencies instead of dependencies",
        },
        {
          name: "--registry",
          description: "Use a custom registry to install the targeted package",
          args: {
            name: "registry",
          },
        },
        {
          name: "--no-bootstrap",
          description: "Skip the chained lerna bootstrap",
        },
      ],
    },
    /** Clean Subcommand */
    {
      name: "clean",
      description: "Remove the node_modules directory from all packages",
      options: [
        ...globalOptions,
        ...filterOptions,
        {
          name: "--yes",
          description: "Skip all confirmation prompts",
        },
      ],
    },
    /** Create Subcomman */
    {
      name: "create",
      description: "Create a new lerna-managed package",
      args: [
        {
          name: "name",
        },
        {
          name: "loc",
          isOptional: true,
        },
      ],
      options: [
        {
          name: "--access",
          description: "Set the scope of the package",
          args: {
            name: "scope",
            suggestions: packageScopes.map((scope) => ({
              name: scope,
              icon: "fig://icon?type=string",
            })),
          },
        },
        {
          name: "--bin",
          description: "Package has an executable",
          args: {
            name: "executableName",
            isOptional: true,
          },
        },
        {
          name: "--description",
          description: "Package description",
        },
        {
          name: "--dependencies",
          description: "A list of package dependencies",
          args: {
            name: "dependencies",
            isVariadic: true,
          },
        },
        {
          name: "--es-module",
          description: "Initialize a transpiled ES Module",
        },
        {
          name: "--homepage",
          description:
            "The package homepage, defaulting to a subpath of the root pkg.homepage",
        },
        {
          name: "--keywords",
          description: "A list of package keywords",
          args: {
            name: "keywords",
            isVariadic: true,
          },
        },
        {
          name: "--license",
          description: "The desired package license (SPDX identifier)",
        },
        {
          name: "--private",
          description: "Make the new package private, never published",
        },
        {
          name: "--registry",
          description: "Configure the package's publishConfig.registry",
        },
        {
          name: "--tag",
          description: "Configure the package's publishConfig.tag",
        },
        {
          name: "--yes",
          description: "Skip all prompts, accepting default values",
        },
      ],
    },
  ],
};

export default completionSpec;
