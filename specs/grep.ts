const grpCompletionSpec:Fig.Spec = {
    name: "grep",
    description: "Matches patterns in input text. Supports simple patterns and regular expressions.",
    args: [
        {
            name: "search pattern"
        },
        {
            name: "file",
            template: "filepaths"
        }
    ],
    options: [
        {
            name: ["-F"],
            description: "Search for an exact string",
            args: [
                {
                    name: "exact string"
                },
                {
                    name: "file",
                    template: "filepaths"
                }
            ]
        },
        {
            name: ["-RIn"],
            description: "Search for a pattern [R]ecursively in the current directory, showing matching line [n]umbers, [I]gnoring non-text files",
            args: {
                name: "search pattern"
            }
        },
        {
            name: ["-Ei"],
            args: [
                { 
                    name: "search pattern" 
                },
                {
                    name: "file",
                    template: "filepaths"
                }
            ]
        },
        {
            name: ["-C"],
            description: "Print 3 lines of context around each match",
            args: [
                {
                    name: "number of lines"
                },
                {
                    name: "search pattern"
                },
                {
                    name: "file",
                    template: "filepaths"
                }
            ]
        },
        {
            name: ["-B"],
            description: "Print 3 lines of before each match",
            args: [
                {
                    name: "number of lines"
                },
                {
                    name: "search pattern"
                },
                {
                    name: "file",
                    template: "filepaths"
                }
            ]
        },
        {
            name: ["-A"],
            description: "Print 3 lines of content after each match",
            args: [
                {
                    name: "number of lines"
                },
                {
                    name: "search pattern"
                },
                {
                    name: "file",
                    template: "filepaths"
                }
            ]
        },
        {
            name: ["-Hn"],
            description: "Print file name with the corresponding line number (n) for each match",
            args: [
                { 
                    name: "search pattern" 
                },
                {
                    name: "file",
                    template: "filepaths"
                }
            ]
        },
        {
            name: ["-v"],
            description: "Invert match for excluding specific strings",
            args: {
                name: "search pattern"
            }
        }
    ]
}
