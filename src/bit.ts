const completionSpec: Fig.Spec = {
  name: "bit",
  description: "Bit documentation: https://bit.dev/docs",
  subcommands: [
    // Start a working area
    // { name: "init", description: "Create or reinitialize an empty workspace" },
    {
      name: "init",
      description: "Create or reinitialize an empty workspace",
      args: { description: "Path" },
      options: [
        {
          name: ["--bare", "-b"],
          args: { description: "Initialize an empty bit bare scope" },
        },
        {
          name: ["--shared", "-s"],
          args: { description: "Add group write permissions to a scope" },
        },
        {
          name: "--standalone",
          description: "Do not nest component store within .git",
        },
        {
          name: ["--reset", "-r"],
          description: "Write missing or damaged Bit files",
        },
        {
          name: "--reset-new",
          description: "Reset .bitmap file as if components were newly added",
        },
        {
          name: "--reset-lane-new",
          description: "Reset only components belonging to lanes",
        },
        {
          name: "--reset-hard",
          description: "Delete all Bit files and directories",
        },
        { name: "--reset-scope", description: "Removes local scope" },
        {
          name: ["--default-directory", "-d"],
          args: { description: "Set the default directory pattern" },
        },
        {
          name: "--default-scope",
          args: { description: "Set the default scope for components" },
        },
        {
          name: ["--package-manager", "-p"],
          args: { description: "Set the package manager to be used" },
        },
        {
          name: "--force",
          description:
            "Force workspace initialization without clearing local objects",
        },
        {
          name: "--harmony",
          description: "DEPRECATED: Harmony is the default now",
        },
        {
          name: ["--interactive", "-I"],
          description: "Start an interactive process",
        },
      ],
    },
    // { name: "new", description: "Create a new workspace from a template" },
    {
      name: "new",
      description: "Create a new workspace from a template",
      args: [
        { description: "The name of the workspace template" },
        {
          description: "The name for the new workspace and workspace directory",
        },
      ],
      options: [
        {
          name: ["--aspect", "-a"],
          description: "ID of the aspect that registered the template",
        },
        {
          name: ["--template", "-t"],
          description: "Env-ID of the template's owner. Alias for --env",
        },
        { name: "--env", description: "Env-ID of the template. Alias for -t" },
        {
          name: ["--default-scope", "-d"],
          description:
            "Set defaultScope in the new workspace's workspace.jsonc",
        },
        {
          name: "--skip-git",
          description: "Skip generation of Git repository in the new workspace",
        },
        {
          name: "--empty",
          description: "Skip template's default component creation",
        },
        {
          name: "--load-from",
          description: "Local path to the workspace containing the template",
        },
      ],
    },

    // Workspace commands
    // { name: "config", description: "Global config management" },
    {
      name: "config",
      description: "Global config management",
      subcommands: [
        {
          name: "set",
          description: "Set a global configuration",
          args: [
            { description: "Configuration key" },
            { description: "Configuration value" },
          ],
        },
        {
          name: "del",
          description: "Delete given key from global configuration",
          args: { description: "Configuration key" },
        },
        {
          name: "get",
          description: "Get a value from global configuration",
          args: { description: "Configuration key" },
        },
        {
          name: "list",
          description: "List all configuration(s)",
        },
      ],
    },
    // { name: "scope-config", description: "Scope config management" },
    {
      name: "scope-config",
      description: "Scope config management\n\nbit scope-config",
      subcommands: [
        {
          name: "set",
          description:
            "Set a scope configuration.\n\nUsage: scope-config set <key> <val>",
          args: [
            { description: "Configuration key to set" },
            { description: "Value for the configuration key" },
          ],
        },
        {
          name: "del",
          description:
            "Delete given key from global configuration.\n\nUsage: scope-config del <key>",
          args: { description: "Configuration key to delete" },
        },
        {
          name: "get",
          description:
            "Get a scope configuration.\n\nUsage: scope-config get <key>",
          args: { description: "Configuration key to retrieve" },
        },
        {
          name: "list",
          description:
            "List all scope configuration(s).\n\nUsage: scope-config list",
        },
      ],
    },
    // { name: "login", description: "Log in to Bit cloud" },
    {
      name: "login",
      description: "Log in to Bit cloud",
      options: [
        {
          name: "--cloud-domain",
          description: "Login cloud domain (default bit.cloud)",
        },
        {
          name: ["--port", "-p"],
          description: "Port number to open for localhost server",
        },
        {
          name: "--suppress-browser-launch",
          description: "Do not open a browser for authentication",
        },
        {
          name: "--npmrc-path",
          description: "Path to npmrc file to configure bit.cloud registry",
        },
        {
          name: "--skip-registry-config",
          description: "Don't configure bit.cloud registry",
        },
        {
          name: "--machine-name",
          description: "Specify machine-name to pair with the token",
        },
      ],
    },
    { name: "logout", description: "Log the CLI out of Bit" },
    // { name: "doctor", description: "Diagnose a bit workspace" },
    {
      name: "doctor",
      description: "Diagnose a bit workspace",
      args: { description: "Diagnosis name" },
      options: [
        {
          name: ["--json", "-j"],
          description: "Return diagnoses in json format",
        },
        { name: "--list", description: "List all available diagnoses" },
        {
          name: ["--save", "-s"],
          args: {
            name: "filePath",
            description: "Path to save diagnoses to a file",
          },
        },
        {
          name: ["--archive", "-a"],
          args: {
            name: "filePath",
            description:
              "Path to archive the workspace including diagnosis info",
          },
        },
      ],
    },
    // { name: "completion", description: "Enable bash/zsh-completion shortcuts for commands and options" },
    {
      name: "completion",
      description:
        "Enable bash/zsh-completion shortcuts for commands and options",
    },
    // { name: "cli", description: "EXPERIMENTAL. Enters bit cli program and generates commands list" },
    {
      name: "cli",
      description:
        "EXPERIMENTAL: Enters bit cli program and generates commands list",
      subcommands: [
        {
          name: "generate",
          description: "Generate an .md file with all commands details",
          options: [
            {
              name: "--metadata",
              description:
                "Metadata/front-matter to place at the top of the .md file",
            },
            {
              name: "--docs",
              description: "Generate the cli-reference.docs.mdx file",
            },
            {
              name: ["--json", "-j"],
              description: "Output the commands info as JSON",
            },
          ],
        },
      ],
    },
    // { name: "help", description: "Shows help" },
    {
      name: ["help", "$0"],
      description: "Shows help",
      options: [{ name: "--internal", description: "Show internal commands" }],
    },
    // { name: "clear-cache", description: "Clears Bit's cache from current working machine" },
    {
      name: ["clear-cache", "cc"],
      description: "Clears Bit's cache from current working machine",
      options: [
        {
          name: ["--remote", "-r"],
          description: "Clear memory cache from a remote scope",
        },
      ],
    },

    // Collaborate on components
    // { name: "remote", description: "Manage set of tracked bit scope(s)" },
    {
      name: "remote",
      description: "Manage set of tracked bit scope(s)",
      subcommands: [
        {
          name: "add",
          description: "Add a bare-scope as a remote, usage: remote add <url>",
          args: { description: "URL of the remote scope" },
          options: [
            {
              name: ["--global", "-g"],
              description: "Configure a remote bit scope",
            },
          ],
        },
        {
          name: "del",
          description: "Remove a tracked bit remote: usage: remote del <name>",
          args: { description: "Name of the remote to remove" },
          options: [
            {
              name: ["--global", "-g"],
              description: "Remove a globally configured remote scope",
            },
          ],
        },
      ],
    },
    // { name: "remove", description: "Remove component(s) from the workspace, or a remote scope" },
    {
      name: ["remove", "rm"],
      description: "Remove component(s) from the local workspace",
      args: { description: "Component name, ID, or pattern" },
      options: [
        {
          name: ["--track", "-t"],
          description: "Keep tracking component in .bitmap",
        },
        { name: "--keep-files", description: "Keep component files" },
        {
          name: ["--force", "-f"],
          description: "Removes the component even if used as a dependency",
        },
        { name: ["--silent", "-s"], description: "Skip confirmation" },
      ],
    },
    // { name: "import", description: "Import components from their remote scopes to the local workspace" },
    {
      name: "import",
      description:
        "Import components from their remote scopes to the local workspace",
      args: { description: "Component IDs or component patterns" },
      options: [
        {
          name: ["--path", "-p"],
          args: { description: "Import components into a specific directory" },
        },
        {
          name: "--objects",
          description: "Import components objects without checkout",
        },
        { name: ["--override", "-O"], description: "Override local changes" },
        {
          name: ["--verbose", "-v"],
          description: "Show verbose output for inspection",
        },
        { name: ["--json", "-j"], description: "Return the output as JSON" },
        {
          name: "--skip-dependency-installation",
          description: "Do not auto-install dependencies",
        },
        {
          name: "--merge",
          args: { description: "Merge local changes with imported version" },
        },
        {
          name: "--dependencies",
          description: "Import all dependencies of imported components",
        },
        {
          name: "--dependents",
          description:
            "Import components found while traversing from imported components",
        },
        {
          name: "--save-in-lane",
          description: "Save in the lane when checked out to a lane",
        },
        {
          name: "--all-history",
          description: "Fetch all history versions, always",
        },
        {
          name: "--fetch-deps",
          description:
            "Fetch dependencies objects without adding to the workspace",
        },
        {
          name: "--track-only",
          description: "Create bitmap entries without writing component files",
        },
        {
          name: "--include-deprecated",
          description:
            "Include deprecated components when importing with patterns",
        },
      ],
    },
    { name: "pack", description: "Create tar for npm publish" },
    // { name: "deprecate", description: "Deprecate a component" },
    {
      name: ["deprecate", "d"],
      description: "Deprecate a component",
      args: { description: "Component name or component id" },
      options: [
        {
          name: "--new-id",
          description:
            "If replaced by another component, enter the new component id",
        },
      ],
    },
    // { name: "undeprecate", description: "Undeprecate a deprecated component (local/remote)" },
    {
      name: "undeprecate",
      description:
        "Undeprecate a deprecated component (local/remote).\n\nbit undeprecate <id>",
    },
    // { name: "rename", description: "EXPERIMENTAL. Rename component. If tagged/exported, create a new component and deprecate the original component" },
    {
      name: "rename",
      description: "Rename a component",
      args: [
        { description: "The current component name" },
        { description: "The new component name" },
      ],
      options: [
        {
          name: ["--scope", "-s"],
          description: "Define the scope for the newly created component",
        },
        {
          name: ["--path", "-p"],
          description:
            "Relative path in the workspace to place new component in",
        },
        {
          name: ["--refactor", "-r"],
          description:
            "Update the import/require statements in all dependent components",
        },
        {
          name: "--preserve",
          description:
            "Avoid renaming files and variables according to the new component name",
        },
        {
          name: "--ast",
          description:
            "EXPERIMENTAL. Use AST to transform files instead of regex",
        },
      ],
    },
    // { name: "fork", description: "EXPERIMENTAL. Create a new component out of an existing one (copies source files and config)" },
    {
      name: "fork",
      description:
        "Create a new component forked from an existing one (copies source files and configs)",
      args: [
        { description: "Component id of the source component" },
        { description: "Name for the new component" },
      ],
      options: [
        {
          name: ["--scope", "-s"],
          args: { description: "Default scope for the new component" },
        },
        {
          name: ["--path", "-p"],
          args: {
            description: "Relative path in the workspace for the new component",
          },
        },
        {
          name: ["--refactor", "-r"],
          description:
            "Update the import/require statements in all dependent components",
        },
        {
          name: "--skip-dependency-installation",
          description: "Do not install packages of the imported components",
        },
        {
          name: "--env",
          args: { description: "Set the environment for the new component" },
        },
        {
          name: "--skip-config",
          description: "Do not copy the config to the new component",
        },
        {
          name: "--preserve",
          description:
            "Avoid refactoring file and variable/class names according to the new component name",
        },
        {
          name: "--no-link",
          description: "Avoid saving a reference to the original component",
        },
        {
          name: "--ast",
          description: "Use ast to transform files instead of regex",
        },
      ],
    },
    // { name: "export", description: "Export components from the workspace to remote scopes" },
    {
      name: ["export", "e"],
      description: "Export components from the workspace to remote scopes",
      args: { description: "Component patterns" },
      options: [
        {
          name: ["--eject", "-e"],
          description:
            "Remove component from the workspace and install it as a regular npm package",
        },
        {
          name: "--all",
          description: "Export all components, including non-staged",
        },
        {
          name: "--all-versions",
          description: "Export not only staged versions but all of them",
        },
        {
          name: "--origin-directly",
          description:
            "Avoid export to the central hub, export directly to the original scopes",
        },
        {
          name: "--resume",
          args: {
            name: "string",
            description: "Resume export using an export-id",
          },
        },
        {
          name: "--ignore-missing-artifacts",
          description: "Don't throw an error when artifact files are missing",
        },
        {
          name: "--fork-lane-new-scope",
          description:
            "Allow exporting a forked lane into a different scope than the original scope",
        },
        { name: ["--json", "-j"], description: "Show output in json format" },
      ],
    },
    // View components
    // { name: "dependents", description: "EXPERIMENTAL. Show dependents of the given component" },
    {
      name: "dependents",
      description: "Show dependents of the given component",
      args: { description: "Component name" },
    },
    // { name: "show", description: "Display the component's essential information" },
    {
      name: "show",
      description:
        "Display the component's essential information\n\nbit show <component-name>",
      args: { description: "Component name or component ID" },
      options: [
        {
          name: ["--json", "-j"],
          description: "Return the component data in JSON format",
        },
        { name: "--legacy", description: "Use the legacy bit show" },
        {
          name: ["--remote", "-r"],
          description: "Show data for a remote component",
        },
        {
          name: ["--compare", "-c"],
          description:
            "Legacy-only. Compare current file system component to its latest tagged version",
        },
      ],
    },
    // { name: "dependencies", description: "Manage dependencies" },
    {
      name: ["deps", "dependencies"],
      description: "Manage dependencies",
      subcommands: [
        {
          name: "get",
          description:
            "Show direct and indirect dependencies of the given component",
          args: { description: "Component name or component id" },
          options: [
            {
              name: ["--tree", "-t"],
              description:
                "EXPERIMENTAL: Render dependencies as a tree, similar to 'npm ls'",
            },
          ],
        },
        {
          name: "remove",
          description: "Remove a dependency to component(s)",
          args: [
            {
              description: "Component name, component id, or component pattern",
            },
            { description: "Package name with or without a version" },
          ],
          options: [
            {
              name: ["--dev", "-d"],
              description: "Remove from devDependencies",
            },
            {
              name: ["--peer", "-p"],
              description: "Remove from peerDependencies",
            },
          ],
        },
        {
          name: "unset",
          description:
            "Unset a dependency to component(s) that was previously set by 'bit deps set'",
          args: [
            {
              description: "Component name, component id, or component pattern",
            },
            { description: "Package name with or without a version" },
          ],
          options: [
            {
              name: ["--dev", "-d"],
              description: "Unset from devDependencies",
            },
            {
              name: ["--peer", "-p"],
              description: "Unset from peerDependencies",
            },
          ],
        },
        {
          name: "debug",
          description:
            "Show the immediate dependencies and how their versions were determined",
          args: { description: "Component name or component id" },
        },
        {
          name: "set",
          description: "Set a dependency to component(s)",
          args: [
            {
              description: "Component name, component id, or component pattern",
            },
            { description: "Package name with or without a version" },
          ],
          options: [
            {
              name: ["--dev", "-d"],
              description: "Add to the devDependencies",
            },
            {
              name: ["--peer", "-p"],
              description: "Add to the peerDependencies",
            },
          ],
        },
        {
          name: "reset",
          description:
            "Reset dependencies to the default values (revert any previously 'bit deps set')",
          args: {
            description: "Component name, component id, or component pattern",
          },
        },
        {
          name: "eject",
          description:
            "Write dependencies that were previously set via 'bit deps set' into .bitmap",
          args: {
            description: "Component name, component id, or component pattern",
          },
        },
        {
          name: "blame",
          description:
            "EXPERIMENTAL: Find out which snap/tag changed a dependency version",
          args: [
            { description: "Component name" },
            { description: "Dependency name, package-name or component-id" },
          ],
        },
        {
          name: "usage",
          description:
            "EXPERIMENTAL: Find components that use the specified dependency",
          args: {
            description:
              "Package name, component-id or package-name, optionally with version",
          },
        },
      ],
    },
    // { name: "log", description: "Show components(s) version history" },
    {
      name: "log",
      description: "Show components(s) version history",
      args: { description: "Component-id or component-name to show logs for" },
      options: [
        {
          name: ["--remote", "-r"],
          description: "Show log of a remote component",
        },
        { name: "--parents", description: "Show parents and lanes data" },
        {
          name: ["--one-line", "-o"],
          description: "Show each log entry in one line",
        },
        { name: ["--json", "-j"], description: "JSON format" },
      ],
    },

    // Develop components
    //{ name: "add", description: "Add any subset of files to be tracked as a component(s)" },
    {
      name: "add",
      description: "Add any subset of files to be tracked as a component(s)",
      options: [
        { name: ["--id", "-i"], description: "Manually set component id" },
        { name: ["--main", "-m"], description: "Define component entry point" },
        {
          name: ["--namespace", "-n"],
          description: "Organize component in a namespace",
        },
        {
          name: ["--override", "-o"],
          description:
            "Override existing component if exists (default = false)",
        },
        {
          name: ["--scope", "-s"],
          description:
            "Sets the component's scope. If not entered, the default-scope from workspace.jsonc will be used",
        },
        {
          name: ["--env", "-e"],
          description:
            "Set the component's environment. (overrides the env from variants if exists)",
        },
        { name: ["--json", "-j"], description: "Output as json format" },
      ],
    },
    // { name: "move", description: "Move a component to a different filesystem path" },
    {
      name: ["move", "mv"],
      description: "Move a component to a different filesystem path",
      args: [
        { description: "The component's current directory" },
        { description: "The new directory to move the component's files to" },
      ],
    },
    // { name: "diff", description: "Show the diff between the components' source files and config" },
    {
      name: "diff",
      description:
        "Show the diff between the components' current source files and config, and their latest snapshot or tag",
      args: {
        description:
          "Values for comparison, component IDs, versions or patterns",
      },
      options: [
        {
          name: ["--verbose", "-v"],
          description: "Show a more verbose output where possible",
        },
        {
          name: ["--table", "-t"],
          description:
            "Show tables instead of plain text for dependencies diff",
        },
      ],
    },
    // { name: "envs", description: "List all components maintained by the workspace and their corresponding envs" },
    {
      name: ["envs", "env"],
      description:
        "List all components maintained by the workspace and their corresponding envs",
      subcommands: [
        {
          name: "list",
          description: "List all envs currently used in the workspace",
        },
        {
          name: "get",
          description: "Show config information from a component's env",
          args: {
            description:
              "Component name or component id of the component whose env you'd like to inspect",
          },
          options: [
            {
              name: "--services",
              args: {
                name: "string",
                description:
                  "Show information about the specific services only",
              },
            },
          ],
        },
        {
          name: "set",
          description:
            "Assigns one or more components a development environment (env)",
          args: [
            { description: "Component pattern" },
            { description: "The env's component id" },
          ],
        },
        {
          name: "unset",
          description: "Un-sets an env from components",
          args: { description: "Component pattern" },
        },
        {
          name: "replace",
          description:
            "Replace an existing env with another env for all components using the old env",
          args: [
            { description: "Current environment id" },
            { description: "New environment id" },
          ],
        },
        {
          name: "update",
          description:
            "Update a version of an env for all components using that env",
          args: [
            { description: "Environment id" },
            { description: "Component pattern" },
          ],
        },
      ],
    },
    // { name: "start", description: "Run the ui/development server" },
    {
      name: ["start", "c"],
      description:
        "Run the UI/development server\n\nbit start [component-pattern]",
      args: {
        description:
          'Component name, component ID, or component pattern. Use component pattern to select multiple components. Use comma to separate patterns and "!" to exclude. E.g. "ui/**, !ui/button". Wrap the pattern with quotes',
      },
      options: [
        { name: ["--dev", "-d"], description: "Start UI server in dev mode" },
        { name: ["--port", "-p"], description: "Port of the UI server" },
        {
          name: ["--rebuild", "-r"],
          description:
            "Rebuild the UI (useful e.g. when updating the workspace UI - can use the dev flag for HMR in this case)",
        },
        { name: "--skip-ui-build", description: "Skip building UI" },
        {
          name: "--verbose",
          description:
            "Show verbose output for inspection and prints stack trace",
        },
        {
          name: ["--no-browser", "-n"],
          description: "Do not automatically open browser when ready",
        },
        {
          name: "--skip-compilation",
          description:
            "Skip the auto-compilation before starting the web-server",
        },
        {
          name: "--ui-root-name",
          description:
            'Name of the UI root to use, e.g. "teambit.scope/scope" or "teambit.workspace/workspace"',
        },
      ],
    },
    { name: "ui-build", description: "Build production assets for deployment" },
    // { name: "checkout", description: "Switch between component versions or remove local changes" },
    {
      name: ["checkout", "U"],
      description: "Switch between component versions or remove local changes",
      args: [
        {
          description:
            "Permitted values: [head, latest, reset, specific-version]",
        },
        { description: "Component name, component id, or component pattern" },
      ],
      options: [
        {
          name: "--interactive-merge",
          description:
            "Display options to resolve conflicts when found during merge",
        },
        { name: "--ours", description: "DEPRECATED" },
        { name: "--theirs", description: "DEPRECATED" },
        { name: "--manual", description: "DEPRECATED" },
        {
          name: "--auto-merge-resolve",
          description:
            "Resolve merge conflicts according to the provided strategy: [ours, theirs, manual]",
        },
        {
          name: ["--reset", "-r"],
          description: "Revert changes that were not snapped/tagged",
        },
        { name: ["--all", "-a"], description: "All components" },
        {
          name: "--workspace-only",
          description: "Only relevant for 'bit checkout head' when on a lane",
        },
        {
          name: ["--verbose", "-v"],
          description: "Verbose output for inspection",
        },
        {
          name: "--skip-dependency-installation",
          description:
            "Do not auto-install dependencies of the imported components",
        },
      ],
    },
    // { name: "install", description: "Installs workspace dependencies" },
    {
      name: ["install", "in"],
      description: "Installs workspace dependencies",
      args: { description: "A list of packages to install" },
      options: [
        {
          name: "--type",
          args: { description: "'runtime' (default) or 'peer'" },
        },
        {
          name: ["--update", "-u"],
          description: "Update all dependencies to the latest version",
        },
        {
          name: "--update-existing",
          description:
            "DEPRECATED: Update existing dependencies version and types",
        },
        {
          name: "--save-prefix",
          args: { description: "Set the prefix to use when adding dependency" },
        },
        {
          name: "--skip-dedupe",
          description: "Do not dedupe dependencies on installation",
        },
        {
          name: "--skip-import",
          description: "Do not import bit objects post installation",
        },
        { name: "--skip-compile", description: "Do not compile components" },
        {
          name: "--add-missing-deps",
          description: "Install all missing dependencies",
        },
        {
          name: "--add-missing-peers",
          description: "Install all missing peer dependencies",
        },
        {
          name: "--recurring-install",
          description: "Automatically run install again if there are old envs",
        },
        {
          name: "--no-optional",
          description: "Do not install optional dependencies (pnpm only)",
        },
      ],
    },
    // { name: "uninstall", description: "Uninstall dependencies" },
    {
      name: ["uninstall", "un"],
      description: "Uninstall dependencies.\n\nbit uninstall [packages...]",
    },
    // { name: "update", description: "Update dependencies" },
    {
      name: ["update", "up"],
      description: "Update dependencies.\n\nbit update [package-patterns...]",
      args: {
        description:
          'A string list of package names, or patterns (separated by space), e.g. "@teambit/ @my-org/ui/". The patterns should be in glob format. By default, all packages are selected',
      },
      options: [
        {
          name: ["--yes", "-y"],
          description:
            "Automatically update all outdated versions for packages specified in pattern (all if no pattern supplied) - use carefully as could result in breaking updates for dependencies",
        },
        {
          name: "--patch",
          description:
            "Update to the latest patch version. Semver rules are ignored",
        },
        {
          name: "--minor",
          description:
            "Update to the latest minor version. Semver rules are ignored",
        },
        {
          name: "--major",
          description:
            "Update to the latest major version. Semver rules are ignored",
        },
      ],
    },
    // { name: "link", description: "Create links in the node_modules directory, to core aspects and to components in the workspace" },
    {
      name: "link",
      description:
        "Create links in the node_modules directory, to core aspects and to components in the workspace",
      args: {
        name: "component-names",
        description: "Names or IDs of the components to link",
      },
      options: [
        {
          name: ["--json", "-j"],
          description: "Return the output as JSON",
        },
        {
          name: "--verbose",
          description: "Verbose output",
        },
        {
          name: ["--rewire", "-r"],
          description:
            'Replace relative paths with module paths in code (e.g. "../foo" => "@bit/foo")',
        },
        {
          name: "--target",
          description:
            "Link to an external directory (similar to npm-link) so other projects could use these components",
        },
        {
          name: "--skip-fetching-objects",
          description: "Skip fetch missing objects from remotes before linking",
        },
      ],
    },
    {
      name: "component-issues",
      description: "List available component-issues",
    },
    // { name: "tag", description: "Create an immutable and exportable component snapshot, tagged with a release version" },
    {
      name: ["tag", "t"],
      description:
        'Create an immutable and exportable component snapshot, tagged with a release version.\nIf no patterns are provided, it will tag all new and modified components.\nIf patterns are entered, you can specify a version per pattern using "@" sign, e.g. bit tag foo@1.0.0 bar@minor baz@major\n\nbit tag [component-patterns...]',
      args: {
        description:
          'Component name, component id, or component pattern. Use component pattern to select multiple components. Use comma to separate patterns and "!" to exclude. e.g. "ui/**, !ui/button" wrap the pattern with quotes. By default, all new and modified are tagged',
      },
      options: [
        {
          name: ["--message", "-m"],
          description: "A log message describing the latest changes",
        },
        {
          name: ["--unmodified", "-u"],
          description:
            "Include unmodified components (by default, only new and modified components are tagged)",
        },
        {
          name: "--editor",
          description:
            "Open an editor to write a tag message for each component. Optionally, specify the editor-name (defaults to vim)",
        },
        { name: ["--ver", "-v"], description: "Tag with the given version" },
        {
          name: ["--increment", "-l"],
          description:
            "Options are: [major, premajor, minor, preminor, patch, prepatch, prerelease], default to patch",
        },
        {
          name: "--prerelease-id",
          description:
            'Prerelease identifier (e.g. "dev" to get "1.0.0-dev.1")',
        },
        {
          name: ["--patch", "-p"],
          description: 'Syntactic sugar for "--increment patch"',
        },
        {
          name: "--minor",
          description: 'Syntactic sugar for "--increment minor"',
        },
        {
          name: "--major",
          description: 'Syntactic sugar for "--increment major"',
        },
        {
          name: "--pre-release",
          description:
            'Syntactic sugar for "--increment prerelease" and --prerelease-id <identifier>',
        },
        {
          name: "--snapped",
          description: "Tag only components whose head is a snap (not a tag)",
        },
        {
          name: "--unmerged",
          description:
            "Complete a merge process by tagging the unmerged components",
        },
        {
          name: "--skip-tests",
          description: "Skip running component tests during tag process",
        },
        {
          name: "--skip-auto-tag",
          description: "Skip auto tagging dependents",
        },
        {
          name: "--soft",
          description:
            "Do not persist. Only keep note of the changes to be made",
        },
        {
          name: "--persist",
          description: "Persist the changes generated by --soft tag",
        },
        {
          name: "--disable-tag-pipeline",
          description:
            "Skip the tag pipeline to avoid publishing the components",
        },
        {
          name: "--ignore-build-errors",
          description: "Proceed to tag pipeline even when build pipeline fails",
        },
        {
          name: "--increment-by",
          description:
            "(default to 1) increment semver flag (patch/minor/major) by. e.g. incrementing patch by 2: 0.0.1 -> 0.0.3",
        },
        {
          name: ["--ignore-issues", "-i"],
          description:
            'Ignore component issues (shown in "bit status" as "issues found"), issues to ignore: [MissingPackagesDependenciesOnFs, MissingManuallyConfiguredPackages, MissingComponents, UntrackedDependencies, ResolveErrors, RelativeComponents, RelativeComponentsAuthored, ParseErrors, MissingDists, LegacyInsideHarmony, MissingDependenciesOnFs, ImportNonMainFiles, MultipleEnvs, MissingLinksFromNodeModulesToSrc, CircularDependencies, DuplicateComponentAndPackage, MergeConfigHasConflict, NonLoadedEnv, ExternalEnvWithoutVersion, RemovedDependencies] to ignore multiple issues, separate them by a comma and wrap with quotes. To ignore all issues, specify \'*\'',
        },
        {
          name: ["--ignore-newest-version", "-I"],
          description:
            "Allow tagging even when the component has newer versions e.g. for hotfixes (default = false)",
        },
        {
          name: "--fail-fast",
          description:
            "Stop pipeline execution on the first failed task (by default a task is skipped only when its dependency failed)",
        },
        {
          name: ["--build", "-b"],
          description:
            "Not needed for now. Run the pipeline build and complete the tag",
        },
        {
          name: ["--all", "-a"],
          description:
            "DEPRECATED (not needed anymore, it is the default now). Tag all new and modified components",
        },
        {
          name: ["--scope", "-s"],
          description:
            'DEPRECATED (use "--unmodified" instead). Tag all components of the local scope',
        },
        {
          name: "--force",
          description:
            'DEPRECATED (use "--skip-tests", "--ignore-build-errors" or "--unmodified" instead). Force-tag even if tests are failing and even when component has not changed',
        },
        {
          name: "--disable-deploy-pipeline",
          description: "DEPRECATED. Use --disable-tag-pipeline instead",
        },
      ],
    },

    // { name: "reset", description: "Revert tagged or snapped versions for component(s)" },
    {
      name: "reset",
      description: "Revert tagged or snapped versions for component(s)",
      args: { description: "Component name, ID, or pattern" },
      options: [
        {
          name: ["--all", "-a"],
          description: "Revert all unexported tags/snaps for all components",
        },
        { name: "--head", description: "Revert the head tag/snap only" },
        { name: "--soft", description: "Revert only soft-tags" },
        {
          name: ["--force", "-f"],
          description: "Revert the tag even if it's used as a dependency",
        },
      ],
    },

    // { name: "merge", description: "Merge changes of different component versions" },
    {
      name: "merge",
      description:
        "Merge changes of the remote head into local and creates snaps for merged components",
      args: { description: "IDs or patterns of components to merge" },
      options: [
        {
          name: "--ours",
          description:
            "DEPRECATED. In case of a conflict, keep the local modification",
        },
        {
          name: "--theirs",
          description:
            "DEPRECATED. In case of a conflict, override the local modification with the specified version",
        },
        {
          name: "--manual",
          description: "DEPRECATED. Use --auto-merge-resolve",
        },
        {
          name: "--auto-merge-resolve",
          description:
            "In case of a conflict, resolve according to the strategy: [ours, theirs, manual]",
        },
        {
          name: "--abort",
          description:
            "In case of an unresolved merge, revert to pre-merge state",
        },
        {
          name: "--resolve",
          description:
            "Mark an unresolved merge as resolved and create a new snap with the changes",
        },
        {
          name: "--no-snap",
          description:
            "Do not auto snap even if the merge completed without conflicts",
        },
        {
          name: "--build",
          description:
            "In case of snap during the merge, run the build-pipeline",
        },
        {
          name: "--verbose",
          description:
            "Show details of components that were not merged successfully",
        },
        {
          name: ["--skip-dependency-installation", "-x"],
          description:
            "Do not install new dependencies resulting from the merge",
        },
        {
          name: ["--message", "-m"],
          description: "Override the default message for the auto snap",
        },
      ],
    },
    // { name: "create", description: "Create a new component (source files and config) using a template" },
    {
      name: "create",
      description: "Create a new component using a template",
      args: [
        { description: "The template for generating the component" },
        { description: "A list of component names to generate" },
      ],
      options: [
        {
          name: ["--namespace", "-n"],
          description:
            "Sets the component's namespace and nested dirs inside the scope",
        },
        {
          name: ["--scope", "-s"],
          description: "Sets the component's scope-name",
        },
        { name: ["--aspect", "-a"], description: "Aspect-id of the template" },
        {
          name: "--template",
          description: "Env-id of the template, alias for --aspect",
        },
        { name: "--path", description: "Relative path in the workspace" },
        { name: "--env", description: "Set the component's environment" },
      ],
    },
    // { name: "templates", description: "List templates for 'bit create' and 'bit new'" },
    {
      name: "templates",
      description:
        'List available templates for "bit create" and "bit new"\n\nList components templates when inside bit-workspace (for bit-create), otherwise, list workspace templates (for bit-new).\n\nbit templates',
      options: [
        { name: ["--show-all", "-s"], description: "Show hidden templates" },
        {
          name: ["--aspect", "-a"],
          description: "Show templates provided by the aspect-id",
        },
      ],
    },
    // { name: "build", description: "Run set of tasks for build" },
    {
      name: "build",
      description:
        "Run set of tasks for build. By default, only new and modified components are built",
      args: {
        description:
          "Component name, component id, or component pattern. Use component pattern to select multiple components. Use comma to separate patterns and '!' to exclude",
      },
      options: [
        { name: ["--all", "-a"], description: "DEPRECATED. Use --unmodified" },
        {
          name: ["--unmodified", "-u"],
          description: "Include unmodified components",
        },
        { name: ["--dev", "-d"], description: "Run the pipeline in dev mode" },
        { name: "--install", description: "Install core aspects in capsules" },
        {
          name: "--reuse-capsules",
          description:
            "Avoid deleting the capsules root-dir before starting the build",
        },
        { name: "--tasks", description: "Build the specified task(s) only" },
        {
          name: "--cache-packages-on-capsule-root",
          description: "Set the package-manager cache on the capsule root",
        },
        {
          name: "--list-tasks",
          description:
            "List tasks of an env or a component-id for each one of the pipelines",
        },
        {
          name: "--skip-tests",
          description: "Skip running component tests during build process",
        },
        {
          name: "--fail-fast",
          description: "Stop pipeline execution on the first failed task",
        },
      ],
    },
    // { name: "artifacts", description: "EXPERIMENTAL. List and download components artifacts" },
    {
      name: "artifacts",
      description: "List and download component artifacts",
      args: {
        description:
          "Component name, component id, or component pattern. Use component pattern to select multiple components. Use comma to separate patterns and '!' to exclude. E.g. 'ui/**, !ui/button' wrap the pattern with quotes",
      },
      options: [
        {
          name: "--aspect",
          description:
            "Show/download only artifacts generated by this aspect-id",
        },
        {
          name: "--task",
          description: "Show/download only artifacts generated by this task-id",
        },
        {
          name: "--files",
          description:
            "Show/download only artifacts matching the given files or the glob pattern (wrap glob patterns in quotes)",
        },
        {
          name: "--out-dir",
          description: "Download the files to the specified dir",
        },
      ],
    },
    // { name: "refactor", description: "EXPERIMENTAL. Source code refactoring / codemod" },
    {
      name: "refactor",
      description: "Source code refactoring / codemod",
      subcommands: [
        {
          name: "dependency-name",
          description:
            "Replace the dependency's old package-name with a new one in the code, usage: refactor dependency-name <old-id> <new-id>",
          args: [
            { description: "Old ID or package name" },
            { description: "New ID or package name" },
          ],
        },
      ],
    },
    // { name: "status", description: "Present the current status of components in the workspace, and notifies when issues are detected" },
    {
      name: ["status", "s"],
      description:
        "Present the current status of components in the workspace, including indication of detected issues\n\nbit status",
      options: [
        {
          name: ["--json", "-j"],
          description: "Return a JSON version of the component",
        },
        {
          name: "--verbose",
          description:
            "Show extra data: full snap hashes for staged components, and divergence point for lanes",
        },
        {
          name: ["--lanes", "-l"],
          description:
            "When on a lane, show updates from main and updates from forked lanes",
        },
        {
          name: "--strict",
          description: "In case issues found, exit with code 1",
        },
      ],
    },
    // { name: "compile", description: "Compile components in the workspace" },
    {
      name: "compile",
      description: "Compile components in the workspace",
      args: { description: "A list of component names or component IDs" },
      options: [
        {
          name: ["--changed", "-c"],
          description: "Compile only new and modified components",
        },
        {
          name: ["--verbose", "-v"],
          description: "Show more data, such as, dist paths",
        },
        {
          name: ["--json", "-j"],
          description: "Return the compile results in json format",
        },
        {
          name: "--delete-dist-dir",
          description:
            "Delete existing dist folder before writing new compiled files",
        },
      ],
    },
    // { name: "test", description: "Test components in the workspace" },
    {
      name: ["test", "at"],
      description:
        "Test components in the workspace. By default only runs tests for new and modified components.\n\nbit test [component-pattern]",
      args: {
        description:
          'Component name, component id, or component pattern. Use component pattern to select multiple components. Use comma to separate patterns and "!" to exclude. e.g. "ui/**, !ui/button" wrap the pattern with quotes',
      },
      options: [
        {
          name: ["--watch", "-w"],
          description: "Start the tester in watch mode",
        },
        {
          name: ["--debug", "-d"],
          description: "Start the tester in debug mode",
        },
        {
          name: ["--all", "-a"],
          description: "Test all components, not only new and modified",
        },
        {
          name: "--junit",
          description:
            "Write tests results as JUnit XML format into the specified file path",
        },
        { name: "--coverage", description: "Show code coverage data" },
        {
          name: ["--env", "-e"],
          description: "Test only components assigned the given env",
        },
        {
          name: ["--scope", "-s"],
          description:
            'DEPRECATED. (use the pattern instead, e.g. "scopeName/**"). Name of the scope to test',
        },
      ],
    },
    // { name: "schema", description: "Shows the API schema of a certain component" },
    {
      name: "schema",
      description: "Shows the API schema of the specified component/s",
      args: { description: "Pattern for components to match" },
      options: [
        {
          name: ["--json", "-j"],
          description: "Return the component schema in json format",
        },
      ],
    },
    // { name: "check-types", description: "Check typescript types" },
    {
      name: "check-types",
      description: "Check typescript types",
      args: {
        description: "Component name, component id, or component pattern",
      },
      options: [
        {
          name: ["--all", "-a"],
          description:
            "Check-types for all components, not only modified and new",
        },
        {
          name: "--strict",
          description: "In case issues found, exit with code 1",
        },
      ],
    },
    { name: "aspect", description: "EXPERIMENTAL. Manage aspects" },
    // { name: "eject", description: "Replace components maintained in the workspace with their corresponding packages" },
    {
      name: ["eject", "E"],
      description:
        "Remove component from the workspace and install it instead as a regular npm package. By default the component files will be removed from the workspace",
      args: {
        description: "Component name, component id, or component pattern",
      },
      options: [
        {
          name: ["--force", "-f"],
          description:
            "Ignore local changes/versions, eject component/s even when they are staged or modified. Note: unexported tags/snaps will be lost",
        },
        {
          name: ["--json", "-j"],
          description: "Print the results in JSON format",
        },
        {
          name: "--keep-files",
          description: "Keep the component files in the workspace intact",
        },
      ],
    },
    // { name: "format", description: "Format components in the development workspace" },
    {
      name: "format",
      description: "Format components in the development workspace",
      options: [
        {
          name: "--changed",
          description: "Format only new and modified components",
        },
        {
          name: "--check",
          description:
            "Will output a message and a list of unformatted files, if any",
        },
        {
          name: ["--json", "-j"],
          description: "Return the format results in json format",
        },
      ],
    },
    // { name: "lint", description: "Lint components in the development workspace" },
    {
      name: "lint",
      description: "Lint components in the development workspace",
      args: { description: "Component names or component IDs to lint" },
      options: [
        {
          name: ["--changed", "-c"],
          description: "Lint only new and modified components",
        },
        { name: ["--fix", "-f"], description: "Automatically fix problems" },
        {
          name: "--fix-type",
          description:
            "Specify the types of fixes to apply (problem, suggestion, layout)",
        },
        {
          name: ["--json", "-j"],
          description: "Return the lint results in json format",
        },
      ],
    },
    // Explore components
    // { name: "graph", description: "EXPERIMENTAL. Generate an image file with the dependencies graph" },
    {
      name: "graph",
      description:
        "Generate an image file with the workspace components' dependencies graph",
      args: { description: "ID" },
      options: [
        {
          name: ["--image", "-i"],
          args: { description: "Image path and format" },
        },
        { name: "--remote", args: { description: "Remote name" } },
        {
          name: "--all-versions",
          description:
            "Enter all components versions into the graph, not only latest",
        },
        { name: "--layout", args: { description: "GraphVis layout" } },
        { name: ["--json", "-j"], description: "Json format" },
      ],
    },
    // { name: "list", description: "List components on a workspace, local scope or a remote scope" },
    {
      name: ["list", "ls"],
      description: "List components on a workspace or a remote scope",
      args: { description: "Remote scope to list components from" },
      options: [
        {
          name: ["--ids", "-i"],
          description: "Show only component ids, unformatted",
        },
        {
          name: ["--scope", "-s"],
          description: "Show only components stored in the local scope",
        },
        {
          name: ["--outdated", "-o"],
          description: "Highlight outdated components",
        },
        {
          name: ["--json", "-j"],
          description: "Show the output in JSON format",
        },
        {
          name: "--namespace",
          description: "Show only components in the specified namespace",
        },
      ],
    },
    // Workspace
    // { name: "globals", description: "List all globals" },
    {
      name: "globals",
      description: "List all globals",
      options: [{ name: ["--json", "-j"], description: "Json format" }],
    },

    // Applications
    // { name: "run", description: "Run an app (independent of bit's dev server)" },
    {
      name: "run", //["run", "c"],
      description:
        "Locally run an app component (independent of bit's dev server)",
      args: { description: "The app's name registered by the app" },
      options: [
        {
          name: ["--dev", "-d"],
          description: "Start the application in dev mode",
        },
        {
          name: ["--port", "-p"],
          description: "Port to run the app on",
        },
        {
          name: ["--verbose", "-v"],
          description:
            "Show verbose output for inspection and print stack trace",
        },
        {
          name: "--skip-watch",
          description:
            "Avoid running the watch process that compiles components in the background",
        },
        { name: "--ssr", description: "Run app in server side rendering mode" },
      ],
    },

    //{ name: "app", description: "Manages apps" },
    {
      name: "app", // alias: "apps",
      description: "Manages apps", // bit create <template-name> <component-names...>
      subcommands: [
        {
          name: "list",
          description: "List all registered apps",
          options: [
            {
              name: ["--json", "-j"],
              description: "Return the component data in json format",
            },
          ],
        },
        {
          name: "run",
          description:
            "Locally run an app component (independent of bit's dev server)",
          args: {
            description:
              "The app's name is registered by the app (run 'bit app list' to list the names of the available apps)",
          },
          options: [
            {
              name: ["--dev", "-d"],
              description: "Start the application in dev mode",
            },
            { name: ["--port", "-p"], description: "Port to run the app on" },
            {
              name: ["--verbose", "-v"],
              description:
                "Show verbose output for inspection and print stack trace",
            },
            {
              name: "--skip-watch",
              description:
                "Avoid running the watch process that compiles components in the background",
            },
            {
              name: "--ssr",
              description: "Run app in server side rendering mode",
            },
          ],
        },
      ],
    },

    // Only in the Docs
    // capsule
    {
      name: "capsule",
      description: "Manage capsules",
      subcommands: [
        {
          name: "list",
          description: "List the capsules generated for this workspace",
          options: [{ name: ["--json", "-j"], description: "JSON format" }],
        },
        {
          name: "create",
          description: "Create capsules for components",
          options: [
            {
              name: ["--base-dir", "-b"],
              description: "Set base dir of all capsules",
            },
            {
              name: ["--root-base-dir", "-r"],
              description: "Set root base dir of all capsules",
            },
            {
              name: ["--always-new", "-a"],
              description: "Create new environment for capsule",
            },
            {
              name: "--seeders-only",
              description: "Create capsules for the seeders only",
            },
            {
              name: ["--id", "-i"],
              description: "Reuse capsule of certain name",
            },
            {
              name: "--use-hash",
              description:
                "Whether to use hash function as capsules root dir name",
            },
            { name: ["--json", "-j"], description: "JSON format" },
            {
              name: "--install-packages",
              description: "Install packages by the package-manager",
            },
            {
              name: ["--package-manager", "-p"],
              description: "Npm, yarn or pnpm, default to npm",
            },
          ],
        },
        {
          name: "delete",
          description: "Delete capsules",
          options: [
            {
              name: "--scope-aspects",
              description: "Delete scope-aspects capsules",
            },
            {
              name: ["--all", "-a"],
              description: "Delete all capsules for all workspaces and scopes",
            },
            { name: ["--json", "-j"], description: "JSON format" },
          ],
        },
      ],
    },
    {
      name: "delete",
      description: "Mark components as deleted on the remote",
      args: {
        description: "Component name, component id, or component pattern",
      },
      options: [
        {
          name: "--lane",
          description:
            "When on a lane, delete the component from this lane only",
        },
        {
          name: "--update-main",
          description:
            "EXPERIMENTAL: Delete component/s on the main lane after merging this lane into main",
        },
        {
          name: ["--force", "-f"],
          description:
            "Removes the component from the scope, even if used as a dependency",
        },
        { name: ["--silent", "-s"], description: "Skip confirmation" },
        {
          name: "--hard",
          description:
            "NOT-RECOMMENDED: Delete a component completely from a remote scope",
        },
      ],
    },
    {
      name: "eject-conf",
      description:
        "Eject components configuration (create a component.json file). Note this can be reversed at any time by snapping/tagging changes and deleting the component.json file",
      args: { description: "Pattern for component ids" },
      options: [
        {
          name: ["--propagate", "-p"],
          description:
            "Mark propagate true in the config file, so that component.json configs will be merge with workspace configs",
        },
        { name: ["--override", "-o"], description: "Override file if exist" },
      ],
    },
    {
      name: "git",
      description: "Perform git operations",
      subcommands: [
        {
          name: "set-merge-driver",
          description: "Setup bit's git merge driver for bitmap files",
          options: [
            {
              name: ["--global", "-g"],
              description: "Set the git merge driver globally",
            },
          ],
        },
        {
          name: "merge-bitmaps",
          description: "Merge conflicting bitmap files during git merge",
          args: [
            { description: "Ancestor" },
            { description: "Current" },
            { description: "Other" },
          ],
        },
      ],
    },
    {
      name: ["lane", "l"],
      description:
        "Manage lanes - if no sub-command is used, runs 'bit lane list'",
      subcommands: [
        {
          name: "list",
          description: "List local lanes",
          options: [
            {
              name: ["--details", "-d"],
              description:
                "Show more details on the state of each component in each lane",
            },
            {
              name: ["--json", "-j"],
              description: "Show lanes' details in a json format",
            },
            {
              name: ["--remote", "-r"],
              args: { description: "Remote scope name" },
              description: "Show all remote lanes from the specified scope",
            },
            { name: "--merged", description: "List only merged lanes" },
            {
              name: "--not-merged",
              description: "List only lanes that haven't been merged",
            },
          ],
        },
        {
          name: "switch",
          description: "Switch to the specified lane",
          args: {
            description:
              "Lane-name or lane-id (if lane is not local) to switch to",
          },
          options: [
            {
              name: ["--alias", "-n"],
              args: { description: "Local alias for the lane" },
              description:
                "Relevant when the specified lane is a remote lane. Create a local alias for the lane",
            },
            {
              name: ["--merge", "-m"],
              args: { description: "Merge strategy" },
              description:
                "Merge local changes with the checked out version. Strategy should be 'theirs', 'ours', or 'manual'",
            },
            {
              name: "--get-all",
              description:
                "Checkout all components in a lane, including those not currently in the workspace",
            },
            {
              name: "--skip-dependency-installation",
              description: "Do not install packages of the imported components",
            },
            {
              name: ["--pattern", "-p"],
              args: { description: "Component pattern" },
              description:
                "Switch only the lane components matching the specified component-pattern",
            },
            {
              name: ["--json", "-j"],
              description: "Return the output as JSON",
            },
          ],
        },
        {
          name: "show",
          description:
            "Show lane details. If no lane specified, show the current lane",
          options: [
            {
              name: ["--json", "-j"],
              description: "Show the lane details in json format",
            },
            {
              name: "--remote",
              description:
                "Show details of the remote head of the provided lane",
            },
          ],
        },
        {
          name: "create",
          description: "Creates a new lane and switches to it",
          args: { description: "The name for the new lane" },
          options: [
            {
              name: ["--scope", "-s"],
              args: { description: "Remote scope for the new component" },
              description:
                "Remote scope to which this lane will be exported, default to the workspace.json's defaultScope",
            },
            { name: "--remote-scope", description: "DEPRECATED. Use --scope" },
            {
              name: "--alias",
              args: { description: "Local alias" },
              description:
                "A local alias to refer to this lane, defaults to the <lane-name>",
            },
            {
              name: "--fork-lane-new-scope",
              description:
                "Create the new lane in a different scope than its parent lane (if created from another lane)",
            },
          ],
        },
        {
          name: "remove",
          description: "Remove or delete lanes",
          args: { description: "A list of lane names, separated by spaces" },
          options: [
            {
              name: ["--remote", "-r"],
              description:
                "Delete a remote lane. Use remote/lane-id syntax e.g. bit lane remove owner.org/my-lane --remote. Delete is immediate, no export required",
            },
            {
              name: ["--force", "-f"],
              description:
                "Removes/deletes the lane even when the lane is not yet merged to main",
            },
            { name: ["--silent", "-s"], description: "Skip confirmation" },
          ],
        },
        {
          name: "change-scope",
          description: "Changes the remote scope of a lane",
          args: { description: "Remote scope name" },
          options: [
            {
              name: ["--lane-name", "-l"],
              args: { description: "Name of the lane" },
              description:
                "The name of the lane to change its remote scope. If not specified, the current lane is used",
            },
          ],
        },
        {
          name: "alias",
          description: "Adds an alias to a lane",
          args: { description: "Lane name and alias" },
        },
        {
          name: "rename",
          description:
            "EXPERIMENTAL. Change the lane-name locally and on the remote (if exported)",
          args: { description: "New name for the lane" },
          options: [
            {
              name: ["--lane-name", "-l"],
              args: { description: "Name of the lane" },
              description:
                "The name of the lane to rename. If not specified, the current lane is used",
            },
          ],
        },
        {
          name: "diff",
          description: "Show diff between lanes",
          args: {
            description:
              "Base lane for comparison and lane being compared to base lane",
          },
          options: [
            {
              name: ["--pattern", "-p"],
              args: { description: "Component pattern" },
              description:
                "Show lane-diff for components conforming to the specified component-pattern only",
            },
            {
              name: "--workspace-only",
              description:
                "Do not mark the components as removed from the lane. Instead, remove them from the workspace only",
            },
            {
              name: "--update-main",
              description:
                "EXPERIMENTAL. Remove, i.e. delete, component/s on the main lane after merging this lane into main",
            },
          ],
        },
        {
          name: "merge-abort",
          description:
            "Abort the recent lane-merge. Revert the lane object and checkout accordingly",
          options: [
            {
              name: "--verbose",
              description:
                "Show details of components that didn't need to be merged",
            },
            { name: ["--silent", "-s"], description: "Skip confirmation" },
            {
              name: "--skip-dependency-installation",
              description: "Do not install packages of the imported components",
            },
          ],
        },
        {
          name: "merge",
          description:
            "Merge a local or a remote lane to the current lane. By default, the provided lane will be fetched from the remote before merging. To merge the lane from the local scope without updating it first, use '--skip-fetch' flag",
          args: [
            {
              name: "lane",
              description:
                "Lane-name or full lane-id (if remote) to merge into the current lane",
            },
            {
              name: "pattern",
              description:
                'Partially merge the lane - only components that match the specified component-pattern. Component pattern format: component name, component id, or component pattern. Use component pattern to select multiple components. Use comma to separate patterns and "!" to exclude. E.g. "ui/**, !ui/button". Wrap the pattern with quotes',
              isOptional: true,
            },
          ],
          options: [
            {
              name: "--ours",
              description:
                "DEPRECATED. Use --auto-merge-resolve. In case of a conflict, keep local modifications",
            },
            {
              name: "--theirs",
              description:
                "DEPRECATED. Use --auto-merge-resolve. In case of a conflict, override local with incoming changes",
            },
            {
              name: "--manual",
              description:
                "DEPRECATED. Use --auto-merge-resolve. Requires manual resolution of conflicts",
            },
            {
              name: "--auto-merge-resolve",
              description:
                "In case of a merge conflict, resolve according to the provided strategy. Options include: [ours, theirs, manual]",
            },
            {
              name: "--workspace",
              description:
                "Merge only lane components that are in the current workspace",
            },
            {
              name: "--no-snap",
              description:
                "Do not auto snap after merge completed without conflicts",
            },
            {
              name: "--tag",
              description:
                "Auto-tag all lane components after merging into main (or tag-merge in case of snap-merge)",
            },
            {
              name: "--build",
              description:
                "In case of snap during the merge, run the build-pipeline (similar to bit snap --build)",
            },
            {
              name: ["--message", "-m"],
              description: "Override the default message for the auto snap",
            },
            {
              name: "--keep-readme",
              description:
                "Skip deleting the lane readme component after merging",
            },
            {
              name: "--no-squash",
              description:
                "Relevant for merging lanes into main, which by default squashes all lane snaps",
            },
            {
              name: "--squash",
              description:
                "EXPERIMENTAL. Relevant for merging a lane into another non-main lane, which by default does not squash",
            },
            {
              name: "--ignore-config-changes",
              description:
                "Allow merging when components are modified due to config changes (such as dependencies) only and not files",
            },
            {
              name: "--verbose",
              description:
                "Show details of components that were not merged successfully",
            },
            {
              name: ["--skip-dependency-installation", "-x"],
              description:
                "Do not install dependencies of the imported components",
            },
            {
              name: "--skip-fetch",
              description:
                "Use the local state of target-lane if exits locally, without updating it from the remote",
            },
            {
              name: "--include-deps",
              description:
                'Relevant for "--pattern" and "--workspace". Merge also dependencies of the specified components',
            },
            {
              name: "--resolve-unrelated",
              description:
                'Relevant when a component on a lane and the component on main have nothing in common. merge-strategy can be "ours" (default) or "theirs"',
            },
            {
              name: "--include-non-lane-comps",
              description:
                "When merging main, include workspace components that are not on the lane (by default only lane components are merged)",
            },
          ],
        },
        {
          name: "add-readme",
          description:
            "EXPERIMENTAL. Sets an existing component as the readme of a lane",
          args: [
            {
              name: "component-id",
              description:
                "The component name or id of the component to use as the lane's readme",
            },
            {
              name: "lane-name",
              description:
                "The lane to attach the readme to (defaults to the current lane)",
            },
          ],
        },
        {
          name: "remove-readme",
          description: "EXPERIMENTAL. Remove lane readme component",
          args: {
            name: "laneName",
            description:
              "Name of the lane from which the readme component should be removed",
          },
        },
        {
          name: "import",
          description:
            "Import a remote lane to your workspace and switch to that lane",
          args: {
            name: "lane",
            description: "The remote lane name to be imported",
          },
          options: [
            {
              name: ["--skip-dependency-installation", "-x"],
              description:
                "Do not install dependencies of the imported components",
            },
            {
              name: ["--pattern", "-p"],
              description:
                "Import only components from the lane that fit the specified component-pattern to the workspace. Works only when the workspace is empty",
            },
          ],
        },
        {
          name: "remove-comp",
          description: "DEPRECATED. Remove components when on a lane",
          args: {
            name: "component-pattern",
            description:
              'Component name, component id, or component pattern. Use component pattern to select multiple components. Use comma to separate patterns and "!" to exclude. E.g. "ui/**, !ui/button". Wrap the pattern with quotes',
          },
          options: [
            {
              name: "--workspace-only",
              description:
                "Do not mark the components as removed from the lane. Instead, remove them from the workspace only",
            },
            {
              name: "--update-main",
              description:
                "EXPERIMENTAL. Remove, i.e., delete, component/s on the main lane after merging this lane into the main",
            },
          ],
        },
      ],
    },
    {
      name: "log-file",
      description: "EXPERIMENTAL: Show file history",
      args: { description: "File path relative to the workspace" },
      options: [
        {
          name: ["--one-line", "-o"],
          description: "Show each log entry in one line",
        },
      ],
    },
    {
      name: ["mini-status", "ms"],
      description: "EXPERIMENTAL. Basic status for fast execution",
      args: {
        description: "Component name, component ID, or component pattern",
      },
      options: [
        { name: "--show-issues", description: "Show component issues" },
        { name: ["--json", "-j"], description: "Output in JSON format" },
      ],
    },
    {
      name: "pattern",
      description: "List the component ids matching the given pattern",
      args: { description: "Pattern for components to match" },
      options: [
        { name: ["--json", "-j"], description: "Return the output as JSON" },
      ],
    },
    {
      name: "recover",
      description:
        "EXPERIMENTAL. Recover component(s) soft-deleted from the workspace, or a remote scope",
      args: { description: "Component name to recover" },
      options: [
        {
          name: ["--skip-dependency-installation", "-x"],
          description:
            "Do not install packages in case of importing components",
        },
      ],
    },
    {
      name: "revert",
      description:
        "Replace the current component files by the specified version, leave the version intact",
      args: [
        { description: "Component name, ID, or pattern" },
        { description: "Permitted values: [main, specific-version]" },
      ],
      options: [
        {
          name: ["--verbose", "-v"],
          description: "Showing verbose output for inspection",
        },
        {
          name: ["--skip-dependency-installation", "-x"],
          description: "Do not install packages of the imported components",
        },
      ],
    },
    {
      name: "scope",
      description:
        "Manage the scope-name for components\n\nbit scope <sub-command>",
      subcommands: [
        {
          name: "set",
          description:
            "Sets the scope for specified component/s. If no component is specified, sets the default scope of the workspace. Default scopes for components are set in the bitmap file. The default scope for a workspace is set in the workspace.jsonc. A component is set with a scope (as opposed to default scope) only once it is versioned. You can use a pattern for multiple component ids, such as bit scope set scope-name \"org.scope/utils/**\". Use comma to separate patterns and '!' to exclude. Always wrap the pattern with single quotes to avoid collision with shell commands.\n\nUsage: scope set <scope-name> [component-pattern]",
          args: [
            { description: "Name of the scope to set" },
            { description: "Component name, ID, or pattern" },
          ],
        },
        {
          name: "rename",
          description:
            "Renames the scope name for all components with the specified 'current scope name' - only available for new components that have not yet been snapped/tagged. If <current-scope-name> is also the defaultScope for the workspace, this command will set <new-scope-name> as the defaultScope instead.\n\nUsage: scope rename <current-scope-name> <new-scope-name>",
          args: [
            { description: "The current scope name" },
            { description: "The new scope name" },
          ],
          options: [
            {
              name: ["--refactor", "-r"],
              description:
                "Update the import statements in all dependent components",
            },
          ],
        },
        {
          name: "rename-owner",
          description:
            "Renames the owner part of the scope-name for all components with the specified 'current owner name'.\n\nUsage: scope rename-owner <current-owner-name> <new-owner-name>",
          args: [
            { description: "The current owner name" },
            { description: "The new owner name" },
          ],
          options: [
            {
              name: ["--refactor", "-r"],
              description:
                "Update the import statements in all dependent components",
            },
            {
              name: "--ast",
              description:
                "EXPERIMENTAL. Use AST to transform files instead of regex",
            },
          ],
        },
        {
          name: "fork",
          description:
            "Fork all components of the original-scope and refactor the source-code to use the new scope name.\n\nUsage: scope fork <original-scope> <new-scope>",
          options: [
            {
              name: "--ast",
              description:
                "EXPERIMENTAL. Use AST to transform files instead of regex",
            },
          ],
        },
      ],
    },
    {
      name: "server",
      description:
        "EXPERIMENTAL. Communicate with bit CLI program via HTTP requests\n\nbit server",
      options: [
        { name: ["--port", "-p"], description: "Port to run the server on" },
      ],
    },
    {
      name: "system",
      description: "System operations\n\nbit system <sub-command>",
      subcommands: [
        {
          name: "log",
          description: "Print debug.log to the screen\n\nUsage: system log",
        },
      ],
    },
    {
      name: "snap",
      description:
        "Create an immutable and exportable component snapshot (non-release version)\n\nbit snap [component-pattern]",
      args: {
        description:
          'Component name, component ID, or component pattern. Use component pattern to select multiple components. Use comma to separate patterns and "!" to exclude. E.g. "ui/**, !ui/button". Wrap the pattern with quotes. By default, only new and modified components are snapped (add --unmodified to snap all components in the workspace)',
      },
      options: [
        {
          name: ["--message", "-m"],
          description:
            "Snap message describing the latest changes - will appear in component history log",
        },
        {
          name: "--unmodified",
          description:
            "Include unmodified components (by default, only new and modified components are snapped)",
        },
        {
          name: "--unmerged",
          description:
            "Complete a merge process by snapping the unmerged components",
        },
        {
          name: ["--build", "-b"],
          description:
            "Not needed for now. Run the build pipeline locally in case the feature-flag build-on-ci is enabled",
        },
        {
          name: "--editor",
          description:
            "Open an editor to write a snap message per component. Optionally specify the editor-name (defaults to vim)",
        },
        {
          name: "--skip-tests",
          description: "Skip running component tests during snap process",
        },
        {
          name: "--skip-auto-snap",
          description: "Skip auto snapping dependents",
        },
        {
          name: "--disable-snap-pipeline",
          description:
            "Skip the snap pipeline. This will for instance skip packing and publishing component version for install, and app deployment",
        },
        {
          name: "--ignore-build-errors",
          description:
            "Proceed to snap pipeline even when build pipeline fails",
        },
        {
          name: ["--ignore-issues", "-i"],
          description:
            'Ignore component issues (shown in "bit status" as "issues found"), issues to ignore: [MissingPackagesDependenciesOnFs, MissingManuallyConfiguredPackages, MissingComponents, UntrackedDependencies, ResolveErrors, RelativeComponents, RelativeComponentsAuthored, ParseErrors, MissingDists, LegacyInsideHarmony, MissingDependenciesOnFs, ImportNonMainFiles, MultipleEnvs, MissingLinksFromNodeModulesToSrc, CircularDependencies, DuplicateComponentAndPackage, MergeConfigHasConflict, NonLoadedEnv, ExternalEnvWithoutVersion, RemovedDependencies] to ignore multiple issues, separate them by a comma and wrap with quotes. To ignore all issues, specify "*"',
        },
        {
          name: ["--all", "-a"],
          description:
            "DEPRECATED (not needed anymore, now the default). Snap all new and modified components",
        },
        {
          name: "--fail-fast",
          description:
            "Stop pipeline execution on the first failed task (by default a task is skipped only when its dependency failed)",
        },
        {
          name: ["--force", "-f"],
          description:
            'DEPRECATED (use "--skip-tests" or "--unmodified" instead). Force-snap even if tests are failing and even when component has not changed',
        },
      ],
    },
    {
      name: "watch",
      description:
        'Automatically recompile modified components (on save). By default, the watcher doesn\'t use polling, to keep the CPU idle. In some rare cases, this could result in missing file events (files are not watched). To fix it, try to stop other watchers on the same machine. Alternatively, to use polling, run "bit config set watch_use_polling true".\n\nbit watch',
      options: [
        {
          name: ["--verbose", "-v"],
          description: "Show all watch events and compiler verbose output",
        },
        {
          name: "--skip-pre-compilation",
          description: "Skip compilation step before starting to watch",
        },
        {
          name: ["--check-types", "-t"],
          description:
            "EXPERIMENTAL. Show errors/warnings for types. Options are [file, project] to investigate only changed file or entire project. Defaults to project",
        },
      ],
    },
    {
      name: "use",
      description:
        "Set aspects in the workspace/scope config to make them loadable by the workspace/scope.\n\nbit use <component-id>",
      args: {
        description: "The component ID of the aspect",
      },
    },
    {
      name: ["ws-config", "workspace-config"],
      description:
        "Manage workspace config files.\n\nbit ws-config <sub-command>",
      subcommands: [
        {
          name: "ws-config write",
          description:
            "EXPERIMENTAL. Write config files in the workspace. Useful for IDEs.\n\nws-config write",
          options: [
            {
              name: ["--clean", "-c"],
              description:
                'Delete existing config files from the workspace. Highly recommended to run it with "--dry-run" first',
            },
            {
              name: ["--writers", "-w"],
              description:
                "Only write config files for the given writers. Use comma to separate multiple writers. Use ws-config list to see all writers",
            },
            {
              name: ["--silent", "-s"],
              description: "Do not prompt for confirmation",
            },
            {
              name: "--no-dedupe",
              description:
                "Write configs inside each one of the component's dir, avoid deduping",
            },
            {
              name: "--dry-run",
              description:
                "Show the paths that configs will be written per env",
            },
            {
              name: "--dry-run-with-content",
              description:
                "Use with --json flag. Show the config content and the paths that will be written per env",
            },
            {
              name: ["--verbose", "-v"],
              description: "Showing verbose output for writing",
            },
            { name: ["--json", "-j"], description: "JSON format" },
          ],
        },

        {
          name: "ws-config clean",
          description:
            "EXPERIMENTAL. Clean (delete) written config files in the workspace. Useful for IDEs.\n\nws-config clean",
          options: [
            {
              name: ["--silent", "-s"],
              description: "Do not prompt for confirmation",
            },
            {
              name: ["--writers", "-w"],
              description:
                "Only clean config files for the given writers. Use comma to separate multiple writers. Use ws-config list to see all writers",
            },
            {
              name: "--dry-run",
              description: "Show the paths of configs that will be cleaned",
            },
            { name: ["--json", "-j"], description: "JSON format" },
          ],
        },

        {
          name: "ws-config list",
          description: "EXPERIMENTAL. List config writers.\n\nws-config list",
          options: [{ name: ["--json", "-j"], description: "JSON format" }],
        },
      ],
    },
  ],
  options: [
    {
      name: ["--version", "-v"],
      description: "Show version",
    },
    {
      name: ["--help", "-h"],
      description: "Show help for bit",
    },
  ],
};

export default completionSpec;
