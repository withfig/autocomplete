var completionSpec = {
    name: 'cd',
    description: 'Change the shell working directory',
    args: {
        template: 'folders',
    },
    subcommands: [
        { name: "dog" },
        { name: "git" }
    ]
};

// var completionSpec = {
//     name: "cd",
//     description: "Change the shell working directory",
//     args: {
//         generator: {
//             customFunction: async (lastBranch) => {
//                 console.log(lastBranch)
//                 var b = await executeShellCmd("echo hello world")
//                 return [{ name: b }, { name: "bbbbb" }]
//             }
//         }
//     }
// }
