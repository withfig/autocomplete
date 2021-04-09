var completionSpec = {
    name: "rake",
    description: "a ruby build program with capabilities similar to make",
    args: {
        name: "targets",
        variadic: true,
    },
    options: [
        {
            name: ["-n", "--dry-run"],
            description: "Do a dry run without executing actions.",
        },
        {
            name: ["-H", "--help"],
            description: "Display this help message.",
        },
        {
            name: ["-I", "--libdir=LIBDIR"],
            description: "Include LIBDIR in the search path for required modules.",
        },
        {
            name: ["-P", "--prereqs"],
            description: "Display the tasks and dependencies, then exit.",
        },
        {
            name: ["-q", "--quiet"],
            description: "Do not log messages to standard output",
        },
        {
            name: ["-f", "--rakefile=FILE"],
            description: "Use FILE as the rakefile.",
        },
        {
            name: ["-r", "--require=MODULE"],
            description: "Require MODULE before executing rakefile.",
        },
        {
            name: ["-s", "--silent"],
            description: "Like --quiet, but also suppresses the 'in directory' announcement.",
        },
        {
            name: ["-T", "--tasks"],
            description: "Display the tasks and dependencies, then exit.",
        },
        {
            name: ["-t", "--trace"],
            description: "Turn on invoke/execute tracing, enable full backtrace.",
        },
        { name: ["-h", "--usage"], description: "Display usage." },
        {
            name: ["-v", "--verbose"],
            description: "Log message to standard output (default).",
        },
        {
            name: ["-V", "--version"],
            description: "Display the program version.",
        },
    ],
};

