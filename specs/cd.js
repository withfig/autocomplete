var completionSpec = {
    name: "cd",
    type: "root",
    description: "Change the shell working directory",
    arg: {
        takesInput: true, // default is optional
        // variadic: true, // default is false
        // staticSuggestions: ["a", "b", "c"], // these can also be objects with type, name, and value
        templateSuggestions: ["folders"],
        // shellSuggestions: {
        //     cmd: "ls",
        //     splitOn: "\n"
        // }
    },
    children: []
}