// ////////////////////////////////////////////////////////////////// Generators //////////////////////////////////////////////////////////////////

const dependenciesGenerator: Fig.Generator = {
  script: {
    command: "bash",
    args: [
      "-c",
      'awk \'/dependencies = \\[/ {f=1; next} /\\]/ {f=0} f && /"/ {line = $0; gsub(/^[ \\t]*"/, "", line); sub(/>=.*$/, "", line); gsub(/",?$/, "", line); print line}\' pyproject.toml',
    ],
  },
  postProcess: (out) => {
    return out.split("\n").map((line) => {
      return {
        name: line,
        description: "Dependency",
        icon: "📦",
        priority: 80,
      };
    });
  },
};

const commandGenerator: Fig.Generator = {
  script: {
    command: "bash",
    args: ["-c", `uv run | grep -E '^- ' | sed 's/^- //'`],
  },
  postProcess: (out) => {
    return out.split("\n").map((line) => {
      return {
        name: line,
        description: "Command",
        icon: "fig://icon?type=command",
        priority: 80,
      };
    });
  },
};

// ////////////////////////////////////////////////////////////////// Options //////////////////////////////////////////////////////////////////
const indexOptions: Fig.Option[] = [
  {
    name: "--index",
    description:
      "The URLs to use when resolving dependencies, in addition to the default index",
    args: { name: "INDEX" },
  },
  {
    name: "--default-index",
    description:
      "The URL of the default package index (by default: <https://pypi.org/simple>)",
    args: { name: "DEFAULT_INDEX" },
  },
  {
    name: "--index-url",
    description:
      "The URL of the Python package index (by default: <https://pypi.org/simple>)",
    args: { name: "INDEX_URL" },
  },
  {
    name: "--extra-index-url",
    description:
      "Extra URLs of package indexes to use, in addition to `--index-url`",
    args: { name: "EXTRA_INDEX_URL" },
  },
  {
    name: "--find-links",
    description:
      "Locations to search for candidate distributions, in addition to those found in the registry indexes",
    args: { name: "FIND_LINKS" },
  },
  {
    name: "--no-index",
    description:
      "Ignore the registry index (e.g., PyPI), instead relying on direct URL dependencies and those provided via `--find-links`",
  },
  {
    name: "--index-strategy",
    description:
      "The strategy to use when resolving against multiple index URLs",
    args: {
      name: "INDEX_STRATEGY",
      suggestions: ["first-index", "unsafe-first-match", "unsafe-best-match"],
    },
  },
  {
    name: "--keyring-provider",
    description: "Attempt to use `keyring` for authentication for index URLs",
    args: {
      name: "KEYRING_PROVIDER",
      suggestions: ["disabled", "subprocess"],
    },
  },
];

const cacheOptions: Fig.Option[] = [
  {
    name: "--no-cache",
    description:
      "Avoid reading from or writing to the cache, instead using a temporary directory for the duration of the operation",
  },
  {
    name: "--cache-dir",
    description: "Path to the cache directory",
    args: { name: "CACHE_DIR" },
  },
  {
    name: "--refresh",
    description: "Refresh all cached data",
  },
  {
    name: "--refresh-package",
    description: "Refresh cached data for a specific package",
    args: { name: "REFRESH_PACKAGE" },
  },
];

const resolverOptions: Fig.Option[] = [
  {
    name: "-U",
    description:
      "Allow package upgrades, ignoring pinned versions in any existing output file. Implies `--refresh`",
  },
  {
    name: "--upgrade-package",
    description:
      "Allow upgrades for a specific package, ignoring pinned versions in any existing output file. Implies `--refresh-package`",
    args: { name: "UPGRADE_PACKAGE" },
  },
  {
    name: "--resolution",
    description:
      "The strategy to use when selecting between the different compatible versions for a given package requirement",
    args: {
      name: "RESOLUTION",
      suggestions: ["highest", "lowest", "lowest-direct"],
    },
  },
  {
    name: "--prerelease",
    description: "The strategy to use when considering pre-release versions",
    args: {
      name: "PRERELEASE",
      suggestions: [
        "disallow",
        "allow",
        "if-necessary",
        "explicit",
        "if-necessary-or-explicit",
      ],
    },
  },
  {
    name: "--exclude-newer",
    description:
      "Limit candidate packages to those that were uploaded prior to the given date",
    args: { name: "EXCLUDE_NEWER" },
  },
  {
    name: "--no-sources",
    description:
      "Ignore the `tool.uv.sources` table when resolving dependencies. Used to lock against the standards-compliant, publishable package metadata, as opposed to using any local or Git sources",
  },
];

const installerOptions: Fig.Option[] = [
  {
    name: "--reinstall",
    description:
      "Reinstall all packages, regardless of whether they're already installed. Implies `--refresh`",
  },
  {
    name: "--reinstall-package",
    description:
      "Reinstall a specific package, regardless of whether it's already installed. Implies `--refresh-package`",
    args: { name: "REINSTALL_PACKAGE" },
  },
  {
    name: "--link-mode",
    description:
      "The method to use when installing packages from the global cache",
    args: {
      name: "LINK_MODE",
      suggestions: ["clone", "copy", "hardlink", "symlink"],
    },
  },
  {
    name: "--compile-bytecode",
    description: "Compile Python files to bytecode after installation",
  },
];

