var completionSpec = {

    name: "curl",
    description: "transfer a URL",
    options: [
        {
            name: ["-X","--request"],
            description: "Specify request command to use",
            args: {
                suggestions: [
                    { name: "POST" }, { name: "GET" }, { name: "PATCH" }, { name: "UPDATE" }
                ]
            },
        },
        {
            name: ["-H","--header"],
            description: "Pass custom header(s) to serve",
            args: {
                suggestions: [
                    {name: "'Content-Type: application/json'"}, {name: "'Content-Type: application/x-www-form-urlencoded'"}
                ]
            },
        },
        {
            name: ["-d","--data"],
            insertValue: "-d '{cursor}'",
            description: "HTTP POST data",
        }
    ]
}
