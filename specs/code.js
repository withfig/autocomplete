var completionSpec = {

    name: "code",
    description: "Visual Studio Code",
    args: {
        templateSuggestions: ["files", "folders"],
    },
    options: [
    	{
    		name: ["-d","--diff"],
            description: "Compare two files with each other.",
            args: [
            	{
            		templateSuggestions: ["files", "folders"]
            	},
            	{
            		templateSuggestions: ["files", "folders"]
            	}
            ],
    	},
    	{
    		name: ["-a","--add"],
            description: "Add folder(s) to the last active window",
            args: {
        		templateSuggestions: ["folders"]
            }
    	}, 
    	{
    		name: ["-n", "--new-window"],
            description: "Force to open a new window.",
            args: [
            	{
            		templateSuggestions: ["files", "folders"]
            	},
            	{
            		templateSuggestions: ["files", "folders"]
            	}
            ],
    	}, 	
    ]
}