const buildOptions: Fig.Option[] = [
  {
    name: "-C",
    description:
      "Settings to pass to the PEP 517 build backend, specified as `KEY=VALUE` pairs",
    args: { name: "CONFIG_SETTING" },
  },
  {
    name: "--no-build-isolation",
    description: "Disable isolation when building source distributions",
    args: { name: "UV_NO_BUILD_ISOLATION" },
  },
  {
    name: "--no-build-isolation-package",
    description:
      "Disable isolation when building source distributions for a specific package",
    args: { name: "NO_BUILD_ISOLATION_PACKAGE" },
  },
  {
    name: "--no-build",
    description: "Don't build source distributions",
  },
  {
    name: "--no-build-package",
    description: "Don't build source distributions for a specific package",
    args: { name: "NO_BUILD_PACKAGE" },
  },
  {
    name: "--no-binary",
    description: "Don't install pre-built wheels",
  },
  {
    name: "--no-binary-package",
    description: "Don't install pre-built wheels for a specific package",
    args: { name: "NO_BINARY_PACKAGE" },
  },
];

const pythonOptions: Fig.Option[] = [
  {
    name: ["-p", "--python"],
    description:
      "The Python interpreter to use to determine the minimum supported Python version",
    args: {
      name: "PYTHON",
    },
  },
  {
    name: "--python-preference",
    description: "Whether to prefer uv-managed or system Python installations",
    args: {
      name: "PYTHON_PREFERENCE",
      suggestions: ["only-managed", "managed", "system", "only-system"],
    },
  },
  {
    name: "--no-python-downloads",
    description: "Disable automatic downloads of Python",
  },
];

// ////////////////////////////////////////////////////////////////// Subcommands //////////////////////////////////////////////////////////////////

//    run
const runOptions: Fig.Option[] = [
  {
    name: "--extra",
    description: "Include optional dependencies from the specified extra name",
    args: { name: "EXTRA" },
  },
  {
    name: "--all-extras",
    description: "Include all optional dependencies",
  },
  {
    name: "--no-extra",
    description:
      "Exclude the specified optional dependencies, if `--all-extras` is supplied",
    args: { name: "NO_EXTRA" },
  },
  {
    name: "--no-dev",
    description: "Omit the development dependency group",
  },
  {
    name: "--group",
    description: "Include dependencies from the specified dependency group",
    args: { name: "GROUP" },
  },
  {
    name: "--no-group",
    description: "Exclude dependencies from the specified dependency group",
    args: { name: "NO_GROUP" },
  },
  {
    name: "--only-group",
    description:
      "Only include dependencies from the specified dependency group",
    args: { name: "ONLY_GROUP" },
  },
  {
    name: "--all-groups",
    description: "Include dependencies from all dependency groups",
  },
  {
    name: ["-m", "--module"],
    description: "Run a Python module",
  },
  {
    name: "--only-dev",
    description: "Only include the development dependency group",
  },
  {
    name: "--no-editable",
    description:
      "Install any editable dependencies, including the project and any workspace members, as non-editable",
  },
  {
    name: "--env-file",
    description: "Load environment variables from a `.env` file",
    args: { name: "ENV_FILE" },
  },
  {
    name: "--no-env-file",
    description: "Avoid reading environment variables from a `.env` file",
  },
  {
    name: "--with",
    description: "Run with the given packages installed",
    args: { name: "WITH" },
  },
  {
    name: "--with-editable",
    description: "Run with the given packages installed as editables",
    args: { name: "WITH_EDITABLE" },
  },
  {
    name: "--with-requirements",
    description:
      "Run with all packages listed in the given `requirements.txt` files",
    args: { name: "WITH_REQUIREMENTS" },
  },
  {
    name: "--isolated",
    description: "Run the command in an isolated virtual environment",
  },
  {
    name: "--no-sync",
    description: "Avoid syncing the virtual environment",
  },
  {
    name: "--locked",
    description: "Assert that the `uv.lock` will remain unchanged",
  },
  {
    name: "--frozen",
    description: "Run without updating the `uv.lock` file",
  },
  {
    name: ["-s", "--script"],
    description: "Run the given path as a Python script",
  },
  {
    name: "--all-packages",
    description: "Run the command with all workspace members installed",
  },
  {
    name: "--package",
    description: "Run the command in a specific package in the workspace",
    args: { name: "PACKAGE" },
  },
  {
    name: "--no-project",
    description: "Avoid discovering the project or workspace",
  },
];

//    init
const initOptions: Fig.Option[] = [
  {
    name: "--name",
    description: "The name of the project",
    args: { name: "NAME" },
  },
  {
    name: "--package",
    description: "Set up the project to be built as a Python package",
  },
  {
    name: "--no-package",
    description: "Do not set up the project to be built as a Python package",
  },
  {
    name: "--app",
    description: "Create a project for an application",
  },
  {
    name: "--lib",
    description: "Create a project for a library",
  },
  {
    name: "--script",
    description: "Create a script",
  },
  {
    name: "--vcs",
    description: "Initialize a version control system for the project",
    args: {
      name: "VCS",
      suggestions: ["git", "none"],
    },
  },
  {
    name: "--build-backend",
    description: "Initialize a build-backend of choice for the project",
    args: {
      name: "BUILD_BACKEND",
      suggestions: ["hatch", "flit", "pdm", "setuptools", "maturin", "scikit"],
    },
  },
  {
    name: "--no-readme",
    description: "Do not create a `README.md` file",
  },
  {
    name: "--author-from",
    description: "Fill in the `authors` field in the `pyproject.toml`",
    args: {
      name: "AUTHOR_FROM",
      suggestions: ["auto", "git", "none"],
    },
  },
  {
    name: "--no-pin-python",
    description: "Do not create a `.python-version` file for the project",
  },
  {
    name: "--no-workspace",
    description:
      "Avoid discovering a workspace and create a standalone project",
  },
];

