var completionSpec = {

    name: "curl",
    type: "root",
    description: "transfer a URL",
    arg: {},
    children: [
        {
            type: "option",
            name: ["-X","--request"],
            insertValue: "-X ",
            description: " Specify request command to use",
            arg: {
                staticSuggestions: ["POST", "GET", "PATCH", "UPDATE"]

            },
            children: []
        },
        {
            type: "option",
            name: ["-H","--header"],
            insertValue: "-H ",
            description: "Pass custom header(s) to serve",
            arg: {
                staticSuggestions: ["'Content-Type: application/json'","'Content-Type: application/x-www-form-urlencoded'"]
            },
            children: []
        },
        {
            type: "option",
            name: ["-d","--data"],
            insertValue: "-d \"\"\033[D",
            description: "HTTP POST data",
        }
    ]
}