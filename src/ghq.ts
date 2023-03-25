const completionSpec: Fig.Spec = {
  name: "ghq",
  description:
    "'ghq' provides a way to organize remote repository clones, like go get does. When you clone a remote repository by ghq get, ghq makes a directory under a specific root directory (by default ~/ghq) using the remote repository URL’s host and path",
  subcommands: [
    {
      name: "list",
      description: "List local repositories",
      options: [
        {
          name: ["-e", "--exact"],
          description: "Perform an exact match (default: false)",
        },
        {
          name: "--vcs",
          description: "Specify vcs backend for matching",
          args: { name: "vcs" },
        },
        {
          name: ["-p", "--full-path"],
          description: "Print full paths (default: false)",
          exclusiveOn: ["--unique"],
        },
        {
          name: "--unique",
          description: "Print unique subpaths (default: false)",
          exclusiveOn: ["--full-path"],
        },
      ],
      args: {
        name: "query",
        isOptional: true,
      },
    },
    {
      name: "root",
      description: "Show repositories' root",
      options: [
        {
          name: "--all",
          description: "Show all roots (default: false)",
        },
      ],
    },
  ],
  options: [
    {
      name: ["-h", "--help", "h", "help"],
      description: "Show help",
      isPersistent: true,
      exclusiveOn: ["--version"],
    },
    {
      name: ["-v", "--version"],
      description: "Print the version",
      exclusiveOn: ["--help"],
    },
  ],
};
export default completionSpec;