const initCacheOptions: Fig.Option[] = [
  {
    name: "-n",
    description:
      "Avoid reading from or writing to the cache, instead using a temporary directory for the duration of the operation",
  },
  {
    name: "--cache-dir",
    description: "Path to the cache directory",
    args: { name: "CACHE_DIR" },
  },
];

//    add
const addOptions: Fig.Option[] = [
  {
    name: ["-r", "--requirements"],
    description:
      "Add all packages listed in the given `requirements.txt` files",
    args: { name: "REQUIREMENTS" },
  },
  {
    name: "--dev",
    description: "Add the requirements to the development dependency group",
  },
  {
    name: "--optional",
    description:
      "Add the requirements to the package's optional dependencies for the specified extra",
    args: { name: "OPTIONAL" },
  },
  {
    name: "--group",
    description: "Add the requirements to the specified dependency group",
    args: { name: "GROUP" },
  },
  {
    name: "--editable",
    description: "Add the requirements as editable",
  },
  {
    name: "--raw-sources",
    description:
      "Add source requirements to `project.dependencies`, rather than `tool.uv.sources`",
  },
  {
    name: "--rev",
    description: "Commit to use when adding a dependency from Git",
    args: { name: "REV" },
  },
  {
    name: "--tag",
    description: "Tag to use when adding a dependency from Git",
    args: { name: "TAG" },
  },
  {
    name: "--branch",
    description: "Branch to use when adding a dependency from Git",
    args: { name: "BRANCH" },
  },
  {
    name: "--extra",
    description: "Extras to enable for the dependency",
    args: { name: "EXTRA" },
  },
  {
    name: "--no-sync",
    description: "Avoid syncing the virtual environment",
    args: { name: "UV_NO_SYNC" },
  },
  {
    name: "--locked",
    description: "Assert that the `uv.lock` will remain unchanged",
    args: { name: "UV_LOCKED" },
  },
  {
    name: "--frozen",
    description: "Add dependencies without re-locking the project",
    args: { name: "UV_FROZEN" },
  },
  {
    name: "--package",
    description: "Add the dependency to a specific package in the workspace",
    args: { name: "PACKAGE" },
  },
  {
    name: "--script",
    description:
      "Add the dependency to the specified Python script, rather than to a project",
    args: { name: "SCRIPT" },
  },
];

//    remove
const removeOptions: Fig.Option[] = [
  {
    name: "--dev",
    description: "Remove the packages from the development dependency group",
  },
  {
    name: "--optional",
    description:
      "Remove the packages from the project's optional dependencies for the specified extra",
    args: {
      name: "OPTIONAL",
    },
  },
  {
    name: "--group",
    description: "Remove the packages from the specified dependency group",
    args: {
      name: "GROUP",
    },
  },
  {
    name: "--no-sync",
    description:
      "Avoid syncing the virtual environment after re-locking the project",
    args: {
      name: "UV_NO_SYNC",
    },
  },
  {
    name: "--locked",
    description: "Assert that the `uv.lock` will remain unchanged",
    args: {
      name: "UV_LOCKED",
    },
  },
  {
    name: "--frozen",
    description: "Remove dependencies without re-locking the project",
    args: {
      name: "UV_FROZEN",
    },
  },
  {
    name: "--package",
    description:
      "Remove the dependencies from a specific package in the workspace",
    args: {
      name: "PACKAGE",
    },
  },
  {
    name: "--script",
    description:
      "Remove the dependency from the specified Python script, rather than from a project",
    args: {
      name: "SCRIPT",
    },
  },
];

//    sync
const syncOptions: Fig.Option[] = [
  {
    name: "--extra",
    description: "Include optional dependencies from the specified extra name",
    args: {
      name: "EXTRA",
    },
  },
  {
    name: "--all-extras",
    description: "Include all optional dependencies",
  },
  {
    name: "--no-extra",
    description:
      "Exclude the specified optional dependencies, if `--all-extras` is supplied",
    args: {
      name: "NO_EXTRA",
    },
  },
  {
    name: "--no-dev",
    description: "Omit the development dependency group",
  },
  {
    name: "--only-dev",
    description: "Only include the development dependency group",
  },
  {
    name: "--group",
    description: "Include dependencies from the specified dependency group",
    args: {
      name: "GROUP",
    },
  },
  {
    name: "--no-group",
    description: "Exclude dependencies from the specified dependency group",
    args: {
      name: "NO_GROUP",
    },
  },
  {
    name: "--only-group",
    description:
      "Only include dependencies from the specified dependency group",
    args: {
      name: "ONLY_GROUP",
    },
  },
  {
    name: "--all-groups",
    description: "Include dependencies from all dependency groups",
  },
  {
    name: "--no-editable",
    description:
      "Install any editable dependencies, including the project and any workspace members, as non-editable",
  },
  {
    name: "--inexact",
    description: "Do not remove extraneous packages present in the environment",
  },
  {
    name: "--no-install-project",
    description: "Do not install the current project",
  },
  {
    name: "--no-install-workspace",
    description:
      "Do not install any workspace members, including the root project",
  },
  {
    name: "--no-install-package",
    description: "Do not install the given package(s)",
    args: {
      name: "NO_INSTALL_PACKAGE",
    },
  },
  {
    name: "--locked",
    description: "Assert that the `uv.lock` will remain unchanged",
    args: {
      name: "UV_LOCKED",
    },
  },
  {
    name: "--frozen",
    description: "Sync without updating the `uv.lock` file",
    args: {
      name: "UV_FROZEN",
    },
  },
  {
    name: "--all-packages",
    description: "Sync all packages in the workspace",
  },
  {
    name: "--package",
    description: "Sync for a specific package in the workspace",
    args: {
      name: "PACKAGE",
    },
  },
];

