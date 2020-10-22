var completionSpec = {
  name: "fig",
  description: "Autocomplete for your terminal",
  subcommands: [
    { name: "update", description: "Update Fig's autocompletion specs" },

    {
      name: "invite",
      description: "share Fig with a teammate ⭐",
      args: {
        name: "Email",
        description: "Email address of the user you want to invite",
        variadic: true, // default is false
        staticSuggestions: [
          {
            name: "<email>",
            insertValue: " ",
            description: "Input a list of emails separated by spaces"
          }
        ]
      }
    },

    {
      name: "feedback", description: "Send feedback Fig's founders",

      options: [
        {
          name: ["-m", "--message"],
          insertValue: "-m '{cursor}'",
          description: "Your message to send to Fig",
          args: {},
        },
      ]
    },
    { name: "docs", description: "Build your own completion spec" },

    // { name: "dir", description: "browse your file system" },
    // { name: "curl", description: "build http requests" },
    // {
    //   name: "git", description: "a lightweight UI for git",
    //   subcommands: [{ name: "diff", description: "GUI for git diff" }]
    // },
    // { name: "sftp", description: "browse files on remote servers" },
    // { name: "psql", description: "view and query Postgres databases" },
    // { name: "monitor", description: "visualize CPU usage by process" },
    // { name: "readme", description: "preview markdown documents", args: { templateSuggestions: ["files"] } },

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

