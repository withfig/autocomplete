import { filepaths } from "@fig/autocomplete-generators";

const POD_ICON =
  "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_ruby.svg";
const podSpecAndFoldersGenerator = filepaths({
  extensions: ["podspec"],
  editFileSuggestions: { icon: POD_ICON },
});

const completionSpec: Fig.Spec = {
  name: "pod",
  description: "CocoaPods, the Cocoa library package manager",
  subcommands: [
    {
      description: "Deintegrate CocoaPods from your project",
      name: "deintegrate",
      options: [
        {
          name: "--project-directory",
          description: "The path to the root of the project directory",
          args: {
            name: "/project/dir/",
            template: "folders",
          },
        },
        {
          name: "--allow-root",
          description: "Allows CocoaPods to run as root",
          icon: "🔐",
        },
      ],
      args: {
        name: "XCODE_PROJECT",
        isOptional: true,
      },
    },
    {
      description: "Manipulate the CocoaPods cache",
      name: "cache",
      options: [
        {
          name: "--allow-root",
          description: "Allows CocoaPods to run as root",
          icon: "🔐",
        },
      ],
      subcommands: [
        {
          description: "Remove the cache for pods",
          name: "clean",
          options: [
            {
              name: "--all",
              description: "Remove all the cached pods without asking",
            },
            {
              name: "--allow-root",
              description: "Allows CocoaPods to run as root",
              icon: "🔐",
            },
          ],
          args: {
            name: "NAME",
            isOptional: true,
          },
        },
        {
          description: "List the paths of pod caches for each known pod",
          name: "list",
          options: [
            {
              name: "--short",
              description: "Only print the path relative to the cache root",
            },
            {
              name: "--allow-root",
              description: "Allows CocoaPods to run as root",
              icon: "🔐",
            },
          ],
          args: {
            name: "NAME",
            isOptional: true,
          },
        },
      ],
    },
    {
      description: "List pods",
      name: "list",
      options: [
        {
          name: "--update",
          description: "Run `pod repo update` before listing",
        },
        {
          name: "--stats",
          description: "Show additional stats (like GitHub watchers and forks)",
        },
        {
          name: "--allow-root",
          description: "Allows CocoaPods to run as root",
          icon: "🔐",
        },
      ],
    },
    {
      description: "Setup the CocoaPods environment",
      name: "setup",
      options: [
        {
          name: "--allow-root",
          description: "Allows CocoaPods to run as root",
          icon: "🔐",
        },
      ],
    },
    {
      description: "Manage pod specs",
      name: "spec",
      options: [
        {
          name: "--allow-root",
          description: "Allows CocoaPods to run as root",
          icon: "🔐",
        },
      ],
      subcommands: [
        {
          description: "Edit a spec file",
          name: "edit",
          options: [
            {
              name: "--regex",
              description: "Interpret the `QUERY` as a regular expression",
            },
            {
              name: "--show-all",
              description: "Pick from all versions of the given podspec",
            },
            {
              name: "--allow-root",
              description: "Allows CocoaPods to run as root",
              icon: "🔐",
            },
          ],
          args: {
            name: "QUERY",
            isOptional: true,
          },
        },
        {
          description: "Create spec file stub",
          name: "create",
          options: [
            {
              name: "--allow-root",
              description: "Allows CocoaPods to run as root",
              icon: "🔐",
            },
          ],
          args: {
            name: "NAME|https://github.com/USER/REPO",
            isOptional: true,
          },
        },
        {
          description: "Prints a spec file",
          name: "cat",
          options: [
            {
              name: "--regex",
              description: "Interpret the `QUERY` as a regular expression",
            },
            {
              name: "--show-all",
              description: "Pick from all versions of the given podspec",
            },
            {
              name: "--allow-root",
              description: "Allows CocoaPods to run as root",
              icon: "🔐",
            },
          ],
          args: {
            name: "QUERY",
            isOptional: true,
          },
        },
        {
          description: "Prints the path of the given spec",
          name: "which",
          options: [
            {
              name: "--regex",
              description: "Interpret the `QUERY` as a regular expression",
            },
            {
              name: "--show-all",
              description: "Print all versions of the given podspec",
            },
            {
              name: "--allow-root",
              description: "Allows CocoaPods to run as root",
              icon: "🔐",
            },
          ],
          args: {
            name: "QUERY",
            isOptional: true,
          },
        },
        {
          description: "Validates a spec file",
          name: "lint",
          options: [
            {
              name: "--quick",
              description:
                "Lint skips checks that would require to download and build the spec",
              icon: "⚡",
            },
            {
              name: "--allow-warnings",
              icon: "⚠️",
              description: "Lint validates even if warnings are present",
            },
            {
              name: "--subspec",
              description: "Lint validates only the given subspec",
              args: {
                name: "NAME",
              },
            },
            {
              name: "--no-subspecs",
              description: "Lint skips validation of subspecs",
            },
            {
              name: "--no-clean",
              description:
                "Lint leaves the build directory intact for inspection",
            },
            {
              name: "--fail-fast",
              description:
                "Lint stops on the first failing platform or subspec",
            },
            {
              name: "--use-libraries",
              description: "Lint uses static libraries to install the spec",
            },
            {
              name: "--use-modular-headers",
              description: "Lint uses modular headers during installation",
            },
            {
              name: "--use-static-frameworks",
              description: "Lint uses static frameworks during installation",
            },
            {
              name: "--sources",
              description:
                "The sources from which to pull dependent pods (defaults to https://cdn.cocoapods.org/). Multiple sources must be comma-delimited",
              args: {
                name: "source",
                suggestions: [
                  {
                    name: "https://cdn.cocoapods.org/",
                    icon: "🌐",
                  },
                ],
              },
            },
            {
              name: "--platforms",
              description:
                "Lint against specific platforms (defaults to all platforms supported by the podspec). Multiple platforms must be comma-delimited",
              args: {
                name: "platform",
                suggestions: [
                  {
                    name: "ios",
                    icon: "📱",
                  },
                  {
                    name: "macos",
                    icon: "💻",
                  },
                  {
                    name: "ios,macos",
                    icon: "💻",
                  },
                ],
              },
            },
            {
              name: "--private",
              description: "Lint skips checks that apply only to public specs",
            },
            {
              name: "--swift-version",
              description:
                "The `SWIFT_VERSION` that should be used to lint the spec. This takes precedence over the Swift versions specified by the spec or a `.swift-version` file",
              args: {
                name: "VERSION",
              },
              icon: "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_swift.svg",
            },
            {
              name: "--skip-import-validation",
              description: "Lint skips validating that the pod can be imported",
            },
            {
              name: "--skip-tests",
              description:
                "Lint skips building and running tests during validation",
            },
            {
              name: "--test-specs",
              description: "List of test specs to run",
              args: {
                name: "test-spec",
              },
            },
            {
              name: "--analyze",
              description: "Validate with the Xcode Static Analysis tool",
            },
            {
              name: "--configuration",
              icon: "🛠",
              description:
                "Build using the given configuration (defaults to Release)",
              args: {
                name: "CONFIGURATION",
              },
            },
            {
              name: "--allow-root",
              description: "Allows CocoaPods to run as root",
              icon: "🔐",
            },
          ],
          args: {
            name: "NAME.podspec|DIRECTORY|http://PATH/NAME.podspec",
            isOptional: true,
            generators: podSpecAndFoldersGenerator,
          },
        },
      ],
    },
    {
      description:
        "Install project dependencies according to versions from a Podfile.lock",
      name: "install",
      options: [
        {
          name: "--repo-update",
          description: "Force running `pod repo update` before install",
        },
        {
          name: "--deployment",
          description:
            "Disallow any changes to the Podfile or the Podfile.lock during installation",
        },
        {
          name: "--clean-install",
          description:
            "Ignore the contents of the project cache and force a full pod installation. This only applies to projects that have enabled incremental installation",
          icon: "🛁",
        },
        {
          name: "--project-directory",
          description: "The path to the root of the project directory",
          args: {
            name: "/project/dir/",
            template: "folders",
          },
        },
        {
          name: "--allow-root",
          description: "Allows CocoaPods to run as root",
          icon: "🔐",
        },
      ],
    },
    {
      description: "Display pod environment",
      name: "env",
      options: [
        {
          name: "--allow-root",
          description: "Allows CocoaPods to run as root",
          icon: "🔐",
        },
      ],
    },
    {
      description: "Show outdated project dependencies",
      name: "outdated",
      options: [
        {
          name: "--project-directory",
          description: "The path to the root of the project directory",
          args: {
            name: "/project/dir/",
            template: "folders",
          },
        },
        {
          name: "--no-repo-update",
          description: "Skip running `pod repo update` before install",
        },
        {
          name: "--allow-root",
          description: "Allows CocoaPods to run as root",
          icon: "🔐",
        },
      ],
    },
    {
      description: "Generate a Podfile for the current directory",
      name: "init",
      options: [
        {
          name: "--allow-root",
          description: "Allows CocoaPods to run as root",
          icon: "🔐",
        },
      ],
      args: {
        name: "XCODEPROJ",
      },
    },
    {
      description: "Inter-process communication",
      name: "ipc",
      options: [
        {
          name: "--allow-root",
          description: "Allows CocoaPods to run as root",
          icon: "🔐",
        },
      ],
      subcommands: [
        {
          description: "Lists the specifications known to CocoaPods",
          name: "list",
          options: [
            {
              name: "--allow-root",
              description: "Allows CocoaPods to run as root",
              icon: "🔐",
            },
          ],
        },
        {
          description: "Updates the search index",
          name: "update-search-index",
          options: [
            {
              name: "--allow-root",
              description: "Allows CocoaPods to run as root",
              icon: "🔐",
            },
          ],
        },
        {
          description: "Converts a Podfile to JSON",
          name: "podfile-json",
          options: [
            {
              name: "--project-directory",
              description: "The path to the root of the project directory",
              args: {
                name: "/project/dir/",
                template: "folders",
              },
            },
            {
              name: "--allow-root",
              description: "Allows CocoaPods to run as root",
              icon: "🔐",
            },
          ],
          args: {
            name: "PATH",
            template: "filepaths",
          },
        },
        {
          description: "Converts a podspec to JSON",
          name: "spec",
          options: [
            {
              name: "--allow-root",
              description: "Allows CocoaPods to run as root",
              icon: "🔐",
            },
          ],
          args: {
            name: "PATH",
          },
        },
        {
          description: "Converts a Podfile to YAML",
          name: "podfile",
          options: [
            {
              name: "--project-directory",
              description: "The path to the root of the project directory",
              args: {
                name: "/project/dir/",
                template: "folders",
              },
            },
            {
              name: "--allow-root",
              description: "Allows CocoaPods to run as root",
              icon: "🔐",
            },
          ],
          args: {
            name: "PATH",
            template: "filepaths",
          },
        },
        {
          description: "The repl listens to commands on standard input",
          name: "repl",
          options: [
            {
              name: "--project-directory",
              description: "The path to the root of the project directory",
              args: {
                name: "/project/dir/",
                template: "folders",
              },
            },
            {
              name: "--allow-root",
              description: "Allows CocoaPods to run as root",
              icon: "🔐",
            },
          ],
        },
      ],
    },
    {
      description: "Show available CocoaPods plugins",
      name: "plugins",
      options: [
        {
          name: "--allow-root",
          description: "Allows CocoaPods to run as root",
          icon: "🔐",
        },
      ],
      subcommands: [
        {
          description: "Search for known plugins",
          name: "search",
          options: [
            {
              name: "--full",
              description: "Search by name  author, and description",
            },
            {
              name: "--allow-root",
              description: "Allows CocoaPods to run as root",
              icon: "🔐",
            },
          ],
          args: {
            name: "QUERY",
          },
        },
        {
          description: "List plugins installed on your machine",
          name: "installed",
          options: [
            {
              name: "--allow-root",
              description: "Allows CocoaPods to run as root",
              icon: "🔐",
            },
          ],
        },
        {
          description: "Creates a new plugin",
          name: "create",
          options: [
            {
              name: "--allow-root",
              description: "Allows CocoaPods to run as root",
              icon: "🔐",
            },
          ],
          args: [
            {
              name: "NAME",
            },
            {
              name: "TEMPLATE_URL",
              isOptional: true,
            },
          ],
        },
        {
          description: "Request to add the plugin to the official plugins list",
          name: "publish",
          options: [
            {
              name: "--allow-root",
              description: "Allows CocoaPods to run as root",
              icon: "🔐",
            },
          ],
        },
      ],
    },
    {
      description: "Develop pods",
      name: "lib",
      options: [
        {
          name: "--allow-root",
          description: "Allows CocoaPods to run as root",
          icon: "🔐",
        },
      ],
      subcommands: [
        {
          description: "Creates a new Pod",
          name: "create",
          options: [
            {
              name: "--template-url",
              description:
                "The URL of the git repo containing a compatible template",
              args: {
                name: "URL",
              },
              icon: "🌐",
            },
            {
              name: "--allow-root",
              description: "Allows CocoaPods to run as root",
              icon: "🔐",
            },
          ],
          args: {
            name: "NAME",
          },
        },
        {
          description: "Validates a Pod",
          name: "lint",
          options: [
            {
              name: "--quick",
              description:
                "Lint skips checks that would require to download and build the spec",
              icon: "⚡",
            },
            {
              name: "--allow-warnings",
              icon: "⚠️",
              description: "Lint validates even if warnings are present",
            },
            {
              name: "--subspec",
              description: "Lint validates only the given subspec",
              args: {
                name: "NAME",
              },
            },
            {
              name: "--no-subspecs",
              description: "Lint skips validation of subspecs",
            },
            {
              name: "--no-clean",
              description:
                "Lint leaves the build directory intact for inspection",
            },
            {
              name: "--fail-fast",
              description:
                "Lint stops on the first failing platform or subspec",
            },
            {
              name: "--use-libraries",
              description: "Lint uses static libraries to install the spec",
            },
            {
              name: "--use-modular-headers",
              description: "Lint uses modular headers during installation",
            },
            {
              name: "--use-static-frameworks",
              description: "Lint uses static frameworks during installation",
            },
            {
              name: "--sources",
              description:
                "The sources from which to pull dependent pods (defaults to https://cdn.cocoapods.org/). Multiple,sources must be comma-delimited",
              args: {
                name: "source",
                suggestions: [
                  {
                    name: "https://cdn.cocoapods.org/",
                    icon: "🌐",
                  },
                ],
              },
            },
            {
              name: "--platforms",
              description:
                "Lint against specific platforms (defaults to all platforms supported by the podspec). Multiple platforms must be comma-delimited",
              args: {
                name: "platform",
                suggestions: [
                  {
                    name: "ios",
                    icon: "📱",
                  },
                  {
                    name: "macos",
                    icon: "💻",
                  },
                  {
                    name: "ios,macos",
                    icon: "💻",
                  },
                ],
              },
            },
            {
              name: "--private",
              description: "Lint skips checks that apply only to public specs",
            },
            {
              name: "--swift-version",
              description:
                "The `SWIFT_VERSION` that should be used to lint the spec. This takes precedence over the Swift versions specified by the spec or a `.swift-version` file",
              args: {
                name: "VERSION",
              },
              icon: "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_swift.svg",
            },
            {
              name: "--include-podspecs",
              description:
                "Additional ancillary podspecs which are used for linting via :path",
              args: {
                name: "podspec",
                generators: podSpecAndFoldersGenerator,
              },
            },
            {
              name: "--external-podspecs",
              description:
                "Additional ancillary podspecs which are used for linting via :podspec. If there are --include-podspecs, then these are removed from them",
              args: {
                name: "podspec",
                generators: podSpecAndFoldersGenerator,
              },
            },
            {
              name: "--skip-import-validation",
              description: "Lint skips validating that the pod can be imported",
            },
            {
              name: "--skip-tests",
              description:
                "Lint skips building and running tests during validation",
            },
            {
              name: "--test-specs",
              description: "List of test specs to run",
              args: {
                name: "test-spec",
              },
            },
            {
              name: "--analyze",
              description: "Validate with the Xcode Static Analysis tool",
            },
            {
              name: "--configuration",
              icon: "🛠",
              description:
                "Build using the given configuration (defaults to Release)",
              args: {
                name: "CONFIGURATION",
              },
            },
            {
              name: "--allow-root",
              description: "Allows CocoaPods to run as root",
              icon: "🔐",
            },
          ],
          args: {
            name: "PODSPEC_PATHS",
            isOptional: true,
            generators: podSpecAndFoldersGenerator,
          },
        },
      ],
    },
    {
      description: "Search for pods",
      name: "search",
      options: [
        {
          name: "--regex",
          description: "Interpret the `QUERY` as a regular expression",
        },
        {
          name: "--simple",
          description: "Search only by name",
        },
        {
          name: "--stats",
          description: "Show additional stats (like GitHub watchers and forks)",
        },
        {
          name: "--web",
          icon: "🌐",
          description: "Searches on cocoapods.org",
        },
        {
          name: "--ios",
          icon: "📱",
          description: "Restricts the search to Pods supported on iOS",
        },
        {
          name: "--osx",
          icon: "💻",
          description: "Restricts the search to Pods supported on macOS",
        },
        {
          name: "--watchos",
          icon: "⌚",
          description: "Restricts the search to Pods supported on watchOS",
        },
        {
          name: "--tvos",
          icon: "📺",
          description: "Restricts the search to Pods supported on tvOS",
        },
        {
          name: "--no-pager",
          description: "Do not pipe search results into a pager",
        },
        {
          name: "--allow-root",
          description: "Allows CocoaPods to run as root",
          icon: "🔐",
        },
      ],
      args: {
        name: "QUERY",
      },
    },
    {
      description: "Manage spec-repositories",
      name: "repo",
      options: [
        {
          name: "--allow-root",
          description: "Allows CocoaPods to run as root",
          icon: "🔐",
        },
      ],
      subcommands: [
        {
          description: "Push new specifications to a spec-repo",
          name: "push",
          options: [
            {
              name: "--allow-warnings",
              icon: "⚠️",
              description: "Allows pushing even if there are warnings",
            },
            {
              name: "--use-libraries",
              description: "Linter uses static libraries to install the spec",
            },
            {
              name: "--use-modular-headers",
              description: "Lint uses modular headers during installation",
            },
            {
              name: "--sources",
              description:
                "The sources from which to pull dependent pods (defaults to all available repos). Multiple sources must be comma-delimited",
              args: {
                name: "source",
                suggestions: [
                  {
                    name: "https://cdn.cocoapods.org/",
                    icon: "🌐",
                  },
                ],
              },
            },
            {
              name: "--local-only",
              description:
                "Does not perform the step of pushing REPO to its remote",
            },
            {
              name: "--no-private",
              description:
                "Lint includes checks that apply only to public repos",
            },
            {
              name: "--skip-import-validation",
              description: "Lint skips validating that the pod can be imported",
            },
            {
              name: "--skip-tests",
              description:
                "Lint skips building and running tests during validation",
            },
            {
              name: "--commit-message",
              description:
                "Add custom commit message. Opens default editor if no commit message is specified",
              args: {
                name: "message",
              },
            },
            {
              name: "--use-json",
              description:
                "Convert the podspec to JSON before pushing it to the repo",
            },
            {
              name: "--swift-version",
              description:
                "The `SWIFT_VERSION` that should be used when linting the spec. This takes precedence over the Swift versions specified by the spec or a `.swift-version` file",
              args: {
                name: "VERSION",
              },
              icon: "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_swift.svg",
            },
            {
              name: "--no-overwrite",
              description:
                "Disallow pushing that would overwrite an existing spec",
            },
            {
              name: "--allow-root",
              description: "Allows CocoaPods to run as root",
              icon: "🔐",
            },
          ],
          args: [
            {
              name: "REPO",
            },
            {
              name: "NAME.podspec",
              isOptional: true,
              generators: podSpecAndFoldersGenerator,
            },
          ],
        },
        {
          description: "Add a spec repo",
          name: "add",
          options: [
            {
              name: "--progress",
              description: "Show the progress of cloning the spec repository",
            },
            {
              name: "--allow-root",
              description: "Allows CocoaPods to run as root",
              icon: "🔐",
            },
          ],
          args: [
            {
              name: "NAME",
            },
            {
              name: "URL",
            },
            {
              name: "BRANCH",
              isOptional: true,
            },
          ],
        },
        {
          description: "Remove a spec repo",
          name: "remove",
          options: [
            {
              name: "--allow-root",
              description: "Allows CocoaPods to run as root",
              icon: "🔐",
            },
          ],
          args: {
            name: "NAME",
          },
        },
        {
          description: "Add a spec repo backed by a CDN",
          name: "add-cdn",
          options: [
            {
              name: "--allow-root",
              description: "Allows CocoaPods to run as root",
              icon: "🔐",
            },
          ],
          args: [
            {
              name: "NAME",
            },
            {
              name: "URL",
            },
          ],
        },
        {
          description: "Validates all specs in a repo list",
          name: "lint",
          options: [
            {
              name: "--only-errors",
              description: "Lint presents only the errors",
            },
            {
              name: "--allow-root",
              description: "Allows CocoaPods to run as root",
              icon: "🔐",
            },
          ],
          args: {
            name: "NAME|DIRECTORY",
            isOptional: true,
          },
        },
        {
          description: "Update a spec repo",
          name: "update",
          options: [
            {
              name: "--allow-root",
              description: "Allows CocoaPods to run as root",
              icon: "🔐",
            },
          ],
          args: {
            name: "NAME",
            isOptional: true,
          },
        },
      ],
    },
    {
      description:
        "Interact with the CocoaPods API (e.g. publishing new specs)",
      name: "trunk",
      options: [
        {
          name: "--allow-root",
          description: "Allows CocoaPods to run as root",
          icon: "🔐",
        },
      ],
      subcommands: [
        {
          description: "Publish a podspec",
          name: "push",
          options: [
            {
              name: "--allow-warnings",
              icon: "⚠️",
              description: "Allows push even if there are lint warnings",
            },
            {
              name: "--use-libraries",
              description: "Linter uses static libraries to install the spec",
            },
            {
              name: "--use-modular-headers",
              description: "Lint uses modular headers during installation",
            },
            {
              name: "--swift-version",
              description:
                "The SWIFT_VERSION that should be used to lint the spec. This takes precedence over a .swift-version file",
              args: {
                name: "VERSION",
              },
              icon: "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_swift.svg",
            },
            {
              name: "--skip-import-validation",
              description: "Lint skips validating that the pod can be imported",
            },
            {
              name: "--skip-tests",
              description:
                "Lint skips building and running tests during validation",
            },
            {
              name: "--synchronous",
              description:
                "If validation depends on other recently pushed pods ,synchronize",
            },
            {
              name: "--allow-root",
              description: "Allows CocoaPods to run as root",
              icon: "🔐",
            },
          ],
          args: {
            name: "PATH",
            isOptional: true,
          },
        },
        {
          description: "Deprecates a pod",
          name: "deprecate",
          options: [
            {
              name: "--in-favor-of",
              description: "The pod to deprecate this pod in favor of",
              args: {
                name: "OTHER_NAME",
              },
            },
            {
              name: "--allow-root",
              description: "Allows CocoaPods to run as root",
              icon: "🔐",
            },
          ],
          args: {
            name: "NAME",
          },
        },
        {
          description: "Deletes a version of a pod",
          name: "delete",
          options: [
            {
              name: "--allow-root",
              description: "Allows CocoaPods to run as root",
              icon: "🔐",
            },
          ],
          args: [
            {
              name: "NAME",
            },
            {
              name: "VERSION",
            },
          ],
        },
        {
          description: "Add an owner to a pod",
          name: "add-owner",
          options: [
            {
              name: "--allow-root",
              description: "Allows CocoaPods to run as root",
              icon: "🔐",
            },
          ],
          args: [
            {
              name: "POD",
            },
            {
              name: "OWNER-EMAIL",
            },
          ],
        },
        {
          description: "Remove an owner from a pod",
          name: "remove-owner",
          options: [
            {
              name: "--allow-root",
              description: "Allows CocoaPods to run as root",
              icon: "🔐",
            },
          ],
          args: [
            {
              name: "POD",
            },
            {
              name: "OWNER-EMAIL",
            },
          ],
        },
        {
          description: "Display information about your sessions",
          name: "me",
          options: [
            {
              name: "--allow-root",
              description: "Allows CocoaPods to run as root",
              icon: "🔐",
            },
          ],
          subcommands: [
            {
              description: "Remove sessions",
              name: "clean-sessions",
              options: [
                {
                  name: "--all",
                  description:
                    "Removes all your sessions  except for the current one",
                },
                {
                  name: "--allow-root",
                  description: "Allows CocoaPods to run as root",
                  icon: "🔐",
                },
              ],
            },
          ],
        },
        {
          description: "Manage sessions",
          name: "register",
          options: [
            {
              name: "--description",
              description:
                "An arbitrary description to easily identify your session later on",
              args: {
                name: "DESCRIPTION",
              },
            },
            {
              name: "--allow-root",
              description: "Allows CocoaPods to run as root",
              icon: "🔐",
            },
          ],
          args: [
            {
              name: "EMAIL",
            },
            {
              name: "YOUR_NAME",
              isOptional: true,
            },
          ],
        },
        {
          description: "Returns information about a Pod",
          name: "info",
          options: [
            {
              name: "--allow-root",
              description: "Allows CocoaPods to run as root",
              icon: "🔐",
            },
          ],
          args: {
            name: "NAME",
          },
        },
      ],
    },
    {
      description:
        "Update outdated project dependencies and create new Podfile.lock",
      name: "update",
      options: [
        {
          name: "--sources",
          description:
            "The sources from which to update dependent pods. Multiple sources must be comma-delimited",
          args: {
            name: "https://cdn.cocoapods.org/",
          },
        },
        {
          name: "--exclude-pods",
          description:
            "Pods to exclude during update. Multiple pods must be comma-delimited",
          args: {
            name: "podName",
          },
        },
        {
          name: "--clean-install",
          description:
            "Ignore the contents of the project cache and force a full pod installation. This only applies to projects that have enabled incremental installation",
          icon: "🛁",
        },
        {
          name: "--project-directory",
          description: "The path to the root of the project directory",
          args: {
            name: "/project/dir/",
            template: "folders",
          },
        },
        {
          name: "--no-repo-update",
          description: "Skip running `pod repo update` before install",
        },
        {
          name: "--allow-root",
          description: "Allows CocoaPods to run as root",
          icon: "🔐",
        },
      ],
      args: {
        name: "POD_NAMES",
        isOptional: true,
      },
    },
    {
      description: "Try a Pod!",
      name: "try",
      options: [
        {
          name: "--podspec_name",
          args: {
            name: "name",
            description:
              "The name of the podspec file within the Git Repository",
          },
        },
        {
          name: "--no-repo-update",
          description: "Skip running `pod repo update` before install",
        },
        {
          name: "--allow-root",
          description: "Allows CocoaPods to run as root",
          icon: "🔐",
        },
      ],
      args: {
        name: "NAME|URL",
      },
    },
  ],
  options: [
    {
      name: "--silent",
      icon: "🔇",
      description: "Show nothing",
    },
    {
      name: "--verbose",
      icon: "🔊",
      description: "Show more debugging information",
    },
    {
      name: "--no-ansi",
      description: "Show output without ANSI codes",
    },
    {
      name: "--help",
      description: "Show help banner of specified command",
    },
  ],
};

export default completionSpec;
