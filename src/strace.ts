const completionSpec: Fig.Spec = {
  name: "strace",
  description:
    "Trace system calls and signals of a command or an existing process",
  args: {
    name: "command",
    description:
      "Command with arguments to trace (use -p to attach to a process instead)",
    isVariadic: true,
    isOptional: true,
  },
  options: [
    // Startup
    {
      name: ["-E", "--env"],
      description:
        "Run the command with the environment variable var set to val, or remove var from the inherited environment",
      isRepeatable: true,
      args: { name: "var[=val]", description: "Environment variable" },
    },
    {
      name: ["-p", "--attach"],
      description: "Attach to the process with PID and begin tracing",
      isRepeatable: true,
      args: { name: "pid", description: "Process ID to attach to" },
    },
    {
      name: ["-u", "--user"],
      description:
        "Run the command with the user ID, group ID, and supplementary groups of username (root only), or with exactly UID:GID",
      args: { name: "username", description: "Username or UID:GID" },
    },
    {
      name: "--argv0",
      description:
        "Use name instead of the command as the argv[0] of the executed command",
      args: { name: "name", description: "Value for argv[0]" },
    },
    // Tracing
    {
      name: ["-b", "--detach-on"],
      description:
        "Detach all tracees when the specified syscall is reached (currently only execve)",
      args: { name: "syscall", suggestions: ["execve"] },
    },
    {
      name: "-D",
      description:
        "Run the tracer process as a grandchild, not the parent of the tracee",
    },
    {
      name: "-DD",
      description: "Run the tracer as a grandchild in a separate process group",
    },
    {
      name: "-DDD",
      description:
        "Run the tracer as a grandchild in a separate session (true daemonisation)",
    },
    {
      name: ["-f", "--follow-forks"],
      description:
        "Trace child processes as they are created by currently traced processes (fork, vfork, clone)",
    },
    {
      name: "--output-separately",
      description:
        "Write each tracee's trace to a separate output file (used with -o, implies -f)",
    },
    {
      name: "-ff",
      description:
        "Combines --follow-forks and --output-separately (writes child traces to filename.pid files)",
    },
    {
      name: ["-I", "--interruptible"],
      description:
        "When a signal is received, control strace's interruptibility",
      args: {
        name: "n",
        suggestions: ["1", "2", "3", "4"],
      },
    },
    {
      name: "--syscall-limit",
      description:
        "Detach all tracees when the given number of syscalls have been captured",
      args: {
        name: "limit",
        description: "Maximum number of syscalls to capture",
      },
    },
    {
      name: "--kill-on-exit",
      description:
        "Apply PTRACE_O_EXITKILL so that tracees get SIGKILL if the tracer exits",
    },
    // Filtering
    {
      name: "--trace",
      description:
        "Trace only the specified set of syscalls. A qualifying expression (see -e trace=...)",
      args: {
        name: "set",
        description: "Comma-separated syscall set (e.g. %net, open,read)",
      },
    },
    {
      name: "-e",
      description:
        "Qualifying expression modifying which events to trace or how to trace them (trace=, trace-fd=, signal=, status=, abbrev=, verbose=, raw=, read=, write=, quiet=, decode-fds=, decode-pids=, inject=, fault=, kvm=, namespace=)",
      isRepeatable: true,
      args: { name: "expr", description: "E.g. trace=%file" },
    },
    {
      name: ["-P", "--trace-path"],
      description: "Trace only system calls accessing the given path",
      isRepeatable: true,
      args: {
        name: "path",
        description: "Path to trace",
        template: "filepaths",
      },
    },
    {
      name: ["-z", "--successful-only"],
      description:
        "Print only system calls that returned without an error code",
    },
    {
      name: ["-Z", "--failed-only"],
      description: "Print only system calls that returned with an error code",
    },
    // Output format
    {
      name: ["-a", "--columns"],
      description:
        "Align return values in a specific column (default column 40)",
      args: { name: "column", description: "Alignment column" },
    },
    {
      name: "-i",
      description:
        "Print the instruction pointer at the time of the system call",
    },
    {
      name: ["-n", "--syscall-number"],
      description: "Print the syscall number in the trace output",
    },
    {
      name: ["-N", "--arg-names"],
      description: "Print syscall argument names in the trace output",
    },
    {
      name: ["-k", "--stack-trace"],
      description:
        "Print the execution stack trace of the traced processes after each system call",
    },
    {
      name: "-kk",
      description:
        "Print the execution stack trace with source code line information (if available)",
    },
    {
      name: "--stack-trace-frame-limit",
      description:
        "Limit the number of printed stack trace frames (default 256)",
      args: { name: "limit", description: "Maximum stack frames" },
    },
    {
      name: ["-o", "--output"],
      description:
        "Write the trace output to the file filename (or to a command via |cmd or !cmd)",
      args: {
        name: "filename",
        description: "Output file or pipe target",
        template: "filepaths",
      },
    },
    {
      name: ["-A", "--output-append-mode"],
      description: "Open the file provided in the -o option in append mode",
    },
    {
      name: "--color",
      description: "Colourise the output",
      args: {
        name: "when",
        suggestions: ["auto", "always", "never"],
      },
    },
    {
      name: "-q",
      description:
        "Suppress messages about attaching, detaching, and personality changes",
    },
    {
      name: "-qq",
      description: "Also suppress messages about process exit status",
    },
    {
      name: "-qqq",
      description: "Suppress all suppressible informational messages",
    },
    {
      name: ["-r", "--relative-timestamps"],
      description:
        "Print a relative timestamp upon entry to each system call (records the time difference between successive system calls)",
      args: { name: "precision", isOptional: true },
    },
    {
      name: ["-s", "--string-limit"],
      description:
        "Limit the printing of strings to strsize characters (default 32)",
      args: { name: "strsize", description: "Maximum string size" },
    },
    {
      name: ["-t", "--absolute-timestamps"],
      description: "Prefix each line of the trace with the wall clock time",
    },
    {
      name: "-tt",
      description:
        "Prefix each line with the wall clock time including microseconds",
    },
    {
      name: "-ttt",
      description:
        "Prefix each line with the epoch time in seconds with microsecond accuracy",
    },
    {
      name: "--timestamps",
      description:
        "Prefix each line with the wall clock time in the given format and precision",
      args: { name: "format[:precision]", isOptional: true },
    },
    {
      name: ["-T", "--syscall-times"],
      description:
        "Show the time spent in system calls, printed as a duration on the system call exit line",
      args: { name: "precision", isOptional: true },
    },
    {
      name: ["-v", "--no-abbrev"],
      description:
        "Disable abbreviation of large structures in the trace output",
    },
    {
      name: "--strings-in-hex",
      description: "Control hex escaping of strings in the output",
      args: {
        name: "option",
        isOptional: true,
        suggestions: ["none", "non-ascii-chars", "non-ascii", "all"],
      },
    },
    {
      name: "-x",
      description: "Print all non-ASCII strings in hexadecimal string format",
    },
    {
      name: "-xx",
      description: "Print all strings in hexadecimal string format",
    },
    {
      name: ["-X", "--const-print-style"],
      description: "Set the printing style for constants and flags",
      args: {
        name: "format",
        suggestions: ["raw", "abbrev", "verbose"],
      },
    },
    {
      name: "-y",
      description: "Print paths associated with file descriptor arguments",
    },
    {
      name: "-yy",
      description:
        "Print all available information associated with file descriptor arguments (paths, sockets, devices, etc.)",
    },
    {
      name: "-Y",
      description: "Print command names associated with PID arguments",
    },
    {
      name: "--pidns-translation",
      description: "Translate PIDs across PID namespaces",
    },
    {
      name: "--secontext",
      description:
        "Print SELinux contexts of processes, files, and descriptors",
      args: {
        name: "format",
        isOptional: true,
        suggestions: ["full", "mismatch"],
      },
    },
    {
      name: "--always-show-pid",
      description: "Show the PID prefix for the main process too",
    },
    // Statistics
    {
      name: ["-c", "--summary-only"],
      description:
        "Count time, calls, and errors for each system call and report a summary, suppressing regular output",
    },
    {
      name: ["-C", "--summary"],
      description:
        "Like -c but also print regular output in addition to the summary",
    },
    {
      name: ["-O", "--summary-syscall-overhead"],
      description:
        "Override the estimated syscall tracing overhead used in the summary",
      args: { name: "overhead", description: "Overhead in nanoseconds" },
    },
    {
      name: ["-S", "--summary-sort-by"],
      description:
        "Sort the output of the summary histogram by the specified column",
      args: {
        name: "sortby",
        suggestions: ["time", "calls", "errors", "name", "none"],
      },
    },
    {
      name: ["-U", "--summary-columns"],
      description:
        "Configure the set and order of columns shown in the summary output",
      args: {
        name: "columns",
        description: "Column set (e.g. name,time,%time)",
      },
    },
    {
      name: ["-w", "--summary-wall-clock"],
      description:
        "Summarise the wall clock time of system calls instead of system time",
    },
    // Tampering
    {
      name: "--inject",
      description:
        "Perform syscall tampering: inject errors, return values, signals, delays, or memory pokes for the specified syscall set",
      isRepeatable: true,
      args: {
        name: "set[:arg]",
        description: 'E.g. "openat:error=ENOENT" or "read:delay_enter=100ms"',
      },
    },
    {
      name: "--fault",
      description:
        "Inject a syscall fault (default error ENOSYS) for the specified syscall set",
      isRepeatable: true,
      args: {
        name: "set[:error=errno][:when=expr]",
        description: "Fault injection spec",
      },
    },
    // Miscellaneous
    {
      name: ["-d", "--debug"],
      description: "Show some debugging output of strace itself",
    },
    {
      name: "-F",
      description:
        "Deprecated backward-compatibility option (attempt to follow forks)",
      deprecated: true,
    },
    {
      name: "--seccomp-bpf",
      description:
        "Turn on seccomp-bpf filtering so the kernel stops the tracee only for traced syscalls",
    },
    {
      name: "--tips",
      description: "Show strace tips and tricks before exit",
      args: { name: "[id:]id,[format:]format", isOptional: true },
    },
    {
      name: ["-h", "--help"],
      description: "Print the help summary",
    },
    {
      name: ["-V", "--version"],
      description: "Print the version number and enabled optional features",
    },
  ],
};

export default completionSpec;
