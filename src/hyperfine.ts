const completionSpec: Fig.Spec = {
  name: "hyperfine",
  description: "A command-line benchmarking tool",

  options: [
    {
      name: ["--warmup", "-w"],
      description:
        "Perform warmupruns (number) before the actual benchmarking starts",
      args: {
        name: "NUM",
      },
    },
    {
      name: ["--min-runs", "-m"],
      description: "Perform at least NUM runs for each command",
      args: {
        name: "NUM",
        default: "10",
      },
    },
    {
      name: ["--max-runs", "-M"],
      description:
        "Perform at most NUM runs for each command. Default: no limit",
      args: {
        name: "NUM",
      },
    },
    {
      name: ["--runs", "-r"],
      description: "Perform exactly NUM runs for each command",
      args: {
        name: "NUM",
      },
    },
    {
      name: ["--setup", "-s"],
      description: "Execute cmd once before each set of timing runs",
      args: {
        name: "CMD",
        isCommand: true,
      },
      isRepeatable: false,
    },
    {
      name: ["--prepare", "-p"],
      description:
        "Execute cmd before each timing run. This is useful for clearing disk caches, for example",
      args: {
        name: "CMD ...",
        isCommand: true,
      },
    },
    {
      name: ["--cleanup", "-c"],
      description:
        "Execute cmd after the completion of all benchmarking runs for each individual command to be benchmarked",
      args: {
        name: "CMD",
        isCommand: true,
      },
    },
    {
      name: ["--parameter-scan", "-P"],
      description:
        "Perform benchmark runs for each value in the range min..max",
      args: [
        {
          name: "VAR",
        },
        {
          name: "MIN",
        },
        {
          name: "MAX",
        },
      ],
    },
    {
      name: ["--parameter-step-size", "-D"],
      description:
        "This argument requires --parameter-scan to be specified as well. Traverse the range min..max in steps of delta",
      args: {
        name: "delta",
      },
      dependsOn: ["--parameter-scan", "-P"],
    },
    {
      name: ["--parameter-list", "-L"],
      description:
        "Perform benchmark runs for each value in the comma-separated list of values",
      args: [
        {
          name: "VAR",
        },
        {
          name: "VALS",
        },
      ],
    },
    {
      name: "--style",
      description: "Set output style type",
      args: {
        name: "STYLE",
        suggestions: [
          {
            name: "basic",
            description: "Disable output coloring and interactive elements",
          },
          {
            name: "full",
            description:
              "Enable all effects even if no interactive terminal was detected",
          },
          {
            name: "nocolor",
            description: "Keep the interactive output without any colors",
          },
          {
            name: "color",
            description: "Keep the colors without any interactive output",
          },
          {
            name: "none",
            description: "Disable all the output of the tool",
          },
        ],
      },
    },
    {
      name: ["--shell", "-S"],
      description: "Set the shell to use for executing benchmarked commands",
      args: {
        name: "SHELL",
        suggestions: [
          {
            name: "bash",
            description: "Use bash as the shell",
          },
          {
            name: "zsh",
            description: "Use zsh as the shell",
          },
          {
            name: "sh",
            description: "Use sh as the shell",
          },
          {
            name: "fish",
            description: "Use fish as the shell",
          },
          {
            name: "pwsh",
            description: "Use pwsh as the shell",
          },
          {
            name: "powershell",
            description: "Use powershell as the shell",
          },
        ],
      },
    },
    {
      name: ["--ignore-failure", "-i"],
      description: "Ignore non-zero exit codes of the benchmarked commands",
    },
    {
      name: ["--time-unit", "-u"],
      description: "Set the time unit to use for the benchmark results",
      args: {
        name: "UNIT",
        suggestions: ["millisecond", "second"],
        default: "second",
      },
    },
    {
      name: "--export-asciidoc",
      description:
        "Export the timing summary statistics as an AsciiDoc table to the given file",
      args: {
        name: "FILE",
        template: "filepaths",
      },
    },
    {
      name: "--export-csv",
      description:
        "Export the timing summary statistics as CSV to the given file",
      args: {
        name: "FILE",
        template: "filepaths",
      },
    },
    {
      name: "--export-json",
      description:
        "Export the timing summary statistics and timings of individual runs as JSON to the given file",
      args: {
        name: "FILE",
        template: "filepaths",
      },
    },
    {
      name: "--export-markdown",
      description:
        "Export the timing summary statistics as a Markdown table to the given file",
      args: {
        name: "FILE",
        template: "filepaths",
      },
    },
    {
      name: "--show-output",
      description:
        "Print the stdout and stderr of the benchmark instead of suppressing it",
    },
    {
      name: "--command-name",
      description: "Identify a command with the given name",
      args: {
        name: "NAME",
      },
    },
    {
      name: "--help",
      description: "Prints help message",
    },
    {
      name: "--version",
      description: "Shows version information",
    },
  ],
  args: {
    name: "CMD",
    description: "Command to benchmark",
    isCommand: true,
  },
};
export default completionSpec;
