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
        { name: "install",     description: "Install a formula" }
    ],
    options: [
    {
      name: ["--version"],
      description: "The current Homebrew version",
    }
  ]
}
