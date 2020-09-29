var completionSpec = {
    name: "heroku",
    type: "root",
    description: "CLI Interface for Heroku.com",
    arg: {
        takesInput: true, // default is optional
        // variadic: true, // default is false
    },
    // addons:attach
    children: [
        {
            type: "subcommand",
            name: "addons:attach",
            insertValue: "addons:attach",
            description: "attach an existing add-on resource to an app",
            children: [
                {
                    type: "option",
                    name: ["-a", "--app"],
                    insertValue: "-a ",
                    description: "app to run command against",
                    arg: {
                        takesInput: true, // default is optional
                        shellSuggestions: {
                            cmd: String.raw`node -p "const a = $( heroku apps --json ); const b = a.map(elm => elm.name); console.log(b.join('\n'))"`,
                            // splitOn: "\n",
                            postProcess: function (out) {
                                return out.split("\n").slice(0, -2)
                            }
                        }
                    },
                    children: []
                }
            ]
        }
    ]
}

