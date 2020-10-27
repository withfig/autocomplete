var completionSpec = {
    name: "brew",
    description: "Package manager for macOS",
    subcommands: [
        { name: "list",        description: "List all installed formulae" },
        { name: "leaves",      description: "List installed formulae that are not dependencies of another installed formula" },
        { name: "doctor",      description: "Check your system for potential problems" },
        { name: "info",        description: "Display brief statistics for your Homebrew installation" },
        { name: "update",      description: "Fetch the newest version of Homebrew and all formulae" },
        { name: "upgrade",     description: "Upgrade outdated casks and outdated" },
        { name: "search",      description: "Perform a substring search of cask tokens and formula names" },
        {
            name: "install",
            description: "Install <formula>",
            insertValue: "install ",
            arg: {
                name: "<formula>",
                insertValue: "",
                description: "Formula to install"
            }
        },

        {
            name: "uninstall",
            description: "Uninstall <formula>",
            args: {
                variadic: true,
                shellSuggestions: {
                    cmd: "brew list -1 --formulae",
                    postProcess: function (out) {
                        return out.split('\n').map(formula => {
                            return { name: formula, icon: "🍺", description: "Installed formula"}
                        })
                    }
                },
            },
        },
        {
            name: "cask",
            insertValue: "cask ",
            description: "Homebrew  Cask provides a friendly CLI workflow for the administration of macOS applications distributed as binaries.",
            subcommands:[
                {
                    name: "install <cask>",
                    insertValue: "install ",
                    description: "Installs the given cask",
                    args: {
                        name: "<cask>",
                        insertValue: "",
                        description: "Cask to install"
                    }
                },
                {
                    name: "uninstall <cask>",
                    insertValue: "uninstall ",
                    description: "Uninstalls the given cask",
                    args: {
                        shellSuggestions: {
                            cmd: "brew list -1 --cask",
                            splitOn: "\n",
                            postProcess: function (out) {
                                return out.split('\n').map(formula => {
                                    return { name: formula, icon: "🍺", description: "Installed cask" }
                                })
                            }
                        }
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
