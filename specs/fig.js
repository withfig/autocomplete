var completionSpec = {
  name: "fig",
  description: "Autocomplete for your terminal",
  subcommands: [


    { name: "source", description: "(re)connect fig to the current shell session" },
    { name: "update", description: "Update Fig's autocompletion specs" },
    {
      name: "uninstall", description: "Uninstall a completion spec",
      args: {
        generators: {
          script: "\ls -1ap ~/.fig/autocomplete",
          splitOn: "\n"
        }
      }
    },
    { name: "invite", description: "share Fig with a teammate ⭐" },
    {
      name: "report",
      displayName: "Report an Issue",
      insertValue: "report '{cursor}'",
      description: "Report an issue",
      args: {
        name: "msg",
        description: "What is the bug? How do we reproduce?"
      }
    },

    { name: "tweet", description: "Tweet about Fig", icon: "https://abs.twimg.com/responsive-web/client-web-legacy/icon-ios.b1fc7275.png" },
    { name: "docs", description: "Open Fig's docs" },
    { name: "list", description: "List all available completion specs" },
    { name: "onboarding", description: "Re-run Fig's onboarding" }
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

