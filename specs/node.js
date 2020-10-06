var completionSpec = {
    name: "node",
    type: "root",
    description: "Run the node interpretor",
    arg: {
        takesInput: true, // default is optional
        // variadic: true, // default is false
        // staticSuggestions: ["a", "b", "c"], // these can also be objects with type, name, and value
        // templateSuggestions: ["files", "folder"]
        // name: "file to run...",
        shellSuggestions: {
            cmd: "ls -1 | grep '.js'",
            splitOn: "\n"
        }
    },
    children: [
        {
            type: "option",
            name: ["-e", "--eval=..."],
            insertValue: "-e '{cursor}'",
            description: "evaluate script",
            arg: {
                takesInput: true
            },
            children: []
        }, 
        {
            type: "option",
            name: ["-p", "--print"],
            insertValue: "-p ",
            description: "evaluate script and print result",
            arg: {},
            children: []
        },
        {
            type: "option",
            name: ["-c", "--check"],
            insertValue: "-c ",
            description: "syntax check script without executing",
            arg: {},
            children: []
        },
        {
            type: "option",
            name: ["-v", "--version"],
            insertValue: "-v ",
            description: "print Node.js version",
            arg: {},
            children: []
        },
        {
            type: "option",
            name: ["-i", "--interactive"],
            insertValue: "-i ",
            description: "always enter the REPL even if stdin does not appear to be a terminal",
            arg: {},
            children: []
        }
    ]

}