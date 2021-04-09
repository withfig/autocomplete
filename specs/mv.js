var completionSpec = {
    name: "mv",
    description: "move & rename files and folders",
    args: [
        {
            template: ["filepaths", "folders"],
        },
        {
            template: ["filepaths", "folders"],
        },
    ],
    options: [
        {
            name: ["-R"],
            description: "recursive",
        },
        {
            name: "-P",
            description: "Don't follow symbolic links",
        },
    ],
};

