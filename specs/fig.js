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
        variadic: true,
        suggestions: [
          {
            name: "<email>",
            insertValue: " ",
            description: "Email to invite"
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
    { name: "source", description: "(re)connect fig to the current shell session" },
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

