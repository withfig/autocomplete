const completionSpec: Fig.Spec = {
  name: "rspec",
  description:
    "Behaviour Driven Development for Ruby. Making TDD Productive and Fun",
  icon: "https://rspec.info/images/logo.png",
  args: {
    name: "file",
    description: "The file to run",
    default: "./spec",
    isVariadic: true,
    generators: {
      // TODO: Add custom generator that will suggest line numbers / test scopes
      template: ["filepaths", "folders"],
    },
  },
  options: [
    {
      name: "-I",
      args: { name: "PATH" },
      description:
        "Specify PATH to add to $LOAD_PATH (may be used more than once)",
    },
    {
      name: ["-r", "--require"],
      args: { name: "PATH" },
      description: "Require a file",
    },
    {
      name: ["-O", "--options"],
      args: { name: "PATH" },
      description: "Specify the path to a custom options file",
    },
    {
      name: "order",
      description: "Run examples by the specified order type",
      args: {
        name: "TYPE",
        suggestions: [
          {
            name: "defined",
            description:
              "Examples and groups are run in the order they are defined",
          },
          {
            name: "rand",
            description: "Randomize the order of groups and examples",
          },
          { name: "random", description: "Alias for rand" },
          { name: "random:SEED", description: "E.g. --order random:123" },
          {
            name: "recently-modified",
            description: "Run the most recently modified files first",
          },
        ],
      },
    },
    {
      name: "--seed",
      args: {
        name: "SEED",
      },
    },
    {
      name: ["--bisect[=verbose]", "--bisect"],
      description:
        "Repeatedly runs the suite in order to isolate the failures to the smallest reproducible case",
    },
    {
      name: "--no-fail-fast",
      exclusiveOn: ["--fail-fast"],
    },
    {
      name: ["--fail-fast", "--fail-fast=COUNT"],
      exclusiveOn: ["--no-fail-fast"],
      description: "You can add =COUNT, for it to change when to abort",
    },
    {
      name: "--failure-exit-code",
      args: { name: "CODE" },
      description: "Override the exit code used when there are failing specs",
    },
    {
      name: "--error-exit-code",
      args: { name: "CODE" },
      description:
        "Override the exit code used when there are errors loading or running specs outside of examples",
    },
    {
      name: ["-X", "--drb"],
      exclusiveOn: ["--no-drb"],
      description: "Run examples via DRb",
    },
    {
      name: "--no-drb",
      exclusiveOn: ["-W"],
      description: "Don't run examples via DRb",
    },
    {
      name: "--drb-port",
      args: { name: "PORT" },
      dependsOn: ["-X"],
      description: "Port to connect to the DRb server",
    },

    // ------------------------- Output Options -------------------------
    {
      name: ["-f", "--format"],
      description: "Choose a formatter",
      args: {
        name: "formatter",
        default: "progress",
        suggestions: [
          { name: "progress", displayName: "Progress (default - dots)" },
          {
            name: "documentation",
            displayName: "Documentation (group and example names)",
          },
          { name: "json", displayName: "JSON" },
          {
            name: "failures",
            displayName:
              'Failures ("file:line:reason", suitable for editors integration) custom formatter class name',
          },
        ],
      },
    },
    {
      name: ["-o", "--out"],
      description:
        "Write output to a file instead of $stdout. This option applies to the previously specified --format, or the default format if no format is specified",
      args: {
        name: "file",
      },
    },
    {
      name: "--deprecation-out",
      description: "Write deprecation warnings to a file instead of $stderr",
      args: { name: "file" },
    },
    {
      name: ["--force-color", "--force-colour"],
      description:
        "Force the output to be in color, even if the output is not a TTY",
    },
    {
      name: ["--no-color", "--no-colour"],
      description:
        "Force the output to not be in color, even if the output is a TTY",
    },
    {
      name: ["-b", "--backtrace"],
      description: "Enable full backtrace",
    },
    {
      name: "--dry-run",
      description:
        "Print the formatter output of your suite without running any examples or hooks",
    },
    {
      name: ["-w", "--warnings"],
      description: "Enable ruby warnings",
    },
    {
      name: "--no-profile",
      description: "Disable profiling",
      exclusiveOn: ["-p"],
    },
    {
      name: ["-p", "--profile"],
      description:
        "Enable profiling of examples and list the slowest examples (default: 10)",
      exclusiveOn: ["--no-profile"],
      args: {
        name: "COUNT",
        isOptional: true,
      },
    },

    // ------------------------- Filtering/tags -------------------------
    {
      name: "--only-failures",
      description:
        "Filter to just the examples that failed the last time they ran",
    },
    {
      name: ["-n", "--next-failure"],
      description:
        "Apply `--only-failures` and abort after one failure.  (Equivalent to `--only-failures --fail-fast --order defined`)",
    },
    {
      name: ["-P", "--pattern"],
      description: 'Load files matching pattern (default: "spec/**/*_spec.rb")',
      args: { name: "PATTERN" },
    },
    {
      name: "--exclude-pattern",
      description:
        "Load files except those matching pattern. Opposite effect of --pattern",
      args: { name: "PATTERN" },
    },
    {
      name: ["-e", "--example"],
      args: { name: "STRING" },
      description:
        "Run examples whose full nested names include STRING (may be used more than once)",
    },
    {
      name: ["-E", "--example-matches"],
      args: { name: "REGEX" },
      description:
        "Run examples whose full nested names match REGEX (may be used more than once)",
    },
    {
      name: ["-t", "--tag"],
      args: { name: "TAG", description: "TAG[:VALUE]" },
      description:
        "Run examples with the specified tag, or exclude examples by adding ~ before the tag",
    },
    {
      name: "--default-path",
      args: { name: "PATH" },
      description:
        "Set the default path where RSpec looks for examples (can be a path to a file or a directory)",
    },

    // ------------------------- Utility -------------------------
    {
      name: "--init",
      exclusiveOn: ["--version", "--help"],
      description: "Initialize your project with RSpec",
    },
    {
      name: ["--version", "-v"],
      exclusiveOn: ["--init", "--help"],
      description: "Display the version",
    },
    {
      name: ["--help", "-h"],
      exclusiveOn: ["--init", "--version"],
      description: "Show help",
    },
  ],
};

export default completionSpec;
