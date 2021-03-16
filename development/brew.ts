const brewGenerators: Record<string, Fig.Generator> = {
    servicesgenerators: {
        script: "brew services list | sed -e 's/ .*//' | tail -n +2",
        postProcess: output => {
            const lines = output.split("\n");
            return lines.reduce<Fig.Suggestion[]>((acc, currentLine) => {
                if(lines.includes('unbound')) return acc;
                return acc.concat({
                    name: currentLine,
                    type: 'option'
                });
            }, [])
        }
    }
}

export const brewCompletionSpec: Fig.Spec = {
    name: "brew",
    description: "Package manager for macOS",
    subcommands: [
        { name: "list", description: "List all installed formulae" },
        { name: "leaves", description: "List installed formulae that are not dependencies of another installed formula" },
        { name: "doctor", description: "Check your system for potential problems" },
        { name: "info", description: "Display brief statistics for your Homebrew installation" },
        { name: "update", description: "Fetch the newest version of Homebrew and all formulae" },
        { name: "upgrade", description: "Upgrade outdated casks and outdated" },
        { name: "search", description: "Perform a substring search of cask tokens and formula names" },
        {
            name: "install",
            description: "Install <formula>",
            insertValue: "install ",
            args: {
                variadic: true,
                name: "formula",
                description: "Formula or cask to install",
                generators: {
                    script: "ls -1 /usr/local/Homebrew/Library/Taps/homebrew/homebrew-core/Formula /usr/local/Homebrew/Library/Taps/homebrew/homebrew-cask/Casks",
                    postProcess: function (out) {

                        return out.split('\n').map(formula => {
                            return {
                                name: formula.replace('.rb', ''),
                                description: "formula",
                                icon: "🍺",
                                priority: (formula[0] >= '0' && formula[0] <= '9') || formula[0] == '/' ? 0 : 100
                            }
                        })
                    }
                }
            }
        },

        {
            name: "uninstall",
            description: "Uninstall <formula>",
            args: {
                variadic: true,
                name: "formula",
                generators: {
                    script: "brew list -1 --formulae",
                    postProcess: function (out) {
                        return out.split('\n').map(formula => {
                            return { name: formula, icon: "🍺", description: "Installed formula" }
                        })
                    }
                },
            },
        },
        {
            name: "cask",
            insertValue: "cask ",
            description: "Homebrew Cask provides a friendly CLI workflow for the administration of macOS applications distributed as binaries.",
            subcommands: [
                {
                    name: "install",
                    insertValue: "install ",
                    description: "Installs the given cask",
                    args: {
                        name: "cask",
                        description: "Cask to install"
                    }
                },
                {
                    name: "uninstall",
                    insertValue: "uninstall ",
                    description: "Uninstalls the given cask",
                    args: {
                        variadic: true,
                        generators: {
                            script: "brew list -1 --cask",
                            postProcess: function (out) {
                                return out.split('\n').map(formula => {
                                    return { name: formula, icon: "🍺", description: "Installed formula" }
                                })
                            }
                        },
                    },
                }
            ]
        },
        {
            name: "services",
            description: "Manage background services with macOS\' launchctl(1) daemon manager.",
            options: [
                { name: ["-d", "--debug"], description: "Display any debugging information." },
                { name: ["-q", "--quiet"], description: "Suppress any warnings." },
                { name: ["-v", "--verbose"], description: "Make some output more verbose." },
                { name: ["-h", "--help"], description: "Get help with services command" },
            ],
            subcommands: [
                {
                    name: "cleanup",
                    insertValue: "cleanup",
                    description: "Remove all unused services."
                },
                {
                    name: "list",
                    insertValue: "list",
                    description: "List all services."
                },
                {
                    name: "run",
                    insertValue: "run ",
                    description: "Run the service formula without registering to launch at login (or boot).",
                    options: [
                        {
                            name: "--all",
                            insertValue: "--all",
                            description: "Start all services"
                        }
                    ],
                    args: {
                        variadic: true,
                        generators: generators.servicesGenerator
                    }
                },
                {
                    name: "start",
                    insertValue: "start ",
                    description: "Start the service formula immediately and register it to launch at login",
                    options: [
                        {
                            name: "--all",
                            insertValue: "--all",
                            description: "Start all services"
                        }
                    ],
                    args: {
                        variadic: true,
                        generators: generators.servicesGenerator
                    }
                },
                {
                    name: "stop",
                    insertValue: "stop ",
                    description: "Stop the service formula immediately and unregister it from launching at",
                    options: [
                        {
                            name: "--all",
                            insertValue: "--all",
                            description: "Start all services"
                        }
                    ],
                    args: {
                        variadic: true,
                        generators: generators.servicesGenerator
                    }
                },
                {
                    name: "restart",
                    insertValue: "restart ",
                    description: "Stop (if necessary) and start the service formula immediately and register it to launch at login (or boot).",
                    options: [
                        {
                            name: "--all",
                            insertValue: "--all",
                            description: "Start all services"
                        }
                    ],
                    args: {
                        variadic: true,
                        generators: generators.servicesGenerator
                    }
                }
            ]
        }
    ],
    options: [
        {
            name: ["--version"],
            description: "The current Homebrew version",
        }
    ]
}
