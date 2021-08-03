const completionSpec: Fig.Spec = {
  name: "fd",
  description: "A simple, fast and user-friendly alternative to 'find'",
  options: [
    {
      name: ["-H", "--hidden"],
      description: "Search hidden files and directories",
    },
    {
      name: ["-I", "--no-ignore"],
      description: "Do not respect .(git|fd)ignore files",
    },
    {
      name: ["-s", "--case-sensitive"],
      description: "Case-sensitive search (default: smart case)",
    },
    {
      name: ["-i", "--ignore-case"],
      description: "Case-insensitive search (default: smart case)",
    },
    {
      name: ["-g", "--glob"],
      description: "Glob-based search (default: regular expression)",
    },
    {
      name: ["-a", "--absolute-path"],
      description: "Show absolute instead of relative paths",
    },
    {
      name: ["-l", "--list-details"],
      description: "Use a long listing format with file metadata",
    },
    {
      name: ["-L", "--follow"],
      description: "Follow symbolic links",
    },
    {
      name: ["-p", "--full-path"],
      description: "Search full path (default: file-/dirname only)",
    },
    {
      name: ["-0", "--print0"],
      description: "Separate results by the null character",
    },
    {
      name: ["-h", "--help"],
      description: "Prints help information",
    },
    {
      name: ["-V", "--version"],
      description: "Prints version information",
    },
    {
      name: ["-d", "--max-depth"],
      description: "Set maximum search depth",
      args: {
        name: "depth",
      },
    },
    {
      name: ["-t", "--type"],
      description: "Filter by type",
      args: {
        name: "filetype",
        suggestions: [
          { name: "f", description: "file" },
          { name: "d", description: "directory" },
          { name: "l", description: "symlink" },
          { name: "x", description: "executable" },
          { name: "e", description: "empty" },
          { name: "s", description: "socket" },
          { name: "p", description: "pipe" },
        ],
      },
    },
    {
      name: ["-e", "--extension"],
      description: "Filter by file extension",
      args: {
        name: "file extension",
      },
    },
    {
      name: ["-x", "--exec"],
      description: "Execute a command for each search result",
      args: {
        name: "cmd",
        isCommand: true,
      },
    },
    {
      name: ["-X", "--exec-batch"],
      description: "Execute a command with all search results at once",
      args: {
        name: "cmd",
        isCommand: true,
      },
    },
    {
      name: ["-E", "--exclude"],
      description: "Exclude entries that match the given glob pattern",
      args: {
        name: "pattern",
      },
    },
    {
      name: ["-c", "--color"],
      description: "When to use colors",
      args: {
        name: "when",
        default: "auto",
        suggestions: ["never", "auto", "always"],
      },
    },
    {
      name: ["-S", "--size"],
      description: "Limit results based on the size of files",
      args: {
        name: "size",
      },
    },
    {
      name: "--changed-within",
      description: "Filter by file modification time (newer than)",
      args: {
        name: "date",
      },
    },
    {
      name: "--changed-before",
      description: "Filter by file modification time (older than)",
      args: {
        name: "date",
      },
    },
  ],
  args: [
    {
      name: "pattern",
      description:
        "The search pattern - a regular expression unless '--glob' is used (optional)",
    },
    {
      name: "path",
      description: "The root directories for the filesystem search",
      template: ["folders"],
      isOptional: true,
      variadic: true,
    },
  ],
};

export default completionSpec;
