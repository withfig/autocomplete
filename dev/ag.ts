// To learn more about Fig's autocomplete standard visit: https://fig.io/docs/concepts/cli-skeleton

// The below is a dummy example for git. Make sure to change the file name!
const completionSpec: Fig.Spec = {
  name: "ag",
  description:
    "Recursively search for PATTERN in PATH. Like grep or ack, but faster.",
  args: [
    {
      name: "pattern",
      isOptional: true,
      isVariadic: false,
    },
    {
      name: "path",
      isOptional: true,
      isVariadic: true,
      template: ["filepaths"],
    },
  ],
  options: [
    {
      name: "--ackmate",
      description:
        "Output results in a format parseable by AckMate https://github.com/protocool/AckMate.",
    },

    {
      name: "--affinity",
      description: "Set thread affinity (if platform supports it).",
    },

    {
      name: "--noaffinity",
      description: "Don't set thread affinity (if platform supports it).",
    },

    {
      name: ["-a", "--all-types"],
      description:
        "Search all files. This doesn't include hidden files, and doesn't respect any ignore files.",
    },

    {
      name: ["-A", "--after"],
      description: "Print lines after match.",
      args: {
        name: "LINES",
        description: "the amount of lines",
        isOptional: true,
        default: "2",
      },
    },

    {
      name: ["-B", "--before"],
      description: "Print lines before match.",
      args: {
        name: "LINES",
        description: "the amount of lines",
        isOptional: true,
        default: "2",
      },
    },

    {
      name: "--nobreak",
      description:
        "Print a newline between matches in different files. Enabled by default.",
    },

    {
      name: ["-c", "--count"],
      description:
        "Only  print the number of matches in each file. Note: This is the number of matches, not the number of matching lines. Pipe output to wc -l if you want the number of matching lines.",
    },

    {
      name: "--color",
      description: "Print color codes in results.",
    },

    {
      name: "--nocolor",
      description: "Don't print color codes in results.",
    },

    {
      name: "--color-line-number",
      description: "Color codes for line numbers. Default is 1;33.",
    },

    {
      name: "--color-match",
      description: "Color codes for result match numbers. Default is 30;43.",
    },

    {
      name: "--color-path",
      description: "Color codes for path names. Default is 1;32.",
    },

    { name: "--column", description: "Print column numbers in results." },

    {
      name: ["-C", "--context"],
      description: "Print lines before and after matches.",
      args: {
        name: "LINES",
        description: "the amount of lines",
        isOptional: true,
        default: "2",
      },
    },

    {
      name: ["-D", "--debug"],
      description:
        "Output ridiculous amounts of debugging info. Not useful unless you're actually debugging.",
    },

    {
      name: "--depth",
      description: "Search up to NUM directories deep, -1 for unlimited.",
      args: {
        name: "NUM",
        description: "the depth in directories to search",
        isOptional: true,
        default: "25",
      },
    },

    {
      name: "--filename",
      description: "Print file names.",
    },

    {
      name: "--nofilename",
      description: "Don't print file names.",
    },

    {
      name: ["-f", "--follow"],
      description: "Follow symlinks.",
    },

    {
      name: "--nofollow",
      description: "Don't follow symlinks.",
    },

    {
      name: ["-F", "--fixed-strings"],
      description: "Alias for --literal for compatibility with grep.",
    },

    {
      name: "--group",
      description:
        "Lumps multiple matches in the same file together, and presents them under a single occurrence of the filename.",
    },

    {
      name: "--nogroup",
      description:
        "Refrains from lumping matches in the same file together, and instead places the filename at the start of each match line.",
    },

    {
      name: "-g",
      description: "Print filenames matching PATTERN.",
      args: {
        name: "PATTERN",
        description: "The pattern to look for",
      },
    },

    {
      name: ["-G", "--file-search-regex"],
      description: "Only search files whose names match PATTERN.",
      args: {
        name: "PATTERN",
        description: "The pattern to look for",
      },
    },

    {
      name: ["-H", "--heading"],
      description: "Print filenames above matching contents.",
    },

    {
      name: "--noheading",
      description: "Don't print filenames above matching contents.",
    },

    {
      name: "--hidden",
      description: "Search hidden files. This option obeys ignored files.",
    },

    {
      name: "--ignore",
      description:
        "Ignore files/directories whose names match this pattern. Literal file and directory names are also allowed.",
      args: {
        name: "PATTERN",
        description: "The pattern to look for",
      },
    },

    {
      name: "--ignore-dir",
      description: "Alias for --ignore for compatibility with ack.",
      args: {
        name: "NAME",
        description: "The directory to ignore",
      },
    },

    { name: ["-i", "--ignore-case"], description: "Match case-insensitively." },

    {
      name: ["-l", "--files-with-matches"],
      description:
        "Only print the names of files containing matches, not the matching lines. An empty query will print all files that would be searched.",
    },

    {
      name: ["-L", "--files-without-matches"],
      description: "Only print the names of files that don't contain matches.",
    },

    { name: "--list-file-types", description: "See FILE TYPES below." },

    {
      name: ["-m", "--max-count"],
      description:
        "Skip the rest of a file after NUM matches. Default is 0, which never skips.",
      args: {
        name: "NUM",
        description: "The number of matches to skip after",
        isOptional: true,
      },
    },

    {
      name: "--mmap",
      description:
        "Use of memory-mapped I/O. Defaults to true on platforms where mmap() is faster than read(). (All but macOS.)",
    },

    {
      name: "--nommap",
      description:
        "Don't use of memory-mapped I/O. Defaults to true on platforms where mmap() is faster than read(). (All but macOS.)",
    },

    {
      name: "--multiline",
      description: "Match regexes across newlines.",
    },

    {
      name: "--nomultiline",
      description: "Don't match regexes across newlines",
    },

    {
      name: ["-n", "--norecurse"],
      description: "Don't recurse into directories.",
    },

    {
      name: "--numbers",
      description: "Print line numbers.",
    },

    {
      name: "--nonumbers",
      description: "Don't print line numbers.",
    },

    {
      name: ["-o", "--only-matching"],
      description: "Print only the matching part of the lines.",
    },

    {
      name: "--one-device",
      description:
        "When  recursing  directories, don't scan dirs that reside on other storage devices. This lets you avoid scanning slow network mounts. This feature is not supported on all platforms.",
    },

    {
      name: ["-p", "--path-to-ignore"],
      description: "Provide a path to a specific .ignore file.",
      args: {
        name: "STRING",
        description: "The path to the ignore file",
      },
    },

    {
      name: "--pager",
      description:
        "Use a pager such as less. Use --nopager to override. This option is also ignored if output is piped to another program.",
      args: {
        name: "COMMAND",
        description: "The pager",
      },
    },

    {
      name: "--parallel",
      description:
        'Parse the input stream as a search term, not data to search. This is meant to be  used  with  tools  such  as  GNU  parallel.  For  example:  echo "foo\nbar\nbaz" | parallel "ag {} ." will run 3 instances of ag, searching the current directory for "foo", "bar", and "baz".',
    },

    {
      name: "--print-long-lines",
      description:
        "Print matches on very long lines (> 2k characters by default).",
    },

    {
      name: ["--passthrough", "--passthru"],
      description:
        "When searching a stream, print all lines even if they don't match.",
    },

    {
      name: ["-Q", "--literal"],
      description:
        "Do not parse PATTERN as a regular expression. Try to match it literally.",
    },

    {
      name: ["-r", "--recurse"],
      description: "Recurse into directories when searching. Default is true.",
    },

    {
      name: ["-s", "--case-sensitive"],
      description: "Match case-sensitively.",
    },

    {
      name: ["-S", "--smart-case"],
      description:
        "Match case-sensitively if there are any uppercase letters in PATTERN, case-insensitively otherwise. Enabled by default.",
    },

    {
      name: "--search-binary",
      description: "Search binary files for matches.",
    },

    {
      name: "--silent",
      description: "Suppress all log messages, including errors.",
    },

    {
      name: "--stats",
      description: "Print stats (files scanned, time taken, etc).",
    },

    {
      name: "--stats-only",
      description:
        "Print stats (files scanned, time taken, etc) and nothing else.",
    },

    {
      name: ["-t", "--all-text"],
      description: "Search all text files. This doesn't include hidden files.",
    },

    {
      name: ["-u", "--unrestricted"],
      description:
        "Search all files. This ignores .ignore, .gitignore, etc. It searches binary and hidden files as well.",
    },

    {
      name: ["-U", "--skip-vcs-ignores"],
      description:
        "Ignore VCS ignore files (.gitignore, .hgignore), but still use .ignore.",
    },

    {
      name: ["-v", "--invert-match"],
      description: "Match every line not containing the specified pattern.",
    },

    { name: ["-V", "--version"], description: "Print version info." },

    {
      name: "--vimgrep",
      description:
        "Output results in the same form as Vim's :vimgrep /pattern/g Here is a ~/.vimrc configuration example: set grepprg=ag --vimgrep $* set grepformat=%f:%l:%c:%m Then use :grep to grep for something. Then use :copen, :cn, :cp, etc. to navigate through the matches.",
    },

    { name: ["-w", "--word-regexp"], description: "Only match whole words." },

    {
      name: "--workers",
      description:
        "Use NUM worker threads. Default is the number of CPU cores, with a max of 8.",
      args: {
        name: "NUM",
        description: "The NUM of worker threads",
        isOptional: true,
      },
    },

    {
      name: ["-z", "--search-zip"],
      description:
        "Search contents of compressed files. Currently, gz and xz are supported. This option requires that ag is built with lzma and zlib.",
    },

    {
      name: ["-0", "--null", "--print0"],
      description:
        "Separate the filenames with \0, rather than \n: this allows xargs -0 <command> to correctly process filenames containing spaces or newlines.",
    },
  ],
};

export default completionSpec;
