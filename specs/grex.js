var completionSpec = {
  name: "grex",
  description: "Command-line tool for generating regular expressions from user-provided test cases",
  options: [
    {
      name: ["-d", "--digits"],
      description: "Converts any Unicode decimal digit to \\d"
    },
    {
      name: ["-D", "--non-digits"],
      description: "Converts any character which is not a Unicode decimal digit to \\D"
    },
    {
      name: ["-s", "--spaces"],
      description: "Converts any Unicode whitespace character to \\s"
    },
    {
      name: ["-S", "--non-spaces"],
      description: "Converts any character which is not a Unicode whitespace character to \\S"
    },
    {
      name: ["-w", "--words"],
      description: "Converts any Unicode word character to \\w"
    },
    {
      name: ["-W", "--non-words"],
      description: "Converts any character which is not a Unicode word character to \\W"
    },
    {
      name: ["-r", "--repetitions"],
      description: "Detects repeated non-overlapping substrings and converts them to {min,max} quantifier notation"
    },
    {
      name: ["-e", "--escape"],
      description: "Replaces all non-ASCII characters with unicode escape sequences"
    },
    {
      name: ["--with-surrogates"],
      description: "Converts astral code points to surrogate pairs if --escape is set"
    },
    {
      name: ["-i", "--ignore-case"],
      description: "Performs case-insensitive matching, letters match both upper and lower case"
    },
    {
      name: ["-g", "--capture-groups"],
      description: "Replaces non-capturing groups by capturing ones"
    },
    {
      name: ["-c", "--colorize"],
      description: "Provides syntax highlighting for the resulting regular expression"
    },
    {
      name: ["-h", "--help"],
      description: "Prints help information"
    },
    {
      name: ["-v", "--version"],
      description: "Prints version information"
    },
    {
      name: ["-f", "--file"],
      description: "Reads test cases on separate lines from a file",
      args: {
        template: "filepaths"
      }
    },
    {
      name: ["--min-repetitions"],
      description: "Specifies the minimum quantity of substring repetitions to be converted if --repetitions is set [default: 1]",
      args: [
        {
          name: "QUANTITY",
          suggestions: [
            { name: "1", icon: "🔢" },
            { name: "2", icon: "🔢" },
            { name: "3", icon: "🔢" },
            { name: "4", icon: "🔢" },
            { name: "5", icon: "🔢" },
            { name: "6", icon: "🔢" },
            { name: "7", icon: "🔢" },
            { name: "8", icon: "🔢" },
            { name: "9", icon: "🔢" },
            { name: "10", icon: "🔢" }
          ]
        }
      ]
    },
    {
      name: ["--min-substring-length"],
      description: "Specifies the minimum length a repeated substring must have in order to be converted if --repetitions is set [default: 1]",
      args: [
        {
          name: "LENGTH",
          suggestions: [
            { name: "1", icon: "🔢" },
            { name: "2", icon: "🔢" },
            { name: "3", icon: "🔢" },
            { name: "4", icon: "🔢" },
            { name: "5", icon: "🔢" },
            { name: "6", icon: "🔢" },
            { name: "7", icon: "🔢" },
            { name: "8", icon: "🔢" },
            { name: "9", icon: "🔢" },
            { name: "10", icon: "🔢" }
          ]
        }
      ]
    }
  ]
}
