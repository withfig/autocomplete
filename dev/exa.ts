export const completion: Fig.Spec = {
  name: "exa",
  description: "a modern replacement for ls",
  args: {
    variadic: true,
    name: "files...",
    template: "filepaths",
  },
  options: [
    {
      description: "show list of command-line options",
      name: ["-?", "--help"],
    },
    {
      description: "show version of exa",
      name: ["-v", "--version"],
    },
    {
      description: "display one entry per line",
      name: ["-1", "--oneline"],
    },
    {
      description: "display extended file metadata as a table",
      name: ["-l", "--long"],
    },
    {
      description: "display entries as a grid (default)",
      name: ["-G", "--grid"],
    },
    {
      description: "sort the grid across, rather than downwards",
      name: ["-x", "--across"],
    },
    {
      description: "recurse into directories",
      name: ["-R", "--recurse"],
    },
    {
      description: "recurse into directories as a tree",
      name: ["-T", "--tree"],
    },
    {
      description: "display type indicator by file names",
      name: ["-F", "--classify"],
    },
    {
      description: "when to use terminal colours (always, auto, never)",
      name: ["--colour", "--color"],
      insertValue: "--colour=",
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
      description: "highlight levels of file sizes distinctly",
      name: ["--colour-scale", "--color-scale"],
    },
    {
      description: "show hidden and 'dot' files",
      name: ["-a", "--all"],
    },
    {
      description: "list directories like regular files",
      name: ["-d", "--list-dirs"],
    },
    {
      description: "limit the depth of recursion",
      name: ["-L", "--level"],
      args: {
        name: "DEPTH",
      },
    },
    {
      description: "reverse the sort order",
      name: ["-r", "--reverse"],
    },
    {
      description: "which field to sort by",
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
      description: "list directories before other files",
      name: ["--group-directories-first"],
    },
    {
      description: "list only directories",
      name: ["-D", "--only-dirs"],
    },
    {
      description: "glob patterns (pipe-separated) of files to ignore",
      name: ["-I", "--ignore-glob"],
      args: {
        name: "GLOB",
      },
    },
    {
      description: "Ignore files mentioned in '.gitignore'",
      name: ["--git-ignore"],
    },
    {
      description: "list file sizes with binary prefixes",
      name: ["-b", "--binary"],
    },
    {
      description: "list file sizes in bytes, without any prefixes",
      name: ["-B", "--bytes"],
    },
    {
      description: "list each file's group",
      name: ["-g", "--group"],
    },
    {
      description: "add a header row to each column",
      name: ["-h", "--header"],
    },
    {
      description: "list each file's number of hard links",
      name: ["-H", "--links"],
    },
    {
      description: "list each file's inode number",
      name: ["-i", "--inode"],
    },
    {
      description: "use the modified timestamp field",
      name: ["-m", "--modified"],
    },
    {
      description: "show number of file system blocks",
      name: ["-S", "--blocks"],
    },
    {
      description:
        "which timestamp field to list (modified, accessed, created)",
      name: ["-t", "--time FIELD"],
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
      description: "use the accessed timestamp field",
      name: ["-u", "--accessed"],
    },
    {
      description: "use the created timestamp field",
      name: ["-U", "--created"],
    },
    {
      description:
        "how to format timestamps (default, iso, long-iso, full-iso)",
      name: ["--time-style"],
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
      description: "list each file's Git status, if tracked or ignored",
      name: ["--git"],
    },
    {
      description: "list each file's extended attributes and sizes",
      name: ["-@", "--extended"],
    },
  ],
};
