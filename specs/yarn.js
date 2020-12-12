var completionSpec = {
    name: "yarn",
    description: "Manage packages and run scripts",
    args: {},
    options: [
        {
            name: "--cache-folder",
            description: "program passed in as string (terminates option list)",
            args: {
                template: "folders"
            }
        },
        {
            name: "--check-files",
            description: "install will verify file tree of packages for consistency",
        },
        {
            name: "--disable-pnp",
            description: "disable the Plug'n'Play installation",
        },
        {
            name: "--emoji",
            description: "enable emoji in output (default: true)",
            args: {
                name: "bool",
                optional: true,
                suggestions: ["true", "false"]
            }
        },
        {
            name: ["--enable-pnp", "--pnp"],
            insertValue: "--enable-pnp ",
            description: "enable the Plug'n'Play installation",
        },
        {
            name: "--flat",
            description: "only allow one version of a package",
        },
        {
            name: "--focus",
            description: "Focus on a single workspace by installing remote copies of its sibling workspaces.",
        },
        {
            name: "--force",
            description: " install and build packages even if they were built before, overwrite lockfile",
        },
        {
            name: "--frozen-lockfile",
            description: "don't generate a lockfile and fail if an update is needed",
        },
        {
            name: "--global-folder",
            description: "specify a custom folder to store global packages",
            args: {
                template: "folders"
            }
        },
        {
            name: "--har",
            description: "save HAR output of network traffic",
        },
        {
            name: "--https-proxy",
            description: "",
            args: {
                name: "path",
                suggestions: [
                    "https://"
                ]
            }
        },
        {
            name: "--ignore-engines",
            description: "ignore engines check",
        },
        {
            name: "--ignore-optional",
            description: "ignore optional dependencies",
        },
        {
            name: "--ignore-platform",
            description: "ignore platform checks",
        },
        {
            name: "--ignore-scripts",
            description: "don't run lifecycle scripts",
        },
        {
            name: "--json",
            description: "format Yarn log messages as lines of JSON (see jsonlines.org)",
        },
        {
            name: "--link-duplicates",
            description: "create hardlinks to the repeated modules in node_modules",
        },
        {
            name: "--link-folder",
            description: "specify a custom folder to store global links",
            args: {
                template: "folders"
            }
        },
        {
            name: "--modules-folder",
            description: "rather than installing modules into the node_modules folder relative to the cwd, output them here",
            args: {
                template: "folders"
            }
        },
        {
            name: "--mutex",
            description: "use a mutex to ensure only one yarn instance is executing",
            args: [
                {
                    name: "type",
                    optional: false,
                    suggestions: [],
                },
                {
                    name: "specifier",
                    optional: true,
                    suggestions: [
                        ":"
                    ],
                },
            ]
        },
        {
            name: "--network-concurrency",
            description: "maximum number of concurrent network requests",
            args: [
                {
                    name: "number",
                    optional: false
                }
            ]
        },
        {
            name: "--network-timeout",
            description: "TCP timeout for network requests",
            args: [
                {
                    name: "milliseconds",
                    optional: false
                }
            ]
        },
        {
            name: "--no-bin-links",
            description: "don't generate bin links when setting up packages",
        },
        {
            name: "--no-default-rc",
            description: "prevent Yarn from automatically detecting yarnrc and npmrc files",
        },
        {
            name: "--no-lockfile",
            description: "don't read or generate a lockfile",
        },
        {
            name: "--non-interactive",
            description: "do not show interactive prompts",
        },
        {
            name: "--no-node-version-check",
            description: "do not warn when using a potentially unsupported Node version",
        },
        {
            name: "--no-progress",
            description: "disable progress bar",
        },
        {
            name: "--offline",
            description: "trigger an error if any required dependencies are not available in local cache",
        },
        {
            name: "--otp",
            description: "one-time password for two factor authentication",
            args: [
                {
                    name: "otpcode",
                    optional: false
                }
            ]
        },
        {
            name: "--prefer-offline",
            description: "use network only if dependencies are not available in local cache",
        },
        {
            name: "--preferred-cache-folder",
            description: "specify a custom folder to store the yarn cache if possible",
            args: {
                template: "folders"
            }
        },
        {
            name: ["--prod", "--production"],
            insertValue: "--prod",
            description: "",
            args : {}
        },
        {
            name: "--proxy",
            description: "",
            args: [
                {
                    name: "host",
                    optional: false
                }
            ]
        },
        {
            name: "--pure-lockfile",
            description: "don't generate a lockfile",
        },
        {
            name: "--registry",
            description: "override configuration registry",
            args: [
                {
                    name: "url",
                    optional: false
                }
            ]
        },
        {
            name: ["-s", "--silent"],
            insertValue: "-s",
            description: "skip Yarn console logs, other types of logs (script output) will be printed",
        },
        {
            name: "--scripts-prepend-node-path [bool]",
            description: "prepend the node executable dir to the PATH in scripts",
            args: {
                optional: true,
                suggestions: ["true", "false"]
            }
        },
        {
            name: "--skip-integrity-check",
            description: "run install without checking if node_modules is installed",
        },
        {
            name: "--strict-semver",
            description: "",
        },
        {
            name: "--update-checksums",
            description: "update package checksums from current repository",
        },
        {
            name: "--use-yarnrc <path>",
            insertValue: "--use-yarnrc ",
            description: "specifies a yarnrc file that Yarn should use (.yarnrc only, not .npmrc)",
            args: {
                template: "filepaths"
            }
        },
        {
            name: ["-v", "--version"],
            description: "output the version number",
        },
        {
            name: "--verbose",
            description: "output verbose messages on internal operations",
        },
        {
            name: ["-h", "--help"],
            description: "output usage information",
        },
    ],
    subcommands: [
        {
            name: "add",
            description: "Installs a package and any packages that it depends on.",
            options: [
                {
                    name: ["-W", "--ignore-workspace-root-check"],
                    description: "required to run yarn add inside a workspace root",
                },
                {
                    name: ["-D", "--dev"],
                    description: "save package to your `devDependencies`",
                },
                {
                    name: ["-P", "--peer"],
                    description: "save package to your `peerDependencies`",
                },
                {
                    name: ["-O", "--optional"],
                    description: "save package to your `optionalDependencies`",
                },
                {
                    name: ["-E", "--exact"],
                    description: "install exact version",
                },
                {
                    name: ["-T", "--tilde"],
                    description: "install most recent release with the same minor version",
                },
                {
                    name: ["-A", "--audit"],
                    description: "Run vulnerability audit on installed packages",
                },
                {
                    name: ["-h", "--help"],
                    description: "output usage information",
                },
            ]
        },
        {
            name: "audit",
            description: "",
            options: [
                {
                    name: "--summary",
                    description: "Only print the summary.",
                },
                {
                    name: "--groups <group_name> [<group_name> ...]",
                    insertValue: "--groups ",
                    description: "Only audit dependencies from listed groups. Default: devDependencies, dependencies, optionalDependencies",
                    args: {
                        name: "group_name",
                        variadic: true,
                    }
                },
                {
                    name: "--level <severity>",
                    insertValue: "--level ",
                    description: "Only print advisories with severity greater than or equal to one of the following: info|low|moderate|high|critical. Default: info",
                    args: {
                        name: "severity",
                        suggestions: ["info", "low", "moderate", "high", "critical"],
                    }
                },
                {
                    name: ["-h", "--help"],
                    description: "output usage information",
                },
            ]
        },
        {
            name: "autoclean",
            description: "",
            options: [
                {
                    name: ["-h", "--help"],
                    description: "output usage information",
                },
            ]
        },
        {
            name: "bin",
            description: "",
            options: [
                {
                    name: ["-h", "--help"],
                    description: "output usage information",
                },
            ]
        },
        {
            name: "cache",
            description: "",
            options: [
                {
                    name: "--pattern [pattern]",
                    insertValue: "--pattern ",
                    description: "filter cached packages by pattern",
                },
                {
                    name: ["-h", "--help"],
                    description: "output usage information",
                },
            ]
        },
        {
            name: "config",
            description: "",
            options: [
                {
                    name: ["-h", "--help"],
                    description: "output usage information",
                },
            ]
        },
        {
            name: "create",
            description: "",
            options: [
                {
                    name: ["-h", "--help"],
                    description: "output usage information",
                },
            ]
        },
        {
            name: "exec",
            description: "",
            options: [
                {
                    name: ["-h", "--help"],
                    description: "output usage information",
                },
            ]
        },
        {
            name: "generate-lock-entry",
            description: "",
            options: [
                {
                    name: "--use-manifest <file>",
                    insertValue: "--use-manifest ",
                    description: "Specify which manifest file to use for generating lock entry",
                    args: {
                        template: "filepaths"
                    }
                },
                {
                    name: "--resolved <file>#hash",
                    insertValue: "--resolved ",
                    description: "Use resolved archive (*.tgz) and hash",
                    args: {
                        template: "filepaths"
                    }
                },
            ]
        },
    ]
}