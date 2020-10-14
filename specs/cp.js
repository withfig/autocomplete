var completionSpec = {

    name: "cp",
    description: "copy files and directories",
    args: [
        {
            templateSuggestions: ["files", "folders"] 
        },
        {
            templateSuggestions: ["files", "folders"] 
        }
    ],
    options: [
        {
            name: ["-R"],
            description: "recursive",
        },
        {
            name: "-P",
            description: "Don't follow symbolic links",
        }
    ]
}