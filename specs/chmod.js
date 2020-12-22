var completionSpec = {
    name: "chmod",
    description: "Change file modes or Access Control Lists.",
    args: [
        {
            name: "mode",
            optional: false,
            suggestions: [ 
                // Some of the most common chmod's (non-exhaustive)
                {   
                    name: ["u+x",],
                    type: "argument",
                    description: "give execute permission for the user",
                    icon: "🔐",
                },
                {   
                    name: ["a+rx",],
                    type: "argument",
                    description: "adds read and execute permissions for all classes",
                    icon: "🔐",
                },
                {   
                    name: ["744",],
                    type: "argument",
                    description: "sets read, write, and execute permissions for user, and sets read permission for Group and Others",
                    icon: "🔐",
                },
                {   
                    name: ["664",],
                    type: "argument",
                    description: "sets read and write permissions for user and Group, and provides read to Others.",
                    icon: "🔐",
                },
                {   
                    name: ["ug=rw"],
                    type: "argument",
                    description: "sets read and write permissions for user and Group.",
                    icon: "🔐",
                },
                {   
                    name: ["777"],
                    type: "argument",
                    description: "⚠️ allows all actions for all users",
                    icon: "🔐",
                },
            ],
        },
        {
            // Modifying
            template: ["filepaths", "folders"]
        }
    ],
    subcommands: [],
    options: [
        {
            name: "-f",
            description: "Do not display a diagnostic message if chmod could not modify the mode for file, nor modify the exit status to reflect such failures."
        },
        {
            name: "-H",
            description: "If the -R option is specified, symbolic links on the command line are followed and hence unaffected by the command.  (Symbolic links encountered during tree traversal are not followed.)."
        },
        {
            name: "-h",
            description: "If the file is a symbolic link, change the mode of the link itself rather than the file that the link points to."
        },
        {
            name: "-L",
            description: "If the -R option is specified, all symbolic links are followed."
        },
        {
            name: "-P",
            description: "If the -R option is specified, no symbolic links are followed. This is the default."
        },
        {
            name: "-R",
            description: "Change the modes of the file hierarchies rooted in the files, instead of just the files themselves. Beware of unintentionally matching the ``..'' hard link to the parent directory when using wildcards like ``.*''."
        },
        {
            name: "-v",
            description: "Cause chmod to be verbose, showing filenames as the mode is modified. If the -v flag is specified more than once, the old and new modes of the file will also be printed, in both octal and symbolic notation."
        }
    ]
}