//   lock
const lockOptions: Fig.Option[] = [
  {
    name: "--locked",
    description: "Assert that the `uv.lock` will remain unchanged",
  },
  {
    name: "--frozen",
    description: "Assert that a `uv.lock` exists, without updating it",
  },
  {
    name: "--dry-run",
    description: "Perform a dry run, without writing the lockfile",
  },
];

const lockInstallerOptions: Fig.Option[] = [
  {
    name: "--link-mode",
    description:
      "The method to use when installing packages from the global cache",
    args: {
      name: "LINK_MODE",
      suggestions: ["clone", "copy", "hardlink", "symlink"],
    },
  },
];

//  export
const exportOptions: Fig.Option[] = [
  {
    name: "--format",
    description: "The format to which `uv.lock` should be exported",
    args: {
      name: "FORMAT",
    },
  },
  {
    name: "--all-packages",
    description: "Export the entire workspace",
  },
  {
    name: "--package",
    description:
      "Export the dependencies for a specific package in the workspace",
    args: {
      name: "PACKAGE",
    },
  },
  {
    name: "--prune",
    description: "Prune the given package from the dependency tree",
    args: {
      name: "PRUNE",
    },
  },
  {
    name: "--extra",
    description: "Include optional dependencies from the specified extra name",
    args: {
      name: "EXTRA",
    },
  },
  {
    name: "--all-extras",
    description: "Include all optional dependencies",
  },
  {
    name: "--no-extra",
    description:
      "Exclude the specified optional dependencies, if `--all-extras` is supplied",
    args: {
      name: "NO_EXTRA",
    },
  },
  {
    name: "--no-dev",
    description: "Omit the development dependency group",
  },
  {
    name: "--only-dev",
    description: "Only include the development dependency group",
  },
  {
    name: "--group",
    description: "Include dependencies from the specified dependency group",
    args: {
      name: "GROUP",
    },
  },
  {
    name: "--no-group",
    description: "Exclude dependencies from the specified dependency group",
    args: {
      name: "NO_GROUP",
    },
  },
  {
    name: "--only-group",
    description:
      "Only include dependencies from the specified dependency group",
    args: {
      name: "ONLY_GROUP",
    },
  },
  {
    name: "--all-groups",
    description: "Include dependencies from all dependency groups",
  },
  {
    name: "--no-header",
    description:
      "Exclude the comment header at the top of the generated output file",
  },
  {
    name: "--no-editable",
    description:
      "Install any editable dependencies, including the project and any workspace members, as non-editable",
  },
  {
    name: "--no-hashes",
    description: "Omit hashes in the generated output",
  },
  {
    name: "-o",
    description: "Write the exported requirements to the given file",
    args: {
      name: "OUTPUT_FILE",
    },
  },
  {
    name: "--no-emit-project",
    description: "Do not emit the current project",
  },
  {
    name: "--no-emit-workspace",
    description:
      "Do not emit any workspace members, including the root project",
  },
  {
    name: "--no-emit-package",
    description: "Do not emit the given package(s)",
    args: {
      name: "NO_EMIT_PACKAGE",
    },
  },
  {
    name: "--locked",
    description: "Assert that the `uv.lock` will remain unchanged",
    args: {
      name: "UV_LOCKED",
    },
  },
  {
    name: "--frozen",
    description: "Do not update the `uv.lock` before exporting",
    args: {
      name: "UV_FROZEN",
    },
  },
];

