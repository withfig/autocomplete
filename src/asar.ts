const completionSpec: Fig.Spec = {
  name: "asar",
  description: "A simple extensive tar-like archive format with indexing",
  subcommands: [
    {
      name: ["pack", "p"],
      description: "Create asar archive",
      args: [
        {
          name: "directory",
          description: "The directory you want to archive",
        },
        {
          name: "output",
          description: "The name of the output file",
        },
      ],
    },
    {
      name: ["list", "l"],
      description: "List files of asar archive",
      args: {
        name: "archive",
        description: "The archive file",
      },
    },
    {
      name: ["extract-file", "ef"],
      description: "Extract one file from archive",
      args: [
        {
          name: "archive",
          description: "The archive file",
        },
        {
          name: "filename",
          description: "The name of the file you want to extract",
        },
      ],
    },
    {
      name: ["extract", "e"],
      description: "Extract archive",
      args: [
        {
          name: "archive",
          description: "The archive file",
        },
        {
          name: "directory",
          description: "The directory you want to extract to",
        },
      ],
    },
  ],

  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for asar",
    },
    {
      name: ["--V", "--version"],
      description: "Output the version number",
    },
  ],
  // Only uncomment if asar takes an argument
  // args: {}
};
export default completionSpec;
