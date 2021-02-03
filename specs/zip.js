var completionSpec = {
    name: "zip",
    description: "Package and compress (archive) files into zip file.",
    args: [
        {
            name: "name",
            description: "name of archive"
        },
        {
            name: "dir",
            template: "folders"
        }
    ],
    options: [
        {
            name: ["-r"],
            description: "Package and compress a directory and its contents, recursively",
            args: [
                {
                    name: "name",
                    description: "name of archive"
                },
                {
                    name: "dir",
                    template: "folders"
                }
            ]
        },
        {
            name: ["-e"],
            args: [
                {
                    name: "name",
                    description: "name of archive"
                },
                {
                    name: "dir",
                    template: "folders"
                }
            ]
        },
        {
            name: ["-s"],
            args: [
                {
                    name: "split size"
                },
                {
                    name: "name",
                    description: "name of archive"
                },
                {
                    name: "dir",
                    template: "folders"
                }
            ]
        },
        {
            name: ["-d"],
            args: [
                {
                    name: "name",
                    description: "name of archive"
                },
                {
                    name: "file",
                    template: "filepaths"
                }
            ]
        },
        {
            name: "-9",
            description: "Archive a directory and its contents with the highest level [9] of compression",
            args: [
                {
                    name: "name",
                    description: "name of archive"
                },
                {
                    name: "dir",
                    template: "folders"
                }
            ]
        }
    ]
}