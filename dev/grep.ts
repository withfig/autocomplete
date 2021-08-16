const completionSpec: Fig.Spec = {
  name: "grep",
  description:
    "Matches patterns in input text. Supports simple patterns and regular expressions.",
  args: [
    {
      name: "search pattern",
      isOptional: true,
    },
    {
      name: "file",
      template: "filepaths",
      isOptional: true,
      isVariadic: true,
    },
  ],
  options: [
    {
      name: ["-a", "--text"],
      description:
        "Treat all files as ASCII text. Normally grep will simply print ``Binary file ... matches'' if files contain binary characters. Use of this option forces grep to output lines matching the specified pattern.",
    },
    {
      name: ["-b", "--byte-offset"],
      description:
        "The offset in bytes of a matched pattern is displayed in front of the respective matched line.",
    },
    {
      name: ["-c", "--count"],
      description:
        "Only a count of selected lines is written to standard output.",
    },
    {
      name: ["--colour", "color"],
      description:
        "Mark up the matching text with teh expression stored in GREP_COLOR environment variable.",
      args: [
        {
          name: "when",
          suggestions: ["never", "always", "auto"],
        },
      ],
    },
    {
      name: ["-D", "--devices"],
      description:
        "Specify the demanded action for devices, FIFOs and sockets. The default action is `read', which means, that they are read as if they were normal files. If the action is set to `skip', devices will be silently skipped.",
      args: [
        {
          name: "action",
          suggestions: ["read", "skip"],
          default: "read",
        },
      ],
    },
    {
      name: ["-d", "--directories"],
      description:
        "Specify the demanded action for directories. It is `read' by default, which means that the directories are read in the same manner as normal files. Other possible values are `skip' to silently ignore the directories, and `recurse' to read them recursively, which has the same effect as the -R and -r option.",
      args: [
        {
          name: "action",
          suggestions: ["read", "skip", "recurse"],
          default: "read",
        },
      ],
    },
    {
      name: ["-E", "--extended-regexp"],
      description:
        "Interpret pattern as an extended regular expression (i.e. force grep to behave as egrep).",
    },
    {
      name: ["-e", "--regexp"],
      description:
        "Specify a pattern used during the search of the input: an input line is selected if it matches any of the specified patters. This option is most useful when multiple -e options are used to specify multiple patterns, or when a pattern begins with a dash (`-').",
      isRepeatable: true,
      args: [
        {
          name: "pattern",
        },
      ],
    },
    {
      name: "--exclude",
      description:
        "If specified, it excludes files matching the given filename pattern from the search. Note that --exclude patterns take priority over --include patterns, and if no --include pattern is specified, all files are searched that are not excluded. Patterns are matched to teh full path specified, not only to the filename component.",
    },
    {
      name: "--exclude-dir",
      dependsOn: ["-R"],
      description:
        "If -R is specified, it excludes directories matching the given filename patter from the search. Note that --exclude-dir patterns take priority over --include-dir patterns, and if no --include-dir pattern is specified, all directories are searched that are no excluded.",
    },
    {
      name: ["-F", "--fixed-strings"],
      description:
        "Interpret pattern as a set of fixed string (i.e. force grep to have as fgrep).",
    },
    {
      name: ["-G", "--basic-regexp"],
      description:
        "Interpret pattern as a basic regular expression (i.e. force grep to behave as traditional grep.",
    },
    {
      name: "-H",
      description: "Always print filename headers with output lines.",
    },
    {
      name: ["-h", "--no-filename"],
      description:
        "Never print filename headers (i.e. filenames) with output lines.",
    },
    {
      name: "--help",
      description: "Print a brief help message",
    },
    {
      name: "-I",
      description:
        "Ignore binary files. This option is equivalent to --binary-file=without-match option.",
    },
    {
      name: ["-i", "--ignore-case"],
      description:
        "Perform case insensitive matching. By default, grep is case sensitive.",
    },
    {
      name: "--include",
      description:
        "If specified, only files matching the given filename pattern are searched. Not that --exclude patterns take priority over --include patterns. Patterns are matched to the full path specified, not only to the filename component.",
    },
    {
      name: "--include-dir",
      dependsOn: ["-R"],
      description:
        "If -R is specified, only directories matching the given filename pattern are searched. Note that --exclude-dir patterns take priority over --include-dir patterns.",
    },
    {
      name: ["J", "--bz2decompress"],
      description:
        "Decompress the bzip2 compressed file before looking for the text.",
    },
    {
      name: ["L", "--files-without-match"],
      description:
        "Only the names of files not containing selected lines are written to standard output. Pathnames are listed once per file searched. If the standard input is searched, the string ``(standard input)'' is written.",
    },
    {
      name: "--mmap",
      description:
        "Use mmap instead of read to read input, which can result in better performance under some circumstances but can cause undefined behaviour.",
    },
    {
      name: ["-m", "--max-count"],
      description: "Stop reading the file after num matches.",
      args: [
        {
          name: "num",
        },
      ],
    },
    {
      name: ["-n", "--line-number"],
      exclusiveOn: ["-c", "-L", "-l", "-q"],
      description:
        "Each output line is preceded by its relative line number in the file, starting at line 1. The line number counter is reset for each file processed. This option is ignored if -c, -L, -l, or -q is specified.",
    },
    {
      name: "--null",
      description: "Prints a zero-byte after the file name.",
    },
    {
      name: "-O",
      dependsOn: ["-R"],
      description:
        "If -R is specified, follow symbolic links only if they were explicitly listed on the command line. The default is not to follow symbolic links.",
    },
    {
      name: ["-o", "--only-matching"],
      description: "Prints only the matching part of the line.",
    },
    {
      name: "-p",
      dependsOn: ["-R"],
      description:
        "If -R is specified, no symbolic links are followed. This is the default.",
    },
    {
      name: ["-q", "--quiet", "--silent"],
      description:
        "Quite mode: suppress normal output. grep will only search a file until a match has been found, making searches potentially less expensive.",
    },
    {
      name: ["-R", "-r", "--recursive"],
      description: "Recursively search subdirectories listed.",
    },
    {
      name: "-S",
      dependsOn: ["-R"],
      description:
        "If -R is specified, all symbolic links are followed. The default is not to follow symbolic links.",
    },
    {
      name: ["-s", "--no-messages"],
      description:
        "Silent mode. Nonexistent and unreadable files are ignored (i.e. their error messages are suppressed).",
    },
    {
      name: ["-U", "--binary"],
      description: "Search binary files, but do not attempt to print them.",
    },
    {
      name: ["-w", "--word-regexp"],
      description:
        "The expression is searched for as a word (as if surrounded by `[[:<:]]' and `[[:>:]]')",
    },
    {
      name: ["-x", "--line-regexp"],
      description:
        "Only input lines selected against an entire fixed string or regular expression are considered to be matching lines.",
    },
    {
      name: ["-Z", "-z", "--decompress"],
      description: "Force grep to behave as zgrep.",
    },
    {
      name: "--binary-files",
      description:
        "Controls searching and printing of binary files. Options are binary, the default: search binary files but do not print them; without-match: do not search binary files; and text: treat all files as text.",
      args: [
        {
          name: "value",
          suggestions: ["binary", "without-match", "text"],
          default: "binary",
        },
      ],
    },
    {
      name: "--context",
      description:
        "Print num lines of leading and trailing context. The default is 2.",
      args: [
        {
          name: "num",
          isOptional: true,
          default: "2",
        },
      ],
    },
    {
      name: "--line-buffered",
      description:
        "Force output to be line buffered. By default, output is line buffered when standard output is a terminal and block buffered otherwise.",
    },
    {
      name: ["-C"],
      description:
        "Print num lines of leading and trailing context surrounding each match. The default is 2 and is equivalent to -A 2 -B 2. Note: no whitespace may be given between the option and its argument.",
      args: [
        {
          name: "num",
          default: "2",
        },
      ],
    },
    {
      name: ["-B", "--before-context"],
      description: "Print num lines of leading context before each match.",
      args: [
        {
          name: "num",
        },
      ],
    },
    {
      name: ["-A", "--after-context"],
      description: "Print num lines of content after each match",
      args: [
        {
          name: "num",
        },
      ],
    },
    {
      name: ["-v", "--invert-match"],
      description:
        "Selected lines are those not matching any of the specified patterns.",
    },
    {
      name: ["-V", "--version"],
      description: "Display version information and exit.",
    },
    {
      name: ["-P", "--perl-regexp"],
      description: "Interpret pattern as a Perl regular expression",
    },
    {
      name: ["-f", "--file"],
      description:
        "Read one of more newline separated patterns from file. Empty pattern lines match every input line. Newlines are not considered part of a pattern. If file is empty, nothing is matched.",
      args: [
        {
          name: "file",
          isOptional: true,
          template: "filepaths",
        },
      ],
    },
  ],
  additionalSuggestions: [
    {
      name: ["-RIn"],
      description:
        "Search for a pattern [R]ecursively in the current directory, showing matching line [n]umbers, [I]gnoring non-text files",
    },
    {
      name: ["-Ei"],
      description:
        "Interpret pattern as a case insensitive extended regular expression.",
    },
    {
      name: ["-Hn"],
      description:
        "Print file name with the corresponding line number (n) for each match",
    },
  ],
};

export default completionSpec;
