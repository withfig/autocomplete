var completionSpec = {

    name: "mv",
    description: "move & rename files and folders",
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