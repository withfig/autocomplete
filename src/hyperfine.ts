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
      },
      isRepeatable: false,
    },
    {
      name: ["--prepare", "-p"],
      description:
        "Execute cmd before each timing run. This is useful for clearing disk caches, for example",
      args: {
        name: "CMD ...",
        isVariadic: true,
      },
    },
    {
      name: ["--cleanup", "-c"],
      description:
        "Execute cmd after the completion of all benchmarking runs for each individual command to be benchmarked",
      args: {
        name: "CMD",
      },
    },
  ],
  // Only uncomment if hyperfine takes an argument
  args: {
    name: "CMD",
    description: "Command to benchmark",
    isCommand: true,
  },
};
export default completionSpec;
