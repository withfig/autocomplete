const completionSpec: Fig.Spec = {
  name: "dateseq",
  description:
    "Nifty command line date and time utilities; fast date calculations and conversion in the shell",
  options: [
    {
      name: ["--help", "-h"],
      description: "Print help and exit",
    },
    {
      name: ["--version", "-V"],
      description: "Print version and exit",
    },
    {
      name: ["--quiet", "-q"],
      description:
        "Suppress message about date/time and duration parse errors and fix-ups",
    },
    {
      name: ["-f", "--format"],
      description:
        "Output format. This can either be a specifier string (similar to strftime()'s FMT) or the name of a calendar",
      requiresSeparator: true,
      args: {
        name: "string",
      },
    },
    {
      name: ["-i", "--input-format"],
      description:
        "Input format, can be used multiple times. Each date/time will be passed to the input format parsers in the order they are given, if a date/time can be read successfully with a given input format specifier string, that value will be used",
      requiresSeparator: true,
      args: {
        name: "input format",
      },
    },
    {
      name: ["-b", "--base"],
      description:
        "For underspecified input use DT as a fallback to fill in missing fields. Also used for ambiguous format specifiers to position their range on the absolute time line. Must be a date/time in ISO8601 format. If omitted defaults to the current date/time",
      requiresSeparator: true,
      args: {
        name: "base",
      },
    },
    {
      name: ["-e", "--backslash-escapes"],
      description:
        "Enable interpretation of backslash escapes in the output and input format specifier strings",
    },
    {
      name: "--locale",
      description:
        "Format results according to LOCALE, this would only affect month and weekday names",
      args: {
        name: "locale",
      },
    },
    {
      name: ["-s", "--skip"],
      description:
        "Skip weekdays specified by WEEKDAY. WEEKDAY can be a single weekday (Mon, Tue, etc.), and to skip several days the --skip option can be used multiple times. WEEKDAY can also be a comma-separated list of weekday names, or `ss' to skip weekends (sat+sun) altogether. WEEKDAY can also contain date ranges like `mo-we' for Monday to Wednesday",
      args: {
        name: "weekday",
        isVariadic: true,
      },
    },
    {
      name: "--alt-inc",
      description:
        "Alternative increment to use when a date is hit that is skipped as per --skip. This increment will be applied until a non-skipped date is reached. The special case `0' (default) deactivates alternative incrementing.  A useful value could be `1d' for increasing sequences and `-1d' for decreasing sequences, so if a skipped date is encountered the next non-skipped date after/before will be used",
      args: {
        name: "alternative increment",
      },
    },
    {
      name: "--compute-from-last",
      description:
        "Compute a start value from LAST using INCREMENT. This option has an effect only when INCREMENT is not a divisor of the duration between FIRST and LAST. In such case, an alternative FIRST will be computed by consecutively subtracting INCREMENT from LAST until FIRST is hit or crossed",
    },
  ],
  args: [
    {
      name: "FIRST",
      description: "Date/time",
    },
    {
      name: "INCREMENT",
      isOptional: true,
    },
    {
      name: "LAST",
      description: "Date/time",
    },
  ],
};
export default completionSpec;