// tree
const treeOptions: Fig.Option[] = [
  {
    name: "--universal",
    description: "Show a platform-independent dependency tree",
  },
  {
    name: "-d",
    description: "Maximum display depth of the dependency tree",
    args: {
      name: "DEPTH",
      default: "255",
    },
  },
  {
    name: "--prune",
    description:
      "Prune the given package from the display of the dependency tree",
    args: {
      name: "PRUNE",
    },
  },
  {
    name: "--package",
    description: "Display only the specified packages",
    args: {
      name: "PACKAGE",
    },
  },
  {
    name: "--no-dedupe",
    description:
      "Do not de-duplicate repeated dependencies. Usually, when a package has already displayed its dependencies, further occurrences will not re-display its dependencies, and will include a (*) to indicate it has already been shown. This flag will cause those duplicates to be repeated",
  },
  {
    name: "--invert",
    description:
      "Show the reverse dependencies for the given package. This flag will invert the tree and display the packages that depend on the given package",
  },
  {
    name: "--outdated",
    description:
      "Show the latest available version of each package in the tree",
  },
  {
    name: "--only-dev",
    description: "Only include the development dependency group",
  },
  {
    name: "--no-dev",
    description: "Omit the development dependency group",
  },
  {
    name: "--group",
    description: "Include dependencies from the specified dependency group",
    args: {
      name: "GROUP",
    },
  },
  {
    name: "--no-group",
    description: "Exclude dependencies from the specified dependency group",
    args: {
      name: "NO_GROUP",
    },
  },
  {
    name: "--only-group",
    description:
      "Only include dependencies from the specified dependency group",
    args: {
      name: "ONLY_GROUP",
    },
  },
  {
    name: "--all-groups",
    description: "Include dependencies from all dependency groups",
  },
  {
    name: "--locked",
    description: "Assert that the `uv.lock` will remain unchanged",
    args: {
      name: "UV_LOCKED",
    },
  },
  {
    name: "--frozen",
    description: "Display the requirements without locking the project",
    args: {
      name: "UV_FROZEN",
    },
  },
  {
    name: "--python-version",
    description: "The Python version to use when filtering the tree",
    args: {
      name: "PYTHON_VERSION",
    },
  },
  {
    name: "--python-platform",
    description: "The platform to use when filtering the tree",
    args: {
      name: "PYTHON_PLATFORM",
      suggestions: [
        "windows",
        "linux",
        "macos",
        "x86_64-pc-windows-msvc",
        "i686-pc-windows-msvc",
        "x86_64-unknown-linux-gnu",
        "aarch64-apple-darwin",
        "x86_64-apple-darwin",
        "aarch64-unknown-linux-gnu",
        "aarch64-unknown-linux-musl",
        "x86_64-unknown-linux-musl",
        "x86_64-manylinux_2_17",
        "x86_64-manylinux_2_28",
        "x86_64-manylinux_2_31",
        "x86_64-manylinux_2_32",
        "x86_64-manylinux_2_33",
        "x86_64-manylinux_2_34",
        "x86_64-manylinux_2_35",
        "x86_64-manylinux_2_36",
        "x86_64-manylinux_2_37",
        "x86_64-manylinux_2_38",
        "x86_64-manylinux_2_39",
        "x86_64-manylinux_2_40",
        "aarch64-manylinux_2_17",
        "aarch64-manylinux_2_28",
        "aarch64-manylinux_2_31",
        "aarch64-manylinux_2_32",
        "aarch64-manylinux_2_33",
        "aarch64-manylinux_2_34",
        "aarch64-manylinux_2_35",
        "aarch64-manylinux_2_36",
        "aarch64-manylinux_2_37",
        "aarch64-manylinux_2_38",
        "aarch64-manylinux_2_39",
        "aarch64-manylinux_2_40",
      ],
    },
  },
];

const toolSubcommands: Fig.Subcommand[] = [
  {
    name: "run",
    description: "Run a command provided by a Python package",
    options: [
      {
        name: "--from",
        description: "Use the given package to provide the command",
        args: { name: "FROM" },
      },
      {
        name: "--with",
        description: "Run with the given packages installed",
        args: { name: "WITH" },
      },
      {
        name: "--with-editable",
        description: "Run with the given packages installed as editables",
        args: { name: "WITH_EDITABLE" },
      },
      {
        name: "--with-requirements",
        description:
          "Run with all packages listed in the given `requirements.txt` files",
        args: { name: "WITH_REQUIREMENTS" },
      },
      {
        name: "--isolated",
        description: "Run the tool in an isolated virtual environment",
      },
    ],
  },
  {
    name: "install",
    description: "Install commands provided by a Python package",
    options: [
      {
        name: "--editable",
        description: "Install the package in editable mode",
      },
      {
        name: "--with",
        description: "Include the following extra requirements",
        args: { name: "WITH" },
      },
      {
        name: "--with-editable",
        description: "Include the given packages as editables",
        args: { name: "WITH_EDITABLE" },
      },
      {
        name: "--with-requirements",
        description:
          "Run all requirements listed in the given `requirements.txt` files",
        args: { name: "WITH_REQUIREMENTS" },
      },
      {
        name: "--isolated",
        description: "Install the tool in an isolated virtual environment",
      },
    ],
  },
  {
    name: "upgrade",
    description: "Upgrade installed tools",
    options: [
      {
        name: "--all",
        description: "Upgrade all tools",
      },
    ],
  },
  {
    name: "list",
    description: "List installed tools",
    options: [
      {
        name: "--show-paths",
        description:
          "Whether to display the path to each tool environment and installed executable",
      },
      {
        name: "--show-version-specifiers",
        description:
          "Whether to display the version specifier(s) used to install each tool",
      },
    ],
  },
  {
    name: "uninstall",
    description: "Uninstall a tool",
    options: [
      {
        name: "--all",
        description: "Uninstall all tools",
      },
    ],
  },
  {
    name: "update-shell",
    description: "Ensure that the tool executable directory is on the `PATH`",
  },
  {
    name: "dir",
    description: "Show the path to the uv tools directory",
    options: [
      {
        name: "--bin",
        description:
          "Show the directory into which `uv tool` will install executables",
      },
    ],
  },
];

// python

