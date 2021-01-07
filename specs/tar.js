var completionSpec = {

    name: "tar",
    description: "Manipulating archive files",
    args: {
    	variadic: true,
        templateSuggestions: ["folders"] 
    },
    options: [
 		{
            name: ["-c", "--create"],
            description: "Create a new archive",
            args: {
    	        variadic: true,
                templateSuggestions: ["folders"] 
            }
        },
 		{
            name: ["-t", "--list"],
            description: "List archive contents",
            args: {
                shellSuggestions: {
                    cmd: "ls -1 | grep '.tar'",
                    splitOn: "\n"
                }
            }
        },
 		{
            name: ["-x", "--extract"],
            description: "Extract to disk",
            args: {
                shellSuggestions: {
                    cmd: "ls -1 | grep '.tar'",
                    splitOn: "\n"
                }
            }
        },
 		{ name: ["-h", "--help"],       description: "Help" },
 		{ name: ["--version"],          description: "Version" },
    ]
}