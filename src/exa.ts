const completionSpec: Fig.Spec = {
  name: "exa",
  description: "A modern replacement for ls",
  args: {
    isVariadic: true,
    name: "files...",
    template: "filepaths",
  },
  options: [
    {
      description: "Show list of command-line options",
      name: ["-?", "--help"],
    },
    {
      description: "Show version of exa",
      name: ["-v", "--version"],
    },
    {
      description: "Display one entry per line",
      name: ["-1", "--oneline"],
    },
    {
      description: "Display extended file metadata as a table",
      name: ["-l", "--long"],
    },
    {
      description: "Display entries as a grid (default)",
      name: ["-G", "--grid"],
    },
    {
      description: "Sort the grid across, rather than downwards",
      name: ["-x", "--across"],
    },
    {
      description: "Recurse into directories",
      name: ["-R", "--recurse"],
    },
    {
      description: "Recurse into directories as a tree",
      name: ["-T", "--tree"],
    },
    {
      description: "Display type indicator by file names",
      name: ["-F", "--classify"],
    },
    {
      description: "When to use terminal colours (always, auto, never)",
      name: ["--colour", "--color"],

      requiresSeparator: true,
      args: {
        name: "when",
        suggestions: [
          {
            name: "always",
          },
          {
            name: "auto",
          },
          {
            name: "never",
          },
        ],
      },
    },
    {
      description: "Highlight levels of file sizes distinctly",
      name: ["--colour-scale", "--color-scale"],
    },
    {
      description: "Show hidden and 'dot' files",
      name: ["-a", "--all"],
    },
    {
      description: "List directories like regular files",
      name: ["-d", "--list-dirs"],
    },
    {
      description: "Limit the depth of recursion",
      name: ["-L", "--level"],
      args: {
        name: "DEPTH",
      },
    },
    {
      description: "Reverse the sort order",
      name: ["-r", "--reverse"],
    },
    {
      description: "Which field to sort by",
      name: ["-s", "--sort"],
      args: {
        name: "sort field",
        suggestions: [
          {
            name: "name",
          },
          {
            name: "Name",
          },
          {
            name: "extension",
          },
          {
            name: "Extension",
          },
          {
            name: "size",
          },
          {
            name: "type",
          },
          {
            name: "modified",
          },
          {
            name: "accessed",
          },
          {
            name: "created",
          },
          {
            name: "inode",
          },
          {
            name: "none",
          },
          {
            name: "date",
          },
          {
            name: "time",
          },
          {
            name: "old",
          },
          {
            name: "new",
          },
        ],
      },
    },
    {
      description: "List directories before other files",
      name: "--group-directories-first",
    },
    {
      description: "List only directories",
      name: ["-D", "--only-dirs"],
    },
    {
      description: "Glob patterns (pipe-separated) of files to ignore",
      name: ["-I", "--ignore-glob"],
      args: {
        name: "GLOB",
      },
    },
    {
      description: "Ignore files mentioned in '.gitignore'",
      name: "--git-ignore",
    },
    {
      description: "List file sizes with binary prefixes",
      name: ["-b", "--binary"],
    },
    {
      description: "List file sizes in bytes, without any prefixes",
      name: ["-B", "--bytes"],
    },
    {
      description: "List each file's group",
      name: ["-g", "--group"],
    },
    {
      description: "Add a header row to each column",
      name: ["-h", "--header"],
    },
    {
      description: "List each file's number of hard links",
      name: ["-H", "--links"],
    },
    {
      description: "List each file's inode number",
      name: ["-i", "--inode"],
    },
    {
      description: "Use the modified timestamp field",
      name: ["-m", "--modified"],
    },
    {
      description: "Show number of file system blocks",
      name: ["-S", "--blocks"],
    },
    {
      description:
        "Which timestamp field to list (modified, accessed, created)",
      name: ["-t", "--time"],
      args: {
        name: "FIELD",
        suggestions: [
          {
            name: "modified",
          },
          {
            name: "accessed",
          },
          {
            name: "created",
          },
        ],
      },
    },
    {
      description: "Use the accessed timestamp field",
      name: ["-u", "--accessed"],
    },
    {
      description: "Use the created timestamp field",
      name: ["-U", "--created"],
    },
    {
      description:
        "How to format timestamps (default, iso, long-iso, full-iso)",
      name: "--time-style",
      args: {
        name: "style",
        suggestions: [
          {
            name: "default",
          },
          {
            name: "iso",
          },
          {
            name: "long-iso",
          },
          {
            name: "full-iso",
          },
        ],
      },
    },
    {
      description: "List each file's Git status, if tracked or ignored",
      name: "--git",
    },
    {
      description: "List each file's extended attributes and sizes",
      name: ["-@", "--extended"],
    },
    {
      description: "Shows icons before each folder or file",
      name: "--icons",
      exclusiveOn: ["--no-icons"],
    },
    {
      description: "Does not display icons",
      exclusiveOn: ["--icons"],
      name: "--no-icons",
    },
    {
      description:
        "Displays when a file or folder got changed instead of modified in the header",
      name: "--changed",
    },
  ],
};

export default completionSpec;
