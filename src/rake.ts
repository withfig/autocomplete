const completionSpec: Fig.Spec = {
  name: "rake",
  description: "A ruby build program with capabilities similar to make",
  icon: "https://avatars.githubusercontent.com/u/210414?s=48&v=4",
  args: {
    name: "targets",
    isVariadic: true,
    isOptional: true,
    generators: {
      script: ["rake", "--tasks", "--silent"],
      cache: {
        strategy: "stale-while-revalidate",
        cacheByDirectory: true,
      },
      postProcess: function (out) {
        return out.split("\n").map((line) => {
          const [name, description] = line.split("#");

          return {
            name: name.trim().slice("rake ".length),
            description: description.trim(),
          };
        });
      },
    },
  },
  options: [
    {
      name: ["-n", "--dry-run"],
      description: "Do a dry run without executing actions",
    },
    {
      name: ["-h", "-H", "--help"],
      description: "Display this help message",
    },
    {
      name: ["-I", "--libdir"],

      requiresSeparator: true,
      description: "Include LIBDIR in the search path for required modules",
      args: {
        name: "LIBDIR",
        template: "folders",
      },
    },
    {
      name: ["-P", "--prereqs"],
      description: "Display the tasks and dependencies, then exit",
    },
    {
      name: ["-q", "--quiet"],
      description: "Do not log messages to standard output",
    },
    {
      name: ["-f", "--rakefile"],

      requiresSeparator: true,
      description: "Use FILE as the rakefile",
      args: {
        name: "FILE",
        template: "filepaths",
      },
    },
    {
      name: ["-r", "--require"],

      requiresSeparator: true,
      description: "Require MODULE before executing rakefile",
      args: {
        name: "MODULE",
      },
    },
    {
      name: ["-s", "--silent"],
      description:
        "Like --quiet, but also suppresses the 'in directory' announcement",
    },
    {
      name: ["-T", "--tasks"],
      description: "Display the tasks and dependencies, then exit",
      args: {
        name: "pattern",
        isOptional: true,
      },
    },
    {
      name: ["-t", "--trace"],
      description: "Turn on invoke/execute tracing, enable full backtrace",
      args: {
        name: "output",
        isOptional: true,
      },
    },
    {
      name: ["-v", "--verbose"],
      description: "Log message to standard output (default)",
    },
    {
      name: ["-V", "--version"],
      description: "Display the program version",
    },
  ],
};

export default completionSpec;
