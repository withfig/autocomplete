const rangeArg: Fig.Arg = {
  name: "range",
  isOptional: true,
  description:
    "A time range such as 'today', 'yesterday', '<date> - <date>', or a specific <date>",
};

const completionSpec: Fig.Spec = {
  name: "timew",
  description:
    "Timewarrior: a command-line time tracker that records and reports intervals",
  subcommands: [
    {
      name: "start",
      description: "Start tracking a new interval",
      args: {
        name: "date or tag",
        isVariadic: true,
        description: "Optional start date/time and tags",
      },
    },
    {
      name: "stop",
      description: "Stop tracking the open interval",
      args: { name: "date or tag", isVariadic: true, isOptional: true },
    },
    {
      name: "track",
      description: "Add a closed interval to the database",
      args: {
        name: "range and tags",
        isVariadic: true,
        description: "A range followed by tags",
      },
    },
    {
      name: "continue",
      description: "Resume tracking with the tags of a previous interval",
      args: { name: "id or offset", isOptional: true },
    },
    {
      name: "cancel",
      description: "Cancel the open interval, discarding it",
    },
    {
      name: "tag",
      description: "Add tags to a range or the latest matched interval",
      args: { name: "range and tags", isVariadic: true },
    },
    {
      name: "untag",
      description: "Remove tags from a range or the latest matched interval",
      args: { name: "range and tags", isVariadic: true },
    },
    {
      name: "retag",
      description: "Replace tags on a range with new tags",
      args: { name: "range and tags", isVariadic: true },
    },
    {
      name: "annotate",
      description: "Add an annotation to an interval",
      args: [
        { name: "id", description: "Interval id (see :ids)" },
        { name: "annotation", isOptional: true },
      ],
    },
    {
      name: "join",
      description: "Join two intervals into one",
      args: [{ name: "id" }, { name: "id" }],
    },
    {
      name: "split",
      description: "Split an interval at the given duration or datetime",
      args: [
        { name: "id" },
        { name: "duration or datetime", isOptional: true },
      ],
    },
    {
      name: "move",
      description: "Move an interval to another start time",
      args: [
        { name: "id" },
        { name: "date", description: "New start datetime" },
      ],
    },
    {
      name: "lengthen",
      description: "Lengthen an interval by the given duration",
      args: [{ name: "id" }, { name: "duration" }],
    },
    {
      name: "shorten",
      description: "Shorten an interval by the given duration",
      args: [{ name: "id" }, { name: "duration" }],
    },
    {
      name: "resize",
      description: "Resize an interval to the given duration",
      args: [{ name: "id" }, { name: "duration" }],
    },
    {
      name: "modify",
      description: "Change start, end, or tags of an interval",
      args: [
        {
          name: "aspect",
          suggestions: ["start", "end", "tags"],
        },
        { name: "id", isOptional: true },
        { name: "value", isOptional: true, isVariadic: true },
      ],
    },
    {
      name: "delete",
      description: "Delete intervals matching the range",
      args: { ...rangeArg },
    },
    {
      name: "undo",
      description: "Undo the last configuration or interval change",
    },
    {
      name: "day",
      description: "Display a chart of the current day",
      args: { ...rangeArg },
    },
    {
      name: "week",
      description: "Display a chart of the current week",
      args: { ...rangeArg },
    },
    {
      name: "month",
      description: "Display a chart of the current month",
      args: { ...rangeArg },
    },
    {
      name: "summary",
      description: "Display a summary of tracked time by tag",
      args: { ...rangeArg },
    },
    {
      name: "gaps",
      description: "Display untracked gaps within the range",
      args: { ...rangeArg },
    },
    {
      name: "chart",
      description: "Display a chart (alias of day/week/month)",
      args: { ...rangeArg },
    },
    {
      name: "tags",
      description: "List the tags in use, filtered by range",
      args: { ...rangeArg },
    },
    {
      name: "export",
      description: "Export intervals as JSON",
      args: { ...rangeArg },
    },
    {
      name: "import",
      description: "Import intervals from JSON on standard input",
    },
    {
      name: "report",
      description: "Run an extension report",
      args: {
        name: "report name",
        description: "Name of an installed extension report",
      },
    },
    {
      name: "get",
      description: "Extract DOM references from the database",
      args: { name: "dom reference", isVariadic: true },
    },
    {
      name: "config",
      description: "Get, set, or delete configuration values",
      args: [
        {
          name: "action",
          suggestions: ["get", "set", "delete"],
        },
        { name: "name", isOptional: true },
        { name: "value", isOptional: true },
      ],
    },
    {
      name: "show",
      description: "Show the current configuration",
    },
    {
      name: "diagnostics",
      description: "Show configuration and diagnostic details",
    },
    {
      name: "extensions",
      description: "List installed extension reports",
    },
    {
      name: "fill",
      description: "Fill in the gaps between intervals within the range",
      args: { ...rangeArg },
    },
    {
      name: "help",
      description: "Show help for a command",
      args: { name: "command", isOptional: true },
    },
  ],
  options: [
    {
      name: "--version",
      description: "Show the version number",
    },
    {
      name: "--help",
      description: "Show usage help",
    },
    {
      name: "--verbose",
      description: "Show all interval changes",
    },
    {
      name: "--quiet",
      description: "Suppress all output",
    },
    {
      name: ":color",
      description: "Force color output",
    },
    {
      name: ":nocolor",
      description: "Suppress color output",
    },
    {
      name: ":ids",
      description: "Show interval ids in output",
    },
    {
      name: ":yes",
      description: "Answer confirmation prompts with yes",
    },
  ],
};

export default completionSpec;
