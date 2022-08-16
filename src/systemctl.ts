const completionSpec: Fig.Spec = {
  name: "systemctl",
  description: "",
  subcommands: [
    {
      name: "list-units",
      description: "List units currently in memory",
      args: {
        name: "PATTERN",
        isVariadic: true,
      },
    },
    {
      name: "list-sockets",
      description: "List socket units currently in memory ordered by address",
      args: {
        name: "PATTERN",
        isVariadic: true,
      },
    },
    {
      name: "list-timers",
      description:
        "List timer units currently in memory ordered by next elapse",
      args: {
        name: "PATTERN",
        isVariadic: true,
      },
    },
    {
      name: "is-active",
      description: "Check whether units are active",
      args: {
        name: "PATTERN",
        isVariadic: true,
      },
    },
    {
      name: "is-failed",
      description: "Check whether units are failed",
      args: {
        name: "PATTERN",
        isVariadic: true,
      },
    },
    {
      name: "status",
      description: "Show runtime status of one or more units",
      args: {
        name: "PATTERN or PID",
        isVariadic: true,
      },
    },
    {
      name: "show",
      description: "Show properties of one or more",
      args: {
        name: "PATTERN or JOB",
        isVariadic: true,
      },
    },
    {
      name: "cat",
      description: "Show files and drop-ins of specified units",
      args: {
        name: "PATTERN",
        isVariadic: true,
      },
    },
    {
      name: "help",
      description: "Show manual for one or more units",
      args: {
        name: "PATTERN or PID",
        isVariadic: true,
      },
    },
    {
      name: "list-dependencies",
      description:
        "Recursively show units which are requiredor wanted by the units or by which those units are required or wanted",
      args: {
        name: "PATTERN",
        isVariadic: true,
      },
    },
    {
      name: "start",
      description: "Start (activate) one or more units",
      args: {
        name: "UNIT",
        isVariadic: true,
      },
    },
    {
      name: "stop",
      description: "Stop (deactivate) one or more units",
      args: {
        name: "UNIT",
        isVariadic: true,
      },
    },
    {
      name: "reload",
      description: "Reload one or more units",
      args: {
        name: "UNIT",
        isVariadic: true,
      },
    },
    {
      name: "restart",
      description: "Start or restart one or more units",
      args: {
        name: "UNIT",
        isVariadic: true,
      },
    },
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Show this help",
    },
    {
      name: "--version",
      description: "Show package version",
    },
    {
      name: "--system",
      description: "Connect to system manager",
    },
    {
      name: "--user",
      description: "Connect to user service manager",
    },
    {
      name: ["-H", "--host"],
      description: "Operate on remote host",
      args: { name: "[USER@]HOST" },
    },
    {
      name: ["-M", "--machine"],
      description: "Operate on a local container",
      args: { name: "CONTAINER" },
    },
    {
      name: ["-t", "--type"],
      description: "List units of a particular type",
      args: { name: "TYPE" },
    },
    {
      name: "--state",
      description: "List units with particular LOAD or SUB or ACTIVE state",
      exclusiveOn: ["--failed"],
      args: {
        name: "STATE",
      },
    },
    {
      name: "--failed",
      description: "Shortcut for --state=failed",
      exclusiveOn: ["--state"],
    },
    {
      name: ["-p", "--property"],
      description: "Show only properties by this name",
      exclusiveOn: ["-P"],
      args: {
        name: "NAME",
      },
    },
    {
      name: "-P",
      description: "Equivalent to --value --property=NAME",
      exclusiveOn: ["-p", "--property", "--value"],
    },
    {
      name: ["-a", "--all"],
      description:
        "Show all properties/all units currently in memory, including dead/empty ones. To list all units installed on the system, use 'list-unit-files' instead",
    },
    {
      name: ["-l", "--full"],
      description: "Don't ellipsize unit names on output",
    },
    {
      name: ["-r", "--recursive"],
      description: "Show unit list of host and local containers",
    },
    {
      name: "--reverse",
      description: "Show reverse dependencies with 'list-dependencies'",
    },
    {
      name: "--with-dependencies",
      description:
        "Show unit dependencies with 'status', 'cat', 'list-units', and 'list-unit-files'",
    },
    {
      name: "--job-mode",
      description:
        "Specify how to deal with already queued jobs, when queueing a new job",
      args: {
        name: "MODE",
      },
    },
    {
      name: ["-T", "--show-transaction"],
      description: "When enqueuing a unit job, show full transaction",
    },
    {
      name: "--show-types",
      description: "When showing sockets, explicitly show their type",
    },
    {
      name: "--value",
      description: "When showing properties, only print the value",
      exclusiveOn: ["-P"],
    },
    {
      name: "--check-inhibitors",
      description:
        "Specify if checking inhibitors before shutting down sleeping or hibernating",
      exclusiveOn: ["-i"],
      args: {
        name: "MODE",
      },
    },
    {
      name: "-i",
      description: "Shortcut for --check-inhibitors=no",
      exclusiveOn: ["--check-inhibitors"],
    },
    {
      name: "--kill-who",
      description: "Whom to send signal to",
      args: {
        name: "WHO",
      },
    },
    {
      name: ["-s", "--signal"],
      description: "Which signal to send",
      args: {
        name: "SIGNAL",
      },
    },
    {
      name: "--what",
      description: "Which types of resources to remove",
      args: {
        name: "RESOURCES",
      },
    },
    {
      name: "--now",
      description: "Start or stop unit after enabling or disabling it",
    },
    {
      name: "--dry-run",
      description: "Only print what would be done",
    },
    {
      name: ["-q", "--quiet"],
      description: "Supress output",
    },
    {
      name: "--wait",
      description:
        "For (re)start, wait until service stopped again. For is-system-running, wait until startup is completed",
    },
    {
      name: "--no-block",
      description: "Do not wait until operation finished",
    },
    {
      name: "--no-wall",
      description: "Don't send wall message before halt/power-off/reboot",
    },
    {
      name: "--no-reload",
      description: "Don't reload daemon after en-/dis-abling unit files",
    },
    {
      name: "--legend",
      description: "Enable/disable the legend (column headers and hints)",
      args: {
        name: "BOOL",
        suggestions: ["true", "false"],
      },
    },
    {
      name: "--no-pager",
      description: "Do not pipe output into a pager",
    },
    {
      name: "--no-ask-password",
      description: "Do not ask for system passwords",
    },
    {
      name: "--global",
      description: "Edit/enable/disable/mask default user unit files globally",
    },
    {
      name: "--runtime",
      description:
        "Edit/enable/disable/mask unit files temporarily until next reboot",
    },
    {
      name: ["-f", "--force"],
      description:
        "When enabling unit files, override existing symlinks. When shutting down, execute action immediately",
    },
    {
      name: "--preset-mode",
      description: "Apply only enable, only disable, or all presets",
      args: {
        name: "MODE",
      },
    },
    {
      name: "--root",
      description:
        "Edit/enable/disable/mask unit files in the specified root directory",
      args: {
        name: "PATH",
      },
    },
    {
      name: ["-n", "--lines"],
      description: "Number of journal entries to show",
      args: {
        name: "N",
      },
    },
    {
      name: ["-o", "--output"],
      description: "Change journal output mode",
      args: {
        name: "MODE",
        suggestions: [
          "short",
          "short-precise",
          "short-iso",
          "short-iso-precise",
          "short-full",
          "short-monotonic",
          "short-unix",
          "verbose",
          "export",
          "json",
          "json-pretty",
          "json-sse",
          "cat",
        ],
      },
    },
    {
      name: "--firmware-setup",
      description: "Tell the firmware to show the setup menu on next boot",
    },
    {
      name: "--boot-loader-menu",
      description: "Boot into boot loader menu on next boot",
      args: {
        name: "TIME",
      },
    },
    {
      name: "--boot-loader-entry",
      description: "Boot into a specific boot loader entry on next boot",
      args: {
        name: "NAME",
      },
    },
    {
      name: "--plain",
      description: "Print unit dependencies as a list instead of a tree",
    },
    {
      name: "--timestamp",
      description: "Change format of printed timestamps",
      args: {
        name: "FORMAT",
        suggestions: ["pretty", "unix", "us", "utc", "us+utc"],
      },
    },
    {
      name: "--read-only",
      description: "Create read-only bind mount",
    },
    {
      name: "--mkdir",
      description: "Create directory before mounting, if missing",
    },
    {
      name: "--marked",
      description: "Restart/reload previously marked units",
    },
  ],
};
export default completionSpec;
