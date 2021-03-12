var completionSpec = {
  name: "fig",
  description: "Autocomplete for your terminal",
  subcommands: [


    { name: "source", description: "(re)connect fig to the current shell session" },
    { name: "update", description: "update completion specs" },
    {
      name: "uninstall", description: "uninstall a completion spec",
      args: {
        name: "completionSpec",
        description: "Completion spec to uninstall",
        generators: {
          script: "\ls -1ap ~/.fig/autocomplete",
          splitOn: "\n"
        }
      }
    },
    { name: "invite", description: "share Fig with a teammate ⭐" },
    { name: "report", description: "report an issue" },
    { name: "tweet", description: "tweet about Fig", icon: "https://abs.twimg.com/responsive-web/client-web-legacy/icon-ios.b1fc7275.png" },
    { name: "docs", description: "view docs in browser" },
    { name: "list", description: "list all available completion specs" },
    { name: "onboarding", description: "re-run Fig's onboarding" }
  ],

  options: [
    {
      name: ["-h", "--help"],
      description: "Overview of Fig CLI"
    },
    {
      name: ["--version"],
      description: "The current Fig version",
    }
  ]
}

