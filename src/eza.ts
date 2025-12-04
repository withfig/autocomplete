const completionSpec: Fig.Spec = {
  name: "eza",
  description: "A modern replacement for ls",
  args: {
    isVariadic: true,
    template: "folders",
    default: ".",
  },
  options: [
    // META OPTIONS
    {
      name: ["-?", "--help"],
      description: "Show list of command-line options",
    },
    {
      name: ["-v", "--version"],
      description: "Show version of eza",
    },
    // DISPLAY OPTIONS
    {
      name: ["-1", "--oneline"],
      description: "Display one entry per line",
    },
    {
      name: ["-l", "--long"],
      description: "Display extended file metadata as a table",
    },
    {
      name: ["-G", "--grid"],
      description: "Display entries as a grid (default)",
    },
    {
      name: ["-x", "--across"],
      description: "Sort the grid across, rather than downward",
    },
    {
      name: ["-R", "--recurse"],
      description: "Recurse into directories",
    },
    {
      name: ["-T", "--tree"],
      description: "Recurse into directories as a tree",
    },
    {
      name: ["-X", "--dereference"],
      description: "Dereference symbolic links when displaying information",
    },
    {
      name: ["-F", "--classify"],
      description: "Display type indicator by file names",
      args: {
        name: "when",
        suggestions: [
          {
            name: ["auto", "automatic"],
            description:
              "Display file kind indicators only when the standard output is connected to a real terminal",
          },
          {
            name: "always",
            description: "Always display file kind indicators",
          },
          {
            name: "never",
            description: "Disables the use of file kind indicators",
          },
        ],
        default: "automatic",
      },
    },
    {
      name: ["--color", "--colour"],
      description: "When to use terminal colours",
      args: {
        name: "when",
        suggestions: [
          {
            name: ["auto", "automatic"],
            description:
              "To colorize the output only when the standard output is connected to a real terminal",
          },
          { name: "always", description: "Always output terminal color" },
          { name: "never", description: "Disables the use of terminal color" },
        ],
        default: "automatic",
      },
    },
    {
      name: ["--color-scale", "--colour-scale"],
      description: "Highlight levels of 'field' distinctly",
      requiresSeparator: "=",
      args: {
        name: "field",
        suggestions: ["all", "age", "size"],
      },
    },
    {
      name: ["--color-scale-mode", "--colour-scale-mode"],
      description: "Use gradient or fixed colors in --color-scale",
      args: {
        name: "mode",
        suggestions: ["fixed", "gradient"],
        default: "gradient",
      },
    },
    {
      name: "--icons",
      description: "When to display icons",
      args: {
        name: "when",
        suggestions: [
          {
            name: ["auto", "automatic"],
            description:
              "Display icons only when the standard output is connected to a real terminal",
          },
          { name: "always", description: "Always display icons" },
          { name: "never", description: "Disables the use of icons" },
        ],
        default: "automatic",
      },
    },
    {
      name: "--no-quotes",
      description: "Don't quote file names with spaces",
    },
    {
      name: "--hyperlink",
      description: "Display entries as hyperlinks",
    },
    {
      name: "--absolute",
      description: "Display entries with their absolute path",
      args: {
        name: "mode",
        suggestions: ["off", "on", "follow"],
        default: "off",
      },
    },
    {
      name: "--follow-symlinks",
      description: "Drill down into symbolic links that point to directories",
    },
    {
      name: ["-w", "--width"],
      description: "Set screen width in columns",
      args: {
        name: "columns",
      },
    },
    // ILTERING AND SORTING OPTIONS
    {
      name: ["-a", "--all"],
      description: "Show hidden and 'dot' files",
      isRepeatable: 2,
    },
    {
      name: ["-A", "--almost-all"],
      description: "Equivalent to '--all'",
      isRepeatable: 2,
    },
    {
      name: ["-d", "--list-dirs"],
      description: "List directories like regular files",
    },
    {
      name: ["-D", "--only-dirs"],
      description: "List only directories",
    },
    {
      name: ["-f", "--only-files"],
      description: "List only files",
    },
    {
      name: "--show-symlinks",
      description: "Explicitly show symbolic links",
      dependsOn: ["--only-dirs", "--only-files"],
    },
    {
      name: "--no-symlinks",
      description: "Do not show symbolic links",
    },
    {
      name: ["-L", "--level"],
      description: "Limit the depth of recursion",
      args: {
        name: "depth",
      },
    },
    {
      name: ["-r", "--reverse"],
      description: "Reverse the sort order",
    },
    {
      name: ["-s", "--sort"],
      description: "Which field to sort by",
      args: {
        name: "field",
        suggestions: [
          { name: "name", description: "Lowercase precede UPERCASE" },
          { name: "Name", description: "UPERCASE precede lowercase" },
          { name: "extension", description: "Lowercase precede UPERCASE" },
          { name: "Extension", description: "UPERCASE precede lowercase" },
          { name: "size" },
          { name: "modified" },
          { name: "changed" },
          { name: "accessed" },
          { name: "created" },
          { name: "inode" },
          { name: "type" },
          { name: "none" },
          { name: ["date", "time", "new", "newest"] },
          { name: ["age", "old", "oldest"] },
        ],
      },
    },
    {
      name: "--group-directories-first",
      description: "List directories before other files",
    },
    {
      name: "--group-directories-last",
      description: "List directories after other files",
    },
    {
      name: ["-I", "--ignore-glob"],
      description: "Glob patterns (pipe-separated) of files to ignore",
      args: {
        name: "globs",
      },
    },
    {
      name: "--git-ignore",
      description: "Ignore files mentioned in '.gitignore'",
    },
    // LONG VIEW OPTIONS
    {
      name: ["-b", "--binary"],
      description: "List file sizes with binary prefixes",
      dependsOn: ["-l", "--long"],
    },
    {
      name: ["-B", "--bytes"],
      description: "List file sizes in bytes, without any prefixes",
      dependsOn: ["-l", "--long"],
    },
    {
      name: ["-g", "--group"],
      description: "List each file's group",
      dependsOn: ["-l", "--long"],
    },
    {
      name: "--smart-group",
      description: "Only show group if it has a different name from owner",
      dependsOn: ["-l", "--long"],
    },
    {
      name: ["-h", "--header"],
      description: "Add a header row to each column",
      dependsOn: ["-l", "--long"],
    },
    {
      name: ["-H", "--links"],
      description: "List each file's number of hard links",
      dependsOn: ["-l", "--long"],
    },
    {
      name: ["-i", "--inode"],
      description: "List each file's inode number",
      dependsOn: ["-l", "--long"],
    },
    {
      name: ["-M", "--mounts"],
      description: "Show mount details",
      dependsOn: ["-l", "--long"],
    },
    {
      name: ["-n", "--numeric"],
      description: "List numeric user and group IDs",
      dependsOn: ["-l", "--long"],
    },
    {
      name: ["-O", "--flags"],
      description: "List file flags",
      dependsOn: ["-l", "--long"],
    },
    {
      name: ["-S", "--blocksize"],
      description: "Show size of allocated file system blocks",
      dependsOn: ["-l", "--long"],
    },
    {
      name: ["-t", "--time"],
      description: "Which timestamp field to list",
      args: {
        name: "field",
        suggestions: ["modified", "changed", "accessed", "created"],
      },
      dependsOn: ["-l", "--long"],
    },
    {
      name: ["-m", "--modified"],
      description: "Use the modified timestamp field",
      dependsOn: ["-l", "--long"],
    },
    {
      name: ["-u", "--accessed"],
      description: "Use the accessed timestamp field",
      dependsOn: ["-l", "--long"],
    },
    {
      name: ["-U", "--created"],
      description: "Use the created timestamp field",
      dependsOn: ["-l", "--long"],
    },
    {
      name: "--changed",
      description: "Use the changed timestamp field",
      dependsOn: ["-l", "--long"],
    },
    {
      name: "--time-style",
      description: "How to format timestamps",
      args: {
        name: "format",
        suggestions: [
          "default",
          "iso",
          "long-iso",
          "relative",
          "+%Y-%m-%d %H:%M",
        ],
      },
      dependsOn: ["-l", "--long"],
    },
    {
      name: "--total-size",
      description:
        "Show the size of a directory as the size of all files and directories inside",
      dependsOn: ["-l", "--long"],
    },
    {
      name: ["-o", "--octal-permissions"],
      description: "List each file's permission in octal format",
      dependsOn: ["-l", "--long"],
    },
    {
      name: "--no-permissions",
      description: "Suppress the permissions field",
      dependsOn: ["-l", "--long"],
    },
    {
      name: "--no-filesize",
      description: "Suppress the filesize field",
      dependsOn: ["-l", "--long"],
    },
    {
      name: "--no-user",
      description: "Suppress the user field",
      dependsOn: ["-l", "--long"],
    },
    {
      name: "--no-time",
      description: "Suppress the time field",
      dependsOn: ["-l", "--long"],
    },
    {
      name: "--stdin",
      description:
        "Read file names from stdin, one per line or other separator specified in environment",
      dependsOn: ["-l", "--long"],
    },
    {
      name: "--git",
      description: "List each file's Git status, if tracked or ignored",
      dependsOn: ["-l", "--long"],
    },
    {
      name: "--no-git",
      description: "Suppress Git status",
      dependsOn: ["-l", "--long"],
    },
    {
      name: "--git-repos",
      description: "List root of git-tree status",
      dependsOn: ["-l", "--long"],
    },
    {
      name: "--git-repos-no-status",
      description: "List each git-repos branch name (much faster)",
      dependsOn: ["-l", "--long"],
    },
    {
      name: ["-@", "--extended"],
      description: "List each file's extended attributes and sizes",
      dependsOn: ["-l", "--long"],
    },
    {
      name: ["-Z", "--context"],
      description: "List each file's security context",
      dependsOn: ["-l", "--long"],
    },
  ],
};

export default completionSpec;
