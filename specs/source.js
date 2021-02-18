var completionSpec = {

    name: "source",
    description: "Source files in shell",
    args: [
        {   
            variadic: true,
            name: "File to source",
            template: ["filepaths"]
        },
    ]
}