const pythonSubcommands: Fig.Subcommand[] = [
  {
    name: "list",
    description: "List the available Python installations",
    options: [
      {
        name: "--all-versions",
        description: "List all Python versions, including old patch versions",
      },
      {
        name: "--all-platforms",
        description: "List Python downloads for all platforms",
      },
      {
        name: "--only-installed",
        description:
          "Only show installed Python versions, exclude available downloads",
      },
    ],
  },
  {
    name: "install",
    description: "Download and install Python versions",
    args: {
      name: "VERSION",
      description: "The Python version to install",
    },
    options: [
      {
        name: "--mirror",
        description:
          "Set the URL to use as the source for downloading Python installations",
        args: { name: "MIRROR" },
      },
      {
        name: "--pypy-mirror",
        description:
          "Set the URL to use as the source for downloading PyPy installations",
        args: { name: "PYPY_MIRROR" },
      },
      {
        name: "--reinstall",
        description:
          "Reinstall the requested Python version, if it's already installed",
      },
      {
        name: "--force",
        description: "Replace existing Python executables during installation",
      },
      {
        name: "--default",
        description: "Use as the default Python version",
      },
    ],
  },
  {
    name: "find",
    description: "Search for a Python installation",
    args: {
      name: "REQUEST",
      description: "The Python request",
    },
    options: [
      {
        name: "--no-project",
        description: "Avoid discovering the project or workspace",
      },
      {
        name: "--system",
        description:
          "Only find system Python interpreters [env: UV_SYSTEM_PYTHON=]",
      },
    ],
  },
  {
    name: "pin",
    description: "Pin to a specific Python version",
    args: {
      name: "REQUEST",
      description: "The Python request",
    },
    options: [
      {
        name: "--resolved",
        description:
          "Write the resolved Python interpreter path instead of the request",
      },
      {
        name: "--no-project",
        description: "Avoid discovering the project or workspace",
      },
    ],
  },
  {
    name: "dir",
    description: "Show the uv Python installation directory",
    options: [
      {
        name: "--bin",
        description:
          "Show the directory into which `uv python` will install Python executables",
      },
    ],
  },
  {
    name: "uninstall",
    description: "Uninstall Python versions",
    args: {
      name: "VERSION",
      description: "The Python version to uninstall",
    },
    options: [
      {
        name: "--all",
        description: "Uninstall all Python versions",
      },
    ],
  },
];

// pip
const pipSubcommands: Fig.Subcommand[] = [
  {
    name: "compile",
    description:
      "Compile a `requirements.in` file to a `requirements.txt` file",
  },
  {
    name: "sync",
    description: "Sync an environment with a `requirements.txt` file",
    args: {
      name: "REQUIREMENTS",
      description: "The path to the requirements file",
    },
  },
  {
    name: "install",
    description: "Install packages into an environment",
    args: {
      name: "PACKAGES",
      description: "Packages to install",
      isVariadic: true,
    },
  },
  {
    name: "uninstall",
    description: "Uninstall packages from an environment",
    args: {
      name: "PACKAGES",
      description: "Packages to uninstall",
      isVariadic: true,
    },
  },
  {
    name: "freeze",
    description:
      "List, in requirements format, packages installed in an environment",
  },
  {
    name: "list",
    description:
      "List, in tabular format, packages installed in an environment",
  },
  {
    name: "show",
    description: "Show information about one or more installed packages",
    args: {
      name: "PACKAGES",
      description: "Packages to show",
      isVariadic: true,
    },
  },
  {
    name: "tree",
    description: "Display the dependency tree for an environment",
  },
  {
    name: "check",
    description: "Verify installed packages have compatible dependencies",
  },
];

// venv
const venvOptions: Fig.Option[] = [
  {
    name: "--no-project",
    description: "Avoid discovering a project or workspace",
  },
  {
    name: "--seed",
    description:
      "Install seed packages (one or more of: `pip`, `setuptools`, and `wheel`) into the virtual environment",
  },
  {
    name: "--allow-existing",
    description:
      "Preserve any existing files or directories at the target path",
  },
  {
    name: "--prompt",
    description:
      "Provide an alternative prompt prefix for the virtual environment",
    args: {
      name: "PROMPT",
    },
  },
  {
    name: "--system-site-packages",
    description:
      "Give the virtual environment access to the system site packages directory",
  },
  {
    name: "--relocatable",
    description: "Make the virtual environment relocatable",
  },
  {
    name: "--index-strategy",
    description:
      "The strategy to use when resolving against multiple index URLs",
    args: {
      name: "INDEX_STRATEGY",
      suggestions: ["first-index", "unsafe-first-match", "unsafe-best-match"],
    },
  },
  {
    name: "--keyring-provider",
    description: "Attempt to use `keyring` for authentication for index URLs",
    args: {
      name: "KEYRING_PROVIDER",
      suggestions: ["disabled", "subprocess"],
    },
  },
  {
    name: "--exclude-newer",
    description:
      "Limit candidate packages to those that were uploaded prior to the given date",
    args: {
      name: "EXCLUDE_NEWER",
    },
  },
  {
    name: "--link-mode",
    description:
      "The method to use when installing packages from the global cache",
    args: {
      name: "LINK_MODE",
      suggestions: ["clone", "copy", "hardlink", "symlink"],
    },
  },
];

// build
const buildCommandOptions: Fig.Option[] = [
  {
    name: "--package",
    description: "Build a specific package in the workspace",
    args: {
      name: "PACKAGE",
    },
  },
  {
    name: "--all-packages",
    description: "Build all packages in the workspace",
  },
  {
    name: "-o",
    description:
      "The output directory to which distributions should be written",
    args: {
      name: "OUT_DIR",
    },
  },
  {
    name: "--sdist",
    description:
      "Build a source distribution ('sdist') from the given directory",
  },
  {
    name: "--wheel",
    description:
      "Build a binary distribution ('wheel') from the given directory",
  },
  {
    name: "--no-build-logs",
    description: "Hide logs from the build backend",
  },
  {
    name: "--force-pep517",
    description:
      "Always build through PEP 517, don't use the fast path for the uv build backend",
  },
  {
    name: "-b",
    description:
      "Constrain build dependencies using the given requirements files when building distributions",
    args: {
      name: "BUILD_CONSTRAINTS",
    },
  },
  {
    name: "--require-hashes",
    description: "Require a matching hash for each requirement",
  },
  {
    name: "--no-verify-hashes",
    description: "Disable validation of hashes in the requirements file",
  },
];

