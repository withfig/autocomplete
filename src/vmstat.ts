const completionSpec: Fig.Spec = {
  name: "vmstat",
  description:
    "Report virtual memory statistics. If no delay is specified, only one report is printed with the average values since boot",
  args: [
    {
      name: "delay",
      description:
        "The delay between updates in seconds (with no count, defaults to infinite updates)",
      isOptional: true,
    },
    {
      name: "count",
      description:
        "Number of updates (default is infinite when delay is given)",
      isOptional: true,
    },
  ],
  options: [
    {
      name: ["-a", "--active"],
      description: "Display active and inactive memory",
    },
    {
      name: ["-f", "--forks"],
      description:
        "Display the number of forks since boot. This includes the fork, vfork, and clone system calls, and is equal to the number of tasks created. This display does not repeat",
    },
    {
      name: ["-m", "--slabs"],
      description: "Display slabinfo",
    },
    {
      name: ["-n", "--one-header"],
      description: "Display the header only once rather than periodically",
    },
    {
      name: ["-s", "--stats"],
      description:
        "Display a table of various event counters and memory statistics. This display does not repeat",
    },
    {
      name: ["-d", "--disk"],
      description: "Report disk statistics",
    },
    {
      name: ["-D", "--disk-sum"],
      description: "Report some summary statistics about disk activity",
    },
    {
      name: ["-p", "--partition"],
      description: "Detailed statistics about partition",
      args: {
        name: "device",
        description: "Partition device to report on",
      },
    },
    {
      name: ["-S", "--unit"],
      description:
        "Switches outputs between 1000 (k), 1024 (K), 1000000 (m), or 1048576 (M) bytes. Note this does not change the block (bi/bo) fields, which are always measured in 1024-byte blocks",
      args: {
        name: "character",
        suggestions: ["k", "K", "m", "M"],
      },
    },
    {
      name: ["-t", "--timestamp"],
      description: "Append timestamp to output",
    },
    {
      name: ["-w", "--wide"],
      description:
        "Wide output mode. Don't print fixed width columns, allowing columns to exceed 80 characters (useful for systems with large amounts of memory)",
    },
    {
      name: ["-y", "--no-first"],
      description: "Omits first report with statistics since system boot",
    },
    {
      name: ["-V", "--version"],
      description: "Display version information and exit",
    },
    {
      name: ["-h", "--help"],
      description: "Display help and exit",
    },
  ],
};

export default completionSpec;
