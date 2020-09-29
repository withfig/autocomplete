var completionSpec = {

    name: "cp",
    type: "root",
    description: "copy files and directories",
    arg: [
        {
            takesInput: true,
            templateSuggestions: ["files", "folders"] 
        },
        {

            takesInput: true,
            templateSuggestions: ["files", "folders"] 
        }
    ],
    children: [
        {
            type: "option",
            name: ["-R"],
            insertValue: "-R ",
            description: "recursive",
        },
        {
            type: "option",
            name: "-P",
            insertValue: "-P ",
            description: "Don't follow symbolic links",
        }
    ]
}