// publish
const publishOptions: Fig.Option[] = [
  {
    name: "--publish-url",
    description: "The URL of the upload endpoint (not the index URL)",
    args: {
      name: "PUBLISH_URL",
    },
  },
  {
    name: "-u",
    description: "The username for the upload",
    args: {
      name: "USERNAME",
    },
  },
  {
    name: "-p",
    description: "The password for the upload",
    args: {
      name: "PASSWORD",
    },
  },
  {
    name: "-t",
    description: "The token for the upload",
    args: {
      name: "TOKEN",
    },
  },
  {
    name: "--trusted-publishing",
    description: "Configure using trusted publishing through GitHub Actions",
    args: {
      name: "TRUSTED_PUBLISHING",
      suggestions: ["automatic", "always", "never"],
    },
  },
  {
    name: "--keyring-provider",
    description:
      "Attempt to use `keyring` for authentication for remote requirements files",
    args: {
      name: "KEYRING_PROVIDER",
      suggestions: ["disabled", "subprocess"],
    },
  },
  {
    name: "--check-url",
    description:
      "Check an index URL for existing files to skip duplicate uploads",
    args: {
      name: "CHECK_URL",
    },
  },
];

// cache
const cacheSubcommands: Fig.Subcommand[] = [
  {
    name: "clean",
    description: "Clear the cache",
    args: {
      name: "PACKAGE",
      description: "The package to remove from the cache",
      isVariadic: true,
    },
  },
  {
    name: "prune",
    description: "Prune all unreachable objects from the cache",
  },
  {
    name: "dir",
    description: "Show the cache directory",
  },
];

// self
const selfSubcommands: Fig.Subcommand[] = [
  {
    name: "update",
    description: "Update uv",
    args: {
      name: "TARGET_VERSION",
      description:
        "Update to the specified version. If not provided, uv will update to the latest version",
    },
    options: [
      {
        name: "--token",
        description:
          "A GitHub token for authentication. A token is not required but can be used to reduce the chance of encountering rate limits [env:UV_GITHUB_TOKEN=]",
      },
    ],
  },
];

