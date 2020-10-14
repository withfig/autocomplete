var completionSpec = {
  name: "fig",
  description: "Visual shortcuts for the terminal",
  subcommands: [
    {
      name: "invite",
      description: "share Fig with a teammate ⭐",
      args: {
        name: "Email",
        description: "Email address of the user you want to invite",
        variadic: true, // default is false
        staticSuggestions: [
          {
            name: "brendan@withfig.com",
            description: ""
          }
        ]
      }
    },

    { name: "dir", description: "browse your file system" },
    { name: "curl", description: "build http requests" },
    {
      name: "git", description: "a lightweight UI for git",
      subcommands: [{ name: "diff", description: "GUI for git diff" }]
    },
    { name: "sftp", description: "browse files on remote servers" },
    { name: "psql", description: "view and query Postgres databases" },
    { name: "monitor", description: "visualize CPU usage by process" },
    { name: "readme", description: "preview markdown documents", args: { templateSuggestions: ["files"] } },

  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Overview of Fig CLI",
      args: [{}, {}]
    },
    {
      name: ["--version"],
      description: "Version",
      args: [{name: "test", description: "this is a file"}, {name: "2", description: "nice"}, {name: "test", description: "number 3"}]
    }
  ],
  shortcuts: [
    {
      name: ["↪ quicksearch"],
      insertValue: "\n",
      description: "Search apps & runbooks",
    },
  ],
  args: {
    shellSuggestions: {
      cmd: `ls -1 ~/run | grep ".run" | sed 's/.run//'`,
      splitOn: "\n",
    }
  },
}

