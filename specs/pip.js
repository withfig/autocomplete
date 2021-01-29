var listPackages = {
    script: "pip list",
    postProcess: function(out) {
        var lines = out.split('\n');
        var packages = [];
        for(var i = 2; i < lines.length; i++) {
            packages.push({
                name: lines[i],
                icon: "🐍"
            })
        }
        return packages;
    }
}


var completionSpec = {
    name: "pip",
    description: "Python package manager",
    args: {},
    options: [
        {
            name: ["-h, --help"], 
            description: "Show help." 
        },
        {
            name: ["--isolated"], 
            description: "Run pip in an isolated mode, ignoring environment variables and user configuration." 
        },
        {
            name: ["-v, --verbose"], 
            description: "Give more output. Option is additive, and can be used up to 3 times." 
        },
        {
            name: ["-V, --version"], 
            description: "Show version and exit." 
        },
        {
            name: ["-q, --quiet"], 
            description: "Give less output. Option is additive, and can be used up to 3 times (corresponding to WARNING, ERROR, and CRITICAL logging levels)." 
        },
        {
            name: ["--log"],
            description: "Path to a verbose appending log.",
            args: {
                name: "path",
                template: "filepaths"
            }
        },
        {
            name: ["--no-input"], 
            description: "Disable prompting for input." 
        },
        {
            name: ["--proxy"],
            description: "Specify a proxy in the form [user:passwd@]proxy.server:port.",
            args: {
                name: "proxy",
                description: "[user:passwd@]proxy.server:port"
            }
        },
        {
            name: ["--retries"], 
            description: "Maximum number of retries each connection should attempt (default 5 times).",
            args: {
                name: "retries"
            }
        },
        {
            name: ["--timeout"],
            description: "Set the socket timeout (default 15 seconds).",
            args: {
                name: "sec"
            }
        },
        {
            name: ["--exists-action"], 
            description: "Default action when a path already exists: (s)witch, (i)gnore, (w)ipe, (b)ackup, (a)bort.",
            args: {
                name: "action"
            }
        },
        {
            name: ["--trusted-host"],
            description: "Mark this host or host:port pair as trusted, even though it does not have valid or any HTTPS.",
            args: {
                name: "hostname"
            }
        },
        {
            name: ["--cert"],
            description: "Path to alternate CA bundle.",
            args: {
                name: "path",
                template: "filepaths"
            }
        },
        {
            name: ["--client-cert"],
            description: "Path to SSL client certificate, a single file containing the private key and the certificate in PEM format.",
            args: {
                name: "path",
                template: "filepaths"
            }
        },
        {
            name: ["--cache-dir"], 
            description: "Store the cache data in a directory.",
            args: {
                name: "dir",
                template: "folders"
            } 
        },
        {
            name: ["--no-cache-dir"], 
            description: "Disable the cache." 
        },
        {
            name: ["--disable-pip-version-check"], 
            description: "Don't periodically check PyPI to determine whether a new version of pip is available for download. Implied with --no-index." 
        },
        {
            name: ["--no-color"], 
            description: "Suppress colored output."
        },
        {
            name: ["--no-python-version-warning"], 
            description: "Silence deprecation warnings for upcoming unsupported Pythons."
        },
        {
            name: ["--use-feature"],
            description: "Enable new functionality, that may be backward incompatible.",
            args: {
                name: "feature"
            }
        },
        {
            name: ["--use-deprecated"], 
            description: "Enable deprecated functionality, that will be removed in the future.",
            args: {
                name: "feature"
            }
        },
    ],
    subcommands: [
        {
            name: "install", 
            description: "Install packages",
            args: {
                name: "package",
                description: "Package to install"
            },
            options: [
                {
                    name: ["--compile"],
                    description: "Do not compile Python source files to bytecode"
                },
                {
                    name: ["-U", "--upgrade"],
                    description: "Upgrade all specified packages to the newest available version."
                },
                {
                    name: ["--upgrade-strategy"],
                    description: "Determines how dependency upgrading should be handled [default: only-if-needed]."
                },
                {
                    name: ["--no-deps"],
                    description: "Don’t install package dependencies."
                },
                {
                    name: ["--root"],
                    description: "Install everything relative to this alternate root directory.",
                    args: {
                        template: "folders"
                    }
                },
                {
                    name: ["--require-hashes"],
                    description: "Require a hash to check each requirement against, for repeatable installs."
                },
                {
                    name: ["--prefix"],
                    description: "Installation prefix where lib, bin and other top-level folders are placed",
                    args: {
                        template: "folders"
                    }
                },
                {
                    name: ["-t", "--target"],
                    description: "Install packages into <dir>.",
                    args: {
                        name: "dir",
                        template: "folders"
                    }
                },
                {
                    name: ["--no-compile"],
                    description: "Do not compile Python source files to bytecode"
                },
                {
                    name: ["--install-option"],
                    description: "Extra arguments to be supplied to the setup.py install command"
                },
                {
                    name: ["--no-build-isolation"],
                    description: "Disable isolation when building a modern source distribution."
                },
                {
                    name: ["-c", "--constraint"],
                    description: "Constrain versions using the given constraints file. This option can be used multiple times."
                },
                {
                    name: ["-r", "--requirement"],
                    description: "Install from the given requirements file. This option can be used multiple times."
                },
                {
                    name: ["--no-deps"],
                    description: "Don’t install package dependencies."
                },
                {
                    name: ["--global-option"],
                    description: "Extra global options to be supplied to the setup.py call before the install command."
                },
                {
                    name: ["--no-binary"],
                    description: "Constrain versions using the given constraints file. This option can be used multiple times."
                },
                {
                    name: ["--only-binary"],
                    description: "Do not use source packages",
                    args: {
                        suggestions: [
                            {
                                name: ":all:",
                                description: "Disable all source packages"
                            },
                            {
                                name: ":none:",
                                description: "Empty the set"
                            }
                        ]
                    }
                },
                {
                    name: ["--prefer-binary"],
                    description: "Prefer older binary packages over newer source packages."
                },
                {
                    name: ["--src"],
                    description: "Directory to check out editable projects into.",
                    args: {
                        name: "source folder",
                        template: "folders"
                    }
                },
                {
                    name: ["--pre"],
                    description: "Include pre-release and development versions. By default, pip only finds stable versions."
                },
                {
                    name: ["--require-hashes"],
                    description: "Require a hash to check each requirement against, for repeatable installs."
                },
                {
                    name: ["--progress-bar"],
                    description: "Specify type of progress to be displayed",
                    args: {
                        suggestions: [
                            { name: "off" },
                            { name: "on" },
                            { name: "ascii" },
                            { name: "pretty" },
                            { name: "emoji" }
                        ]
                    }
                },
                {
                    name: ["--no-build-isolation"],
                    description: "Disable isolation when building a modern source distribution."
                },
                {
                    name: ["--use-pep517"],
                    description: "Use PEP 517 for building source distributions"
                },
                {
                    name: ["--ignore-requires-python"],
                    description: "Ignore the Requires-Python information."
                },
                {
                    name: ["-d", "--dest"],
                    description: "Require a hash to check each requirement against, for repeatable installs.",
                    args: {
                        name: "dir",
                        template: "folders"
                    }
                },
                {
                    name: ["--platform"],
                    description: "Only use wheels compatible with platform.",
                    args: { name: "platform" }
                },
                {
                    name: ["--python-version"],
                    description: "The Python interpreter version to use for wheel and “Requires-Python” compatibility checks."
                },
                {
                    name: ["--implementation"],
                    description: "Only use wheels compatible with Python implementation",
                    args: {
                        name: "implementation"
                    }
                },
                {
                    name: ["--abi"],
                    description: "Only use wheels compatible with Python abi <abi>, e.g. ‘pypy_41’.",
                    args: {
                        name: "abi"
                    }
                },
                {
                    name: ["--no-clean"],
                    description: "Don’t clean up build directories."
                },
                {
                    name: ["-i", "--index-url"],
                    description: "Base URL of the Python Package Index",
                    args: {
                        name: "url"
                    }
                },
                {
                    name: ["--no-index"],
                    description: "Ignore package index (only looking at --find-links URLs instead)."
                },
                {
                    name: ["--extra-index-url"],
                    description: "Extra URLs of package indexes to use in addition to --index-url. Should follow the same rules as --index-url."
                },
                {
                    name: ["-f", "--find-links"],
                    description: "Look for archives in the directory listing",
                    args: {
                        name: "url",
                        template: "filepaths"
                    }
                }
            ]
        },
        {
            name: "download", 
            description: "Download packages",
            args: {
                name: "path",
                template: "filepaths"
            },
            options: [
                {
                    name: ["-c", "--constraint"],
                    description: "Constrain versions using the given constraints file. This option can be used multiple times."
                },
                {
                    name: ["-r", "--requirement"],
                    description: "Install from the given requirements file. This option can be used multiple times."
                },
                {
                    name: ["--no-deps"],
                    description: "Don’t install package dependencies."
                },
                {
                    name: ["--global-option"],
                    description: "Extra global options to be supplied to the setup.py call before the install command."
                },
                {
                    name: ["--no-binary"],
                    description: "Constrain versions using the given constraints file. This option can be used multiple times."
                },
                {
                    name: ["--only-binary"],
                    description: "Do not use source packages",
                    args: {
                        suggestions: [
                            {
                                name: ":all:",
                                description: "Disable all source packages"
                            },
                            {
                                name: ":none:",
                                description: "Empty the set"
                            }
                        ]
                    }
                },
                {
                    name: ["--prefer-binary"],
                    description: "Prefer older binary packages over newer source packages."
                },
                {
                    name: ["--src"],
                    description: "Directory to check out editable projects into.",
                    args: {
                        name: "source folder",
                        template: "folders"
                    }
                },
                {
                    name: ["--pre"],
                    description: "Include pre-release and development versions. By default, pip only finds stable versions."
                },
                {
                    name: ["--require-hashes"],
                    description: "Require a hash to check each requirement against, for repeatable installs."
                },
                {
                    name: ["--progress-bar"],
                    description: "Specify type of progress to be displayed",
                    args: {
                        suggestions: [
                            { name: "off" },
                            { name: "on" },
                            { name: "ascii" },
                            { name: "pretty" },
                            { name: "emoji" }
                        ]
                    }
                },
                {
                    name: ["--no-build-isolation"],
                    description: "Disable isolation when building a modern source distribution."
                },
                {
                    name: ["--use-pep517"],
                    description: "Use PEP 517 for building source distributions"
                },
                {
                    name: ["--ignore-requires-python"],
                    description: "Ignore the Requires-Python information."
                },
                {
                    name: ["-d", "--dest"],
                    description: "Require a hash to check each requirement against, for repeatable installs.",
                    args: {
                        name: "dir",
                        template: "folders"
                    }
                },
                {
                    name: ["--platform"],
                    description: "Only use wheels compatible with platform.",
                    args: { name: "platform" }
                },
                {
                    name: ["--python-version"],
                    description: "The Python interpreter version to use for wheel and “Requires-Python” compatibility checks."
                },
                {
                    name: ["--implementation"],
                    description: "Only use wheels compatible with Python implementation",
                    args: {
                        name: "implementation"
                    }
                },
                {
                    name: ["--abi"],
                    description: "Only use wheels compatible with Python abi <abi>, e.g. ‘pypy_41’.",
                    args: {
                        name: "abi"
                    }
                },
                {
                    name: ["--no-clean"],
                    description: "Don’t clean up build directories."
                },
                {
                    name: ["-i", "--index-url"],
                    description: "Base URL of the Python Package Index",
                    args: {
                        name: "url"
                    }
                },
                {
                    name: ["--no-index"],
                    description: "Ignore package index (only looking at --find-links URLs instead)."
                },
                {
                    name: ["--extra-index-url"],
                    description: "Extra URLs of package indexes to use in addition to --index-url. Should follow the same rules as --index-url."
                },
                {
                    name: ["-f", "--find-links"],
                    description: "Look for archives in the directory listing",
                    args: {
                        name: "url",
                        template: "filepaths"
                    }
                }
            ]
        },
        {
            name: "uninstall", 
            description: "Uninstall packages",
            args: {

            }
        },
        {
            name: "freeze", 
            description: "Output installed packages in requirements format.",
            options: [
                {
                    name: ["-r", "--requirement"],
                    description: "Use the order in the given requirements file and its comments when generating output."
                },
                {
                    name: ["-l", "--local"],
                    description: "If in a virtualenv that has global access, do not output globally-installed packages"
                },
                {
                    name: ["--user"],
                    description: "Only output packages installed in user-site."
                },
                {
                    name: ["--path"],
                    description: "Restrict to the specified installation path for listing packages (can be used multiple times)."
                },
                {
                    name: ["--all"],
                    description: "Do not skip these packages in the output: setuptools, distribute, pip, wheel"
                },
                {
                    name: ["--exclude-editable"],
                    description: "Exclude editable package from output"
                },
                {
                    name: ["--exclude"],
                    description: "Exclude specified package from the output",
                    args: {
                        name: "package",
                        geerators: listPackages
                    }
                }
            ]
        },
        {
            name: "list", 
            description: "List installed packages.",
            options: [
                {
                    name: ["-o", "--outdated"],
                    description: "List outdated packages"
                },
                {
                    name: ["-u", "--uptodate"],
                    description: "List uptodate packages"
                },
                {
                    name: ["-e", "--editable"],
                    description: "List editable projects."
                },
                {
                    name: ["-l", "--local"],
                    description: "If in a virtualenv that has global access, do not list globally-installed packages."
                },
                {
                    name: ["--user"],
                    description: "Only output packages installed in user-site"
                },
                {
                    name: ["--path"],
                    description: "Restrict to the specified installation path for listing packages (can be used multiple times).",
                    args: {
                        name: "path",
                        template: "filepaths"
                    }
                },
                {
                    name: ["--pre"],
                    description: "Include pre-release and development versions. By default, pip only finds stable versions."
                },
                {
                    name: ["--format"],
                    description: "Select the output format among: columns (default), freeze, or json"
                },
                {
                    name: ["--not-required"],
                    description: "List packages that are not dependencies of installed packages."
                },
                {
                    name: ["--exclude-editable"],
                    description: "Exclude editable package from output."
                },
                {
                    name: ["--include-editable"],
                    description: "Include editable package from output."
                },
                {
                    name: ["--exclude"],
                    description: "Exclude specified package from the output.",
                    args: {
                        name: "package",
                        generators: listPackages
                    }
                },
                {
                    name: ["-i", "--index-url"],
                    description: "Base URL of the Python Package Index (default https://pypi.org/simple).",
                    args: {}
                },
                {
                    name: ["--extra-index-url"],
                    description: "Include pre-release and development versions. By default, pip only finds stable versions."
                },
                {
                    name: ["--no-index"],
                    description: "Ignore package index (only looking at --find-links URLs instead)."
                },
                {
                    name: ["-f", "--find-links"],
                    description: "If a URL or path to an html file, then parse for links to archives such as sdist (.tar.gz) or wheel (.whl) files.",
                    args: {
                        name: "url"
                    }
                }
            ]
        },
        {
            name: "show", 
            description: "Show information about installed packages.",
            options: [
                {
                    name: ["-f", "--files"]
                }
            ]
        },
        {
            name: "check", 
            description: "Verify installed packages have compatible dependencies."
        },
        {
            name: "config", 
            description: "Manage local and global configuration.",
            options: [
                {
                    name: ["--editor"],
                    description: "Editor to use to edit the file. Uses VISUAL or EDITOR environment variables if not provided."
                },
                {
                    name: ["--global"],
                    description: "Use the system-wide configuration file only"
                },
                {
                    name: ["--user"],
                    description: "Use the user configuration file only"
                },
                {
                    name: ["--site"],
                    description: "Use the current environment configuration file only"
                }
            ]
        },
        {
            name: "search", 
            description: "Search PyPI for packages.",
            options: [
                {
                    name: ["-i", "--index"]
                }
            ]
        },
        {
            name: "cache", 
            description: "Inspect and manage pip's wheel cache."
        },
        {
            name: "wheel", 
            description: "Build wheels from your requirements."
        },
        {
            name: "hash", 
            description: "Compute hashes of package archives.",
            options: [
                {
                    name: ["-a", "--algorithm"],
                    description: "The hash algorithm to use",
                    args: {
                        suggestions: [
                            { name: "sha256" },
                            { name: "sha384" },
                            { name: "sha512" }
                        ]
                    }
                }
            ]
        },
        {
            name: "completion", 
            description: "A helper command used for command completion."
        },
        {
            name: "debug", 
            description: "Show information useful for debugging.",
            options: [
                {
                    name: ["--platform"],
                    description: "Only use wheels compatible with platform.",
                    args: {
                        name: "platform"
                    }
                },
                {
                    name: ["--python-version"],
                    description: "The Python interpreter version to use for wheel and “Requires-Python” compatibility checks.",
                    args: {
                        name: "python version"
                    }
                },
                {
                    name: ["--implementation"],
                    description: "Only use wheels compatible with Python implementation",
                    args: {
                        name: "implementation"
                    }
                },
                {
                    name: ["--platform"],
                    description: "Only use wheels compatible with platform.",
                    args: {
                        name: "platform"
                    }
                }
            ]
        },
        {
            name: "help",
            description: "Show help for commands."
        }
    ]
}
