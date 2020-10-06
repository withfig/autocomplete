var completionSpec = {
    name: "fig",
    type: "root",
    description: "Visual shortcuts for the terminal",
    arg: {
      staticSuggestions: [
          {
            type: "option",
            name: ["↪ quicksearch"],
            insertValue: "\n",
            description: "Search apps & runbooks",
            arg: {},
            children: []
          },
          {
            type: "option",
            name: ["-h","--help"],
            insertValue: "--help",
            description: "Overview of Fig CLI",
            arg: {},
            children: []
          },
          {
            type: "option",
            name: ["--version"],
            insertValue: "--version",
            description: "Version",
            arg: {},
            children: []
          }
        ],
        shellSuggestions: {
          cmd: `ls -1 ~/run | grep ".run" | sed 's/.run//'`,
          splitOn: "\n",

        }
    },
    children: [
        {
            type: "subcommand",
            name: "invite",
            insertValue: "invite ",
            description: "share Fig with a teammate ⭐",
            arg: {
              takesInput: true, // default is optional
              variadic: true, // default is false
              staticSuggestions: [
                {
                      type: "option",
                      name: ["<email>"],
                      insertValue: " ",
                      description: "Send invite to...",
                      arg: {},
                      children: []
                  }
              ]
            }
        },

        { type: "subcommand", name: "dir", insertValue: "dir", description: "browse your file system" },
        { type: "subcommand", name: "curl", insertValue: "curl", description: "build http requests" },
        { type: "subcommand", name: "git", insertValue: "git", description: "a lightweight UI for git",
          children: [ { type: "subcommand", name: "diff", insertValue: "diff", description: "GUI for git diff" } ] },

        { type: "subcommand", name: "sftp", insertValue: "sftp", description: "browse files on remote servers" },
        { type: "subcommand", name: "psql", insertValue: "psql", description: "view and query Postgres databases" },
        { type: "subcommand", name: "monitor", insertValue: "monitor", description: "visualize CPU usage by process" },
        { type: "subcommand", name: "readme", insertValue: "readme", description: "preview markdown documents", args: { templateSuggestions: ["files"]} },

    ]
}

