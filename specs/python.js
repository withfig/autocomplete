var completionSpec = {
    name: "python",
    description: "Run the python interpretor",
    args: {
        generator: {
            script: "ls -1 | grep .py",
            splitOn: "\n"
        }
    },
    options: [
        {
            name: ["-c <cmd>"],
            insertValue: "-c '{cursor}'",
            description: "program passed in as string (terminates option list)",
            args: {},
        }
    ]

}