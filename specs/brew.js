var completionSpec = {
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
                name: "<formula>",
                // insertValue: "",
                // description: "Formula to install"
                generator: {
                    script: "find /usr/local/Homebrew/ -type d -name \"Formula\" -exec ls -1 {} \\;",
                    postProcess: function (out) {
                        let unique = out.split('\n').reduce((acc, line) => {
                            acc[line.split("@")[0].replace('.rb', '')] = true
                            return acc
                        }, {})

                        return Object.keys(unique).map(formula => {
                            return {
                                name: formula,
                                description: "formula",
                                icon: "🍺"
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
                generator: {
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
            description: "Homebrew  Cask provides a friendly CLI workflow for the administration of macOS applications distributed as binaries.",
            subcommands: [
                {
                    name: "install",
                    insertValue: "install ",
                    description: "Installs the given cask",
                    args: {
                        name: "<cask>",
                        insertValue: "",
                        description: "Cask to install"
                    }
                },
                {
                    name: "uninstall",
                    insertValue: "uninstall ",
                    description: "Uninstalls the given cask",
                    args: {
                        variadic: true,
                        generator: {
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
        }
    ],
    options: [
        {
            name: ["--version"],
            description: "The current Homebrew version",
        }
    ]
}
