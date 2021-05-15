var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var help = {
    name: ["-h", "--help"],
    description: "Display this help message",
};
var quiet = {
    name: ["-q", "--quiet"],
    description: "Do not output any message",
};
var verbose = {
    name: ["-v", "--verbose"],
    description: "Increase the verbosity of messages",
};
var vverbose = {
    name: "-vv",
    description: "More verbose output",
};
var vvverbose = {
    name: "-vvv",
    description: "Most verbose output for debug",
};
var version = {
    name: ["-V", "--version"],
    description: "Display this application version",
};
var ansi = {
    name: "--ansi",
    description: "Force ANSI output",
};
var noAnsi = {
    name: "--no-ansi",
    description: "Disable ANSI output",
};
var noInteraction = {
    name: ["-n", "--no-interaction"],
    description: "Do not ask any interactive question",
};
var globalOptions = [
    help,
    verbose,
    vverbose,
    vvverbose,
    version,
    ansi,
    noAnsi,
    noInteraction,
];
var completionSpec = {
    name: "poetry",
    description: "Python package manager",
    subcommands: [
        {
            name: "about",
            description: "Show information about Poetry",
            options: __spreadArray([], globalOptions),
        },
        {
            name: "add",
            description: "Adds a new dependency to pyproject.toml",
            args: {
                name: "dependency",
                description: "Package to add",
            },
            options: __spreadArray(__spreadArray([], globalOptions), [
                {
                    name: ["-D", "--dev"],
                    description: "Add as a development dependency",
                },
                {
                    name: ["-E", "--extras"],
                    description: "Extras to activate for the dependency",
                    args: {
                        name: "extras",
                        description: "Extras",
                    },
                },
                {
                    name: "--optional",
                    description: "Add as an optional dependency",
                },
                {
                    name: "--dry-run",
                    description: "Output the operations but do not execute anything (implicitly enables --verbose)",
                },
                {
                    name: "--lock",
                    description: "Do not perform operations (only update the lockfile)",
                },
            ]),
        },
        {
            name: "build",
            description: "Builds a package, as a tarball and a wheel by default",
            options: __spreadArray(__spreadArray([], globalOptions), [
                {
                    name: ["-f", "--format"],
                    description: "Limit the format to either sdist or wheel",
                    args: [
                        {
                            name: "format",
                            suggestions: [
                                {
                                    name: "sdist",
                                    description: "Use sdist format",
                                },
                                {
                                    name: "wheel",
                                    description: "Use wheel format",
                                },
                            ],
                        },
                    ],
                },
            ]),
        },
        {
            name: "check",
            description: "Checks the validity of the pyproject.toml file",
            options: __spreadArray([], globalOptions),
        },
        {
            name: "config",
            description: "Manages configuration settings",
            options: __spreadArray(__spreadArray([], globalOptions), [
                {
                    name: "--list",
                    description: "List configuration settings",
                },
                {
                    name: "--unset",
                    description: "Unset configuration setting",
                    args: {
                        name: "key",
                        description: "Setting key to remove",
                    },
                },
                {
                    name: "--local",
                    description: "Set/Get from the project's local configuration",
                },
            ]),
            args: [
                {
                    name: "key",
                    description: "Setting key",
                    suggestions: [
                        {
                            name: "cache-dir",
                            description: "The path to the cache directory used by Poetry",
                        },
                        {
                            name: "virtualenvs.create",
                            description: "Create a new virtualenv if one doesn't already exist",
                        },
                        {
                            name: "virtualenvs.in-project",
                            description: "Create the virtualenv inside the project's root directory",
                        },
                        {
                            name: "virtualenvs.path",
                            description: "Directory where virtual environments will be created",
                        },
                        {
                            name: "repositories.{name}",
                            description: "Set a new alternative repository",
                            insertValue: "repositories.",
                        },
                    ],
                },
                {
                    name: "value",
                    description: "Setting value",
                },
            ],
        },
        {
            name: "debug",
            description: "Debug various elements of Peotry",
            options: __spreadArray([], globalOptions),
        },
        {
            name: "env",
            description: "Interact with Poetry's project environments",
            subcommands: [
                {
                    name: "info",
                    description: "Displays information about the current environment",
                    options: [
                        {
                            name: ["-p", "--path"],
                            description: "Only desplay the environment's path",
                        },
                    ],
                },
                {
                    name: "list",
                    description: "Lists all virtualenvs associated with the current project",
                    options: [
                        {
                            name: "--full-path",
                            description: "Output the full paths of the virtualenvs",
                        },
                    ],
                },
                {
                    name: "remove",
                    description: "Removes a specific virtualenv associated with the project",
                    args: {
                        name: "python",
                        description: "The python executable to remove the virtualenv for",
                    },
                },
                {
                    name: "use",
                    description: "Activates or creates a new virtualenv for the current project",
                    args: {
                        name: "python",
                        description: "The python executable to use",
                    },
                },
            ],
            options: __spreadArray([], globalOptions),
        },
        {
            name: "export",
            description: "Exports the lock file to alternative formats",
            options: __spreadArray(__spreadArray([], globalOptions), [
                {
                    name: ["-f", "--format"],
                    description: "Format to export to",
                    args: {
                        name: "format",
                        description: "Export format",
                        suggestions: ["requirements.txt"],
                    },
                },
                {
                    name: ["-o", "--output"],
                    description: "The name of the output file",
                    args: {
                        name: "filename",
                        description: "Output file name",
                        suggestions: ["requirements.txt"],
                    },
                },
                {
                    name: "--without-hashes",
                    description: "Exclude hashes from the exported file",
                },
                {
                    name: "--dev",
                    description: "Include development dependencies",
                },
                {
                    name: ["-E", "--extras"],
                    description: "Extra sets of dependencies to include",
                    args: {
                        name: "extras",
                        description: "Extras",
                    },
                },
                {
                    name: "--with-credentials",
                    description: "Include credentials for extra indices",
                },
            ]),
        },
        {
            name: "help",
            description: "Display the manual of a command",
        },
        {
            name: "init",
            description: "Creates a basic pyproject.toml file in the current directory",
            options: __spreadArray(__spreadArray([], globalOptions), [
                {
                    name: "--name",
                    description: "Name of the package",
                    args: {
                        name: "name",
                    },
                },
                {
                    name: "--description",
                    description: "Description of the package",
                    args: {
                        name: "description",
                    },
                },
                {
                    name: "--author",
                    description: "Author name of the package",
                    args: {
                        name: "author",
                    },
                },
                {
                    name: "--python",
                    description: "Compatible Python versions",
                    args: {
                        name: "python version",
                    },
                },
                {
                    name: "--dependency",
                    description: "Package to require, with an optional version constraint",
                    args: {
                        name: "dependency",
                    },
                },
                {
                    name: "--dev-dependency",
                    description: "Package to require for development, with an optional version constraint",
                    args: {
                        name: "dev dependency",
                    },
                },
                {
                    name: ["-l", "--license"],
                    description: "License of the package",
                    args: {
                        name: "license",
                    },
                },
            ]),
        },
        {
            name: "install",
            description: "Installs the project dependencies",
            options: __spreadArray(__spreadArray([], globalOptions), [
                {
                    name: "--no-dev",
                    description: "Do not install the development dependencies",
                },
                {
                    name: "--no-root",
                    description: "Do not install the root package",
                },
                {
                    name: "--dry-run",
                    description: "Output the operations but do not execute anything",
                },
                {
                    name: "--remove-untracked",
                    description: "Removes packages not present in the lock file",
                },
                {
                    name: ["-E", "--extras"],
                    description: "Extra sets of dependencies to install",
                    args: {
                        name: "extras",
                        description: "Extras",
                    },
                },
            ]),
        },
        {
            name: "lock",
            description: "Locks the project dependencies",
            options: __spreadArray(__spreadArray([], globalOptions), [
                {
                    name: "--no-update",
                    description: "Do not update locked versions, only refresh lock file",
                },
            ]),
        },
        {
            name: "new",
            description: "Creates a new Python project at specified path",
            options: __spreadArray(__spreadArray([], globalOptions), [
                {
                    name: "--name",
                    description: "Set the resulting package name",
                    args: {
                        name: "package name",
                    },
                },
                {
                    name: "--src",
                    description: "Use the src layout for the project",
                },
            ]),
            args: {
                name: "path",
                description: "The path to create the project at",
            },
        },
        {
            name: "publish",
            description: "Publishes a package to a remote repository",
            options: __spreadArray(__spreadArray([], globalOptions), [
                {
                    name: ["-r", "--repository"],
                    description: "The repository to publish the package to",
                    args: {
                        name: "repository",
                    },
                },
                {
                    name: ["-u", "--username"],
                    description: "The username to access the repository",
                    args: {
                        name: "username",
                    },
                },
                {
                    name: ["-p", "--password"],
                    description: "The password to access the repository",
                    args: {
                        name: "password",
                    },
                },
                {
                    name: "--cert",
                    description: "Certificate authority to access the repository",
                    args: {
                        name: "certificate authority",
                    },
                },
                {
                    name: "--client-cert",
                    description: "Client certificate to access the repository",
                    args: {
                        name: "client certificate",
                    },
                },
                {
                    name: "--build",
                    description: "Build the package before publishing",
                },
                {
                    name: "--dry-run",
                    description: "Perform all actions except upload the package",
                },
            ]),
        },
        {
            name: "remove",
            description: "Removes a package from the project dependencies",
            options: __spreadArray(__spreadArray([], globalOptions), [
                {
                    name: ["-D", "--dev"],
                    description: "Remove a package from the development dependencies",
                },
                {
                    name: "--dry-run",
                    description: "Output the operations but do not execute anything",
                },
            ]),
            args: {
                name: "dependency",
                description: "Package to remove",
            },
        },
        {
            name: "run",
            description: "Runs a command in the appropriate environment",
            args: {
                name: "command or script",
            },
        },
        {
            name: "search",
            description: "Searches for packages on remote repositories",
            options: __spreadArray([], globalOptions),
            args: {
                name: "token",
                description: "The tokens to search for",
            },
        },
        {
            name: "self",
            description: "Interact with Poetry directly",
            options: __spreadArray([], globalOptions),
            subcommands: [
                {
                    name: "update",
                    description: "Updates Poetry to the latest version",
                    options: __spreadArray(__spreadArray([], globalOptions), [
                        {
                            name: "--preview",
                            description: "Install prereleases",
                        },
                    ]),
                    args: {
                        name: "version",
                        description: "The version to update to",
                    },
                },
            ],
        },
        {
            name: "shell",
            description: "Spawns a shell within the virtual environment",
            options: __spreadArray([], globalOptions),
        },
        {
            name: "show",
            description: "Shows information about packages",
            options: __spreadArray(__spreadArray([], globalOptions), [
                {
                    name: "--no-dev",
                    description: "Do not list the development dependencies",
                },
                {
                    name: ["-t", "--tree"],
                    description: "List the dependencies as a tree",
                },
                {
                    name: ["-l", "--latest"],
                    description: "Show the latest version",
                },
                {
                    name: ["-o", "--outdated"],
                    description: "Show the latest version but only for packages that are outdated",
                },
                {
                    name: ["-a", "--all"],
                    description: "Show all packages",
                },
            ]),
            args: {
                name: "dependency",
                description: "Package to inspect",
            },
        },
        {
            name: "update",
            description: "Update the dependencies as according to the pyproject.toml file",
            options: __spreadArray(__spreadArray([], globalOptions), [
                {
                    name: "--no-dev",
                    description: "Do not update the development dependencies",
                },
                {
                    name: "--dry-run",
                    description: "Output the operations but do not execute anything",
                },
                {
                    name: "--lock",
                    description: "Do not perform operations",
                },
            ]),
            args: {
                name: "dependency",
                description: "Package to update",
            },
        },
        {
            name: "version",
            description: "Shows the version of the project or bumps it when a valid bump rule is provided",
            options: __spreadArray(__spreadArray([], globalOptions), [
                {
                    name: ["-s", "--short"],
                    description: "Output the version number only",
                },
            ]),
            args: {
                name: "version",
                description: "The version number or the rule to update the version",
            },
        },
    ],
    options: __spreadArray([], globalOptions),
    // Only uncomment if poetry takes an argument
    // args: {}
};

