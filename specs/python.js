var completionSpec = {
    name: "python",
    type: "root",
    description: "Run the python interpretor",
    arg: {
        takesInput: true, // default is optional
        // variadic: true, // default is false
        // staticSuggestions: ["a", "b", "c"], // these can also be objects with type, name, and value
        // templateSuggestions: ["files", "folder"]
        shellSuggestions: {
            cmd: "ls -1 | grep .py",
            splitOn: "\n"
        }
    },
    children: [
        {
            type: "option",
            name: ["-c <cmd>"],
            insertValue: "-c '{cursor}'",
            description: "program passed in as string (terminates option list)",
            arg: {},
            children: []
        }
    ]

}