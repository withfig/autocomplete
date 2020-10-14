var completionSpec = {

    name: "curl",
    description: "transfer a URL",
    options: [
        {
            name: ["-X","--request"],
            description: "Specify request command to use",
            args: {
                staticSuggestions: ["POST", "GET", "PATCH", "UPDATE"]
            },
        },
        {
            name: ["-H","--header"],
            description: "Pass custom header(s) to serve",
            args: {
                staticSuggestions: ["'Content-Type: application/json'","'Content-Type: application/x-www-form-urlencoded'"]
            },
        },
        {
            name: ["-d","--data"],
            insertValue: "-d '{cursor}'",
            description: "HTTP POST data",
        }
    ]
}