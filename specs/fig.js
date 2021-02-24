var completionSpec = {
  name: "fig",
  description: "Autocomplete for your terminal",
  subcommands: [


    { name: "source", description: "(re)connect fig to the current shell session" },
    { name: "update", description: "update completion specs" },
    {
      name: "uninstall", description: "uninstall a completion spec",
      args: {
        name: "spec",
        description: "The CLI completion spec to remove",
        generators: {
          script: "\ls -1Ap ~/.fig/autocomplete",
          postProcess: (data) => {
            console.log(data)
            out = data.split("\n").reduce((acc, curr) => {
              if ([".gitignore", "README.md", "package.json", "package-lock.json"].includes(curr)) return acc
              else {
                acc.push({
                  name: curr.trim().split(".")[0],
                  icon: "fig://icon?type=box"
                })
                return acc
              }
            }, [])

            console.log(out)
            return out
          }
        }
      }
    },
    { name: "invite", description: "share Fig with a teammate ⭐" },
    { name: "report", description: "report an issue" },
    { name: "tweet", description: "tweet about Fig", icon: "fig://icon?type=twitter" },
    { name: "docs", description: "view docs in browser" },
    { name: "list", description: "list all available completion specs" },
    { name: "onboarding", description: "re-run Fig's onboarding" },
    { name: "diagnostic", description: "display diagnostic information" },
    {
      name: "team:upload", description: "share an completion spec with your team",
      args: {
        name: "spec",
        template: "filepaths"
      }
    },
    { name: "team:download", description: "download your team's spec" },
    { name: "integrations:iterm", description: "Install the iTerm tab integration" }

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

