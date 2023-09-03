const completionSpec: Fig.Spec = {
  name: "ghq",
  description:
    "'ghq' provides a way to organize remote repository clones, like go get does. When you clone a remote repository by ghq get, ghq makes a directory under a specific root directory (by default ~/ghq) using the remote repository URL’s host and path",
  subcommands: [
    {
      name: "get",
      description: "Clone/sync with a remote repository",
      options: [
        {
          name: ["-u", "--update"],
          description:
            "Update local repository if cloned already (default: false)",
        },
        {
          name: "-p",
          description: "Clone with SSH (default: false)",
        },
        {
          name: "--shallow",
          description: "Do a shallow clone (default: false)",
        },
        {
          name: ["-l", "--look"],
          description: "Look after get (default: false)",
        },
        {
          name: "--vcs",
          description: "Specify vcs backend for cloning",
          args: { name: "vcs" },
        },
        {
          name: ["-s", "--silent"],
          description: "Clone or update silently (default: false)",
        },
        {
          name: "--no-recursive",
          description: "Prevent recursive fetching (default: false)",
        },
        {
          name: ["-b", "--branch"],
          description:
            "Specify branch name. This flag implies --single-branch on Git",
          args: { name: "branch" },
        },
        {
          name: ["-P", "--parallel"],
          description: "Import parallelly (default: false)",
        },
        {
          name: "--bare",
          description: "Do a bare clone (default: false)",
        },
      ],
      args: {
        name: "<repository URL>|<project>|<user>/<project>|<host>/<user>/<project>",
      },
    },
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
    {
      name: "create",
      description: "Create a new repository",
      options: [
        {
          name: "--vcs",
          description: "Specify vcs backend explicitly",
          args: { name: "vcs" },
        },
      ],
      args: {
        name: "<project>|<user>/<project>|<host>/<user>/<project>",
      },
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