const subcommands: Fig.Subcommand[] = [
  {
    name: "run",
    description: "Run a command or script",
    options: runOptions,
    args: {
      name: "command",
      generators: commandGenerator,
    },
  },
  {
    name: "init",
    description: "Create a new project",
    options: [...initOptions, ...initCacheOptions],
    args: {
      name: "Path",
      template: "filepaths",
      description: "The path to use for the project/script",
      default: ".",
    },
  },
  {
    name: "add",
    description: "Add dependencies to the project",
    args: {
      name: "packages",
      description: "Packages to add",
      isVariadic: true,
    },
    options: [
      ...addOptions,
      ...indexOptions,
      ...resolverOptions,
      ...installerOptions,
      ...buildOptions,
      ...cacheOptions,
    ],
  },
  {
    name: "remove",
    description: "Remove dependencies from the project",
    args: {
      name: "dependencies",
      description: "Dependencies to remove",
      generators: dependenciesGenerator,
      isVariadic: true,
    },
    options: [
      ...removeOptions,
      ...indexOptions,
      ...resolverOptions,
      ...installerOptions,
      ...buildOptions,
      ...cacheOptions,
    ],
  },
  {
    name: "sync",
    description: "Update the project's environment",
    options: [
      ...syncOptions,
      ...indexOptions,
      ...resolverOptions,
      ...installerOptions,
      ...buildOptions,
      ...cacheOptions,
    ],
  },
  {
    name: "lock",
    description: "Update the project's lockfile",
    options: [
      ...lockOptions,
      ...indexOptions,
      ...resolverOptions,
      ...buildOptions,
      ...lockInstallerOptions,
      ...cacheOptions,
    ],
  },
  {
    name: "export",
    description: "Export the project's lockfile to an alternate format",
    options: [
      ...exportOptions,
      ...indexOptions,
      ...resolverOptions,
      ...buildOptions,
    ],
  },
  {
    name: "tree",
    description: "Display the project's dependency tree",
    options: [
      ...treeOptions,
      ...indexOptions,
      ...resolverOptions,
      ...installerOptions.filter((option) => option.name === "--link-mode"),
      ...pythonOptions,
      ...cacheOptions,
      ...cacheOptions.filter(
        (option) =>
          option.name === "--cache-dir" || option.name === "--no-cache"
      ),
    ],
  },
  {
    name: "tool",
    description: "Run and install commands provided by Python packages",
    subcommands: toolSubcommands,
    options: [
      ...pythonOptions.filter(
        (option) =>
          option.name === "--no-python-downloads" ||
          option.name === "--python-preference"
      ),
      ...cacheOptions.filter(
        (option) =>
          option.name === "--cache-dir" || option.name === "--no-cache"
      ),
    ],
  },
  {
    name: "python",
    description: "Manage Python versions and installations",
    subcommands: pythonSubcommands,
    options: [
      ...cacheOptions.filter(
        (option) =>
          option.name === "--cache-dir" || option.name === "--no-cache"
      ),
      ...pythonOptions.filter(
        (option) =>
          option.name === "--python-preference" ||
          option.name === "--no-python-downloads"
      ),
    ],
  },
  {
    name: "pip",
    description: "Manage Python packages with a pip-compatible interface",
    subcommands: pipSubcommands,
    options: [
      ...cacheOptions.filter(
        (option) =>
          option.name === "--cache-dir" || option.name === "--no-cache"
      ),
      ...pythonOptions.filter(
        (option) =>
          option.name === "--python-preference" ||
          option.name === "--no-python-downloads"
      ),
    ],
  },
  {
    name: "venv",
    description: "Create a virtual environment",
    options: [
      ...pythonOptions,
      ...venvOptions,
      ...indexOptions.filter(
        (option) =>
          option.name !== "--index-strategy" &&
          option.name !== "--keyring-provider"
      ),
      ...cacheOptions.filter(
        (option) =>
          option.name === "--cache-dir" || option.name === "--no-cache"
      ),
    ],
  },
  {
    name: "build",
    description: "Build Python packages into source distributions and wheels",
    args: {
      name: "SOURCE",
      description:
        "The directory from which distributions should be built, or a source distribution archive to build into a wheel",
    },
    options: [
      ...buildCommandOptions,
      ...pythonOptions,
      ...indexOptions,
      ...resolverOptions,
      ...buildOptions,
      ...installerOptions.filter((option) => option.name === "--link-mode"),
      ...cacheOptions,
    ],
  },
  {
    name: "publish",
    description: "Upload distributions to an index",
    args: {
      name: "FILES",
      description: "Paths to the files to upload, [default: dist/*]",
      isVariadic: true,
    },
    options: [
      ...publishOptions,
      ...cacheOptions.filter(
        (option) =>
          option.name === "--cache-dir" || option.name === "--no-cache"
      ),
      ...pythonOptions.filter(
        (option) =>
          option.name === "--python-preference" ||
          option.name === "--no-python-downloads"
      ),
    ],
  },
  {
    name: "cache",
    description: "Manage uv's cache",
    subcommands: cacheSubcommands,
    options: [
      ...cacheOptions.filter(
        (option) =>
          option.name === "--cache-dir" || option.name === "--no-cache"
      ),
      ...pythonOptions.filter(
        (option) =>
          option.name === "--python-preference" ||
          option.name === "--no-python-downloads"
      ),
    ],
  },
  {
    name: "self",
    description: "Manage the uv executable",
    subcommands: selfSubcommands,
    options: [
      ...cacheOptions.filter(
        (option) =>
          option.name === "--cache-dir" || option.name === "--no-cache"
      ),
      ...pythonOptions.filter(
        (option) =>
          option.name === "--python-preference" ||
          option.name === "--no-python-downloads"
      ),
    ],
  },
  {
    name: "version",
    description: "Display uv's version",
    options: [
      {
        name: "--output-format",
        description: "The output format to use",
        args: {
          name: "OUTPUT_FORMAT",
          suggestions: ["text", "json"],
        },
      },
      ...cacheOptions.filter(
        (option) =>
          option.name === "--cache-dir" || option.name === "--no-cache"
      ),
      ...pythonOptions.filter(
        (option) =>
          option.name === "--python-preference" ||
          option.name === "--no-python-downloads"
      ),
    ],
  },
  {
    name: "help",
    description: "Display documentation for a command",
    options: [
      {
        name: "--no-pager",
        description: "Disable pager when printing help",
      },
    ],
  },
];

const globalOptions: Fig.Option[] = [
  {
    name: ["-q", "--quiet"],
    description: "Do not print any output",
    isPersistent: true,
  },
  {
    name: ["-v", "--verbose"],
    description: "Use verbose output",
    isPersistent: true,
  },
  {
    name: "--color",
    description: "Control colors in output",
    args: {
      name: "COLOR_CHOICE",
      suggestions: ["auto", "always", "never"],
    },
    isPersistent: true,
  },
  {
    name: "--native-tls",
    description:
      "Whether to load TLS certificates from the platform's native certificate store",
    args: {
      name: "BOOL",
    },
    isPersistent: true,
  },
  {
    name: "--offline",
    description: "Disable network access",
    isPersistent: true,
  },
  {
    name: "--allow-insecure-host",
    description: "Allow insecure connections to a host",
    args: {
      name: "ALLOW_INSECURE_HOST",
    },
    isPersistent: true,
  },
  {
    name: "--no-progress",
    description: "Hide all progress outputs",
    isPersistent: true,
  },
  {
    name: "--directory",
    description: "Change to the given directory prior to running the command",
    args: {
      name: "DIRECTORY",
    },
    isPersistent: true,
  },
  {
    name: "--project",
    description: "Run the command within the given project directory",
    args: {
      name: "PROJECT",
    },
    isPersistent: true,
  },
  {
    name: "--config-file",
    description: "The path to a `uv.toml` file to use for configuration",
    args: {
      name: "CONFIG_FILE",
    },
    isPersistent: true,
  },
  {
    name: "--no-config",
    description:
      "Avoid discovering configuration files (`pyproject.toml`, `uv.toml`)",
    isPersistent: true,
  },
  {
    name: ["-h", "--help"],
    description: "Display the concise help for this command",
    isPersistent: true,
  },
  {
    name: ["-V", "--version"],
    description: "Display the uv version",
    isPersistent: true,
  },
];

const completionSpec: Fig.Spec = {
  name: "uv",
  description: "An extremely fast Python package manager",
  subcommands,
  options: [...globalOptions],
};
export default completionSpec;
