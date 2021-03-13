const cp: Fig.Spec = {

    name: "cp",
    description: "copy files and directories",
    args: [
        {
            template: "filepaths"
        },
        {
            template: "filepaths"
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
