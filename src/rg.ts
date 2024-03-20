const sortbyArg: Fig.Arg = {
  name: "Sortby",
  default: "none",
  suggestions: [
    {
      name: "none",
      description: "Do not sort results. Fastest. Can be multi-threaded",
    },
    {
      name: "path",
      description: "Sort by file path, Always single-threaded",
    },
    {
      name: "modified",
      description:
        "Sort by the last modified time on a file. Always single-threaded",
    },
    {
      name: "accessed",
      description:
        "Sort by the last accessed time on a file. Always single-threaded",
    },
    {
      name: "created",
      description:
        "Sort by the creation time on a file. Always single-threaded",
    },
  ],
};
const completionSpec: Fig.Spec = {
  name: "rg",
  description:
    "Recursively searches current directory for lines matching a pattern",
  options: [
    {
      name: ["-A", "--after-context"],
      description: "Shows NUM lines after each match",
      args: {
        name: "Num",
      },
    },
    {
      name: "--auto-hybrid-regex",
      description:
        "When this flag is used, ripgrep will dynamically choose between supported regex engines depending on the features used in a pattern",
    },
    {
      name: ["-B", "--before-context"],
      description: "Shows NUM lines before each match",
      args: {
        name: "Num",
      },
    },
    {
      name: "--binary",
      description:
        "Enabling this flag will cause ripgrep to search binary files",
    },
    {
      name: "--block-buffered",
      description: "When enabled, ripgrep will use block buffering",
    },
    {
      name: ["-b", "--byte-offset"],
      description:
        "Prints the 0-based byte offset within the input file before each line of output",
    },
    {
      name: ["-s", "--case-sensitive"],
      description: "Search case sensitively",
    },
    {
      name: "--color",
      description: "Controls when to use colors",
      args: {
        name: "when",
        suggestions: [
          {
            name: "never",
            description: "Colors will never be used",
          },
          {
            name: "auto",
            description: "Ripgrep tries to be smart",
          },
          {
            name: "always",
            description:
              "Colors will always be used regardless of where output is sent",
          },
          {
            name: "ansi",
            description: "Colors will always be used, but emits ANSI escapes",
          },
        ],
      },
    },
    {
      name: "--colors",
      description: "Specifies color settings for use in the output",
      args: {
        name: "Color Spec",
        isVariadic: true,
        description: "{type}:{attribute}:{value}, ex: `match:fg:magenta`",
      },
    },
    {
      name: "--column",
      description: "Shows column numbers for the first match on each line",
    },
    {
      name: ["-C", "--context"],
      description: "Shows NUM lines before and after each match",
      args: {
        name: "NUM",
      },
    },
    {
      name: "--context-separator",
      description:
        "The string used to separate non-contiguous context lines in the output",
      args: {
        name: "Separator",
      },
    },
    {
      name: ["-c", "--count"],
      description:
        "Suppresses normal output and shows the number of lines that match the given pattersns for each file searched",
    },
    {
      name: "--count-matches",
      description:
        "Suppresses normal output and shows the number of individual matches of the given patterns for each file searched",
    },
    {
      name: "--crlf",
      description:
        "Treats CRLF as a line terminator instead of just a line break",
    },
    {
      name: "--debug",
      description: "Shows debug messages",
    },
    {
      name: "--dfa-size-limit",
      description: "The upper size limit of the regex DFA",
      args: [
        {
          name: "NUM",
        },
        {
          name: "suffix",
          isOptional: true,
        },
      ],
    },
    {
      name: ["-E", "--encoding"],
      description:
        "Specifies the text encoding that ripgrep will use on all files searched",
      args: {
        name: "Encoding",
      },
    },
    {
      name: "--engine",
      description: "Specifies which regular expression engine to use",
      args: {
        name: "Engine",
        default: "default",
        suggestions: ["default", "pcre2", "auto"],
      },
    },
    {
      name: ["-f", "--file"],
      description:
        "Searches for patterns from the given file, with one pattern per line",
      args: {
        name: "Patternfile",
        isVariadic: true,
        template: "filepaths",
      },
    },
    {
      name: "--files",
      description:
        "Prints each file that would be searched without actually performing the search",
    },
    {
      name: ["-l", "--files-with-matches"],
      description: "Only prints the paths with at least one match",
    },
    {
      name: "--files-without-match",
      description: "Only prints the paths that contains zero matches",
    },
    {
      name: ["-F", "--fixed-strings"],
      description:
        "Treats the pattern as a literal string instead of a regular expression",
    },
    {
      name: ["-L", "--follow"],
      description: "Follows symbolic links while traversing directories",
    },
    {
      name: ["-g", "--glob"],
      description:
        "Includes or excludes files and directories for searching that match the given glob",
      args: {
        name: "GLOB",
        isVariadic: true,
      },
    },
    {
      name: "--glob-case-insensitive",
      description: "Processes glob patterns given with the -g/--glob flag",
      dependsOn: ["-g", "--glob"],
    },
    {
      name: "--heading",
      description:
        "Prints the file path above clusters of matches from each file instead of printing the file path as a prefix for reach matched line",
    },
    {
      name: "--hidden",
      description: "Searches hidden files and directories",
    },
    {
      name: "--iglob",
      description:
        "Includes or excludes files and directories for searching that match given the glob",
      args: {
        name: "GLOB",
        template: ["filepaths", "folders"],
        isVariadic: true,
      },
    },
    {
      name: "--ignore-file",
      description:
        "Specifies a path to one or more .gitignore format rules files",
      args: {
        name: "Path",
        template: "filepaths",
        isVariadic: true,
      },
    },
    {
      name: "--ignore-file-case-insensitive",
      description: "Process ignores files case insensitively",
    },
    {
      name: "--include-zero",
      description:
        "Prints the number of matchesfor each file when used with --count or --count matches",
    },
    {
      name: ["-v", "--invert-match"],
      description: "Inverts matching",
    },
    {
      name: "--json",
      description: "Enables printing results in a JSON Lines format",
    },
    {
      name: "--no-json",
      description: "Disables the JSON Lines format",
    },
    {
      name: "--line-buffered",
      description: "Enables line buffering",
    },
    {
      name: ["-n", "--line-number"],
      description: "Shows the line numbers (1-based)",
    },
    {
      name: ["-x", "--line-regexp"],
      description: "Only shows matches surrounded by line boundaries",
    },
    {
      name: ["-M", "--max-columns"],
      description: "Don't print lines longer than this limit in bytes",
      args: {
        name: "NUM",
      },
    },
    {
      name: "--max-columns-preview",
      description:
        "Completely replaces any line that is too long with a message indicating that a matching line was removed",
    },
    {
      name: ["-m", "--max-count"],
      description:
        "Limits the number of matching lines per file searched to NUM",
      args: {
        name: "NUM",
      },
    },
    {
      name: "--max-depth",
      description:
        "Limits the depth of directory traversal to NUM levels beyond the paths given",
      args: {
        name: "NUM",
      },
    },
    {
      name: "--max-filesize",
      description: "Ignores files larger than NUM in size",
      args: [
        {
          name: "NUM",
        },
        {
          name: "Suffix",
          isOptional: true,
        },
      ],
    },
    {
      name: "-mmap",
      description: "Searches using memory maps when possible",
    },
    {
      name: ["-U", "--multiline"],
      description: "Enables matching across multiple lines",
    },
    {
      name: "--multiline-dotall",
      description: "Enables dot all in your regex pattern",
    },
    {
      name: "--no-config",
      description: "Never read configuration files",
    },
    {
      name: ["-I", "--no-filename"],
      description: "Never prints the file path with the matched lines",
    },
    {
      name: "--no-heading",
      description: "Don't group matches by each file",
    },
    {
      name: "--no-ignore",
      description: "Don't respect ignore files (.gitignore, .ignore, etc.)",
    },
    {
      name: "--no-ignore-dot",
      description: "Don't respect .ignore files",
    },
    {
      name: "--no-ignore-excluded",
      description:
        "Don't respect ignore files that are manually configured for the repository",
    },
    {
      name: "--no-ignore-files",
      description: "Ignores any --ignore-file flags",
    },
    {
      name: "--no-ignore-global",
      description: "Don't respect ignore files that come from `global` sources",
    },
    {
      name: "--no-ignore-messages",
      description:
        "Suppresses all error messages related to parsing ignore files",
    },
    {
      name: "--no-ignore-parent",
      description: "Don't repsect ignore files in parent directories",
    },
    {
      name: "--no-ignore-vcs",
      description: "Don't respect version control ignore files",
    },
    {
      name: ["-N", "--no-line-number"],
      description: "Suppress line numbers",
    },
    {
      name: "--no-messages",
      description:
        "Suppresses all error messages related to opening and reading files",
    },
    {
      name: "--no-map",
      description: "Never use memory maps, even when they might be faster",
    },
    {
      name: "--no-pcre2-unicode",
    },
    {
      name: "--no-require-git",
      description: "Will only respect global gitignore rules",
    },
    {
      name: "--no-unicode",
      description: "Turn off unicode",
    },
    {
      name: "--unicode",
      description: "Disables --no-unicode flag",
    },
    {
      name: ["-0", "--null"],
      description: "Whenever a file path is printed, follow it with a NUL byte",
    },
    {
      name: "--null-data",
      description:
        "Uses NUL as a line terminator instead of the default line break",
    },
    {
      name: "--one-file-system",
      description:
        "Will not cross file system boundaries relative to where the search started from",
    },
    {
      name: "--no-one-file-system",
      description: "Disables `--one-file-system` flag",
    },
    {
      name: ["-o", "--only-matching"],
      description:
        "Prints only the matched (non-empty) parts of a matching line, with each such part on a separate output line",
    },
    {
      name: "--passthru",
      description: "Prints both matching and non-matching lines",
    },
    {
      name: "--path-separator",
      description: "Sets the path separator to use when printing file paths",
      args: {
        name: "Separator",
      },
    },
    {
      name: ["-P", "--pcre2"],
      description:
        "Usess the PCRE2 regex engine instead of its default regex engine",
    },
    {
      name: "--pcre2-version",
      description: "Prints the version of PCRE2 in use",
    },
    {
      name: "--pre",
      description:
        "For each input File, search the standard output of the command",
      args: {
        name: "Command",
      },
    },
    {
      name: "--pre-glob",
      description:
        "Only files that match the given set of globs will be handed to the command specified by the `--pre flag`",
      args: {
        name: "GLOB",
        isVariadic: true,
      },
    },
    {
      name: ["-p", "--pretty"],
      description:
        "Convenience alias for `--color always --heading --line-number`",
    },
    {
      name: ["-q", "--quiet"],
      description: "Do not print anything to stdout",
    },
    {
      name: "--regex-size-limit",
      description: "Sets the upper size limit of the compiled regex",
      args: [
        {
          name: "NUM",
        },
        {
          name: "Suffix",
          isOptional: true,
        },
      ],
    },
    {
      name: ["-e", "--regexp"],
      description: "A pattern to search for",
      args: {
        name: "Pattern",
        isVariadic: true,
      },
    },
    {
      name: ["-r", "--replace"],
      description:
        "Replace every match with the text given when printing results",
      args: {
        name: "Replacement Text",
      },
    },
    {
      name: ["-z", "--search-zip"],
      description: "Search in compressed files",
    },
    {
      name: ["-S", "--smart-case"],
      description:
        "Searches case insensitively if the pattern is all lowercase",
    },
    {
      name: "--sort",
      args: sortbyArg,
    },
    {
      name: "--sortr",
      description: "Enables sorting results in descending order",
      args: sortbyArg,
    },
    {
      name: "--stats",
      description: "Prints aggregate statistics about this ripgrep search",
    },
    {
      name: ["-a", "--text"],
      description: "Searches binary files as if they were text",
    },
    {
      name: ["-j", "--threads"],
      description: "The approximate number of threads to use",
      args: {
        name: "NUM",
      },
    },
    {
      name: "--trim",
      description:
        "All ASCII whitespace at the beginning of each line printed will be trimmed",
    },
    {
      name: ["-t", "--type"],
      description: "Only searches files matching TYPE",
      args: {
        name: "Type",
        isVariadic: true,
      },
    },
    {
      name: "--type-add",
      description: "Add a new glob for a particular file type",
      args: {
        name: "Type Spec",
        isVariadic: true,
      },
    },
    {
      name: "--type-clear",
      description: "Clear the file type globs previously defined for type",
      args: {
        name: "type",
        isVariadic: true,
      },
    },
    {
      name: "--type-list",
      description:
        "Shows all supported file types and their corresponding globs",
    },
    {
      name: ["-T", "--type-not"],
      description: "Do not search files matching type",
      args: {
        name: "type",
        isVariadic: true,
      },
    },
    {
      name: ["-u", "--unrestricted"],
      description:
        "Reduce the level of smart searching, increase by adding `u`s, ex: -uuu",
    },
    {
      name: "--vimgrep",
      description:
        "Shows results with every match on its own line, including line numbers and column nnumbers",
    },
    {
      name: ["-H", "--with-filename"],
      description: "Displays the file path for matches",
    },
    {
      name: ["-w", "--word-regexp"],
      description: "Only shows the matches surrounded by word boundaries",
    },
  ],
  args: [
    {
      name: "Pattern",
      description: "A regular expression used for searching",
    },
    {
      name: "Path",
      description: "A file or directory to search",
      isOptional: true,
      isVariadic: true,
      template: ["filepaths", "folders"],
    },
  ],
};

export default completionSpec;
